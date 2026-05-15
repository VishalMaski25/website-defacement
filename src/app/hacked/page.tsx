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
      {/* <div style={{ position: 'relative', width: '300px', height: '250px', marginBottom: '2rem' }}>
        <Image 
          src="/images/hacked.png" 
          alt="." 
          fill
          priority
          style={{ objectFit: 'contain' }}
        />
      </div> */}
      
      <h1 style={{ 
        fontSize: '4rem', 
        fontWeight: '900', 
        letterSpacing: '4px',
        margin: '0',
        textShadow: '0 0 20px rgba(251, 191, 36, 0.5)'
      }}>
       
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
