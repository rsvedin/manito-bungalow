import Link from 'next/link';
import { notFound } from 'next/navigation';
import { categories, getPostsByCategory, getCategoryBySlug, formatDate } from '../../data/blog';

export function generateStaticParams() {
  return categories.map(c => ({ category: c.slug }));
}

export function generateMetadata({ params }) {
  const cat = getCategoryBySlug(params.category);
  if (!cat) return {};
  return {
    title: `${cat.name} — Manito Bungalow Blog`,
    description: `${cat.name} posts from Manito Bungalow — Spokane travel tips, guides, and updates.`,
  };
}

export default function CategoryPage({ params }) {
  const cat = getCategoryBySlug(params.category);
  if (!cat) notFound();

  const categoryPosts = getPostsByCategory(params.category);

  return (
    <main className="blog-main">
      <section className="blog-hero">
        <div className="container">
          <p className="section-label">Blog</p>
          <h1 className="section-h2">{cat.name}</h1>
          <p className="blog-hero-sub">
            <Link href="/blog" style={{ color: '#7A5C30', textDecoration: 'underline' }}>All posts</Link>
            {' '}&rarr; {cat.name}
          </p>
        </div>
      </section>

      <section className="blog-content">
        <div className="container">
          <div className="blog-categories">
            <Link href="/blog" className="blog-cat-pill">All</Link>
            {categories.map(c => (
              <Link key={c.slug} href={`/blog/${c.slug}`} className={`blog-cat-pill${c.slug === params.category ? ' active' : ''}`}>{c.name}</Link>
            ))}
          </div>

          {categoryPosts.length === 0 ? (
            <p style={{ textAlign: 'center', color: 'var(--text-light)', padding: '60px 0' }}>No posts in this category yet. Check back soon.</p>
          ) : (
            <div className="blog-grid">
              {categoryPosts.map(post => (
                <Link key={post.slug} href={`/blog/${post.category}/${post.slug}`} className="blog-card">
                  <span className="blog-card-cat">{cat.name}</span>
                  <h2 className="blog-card-title">{post.title}</h2>
                  <p className="blog-card-excerpt">{post.excerpt}</p>
                  <span className="blog-card-date">{formatDate(post.date)}</span>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
