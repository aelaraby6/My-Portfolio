import React, { useState, useEffect, useRef } from 'react';

export default function RobotVisual() {
  const containerRef = useRef(null);
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      // Calculate normalized offset (-1 to 1)
      const x = Math.max(-1, Math.min(1, (e.clientX - centerX) / (window.innerWidth / 2)));
      const y = Math.max(-1, Math.min(1, (e.clientY - centerY) / (window.innerHeight / 2)));
      
      setCoords({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const rotateY = coords.x * 24;
  const rotateX = -coords.y * 20;
  const eyeShiftX = coords.x * 8;
  const eyeShiftY = coords.y * 6;

  return (
    <div 
      ref={containerRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative w-full max-w-[320px] sm:max-w-[380px] lg:max-w-[420px] aspect-square mx-auto flex items-center justify-center select-none"
      style={{ perspective: '1200px' }}
    >
      {/* Background Soft Ambient Light */}
      <div className="absolute inset-4 rounded-full bg-gradient-to-tr from-cyan-500/15 via-indigo-500/15 to-purple-500/15 blur-3xl pointer-events-none animate-pulse-soft" />

      {/* 3D Floating Robot Canvas */}
      <div 
        className="relative w-full h-full flex items-center justify-center transition-transform duration-200 ease-out"
        style={{
          transformStyle: 'preserve-3d',
          transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
        }}
      >
        {/* Floating Levitation Wrapper */}
        <div className="relative w-64 h-64 sm:w-72 sm:h-72 flex items-center justify-center animate-float" style={{ transformStyle: 'preserve-3d' }}>
          
          {/* Orbital Halo / Tech Ring (Back) */}
          <div 
            className="absolute w-72 h-72 rounded-full border border-cyan-500/20 border-dashed animate-orbit-slow"
            style={{ transform: 'rotateX(70deg) translateZ(-40px)' }}
          />

          {/* Left Floating Cyber Ear Antenna */}
          <div 
            className="absolute -left-3 top-16 w-5 h-16 rounded-xl bg-gradient-to-b from-slate-700 via-slate-800 to-slate-900 dark:from-slate-800 dark:via-slate-900 dark:to-black border border-slate-600/40 dark:border-cyan-500/30 shadow-lg flex flex-col items-center justify-between py-2 transition-transform duration-300"
            style={{ transform: `translateZ(${15 + coords.x * 10}px)` }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
            <div className="w-2 h-4 rounded-sm bg-cyan-500/40" />
            <span className="w-1 h-1 rounded-full bg-indigo-400" />
          </div>

          {/* Right Floating Cyber Ear Antenna */}
          <div 
            className="absolute -right-3 top-16 w-5 h-16 rounded-xl bg-gradient-to-b from-slate-700 via-slate-800 to-slate-900 dark:from-slate-800 dark:via-slate-900 dark:to-black border border-slate-600/40 dark:border-cyan-500/30 shadow-lg flex flex-col items-center justify-between py-2 transition-transform duration-300"
            style={{ transform: `translateZ(${15 - coords.x * 10}px)` }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
            <div className="w-2 h-4 rounded-sm bg-cyan-500/40" />
            <span className="w-1 h-1 rounded-full bg-indigo-400" />
          </div>

          {/* Main Robot Head Chassis */}
          <div 
            className="relative w-48 h-48 sm:w-56 sm:h-56 rounded-3xl bg-gradient-to-br from-slate-200 via-slate-100 to-slate-300 dark:from-[#0d1738] dark:via-[#090f26] dark:to-[#040817] border-2 border-slate-300/80 dark:border-cyan-500/40 shadow-[0_20px_50px_rgba(0,0,0,0.3)] dark:shadow-[0_20px_50px_rgba(8,145,178,0.25)] flex flex-col items-center justify-center p-4 overflow-hidden"
            style={{ transform: 'translateZ(30px)' }}
          >
            {/* Gloss Highlight on Chassis */}
            <div className="absolute -top-12 -left-12 w-32 h-32 rounded-full bg-white/20 dark:bg-cyan-400/10 blur-xl pointer-events-none" />

            {/* Top Sensor Notch */}
            <div className="absolute top-2.5 px-3 py-0.5 rounded-full bg-slate-300 dark:bg-slate-900/90 border border-slate-400/30 dark:border-cyan-500/30 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-[8px] font-mono tracking-widest text-slate-700 dark:text-cyan-300 uppercase">AI.SYS</span>
            </div>

            {/* Visor Screen */}
            <div 
              className="relative w-full h-24 sm:h-28 rounded-2xl bg-slate-950 border border-slate-800 shadow-inner flex items-center justify-center overflow-hidden px-4"
            >
              {/* Visor Scanlines Overlay */}
              <div 
                className="absolute inset-0 opacity-20 pointer-events-none"
                style={{
                  backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(56, 189, 248, 0.4) 3px, rgba(56, 189, 248, 0.4) 4px)'
                }}
              />

              {/* Glowing Interactive Cyber Eyes */}
              <div 
                className="flex items-center justify-center gap-6 transition-transform duration-150 ease-out"
                style={{
                  transform: `translate(${eyeShiftX}px, ${eyeShiftY}px)`
                }}
              >
                {/* Left Eye */}
                <div className="relative w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-tr from-cyan-500 to-sky-300 p-0.5 shadow-[0_0_16px_rgba(56,189,248,0.9)] flex items-center justify-center animate-pulse-soft">
                  <div className="w-full h-full rounded-[10px] bg-slate-950 flex items-center justify-center">
                    <div className="w-3.5 h-3.5 rounded-md bg-cyan-300 shadow-[0_0_8px_rgba(56,189,248,1)] flex items-center justify-center">
                      <div className="w-1.5 h-1.5 rounded-sm bg-white" />
                    </div>
                  </div>
                </div>

                {/* Right Eye */}
                <div className="relative w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-tr from-cyan-500 to-sky-300 p-0.5 shadow-[0_0_16px_rgba(56,189,248,0.9)] flex items-center justify-center animate-pulse-soft">
                  <div className="w-full h-full rounded-[10px] bg-slate-950 flex items-center justify-center">
                    <div className="w-3.5 h-3.5 rounded-md bg-cyan-300 shadow-[0_0_8px_rgba(56,189,248,1)] flex items-center justify-center">
                      <div className="w-1.5 h-1.5 rounded-sm bg-white" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Subtle Audio Waveform / Smile at bottom of visor */}
              <div className="absolute bottom-2 flex items-center gap-1 opacity-70">
                <span className="w-1 h-1.5 rounded-full bg-cyan-400" />
                <span className="w-1 h-3 rounded-full bg-cyan-400" />
                <span className="w-1 h-4 rounded-full bg-cyan-400" />
                <span className="w-1 h-2 rounded-full bg-cyan-400" />
                <span className="w-1 h-1 rounded-full bg-cyan-400" />
              </div>
            </div>

            {/* Bottom Cyber Mouth / Cooling Vent */}
            <div className="mt-3 flex items-center gap-1.5">
              <span className="w-6 h-1 rounded-full bg-slate-400/50 dark:bg-cyan-500/30" />
              <span className="w-10 h-1 rounded-full bg-slate-500/60 dark:bg-cyan-400/60 shadow-[0_0_6px_rgba(56,189,248,0.6)]" />
              <span className="w-6 h-1 rounded-full bg-slate-400/50 dark:bg-cyan-500/30" />
            </div>
          </div>

          {/* Floating Lower Chassis / Propulsion Base */}
          <div 
            className="absolute -bottom-6 w-32 h-8 rounded-full bg-gradient-to-r from-slate-400 via-slate-300 to-slate-400 dark:from-slate-800 dark:via-cyan-900/60 dark:to-slate-800 border border-slate-300 dark:border-cyan-500/30 shadow-lg flex items-center justify-center"
            style={{ transform: 'translateZ(10px)' }}
          >
            <div className="w-16 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(56,189,248,0.8)] animate-pulse" />
          </div>

          {/* Front Orbital Satellite (Spinning Ring) */}
          <div 
            className="absolute w-80 h-80 rounded-full border border-indigo-400/25 border-dotted animate-orbit-reverse pointer-events-none"
            style={{ transform: 'rotateX(62deg) translateZ(40px)' }}
          >
            <div className="absolute top-4 right-10 w-3 h-3 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(56,189,248,1)] border border-white" />
          </div>

        </div>

        {/* Telemetry Minimalist Corner Badges */}
        <div className="absolute -bottom-2 left-0 text-[10px] font-mono text-slate-500 dark:text-cyan-400/80 tracking-widest flex items-center gap-1.5 bg-slate-200/50 dark:bg-slate-900/60 px-2.5 py-1 rounded-lg border border-slate-300/40 dark:border-slate-800 backdrop-blur-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
          <span>ROBOT.AGENT_01</span>
        </div>

        <div className="absolute -top-2 right-0 text-[10px] font-mono text-slate-500 dark:text-slate-400 tracking-wider bg-slate-200/50 dark:bg-slate-900/60 px-2.5 py-1 rounded-lg border border-slate-300/40 dark:border-slate-800 backdrop-blur-sm">
          <span>INTERACTIVE 3D</span>
        </div>

      </div>
    </div>
  );
}
