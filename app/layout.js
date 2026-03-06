import './globals.css';

export const metadata = {
  title: "Manito Bungalow — Spokane's Favorite Bungalow",
  description: "A beautifully restored 1910 craftsman bungalow on Spokane's South Hill — one block from Manito Park. Sleeps 10. Book direct for the best rate.",
  metadataBase: new URL('https://manitobungalow.com'),
  referrer: 'strict-origin-when-cross-origin',
  openGraph: {
    title: "Manito Bungalow — Spokane's Favorite Bungalow",
    description: "A beautifully restored 1910 craftsman bungalow on Spokane's South Hill — one block from Manito Park. Sleeps 10.",
    url: 'https://manitobungalow.com',
    siteName: 'Manito Bungalow',
    type: 'website',
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
