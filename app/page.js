import Nav from './components/Nav';
import FadeUp from './components/FadeUp';
import GalleryGrid, { galleryImages } from './components/GalleryGrid';
import PhotoStrip from './components/PhotoStrip';
import Lightbox from './components/Lightbox';

export default function Home() {
  return (
    <>
      <a href="#main-content" className="skip-link">Skip to main content</a>
      <Nav />

      <main id="main-content">
        {/* HERO */}
        <section id="hero">
          <div className="hero-bg" style={{
            backgroundImage: "linear-gradient(to bottom, rgba(23,20,15,0.25) 0%, rgba(23,20,15,0.78) 100%), url('https://media.vrbo.com/lodging/102000000/101540000/101537200/101537115/0622d9e8.jpg?impolicy=resizecrop&rw=1800&ra=fit')"
          }} />
          <div className="hero-content">
            <p className="hero-eyebrow">Spokane, Washington · Historic South Hill</p>
            <h1 className="hero-headline">Spokane&apos;s <em>Favorite</em><br/>Bungalow.</h1>
            <a href="#book" className="hero-cta">Check Availability</a>
          </div>
          <div className="hero-stats">
            <div className="hero-stat"><span className="hero-stat-num">3</span><span className="hero-stat-label">Bedrooms</span></div>
            <div className="hero-stat"><span className="hero-stat-num">10</span><span className="hero-stat-label">Guests</span></div>
            <div className="hero-stat"><span className="hero-stat-num">1 blk</span><span className="hero-stat-label">to Manito Park</span></div>
          </div>
        </section>

        {/* WHY */}
        <div id="why">
          <div className="container">
            <div className="why-inner">
              <h2 className="why-headline">Why guests<br/>keep coming<br/><em>back.</em></h2>
              <ul className="why-list">
                <li>A beautifully restored 1910 bungalow — all original character, none of the compromise.</li>
                <li>One block from Manito Park&apos;s rose gardens, Japanese garden, and duck pond.</li>
                <li>Sleeps up to 10 across three bedrooms — perfect for families, reunions, and friend groups.</li>
                <li>Rated top 10% on VRBO with a perfect 10/10 score. Loved by guests, obsessed over by hosts.</li>
                <li>Pet-friendly, fully stocked kitchen, washer/dryer — everything to feel genuinely at home.</li>
                <li>Steps from Spokane&apos;s best events: Hoopfest, Bloomsday, Pig Out in the Park, and more.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* THE SPACE */}
        <section id="space" className="on-dark" style={{ background: 'var(--ink)' }}>
          <div className="container">
            <div className="split">
              <FadeUp className="split-img">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="https://media.vrbo.com/lodging/102000000/101540000/101537200/101537115/027be553.jpg?impolicy=resizecrop&rw=1200&ra=fit" alt="Manito Bungalow living area" loading="lazy" />
                <div className="split-img-badge">1,500 sq ft · Est. 1910</div>
              </FadeUp>
              <FadeUp className="split-text">
                <p className="section-label">The Space</p>
                <h2 className="section-h2">A bungalow that feels<br/>like it was <em>made for you.</em></h2>
                <p className="section-body">Step inside and feel the difference between a rental and a home. Original hardwood floors, high ceilings, and thoughtfully curated furnishings give Manito Bungalow a warmth that photos can&apos;t quite capture — but guests never forget.</p>
                <p className="section-body" style={{ marginTop: 16 }}>Three well-appointed bedrooms sleep up to 10. The full kitchen is stocked for everything from morning coffee to a proper dinner party. There&apos;s a washer and dryer for longer stays, and an outdoor space that&apos;s all yours.</p>
                <div className="amenity-grid">
                  <div className="amenity-pill"><svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5" aria-hidden="true"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/></svg>3 Bedrooms</div>
                  <div className="amenity-pill"><svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 8v4l3 3"/></svg>Sleeps 10</div>
                  <div className="amenity-pill"><svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5" aria-hidden="true"><path d="M3 12h18M3 6h18"/></svg>2 Bathrooms</div>
                  <div className="amenity-pill"><svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18"/></svg>Full Kitchen</div>
                  <div className="amenity-pill"><svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5" aria-hidden="true"><path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01"/></svg>Washer &amp; Dryer</div>
                  <div className="amenity-pill"><svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5" aria-hidden="true"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></svg>Pet Friendly</div>
                  <div className="amenity-pill"><svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5" aria-hidden="true"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>Outdoor Space</div>
                  <div className="amenity-pill"><svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5" aria-hidden="true"><path d="M3 9l9-7 9 7"/><rect x="6" y="12" width="4" height="9"/><rect x="14" y="12" width="4" height="9"/></svg>Air Conditioning</div>
                </div>
                <a href="#book" className="link-arrow">See all amenities</a>
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
              <p style={{ fontSize: 13, color: 'var(--text-light)' }}>More photos coming soon — or view the full gallery on <a href="https://www.vrbo.com/3803640" target="_blank" rel="noopener noreferrer" style={{ color: '#7A5C30', textDecoration: 'underline' }}>VRBO</a>.</p>
            </div>
          </div>
        </section>

        {/* NEIGHBORHOOD */}
        <section id="neighborhood" className="on-warm">
          <div className="container">
            <div className="split reverse">
              <FadeUp className="split-img">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="https://media.vrbo.com/lodging/102000000/101540000/101537200/101537115/0622d9e8.jpg?impolicy=resizecrop&rw=1200&ra=fit" alt="Manito Bungalow exterior" loading="lazy" />
                <div className="split-img-badge" style={{ background: 'var(--cream-dark)', color: '#7A5C30' }}>Manito Park · 1 block</div>
              </FadeUp>
              <FadeUp className="split-text">
                <p className="section-label">The Neighborhood</p>
                <h2 className="section-h2">Historic South Hill.<br/><em>Walkable.</em> Wonderful.</h2>
                <p className="section-body">The South Hill is where Spokane exhales. Tree-lined streets, handsome craftsman homes, and a genuine sense of community that visitors notice immediately — and locals have protected for a century.</p>
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
                <h2 className="section-h2">Our favorite tables,<br/><em>all within reach.</em></h2>
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

        {/* BOOK */}
        <section id="book">
          <div className="container" style={{ maxWidth: 900, textAlign: 'center' }}>
            <p className="section-label">Direct Booking</p>
            <h2 className="section-h2">Ready to make<br/><em>Spokane yours?</em></h2>
            <p style={{ fontSize: '15.5px', lineHeight: 1.82, marginBottom: 40 }}>Book directly for the best rate, or check availability on VRBO and Airbnb. Either way, we can&apos;t wait to host you.</p>
            <iframe
              id="booking-iframe"
              title="Book Manito Bungalow"
              sandbox="allow-top-navigation allow-scripts allow-same-origin"
              style={{ width: '100%', height: 900, border: 'none', borderRadius: 4 }}
              loading="lazy"
              src="https://booking.hospitable.com/widget/a13c6964-ae97-4821-a25c-70cda0de762d/1289150"
            />
            <div style={{ display: 'flex', justifyContent: 'center', gap: 16, flexWrap: 'wrap', marginTop: 40 }}>
              <a href="https://www.vrbo.com/3803640" target="_blank" rel="noopener noreferrer" className="btn-primary">Book on VRBO</a>
              <a href="https://www.airbnb.com/rooms/1049335217620947625" target="_blank" rel="noopener noreferrer" className="btn-outline">Book on Airbnb</a>
            </div>
            <p style={{ marginTop: 32, fontSize: 13, color: 'var(--text-light)' }}>Questions? <a href="mailto:rsvedin@gmail.com" style={{ color: '#7A5C30', textDecoration: 'underline' }}>Get in touch</a></p>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer id="footer">
        <div className="container">
          <div className="footer-inner">
            <div>
              <div className="footer-name">Manito Bungalow</div>
              <p className="footer-desc">A beautifully restored 1910 craftsman bungalow on Spokane&apos;s beloved South Hill — one block from Manito Park.</p>
              <a href="https://www.vrbo.com/3803640" target="_blank" rel="noopener noreferrer" className="footer-cta">Book Your Stay</a>
            </div>
            <div>
              <div className="footer-col-title">The Property</div>
              <ul className="footer-links">
                <li><a href="#space">The Space</a></li>
                <li><a href="#neighborhood">The Neighborhood</a></li>
                <li><a href="#book">Book on VRBO</a></li>
                <li><a href="#book">Book on Airbnb</a></li>
              </ul>
            </div>
            <div>
              <div className="footer-col-title">Spokane Guide</div>
              <ul className="footer-links">
                <li><a href="#restaurants">Restaurants</a></li>
                <li><a href="#events">Annual Events</a></li>
                <li><a href="#neighborhood">Manito Park</a></li>
                <li><a href="#neighborhood">What&apos;s Nearby</a></li>
              </ul>
            </div>
            <div>
              <div className="footer-col-title">Connect</div>
              <ul className="footer-links">
                <li><a href="https://www.instagram.com/manitobungalow/" target="_blank" rel="noopener noreferrer">@manitobungalow</a></li>
                <li><a href="mailto:rsvedin@gmail.com">manitobungalow@gmail.com</a></li>
                <li><a href="https://www.vrbo.com/3803640" target="_blank" rel="noopener noreferrer">VRBO Listing</a></li>
                <li><a href="https://www.airbnb.com/rooms/1049335217620947625" target="_blank" rel="noopener noreferrer">Airbnb Listing</a></li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p className="footer-copy">© 2025 Manito Bungalow · Spokane, Washington</p>
            <div className="footer-legal">
              <a href="#">Privacy</a>
              <a href="#">House Rules</a>
              <a href="#">Contact</a>
            </div>
          </div>
        </div>
      </footer>

      <Lightbox images={galleryImages} />
    </>
  );
}
