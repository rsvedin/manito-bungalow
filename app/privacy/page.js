import Nav from '../components/Nav';

export const metadata = {
  title: 'Privacy — Manito Bungalow',
  description: 'How manitobungalow.com handles your information.',
  alternates: { canonical: '/privacy' },
};

export default function PrivacyPage() {
  return (
    <>
      <a href="#main-content" className="skip-link">Skip to main content</a>
      <Nav />
      <main id="main-content" className="blog-page">
        <div className="container" style={{ maxWidth: 760 }}>
          <div className="blog-header">
            <p className="section-label" style={{ justifyContent: 'center' }}>The Short Version: We Keep It Simple</p>
            <h1 className="section-h2" style={{ textAlign: 'center' }}>Privacy <em>Policy</em></h1>
          </div>

          <div className="blog-article-content">
            <p>This website is a simple, static site. We don&apos;t run our own analytics, set our own cookies, or collect personal information directly. Here&apos;s what does happen when you use the site:</p>

            <h2>Booking</h2>
            <p>Reservations and payments are handled by <a href="https://hospitable.com" target="_blank" rel="noopener noreferrer">Hospitable</a> (our booking platform) with payments processed by Stripe, inside the booking widget embedded on this site. Any information you enter there — name, contact details, payment information — goes to Hospitable and Stripe, not to this website. Their privacy policies apply: <a href="https://hospitable.com/privacy-policy/" target="_blank" rel="noopener noreferrer">Hospitable</a>, <a href="https://stripe.com/privacy" target="_blank" rel="noopener noreferrer">Stripe</a>. We (your hosts) receive your reservation details so we can host you.</p>

            <h2>Third-party content</h2>
            <p>Some pages load resources from third parties, which may see your IP address and set their own cookies: Google Fonts (typography), Instagram (embedded posts on some blog pages), and links out to Airbnb and VRBO. Their respective privacy policies apply to those services.</p>

            <h2>Hosting</h2>
            <p>The site is hosted on Vercel, which may log standard request data (IP address, user agent) to serve and protect the site.</p>

            <h2>During your stay</h2>
            <p>For everyone&apos;s safety, the property has three exterior security cameras (front porch, doorbell, and back deck) that record when motion is detected. There are no cameras inside the home. Full details are disclosed in our <a href="/house-rules">house rules</a> and on the booking platforms.</p>

            <h2>Contact</h2>
            <p>Questions about any of this? Email us at <a href="mailto:rsvedin@gmail.com">rsvedin@gmail.com</a>.</p>
          </div>

          <div style={{ textAlign: 'center', margin: '48px 0 64px' }}>
            <a href="/" className="hero-cta">Back to the Bungalow</a>
          </div>
        </div>
      </main>
    </>
  );
}
