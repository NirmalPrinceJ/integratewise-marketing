# IntegrateWise Marketing Website

Landing page for [integratewise.ai](https://integratewise.ai).

## Structure

```
/
├── index.html          # Main entry point
├── assets/             # Compiled JS & CSS bundles
└── images/             # Images, logos, favicons
```

## Features

- **Favicon**: Multi-size favicon (ICO, PNG 32x32, PNG 16x16, Apple Touch Icon)
- **Google Calendar Appointments**: "Book Demo" buttons redirect to Google Calendar scheduling
- **SEO**: Open Graph & Twitter Card meta tags
- **Content**: "Context" terminology (not "truth") for brand consistency

## Deployment

### Firebase Hosting

```bash
firebase deploy --only hosting:website
```

### Static Hosting

Upload the entire directory to any static hosting provider (Netlify, Vercel, Cloudflare Pages, etc.).

## Google Calendar Appointments

To configure the booking link:

1. Go to [Google Calendar Appointments](https://calendar.google.com/calendar/appointments)
2. Create an appointment schedule
3. Copy the scheduling page URL
4. Replace `GOOGLE_CALENDAR_APPOINTMENTS_URL` in `index.html`

## License

Copyright 2024-2026 IntegrateWise LLP
