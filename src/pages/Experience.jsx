import React from 'react';
import ExperienceCard from '../components/ExperienceCard';
import experienceData from '../data/experience.json';
import { Briefcase, ArrowLeft, Milestone } from 'lucide-react';

export default function Experience({ onBackToHome }) {
  return (
    <div className="py-12 sm:py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
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
            <Briefcase className="w-4 h-4 text-cyan-500" />
            <span>ENGINEERING EXPERIENCE &amp; LEADERSHIP</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-3">
            Work Experience &amp; <span className="cosmos-text-gradient">Internships</span>
          </h1>

          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base max-w-2xl leading-relaxed">
            Hands-on software and infrastructure engineering across enterprise platforms, backend system architectures, and network routing.
          </p>
        </div>

        {/* Timeline Header Banner */}
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-slate-200/80 dark:border-slate-800/80">
          <div className="flex items-center gap-2 text-xs font-mono text-cyan-600 dark:text-cyan-400">
            <Milestone className="w-4 h-4" />
            <span>CAREER TRAJECTORY</span>
          </div>
          <div className="text-xs font-mono text-slate-500 dark:text-slate-400">
            2025 — 2026
          </div>
        </div>

        {/* Timeline Items */}
        <div className="relative space-y-10">
          {/* Vertical Track Line for Desktop */}
          <div className="hidden md:block absolute left-4 top-4 bottom-4 w-0.5 bg-gradient-to-b from-cyan-500 via-indigo-500 to-purple-500/30 opacity-40" />

          {experienceData.map((exp, index) => (
            <div key={exp.id || index} className="relative md:pl-12">
              
              {/* Desktop Orbital Waypoint Node */}
              <div className="hidden md:flex absolute left-4 top-8 -translate-x-1/2 w-7 h-7 rounded-full bg-slate-100 dark:bg-slate-900 border-2 border-cyan-400 items-center justify-center shadow-[0_0_15px_rgba(56,189,248,0.5)] z-10">
                <span className="w-2 h-2 rounded-full bg-cyan-500 dark:bg-cyan-300 animate-ping opacity-75" />
                <span className="absolute w-1.5 h-1.5 rounded-full bg-cyan-500 dark:bg-cyan-300" />
              </div>

              {/* Experience Card */}
              <ExperienceCard exp={exp} />
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
