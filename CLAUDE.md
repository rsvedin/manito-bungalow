# Manito Bungalow

## STATUS.md convention

This project is part of Ryan's projects dashboard. At the **end of every work
session**, update `STATUS.md` in this folder:

- Bump `status`, `priority`, `next_step`, `blocker`, `one_liner` if they changed
- Add a dated bullet to `## Log` summarizing what you did
- Keep it terse — one or two sentences per log entry

Then run `python3 ~/Documents/Projects/.dashboard/scan.py` to refresh the dashboard.

## Overview
SEO-optimized marketing site for a Spokane vacation rental. Next.js 16 with React 19, Remark-based Markdown blog, deployed via GitHub Pages.

## Commands
```bash
npm run dev          # Local dev server
npm run build        # Production build
npm test             # Jest + jsdom tests
```

## Structure
- `app/` — Next.js app directory (pages, layouts)
- `content/` — Markdown blog posts
- `lib/` — Blog utilities (gray-matter, remark)
- `public/` — Static assets
- `BLOG-PLAN.md` — 30-post SEO content plan with batches

## Deployment
Push to `main` branch to deploy via GitHub Pages.
