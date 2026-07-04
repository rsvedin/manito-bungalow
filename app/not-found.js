import Link from 'next/link';
import Nav from './components/Nav';

export const metadata = {
  title: 'Page Not Found — Manito Bungalow',
};

export default function NotFound() {
  return (
    <>
      <Nav />
      <main id="main-content" className="on-light" style={{ background: 'var(--cream)', minHeight: '70vh', display: 'flex', alignItems: 'center' }}>
        <div className="container" style={{ textAlign: 'center', paddingTop: 'calc(var(--nav-h) + 64px)', paddingBottom: 100 }}>
          <p className="section-label" style={{ justifyContent: 'center' }}>404</p>
          <h1 className="section-h2">This page has <em>wandered off.</em></h1>
          <p className="section-body" style={{ margin: '0 auto 32px', maxWidth: 480 }}>
            The page you&apos;re looking for doesn&apos;t exist — but the bungalow is right where we left it, one block from Manito Park.
          </p>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/" className="hero-cta">Back to the Bungalow</Link>
            <Link href="/blog" className="hero-cta-secondary" style={{ color: 'var(--text-dark)', borderColor: 'var(--text-dark)' }}>Read the Blog</Link>
          </div>
        </div>
      </main>
    </>
  );
}
