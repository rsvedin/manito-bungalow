# Manito Bungalow

Website for Manito Bungalow — a beautifully restored 1911 craftsman bungalow on Spokane's South Hill, one block from Manito Park.

**Live site:** [manitobungalow.com](https://manitobungalow.com)

## Structure

```
├── app/                    # Next.js app router (homepage, /photos, /blog)
├── content/blog/           # Markdown blog posts (30-post SEO plan, see BLOG-PLAN.md)
├── lib/                    # Blog utilities + listing-data helpers
├── assets/
│   ├── listing-data.json   # Structured listing data scraped from Airbnb (see LISTING.md)
│   └── images/listing/     # Full-res property photos, named by room
├── scripts/build-images.mjs # prebuild: assets/images → public/images responsive WebP
├── public/                 # Static assets (generated images are gitignored)
└── LISTING.md              # Human-readable listing reference
```

## Development

```bash
npm run dev          # Local dev server
npm run build        # Static export to out/ (runs image pipeline via prebuild)
```

## Images

Property photos live in `assets/images/listing/` at full resolution, named by
room (`living-room-1-01.jpg`, …). `scripts/build-images.mjs` converts them to
responsive WebP in `public/images/` at build time — never hand-edit
`public/images/`.

## Booking

Direct bookings are powered by [Hospitable](https://hospitable.com) via the
embedded widget in the `#book` section. Amenities, sleeping arrangements, and
ratings render from `assets/listing-data.json` so the site can't drift from
the real listing.

## Deployment

Hosted on **Vercel**, auto-deployed on push to `main`. Legacy
`/blog/<slug>.html` URLs 301 to clean paths via `vercel.json`.
