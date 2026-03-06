import { getPostBySlug, getAllSlugs } from '../../../lib/blog';
import Nav from '../../components/Nav';
import InstagramEmbed from '../../components/InstagramEmbed';
import Link from 'next/link';

export async function generateStaticParams() {
  const slugs = getAllSlugs();
  return slugs.map(slug => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  return {
    title: `${post.title} — Manito Bungalow`,
    description: post.excerpt || '',
  };
}

export default async function BlogPost({ params }) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  return (
    <>
      <Nav />
      <main id="main-content" className="blog-page">
        <article className="blog-article container">
          <div className="blog-article-header">
            <Link href="/blog" className="blog-back">&larr; All Posts</Link>
            <time className="blog-card-date">{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</time>
            <h1 className="blog-article-title">{post.title}</h1>
            {post.tags && post.tags.length > 0 && (
              <div className="blog-article-tags">
                {post.tags.map(tag => (
                  <span key={tag} className="blog-tag">#{tag}</span>
                ))}
              </div>
            )}
          </div>
          {post.coverImage && (
            <div className="blog-article-cover">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={post.coverImage} alt="" />
            </div>
          )}
          <div className="blog-article-content" dangerouslySetInnerHTML={{ __html: post.content }} />
          <InstagramEmbed />
          <div className="blog-article-footer">
            <Link href="/blog" className="blog-back">&larr; Back to all posts</Link>
            <a href="/#book" className="btn-primary" style={{ marginLeft: 'auto' }}>Book Your Stay</a>
          </div>
        </article>
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
