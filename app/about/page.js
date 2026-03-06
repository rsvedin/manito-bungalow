import Nav from '../components/Nav';

export const metadata = {
  title: 'About Us — Manito Bungalow',
  description: 'Meet the family behind Manito Bungalow — and learn why this 1910 craftsman on Spokane\'s South Hill means so much to us.',
};

export default function AboutPage() {
  return (
    <>
      <Nav />
      <main className="about-main">
        {/* HERO */}
        <section className="about-hero">
          <div className="container">
            <p className="section-label">About Us</p>
            <h1 className="section-h2">The family behind<br/>the <em>bungalow.</em></h1>
            <p className="about-hero-sub">Manito Bungalow isn&apos;t just a rental — it&apos;s a home that means the world to us. Here&apos;s our story.</p>
          </div>
        </section>

        {/* OUR STORY */}
        <section className="about-section on-light">
          <div className="container" style={{ maxWidth: 800 }}>
            <p className="section-label" style={{ justifyContent: 'center' }}>Our Story</p>
            <h2 className="section-h2" style={{ textAlign: 'center' }}>Why this house <em>matters.</em></h2>
            <div className="about-prose">
              <p>[Tell your story here — how you discovered the house, what drew you to Spokane&apos;s South Hill, what it was like the first time you walked through the door. Talk about the renovation, the vision you had, and what the house has become. This is the heart of the page — let guests feel the love you have for this place.]</p>
              <p>[You might talk about family roots in Spokane, visits to Manito Park growing up, or how the house became a gathering place for the people you love. Whatever feels authentic to you.]</p>
            </div>
          </div>
        </section>

        {/* MEET THE FAMILY */}
        <section className="about-section on-warm">
          <div className="container">
            <p className="section-label" style={{ justifyContent: 'center' }}>Meet the Family</p>
            <h2 className="section-h2" style={{ textAlign: 'center' }}>The people (and pups)<br/><em>behind every stay.</em></h2>

            <div className="about-grid">
              {/* You */}
              <div className="about-card">
                <div className="about-card-photo">[Photo]</div>
                <div className="about-card-body">
                  <h3 className="about-card-name">[Your Name]</h3>
                  <p className="about-card-role">Host &amp; Owner</p>
                  <p className="about-card-bio">[A few sentences about yourself — your background, what you do, and your role in making the bungalow what it is. What do you love about hosting? What&apos;s your favorite thing about the house?]</p>
                </div>
              </div>

              {/* Ashlyn */}
              <div className="about-card">
                <div className="about-card-photo">[Photo]</div>
                <div className="about-card-body">
                  <h3 className="about-card-name">Ashlyn</h3>
                  <p className="about-card-role">Host &amp; Owner</p>
                  <p className="about-card-bio">[A few sentences about Ashlyn — her personality, her eye for design, her role in the bungalow. What does she bring to the guest experience? What&apos;s her favorite corner of the house or spot in Spokane?]</p>
                </div>
              </div>

              {/* The Kids */}
              <div className="about-card">
                <div className="about-card-photo">[Photo]</div>
                <div className="about-card-body">
                  <h3 className="about-card-name">The Kids</h3>
                  <p className="about-card-role">Chief Fun Officers</p>
                  <p className="about-card-bio">[A few sentences about the kids — their ages if you&apos;d like, what they love about Spokane and the bungalow. Do they have a favorite room? A favorite park activity? This makes the page feel personal and warm.]</p>
                </div>
              </div>

              {/* The Dogs */}
              <div className="about-card">
                <div className="about-card-photo">[Photo]</div>
                <div className="about-card-body">
                  <h3 className="about-card-name">The Dogs</h3>
                  <p className="about-card-role">Official Greeters</p>
                  <p className="about-card-bio">[Names, breeds, personalities. Are they the reason the bungalow is pet-friendly? Do they have favorite spots in Manito Park? Guests love this kind of detail.]</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* WHY WE HOST */}
        <section className="about-section on-light">
          <div className="container" style={{ maxWidth: 800 }}>
            <p className="section-label" style={{ justifyContent: 'center' }}>Why We Host</p>
            <h2 className="section-h2" style={{ textAlign: 'center' }}>More than a <em>place to stay.</em></h2>
            <div className="about-prose">
              <p>[Talk about your hosting philosophy — why you open this home to guests, what kind of experience you want people to have, and what it means to you when someone falls in love with Spokane the way you have.]</p>
              <p>[Maybe end with an invitation — something like &quot;We can&apos;t wait to share this place with you.&quot;]</p>
            </div>
            <div style={{ textAlign: 'center', marginTop: 48 }}>
              <a href="/#book" className="btn-primary">Book Your Stay</a>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer id="footer">
          <div className="container">
            <div className="footer-bottom" style={{ borderTop: 'none', paddingTop: 0 }}>
              <p className="footer-copy">&copy; 2025 Manito Bungalow &middot; Spokane, Washington</p>
              <div className="footer-legal">
                <a href="/">Home</a>
                <a href="/blog">Blog</a>
                <a href="/about">About</a>
                <a href="/#book">Book Now</a>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
