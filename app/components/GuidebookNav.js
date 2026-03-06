'use client';
import { useState, useEffect } from 'react';

export default function GuidebookNav({ sections, variant = 'guide' }) {
  const [active, setActive] = useState('');
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter(e => e.isIntersecting);
        if (visible.length > 0) {
          setActive(visible[0].target.id);
        }
      },
      { rootMargin: '-80px 0px -60% 0px', threshold: 0 }
    );

    sections.forEach(s => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sections]);

  const handleClick = (id) => {
    setOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <nav className="gb-nav" aria-label="Guidebook navigation">
      <div className="gb-nav-inner">
        <a href={variant === 'welcome' ? '/' : undefined} className="gb-nav-logo">
          Manito Bungalow
          <span className="gb-nav-sub">Guest Guide</span>
        </a>
        <button
          className={`gb-nav-toggle ${open ? 'open' : ''}`}
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-label="Toggle navigation"
        >
          <span /><span /><span />
        </button>
        <ul className={`gb-nav-links ${open ? 'open' : ''}`}>
          {sections.map(s => (
            <li key={s.id}>
              <button
                className={`gb-nav-link ${active === s.id ? 'active' : ''}`}
                onClick={() => handleClick(s.id)}
              >
                {s.icon} {s.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
