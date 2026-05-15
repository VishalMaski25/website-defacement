'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Gallery() {
  const images = [
    // {
    //   url: '/images/hacked.png',
    //   title: 'Security Alert Simulation',
    //   category: 'Security'
    // },
    {
      url: '/images/Screenshot 2026-05-15 110727.png',
      title: 'Platform Overview',
      category: 'Monitoring'
    },
    {
      url: '/images/Screenshot 2026-05-15 110744.png',
      title: 'Detection Logic',
      category: 'Analytics'
    },
    {
      url: '/images/Screenshot 2026-05-15 110804.png',
      title: 'Alert History',
      category: 'Logs'
    },
    {
      url: '/globe.svg',
      title: 'Global Network',
      category: 'Infrastructure'
    }
  ];

  return (
    <div>
      <section className="section" style={{ background: 'var(--primary)', color: 'white', padding: '4rem 0' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h1 style={{ fontSize: '3rem', fontWeight: '800', marginBottom: '1rem' }}>Our Gallery</h1>
          <p style={{ opacity: '0.8', maxWidth: '600px', margin: '0 auto' }}>
            Explore our vibrant campus life, state-of-the-art facilities, and the inspiring moments of learning and growth at Elite Academy.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', 
            gap: '2rem' 
          }}>
            {images.map((img, index) => (
              <div key={index} className="gallery-card">
                <Image 
                  src={img.url} 
                  alt={img.title} 
                  fill 
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  style={{ objectFit: 'cover' }}
                  className="gallery-img"
                />
                <div className="gallery-info">
                  <span style={{ 
                    fontSize: '0.7rem', 
                    fontWeight: '700', 
                    textTransform: 'uppercase', 
                    letterSpacing: '1px',
                    color: 'var(--secondary)',
                    marginBottom: '0.5rem',
                    display: 'block'
                  }}>
                    {img.category}
                  </span>
                  <h3 style={{ fontSize: '1.2rem', fontWeight: '600' }}>{img.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ backgroundColor: 'white', borderTop: '1px solid var(--border)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ marginBottom: '1.5rem' }}>Want to see more?</h2>
          <p style={{ marginBottom: '2rem', color: 'var(--text-muted)' }}>Follow us on social media for daily updates and student spotlights.</p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
            <Link href="/contact" className="btn btn-primary">Visit Our Campus</Link>
            <Link href="/" className="btn" style={{ border: '1px solid var(--border)' }}>Back to Home</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
