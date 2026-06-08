import Nav from './components/Nav';
import FadeUp from './components/FadeUp';
import GalleryGrid, { galleryImages } from './components/GalleryGrid';
import PhotoStrip from './components/PhotoStrip';
import Lightbox from './components/Lightbox';
import ReviewsStrip from './components/ReviewsStrip';
import BookBars from './components/BookBars';
import { listing, rating, sleeping, amenityGroups, BOOKING, imgSrc, imgSrcSet } from '../lib/listing';

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'VacationRental',
  additionalType: 'House',
  name: 'Manito Bungalow',
  description: listing.description_summary,
  url: 'https://manitobungalow.com',
  image: 'https://manitobungalow.com/images/hero-front-of-house-2560.webp',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Spokane',
    addressRegion: 'WA',
    addressCountry: 'US',
  },
  geo: { '@type': 'GeoCoordinates', latitude: listing.location.lat, longitude: listing.location.lng },
  numberOfRooms: 3,
  occupancy: { '@type': 'QuantitativeValue', maxValue: 10 },
  petsAllowed: true,
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: rating.overall,
    reviewCount: rating.count,
    bestRating: 5,
  },
};

export default function Home() {
  return (
    <>
      <a href="#main-content" className="skip-link">Skip to main content</a>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Nav />

      <main id="main-content">
        {/* HERO — image-led with lower-left overlay */}
        <section id="hero" className="hero-led">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="hero-led-img" src="/images/hero-living-room-2560.webp" srcSet="/images/hero-living-room-960.webp 960w, /images/hero-living-room-1600.webp 1600w, /images/hero-living-room-2560.webp 2560w" sizes="100vw" alt="Manito Bungalow living room — gas fireplace and deep sectionals" fetchPriority="high" />
          <div className="hero-led-scrim" aria-hidden="true" />
          <div className="hero-led-copy">
            <p className="hero-eyebrow">South Hill · Spokane, Washington</p>
            <h1 className="hero-headline">A historic bungalow,<br/><em>one block</em> from Manito Park.</h1>
            <p className="hero-sub">Sleeps 10 &nbsp;·&nbsp; Pet friendly &nbsp;·&nbsp; Restored 1911 craftsman</p>
            <p className="hero-proof">★ {rating.overall} · {rating.count} reviews &nbsp;·&nbsp; Guest Favorite on Airbnb</p>
            <div className="hero-ctas">
              <a href="#book" className="hero-cta">Check Availability</a>
              <a href="/photos" className="hero-cta-secondary">View Photos</a>
            </div>
            <p className="hero-feenote">No Airbnb or VRBO service fees when you book direct.</p>
          </div>
        </section>

        {/* TRUST / STATS ROW */}
        <div id="stats-row">
          <div className="container">
            <div className="stats-row-grid">
              <div className="stat-tile"><span className="stat-big">1 Block</span><span className="stat-sub">from Manito Park</span></div>
              <div className="stat-tile"><span className="stat-big">Sleeps 10</span><span className="stat-sub">3 bedrooms · 2 bathrooms</span></div>
              <div className="stat-tile"><span className="stat-big">Pet Friendly</span><span className="stat-sub">fully fenced backyard</span></div>
              <div className="stat-tile"><span className="stat-big">{rating.overall} ★</span><span className="stat-sub">{rating.count} guest reviews</span></div>
              <div className="stat-tile"><span className="stat-big">Book Direct</span><span className="stat-sub">no platform service fees</span></div>
            </div>
          </div>
        </div>

        {/* THE SPACE */}
        <section id="space" className="on-dark" style={{ background: 'var(--ink)' }}>
          <div className="container">
            <div className="split">
              <FadeUp className="split-img">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={imgSrc('living-room-1-02', 1200)} srcSet={imgSrcSet('living-room-1-02')} sizes="(max-width: 900px) 100vw, 50vw" alt="Manito Bungalow living room with gas fireplace" loading="lazy" />
                <div className="split-img-badge">1,500 sq ft · Est. 1911</div>
              </FadeUp>
              <FadeUp className="split-text">
                <p className="section-label">The Space</p>
                <h2 className="section-h2">A bungalow that feels<br/>like it was <em>made for you.</em></h2>
                <p className="section-body">Step inside and feel the difference between a rental and a home. Original hardwood floors, period details, and a warm gas fireplace give Manito Bungalow a warmth that photos can&apos;t quite capture — but guests never forget.</p>
                <p className="section-body" style={{ marginTop: 16 }}>Two living rooms — a 75&quot; Smart TV with Sonos downstairs, a 65&quot; TV upstairs for when the group splits up. A dedicated desk with a 32&quot; monitor for remote work. And a fully fenced backyard your dog will love as much as you do.</p>
                <div className="amenity-grid">
                  <div className="amenity-pill"><svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5" aria-hidden="true"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/></svg>3 Bedrooms</div>
                  <div className="amenity-pill"><svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 8v4l3 3"/></svg>Sleeps 10</div>
                  <div className="amenity-pill"><svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5" aria-hidden="true"><path d="M3 12h18M3 6h18"/></svg>2 Bathrooms</div>
                  <div className="amenity-pill"><svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18"/></svg>Full Kitchen</div>
                  <div className="amenity-pill"><svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5" aria-hidden="true"><path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01"/></svg>Washer &amp; Dryer</div>
                  <div className="amenity-pill"><svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5" aria-hidden="true"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></svg>Pet Friendly</div>
                  <div className="amenity-pill"><svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5" aria-hidden="true"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>Fenced Backyard</div>
                  <div className="amenity-pill"><svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5" aria-hidden="true"><path d="M3 9l9-7 9 7"/><rect x="6" y="12" width="4" height="9"/><rect x="14" y="12" width="4" height="9"/></svg>Air Conditioning</div>
                </div>
                <a href="#amenities" className="link-arrow">See all amenities</a>
              </FadeUp>
            </div>
            <PhotoStrip />
          </div>
        </section>

        {/* GALLERY */}
        <section id="gallery" className="on-light">
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: 8 }}>
              <p className="section-label" style={{ justifyContent: 'center' }}>Gallery</p>
              <h2 className="section-h2">See <em>every corner.</em></h2>
              <p className="section-body" style={{ margin: '0 auto' }}>Click any photo to view it full-size.</p>
            </div>
            <GalleryGrid />
            <div style={{ textAlign: 'center', marginTop: 32 }}>
              <a href="/photos" className="link-arrow" style={{ justifyContent: 'center' }}>View all {listing.photos.length} photos, room by room</a>
            </div>
          </div>
        </section>

        {/* SLEEPING + AMENITIES */}
        <section id="amenities" className="on-warm">
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: 48 }}>
              <p className="section-label" style={{ justifyContent: 'center' }}>Sleeping Arrangements</p>
              <h2 className="section-h2">Where you&apos;ll <em>sleep.</em></h2>
            </div>
            <div className="sleep-grid">
              {sleeping.map(s => (
                <div key={s.room} className="sleep-card">
                  <div className="sleep-room">{s.room}</div>
                  <div className="sleep-beds">{s.beds}</div>
                </div>
              ))}
            </div>
            <div style={{ textAlign: 'center', margin: '72px 0 40px' }}>
              <p className="section-label" style={{ justifyContent: 'center' }}>Amenities</p>
              <h2 className="section-h2" style={{ fontSize: 'clamp(28px, 3vw, 40px)' }}>Everything <em>included.</em></h2>
            </div>
            <div className="amenities-groups">
              {amenityGroups.map(g => (
                <div key={g.group} className="amenities-group">
                  <h3>{g.group}</h3>
                  <ul>
                    {g.items.map(i => <li key={i.title}>{i.title}</li>)}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* NEIGHBORHOOD */}
        <section id="neighborhood" className="on-light">
          <div className="container">
            <div className="split reverse">
              <FadeUp className="split-img">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={imgSrc('exterior-04', 1200)} srcSet={imgSrcSet('exterior-04')} sizes="(max-width: 900px) 100vw, 50vw" alt="Manito Bungalow front porch" loading="lazy" />
                <div className="split-img-badge" style={{ background: 'var(--cream-dark)', color: '#7A5C30' }}>Manito Park · 1 block</div>
              </FadeUp>
              <FadeUp className="split-text">
                <p className="section-label">The Neighborhood</p>
                <h2 className="section-h2">Historic South Hill.<br/><em>Walkable.</em> Wonderful.</h2>
                <p className="section-body">The South Hill is Spokane&apos;s most established neighborhood — tree-lined streets, craftsman homes that have stood for a century, and the city&apos;s best parks, bakeries, and restaurants within a short walk.</p>
                <p className="section-body" style={{ marginTop: 16 }}>Manito Park is Spokane&apos;s crown jewel: 90 acres of rose gardens, a Japanese garden, a conservatory, and a mirror pond ringed by old-growth trees. It&apos;s one block away and completely free to explore.</p>
                <div className="nbhd-grid">
                  {[
                    { icon: '🌸', name: 'Manito Park', desc: 'Rose gardens, Japanese garden, conservatory, duck pond.', dist: '1 min walk' },
                    { icon: '🛍️', name: 'Perry District', desc: 'Eclectic shops, coffee, the South Perry farmers market.', dist: '5 min drive' },
                    { icon: '🏙️', name: 'Downtown Spokane', desc: 'Riverfront Park, Fox Theater, River Park Square.', dist: '10 min drive' },
                    { icon: '🏔️', name: 'Outdoor Adventure', desc: 'Mt. Spokane, Riverside State Park, Centennial Trail.', dist: '30 min drive' },
                  ].map(n => (
                    <div key={n.name} className="nbhd">
                      <span className="nbhd-icon">{n.icon}</span>
                      <div className="nbhd-name">{n.name}</div>
                      <div className="nbhd-desc">{n.desc}</div>
                      <div className="nbhd-dist">{n.dist}</div>
                    </div>
                  ))}
                </div>
                <a href="#book" className="link-arrow">Plan your stay</a>
              </FadeUp>
            </div>
          </div>
        </section>

        {/* RESTAURANTS */}
        <section id="restaurants" className="on-dark" style={{ background: 'var(--ink)' }}>
          <div className="container">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: 24 }}>
              <div>
                <p className="section-label">Eat &amp; Drink</p>
                <h2 className="section-h2">Six spots we<br/><em>always recommend.</em></h2>
              </div>
              <p style={{ fontSize: 15, lineHeight: 1.8, color: 'var(--text-on-dark)', maxWidth: 340, margin: '0 0 28px' }}>Spokane&apos;s South Hill has a quietly excellent dining scene. Here are the spots we send every guest.</p>
            </div>
            <div className="restaurant-grid">
              {[
                { num: '01', name: 'Manito Tap House', tag: 'Gastropub · Craft Beer', desc: 'Organic-certified, scratch-kitchen gastropub right past the park on Grand Blvd. The burger is legendary. Rotating tap list that actually gets people excited.', dist: '3 min walk' },
                { num: '02', name: 'Remedy Kitchen & Tavern', tag: 'American · Neighborhood Favorite', desc: 'A true South Hill institution on Grand Boulevard. Come for the approachable menu and warm vibe — the kind of place you end up going back to twice in one trip.', dist: '5 min walk' },
                { num: '03', name: 'Wooden City', tag: 'New American · Elevated', desc: "One of Spokane's most-talked-about spots. A menu built on local ingredients, genuinely inventive dishes, and service that knows what it's doing. Book ahead.", dist: '10 min drive' },
                { num: '04', name: 'Perry Street Brewing', tag: 'Brewery · Perry District', desc: 'Beloved neighborhood brewery in the Perry District. Excellent beer, good food, and a patio that fills up fast on a warm evening.', dist: '8 min drive' },
                { num: '05', name: 'Two Seven Public House', tag: 'Tavern · South Hill', desc: 'A mellow South Hill pub with a loyal following. The tacos and burger are both worth ordering. Great when you want something low-key and satisfying.', dist: '7 min drive' },
                { num: '06', name: 'Inland Pacific Kitchen', tag: 'Fine Dining · Pacific NW', desc: "Spokane's farm-to-table flagship. The menu changes with the seasons and every dish shows real intention. This is the special-occasion pick — and it delivers.", dist: '12 min drive' },
              ].map(r => (
                <FadeUp key={r.num} className="rc">
                  <div className="rc-num">{r.num}</div>
                  <div className="rc-name">{r.name}</div>
                  <div className="rc-tag">{r.tag}</div>
                  <p className="rc-desc">{r.desc}</p>
                  <div className="rc-dist">{r.dist}</div>
                </FadeUp>
              ))}
            </div>
          </div>
        </section>

        {/* EVENTS */}
        <section id="events" className="on-warm">
          <div className="container">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: 24 }}>
              <div>
                <p className="section-label">Mark Your Calendar</p>
                <h2 className="section-h2">Spokane&apos;s biggest<br/><em>moments, all year.</em></h2>
              </div>
              <p style={{ fontSize: 15, lineHeight: 1.8, color: 'var(--text-mid)', maxWidth: 360, margin: 0 }}>Spokane punches far above its weight for annual events. Stay at Manito Bungalow and you&apos;re perfectly positioned for all of it.</p>
            </div>
            <div className="event-grid" style={{ background: 'var(--cream-dark)' }}>
              {[
                { month: 'May', num: '1', name: 'Bloomsday Run', desc: "One of America's largest timed road races — 50,000+ participants fill Spokane's streets every first Sunday of May on a scenic 12K course.", tag: '50,000+ Participants' },
                { month: 'May', num: '2', name: 'Lilac Festival', desc: "Spokane's oldest and most beloved festival — a full week culminating in the Armed Forces Torchlight Parade, one of the nation's largest nighttime parades.", tag: 'Week-Long Celebration' },
                { month: 'Jun', num: '4', name: 'Hoopfest', desc: "The world's largest 3-on-3 basketball tournament transforms downtown into Hooptown USA. 6,000+ teams, 450 courts, 225,000 fans. A truly singular Spokane experience.", tag: "World's Largest 3-on-3" },
                { month: 'Sep', num: '1', name: 'Pig Out in the Park', desc: "Spokane's legendary Labor Day weekend feast at Riverfront Park. 200,000 attendees, dozens of restaurants, three music stages. Free admission.", tag: '200,000 Attendees' },
                { month: 'Jun', num: '1', name: 'ArtFest Spokane', desc: "Over 150 juried artists take over Riverfront Park each early June — one of the Pacific Northwest's most celebrated outdoor art fairs.", tag: '150+ Artists' },
                { month: 'Oct', num: '1', name: 'Green Bluff Fall Festival', desc: "When autumn hits the hillside farms at Green Bluff, it's pure Pacific NW magic. Corn mazes, pumpkins, cider, tractor rides — every October weekend.", tag: 'Every October Weekend' },
              ].map(e => (
                <div key={e.name} className="ev">
                  <div className="ev-month">
                    <span className="ev-month-abbr">{e.month}</span>
                    <span className="ev-month-num">{e.num}</span>
                  </div>
                  <div className="ev-info">
                    <div className="ev-name">{e.name}</div>
                    <p className="ev-desc">{e.desc}</p>
                    <span className="ev-tag">{e.tag}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* REVIEWS */}
        <ReviewsStrip />

        {/* BOOK */}
        <section id="book">
          <div className="container" style={{ maxWidth: 900, textAlign: 'center' }}>
            <p className="section-label" style={{ justifyContent: 'center' }}>Direct Booking</p>
            <h2 className="section-h2" style={{ fontSize: 'clamp(42px, 5vw, 68px)' }}>Same home. <em>Better rate.</em></h2>
            <p style={{ fontSize: '17.5px', lineHeight: 1.8, marginBottom: 32, maxWidth: 640, marginLeft: 'auto', marginRight: 'auto' }}>Booking platforms add a service fee on top of our nightly rate. Book directly below and that fee stays in your pocket — same home, same hosts, same five-star stay.</p>
            <div className="pitch-points">
              <div className="pitch-point"><strong>Best rate, guaranteed</strong>No platform service fees — book direct and save.</div>
              <div className="pitch-point"><strong>Talk to your hosts</strong>Questions answered within the hour, before and during your stay.</div>
              <div className="pitch-point"><strong>Secure checkout</strong>Payments handled by Hospitable + Stripe, with instant confirmation.</div>
            </div>
            <iframe
              id="booking-iframe"
              title="Book Manito Bungalow"
              sandbox="allow-top-navigation allow-scripts allow-same-origin"
              style={{ width: '100%', height: 760, border: 'none', borderRadius: 4 }}
              loading="lazy"
              src={BOOKING.widgetSrc}
            />
            <p style={{ marginTop: 8, fontSize: 13, color: 'var(--text-light)' }}>
              Prefer to book on a platform? We&apos;re also on{' '}
              <a href={BOOKING.vrbo} target="_blank" rel="noopener noreferrer" style={{ color: '#7A5C30', textDecoration: 'underline' }}>VRBO</a> and{' '}
              <a href={BOOKING.airbnb} target="_blank" rel="noopener noreferrer" style={{ color: '#7A5C30', textDecoration: 'underline' }}>Airbnb</a>.
            </p>
            <p style={{ marginTop: 16, fontSize: 13, color: 'var(--text-light)' }}>Questions? <a href="mailto:rsvedin@gmail.com" style={{ color: '#7A5C30', textDecoration: 'underline' }}>Get in touch</a></p>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer id="footer">
        <div className="container">
          <div className="footer-inner">
            <div>
              <div className="footer-name">Manito Bungalow</div>
              <p className="footer-desc">A beautifully restored 1911 craftsman bungalow on Spokane&apos;s beloved South Hill — one block from Manito Park.</p>
              <a href="#book" className="footer-cta">Book Your Stay</a>
            </div>
            <div>
              <div className="footer-col-title">The Property</div>
              <ul className="footer-links">
                <li><a href="#space">The Space</a></li>
                <li><a href="/photos">All Photos</a></li>
                <li><a href="#amenities">Amenities</a></li>
                <li><a href="#neighborhood">The Neighborhood</a></li>
                <li><a href="#book">Book Direct</a></li>
              </ul>
            </div>
            <div>
              <div className="footer-col-title">Spokane Guide</div>
              <ul className="footer-links">
                <li><a href="#restaurants">Restaurants</a></li>
                <li><a href="#events">Annual Events</a></li>
                <li><a href="#neighborhood">Manito Park</a></li>
                <li><a href="/blog">Blog</a></li>
              </ul>
            </div>
            <div>
              <div className="footer-col-title">Connect</div>
              <ul className="footer-links">
                <li><a href="https://www.instagram.com/manitobungalow/" target="_blank" rel="noopener noreferrer">@manitobungalow</a></li>
                <li><a href="mailto:rsvedin@gmail.com">Email us</a></li>
                <li><a href={BOOKING.vrbo} target="_blank" rel="noopener noreferrer">VRBO Listing</a></li>
                <li><a href={BOOKING.airbnb} target="_blank" rel="noopener noreferrer">Airbnb Listing</a></li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p className="footer-copy">© 2026 Manito Bungalow · Spokane, Washington</p>
            <div className="footer-legal">
              <a href="#">Privacy</a>
              <a href="#">House Rules</a>
              <a href="#">Contact</a>
            </div>
          </div>
        </div>
      </footer>

      <BookBars />
      <Lightbox images={galleryImages} />
    </>
  );
}
