'use client';

import FadeUp from './FadeUp';

const galleryImages = [
  { src: 'https://media.vrbo.com/lodging/102000000/101540000/101537200/101537115/0622d9e8.jpg?impolicy=resizecrop&rw=1800&ra=fit', alt: 'Manito Bungalow exterior — craftsman home on tree-lined street', featured: true },
  { src: 'https://media.vrbo.com/lodging/102000000/101540000/101537200/101537115/027be553.jpg?impolicy=resizecrop&rw=1200&ra=fit', alt: 'Living room with original hardwood floors and curated furnishings' },
  { src: 'https://media.vrbo.com/lodging/102000000/101540000/101537200/101537115/fd88d08c.jpg?impolicy=resizecrop&rw=1200&ra=fit', alt: 'Dining area with natural light' },
  { src: 'https://media.vrbo.com/lodging/102000000/101540000/101537200/101537115/091204fc.jpg?impolicy=resizecrop&rw=1200&ra=fit', alt: 'Dining room detail' },
  { src: 'https://media.vrbo.com/lodging/102000000/101540000/101537200/101537115/cd8b63be.jpg?impolicy=resizecrop&rw=1200&ra=fit', alt: 'Bungalow exterior view' },
];

export { galleryImages };

export default function GalleryGrid() {
  const handleClick = (index) => {
    if (window.__openLightbox) window.__openLightbox(index);
  };

  return (
    <div className="gallery-grid">
      {galleryImages.map((img, i) => (
        <FadeUp key={i} className={`gallery-item${img.featured ? ' featured' : ''}`}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={img.src}
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
