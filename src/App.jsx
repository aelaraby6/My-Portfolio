import React, { useState, useEffect } from 'react';
import RootLayout from './layouts/RootLayout';
import Home from './pages/Home';
import Education from './pages/Education';
import Projects from './pages/Projects';
import Experience from './pages/Experience';
import Skills from './pages/Skills';
import Contact from './pages/Contact';

export default function App() {
  // Initialize state based on window hash or default to 'home'
  const [activePage, setActivePage] = useState(() => {
    if (typeof window !== 'undefined') {
      const hash = window.location.hash.replace('#', '').toLowerCase();
      if (['education', 'projects', 'experience', 'skills', 'contact'].includes(hash)) {
        return hash;
      }
    }
    return 'home';
  });

  // Listen to browser hash changes (Back/Forward navigation)
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '').toLowerCase();
      if (['education', 'projects', 'experience', 'skills', 'contact'].includes(hash)) {
        setActivePage(hash);
      } else {
        setActivePage('home');
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (pageId) => {
    if (['education', 'projects', 'experience', 'skills', 'contact'].includes(pageId)) {
      window.location.hash = pageId;
      setActivePage(pageId);
    } else {
      window.location.hash = 'home';
      setActivePage('home');
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <RootLayout activePage={activePage} onNavigate={handleNavigate}>
      {activePage === 'education' && (
        <Education onBackToHome={() => handleNavigate('home')} />
      )}
      {activePage === 'projects' && (
        <Projects onBackToHome={() => handleNavigate('home')} />
      )}
      {activePage === 'experience' && (
        <Experience onBackToHome={() => handleNavigate('home')} />
      )}
      {activePage === 'skills' && (
        <Skills onBackToHome={() => handleNavigate('home')} />
      )}
      {activePage === 'contact' && (
        <Contact onBackToHome={() => handleNavigate('home')} />
      )}
      {activePage === 'home' && (
        <Home />
      )}
    </RootLayout>
  );
}

