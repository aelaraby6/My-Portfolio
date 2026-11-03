import React, { useState, useEffect } from 'react';
import { Home, GraduationCap, FolderGit2, Briefcase, Cpu, Mail, BookOpen } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

export default function Navbar({ activePage, onNavigate }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'education', label: 'Education', icon: GraduationCap },
    { id: 'projects', label: 'Projects', icon: FolderGit2 },
    { id: 'experience', label: 'Experience', icon: Briefcase },
    { id: 'skills', label: 'Skills', icon: Cpu },
    { id: 'teaching', label: 'Teaching', icon: BookOpen },
    { id: 'contact', label: 'Contact', icon: Mail },
  ];

  const handleNavClick = (id) => {
    onNavigate(id);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 pt-2.5 sm:pt-4 px-1.5 sm:px-4 pointer-events-none select-none">
      <div className="max-w-max mx-auto flex items-center justify-center pointer-events-auto">
        
        {/* Floating Capsule Header */}
        <div 
          className={`flex items-center gap-0.5 sm:gap-1.5 p-1 sm:p-1.5 rounded-full backdrop-blur-2xl transition-all duration-300 shadow-md ${
            scrolled
              ? 'bg-white/95 dark:bg-[#060c23]/95 shadow-lg shadow-cyan-950/20 border border-slate-300/80 dark:border-cyan-500/30'
              : 'bg-white/85 dark:bg-[#070e24]/90 border border-slate-200/80 dark:border-slate-800/80'
          }`}
        >
          {/* Navigation Items: All 7 items Statically Visible on Mobile and Desktop */}
          <nav 
            className="flex items-center gap-0.5 sm:gap-1" 
            aria-label="Main Navigation"
          >
            {navItems.map((item) => {
              const isActive = activePage === item.id || activePage?.startsWith(item.id + '/');
              const ItemIcon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  title={item.label}
                  className={`shrink-0 flex items-center justify-center gap-1 sm:gap-1.5 rounded-full transition-all duration-200 focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:outline-none cursor-pointer ${
                    isActive
                      ? 'px-2.5 sm:px-3.5 py-1.5 bg-cyan-500/15 dark:bg-cyan-950/90 text-cyan-700 dark:text-cyan-300 border border-cyan-400/40 dark:border-cyan-500/50 font-semibold shadow-sm'
                      : 'w-7 h-7 sm:w-8 sm:h-8 md:w-auto md:h-auto p-1.5 md:px-3 md:py-1.5 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200/50 dark:hover:bg-slate-800/50'
                  }`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  <ItemIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
                  <span 
                    className={`text-xs sm:text-sm whitespace-nowrap ${
                      isActive ? 'inline' : 'hidden md:inline'
                    }`}
                  >
                    {item.label}
                  </span>
                </button>
              );
            })}
          </nav>

          {/* Vertical Divider */}
          <div className="w-[1px] h-4 bg-slate-300 dark:bg-slate-700/80 mx-0.5 shrink-0" />

          {/* Theme Toggle Button */}
          <div className="shrink-0">
            <ThemeToggle />
          </div>
        </div>

      </div>
    </header>
  );
}
