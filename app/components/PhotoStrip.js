'use client';

import { imgSrc, imgSrcSet } from '../../lib/listing';

const photos = [
  { base: 'dining-area-02', alt: 'Dining area' },
  { base: 'full-kitchen-02', alt: 'Kitchen detail' },
  { base: 'exterior-02', alt: 'Back deck with outdoor seating' },
];

export default function PhotoStrip() {
  return (
    <div className="photo-strip">
      {photos.map((p) => (
        <div key={p.base} className="photo-strip-item">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={imgSrc(p.base, 800)} srcSet={imgSrcSet(p.base)} sizes="(max-width: 768px) 100vw, 33vw" alt={p.alt} loading="lazy" />
        </div>
      ))}
    </div>
  );
}
