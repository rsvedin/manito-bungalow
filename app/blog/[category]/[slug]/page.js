import Link from 'next/link';
import { notFound } from 'next/navigation';
import { posts, categories, getPost, getCategoryBySlug, formatDate } from '../../../data/blog';

export function generateStaticParams() {
  return posts.map(p => ({ category: p.category, slug: p.slug }));
}

export function generateMetadata({ params }) {
  const post = getPost(params.slug);
  if (!post) return {};
  return {
    title: `${post.title} — Manito Bungalow Blog`,
    description: post.excerpt,
  };
}

export default function PostPage({ params }) {
  const post = getPost(params.slug);
  if (!post || post.category !== params.category) notFound();

  const cat = getCategoryBySlug(post.category);

  // Simple markdown-ish rendering: headings and paragraphs
  const renderBody = (text) => {
    return text.split('\n\n').map((block, i) => {
      const trimmed = block.trim();
      if (trimmed.startsWith('## ')) {
        return <h2 key={i} className="post-h2">{trimmed.slice(3)}</h2>;
      }
      if (trimmed.startsWith('**') && trimmed.endsWith('**')) {
        return <p key={i} className="post-body"><strong>{trimmed.slice(2, -2)}</strong></p>;
      }
      // Handle lines starting with - as a list
      if (trimmed.startsWith('- ')) {
        const items = trimmed.split('\n').filter(l => l.trim().startsWith('- '));
        return (
          <ul key={i} className="post-list">
            {items.map((item, j) => {
              const content = item.replace(/^-\s*/, '');
              const parts = content.split(/(\*\*.*?\*\*)/g);
              return (
                <li key={j}>
                  {parts.map((part, k) =>
                    part.startsWith('**') && part.endsWith('**')
                      ? <strong key={k}>{part.slice(2, -2)}</strong>
                      : part
                  )}
                </li>
              );
            })}
          </ul>
        );
      }
      // Regular paragraph with inline bold
      const parts = trimmed.split(/(\*\*.*?\*\*)/g);
      return (
        <p key={i} className="post-body">
          {parts.map((part, k) =>
            part.startsWith('**') && part.endsWith('**')
              ? <strong key={k}>{part.slice(2, -2)}</strong>
              : part
          )}
        </p>
      );
    });
  };

  return (
    <main className="blog-main">
      <article className="post-article">
        <div className="container" style={{ maxWidth: 720 }}>
          <div className="post-meta-top">
            <Link href="/blog" className="post-back">&larr; All posts</Link>
            <Link href={`/blog/${post.category}`} className="post-cat-link">{cat?.name}</Link>
          </div>
          <h1 className="post-title">{post.title}</h1>
          <time className="post-date">{formatDate(post.date)}</time>
          <div className="post-content">
            {renderBody(post.body)}
          </div>
          <div className="post-footer">
            <Link href="/blog" className="link-arrow">Back to all posts</Link>
          </div>
        </div>
      </article>
    </main>
  );
}
