import { rating, BOOKING } from '../../lib/listing';

// TODO(ryan): real guest quotes needed — paste 3–5 favorites from the Airbnb
// host dashboard and they'll render here. Empty = section shows ratings only.
const QUOTES = [];

const CATEGORY_LABELS = {
  CLEANLINESS: 'Cleanliness',
  ACCURACY: 'Accuracy',
  CHECKIN: 'Check-in',
  COMMUNICATION: 'Communication',
  LOCATION: 'Location',
  VALUE: 'Value',
};

export default function ReviewsStrip() {
  return (
    <section id="reviews" className="on-dark" style={{ background: 'var(--ink-mid)' }}>
      <div className="container" style={{ textAlign: 'center' }}>
        <p className="section-label" style={{ justifyContent: 'center' }}>Guest Reviews</p>
        <h2 className="section-h2">★ {rating.overall} <em>across {rating.count} reviews.</em></h2>
        <div className="rating-grid">
          {rating.categories.map(c => (
            <div key={c.category} className="rating-cell">
              <span className="rating-num">{c.rating}</span>
              <span className="rating-label">{CATEGORY_LABELS[c.category] || c.category}</span>
            </div>
          ))}
        </div>
        {QUOTES.length > 0 && (
          <div className="quote-grid">
            {QUOTES.map(q => (
              <blockquote key={q.author + q.date} className="quote-card">
                <p>“{q.text}”</p>
                <footer>— {q.author}, {q.date}</footer>
              </blockquote>
            ))}
          </div>
        )}
        <p style={{ marginTop: 36, fontSize: 13, color: 'var(--text-on-dark-muted)' }}>
          Verified guest ratings from our <a href={BOOKING.airbnb} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--sand)', textDecoration: 'underline' }}>Airbnb listing</a>.
        </p>
      </div>
    </section>
  );
}
