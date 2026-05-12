import Image from 'next/image';
import Link from 'next/link';

export default function Logo({ width = 150, height = 50 }: { width?: number; height?: number }) {
  return (
    <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
      <Image 
        src="/images/logo.png" 
        alt="Elite Academy Logo" 
        width={width} 
        height={height} 
        style={{ objectFit: 'contain' }}
      />
      <span style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--primary)' }}>Elite Academy</span>
    </Link>
  );
}
