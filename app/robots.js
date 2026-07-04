// Static export: evaluated at build time, emits out/robots.txt.
export const dynamic = 'force-static';

export default function robots() {
  return {
    rules: [{ userAgent: '*', allow: '/' }],
    sitemap: 'https://manitobungalow.com/sitemap.xml',
  };
}
