'use client';

const photos = [
  { src: 'https://media.vrbo.com/lodging/102000000/101540000/101537200/101537115/fd88d08c.jpg?impolicy=resizecrop&rw=900&ra=fit', alt: 'Dining area' },
  { src: 'https://media.vrbo.com/lodging/102000000/101540000/101537200/101537115/091204fc.jpg?impolicy=resizecrop&rw=900&ra=fit', alt: 'Dining' },
  { src: 'https://media.vrbo.com/lodging/102000000/101540000/101537200/101537115/cd8b63be.jpg?impolicy=resizecrop&rw=900&ra=fit', alt: 'Exterior' },
];

export default function PhotoStrip() {
  const handleClick = (i) => {
    // Map to gallery images index (photo strip images start at index 2 in gallery)
    if (window.__openLightbox) window.__openLightbox(i + 2);
  };

  return (
    <div className="photo-strip">
      {photos.map((p, i) => (
        <div key={i} className="photo-strip-item" onClick={() => handleClick(i)}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={p.src} alt={p.alt} loading="lazy" />
        </div>
      ))}
    </div>
  );
}
