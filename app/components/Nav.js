'use client';

import { useEffect, useRef, useState } from 'react';

export default function Nav() {
  const navRef = useRef(null);
  const mobileNavRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      navRef.current?.classList.toggle('scrolled', window.scrollY > 40);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape' && isOpen) setIsOpen(false);
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => document.removeEventListener('keydown', onKey);
  }, [isOpen]);

  const closeNav = () => setIsOpen(false);

  const links = [
    { href: '#space', label: 'The Space' },
    { href: '#gallery', label: 'Gallery' },
    { href: '#neighborhood', label: 'Neighborhood' },
    { href: '#restaurants', label: 'Restaurants' },
    { href: '#events', label: 'Events' },
  ];

  return (
    <>
      <nav id="nav" ref={navRef} aria-label="Main navigation">
        <a href="#" className="nav-logo">Manito <em>Bungalow</em></a>
        <ul className="nav-links">
          {links.map(l => (
            <li key={l.href}><a href={l.href}>{l.label}</a></li>
          ))}
          <li><a href="#book" className="nav-book">Book Now</a></li>
        </ul>
        <a href="#book" className="nav-mobile-book">Book Now</a>
        <button
          className="nav-burger"
          aria-label="Menu"
          aria-expanded={isOpen}
          aria-controls="mobile-nav"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span /><span /><span />
        </button>
      </nav>

      <div
        id="mobile-nav"
        ref={mobileNavRef}
        className={isOpen ? 'open' : ''}
        role="dialog"
        aria-label="Mobile navigation"
        aria-hidden={!isOpen}
      >
        {links.map(l => (
          <a key={l.href} href={l.href} className="mn-link" onClick={closeNav}>{l.label}</a>
        ))}
        <a href="#book" className="mn-book" onClick={closeNav}>Book Now</a>
      </div>
    </>
  );
}
