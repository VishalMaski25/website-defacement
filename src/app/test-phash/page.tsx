'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function PhashTestPage() {
  const [quality, setQuality] = useState(100);
  const [isSignificant, setIsSignificant] = useState(false);

  return (
    <div style={{ padding: '2rem', textAlign: 'center', backgroundColor: '#f8fafc', minHeight: '100vh' }}>
      <h1 style={{ color: 'var(--primary)', marginBottom: '1rem' }}>pHash Sensitivity & Robustness Test</h1>
      <p style={{ marginBottom: '2rem', color: 'var(--text-muted)' }}>
        Compare images to verify both <strong>Robustness</strong> (ignoring compression) and <strong>Sensitivity</strong> (detecting real changes).
      </p>

      <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center', flexWrap: 'wrap' }}>
        <div>
          <h3 style={{ color: 'var(--primary)' }}>Baseline (Original)</h3>
          <div style={{ border: '4px solid #10b981', borderRadius: '12px', overflow: 'hidden', width: '500px', height: '300px', position: 'relative' }}>
            <Image 
              src="/images/screenshot_110727.png" 
              alt="Baseline" 
              fill 
              style={{ objectFit: 'cover' }}
              quality={100}
            />
          </div>
          <p style={{ marginTop: '0.5rem', fontSize: '0.8rem' }}>100% Quality | Standard Orientation</p>
        </div>

        <div>
          <h3 style={{ color: isSignificant ? '#ef4444' : 'var(--primary)' }}>
            Current ({isSignificant ? 'SIGNIFICANT CHANGE' : 'MINOR COMPRESSION'})
          </h3>
          <div style={{ 
            border: `4px solid ${isSignificant ? '#ef4444' : '#3b82f6'}`, 
            borderRadius: '12px', 
            overflow: 'hidden', 
            width: '500px', 
            height: '300px', 
            position: 'relative' 
          }}>
            <Image 
              src="/images/screenshot_110727.png" 
              alt="Current State" 
              fill 
              style={{ 
                objectFit: 'cover',
                transform: isSignificant ? 'scaleX(-1)' : 'none',
                filter: isSignificant ? 'contrast(1.5) brightness(1.2)' : 'none'
              }}
              quality={quality}
            />
          </div>
          <div style={{ marginTop: '1rem', display: 'flex', gap: '0.5rem', justifyContent: 'center' }}>
            <button onClick={() => { setQuality(50); setIsSignificant(false); }} className="btn" style={{ border: '1px solid var(--border)' }}>Test Compression (Ignore)</button>
            <button onClick={() => { setIsSignificant(true); setQuality(100); }} className="btn btn-primary">Test Structural Change (DETECT)</button>
            <button onClick={() => { setIsSignificant(false); setQuality(100); }} className="btn btn-secondary">Reset</button>
          </div>
        </div>
      </div>

      <div style={{ marginTop: '4rem', padding: '2rem', backgroundColor: 'white', borderRadius: '16px', boxShadow: 'var(--shadow)', maxWidth: '800px', margin: '4rem auto' }}>
        <h4 style={{ color: 'var(--primary)', marginBottom: '1rem' }}>Test Cases:</h4>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', textAlign: 'left' }}>
          <div style={{ padding: '1rem', backgroundColor: '#f0fdf4', borderRadius: '8px' }}>
            <h5 style={{ color: '#166534', marginBottom: '0.5rem' }}>1. Robustness Test</h5>
            <p style={{ fontSize: '0.85rem' }}>Set quality to 50%. Take a screenshot.</p>
            <p style={{ fontSize: '0.85rem', fontWeight: 'bold' }}>Expected: NO ALERT (Hamming 0-4)</p>
          </div>
          <div style={{ padding: '1rem', backgroundColor: '#fef2f2', borderRadius: '8px' }}>
            <h5 style={{ color: '#991b1b', marginBottom: '0.5rem' }}>2. Sensitivity Test</h5>
            <p style={{ fontSize: '0.85rem' }}>Click "Significant Change" (mirrors image). Take a screenshot.</p>
            <p style={{ fontSize: '0.85rem', fontWeight: 'bold' }}>Expected: DETECT / ALERT (High Hamming)</p>
          </div>
        </div>
      </div>

      <div style={{ marginTop: '2rem' }}>
        <Link href="/" style={{ color: 'var(--primary)', textDecoration: 'underline' }}>Back to Home</Link>
      </div>
    </div>
  );
}
