'use client';

import { useState, useEffect } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
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
  const searchParams = useSearchParams();
  const router = useRouter();
  const tagParam = searchParams.get('tag');

  const [activeFilter, setActiveFilter] = useState('All');
  const [activeTag, setActiveTag] = useState(null);

  useEffect(() => {
    if (tagParam) {
      setActiveFilter(null);
      setActiveTag(tagParam);
    } else {
      setActiveFilter('All');
      setActiveTag(null);
    }
  }, [tagParam]);

  const handleFilter = (label) => {
    setActiveFilter(label);
    setActiveTag(null);
    router.replace('/blog', { scroll: false });
  };

  const handleTagClick = (tag, e) => {
    e.preventDefault();
    e.stopPropagation();
    setActiveFilter(null);
    setActiveTag(tag);
    router.replace(`/blog?tag=${encodeURIComponent(tag)}`, { scroll: false });
  };

  let filtered;
  if (activeTag) {
    filtered = posts.filter(post => post.tags?.includes(activeTag));
  } else if (!activeFilter || activeFilter === 'All') {
    filtered = posts;
  } else {
    const filter = filters.find(f => f.label === activeFilter);
    filtered = posts.filter(post => post.tags?.some(tag => filter.tags.includes(tag)));
  }

  return (
    <>
      <div className="blog-filters">
        {filters.map(f => (
          <button
            key={f.label}
            className={`blog-filter-btn${activeFilter === f.label && !activeTag ? ' active' : ''}`}
            onClick={() => handleFilter(f.label)}
          >
            {f.label}
          </button>
        ))}
      </div>
      {activeTag && (
        <div className="blog-active-tag">
          <span>Showing posts tagged <strong>#{activeTag}</strong></span>
          <button onClick={() => handleFilter('All')} className="blog-clear-filter">Clear filter</button>
        </div>
      )}
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
                    <span
                      key={tag}
                      className={`blog-tag clickable${activeTag === tag ? ' active' : ''}`}
                      onClick={(e) => handleTagClick(tag, e)}
                      role="button"
                      tabIndex={0}
                      onKeyDown={(e) => { if (e.key === 'Enter') handleTagClick(tag, e); }}
                    >
                      #{tag}
                    </span>
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
