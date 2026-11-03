import React, { useState, useEffect } from 'react';
import RootLayout from './layouts/RootLayout';
import Home from './pages/Home';
import Education from './pages/Education';
import Projects from './pages/Projects';
import Experience from './pages/Experience';
import Skills from './pages/Skills';
import Teaching from './pages/Teaching';
import Contact from './pages/Contact';

function parseHash(hashString) {
  if (typeof window === 'undefined') return { page: 'home', slug: null };
  const clean = (hashString || '').replace(/^#\/?/, '').toLowerCase().trim();
  if (!clean) return { page: 'home', slug: null };

  const [section, ...rest] = clean.split('/');
  const slug = rest.join('/') || null;

  if (section === 'teaching' || section === 'course') {
    return { page: 'teaching', slug };
  }
  if (['education', 'projects', 'experience', 'skills', 'contact'].includes(section)) {
    return { page: section, slug: null };
  }
  return { page: 'home', slug: null };
}

export default function App() {
  const [pageState, setPageState] = useState(() => {
    if (typeof window !== 'undefined') {
      return parseHash(window.location.hash);
    }
    return { page: 'home', slug: null };
  });

  // Listen to browser hash changes (Back/Forward navigation)
  useEffect(() => {
    const handleHashChange = () => {
      const parsed = parseHash(window.location.hash);
      setPageState(parsed);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (target) => {
    const { page, slug } = parseHash(target);
    const targetHash = slug ? `${page}/${slug}` : page;
    window.location.hash = targetHash === 'home' ? '' : targetHash;
    setPageState({ page, slug });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const activePageString = pageState.slug ? `${pageState.page}/${pageState.slug}` : pageState.page;

  return (
    <RootLayout activePage={activePageString} onNavigate={handleNavigate}>
      {pageState.page === 'education' && (
        <Education onBackToHome={() => handleNavigate('home')} />
      )}
      {pageState.page === 'projects' && (
        <Projects onBackToHome={() => handleNavigate('home')} />
      )}
      {pageState.page === 'experience' && (
        <Experience onBackToHome={() => handleNavigate('home')} />
      )}
      {pageState.page === 'skills' && (
        <Skills onBackToHome={() => handleNavigate('home')} />
      )}
      {pageState.page === 'teaching' && (
        <Teaching 
          onBackToHome={() => handleNavigate('home')}
          courseSlug={pageState.slug}
          onNavigateToCourse={(slug) => {
            if (slug) {
              handleNavigate(`teaching/${slug}`);
            } else {
              handleNavigate('teaching');
            }
          }}
        />
      )}
      {pageState.page === 'contact' && (
        <Contact onBackToHome={() => handleNavigate('home')} />
      )}
      {pageState.page === 'home' && (
        <Home />
      )}
    </RootLayout>
  );
}
