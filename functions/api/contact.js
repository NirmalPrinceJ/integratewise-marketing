// Cloudflare Pages Function: POST /api/contact
// Uses Cloudflare Mail Channels API (free for Workers)

import * as Sentry from '@sentry/serverless';

// Initialize Sentry for backend error tracking
Sentry.init({
  dsn: globalThis.SENTRY_DSN_BACKEND || 'YOUR_SENTRY_DSN_BACKEND',
  environment: globalThis.SENTRY_ENVIRONMENT || 'production',
  release: globalThis.SENTRY_RELEASE || '1.0.0',
  tracesSampleRate: 1.0,
});

export async function onRequestPost(context) {
  try {
    const body = await context.request.json();
    
    const { name, email, company, message } = body;
    
    // Validate required fields
    if (!name || !email) {
      return new Response(JSON.stringify({ success: false, message: 'Name and email are required' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }
    
    // Send email via Mail Channels (free for Cloudflare Workers)
    const emailResponse = await fetch('https://api.mailchannels.net/tx/v1/send', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        personalizations: [
          {
            to: [{ email: 'connect@integratewise.ai', name: 'IntegrateWise' }],
          },
        ],
        from: {
          email: 'noreply@integratewise.ai',
          name: 'IntegrateWise Website',
        },
        reply_to: {
          email: email,
          name: name,
        },
        subject: `New Request Access from ${name}`,
        content: [
          {
            type: 'text/plain',
            value: `
New Request Access Submission
-----------------------------
Name: ${name}
Email: ${email}
Company: ${company || 'Not provided'}
Message: ${message || 'No message provided'}

---
Sent from integratewise.ai
            `.trim(),
          },
          {
            type: 'text/html',
            value: `
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background: #0C0C0C; color: #fff; padding: 20px; border-radius: 8px 8px 0 0; }
    .content { background: #f9f9f9; padding: 20px; border: 1px solid #e0e0e0; }
    .field { margin-bottom: 12px; }
    .label { font-weight: 600; color: #555; }
    .value { margin-top: 4px; }
    .footer { text-align: center; padding: 16px; font-size: 12px; color: #888; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h2 style="margin:0;">New Request Access</h2>
    </div>
    <div class="content">
      <div class="field">
        <div class="label">Name</div>
        <div class="value">${name}</div>
      </div>
      <div class="field">
        <div class="label">Email</div>
        <div class="value"><a href="mailto:${email}">${email}</a></div>
      </div>
      <div class="field">
        <div class="label">Company</div>
        <div class="value">${company || 'Not provided'}</div>
      </div>
      <div class="field">
        <div class="label">Message</div>
        <div class="value">${message || 'No message provided'}</div>
      </div>
    </div>
    <div class="footer">
      Sent from integratewise.ai
    </div>
  </div>
</body>
</html>
            `.trim(),
          },
        ],
      }),
    });
    
    if (emailResponse.ok || emailResponse.status === 202) {
      return new Response(JSON.stringify({ success: true, message: 'Request received successfully' }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      });
    } else {
      const errorText = await emailResponse.text();
      console.error('MailChannels error:', errorText);
      Sentry.captureException(new Error(`MailChannels error: ${errorText}`));
      return new Response(JSON.stringify({ success: false, message: 'Failed to send email' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      });
    }
  } catch (error) {
    console.error('Contact form error:', error);
    Sentry.captureException(error);
    return new Response(JSON.stringify({ success: false, message: 'Server error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
