'use client';
import GuidebookNav from './GuidebookNav';
import WifiQR from './WifiQR';

const sections = [
  { id: 'gb-welcome', label: 'Welcome', icon: '👋' },
  { id: 'gb-checkin', label: 'Check-In', icon: '🔑' },
  { id: 'gb-checkout', label: 'Check-Out', icon: '🧳' },
  { id: 'gb-wifi', label: 'WiFi', icon: '📶' },
  { id: 'gb-space', label: 'The Space', icon: '🏠' },
  { id: 'gb-rules', label: 'House Rules', icon: '📋' },
  { id: 'gb-neighborhood', label: 'Neighborhood', icon: '🌳' },
  { id: 'gb-eat', label: 'Eat & Drink', icon: '🍽️' },
  { id: 'gb-todo', label: 'Things To Do', icon: '⭐' },
  { id: 'gb-emergency', label: 'Emergency', icon: '🆘' },
];

export default function GuidebookContent({ variant = 'guide' }) {
  const allSections = variant === 'welcome'
    ? [...sections, { id: 'gb-bookdirect', label: 'Book Direct', icon: '💛' }]
    : sections;

  return (
    <div className="gb-page">
      <GuidebookNav sections={allSections} variant={variant} />

      <main className="gb-main">
        {/* HERO */}
        <div className="gb-hero">
          <div className="gb-hero-bg" style={{
            backgroundImage: "linear-gradient(to bottom, rgba(23,20,15,0.2) 0%, rgba(23,20,15,0.75) 100%), url('https://media.vrbo.com/lodging/102000000/101540000/101537200/101537115/0622d9e8.jpg?impolicy=resizecrop&rw=1200&ra=fit')"
          }} />
          <div className="gb-hero-content">
            <p className="gb-hero-eyebrow">Your Guest Guide</p>
            <h1 className="gb-hero-title">Welcome to<br/><em>Manito Bungalow.</em></h1>
            <p className="gb-hero-sub">Everything you need for an amazing stay — all in one place.</p>
          </div>
        </div>

        {/* WELCOME */}
        <section id="gb-welcome" className="gb-section">
          <div className="gb-container">
            <div className="gb-section-icon">👋</div>
            <h2 className="gb-section-title">Welcome</h2>
            <div className="gb-card">
              <p>We&apos;re so glad you&apos;re here! Manito Bungalow is a beautifully restored 1910 craftsman home on Spokane&apos;s South Hill — just one block from Manito Park.</p>
              <p>This guide has everything you&apos;ll need during your stay. If you have any questions at all, don&apos;t hesitate to reach out.</p>
              <div className="gb-contact-row">
                <div className="gb-contact-item">
                  <span className="gb-contact-label">Your Host</span>
                  <span className="gb-contact-value">Ryan</span>
                </div>
                <div className="gb-contact-item">
                  <span className="gb-contact-label">Text / Call</span>
                  <a href="tel:+15095551234" className="gb-contact-value gb-contact-link">(509) 555-1234</a>
                </div>
                <div className="gb-contact-item">
                  <span className="gb-contact-label">Email</span>
                  <a href="mailto:rsvedin@gmail.com" className="gb-contact-value gb-contact-link">rsvedin@gmail.com</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CHECK-IN */}
        <section id="gb-checkin" className="gb-section gb-section-alt">
          <div className="gb-container">
            <div className="gb-section-icon">🔑</div>
            <h2 className="gb-section-title">Check-In</h2>
            <div className="gb-card">
              <div className="gb-detail-row">
                <span className="gb-detail-label">Check-In Time</span>
                <span className="gb-detail-value">4:00 PM</span>
              </div>
              <div className="gb-detail-row">
                <span className="gb-detail-label">Address</span>
                <a href="https://maps.google.com/?q=227+E+22nd+Ave+Spokane+WA+99203" target="_blank" rel="noopener noreferrer" className="gb-detail-value gb-contact-link">227 E 22nd Ave, Spokane WA 99203</a>
              </div>
            </div>

            <h3 className="gb-subheading">How to Get In</h3>
            <div className="gb-steps">
              <div className="gb-step">
                <div className="gb-step-num">1</div>
                <div className="gb-step-text">
                  <strong>Find the lockbox</strong> on the front door handle.
                </div>
              </div>
              <div className="gb-step">
                <div className="gb-step-num">2</div>
                <div className="gb-step-text">
                  <strong>Enter the code</strong> provided in your booking confirmation message.
                </div>
              </div>
              <div className="gb-step">
                <div className="gb-step-num">3</div>
                <div className="gb-step-text">
                  <strong>Open the lockbox</strong> and use the key inside to unlock the front door.
                </div>
              </div>
              <div className="gb-step">
                <div className="gb-step-num">4</div>
                <div className="gb-step-text">
                  <strong>Return the key</strong> to the lockbox after you&apos;re inside. You won&apos;t need it again — the door locks from inside.
                </div>
              </div>
            </div>

            <h3 className="gb-subheading">Parking</h3>
            <div className="gb-card">
              <p>Park in the <strong>driveway</strong> (fits 2 cars) or on the street directly in front of the house. Street parking is free and unrestricted.</p>
            </div>
          </div>
        </section>

        {/* CHECK-OUT */}
        <section id="gb-checkout" className="gb-section">
          <div className="gb-container">
            <div className="gb-section-icon">🧳</div>
            <h2 className="gb-section-title">Check-Out</h2>
            <div className="gb-card">
              <div className="gb-detail-row">
                <span className="gb-detail-label">Check-Out Time</span>
                <span className="gb-detail-value">11:00 AM</span>
              </div>
            </div>

            <h3 className="gb-subheading">Before You Leave</h3>
            <div className="gb-checklist">
              {[
                'Start a load of towels and linens in the washer (no need to dry or fold)',
                'Load and start the dishwasher',
                'Take out the trash — bins are at the side of the house',
                'Turn off all lights and fans',
                'Set the thermostat to 68°F (heating) or 74°F (cooling)',
                'Lock the front door and return the key to the lockbox',
              ].map((item, i) => (
                <label key={i} className="gb-check-item">
                  <input type="checkbox" className="gb-checkbox" />
                  <span>{item}</span>
                </label>
              ))}
            </div>
            <div className="gb-card gb-card-note">
              <p><strong>No need to</strong> strip beds, vacuum, or deep clean. We have a cleaning team. Just the basics above and you&apos;re golden!</p>
            </div>
          </div>
        </section>

        {/* WIFI */}
        <section id="gb-wifi" className="gb-section gb-section-alt">
          <div className="gb-container">
            <div className="gb-section-icon">📶</div>
            <h2 className="gb-section-title">WiFi</h2>
            <WifiQR />
          </div>
        </section>

        {/* THE SPACE */}
        <section id="gb-space" className="gb-section">
          <div className="gb-container">
            <div className="gb-section-icon">🏠</div>
            <h2 className="gb-section-title">The Space</h2>

            <div className="gb-room-grid">
              {[
                {
                  name: 'Kitchen',
                  icon: '🍳',
                  details: [
                    'Fully stocked with pots, pans, dishes, and utensils',
                    'Coffee maker, toaster, and blender',
                    'Basics provided: coffee, tea, salt, pepper, olive oil',
                    'Dishwasher — please run before check-out',
                  ]
                },
                {
                  name: 'Living Room',
                  icon: '📺',
                  details: [
                    'Smart TV with Roku — sign in to your streaming accounts',
                    'Board games and cards in the console cabinet',
                    'Extra blankets and pillows in the closet',
                  ]
                },
                {
                  name: 'Bedrooms',
                  icon: '🛏️',
                  details: [
                    'Bedroom 1: King bed',
                    'Bedroom 2: Queen bed',
                    'Bedroom 3: Two twin beds + pull-out couch in living room',
                    'Extra linens in the hallway closet',
                  ]
                },
                {
                  name: 'Bathrooms',
                  icon: '🚿',
                  details: [
                    '2 full bathrooms with showers',
                    'Towels, shampoo, conditioner, and body wash provided',
                    'Hair dryer under the sink',
                  ]
                },
                {
                  name: 'Laundry',
                  icon: '👕',
                  details: [
                    'Full-size washer and dryer in the hallway closet',
                    'Detergent and dryer sheets provided',
                  ]
                },
                {
                  name: 'Outdoor Space',
                  icon: '🌿',
                  details: [
                    'Front porch with seating',
                    'Backyard with patio and chairs',
                    'Charcoal grill available (charcoal not provided)',
                  ]
                },
              ].map(room => (
                <div key={room.name} className="gb-room-card">
                  <div className="gb-room-header">
                    <span className="gb-room-icon">{room.icon}</span>
                    <h3 className="gb-room-name">{room.name}</h3>
                  </div>
                  <ul className="gb-room-details">
                    {room.details.map((d, i) => (
                      <li key={i}>{d}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <h3 className="gb-subheading">Climate Control</h3>
            <div className="gb-card">
              <p>The thermostat is in the hallway. It&apos;s a programmable Nest — feel free to adjust it for your comfort. We just ask that you set it to <strong>68°F (heating)</strong> or <strong>74°F (cooling)</strong> when you leave.</p>
            </div>
          </div>
        </section>

        {/* HOUSE RULES */}
        <section id="gb-rules" className="gb-section gb-section-alt">
          <div className="gb-container">
            <div className="gb-section-icon">📋</div>
            <h2 className="gb-section-title">House Rules</h2>
            <div className="gb-rules-grid">
              {[
                { icon: '🐕', rule: 'Pets Welcome', desc: 'Dogs are welcome! Please pick up after them in the yard. No cats, sorry — allergies.' },
                { icon: '🚭', rule: 'No Smoking', desc: 'No smoking or vaping inside. You\'re welcome to smoke outside on the patio.' },
                { icon: '🔇', rule: 'Quiet Hours', desc: 'Please keep noise down between 10 PM and 8 AM. Our neighbors are wonderful — let\'s keep it that way.' },
                { icon: '👥', rule: 'Max 10 Guests', desc: 'The home sleeps 10. No events or parties beyond registered guests, please.' },
                { icon: '🔐', rule: 'Lock Up', desc: 'Please lock the front door when you leave. The back door auto-locks.' },
                { icon: '👟', rule: 'Shoes Off', desc: 'We kindly ask that shoes come off at the door — original hardwood floors!' },
              ].map(r => (
                <div key={r.rule} className="gb-rule">
                  <span className="gb-rule-icon">{r.icon}</span>
                  <div>
                    <strong className="gb-rule-title">{r.rule}</strong>
                    <p className="gb-rule-desc">{r.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* NEIGHBORHOOD */}
        <section id="gb-neighborhood" className="gb-section">
          <div className="gb-container">
            <div className="gb-section-icon">🌳</div>
            <h2 className="gb-section-title">The Neighborhood</h2>
            <div className="gb-card">
              <p>You&apos;re on Spokane&apos;s historic South Hill — one of the city&apos;s most walkable and beautiful neighborhoods. Manito Park is literally one block away.</p>
            </div>

            <div className="gb-places-grid">
              {[
                { name: 'Manito Park', desc: 'Rose gardens, Japanese garden, conservatory, duck pond. Open dawn to dusk.', dist: '1 min walk', link: 'https://maps.google.com/?q=Manito+Park+Spokane' },
                { name: 'Rocket Bakery', desc: 'Beloved local coffee and pastries. Perfect morning walk destination.', dist: '5 min walk', link: 'https://maps.google.com/?q=Rocket+Bakery+South+Hill+Spokane' },
                { name: "Rosauers / Huckleberry's", desc: 'Full grocery store with natural foods section. Grab anything you need.', dist: '5 min drive', link: 'https://maps.google.com/?q=Rosauers+South+Hill+Spokane' },
                { name: 'Manito Shopping Center', desc: 'Grand Blvd shops, restaurants, pharmacy, and more.', dist: '3 min walk', link: 'https://maps.google.com/?q=Grand+Blvd+Spokane' },
              ].map(p => (
                <a key={p.name} href={p.link} target="_blank" rel="noopener noreferrer" className="gb-place-card">
                  <h4 className="gb-place-name">{p.name}</h4>
                  <p className="gb-place-desc">{p.desc}</p>
                  <span className="gb-place-dist">{p.dist}</span>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* EAT & DRINK */}
        <section id="gb-eat" className="gb-section gb-section-alt">
          <div className="gb-container">
            <div className="gb-section-icon">🍽️</div>
            <h2 className="gb-section-title">Eat &amp; Drink</h2>
            <p className="gb-section-intro">Our personal favorites — the places we&apos;d take a friend visiting Spokane.</p>

            <div className="gb-restaurant-list">
              {[
                { name: 'Manito Tap House', type: 'Gastropub · Craft Beer', desc: 'Organic-certified gastropub on Grand Blvd. The burger is legendary.', dist: '3 min walk' },
                { name: 'Remedy Kitchen & Tavern', type: 'American · Neighborhood Favorite', desc: 'A true South Hill institution. Come for the approachable menu and warm vibe.', dist: '5 min walk' },
                { name: 'Wooden City', type: 'New American · Elevated', desc: 'One of Spokane\'s most celebrated restaurants. Local ingredients, inventive dishes. Book ahead.', dist: '10 min drive' },
                { name: 'Perry Street Brewing', type: 'Brewery · Perry District', desc: 'Excellent beer, good food, and a patio that fills up fast on warm evenings.', dist: '8 min drive' },
                { name: 'Inland Pacific Kitchen', type: 'Fine Dining · Pacific NW', desc: 'Farm-to-table flagship. The special-occasion pick — and it delivers.', dist: '12 min drive' },
                { name: 'Rüt', type: 'Vegan · Plant-Based', desc: 'Outstanding plant-based food that even meat-lovers rave about.', dist: '10 min drive' },
              ].map((r, i) => (
                <div key={r.name} className="gb-restaurant">
                  <div className="gb-restaurant-num">{String(i + 1).padStart(2, '0')}</div>
                  <div className="gb-restaurant-info">
                    <h4 className="gb-restaurant-name">{r.name}</h4>
                    <span className="gb-restaurant-type">{r.type}</span>
                    <p className="gb-restaurant-desc">{r.desc}</p>
                    <span className="gb-restaurant-dist">{r.dist}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* THINGS TO DO */}
        <section id="gb-todo" className="gb-section">
          <div className="gb-container">
            <div className="gb-section-icon">⭐</div>
            <h2 className="gb-section-title">Things To Do</h2>

            <div className="gb-activities-grid">
              {[
                { name: 'Walk Manito Park', desc: 'Rose gardens, Japanese garden, duck pond, mirror pond, conservatory — all free, all one block away.', time: 'Any time' },
                { name: 'Riverside State Park', desc: 'Hike the Bowl & Pitcher loop — dramatic basalt rock formations along the Spokane River.', time: '25 min drive' },
                { name: 'Downtown Spokane', desc: 'Riverfront Park, the Garbage Goat, Huntington Park Falls, River Park Square shopping.', time: '10 min drive' },
                { name: 'Mt. Spokane', desc: 'Skiing in winter, hiking in summer. Amazing views of four states and Canada on clear days.', time: '45 min drive' },
                { name: 'Green Bluff', desc: 'Farm country north of town. U-pick berries in summer, apple festival and corn mazes in fall.', time: '30 min drive' },
                { name: 'Gonzaga Campus', desc: 'Walk the beautiful university campus. See the Bing Crosby House Museum and the Bulldog statue.', time: '12 min drive' },
              ].map(a => (
                <div key={a.name} className="gb-activity">
                  <h4 className="gb-activity-name">{a.name}</h4>
                  <p className="gb-activity-desc">{a.desc}</p>
                  <span className="gb-activity-time">{a.time}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* EMERGENCY */}
        <section id="gb-emergency" className="gb-section gb-section-alt">
          <div className="gb-container">
            <div className="gb-section-icon">🆘</div>
            <h2 className="gb-section-title">Emergency Info</h2>

            <div className="gb-card gb-card-urgent">
              <p><strong>Emergency: Call 911</strong></p>
              <p>Property address: <strong>227 E 22nd Ave, Spokane, WA 99203</strong></p>
            </div>

            <div className="gb-emergency-grid">
              {[
                { label: 'Your Host (Ryan)', value: '(509) 555-1234', href: 'tel:+15095551234' },
                { label: 'Nearest Hospital', value: 'Providence Sacred Heart — 15 min drive', href: 'https://maps.google.com/?q=Providence+Sacred+Heart+Medical+Center+Spokane' },
                { label: 'Urgent Care', value: 'MultiCare Indigo Urgent Care', href: 'https://maps.google.com/?q=MultiCare+Indigo+Urgent+Care+Spokane' },
                { label: 'Nearest Pharmacy', value: 'Walgreens on Grand Blvd', href: 'https://maps.google.com/?q=Walgreens+Grand+Blvd+Spokane' },
              ].map(e => (
                <a key={e.label} href={e.href} target="_blank" rel="noopener noreferrer" className="gb-emergency-card">
                  <span className="gb-emergency-label">{e.label}</span>
                  <span className="gb-emergency-value">{e.value}</span>
                </a>
              ))}
            </div>

            <h3 className="gb-subheading">Utilities</h3>
            <div className="gb-card">
              <p><strong>Water shut-off:</strong> Under the kitchen sink, turn the valve clockwise.</p>
              <p><strong>Circuit breaker:</strong> In the basement, accessible through the door in the hallway.</p>
              <p><strong>Fire extinguisher:</strong> Under the kitchen sink.</p>
            </div>
          </div>
        </section>

        {/* BOOK DIRECT — only on property/welcome version */}
        {variant === 'welcome' && (
          <section id="gb-bookdirect" className="gb-section gb-section-direct">
            <div className="gb-container" style={{ textAlign: 'center' }}>
              <div className="gb-section-icon">💛</div>
              <h2 className="gb-section-title">Loved Your Stay?</h2>
              <p className="gb-direct-text">Book directly with us next time and <strong>save 10%</strong> — no platform fees, same great bungalow.</p>
              <a href="https://manitobungalow.com" className="gb-direct-cta" target="_blank" rel="noopener noreferrer">
                Book Direct at ManitoBungalow.com
              </a>
              <div className="gb-direct-links">
                <a href="https://www.instagram.com/manitobungalow/" target="_blank" rel="noopener noreferrer">Follow us on Instagram</a>
                <span className="gb-direct-divider">·</span>
                <a href="https://manitobungalow.com/blog" target="_blank" rel="noopener noreferrer">Read Our Spokane Guide</a>
              </div>
            </div>
          </section>
        )}

        {/* FOOTER */}
        <footer className="gb-footer">
          <p>Manito Bungalow · 227 E 22nd Ave · Spokane, WA 99203</p>
          <p>Questions? Text or call Ryan at <a href="tel:+15095551234">(509) 555-1234</a></p>
        </footer>
      </main>
    </div>
  );
}
