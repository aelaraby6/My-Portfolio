import React from 'react';
import Navbar from '../components/Navbar';
import SpaceBackground from '../components/SpaceBackground';

export default function RootLayout({ children, activePage, onNavigate }) {
  const isHome = activePage === 'home';

  return (
    <div 
      className={`relative selection:bg-cyan-500/30 selection:text-cyan-200 ${
        isHome 
          ? 'h-screen max-h-screen overflow-hidden flex flex-col' 
          : 'min-h-screen flex flex-col'
      }`}
    >
      {/* Background Starlight & Ambient Nebula */}
      <SpaceBackground />

      {/* Navigation Header */}
      <Navbar activePage={activePage} onNavigate={onNavigate} />

      {/* Main Page Area */}
      <main 
        className={`relative z-10 flex-grow ${
          isHome 
            ? 'h-full max-h-screen overflow-hidden flex items-center pt-12' 
            : 'pt-20 pb-16'
        }`}
      >
        {children}
      </main>
    </div>
  );
}
