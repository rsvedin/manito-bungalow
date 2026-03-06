'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

const blogCategories = [
  { slug: 'spokane-guide', name: 'Spokane Guide' },
  { slug: 'travel-tips', name: 'Travel Tips' },
  { slug: 'things-to-do', name: 'Things to Do' },
  { slug: 'property-updates', name: 'Property Updates' },
];

export default function Nav() {
  const navRef = useRef(null);
  const mobileNavRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [blogOpen, setBlogOpen] = useState(false);
  const dropdownTimeout = useRef(null);

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

  const handleDropdownEnter = () => {
    clearTimeout(dropdownTimeout.current);
    setBlogOpen(true);
  };

  const handleDropdownLeave = () => {
    dropdownTimeout.current = setTimeout(() => setBlogOpen(false), 150);
  };

  const links = [
    { href: '/#space', label: 'The Space' },
    { href: '/#gallery', label: 'Gallery' },
    { href: '/#neighborhood', label: 'Neighborhood' },
    { href: '/#restaurants', label: 'Restaurants' },
    { href: '/#events', label: 'Events' },
  ];

  return (
    <>
      <nav id="nav" ref={navRef} aria-label="Main navigation">
        <Link href="/" className="nav-logo">Manito <em>Bungalow</em></Link>
        <ul className="nav-links">
          {links.map(l => (
            <li key={l.href}><a href={l.href}>{l.label}</a></li>
          ))}
          <li
            className="nav-dropdown-wrap"
            onMouseEnter={handleDropdownEnter}
            onMouseLeave={handleDropdownLeave}
          >
            <Link href="/blog" className="nav-dropdown-trigger" aria-expanded={blogOpen} aria-haspopup="true">
              Blog
              <svg className="nav-dropdown-arrow" width="10" height="6" viewBox="0 0 10 6" fill="none" aria-hidden="true">
                <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
            <div className={`nav-dropdown${blogOpen ? ' open' : ''}`} role="menu">
              <Link href="/blog" className="nav-dropdown-item" role="menuitem" onClick={() => setBlogOpen(false)}>All Posts</Link>
              {blogCategories.map(c => (
                <Link key={c.slug} href={`/blog/${c.slug}`} className="nav-dropdown-item" role="menuitem" onClick={() => setBlogOpen(false)}>{c.name}</Link>
              ))}
            </div>
          </li>
          <li><Link href="/about">About</Link></li>
          <li><a href="/#book" className="nav-book">Book Now</a></li>
        </ul>
        <a href="/#book" className="nav-mobile-book">Book Now</a>
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
        <Link href="/about" className="mn-link" onClick={closeNav}>About</Link>
        <div className="mn-blog-section">
          <Link href="/blog" className="mn-link" onClick={closeNav}>Blog</Link>
          <div className="mn-blog-cats">
            {blogCategories.map(c => (
              <Link key={c.slug} href={`/blog/${c.slug}`} className="mn-blog-cat" onClick={closeNav}>{c.name}</Link>
            ))}
          </div>
        </div>
        <a href="/#book" className="mn-book" onClick={closeNav}>Book Now</a>
      </div>
    </>
  );
}
