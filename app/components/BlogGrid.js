'use client';

import { useState } from 'react';
import Link from 'next/link';

const filters = [
  { label: 'All', tags: null },
  { label: 'Food & Drink', tags: ['Restaurants', 'Food', 'Craft Beer', 'Breweries'] },
  { label: 'Things to Do', tags: ['Events', 'Outdoors', 'Sports', 'Fitness', 'Summer', 'Winter'] },
  { label: 'Neighborhood', tags: ['South Hill', 'Manito Park', 'Perry District', 'Downtown', 'History'] },
  { label: 'Travel Tips', tags: ['Travel Tips'] },
  { label: 'Family', tags: ['Family'] },
];

export default function BlogGrid({ posts }) {
  const [active, setActive] = useState('All');

  const filtered = active === 'All'
    ? posts
    : posts.filter(post => {
        const filter = filters.find(f => f.label === active);
        return post.tags?.some(tag => filter.tags.includes(tag));
      });

  return (
    <>
      <div className="blog-filters">
        {filters.map(f => (
          <button
            key={f.label}
            className={`blog-filter-btn${active === f.label ? ' active' : ''}`}
            onClick={() => setActive(f.label)}
          >
            {f.label}
          </button>
        ))}
      </div>
      <div className="blog-grid">
        {filtered.map(post => (
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
              {post.tags && post.tags.length > 0 && (
                <div className="blog-card-tags">
                  {post.tags.map(tag => (
                    <span key={tag} className="blog-tag">#{tag}</span>
                  ))}
                </div>
              )}
              <span className="blog-card-link">Read more</span>
            </div>
          </Link>
        ))}
        {filtered.length === 0 && (
          <p className="blog-no-results">No posts found for this filter.</p>
        )}
      </div>
    </>
  );
}
