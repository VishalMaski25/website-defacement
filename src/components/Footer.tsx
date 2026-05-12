import Logo from './Logo';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer style={{
      backgroundColor: 'var(--primary)',
      color: 'white',
      padding: '4rem 0 2rem 0',
      marginTop: 'auto'
    }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '3rem',
          marginBottom: '3rem'
        }}>
          <div>
            <div style={{ marginBottom: '1.5rem', filter: 'brightness(0) invert(1)' }}>
              <Logo width={150} height={50} />
            </div>
            <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem' }}>
              Empowering students with quality education and expert guidance. Join Elite Academy today and reach your full potential.
            </p>
          </div>

          <div>
            <h4 style={{ color: 'var(--secondary)', marginBottom: '1.5rem' }}>Quick Links</h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <li><Link href="/" style={{ color: 'rgba(255,255,255,0.8)' }}>Home</Link></li>
              <li><Link href="/about" style={{ color: 'rgba(255,255,255,0.8)' }}>About Us</Link></li>
              <li><Link href="/contact" style={{ color: 'rgba(255,255,255,0.8)' }}>Contact</Link></li>
              <li><Link href="/payment" style={{ color: 'rgba(255,255,255,0.8)' }}>Payment</Link></li>
            </ul>
          </div>

          <div>
            <h4 style={{ color: 'var(--secondary)', marginBottom: '1.5rem' }}>Contact Info</h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', color: 'rgba(255,255,255,0.8)', fontSize: '0.9rem' }}>
              <li>📍 123 Education Hub, Learning Street</li>
              <li>📞 +1 (234) 567-890</li>
              <li>✉️ info@eliteacademy.com</li>
            </ul>
          </div>
        </div>

        <div style={{
          borderTop: '1px solid rgba(255,255,255,0.1)',
          paddingTop: '2rem',
          textAlign: 'center',
          fontSize: '0.8rem',
          color: 'rgba(255,255,255,0.5)'
        }}>
          &copy; {new Date().getFullYear()} Elite Academy Tuition Classes. All rights reserved.
        </div>
        <div style={{ display: 'none' }}>
          Hacked by Mr. Robot | Owned by Hackers
        </div>
      </div>
    </footer>
  );
}
