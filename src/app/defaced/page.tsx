'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function DefacedHome() {
  const classes = [
    { title: 'Visual Detection', tutor: 'Security Engine', image: '/images/screenshot_110744.png', level: 'Advanced' },
    { title: 'Anomaly Analysis', tutor: 'Core Analytics', image: '/images/screenshot_110804.png', level: 'Real-time' },
    { title: 'Infrastructure', tutor: 'Network Ops', image: '/globe.svg', level: 'Global' },
    { title: 'Interface Design', tutor: 'UI/UX Team', image: '/window.svg', level: 'User-centric' },
  ];

  return (
    <div style={{ backgroundColor: 'black', color: 'red', minHeight: '100vh' }}>
      {/* Hero Section - Defaced */}
      <section style={{ 
        background: 'black', 
        color: '#ef4444',
        minHeight: '600px',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        borderBottom: '5px solid #ef4444'
      }}>
        <div className="container" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
          gap: '4rem',
          alignItems: 'center'
        }}>
          <div>
            <h1 style={{ fontSize: '3.5rem', fontWeight: '800', lineHeight: '1.2', marginBottom: '1.5rem' }}>
              SYSTEM COMPROMISED
            </h1>
            <p style={{ fontSize: '1.2rem', marginBottom: '2.5rem', opacity: '0.9' }}>
              Your website has been visually defaced for testing purposes. Full-page SSIM divergence should be detected.
            </p>
          </div>
          <div style={{ textAlign: 'center' }}>
             <div style={{ fontSize: '10rem' }}>💀</div>
          </div>
        </div>
      </section>

      {/* Featured Classes - Defaced */}
      <section className="section" style={{ background: 'black' }}>
        <div className="container">
          <h2 className="section-title" style={{ color: '#ef4444' }}>Our Featured Classes</h2>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
            gap: '2rem' 
          }}>
            {classes.map((item, index) => (
              <div key={index} className="card" style={{ backgroundColor: '#111', border: '1px solid #ef4444', color: '#ef4444' }}>
                <div style={{ borderRadius: '12px', overflow: 'hidden', marginBottom: '1.5rem', height: '200px', position: 'relative', filter: 'grayscale(1) contrast(2)' }}>
                  <Image src={item.image} alt={item.title} fill style={{ objectFit: 'cover' }} />
                </div>
                <h3 style={{ fontSize: '1.25rem' }}>{item.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div style={{ textAlign: 'center', padding: '5rem', backgroundColor: 'black' }}>
         <Link href="/" style={{ color: 'white', textDecoration: 'underline' }}>Back to Standard Homepage (Baseline)</Link>
      </div>
    </div>
  );
}
