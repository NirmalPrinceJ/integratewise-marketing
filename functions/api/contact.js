// Cloudflare Pages Function: POST /api/contact
// Sends form submissions via Web3Forms (free, no signup required)
// Get your access key at https://web3forms.com

export async function onRequestPost(context) {
  try {
    const body = await context.request.json();
    
    // Web3Forms API
    const WEB3FORMS_ACCESS_KEY = context.env.WEB3FORMS_ACCESS_KEY || 'YOUR_ACCESS_KEY';
    
    const payload = {
      access_key: WEB3FORMS_ACCESS_KEY,
      name: body.name || 'Unknown',
      email: body.email || 'No email provided',
      company: body.company || '',
      message: body.message || '',
      subject: `New Request Access from ${body.name || 'Unknown'}`,
      from_name: 'IntegrateWise Website',
    };
    
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
    
    const result = await response.json();
    
    if (result.success) {
      return new Response(JSON.stringify({ success: true, message: 'Form submitted successfully' }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      });
    } else {
      return new Response(JSON.stringify({ success: false, message: 'Submission failed' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }
  } catch (error) {
    return new Response(JSON.stringify({ success: false, message: 'Server error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
