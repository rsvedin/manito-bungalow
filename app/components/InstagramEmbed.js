'use client';

import { useEffect } from 'react';

export default function InstagramEmbed() {
  useEffect(() => {
    // Load Instagram embed.js if not already loaded
    if (!document.querySelector('script[src*="instagram.com/embed.js"]')) {
      const script = document.createElement('script');
      script.src = 'https://www.instagram.com/embed.js';
      script.async = true;
      script.onload = () => {
        if (window.instgrm) {
          window.instgrm.Embeds.process();
        }
      };
      document.body.appendChild(script);
    } else if (window.instgrm) {
      // Script already loaded, just process new embeds
      window.instgrm.Embeds.process();
    }
  }, []);

  return null;
}
