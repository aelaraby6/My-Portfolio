import React from 'react';
import { 
  GithubIcon, 
  LinkedinIcon, 
  GmailIcon,
  LeetCodeIcon, 
  CodeforcesIcon, 
  HackerRankIcon,
  XIcon, 
  ScholarIcon, 
  KaggleIcon 
} from '../components/Icons';
import Model3D from '../components/Model3D';
import profileData from '../data/profile.json';

export default function Home() {
  const getSocialIcon = (iconName) => {
    const iconClass = "w-4 h-4 text-slate-800 dark:text-slate-200 group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors";
    switch (iconName) {
      case 'github':
        return <GithubIcon className={iconClass} />;
      case 'linkedin':
        return <LinkedinIcon className={iconClass} />;
      case 'gmail':
        return <GmailIcon className={iconClass} />;
      case 'codeforces':
        return <CodeforcesIcon className={iconClass} />;
      case 'leetcode':
        return <LeetCodeIcon className={iconClass} />;
      case 'hackerrank':
        return <HackerRankIcon className={iconClass} />;
      case 'x':
        return <XIcon className={iconClass} />;
      case 'scholar':
        return <ScholarIcon className={iconClass} />;
      case 'kaggle':
        return <KaggleIcon className={iconClass} />;
      default:
        return null;
    }
  };

  return (
    <section className="relative w-full h-[calc(100dvh-5rem)] max-h-screen overflow-hidden flex items-center justify-center px-6 sm:px-10 lg:px-16 select-none">
      <div className="max-w-7xl w-full mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Big Bold Name, Developer Handles, Quote */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            {/* Big Bold Headline Name */}
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-slate-900 dark:text-white uppercase leading-none mb-8 sm:mb-10">
              {profileData.displayName || profileData.name}
            </h1>

            {/* Developer Platform Links */}
            <div className="flex flex-wrap items-center gap-x-7 gap-y-3.5 mb-8 sm:mb-10">
              {profileData.socials.map((social, idx) => (
                <a
                  key={idx}
                  href={social.url}
                  target={social.url.startsWith('mailto:') ? '_self' : '_blank'}
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 text-xs sm:text-sm font-mono text-slate-600 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-300 transition-colors"
                >
                  <span className="opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-transform">
                    {getSocialIcon(social.icon)}
                  </span>
                  <span className="font-bold text-slate-900 dark:text-slate-100 group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors capitalize">
                    {social.name}
                  </span>
                  {social.handle && (
                    <span className="text-slate-500 dark:text-slate-400">
                      {social.handle}
                    </span>
                  )}
                </a>
              ))}
            </div>

            {/* Subtle Horizontal Divider */}
            <div className="w-full h-[1px] bg-slate-200 dark:bg-slate-800/80 mb-6" />

            {/* Philosophical Quote */}
            <div className="flex items-start gap-2.5 text-slate-600 dark:text-slate-400 text-xs sm:text-sm font-mono leading-relaxed max-w-xl">
              <span className="text-cyan-600 dark:text-cyan-400 font-serif text-base leading-none select-none">“</span>
              <div>
                <p className="italic text-slate-700 dark:text-slate-300">
                  {profileData.quote?.text}
                </p>
                {profileData.quote?.author && (
                  <div className="mt-1.5 text-[11px] text-slate-400 dark:text-slate-500 font-mono">
                    — {profileData.quote.author}
                  </div>
                )}
              </div>
            </div>

          </div>

          {/* Right Column: Detective Conan 3D Model */}
          <div className="lg:col-span-5 flex items-center justify-center">
            <Model3D />
          </div>

        </div>
      </div>
    </section>
  );
}
