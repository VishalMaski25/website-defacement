'use client';

import Link from 'next/link';
import Logo from './Logo';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav style={{
      position: 'sticky',
      top: 0,
      zIndex: 1000,
      backgroundColor: 'rgba(255, 255, 255, 0.8)',
      backdropFilter: 'blur(10px)',
      borderBottom: '1px solid var(--border)',
      padding: '1rem 0'
    }}>
      <div className="container" style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <Logo width={120} height={40} />
        
        <div style={{
          display: 'flex',
          gap: '2rem',
          alignItems: 'center'
        }}>
          <Link href="/" style={{ fontWeight: 500, color: 'var(--text)' }}>Home</Link>
          <Link href="/about" style={{ fontWeight: 500, color: 'var(--text)' }}>About</Link>
          <Link href="/gallery" style={{ fontWeight: 500, color: 'var(--text)' }}>Gallery</Link>
          <Link href="/contact" style={{ fontWeight: 500, color: 'var(--text)' }}>Contact</Link>
          <Link href="/payment" className="btn btn-primary" style={{ padding: '0.5rem 1.25rem' }}>Join Now</Link>
        </div>
      </div>
    </nav>
  );
}
