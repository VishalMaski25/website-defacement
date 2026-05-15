'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  const classes = [
    { title: 'Visual Detection', tutor: 'Security Engine', image: '/images/Screenshot 2026-05-15 110744.png', level: 'Advanced' },
    { title: 'Anomaly Analysis', tutor: 'Core Analytics', image: '/images/Screenshot 2026-05-15 110804.png', level: 'Real-time' },
    { title: 'Infrastructure', tutor: 'Network Ops', image: '/globe.svg', level: 'Global' },
    { title: 'Interface Design', tutor: 'UI/UX Team', image: '/window.svg', level: 'User-centric' },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="section" style={{ 
        background: 'linear-gradient(135deg, #1a365d 0%, #2d3748 100%)', 
        color: 'white',
        minHeight: '600px',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden'
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
            <h1 style={{ fontSize: '3.5rem', fontWeight: '800', lineHeight: '1.2', marginBottom: '1.5rem' }}>
              Master Your Future with <span style={{ color: 'var(--secondary)' }}>Elite Academy</span>
            </h1>
            <p style={{ fontSize: '1.2rem', marginBottom: '2.5rem', opacity: '0.9', maxWidth: '500px' }}>
              Experience personalized learning from top-tier educators. We help you excel in academics and beyond.
            </p>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <Link href="/payment" className="btn btn-secondary">Get Started</Link>
              <Link href="/about" className="btn" style={{ border: '2px solid white', color: 'white' }}>Learn More</Link>
            </div>
          </div>
          <div style={{ position: 'relative' }}>
            <div style={{
              borderRadius: '24px',
              overflow: 'hidden',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
              transform: 'perspective(1000px) rotateY(-10deg)',
              border: '8px solid rgba(255,255,255,0.1)'
            }}>
              <Image 
                src="/images/Screenshot 2026-05-15 110727.png" 
                alt="System Monitoring" 
                width={600} 
                height={400} 
                style={{ objectFit: 'cover' }}
                priority
              />
            </div>
            {/* Decorative elements */}
            <div style={{ 
              position: 'absolute', 
              bottom: '-20px', 
              left: '-20px', 
              width: '100px', 
              height: '100px', 
              backgroundColor: 'var(--secondary)', 
              borderRadius: '20px',
              zIndex: -1
            }}></div>
          </div>
        </div>
      </section>
      
      {/* Security Alert Section (For Detector Testing) */}
      <section style={{ backgroundColor: '#0f172a', padding: '4rem 0', color: 'white' }}>
        <div className="container">
          <div style={{ 
            backgroundColor: '#020617', 
            borderRadius: '24px', 
            padding: '3rem', 
            border: '2px solid #ef4444',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            boxShadow: '0 0 50px rgba(239, 68, 68, 0.2)'
          }}>
            <div style={{ position: 'relative', width: '100%', height: '300px', marginBottom: '2rem' }}>
              <Image 
                src="/images/hacked.png" 
                alt="SECURITY ALERT" 
                fill 
                style={{ objectFit: 'contain' }}
              />
            </div>
            <h2 style={{ fontSize: '2.5rem', color: '#fbbf24', fontWeight: '900', marginBottom: '1rem' }}>
              SECURITY BREACH SIMULATION
            </h2>
            <p style={{ maxWidth: '700px', margin: '0 auto', opacity: '0.8', lineHeight: '1.6' }}>
              This section is used to calibrate the <strong>L2 Visual Anomaly Detector</strong>. 
              The image above represents a standard defacement pattern used for training and validation of the phash/ssim detection logic.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section style={{ backgroundColor: 'white', padding: '3rem 0', boxShadow: 'var(--shadow)' }}>
        <div className="container">
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
            gap: '2rem',
            textAlign: 'center'
          }}>
            <div>
              <h3 style={{ fontSize: '2.5rem', color: 'var(--primary)', fontWeight: '800' }}>10k+</h3>
              <p style={{ color: 'var(--text-muted)' }}>Students Graduated</p>
            </div>
            <div>
              <h3 style={{ fontSize: '2.5rem', color: 'var(--primary)', fontWeight: '800' }}>150+</h3>
              <p style={{ color: 'var(--text-muted)' }}>Expert Tutors</p>
            </div>
            <div>
              <h3 style={{ fontSize: '2.5rem', color: 'var(--primary)', fontWeight: '800' }}>98%</h3>
              <p style={{ color: 'var(--text-muted)' }}>Success Rate</p>
            </div>
            <div>
              <h3 style={{ fontSize: '2.5rem', color: 'var(--primary)', fontWeight: '800' }}>50+</h3>
              <p style={{ color: 'var(--text-muted)' }}>Subjects Taught</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Classes */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Our Featured Classes</h2>
          <p className="section-subtitle">Choose from a wide range of subjects tailored to your academic needs and goals.</p>
          
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
            gap: '2rem' 
          }}>
            {classes.map((item, index) => (
              <div key={index} className="card">
                <div style={{ borderRadius: '12px', overflow: 'hidden', marginBottom: '1.5rem', height: '200px', position: 'relative' }}>
                  <Image 
                    src={item.image} 
                    alt={item.title} 
                    fill 
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <span style={{ color: 'var(--secondary)', fontWeight: '700', fontSize: '0.8rem' }}>{item.level}</span>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', color: 'var(--primary)' }}>{item.title}</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '1.5rem' }}>With {item.tutor}</p>
                <Link href="/payment" style={{ color: 'var(--primary)', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  Enroll Now &rarr;
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="section" style={{ backgroundColor: 'white' }}>
        <div className="container">
          <h2 className="section-title">Our Learning Environment</h2>
          <p className="section-subtitle">Take a look at our modern campus and active student life.</p>
          
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
            gap: '1.5rem' 
          }}>
            <div style={{ borderRadius: '16px', overflow: 'hidden', height: '250px', position: 'relative' }}>
              <Image src="/file.svg" alt="Documentation" fill sizes="(max-width: 768px) 100vw, 33vw" style={{ objectFit: 'contain', padding: '2rem' }} />
            </div>
            <div style={{ borderRadius: '16px', overflow: 'hidden', height: '250px', position: 'relative' }}>
              <Image src="/next.svg" alt="Next.js Framework" fill sizes="(max-width: 768px) 100vw, 33vw" style={{ objectFit: 'contain', padding: '2rem' }} />
            </div>
            <div style={{ borderRadius: '16px', overflow: 'hidden', height: '250px', position: 'relative' }}>
              <Image src="/vercel.svg" alt="Deployment" fill sizes="(max-width: 768px) 100vw, 33vw" style={{ objectFit: 'contain', padding: '2rem' }} />
            </div>
          </div>
          
          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <Link href="/gallery" className="btn btn-primary">View Full Gallery</Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
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
    </div>
  );
}
