'use client';

import { useMemo } from 'react';
import Lightbox from '../components/Lightbox';
import { photoRooms, imgSrc, imgSrcSet } from '../../lib/listing';

export default function PhotosGallery() {
  // Flat list for the lightbox; rooms render as titled sections.
  const flat = useMemo(
    () => photoRooms.flatMap(r => r.photos.map(p => ({ src: imgSrc(p.base, 1200), alt: p.alt }))),
    [],
  );

  let offset = 0;
  return (
    <>
      {photoRooms.map(room => {
        const start = offset;
        offset += room.photos.length;
        return (
          <section key={room.room} className="photos-room">
            <h2>{room.room}<span>{room.photos.length}</span></h2>
            <div className="photos-room-grid">
              {room.photos.map((p, i) => (
                <button
                  key={p.base}
                  type="button"
                  className="photos-cell"
                  onClick={() => window.__openLightbox && window.__openLightbox(start + i)}
                  aria-label={`View ${p.alt} full-size`}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={imgSrc(p.base, 480)} srcSet={imgSrcSet(p.base)} sizes="(max-width: 768px) 50vw, 25vw" alt={p.alt} loading="lazy" />
                </button>
              ))}
            </div>
          </section>
        );
      })}
      <Lightbox images={flat} />
    </>
  );
}
