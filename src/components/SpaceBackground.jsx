import React, { useMemo } from 'react';

export default function SpaceBackground() {
  // Generate a deterministic static set of star coordinates
  const stars = useMemo(() => {
    const starList = [];
    const count = 48; // Lightweight count for peak 60fps performance
    for (let i = 0; i < count; i++) {
      // Deterministic distribution
      const x = ((i * 37 + 13) % 100);
      const y = ((i * 53 + 29) % 100);
      const size = (i % 3 === 0) ? 2 : (i % 5 === 0) ? 2.5 : 1.5;
      const animationType = (i % 3) + 1; // 1, 2, or 3
      const opacity = ((i % 5) * 0.15 + 0.3).toFixed(2);
      starList.push({ id: i, x, y, size, animationType, opacity });
    }
    return starList;
  }, []);

  return (
    <div 
      className="fixed inset-0 pointer-events-none overflow-hidden z-0"
      aria-hidden="true"
    >
      {/* Deep Space Background Gradients */}
      <div className="absolute inset-0 bg-slate-50 dark:bg-[#030712] transition-colors duration-500" />

      {/* Subtle Cosmic Nebula Auras */}
      <div 
        className="absolute -top-[15%] left-1/2 -translate-x-1/2 w-[900px] h-[500px] rounded-full blur-[120px] opacity-30 dark:opacity-20 pointer-events-none transition-opacity duration-700"
        style={{
          background: 'radial-gradient(circle, rgba(56, 189, 248, 0.4) 0%, rgba(99, 102, 241, 0.25) 45%, transparent 75%)',
        }}
      />
      
      <div 
        className="absolute top-[40%] -right-[10%] w-[600px] h-[600px] rounded-full blur-[140px] opacity-25 dark:opacity-15 pointer-events-none transition-opacity duration-700"
        style={{
          background: 'radial-gradient(circle, rgba(168, 85, 247, 0.35) 0%, rgba(59, 130, 246, 0.2) 50%, transparent 80%)',
        }}
      />

      <div 
        className="absolute -bottom-[10%] -left-[10%] w-[700px] h-[500px] rounded-full blur-[130px] opacity-20 dark:opacity-10 pointer-events-none transition-opacity duration-700"
        style={{
          background: 'radial-gradient(circle, rgba(14, 165, 233, 0.3) 0%, rgba(99, 102, 241, 0.15) 55%, transparent 80%)',
        }}
      />

      {/* Subtle Coordinate Grid Lines */}
      <svg 
        className="absolute inset-0 w-full h-full opacity-[0.03] dark:opacity-[0.05]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id="space-grid" width="80" height="80" patternUnits="userSpaceOnUse">
            <path d="M 80 0 L 0 0 0 80" fill="none" stroke="currentColor" strokeWidth="1" />
            <circle cx="80" cy="0" r="1.5" fill="currentColor" opacity="0.6" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#space-grid)" />
      </svg>

      {/* Static & Twinkling Stars */}
      {stars.map((star) => (
        <div
          key={star.id}
          className={`absolute rounded-full bg-slate-900 dark:bg-white animate-twinkle-${star.animationType}`}
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            opacity: star.opacity,
          }}
        />
      ))}

      {/* Faint Constellation Lines */}
      <svg className="absolute inset-0 w-full h-full opacity-10 dark:opacity-20 stroke-slate-400 dark:stroke-cyan-500/40">
        <line x1="15%" y1="20%" x2="28%" y2="26%" strokeDasharray="3 4" strokeWidth="0.8" />
        <line x1="28%" y1="26%" x2="35%" y2="18%" strokeDasharray="3 4" strokeWidth="0.8" />
        <line x1="72%" y1="65%" x2="85%" y2="70%" strokeDasharray="3 4" strokeWidth="0.8" />
        <line x1="85%" y1="70%" x2="90%" y2="82%" strokeDasharray="3 4" strokeWidth="0.8" />
      </svg>
    </div>
  );
}
