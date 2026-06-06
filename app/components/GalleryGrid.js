'use client';

import FadeUp from './FadeUp';
import { imgSrc, imgSrcSet } from '../../lib/listing';

// Curated homepage gallery — the full 67-photo set lives at /photos.
const curated = [
  { src: '/images/hero-front-of-house-1600.webp', alt: 'Manito Bungalow — restored 1911 craftsman exterior', featured: true },
  { base: 'living-room-1-03', alt: 'Living room fireplace detail' },
  { base: 'dining-area-01', alt: 'Farmhouse dining table for six by a picture window' },
  { base: 'full-kitchen-01', alt: 'Fully stocked kitchen with butcher block counters' },
  { base: 'bedroom-2-01', alt: 'King bedroom — the guest favorite' },
  { base: 'bedroom-3-01', alt: 'Third bedroom with two double beds' },
  { base: 'living-room-2-01', alt: 'Upstairs second living room with 65-inch TV' },
  { base: 'full-bathroom-1-01', alt: 'Full bathroom with modern vanity' },
  { base: 'exterior-01', alt: 'The bungalow in winter — cozy in every season' },
];

// Lightbox consumes { src, alt }.
const galleryImages = curated.map(img => ({ ...img, src: img.src || imgSrc(img.base, 1200) }));

export { galleryImages };

export default function GalleryGrid() {
  const handleClick = (index) => {
    if (window.__openLightbox) window.__openLightbox(index);
  };

  return (
    <div className="gallery-grid">
      {galleryImages.map((img, i) => (
        <FadeUp key={img.base || img.src} className={`gallery-item${img.featured ? ' featured' : ''}`}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={img.src || imgSrc(img.base, img.featured ? 1200 : 800)}
            srcSet={img.base ? imgSrcSet(img.base) : undefined}
            sizes={img.featured ? '(max-width: 768px) 100vw, 60vw' : '(max-width: 768px) 50vw, 30vw'}
            alt={img.alt}
            loading="lazy"
            onClick={() => handleClick(i)}
            style={{ cursor: 'pointer' }}
          />
        </FadeUp>
      ))}
    </div>
  );
}
