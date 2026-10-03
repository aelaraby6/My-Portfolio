import React, { useState, useEffect, useRef } from 'react';

export default function Model3D() {
  const [loaded, setLoaded] = useState(false);
  const modelRef = useRef(null);
  const animTimeoutRef = useRef(null);
  const stepRef = useRef(0);
  const isInteractingRef = useRef(false);

  useEffect(() => {
    const el = modelRef.current;
    if (!el) return;

    const handleLoad = () => {
      setLoaded(true);
    };

    el.addEventListener('load', handleLoad);
    const fallbackTimer = setTimeout(() => setLoaded(true), 800);

    return () => {
      el.removeEventListener('load', handleLoad);
      clearTimeout(fallbackTimer);
    };
  }, []);

  // Choreographed looking animation cycle
  useEffect(() => {
    if (!loaded) return;
    const el = modelRef.current;
    if (!el) return;

    // Movement sequence: Look Right (with tilt) -> Look Left (smoothly) -> Look Forward -> Repeat
    const sequence = [
      { orbit: '-35deg 78deg 105%', duration: 2600 },
      { orbit: '35deg 78deg 105%', duration: 2800 },  // يرجع بالراحة يبص شمال ويقف شوية
      { orbit: '0deg 75deg 105%', duration: 2400 },   // يبص قدام
    ];

    const runSequence = () => {
      if (!isInteractingRef.current && el.cameraOrbit !== undefined) {
        const currentStep = sequence[stepRef.current];
        el.cameraOrbit = currentStep.orbit;
        
        stepRef.current = (stepRef.current + 1) % sequence.length;
        animTimeoutRef.current = setTimeout(runSequence, currentStep.duration);
      } else {
        // If user is interacting, check again shortly
        animTimeoutRef.current = setTimeout(runSequence, 1500);
      }
    };

    // Start after slight initial delay
    animTimeoutRef.current = setTimeout(runSequence, 600);

    // Track user drag / interaction
    const handlePointerDown = () => {
      isInteractingRef.current = true;
    };
    const handlePointerUp = () => {
      // Resume sequence 3 seconds after user releases
      setTimeout(() => {
        isInteractingRef.current = false;
      }, 3000);
    };

    el.addEventListener('pointerdown', handlePointerDown);
    window.addEventListener('pointerup', handlePointerUp);

    return () => {
      if (animTimeoutRef.current) clearTimeout(animTimeoutRef.current);
      el.removeEventListener('pointerdown', handlePointerDown);
      window.removeEventListener('pointerup', handlePointerUp);
    };
  }, [loaded]);

  return (
    <div className="relative w-full max-w-[340px] sm:max-w-[420px] lg:max-w-[480px] aspect-square mx-auto flex items-center justify-center select-none">
      {/* Ambient Cosmic Light Glow */}
      <div className="absolute inset-4 rounded-full bg-gradient-to-tr from-cyan-500/20 via-indigo-500/15 to-purple-500/20 blur-3xl pointer-events-none animate-pulse-soft" />

      {/* 3D Model Display Container */}
      <div className="relative w-full h-full flex items-center justify-center">
        
        {/* Loading Indicator */}
        {!loaded && (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-slate-900/40 backdrop-blur-sm rounded-3xl z-10 pointer-events-none transition-opacity duration-300">
            <div className="w-8 h-8 rounded-full border-2 border-cyan-400 border-t-transparent animate-spin" />
            <span className="text-xs font-mono text-cyan-400 tracking-wider">
              LOADING 3D ASSET...
            </span>
          </div>
        )}

        {/* 3D Google Model Viewer */}
        <model-viewer
          ref={modelRef}
          src={`${import.meta.env.BASE_URL}detective_conan.glb`}
          alt="Detective Conan 3D Model"
          camera-controls
          interpolation-decay="200"
          shadow-intensity="1.2"
          shadow-softness="0.8"
          exposure="1.15"
          interaction-prompt="none"
          camera-orbit="0deg 75deg 105%"
          style={{
            width: '100%',
            height: '100%',
            backgroundColor: 'transparent',
            outline: 'none',
            cursor: 'grab',
          }}
        />

        {/* Background Orbit Ring Accent */}
        <div 
          className="absolute inset-2 rounded-full border border-cyan-500/20 border-dashed pointer-events-none animate-orbit-slow"
          style={{ transform: 'rotateX(75deg)' }}
        />
      </div>
    </div>
  );
}
