# Manito Bungalow

Website for Manito Bungalow — a beautifully restored 1920s craftsman bungalow on Spokane's South Hill, one block from Manito Park.

**Live site:** [manitobungalow.com](https://manitobungalow.com)

## Structure

```
├── index.html              # Main website (single page)
├── CNAME                   # Custom domain config for GitHub Pages
├── assets/
│   └── images/             # Local images (add property photos here)
├── index.test.js           # Unit tests (Jest + jsdom)
└── package.json
```

## Images

The site currently loads images from VRBO CDN URLs. To use local images instead:

1. Add photos to `assets/images/`
2. Update `src` attributes in `index.html` to point to `assets/images/filename.jpg`
3. Recommended: optimize images before uploading (compress to WebP or JPEG, max 1800px wide for hero, 1200px for split sections, 900px for photo strip)

## Development

```bash
# Run tests
npm test
```

## Booking

Direct bookings are powered by [Hospitable](https://hospitable.com) via an embedded widget. VRBO and Airbnb links are also provided.

## Deployment

The site is deployed via GitHub Pages from the `main` branch root. Push to `main` to deploy.
