'use client';

import React from 'react';

const LoadingAbq: React.FC<{className?: string}> = ({className}) => (
  <div className={className}   style={{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '60vh',
    width: '100%',
  }}>
    <div style={{
      border: '6px solid #f3f3f3',
      borderTop: '6px solid #6A6A6A',
      borderRadius: '50%',
      width: 48,
      height: 48,
      animation: 'spin 1s linear infinite',
      marginBottom: 16,
    }} />
    <span style={{ color: '#333', fontSize: 18 }}>Carregando...</span>
    <style jsx>{`
      @keyframes spin {
        0% { transform: rotate(0deg); }
        50% { transform: rotate(290deg); }
        100% { transform: rotate(360deg); }
      }
    `}</style>
  </div>
);

export default LoadingAbq;