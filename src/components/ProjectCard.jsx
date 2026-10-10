import React from 'react';
import { ExternalLink, Star } from 'lucide-react';
import { GithubIcon } from './Icons';

export default function ProjectCard({ project }) {
  return (
    <div className="glass-card rounded-2xl overflow-hidden border border-slate-200/80 dark:border-slate-800/80 hover:border-cyan-500/40 flex flex-col justify-between group transition-all duration-300 relative">
      
      {/* Subtle top accent gradient */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 via-indigo-500 to-purple-500 opacity-80" />

      {/* Card Image Area */}
      {project.image && (
        <div className="relative w-full h-44 sm:h-48 overflow-hidden bg-slate-950 border-b border-slate-200/60 dark:border-slate-800/80">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
            decoding="async"
            onError={(e) => {
              e.target.style.display = 'none';
            }}
          />
          {/* Subtle Ambient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />

          {/* Featured / Category Badge */}
          <div className="absolute top-3 right-3 flex items-center gap-1.5">
            {project.featured && (
              <span className="inline-flex items-center gap-1 text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30 backdrop-blur-md font-semibold tracking-wider uppercase">
                <Star className="w-2.5 h-2.5 fill-amber-300 text-amber-300" />
                Featured
              </span>
            )}
            <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-slate-900/80 text-cyan-300 border border-cyan-500/30 backdrop-blur-md uppercase tracking-wider font-semibold">
              {project.category}
            </span>
          </div>
        </div>
      )}

      {/* Card Body */}
      <div className="p-6 flex-grow flex flex-col">
        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors">
          {project.title}
        </h3>

        <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm leading-relaxed mb-6 font-normal flex-grow">
          {project.description}
        </p>

        {/* Tech Stack Tags */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {project.stack.map((tech, idx) => (
            <span
              key={idx}
              className="text-[11px] font-mono px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-900/90 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Card Footer: GitHub & Demo Links */}
      <div className="px-6 pb-6 pt-2 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between gap-3">
        {project.github ? (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-900 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-800 text-xs font-mono font-medium transition-all group/btn"
          >
            <GithubIcon className="w-3.5 h-3.5" />
            <span>Repository</span>
          </a>
        ) : (
          <span className="text-[11px] font-mono text-slate-400 dark:text-slate-600">
            Internal / Private
          </span>
        )}

        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-gradient-to-r from-cyan-600 to-indigo-600 hover:from-cyan-500 hover:to-indigo-500 text-white text-xs font-mono font-medium transition-all shadow-md shadow-cyan-600/20 group/demo"
          >
            <span>Live System</span>
            <ExternalLink className="w-3 h-3 group-hover/demo:translate-x-0.5 group-hover/demo:-translate-y-0.5 transition-transform" />
          </a>
        )}
      </div>

    </div>
  );
}
