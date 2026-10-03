import React from 'react';
import { Briefcase, Building2, ExternalLink } from 'lucide-react';

export default function ExperienceCard({ exp }) {
  return (
    <div className="glass-card rounded-2xl p-6 sm:p-8 border border-slate-200/90 dark:border-slate-800/90 hover:border-cyan-500/40 relative overflow-hidden group transition-all duration-300">
      
      {/* Subtle top accent gradient */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 via-indigo-500 to-purple-500 opacity-80" />

      {/* Header: Company Logo, Role, Company Name, Type Badge */}
      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-6">
        <div className="flex items-start gap-4">
          {/* Logo / Emblem */}
          <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-center shrink-0 shadow-sm overflow-hidden group-hover:scale-105 transition-transform">
            {exp.icon ? (
              <img 
                src={exp.icon} 
                alt={exp.company} 
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.parentElement.innerHTML = '<div class="text-cyan-500 font-mono text-base font-bold">💼</div>';
                }}
              />
            ) : (
              <Building2 className="w-6 h-6 text-cyan-500" />
            )}
          </div>

          <div>
            <div className="flex items-center gap-2 flex-wrap mb-1">
              <span className="text-xs font-mono font-bold text-cyan-600 dark:text-cyan-400">
                {exp.company}
              </span>
              <span className="w-1 h-1 rounded-full bg-slate-400" />
              <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400">
                {exp.workMode}
              </span>
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors">
              {exp.role}
            </h3>

            <div className="text-xs font-mono text-slate-500 dark:text-slate-400 mt-1">
              {exp.location}
            </div>
          </div>
        </div>

        {/* Date & Type Badges */}
        <div className="flex flex-wrap sm:flex-col items-start sm:items-end gap-2 shrink-0">
          <span className="px-3 py-1 rounded-lg bg-cyan-500/10 dark:bg-cyan-950/50 border border-cyan-500/30 text-cyan-700 dark:text-cyan-300 text-xs font-mono font-semibold">
            {exp.period}
          </span>
          <span className="px-2.5 py-0.5 rounded-md bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400 text-[11px] font-mono">
            {exp.type}
          </span>
        </div>
      </div>

      {/* Highlights / Responsibilities */}
      {exp.highlights && exp.highlights.length > 0 && (
        <div className="space-y-2.5 mb-6">
          {exp.highlights.map((item, idx) => (
            <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 mt-2 shrink-0" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      )}

      {/* Project Link (if present) */}
      {exp.projectLink && (
        <div className="mb-6">
          <a
            href={exp.projectLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 dark:bg-slate-800 dark:hover:bg-slate-700 text-white text-xs font-mono font-medium transition-all group/btn shadow-sm"
          >
            <span>Live Platform: {exp.projectLabel || exp.company}</span>
            <ExternalLink className="w-3.5 h-3.5 opacity-70 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
          </a>
        </div>
      )}

      {/* Skills Tags */}
      {exp.skills && exp.skills.length > 0 && (
        <div className="pt-4 border-t border-slate-100 dark:border-slate-800/80 flex flex-wrap gap-1.5">
          {exp.skills.map((skill, idx) => (
            <span
              key={idx}
              className="text-[11px] font-mono px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-900/90 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:border-cyan-500/40 transition-colors"
            >
              {skill}
            </span>
          ))}
        </div>
      )}

    </div>
  );
}
