import React from 'react';
import skillsData from '../data/skills.json';
import { ArrowLeft, Cpu, Terminal } from 'lucide-react';

export default function Skills({ onBackToHome }) {
  return (
    <div className="py-12 sm:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Navigation Breadcrumb */}
        <div className="mb-8">
          <button
            onClick={onBackToHome}
            type="button"
            className="inline-flex items-center gap-2 text-xs font-mono text-slate-500 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-300 transition-colors cursor-pointer group p-1"
          >
            <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
            <span>RETURN TO BASE (HOME)</span>
          </button>
        </div>

        {/* Page Header */}
        <div className="flex flex-col items-start mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 dark:bg-cyan-950/40 border border-cyan-500/20 dark:border-cyan-500/30 text-cyan-700 dark:text-cyan-300 text-xs font-mono font-medium mb-4 backdrop-blur-sm">
            <Cpu className="w-4 h-4 text-cyan-500" />
            <span>TECHNICAL CAPABILITIES &amp; STACK</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-3">
            Skills &amp; <span className="cosmos-text-gradient">Technologies</span>
          </h1>

          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base max-w-2xl leading-relaxed">
            Proficiencies across systems engineering, backend infrastructure, cloud runtimes, relational &amp; NoSQL databases, and core software architecture.
          </p>
        </div>

        {/* Skills Categories Stack (Exact capsule pill layout) */}
        <div className="space-y-10 sm:space-y-12">
          {skillsData.map((categoryGroup, idx) => (
            <div key={idx} className="space-y-4">
              
              {/* Monospace Uppercase Category Header */}
              <div className="flex items-center gap-3">
                <h2 className="text-xs sm:text-[13px] font-mono font-semibold tracking-widest text-slate-500 dark:text-slate-400 uppercase">
                  {categoryGroup.category}
                </h2>
                <div className="h-[1px] flex-grow bg-slate-200/60 dark:bg-slate-800/60" />
              </div>

              {/* Skills Capsule Pills Flow */}
              <div className="flex flex-wrap gap-2.5 sm:gap-3">
                {categoryGroup.skills.map((skill, sIdx) => (
                  <div
                    key={sIdx}
                    className="flex items-center gap-3 px-4 py-2.5 rounded-xl bg-white/70 dark:bg-[#070c1e]/85 border border-slate-200/80 dark:border-slate-800/80 hover:border-cyan-500/50 hover:bg-cyan-500/5 dark:hover:bg-[#0b132d] transition-all duration-200 cursor-default group shadow-sm hover:shadow-cyan-950/20"
                  >
                    {/* Brand Icon */}
                    <div className="w-5 h-5 flex items-center justify-center shrink-0">
                      {skill.icon ? (
                        <img
                          src={skill.icon}
                          alt={skill.name}
                          className="w-5 h-5 object-contain group-hover:scale-110 transition-transform"
                          loading="lazy"
                          onError={(e) => {
                            e.target.style.display = 'none';
                            e.target.parentElement.innerHTML = '<span class="text-cyan-500 text-xs font-mono font-bold">⚡</span>';
                          }}
                        />
                      ) : (
                        <Terminal className="w-4 h-4 text-cyan-500 shrink-0" />
                      )}
                    </div>

                    {/* Skill Name */}
                    <span className="text-xs sm:text-sm font-medium text-slate-800 dark:text-slate-200 group-hover:text-cyan-600 dark:group-hover:text-white transition-colors tracking-tight whitespace-nowrap">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
