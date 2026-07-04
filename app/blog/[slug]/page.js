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
    alternates: { canonical: `/blog/${slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt || '',
      url: `/blog/${slug}`,
      siteName: 'Manito Bungalow',
      type: 'article',
      publishedTime: post.date,
      ...(post.coverImage ? { images: [{ url: post.coverImage }] } : {}),
    },
  };
}

export default async function BlogPost({ params }) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt || '',
    datePublished: post.date,
    url: `https://manitobungalow.com/blog/${slug}`,
    ...(post.coverImage ? { image: post.coverImage } : {}),
    author: { '@type': 'Organization', name: 'Manito Bungalow' },
    publisher: { '@type': 'Organization', name: 'Manito Bungalow', url: 'https://manitobungalow.com' },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Nav />
      <main id="main-content" className="blog-page">
        <article className="blog-article container">
          <div className="blog-article-header">
            <Link href="/blog" className="blog-back">&larr; All Posts</Link>
            <time className="blog-card-date" dateTime={post.date}>{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' })}</time>
            <h1 className="blog-article-title">{post.title}</h1>
            {post.tags && post.tags.length > 0 && (
              <div className="blog-article-tags">
                {post.tags.map(tag => (
                  <Link key={tag} href={`/blog?tag=${encodeURIComponent(tag)}`} className="blog-tag clickable">#{tag}</Link>
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
            <p className="footer-copy">&copy; {new Date().getFullYear()} Manito Bungalow &middot; Spokane, Washington</p>
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
