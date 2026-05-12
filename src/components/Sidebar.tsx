'use client';

import Link from 'next/link';
import Logo from './Logo';
import { useState } from 'react';

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        style={{
          position: 'fixed',
          left: '1rem',
          top: '1.2rem',
          zIndex: 1100,
          padding: '0.5rem',
          backgroundColor: 'var(--primary)',
          color: 'white',
          borderRadius: '8px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        ☰
      </button>

      <aside style={{
        position: 'fixed',
        left: isOpen ? 0 : '-300px',
        top: 0,
        width: '280px',
        height: '100vh',
        backgroundColor: 'var(--surface)',
        boxShadow: 'var(--shadow-lg)',
        zIndex: 1050,
        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        padding: '2rem'
      }}>
        <div style={{ marginBottom: '3rem', display: 'flex', justifyContent: 'center' }}>
          <Logo width={180} height={60} />
        </div>

        <nav style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <Link href="/" className="sidebar-link" onClick={() => setIsOpen(false)}>🏠 Home</Link>
          <Link href="/about" className="sidebar-link" onClick={() => setIsOpen(false)}>ℹ️ About Us</Link>
          <Link href="/contact" className="sidebar-link" onClick={() => setIsOpen(false)}>📞 Contact</Link>
          <Link href="/payment" className="sidebar-link" onClick={() => setIsOpen(false)}>💳 Payment</Link>
          <hr style={{ border: '0', borderTop: '1px solid var(--border)', margin: '1rem 0' }} />
          <div style={{ padding: '1rem', backgroundColor: '#f1f5f9', borderRadius: '12px' }}>
            <h4 style={{ fontSize: '0.9rem', color: 'var(--primary)', marginBottom: '0.5rem' }}>Upcoming Class</h4>
            <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Advanced Physics - 4:00 PM</p>
          </div>
        </nav>
      </aside>

      {isOpen && (
        <div 
          onClick={() => setIsOpen(false)}
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(0,0,0,0.3)',
            backdropFilter: 'blur(4px)',
            zIndex: 1040
          }}
        />
      )}

      <style jsx>{`
        .sidebar-link {
          font-size: 1.1rem;
          font-weight: 500;
          color: var(--text);
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 0.75rem 1rem;
          border-radius: 8px;
          transition: var(--transition);
        }
        .sidebar-link:hover {
          background-color: var(--background);
          color: var(--primary);
          padding-left: 1.5rem;
        }
      `}</style>
    </>
  );
}
