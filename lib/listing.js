import data from '../assets/listing-data.json';

// Structured listing data scraped from the live Airbnb listing (see LISTING.md).
// Amenities, sleeping arrangements, and ratings render from here so the site
// can't drift from the real listing.
export const listing = data;

export const BOOKING = {
  widgetSrc: 'https://booking.hospitable.com/widget/a13c6964-ae97-4821-a25c-70cda0de762d/1289150',
  airbnb: 'https://www.airbnb.com/rooms/1049335217620947625',
  vrbo: 'https://www.vrbo.com/3803640',
};

export const rating = {
  overall: data.reviews.overall, // 4.88
  count: data.reviews.count,     // 41
  categories: data.reviews.categories,
};

export const sleeping = data.sleeping;

// Amenity groups for display, minus the "Not included" group.
export const amenityGroups = data.amenities.filter(g => g.group !== 'Not included');

// Photo manifest: room groups in photo-tour order, mapped to local files.
// File naming matches assets/images/listing/<room-slug>-<nn>.jpg (see LISTING.md).
function slugify(s) {
  return s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '').replace('additional-photos', 'additional');
}

export const photoRooms = data.rooms.map(room => ({
  room: room.room === 'Additional photos' ? 'More of the bungalow' : room.room,
  photos: room.imageIds.map((id, i) => {
    const base = `${slugify(room.room)}-${String(i + 1).padStart(2, '0')}`;
    const label = data.photos.find(p => p.id === id)?.label || room.room;
    return { base, alt: `${room.room} — Manito Bungalow`, label };
  }),
}));

// Responsive image helpers for the build-time WebP pipeline (scripts/build-images.mjs).
export const LISTING_WIDTHS = [480, 800, 1200];

export function imgSrc(base, w = 1200) {
  return `/images/listing/${base}-${w}.webp`;
}

export function imgSrcSet(base) {
  return LISTING_WIDTHS.map(w => `${imgSrc(base, w)} ${w}w`).join(', ');
}
