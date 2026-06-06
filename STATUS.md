---
status: in-progress
priority: medium
one_liner: "SEO-driven Next.js marketing site + direct-booking funnel for Manito Bungalow vacation rental in Spokane."
next_step: "Add 3-5 guest review quotes to ReviewsStrip; Ryan: test booking through widget, re-point GVR to self-hosted site; then Batch 2 blog posts."
blocker: null
stack: [Next.js, React 19, Remark, Vercel, Hospitable]
tags: [web, rental, seo]
---

## Context
Website for Manito Bungalow — a beautifully restored 1911 craftsman bungalow on Spokane's South Hill, one block from Manito Park. Next.js site hosted on Vercel (auto-deploy on push to main — NOT GitHub Pages, despite what old docs said). Direct bookings via embedded Hospitable widget; site content renders from scraped Airbnb listing data (assets/listing-data.json). 30 SEO blog posts planned; Batch 1 (10) shipped.

## Log
- 2026-06-06: Major rebuild shipped LIVE. Scraped full Airbnb listing (LISTING.md + 67 room-labeled full-res photos). Killed legacy index.html: homepage now Next.js with retouched hero, amenities/sleeping from listing data, ratings strip, book-direct pitch; new /photos page (all 67 photos by room); 24 blog CTAs repointed direct-first; legacy .html URLs 301 via vercel.json. Discovered hosting is Vercel, not GitHub Pages. Hospitable cleanup: Ryan deleted hosted .rentals site; GVR needs re-pointing (showed wrong property name "Greenlake craftsman", then "Site not found").
- 2026-04-19: Auto-scaffolded by dashboard scanner. Edit this file to reflect reality.
- 2026-04-18: Audit — confirmed Batch 1 (10 SEO blog posts) shipped. Recent commits show nav fixes, Gonzaga cover image, clickable tags, and filter buttons. Stack corrected to Next.js + React 19. Next step set to Batch 2 blog content. Status remains in-progress.
