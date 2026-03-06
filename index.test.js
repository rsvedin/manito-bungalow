/**
 * @jest-environment jsdom
 */

const fs = require('fs');
const path = require('path');

let doc;

beforeAll(() => {
  const html = fs.readFileSync(path.resolve(__dirname, 'index.html'), 'utf8');
  doc = new DOMParser().parseFromString(html, 'text/html');
});

// ── STRUCTURE ──────────────────────────────────────────

describe('Page structure', () => {
  test('has correct lang attribute', () => {
    expect(doc.documentElement.getAttribute('lang')).toBe('en');
  });

  test('has meta viewport for responsive design', () => {
    const viewport = doc.querySelector('meta[name="viewport"]');
    expect(viewport).not.toBeNull();
    expect(viewport.getAttribute('content')).toContain('width=device-width');
  });

  test('has meta charset', () => {
    const charset = doc.querySelector('meta[charset]');
    expect(charset).not.toBeNull();
    expect(charset.getAttribute('charset')).toBe('UTF-8');
  });

  test('has meta description', () => {
    const desc = doc.querySelector('meta[name="description"]');
    expect(desc).not.toBeNull();
    expect(desc.getAttribute('content').length).toBeGreaterThan(0);
  });

  test('has title', () => {
    expect(doc.title).toContain('Manito Bungalow');
  });

  test('has a single h1', () => {
    const h1s = doc.querySelectorAll('h1');
    expect(h1s.length).toBe(1);
    expect(h1s[0].textContent).toContain('Bungalow');
  });

  test('has main element with id', () => {
    const main = doc.querySelector('main#main-content');
    expect(main).not.toBeNull();
  });

  test('has nav element', () => {
    const nav = doc.querySelector('nav#nav');
    expect(nav).not.toBeNull();
  });

  test('has footer element', () => {
    const footer = doc.querySelector('footer#footer');
    expect(footer).not.toBeNull();
  });

  test('all sections have ids', () => {
    const expectedIds = ['hero', 'why', 'space', 'gallery', 'neighborhood', 'restaurants', 'events', 'book'];
    expectedIds.forEach(id => {
      expect(doc.getElementById(id)).not.toBeNull();
    });
  });
});

// ── ACCESSIBILITY ──────────────────────────────────────

describe('Accessibility', () => {
  test('has skip-to-content link', () => {
    const skip = doc.querySelector('.skip-link');
    expect(skip).not.toBeNull();
    expect(skip.getAttribute('href')).toBe('#main-content');
  });

  test('nav has aria-label', () => {
    const nav = doc.querySelector('nav#nav');
    expect(nav.getAttribute('aria-label')).toBe('Main navigation');
  });

  test('burger button has aria attributes', () => {
    const burger = doc.getElementById('burgerBtn');
    expect(burger).not.toBeNull();
    expect(burger.getAttribute('aria-label')).toBe('Menu');
    expect(burger.getAttribute('aria-expanded')).toBe('false');
    expect(burger.getAttribute('aria-controls')).toBe('mobile-nav');
  });

  test('mobile nav has role and aria-hidden', () => {
    const mobileNav = doc.getElementById('mobile-nav');
    expect(mobileNav.getAttribute('role')).toBe('dialog');
    expect(mobileNav.getAttribute('aria-hidden')).toBe('true');
  });

  test('all content images have alt attributes', () => {
    const images = doc.querySelectorAll('img:not(#lightbox-img)');
    images.forEach(img => {
      expect(img.hasAttribute('alt')).toBe(true);
      expect(img.getAttribute('alt').length).toBeGreaterThan(0);
    });
  });

  test('decorative SVGs have aria-hidden', () => {
    const svgs = doc.querySelectorAll('.amenity-pill svg');
    svgs.forEach(svg => {
      expect(svg.getAttribute('aria-hidden')).toBe('true');
    });
  });

  test('booking iframe has title attribute', () => {
    const iframe = doc.getElementById('booking-iframe');
    expect(iframe).not.toBeNull();
    expect(iframe.getAttribute('title')).toBeTruthy();
  });
});

// ── SECURITY ───────────────────────────────────────────

