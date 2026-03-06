import { getAllPosts } from '../../lib/blog';
import Nav from '../components/Nav';
import BlogGrid from '../components/BlogGrid';
import Link from 'next/link';

export const metadata = {
  title: 'Blog — Manito Bungalow',
  description: 'Stories, guides, and tips for your stay at Manito Bungalow in Spokane, WA.',
};

export default function BlogIndex() {
  const posts = getAllPosts();

  return (
    <>
      <Nav />
      <main id="main-content" className="blog-page">
        <div className="container">
          <div className="blog-header">
            <p className="section-label" style={{ justifyContent: 'center' }}>From the Bungalow</p>
            <h1 className="section-h2" style={{ textAlign: 'center' }}>Stories &amp; <em>Guides</em></h1>
            <p className="blog-header-desc">Tips for your stay, neighborhood favorites, and everything Spokane.</p>
          </div>
          <BlogGrid posts={posts} />
        </div>
      </main>

      <footer id="footer">
        <div className="container">
          <div className="footer-bottom">
            <p className="footer-copy">&copy; 2025 Manito Bungalow &middot; Spokane, Washington</p>
            <div className="footer-legal">
              <Link href="/">Home</Link>
              <Link href="/blog">Blog</Link>
              <a href="/#book">Book Now</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
