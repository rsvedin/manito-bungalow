import { getAllPosts } from '../../lib/blog';
import Nav from '../components/Nav';
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
          <div className="blog-grid">
            {posts.map(post => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="blog-card">
                {post.coverImage && (
                  <div className="blog-card-img">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={post.coverImage} alt="" loading="lazy" />
                  </div>
                )}
                <div className="blog-card-body">
                  <time className="blog-card-date">{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</time>
                  <h2 className="blog-card-title">{post.title}</h2>
                  {post.excerpt && <p className="blog-card-excerpt">{post.excerpt}</p>}
                  <span className="blog-card-link">Read more</span>
                </div>
              </Link>
            ))}
          </div>
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
