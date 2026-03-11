/**
 * Third-party integrations — Calendly (demo booking), Google Apps Script (contact form).
 * Override via env vars in .env or Cloudflare Pages build settings.
 */
export const CALENDLY_URL =
  import.meta.env.VITE_CALENDLY_URL ?? "https://calendly.com/connect-integratewise/new-meeting";
export const GOOGLE_FORM_SCRIPT_URL =
  import.meta.env.VITE_GOOGLE_FORM_SCRIPT_URL ??
  "https://script.google.com/macros/s/AKfycbyc8AuOFDbcbsio9VOsgGvbqI3MzlQjbzc3UWTtwAy5rSsxUR0RmZvuF1XICTLdLa7i/exec";

export const hasCalendly = Boolean(CALENDLY_URL);
export const hasGoogleFormScript = Boolean(GOOGLE_FORM_SCRIPT_URL);
