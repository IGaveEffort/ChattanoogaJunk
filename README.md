# Chattanooga Junk Removal Pro Site

This is a polished multi-page Next.js site generated from your uploaded markdown content.

## Included
- Multi-page routing for all uploaded markdown pages
- SEO metadata per page
- LocalBusiness + FAQ structured data
- Contact / quote form UI
- `/api/quote` placeholder endpoint
- `sitemap.ts` and `robots.ts`
- Mobile responsive layout
- Internal linking for services and locations

## Before deploying
Open `lib/data.js` and replace:
- `domain`
- `phoneDisplay`
- `phoneHref`
- `email`

## Run locally
```bash
npm install
npm run dev
```

## Deploy
Deploy directly to Vercel after updating config values.

## Suggested next upgrades
- Connect the form to Resend, Formspree, or Zapier
- Add real testimonials
- Add before/after photos
- Add Google Business Profile review embeds
- Add city-specific trust content
- Add analytics and call tracking


## Notes
This fixed build removes path-alias dependency and uses relative imports for maximum compatibility.
