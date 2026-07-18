import React from 'react';

export default function Snowflakes() {
  const flakes = Array.from({ length: 40 });
  
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      {flakes.map((_, i) => (
        <div
          key={i}
          className="snowflake"
          style={{
            left: `${Math.random() * 100}%`,
            animationDuration: `${Math.random() * 5 + 4}s`,
            animationDelay: `${Math.random() * 5}s`,
            opacity: Math.random() * 0.8 + 0.2,
            width: `${Math.floor(Math.random() * 8 + 4)}px`,
            height: `${Math.floor(Math.random() * 8 + 4)}px`,
          }}
        />
      ))}
    </div>
  );
}
