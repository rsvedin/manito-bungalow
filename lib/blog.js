import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const postsDirectory = path.join(process.cwd(), 'content/blog');

export function getAllPosts() {
  const filenames = fs.readdirSync(postsDirectory).filter(f => f.endsWith('.md'));
  const posts = filenames.map(filename => {
    const slug = filename.replace(/\.md$/, '');
    const fullPath = path.join(postsDirectory, filename);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data } = matter(fileContents);
    return { slug, ...data };
  });
  return posts.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getAllSlugs() {
  const filenames = fs.readdirSync(postsDirectory).filter(f => f.endsWith('.md'));
  return filenames.map(f => f.replace(/\.md$/, ''));
}

export async function getPostBySlug(slug) {
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);
  const processed = await remark().use(html, { sanitize: false }).process(content);
  return { slug, content: processed.toString(), ...data };
}
