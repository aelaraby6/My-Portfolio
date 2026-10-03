import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, Home, GraduationCap, FolderGit2, Briefcase, Cpu, Mail } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

export default function Navbar({ activePage, onNavigate }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on Esc key or Click Outside
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setMobileMenuOpen(false);
    };

    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMobileMenuOpen(false);
      }
    };

    if (mobileMenuOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('touchstart', handleClickOutside);
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [mobileMenuOpen]);

  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'education', label: 'Education', icon: GraduationCap },
    { id: 'projects', label: 'Projects', icon: FolderGit2 },
    { id: 'experience', label: 'Experience', icon: Briefcase },
    { id: 'skills', label: 'Skills', icon: Cpu },
    { id: 'contact', label: 'Contact', icon: Mail },
  ];

  const handleNavClick = (id) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  const activeItem = navItems.find(i => i.id === activePage) || navItems[0];
  const ActiveIcon = activeItem.icon;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 pt-3 sm:pt-4 px-3 sm:px-4 pointer-events-none select-none">
      <div ref={menuRef} className="max-w-max mx-auto flex flex-col items-center pointer-events-auto">
        
        {/* Floating Centered Capsule Header */}
        <div 
          className={`flex items-center gap-1.5 sm:gap-2 p-1.5 rounded-full backdrop-blur-2xl transition-all duration-300 ${
            scrolled
              ? 'bg-white/90 dark:bg-[#060c23]/90 shadow-lg shadow-cyan-950/20 border border-slate-300/80 dark:border-cyan-500/30'
              : 'bg-white/75 dark:bg-[#070e24]/80 shadow-md border border-slate-200/70 dark:border-slate-800/80'
          }`}
        >
          {/* Desktop & Tablet Navigation (md and up) */}
          <nav className="hidden md:flex items-center gap-1" aria-label="Main Navigation">
            {navItems.map((item) => {
              const isActive = activePage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:outline-none cursor-pointer ${
                    isActive
                      ? 'bg-cyan-500/15 dark:bg-cyan-950/90 text-cyan-700 dark:text-cyan-300 border border-cyan-400/40 dark:border-cyan-500/50 font-semibold shadow-sm'
                      : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200/50 dark:hover:bg-slate-800/50'
                  }`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Mobile View Capsule (below md) */}
          <div className="flex md:hidden items-center gap-1">
            
            {/* Active Page Capsule Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-cyan-500/15 dark:bg-cyan-950/80 border border-cyan-400/30 dark:border-cyan-500/40 text-cyan-700 dark:text-cyan-300 font-semibold text-xs transition-all"
              aria-label="Toggle navigation menu"
            >
              <ActiveIcon className="w-3.5 h-3.5" />
              <span>{activeItem.label}</span>
            </button>

            {/* Menu Open/Close Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 rounded-full text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors"
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-4 h-4 text-cyan-500" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>

          {/* Vertical Divider */}
          <div className="w-[1px] h-4 bg-slate-300 dark:bg-slate-700/80 mx-0.5 sm:mx-1" />

          {/* Theme Toggle Button */}
          <ThemeToggle />
        </div>

        {/* Mobile Dropdown Menu (smooth overlay on mobile) */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-2 w-64 p-2 rounded-2xl bg-white/95 dark:bg-[#060c23]/95 backdrop-blur-2xl border border-slate-200 dark:border-slate-800 shadow-2xl animate-in fade-in zoom-in-95 duration-150">
            <div className="flex flex-col gap-1">
              {navItems.map((item) => {
                const isActive = activePage === item.id;
                const ItemIcon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-medium text-left transition-all ${
                      isActive
                        ? 'bg-cyan-500/15 dark:bg-cyan-950/80 text-cyan-700 dark:text-cyan-300 font-semibold border border-cyan-500/30'
                        : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-900/80'
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <ItemIcon className={`w-4 h-4 ${isActive ? 'text-cyan-500' : 'text-slate-400 dark:text-slate-500'}`} />
                      <span>{item.label}</span>
                    </div>
                    {isActive && <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_6px_rgba(34,211,238,0.8)]" />}
                  </button>
                );
              })}
            </div>
          </div>
        )}

      </div>
    </header>
  );
}
