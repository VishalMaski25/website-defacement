import FileUpload from '@/components/FileUpload';

export default function Contact() {
  return (
    <div className="section">
      <div className="container">
        <h1 className="section-title">Get in Touch</h1>
        <p className="section-subtitle">Have questions? We're here to help. Reach out to us for enrollments or inquiries.</p>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: '3rem',
          marginTop: '3rem'
        }}>
          {/* Contact Info */}
          <div className="card" style={{ backgroundColor: 'var(--primary)', color: 'white' }}>
            <h2 style={{ marginBottom: '2rem', color: 'var(--secondary)' }}>Contact Information</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <span style={{ fontSize: '1.5rem' }}>📍</span>
                <div>
                  <h4 style={{ color: 'var(--secondary)' }}>Address</h4>
                  <p style={{ opacity: '0.8' }}>123 Education Hub, Learning Street, Science City, SC 12345</p>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <span style={{ fontSize: '1.5rem' }}>📞</span>
                <div>
                  <h4 style={{ color: 'var(--secondary)' }}>Phone</h4>
                  <p style={{ opacity: '0.8' }}>+1 (234) 567-890</p>
                  <p style={{ opacity: '0.8' }}>+1 (234) 567-891</p>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <span style={{ fontSize: '1.5rem' }}>✉️</span>
                <div>
                  <h4 style={{ color: 'var(--secondary)' }}>Email</h4>
                  <p style={{ opacity: '0.8' }}>info@eliteacademy.com</p>
                  <p style={{ opacity: '0.8' }}>support@eliteacademy.com</p>
                </div>
              </div>
            </div>
            
            <FileUpload />
          </div>

          {/* Contact Form */}
          <div className="card">
            <h2 style={{ marginBottom: '2rem', color: 'var(--primary)' }}>Send us a Message</h2>
            <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <label style={{ fontSize: '0.9rem', fontWeight: '600' }}>First Name</label>
                  <input type="text" placeholder="John" style={{ padding: '0.75rem', borderRadius: '8px', border: '1px solid var(--border)' }} />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <label style={{ fontSize: '0.9rem', fontWeight: '600' }}>Last Name</label>
                  <input type="text" placeholder="Doe" style={{ padding: '0.75rem', borderRadius: '8px', border: '1px solid var(--border)' }} />
                </div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <label style={{ fontSize: '0.9rem', fontWeight: '600' }}>Email Address</label>
                <input type="email" placeholder="john@example.com" style={{ padding: '0.75rem', borderRadius: '8px', border: '1px solid var(--border)' }} />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <label style={{ fontSize: '0.9rem', fontWeight: '600' }}>Subject</label>
                <select style={{ padding: '0.75rem', borderRadius: '8px', border: '1px solid var(--border)' }}>
                  <option>Enrollment Inquiry</option>
                  <option>Course Information</option>
                  <option>Technical Support</option>
                  <option>Other</option>
                </select>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <label style={{ fontSize: '0.9rem', fontWeight: '600' }}>Message</label>
                <textarea rows={4} placeholder="Your message here..." style={{ padding: '0.75rem', borderRadius: '8px', border: '1px solid var(--border)', resize: 'none' }}></textarea>
              </div>
              <button type="submit" className="btn btn-primary" style={{ justifyContent: 'center' }}>Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
