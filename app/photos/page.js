import Nav from '../components/Nav';
import PhotosGallery from './PhotosGallery';
import { listing } from '../../lib/listing';

export const metadata = {
  title: 'Photos — Manito Bungalow',
  description: `All ${listing.photos.length} photos of Manito Bungalow, room by room — a restored 1911 craftsman bungalow one block from Manito Park in Spokane, WA.`,
};

export default function PhotosPage() {
  return (
    <>
      <a href="#main-content" className="skip-link">Skip to main content</a>
      <Nav />
      <main id="main-content" className="photos-page on-light" style={{ background: 'var(--cream)' }}>
        <div className="container" style={{ paddingTop: 'calc(var(--nav-h) + 64px)', paddingBottom: 100 }}>
          <p className="section-label">The Full Tour</p>
          <h1 className="section-h2">Every room, <em>every corner.</em></h1>
          <p className="section-body" style={{ marginBottom: 16 }}>All {listing.photos.length} photos, organized the way you&apos;d walk through the house. Click any photo to view it full-size.</p>
          <PhotosGallery />
          <div style={{ textAlign: 'center', marginTop: 64 }}>
            <a href="/#book" className="hero-cta">Book Direct &amp; Save</a>
          </div>
        </div>
      </main>
    </>
  );
}
