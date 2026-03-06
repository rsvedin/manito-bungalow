# Manito Bungalow

Website for Manito Bungalow — a beautifully restored 1920s craftsman bungalow on Spokane's South Hill, one block from Manito Park.

**Live site:** [manitobungalow.com](https://manitobungalow.com)

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **UI:** React 19
- **Styling:** Global CSS + inline styles
- **Testing:** Jest + React Testing Library
- **Fonts:** Cormorant Garamond (serif), Jost (sans-serif)

## Structure

```
├── app/
│   ├── components/
│   │   ├── Nav.js              # Navigation with mobile menu
│   │   ├── FadeUp.js           # Scroll animation wrapper
│   │   ├── GalleryGrid.js      # Photo gallery component
│   │   ├── Lightbox.js         # Full-size image viewer
│   │   └── PhotoStrip.js       # Image strip display
│   ├── layout.js               # Root layout with metadata
│   ├── page.js                 # Main landing page
│   ├── globals.css             # Global styles
│   └── favicon.ico
├── public/
│   └── CNAME                   # Custom domain config
├── assets/images/              # Local images (add property photos here)
├── package.json
├── next.config.mjs
└── jsconfig.json
```

## Development

```bash
# Install dependencies
npm install

# Run dev server
npm run dev

# Run tests
npm test

# Production build
npm run build
npm start
```

## Images

The site currently loads images from VRBO CDN URLs. To use local images instead:

1. Add photos to `assets/images/`
2. Update `src` attributes in the relevant components under `app/components/`
3. Recommended: optimize images before uploading (compress to WebP or JPEG, max 1800px wide for hero, 1200px for split sections, 900px for photo strip)

## Booking

Direct bookings are powered by [Hospitable](https://hospitable.com) via an embedded widget. VRBO and Airbnb links are also provided.

## Deployment

The site is deployed via GitHub Pages from the `main` branch. Push to `main` to deploy.
