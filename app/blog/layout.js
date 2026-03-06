import Nav from '../components/Nav';

export default function BlogLayout({ children }) {
  return (
    <>
      <Nav />
      {children}
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
    </>
  );
}
