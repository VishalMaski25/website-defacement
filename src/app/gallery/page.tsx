"use client";

import Image from 'next/image';
import Link from 'next/link';

export default function Gallery() {
  const images = [
    {
      url: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800',
      title: 'Collaborative Learning',
      category: 'Campus Life'
    },
    {
      url: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=800',
      title: 'Modern Classrooms',
      category: 'Facilities'
    },
    {
      url: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&q=80&w=800',
      title: 'Elite Academy Main Building',
      category: 'Facilities'
    },
    {
      url: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800',
      title: 'Science & Innovation Lab',
      category: 'Academics'
    },
    {
      url: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800',
      title: 'Student Group Discussions',
      category: 'Campus Life'
    },
    {
      url: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=800',
      title: 'Expert Faculty Seminars',
      category: 'Academics'
    },
    {
      url: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800',
      title: 'Coding & Technology Hub',
      category: 'Facilities'
    },
    {
      url: 'https://images.unsplash.com/photo-1571260899304-425eee4c7efc?auto=format&fit=crop&q=80&w=800',
      title: 'Library Study Spaces',
      category: 'Facilities'
    },
    {
      url: 'https://images.unsplash.com/photo-1523050335392-93851179ae22?auto=format&fit=crop&q=80&w=800',
      title: 'Graduation Ceremony',
      category: 'Events'
    },
    {
      url: 'https://images.unsplash.com/photo-1511629091441-ee46146481b6?auto=format&fit=crop&q=80&w=800',
      title: 'Art & Creativity Studio',
      category: 'Academics'
    },
    {
      url: 'https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&q=80&w=800',
      title: 'Sports & Athletics',
      category: 'Events'
    },
    {
      url: 'https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&q=80&w=800',
      title: 'Workshop Sessions',
      category: 'Academics'
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
              <div key={index} className="gallery-card" style={{
                position: 'relative',
                borderRadius: '20px',
                overflow: 'hidden',
                height: '350px',
                boxShadow: 'var(--shadow)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                cursor: 'pointer'
              }}>
                <Image 
                  src={img.url} 
                  alt={img.title} 
                  fill 
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  style={{ objectFit: 'cover' }}
                  className="gallery-img"
                />
                <div style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  padding: '2rem 1.5rem 1.5rem',
                  background: 'linear-gradient(transparent, rgba(0,0,0,0.8))',
                  color: 'white',
                  transform: 'translateY(10px)',
                  transition: 'transform 0.3s ease',
                  opacity: 0.9
                }}>
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

      <style jsx>{`
        .gallery-card:hover {
          transform: translateY(-5px);
          box-shadow: var(--shadow-lg);
        }
        .gallery-card:hover div {
          transform: translateY(0);
        }
      `}</style>
    </div>
  );
}
