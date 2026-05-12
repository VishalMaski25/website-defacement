import Image from 'next/image';
import Logo from '@/components/Logo';

export default function About() {
  return (
    <div className="section">
      <div className="container">
        <h1 className="section-title">About Elite Academy</h1>
        <p className="section-subtitle">Discover our mission, our values, and the team dedicated to your academic success.</p>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', 
          gap: '4rem',
          alignItems: 'center',
          marginBottom: '5rem'
        }}>
          <div>
            <h2 style={{ color: 'var(--primary)', marginBottom: '1.5rem', fontSize: '2rem' }}>Our Mission</h2>
            <p style={{ marginBottom: '1.5rem' }}>
              At Elite Academy, we believe that every student has the potential to achieve greatness. Our mission is to provide high-quality, personalized education that goes beyond the classroom.
            </p>
            <p style={{ marginBottom: '1.5rem' }}>
              We combine traditional teaching methods with modern technology to create an engaging learning environment. Our tutors are not just teachers; they are mentors who inspire students to think critically and creatively.
            </p>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <li style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                <span style={{ color: 'var(--secondary)', fontSize: '1.5rem' }}>✓</span>
                <span>Personalized learning plans for every student.</span>
              </li>
              <li style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                <span style={{ color: 'var(--secondary)', fontSize: '1.5rem' }}>✓</span>
                <span>Expert tutors with years of academic experience.</span>
              </li>
              <li style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                <span style={{ color: 'var(--secondary)', fontSize: '1.5rem' }}>✓</span>
                <span>Modern facilities and state-of-the-art labs.</span>
              </li>
            </ul>
          </div>
          <div style={{ position: 'relative' }}>
             <Image 
                src="/images/user-img-3.png" 
                alt="Our Academy" 
                width={500} 
                height={600} 
                style={{ borderRadius: '24px', objectFit: 'cover', boxShadow: 'var(--shadow-lg)' }}
              />
          </div>
        </div>

        <div style={{ textAlign: 'center', backgroundColor: 'var(--primary)', color: 'white', padding: '4rem', borderRadius: '32px' }}>
          <h2 style={{ marginBottom: '2rem' }}>Why Choose Us?</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem' }}>
            <div>
              <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>🎓</div>
              <h4 style={{ color: 'var(--secondary)', marginBottom: '0.5rem' }}>Expert Faculty</h4>
              <p style={{ fontSize: '0.9rem', opacity: '0.8' }}>Our educators are top graduates from prestigious universities.</p>
            </div>
            <div>
              <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>🔬</div>
              <h4 style={{ color: 'var(--secondary)', marginBottom: '0.5rem' }}>Modern Labs</h4>
              <p style={{ fontSize: '0.9rem', opacity: '0.8' }}>Hands-on learning with advanced science and tech equipment.</p>
            </div>
            <div>
              <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>📱</div>
              <h4 style={{ color: 'var(--secondary)', marginBottom: '0.5rem' }}>Tech Integration</h4>
              <p style={{ fontSize: '0.9rem', opacity: '0.8' }}>Using digital tools to enhance the learning experience.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
