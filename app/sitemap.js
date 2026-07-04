import { getAllPosts } from '../lib/blog';

const BASE = 'https://manitobungalow.com';

// Static export: evaluated at build time, emits out/sitemap.xml.
export const dynamic = 'force-static';

export default function sitemap() {
  const posts = getAllPosts();

  return [
    { url: BASE, changeFrequency: 'monthly', priority: 1 },
    { url: `${BASE}/photos`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/blog`, changeFrequency: 'weekly', priority: 0.7 },
    ...posts.map(post => ({
      url: `${BASE}/blog/${post.slug}`,
      lastModified: new Date(post.date),
      changeFrequency: 'yearly',
      priority: 0.6,
    })),
  ];
}
