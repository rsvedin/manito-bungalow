import Nav from '../components/Nav';
import { listing } from '../../lib/listing';

export const metadata = {
  title: 'House Rules — Manito Bungalow',
  description: 'Check-in, checkout, and house rules for your stay at Manito Bungalow in Spokane, WA.',
  alternates: { canonical: '/house-rules' },
};

// Rules render from the scraped listing data so this page can't drift from
// what guests agree to on Airbnb/VRBO.
const safetyDevices = listing.safety_property.find(s => s.section === 'Safety devices')?.items ?? [];

export default function HouseRulesPage() {
  return (
    <>
      <a href="#main-content" className="skip-link">Skip to main content</a>
      <Nav />
      <main id="main-content" className="blog-page">
        <div className="container" style={{ maxWidth: 760 }}>
          <div className="blog-header">
            <p className="section-label" style={{ justifyContent: 'center' }}>Good Guests, Great Stays</p>
            <h1 className="section-h2" style={{ textAlign: 'center' }}>House <em>Rules</em></h1>
            <p className="blog-header-desc">A few simple things that keep the bungalow wonderful for every guest.</p>
          </div>

          {listing.house_rules.map(group => (
            <section key={group.section} style={{ marginBottom: 40 }}>
              <h2 style={{ fontFamily: 'var(--font-serif, inherit)', fontSize: 26, marginBottom: 16 }}>{group.section}</h2>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {group.items.map(item => (
                  <li key={item.title} style={{ padding: '10px 0', borderBottom: '1px solid var(--cream-dark)', fontSize: 16, lineHeight: 1.6 }}>
                    {item.title}
                    {item.subtitle && <div style={{ fontSize: 14, color: 'var(--text-mid)', marginTop: 4 }}>{item.subtitle}</div>}
                  </li>
                ))}
              </ul>
            </section>
          ))}

          <section style={{ marginBottom: 40 }}>
            <h2 style={{ fontFamily: 'var(--font-serif, inherit)', fontSize: 26, marginBottom: 16 }}>Safety &amp; property</h2>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {safetyDevices.map(item => (
                <li key={item.title} style={{ padding: '10px 0', borderBottom: '1px solid var(--cream-dark)', fontSize: 16, lineHeight: 1.6 }}>
                  {item.title}
                  {item.subtitle && <div style={{ fontSize: 14, color: 'var(--text-mid)', marginTop: 4, whiteSpace: 'pre-line' }}>{item.subtitle}</div>}
                </li>
              ))}
            </ul>
          </section>

          <p style={{ fontSize: 15, color: 'var(--text-mid)', textAlign: 'center', marginBottom: 48 }}>
            Questions about a rule or your stay? <a href="mailto:rsvedin@gmail.com" style={{ color: '#7A5C30', textDecoration: 'underline' }}>Email us</a> — we respond within the hour.
          </p>
          <div style={{ textAlign: 'center', marginBottom: 64 }}>
            <a href="/#book" className="hero-cta">Book Your Stay</a>
          </div>
        </div>
      </main>
    </>
  );
}
