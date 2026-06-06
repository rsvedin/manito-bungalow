import { rating, BOOKING } from '../../lib/listing';

// Verbatim guest quotes from the Airbnb listing (trimmed with ellipses only).
const QUOTES = [
  {
    author: 'Melissa',
    date: 'November 2025',
    text: 'We absolutely loved our stay! From the moment we arrived, everything was spotless and beautifully decorated… This was easily one of the best Airbnb experiences we’ve ever had.',
  },
  {
    author: 'Heidi',
    date: 'July 2024',
    text: 'The house is even cuter in person than in the photos… The kitchen is one of the most well-stocked of any Airbnb we’ve ever stayed in.',
  },
  {
    author: 'Eva',
    date: 'September 2025',
    text: 'The house was extremely comfortable and inviting. The neighborhood was peaceful and so close to Manito Park… We would definitely stay here again on our next trip to Spokane.',
  },
];

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
        <p style={{ fontSize: 13, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--sand)' }}>
          Guest Favorite on Airbnb · 9.6/10 on VRBO — Top 10% in the area
        </p>
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
          Verified guest ratings from our <a href={BOOKING.airbnb} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--sand)', textDecoration: 'underline' }}>Airbnb</a> and <a href={BOOKING.vrbo} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--sand)', textDecoration: 'underline' }}>VRBO</a> listings.
        </p>
      </div>
    </section>
  );
}
