'use client';

import Image from 'next/image';

export default function HackedPage() {
  return (
    <div style={{ 
      backgroundColor: '#050a14', 
      minHeight: '100vh', 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center',
      color: '#fbbf24',
      textAlign: 'center',
      fontFamily: 'monospace',
      padding: '2rem'
    }}>
      <div style={{ position: 'relative', width: '300px', height: '250px', marginBottom: '2rem' }}>
        <Image 
          src="/images/hacked.png" 
          alt="ACCOUNT HACKED" 
          fill
          priority
          style={{ objectFit: 'contain' }}
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800";
          }}
        />
      </div>
      
      <h1 style={{ 
        fontSize: '4rem', 
        fontWeight: '900', 
        letterSpacing: '4px',
        margin: '0',
        textShadow: '0 0 20px rgba(251, 191, 36, 0.5)'
      }}>
        ACCOUNT HACKED
      </h1>
      
      <div style={{ 
        marginTop: '3rem', 
        opacity: '0.6', 
        fontSize: '0.8rem',
        maxWidth: '600px'
      }}>
        <p>[SYSTEM ENCRYPTION COMPLETE]</p>
        <p>[ACCESS DENIED]</p>
        <p style={{ marginTop: '1rem' }}>This page is being used for defacement detection testing (L2 Visual Detector).</p>
      </div>
    </div>
  );
}
