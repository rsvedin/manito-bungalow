'use client';

import { useEffect, useState } from 'react';
import { rating } from '../../lib/listing';

// Persistent booking CTAs: sticky bottom bar on mobile, floating pill on
// desktop — both appear once the visitor scrolls past the hero.
export default function BookBars() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const hero = document.getElementById('hero');
    if (!hero) return;
    const obs = new IntersectionObserver(([e]) => setShow(!e.isIntersecting), { threshold: 0.1 });
    obs.observe(hero);
    return () => obs.disconnect();
  }, []);

  if (!show) return null;

  return (
    <>
      <a href="#book" className="book-bar-mobile">
        <span className="book-bar-rating">★ {rating.overall} · {rating.count} reviews</span>
        <span className="book-bar-cta">Check dates</span>
      </a>
      <a href="#book" className="book-pill-desktop">Book Direct &amp; Save</a>
    </>
  );
}