describe('Security', () => {
  test('external links have rel="noopener noreferrer"', () => {
    const externalLinks = doc.querySelectorAll('a[target="_blank"]');
    externalLinks.forEach(link => {
      const rel = link.getAttribute('rel') || '';
      expect(rel).toContain('noopener');
      expect(rel).toContain('noreferrer');
    });
  });

  test('iframe has restrictive sandbox', () => {
    const iframe = doc.getElementById('booking-iframe');
    const sandbox = iframe.getAttribute('sandbox');
    expect(sandbox).toBeTruthy();
    expect(sandbox).toContain('allow-scripts');
    expect(sandbox).toContain('allow-same-origin');
    expect(sandbox).not.toContain('allow-popups');
    expect(sandbox).not.toContain('allow-forms');
  });

  test('iframe src uses HTTPS', () => {
    const iframe = doc.getElementById('booking-iframe');
    expect(iframe.getAttribute('src')).toMatch(/^https:\/\//);
  });

  test('no inline event handlers (onclick, onload, etc.)', () => {
    const dangerousAttrs = ['onclick', 'onload', 'onerror', 'onmouseover', 'onfocus'];
    dangerousAttrs.forEach(attr => {
      const els = doc.querySelectorAll(`[${attr}]`);
      expect(els.length).toBe(0);
    });
  });

  test('has referrer policy meta tag', () => {
    const ref = doc.querySelector('meta[name="referrer"]');
    expect(ref).not.toBeNull();
    expect(ref.getAttribute('content')).toBe('strict-origin-when-cross-origin');
  });

  test('no API keys or tokens in HTML source', () => {
    const html = doc.documentElement.outerHTML;
    // The Hospitable widget ID is a public embed identifier, not a secret
    expect(html).not.toMatch(/sk[-_][a-zA-Z0-9]{20,}/);
    expect(html).not.toMatch(/api[_-]?key\s*[:=]\s*["'][^"']+["']/i);
    expect(html).not.toMatch(/secret[_-]?key\s*[:=]\s*["'][^"']+["']/i);
    expect(html).not.toMatch(/password\s*[:=]\s*["'][^"']+["']/i);
  });

  test('all external resources use HTTPS', () => {
    const srcs = [
      ...doc.querySelectorAll('[src]'),
      ...doc.querySelectorAll('link[href]')
    ];
    srcs.forEach(el => {
      const url = el.getAttribute('src') || el.getAttribute('href');
      if (url && url.startsWith('http:')) {
        fail(`Non-HTTPS resource found: ${url}`);
      }
    });
  });
});

// ── BOOKING WIDGET ─────────────────────────────────────

describe('Booking widget', () => {
  test('Hospitable iframe exists', () => {
    const iframe = doc.getElementById('booking-iframe');
    expect(iframe).not.toBeNull();
  });

  test('iframe points to Hospitable', () => {
    const iframe = doc.getElementById('booking-iframe');
    expect(iframe.getAttribute('src')).toContain('booking.hospitable.com');
  });

  test('iframe has responsive width', () => {
    const iframe = doc.getElementById('booking-iframe');
    const style = iframe.getAttribute('style');
    expect(style).toContain('width: 100%');
  });

  test('iframe has lazy loading', () => {
    const iframe = doc.getElementById('booking-iframe');
    expect(iframe.getAttribute('loading')).toBe('lazy');
  });

  test('VRBO button still present', () => {
    const vrboLink = doc.querySelector('a.btn-primary[href*="vrbo.com"]');
    expect(vrboLink).not.toBeNull();
    expect(vrboLink.textContent).toContain('VRBO');
  });

  test('Airbnb button still present', () => {
    const airbnbLink = doc.querySelector('a.btn-outline[href*="airbnb.com"]');
    expect(airbnbLink).not.toBeNull();
    expect(airbnbLink.textContent).toContain('Airbnb');
  });
});

// ── NAVIGATION ─────────────────────────────────────────

describe('Navigation', () => {
  test('has all nav links', () => {
    const navLinks = doc.querySelectorAll('.nav-links a');
    expect(navLinks.length).toBe(6);
    const hrefs = Array.from(navLinks).map(a => a.getAttribute('href'));
    expect(hrefs).toContain('#space');
    expect(hrefs).toContain('#gallery');
    expect(hrefs).toContain('#neighborhood');
    expect(hrefs).toContain('#restaurants');
    expect(hrefs).toContain('#events');
    expect(hrefs).toContain('#book');
  });

  test('mobile nav has matching links', () => {
    const mobileLinks = doc.querySelectorAll('#mobile-nav a');
    expect(mobileLinks.length).toBe(6);
  });

  test('Book Now button exists in nav', () => {
    const bookBtn = doc.querySelector('.nav-book');
    expect(bookBtn).not.toBeNull();
    expect(bookBtn.getAttribute('href')).toBe('#book');
  });
});

// ── RESPONSIVE CSS ─────────────────────────────────────

describe('Responsive design', () => {
  test('has mobile breakpoint styles', () => {
    const styles = doc.querySelectorAll('style');
    const css = Array.from(styles).map(s => s.textContent).join('');
    expect(css).toContain('max-width: 768px');
    expect(css).toContain('max-width: 480px');
    expect(css).toContain('max-width: 1024px');
  });

  test('has responsive iframe styles in mobile breakpoints', () => {
    const styles = doc.querySelectorAll('style');
    const css = Array.from(styles).map(s => s.textContent).join('');
    expect(css).toContain('#booking-iframe');
  });

  test('has reduced motion media query', () => {
    const styles = doc.querySelectorAll('style');
    const css = Array.from(styles).map(s => s.textContent).join('');
    expect(css).toContain('prefers-reduced-motion');
  });

  test('images use lazy loading', () => {
    const lazyImages = doc.querySelectorAll('img[loading="lazy"]');
    expect(lazyImages.length).toBeGreaterThan(0);
  });
});

// ── CONTENT ────────────────────────────────────────────

describe('Content integrity', () => {
  test('has 6 restaurant cards', () => {
    expect(doc.querySelectorAll('.rc').length).toBe(6);
  });

  test('has 6 event cards', () => {
    expect(doc.querySelectorAll('.ev').length).toBe(6);
  });

  test('has 4 neighborhood cards', () => {
    expect(doc.querySelectorAll('.nbhd').length).toBe(4);
  });

  test('has 8 amenity pills', () => {
    expect(doc.querySelectorAll('.amenity-pill').length).toBe(8);
  });

  test('has 3 photo strip images', () => {
    expect(doc.querySelectorAll('.photo-strip-item').length).toBe(3);
  });

  test('footer has all 4 columns', () => {
    expect(doc.querySelectorAll('.footer-inner > div').length).toBe(4);
  });

  test('contact email is present', () => {
    const mailto = doc.querySelector('a[href="mailto:rsvedin@gmail.com"]');
    expect(mailto).not.toBeNull();
  });
});

// ── GALLERY & LIGHTBOX ─────────────────────────────────

describe('Gallery', () => {
  test('gallery section exists', () => {
    const gallery = doc.getElementById('gallery');
    expect(gallery).not.toBeNull();
  });

  test('has gallery grid with items', () => {
    const items = doc.querySelectorAll('.gallery-item');
    expect(items.length).toBeGreaterThanOrEqual(5);
  });

  test('has a featured gallery item', () => {
    const featured = doc.querySelector('.gallery-item.featured');
    expect(featured).not.toBeNull();
  });

  test('gallery items have data-lightbox attributes', () => {
    const items = doc.querySelectorAll('.gallery-item[data-lightbox]');
    expect(items.length).toBeGreaterThanOrEqual(5);
  });

  test('gallery images have descriptive alt text', () => {
    const imgs = doc.querySelectorAll('.gallery-item img');
    imgs.forEach(img => {
      expect(img.getAttribute('alt').length).toBeGreaterThan(10);
    });
  });

  test('gallery images use lazy loading', () => {
    const imgs = doc.querySelectorAll('.gallery-item img');
    imgs.forEach(img => {
      expect(img.getAttribute('loading')).toBe('lazy');
    });
  });

  test('photo strip items are clickable (have cursor pointer)', () => {
    const css = Array.from(doc.querySelectorAll('style')).map(s => s.textContent).join('');
    expect(css).toContain('.photo-strip-item');
    expect(css).toContain('cursor: pointer');
  });
});

describe('Lightbox', () => {
  test('lightbox element exists', () => {
    const lb = doc.getElementById('lightbox');
    expect(lb).not.toBeNull();
  });

  test('lightbox has role="dialog"', () => {
    const lb = doc.getElementById('lightbox');
    expect(lb.getAttribute('role')).toBe('dialog');
  });

  test('lightbox starts hidden', () => {
    const lb = doc.getElementById('lightbox');
    expect(lb.getAttribute('aria-hidden')).toBe('true');
    expect(lb.classList.contains('open')).toBe(false);
  });

  test('lightbox has close button with aria-label', () => {
    const close = doc.querySelector('.lightbox-close');
    expect(close).not.toBeNull();
    expect(close.getAttribute('aria-label')).toBeTruthy();
  });

  test('lightbox has prev/next navigation', () => {
    const prev = doc.querySelector('.lightbox-prev');
    const next = doc.querySelector('.lightbox-next');
    expect(prev).not.toBeNull();
    expect(next).not.toBeNull();
    expect(prev.getAttribute('aria-label')).toBeTruthy();
    expect(next.getAttribute('aria-label')).toBeTruthy();
  });

  test('lightbox has image element', () => {
    const img = doc.getElementById('lightbox-img');
    expect(img).not.toBeNull();
  });

  test('lightbox has counter element', () => {
    const counter = doc.getElementById('lightbox-counter');
    expect(counter).not.toBeNull();
  });
});
