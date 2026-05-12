import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  const classes = [
    { title: 'Mathematics', tutor: 'Prof. James Wilson', image: '/images/tutor-math.png', level: 'High School' },
    { title: 'Advanced Science', tutor: 'Dr. Sarah Chen', image: '/images/science-lab.png', level: 'University Prep' },
    { title: 'English Literature', tutor: 'Ms. Emily Brown', image: '/images/user-img-1.png', level: 'Middle School' },
    { title: 'Competitive Exams', tutor: 'Mr. David Miller', image: '/images/user-img-2.png', level: 'All Levels' },
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
                src="/images/hero.png" 
                alt="Students studying" 
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
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
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
              <Image src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=600" alt="Group Study" fill sizes="(max-width: 768px) 100vw, 33vw" style={{ objectFit: 'cover' }} />
            </div>
            <div style={{ borderRadius: '16px', overflow: 'hidden', height: '250px', position: 'relative' }}>
              <Image src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=600" alt="Classroom" fill sizes="(max-width: 768px) 100vw, 33vw" style={{ objectFit: 'cover' }} />
            </div>
            <div style={{ borderRadius: '16px', overflow: 'hidden', height: '250px', position: 'relative' }}>
              <Image src="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&q=80&w=600" alt="Academy Building" fill sizes="(max-width: 768px) 100vw, 33vw" style={{ objectFit: 'cover' }} />
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
