/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export for GitHub Pages. trailingSlash:false emits blog/<slug>.html,
  // preserving the URLs of the already-indexed blog posts.
  output: 'export',
  trailingSlash: false,
  images: { unoptimized: true },
};

export default nextConfig;
