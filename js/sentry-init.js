// Sentry Frontend Configuration
// Error tracking and performance monitoring for client-side issues

export function initSentry() {
  // Dynamically import Sentry SDK from CDN
  const script = document.createElement('script');
  script.src = 'https://cdn.jsdelivr.net/npm/@sentry/browser@7/esm/index.min.js';
  script.async = true;
  script.onload = () => {
    if (window.Sentry) {
      window.Sentry.init({
        dsn: 'YOUR_SENTRY_DSN_FRONTEND', // Replace with your actual DSN
        environment: 'production',
        release: '1.0.0',
        tracesSampleRate: 1.0,
        
        // Before sending data to Sentry
        beforeSend(event, hint) {
          // Filter out certain errors if needed
          if (event.exception) {
            const error = hint.originalException;
            // Example: Don't capture specific errors
            if (error.message && error.message.includes('chrome-extension')) {
              return null;
            }
          }
          return event;
        },
        
        integrations: [
          new window.Sentry.Replay({
            maskAllText: true,
            blockAllMedia: true,
          }),
        ],
        
        // Capture 10% of replay for error events, and 1% for regular transactions
        replaysOnErrorSampleRate: 1.0,
        replaySessionSampleRate: 0.1,
      });

      // Set user context if available
      const user = getUserContext();
      if (user) {
        window.Sentry.setUser({
          id: user.id,
          email: user.email,
          username: user.username,
        });
      }

      // Capture unhandled promise rejections
      window.addEventListener('unhandledrejection', (event) => {
        window.Sentry.captureException(event.reason);
      });

      console.log('[Sentry] Frontend error tracking initialized');
    }
  };
  document.head.appendChild(script);
}

// Get user context from local storage or session
function getUserContext() {
  try {
    const user = localStorage.getItem('integratewise_user');
    return user ? JSON.parse(user) : null;
  } catch (error) {
    return null;
  }
}

// Capture custom events
export function captureEvent(message, context = {}) {
  if (window.Sentry) {
    window.Sentry.captureMessage(message, 'info', context);
  }
}

// Capture exceptions
export function captureException(error, context = {}) {
  if (window.Sentry) {
    window.Sentry.captureException(error, { extra: context });
  }
}

export default {
  initSentry,
  captureEvent,
  captureException,
};
