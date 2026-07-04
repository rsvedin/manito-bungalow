import './globals.css';

export const metadata = {
  title: "Manito Bungalow — Spokane's Favorite Bungalow",
  description: "A beautifully restored 1911 craftsman bungalow on Spokane's South Hill — one block from Manito Park. Sleeps 10. Book direct for the best rate.",
  metadataBase: new URL('https://manitobungalow.com'),
  referrer: 'strict-origin-when-cross-origin',
  alternates: { canonical: '/' },
  openGraph: {
    title: "Manito Bungalow — Spokane's Favorite Bungalow",
    description: "A beautifully restored 1911 craftsman bungalow on Spokane's South Hill — one block from Manito Park. Sleeps 10.",
    url: 'https://manitobungalow.com',
    siteName: 'Manito Bungalow',
    type: 'website',
    images: [{ url: '/images/og-home.jpg', width: 1200, height: 630, alt: 'Manito Bungalow — restored 1911 craftsman on Spokane\'s South Hill' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Manito Bungalow — Spokane's Favorite Bungalow",
    description: "A restored 1911 craftsman bungalow one block from Manito Park in Spokane. Sleeps 10. Book direct for the best rate.",
    images: ['/images/og-home.jpg'],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&family=Jost:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
