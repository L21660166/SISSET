// src/app/page.jsx
'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function HomePage() {
  const router = useRouter();

  useEffect(() => {
    router.push('/auth/login');
  }, [router]);

  return (
    <div style={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      height: '100vh',
      background: '#f4f6f9'
    }}>
      <div style={{ 
        textAlign: 'center',
        padding: '2rem'
      }}>
        <div style={{
          width: '60px',
          height: '60px',
          background: 'linear-gradient(135deg, #1e3a8a, #3b82f6)',
          borderRadius: '15px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '0 auto 1rem',
          color: 'white',
          fontSize: '24px',
          fontWeight: '700',
          boxShadow: '0 6px 16px rgba(37, 99, 235, 0.25)'
        }}>
          5S
        </div>
        <h2 style={{ color: '#1f2937', marginBottom: '0.5rem' }}>
          Sistema de Auditoría 5S
        </h2>
        <p style={{ color: '#6b7280' }}>Redirigiendo al login...</p>
      </div>
    </div>
  );
}