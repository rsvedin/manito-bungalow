import Link from 'next/link';
import { categories, posts, formatDate } from '../data/blog';

export const metadata = {
  title: 'Blog — Manito Bungalow',
  description: 'Spokane travel tips, local guides, things to do, and property updates from Manito Bungalow.',
};

export default function BlogIndex() {
  const sorted = [...posts].sort((a, b) => new Date(b.date) - new Date(a.date));

  return (
    <main className="blog-main">
      <section className="blog-hero">
        <div className="container">
          <p className="section-label">Blog</p>
          <h1 className="section-h2">Stories, tips &amp; <em>local guides.</em></h1>
          <p className="blog-hero-sub">Everything you need to plan the perfect Spokane trip — from neighborhood secrets to seasonal travel advice.</p>
        </div>
      </section>

      <section className="blog-content">
        <div className="container">
          <div className="blog-categories">
            <Link href="/blog" className="blog-cat-pill active">All</Link>
            {categories.map(c => (
              <Link key={c.slug} href={`/blog/${c.slug}`} className="blog-cat-pill">{c.name}</Link>
            ))}
          </div>

          <div className="blog-grid">
            {sorted.map(post => {
              const cat = categories.find(c => c.slug === post.category);
              return (
                <Link key={post.slug} href={`/blog/${post.category}/${post.slug}`} className="blog-card">
                  <span className="blog-card-cat">{cat?.name}</span>
                  <h2 className="blog-card-title">{post.title}</h2>
                  <p className="blog-card-excerpt">{post.excerpt}</p>
                  <span className="blog-card-date">{formatDate(post.date)}</span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
