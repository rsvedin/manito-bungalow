'use client';

import { useEffect, useState, useCallback } from 'react';

export default function Lightbox({ images }) {
  const [isOpen, setIsOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const open = useCallback((i) => {
    setIndex(i);
    setIsOpen(true);
  }, []);

  const close = useCallback(() => setIsOpen(false), []);
  const prev = useCallback(() => setIndex(i => (i - 1 + images.length) % images.length), [images.length]);
  const next = useCallback(() => setIndex(i => (i + 1) % images.length), [images.length]);

  useEffect(() => {
    if (!isOpen) return;
    document.body.style.overflow = 'hidden';
    const onKey = (e) => {
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    document.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', onKey);
    };
  }, [isOpen, close, prev, next]);

  // Expose open function via window for gallery/photo-strip clicks
  useEffect(() => {
    window.__openLightbox = open;
    return () => { delete window.__openLightbox; };
  }, [open]);

  if (!isOpen) return null;

  return (
    <div
      className="lightbox open"
      role="dialog"
      aria-label="Photo viewer"
      onClick={(e) => { if (e.target === e.currentTarget) close(); }}
    >
      <button className="lightbox-close" aria-label="Close photo viewer" onClick={close}>&times;</button>
      <button className="lightbox-nav lightbox-prev" aria-label="Previous photo" onClick={prev}>&#8249;</button>
      <button className="lightbox-nav lightbox-next" aria-label="Next photo" onClick={next}>&#8250;</button>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img className="lightbox-img" src={images[index]?.src} alt={images[index]?.alt} />
      <div className="lightbox-counter">{index + 1} / {images.length}</div>
    </div>
  );
}
