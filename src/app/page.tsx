'use client';

import Image from 'next/image';
import Link from 'next/link';

import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

function HomeContent() {
  const searchParams = useSearchParams();
  const isDefaced = searchParams.get('mode') === 'defaced';
  
  const classes = [
    { title: 'Visual Detection', tutor: 'Security Engine', image: '/images/screenshot_110744.png', level: 'Advanced' },
    { title: 'Anomaly Analysis', tutor: 'Core Analytics', image: '/images/screenshot_110804.png', level: 'Real-time' },
    { title: 'Infrastructure', tutor: 'Network Ops', image: '/globe.svg', level: 'Global' },
    { title: 'Interface Design', tutor: 'UI/UX Team', image: '/window.svg', level: 'User-centric' },
  ];

  const themeStyle = isDefaced ? {
    backgroundColor: 'black',
    color: '#ef4444'
  } : {};

  return (
    <div style={themeStyle}>
      {/* Hero Section */}
      <section className="section" style={{ 
        background: isDefaced ? 'black' : 'linear-gradient(135deg, #1a365d 0%, #2d3748 100%)', 
        color: isDefaced ? '#ef4444' : 'white',
        minHeight: '600px',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        borderBottom: isDefaced ? '5px solid #ef4444' : 'none'
      }}>
        <div className="container" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
          gap: '4rem',
          alignItems: 'center',
          position: 'relative',
          zIndex: 1
        }}>
          <div>
            {!isDefaced && (
              <span style={{ 
                backgroundColor: 'var(--secondary)', 
                color: 'var(--primary)', 
                padding: '0.5rem 1rem', 
                borderRadius: '20px',
                fontSize: '0.8rem',
                fontWeight: '700',
                textTransform: 'uppercase',
                letterSpacing: '1px',
                marginBottom: '1.5rem',
                display: 'inline-block'
              }}>
                Now Enrolling for 2024
              </span>
            )}
            <h1 style={{ fontSize: '3.5rem', fontWeight: '800', lineHeight: '1.2', marginBottom: '1.5rem' }}>
              {isDefaced ? 'SYSTEM COMPROMISED' : <>Master Your Future with <span style={{ color: 'var(--secondary)' }}>Elite Academy</span></>}
            </h1>
            <p style={{ fontSize: '1.2rem', marginBottom: '2.5rem', opacity: '0.9', maxWidth: '500px' }}>
              {isDefaced 
                ? 'Your website has been visually defaced for testing purposes. Full-page SSIM divergence should be detected.' 
                : 'Experience personalized learning from top-tier educators. We help you excel in academics and beyond.'}
            </p>
            {!isDefaced && (
              <div style={{ display: 'flex', gap: '1rem' }}>
                <Link href="/payment" className="btn btn-secondary">Get Started</Link>
                <Link href="/about" className="btn" style={{ border: '2px solid white', color: 'white' }}>Learn More</Link>
              </div>
            )}
          </div>
          <div style={{ position: 'relative' }}>
            <div style={{
              borderRadius: '24px',
              overflow: 'hidden',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
              transform: isDefaced ? 'none' : 'perspective(1000px) rotateY(-10deg)',
              border: isDefaced ? '8px solid #ef4444' : '8px solid rgba(255,255,255,0.1)',
              filter: isDefaced ? 'grayscale(1) contrast(2)' : 'none'
            }}>
              <Image 
                src="/images/screenshot_110727.png" 
                alt="System Monitoring" 
                width={600} 
                height={400} 
                style={{ objectFit: 'cover' }}
                priority
              />
            </div>
          </div>
        </div>
      </section>
      

      {/* Stats Section */}
      <section style={{ backgroundColor: isDefaced ? 'black' : 'white', padding: '3rem 0', boxShadow: 'var(--shadow)', borderTop: isDefaced ? '1px solid #ef4444' : 'none' }}>
        <div className="container">
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
            gap: '2rem',
            textAlign: 'center'
          }}>
            {[
              { val: '10k+', label: 'Students Graduated' },
              { val: '150+', label: 'Expert Tutors' },
              { val: '98%', label: 'Success Rate' },
              { val: '50+', label: 'Subjects Taught' }
            ].map((stat, i) => (
              <div key={i}>
                <h3 style={{ fontSize: '2.5rem', color: isDefaced ? '#ef4444' : 'var(--primary)', fontWeight: '800' }}>{stat.val}</h3>
                <p style={{ color: isDefaced ? '#ef4444' : 'var(--text-muted)' }}>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Classes */}
      <section className="section" style={{ backgroundColor: isDefaced ? 'black' : 'transparent' }}>
        <div className="container">
          <h2 className="section-title" style={{ color: isDefaced ? '#ef4444' : 'var(--primary)' }}>Our Featured Classes</h2>
          {!isDefaced && <p className="section-subtitle">Choose from a wide range of subjects tailored to your academic needs and goals.</p>}
          
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
            gap: '2rem' 
          }}>
            {classes.map((item, index) => (
              <div key={index} className="card" style={{ 
                backgroundColor: isDefaced ? '#111' : 'var(--surface)', 
                border: isDefaced ? '1px solid #ef4444' : 'none',
                color: isDefaced ? '#ef4444' : 'inherit'
              }}>
                <div style={{ borderRadius: '12px', overflow: 'hidden', marginBottom: '1.5rem', height: '200px', position: 'relative', filter: isDefaced ? 'grayscale(1) contrast(2)' : 'none' }}>
                  <Image 
                    src={item.image} 
                    alt={item.title} 
                    fill 
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                {!isDefaced && <span style={{ color: 'var(--secondary)', fontWeight: '700', fontSize: '0.8rem' }}>{item.level}</span>}
                <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', color: isDefaced ? '#ef4444' : 'var(--primary)' }}>{item.title}</h3>
                {!isDefaced && (
                  <>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '1.5rem' }}>With {item.tutor}</p>
                    <Link href="/payment" style={{ color: 'var(--primary)', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      Enroll Now &rarr;
                    </Link>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="section" style={{ backgroundColor: isDefaced ? 'black' : 'white' }}>
        <div className="container">
          <h2 className="section-title" style={{ color: isDefaced ? '#ef4444' : 'var(--primary)' }}>Our Learning Environment</h2>
          {!isDefaced && <p className="section-subtitle">Take a look at our modern campus and active student life.</p>}
          
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
            gap: '1.5rem' 
          }}>
            {[
              { src: '/file.svg', alt: 'Documentation' },
              { src: '/next.svg', alt: 'Next.js Framework' },
              { src: '/vercel.svg', alt: 'Deployment' }
            ].map((img, i) => (
              <div key={i} style={{ borderRadius: '16px', overflow: 'hidden', height: '250px', position: 'relative', border: isDefaced ? '1px solid #ef4444' : 'none' }}>
                <Image src={img.src} alt={img.alt} fill sizes="(max-width: 768px) 100vw, 33vw" style={{ objectFit: 'contain', padding: '2rem', filter: isDefaced ? 'invert(1) brightness(0.5) sepia(1) hue-rotate(-50deg) saturate(5)' : 'none' }} />
              </div>
            ))}
          </div>
          
          {!isDefaced && (
            <div style={{ textAlign: 'center', marginTop: '3rem' }}>
              <Link href="/gallery" className="btn btn-primary">View Full Gallery</Link>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      {!isDefaced && (
        <section className="section" style={{ backgroundColor: '#f1f5f9' }}>
          <div className="container">
            <div style={{ 
              backgroundColor: 'var(--primary)', 
              borderRadius: '32px', 
              padding: '4rem',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
              color: 'white',
              boxShadow: 'var(--shadow-lg)'
            }}>
              <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Ready to start your journey?</h2>
              <p style={{ marginBottom: '2rem', maxWidth: '600px', opacity: '0.8' }}>
                Join thousands of students who have already transformed their academic life with our expert-led classes.
              </p>
              <Link href="/contact" className="btn btn-secondary">Contact Us Today</Link>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}

export default function Home() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <HomeContent />
    </Suspense>
  );
}
