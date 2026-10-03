import React from 'react';
import EducationCard from './EducationCard';
import educationData from '../data/education.json';
import { Milestone } from 'lucide-react';

export default function EducationTimeline() {
  return (
    <div className="relative w-full max-w-5xl mx-auto">
      
      {/* Trajectory Header Banner */}
      <div className="flex items-center justify-between mb-8 pb-4 border-b border-slate-200/80 dark:border-slate-800/80">
        <div className="flex items-center gap-2 text-xs font-mono text-cyan-600 dark:text-cyan-400">
          <Milestone className="w-4 h-4" />
          <span>ACADEMIC TRAJECTORY TIMELINE</span>
        </div>
        <div className="text-xs font-mono text-slate-500 dark:text-slate-400">
          2023 — 2027
        </div>
      </div>

      {/* Timeline Items */}
      <div className="relative space-y-10">
        {/* Vertical Track Line for Desktop */}
        <div className="hidden md:block absolute left-4 top-4 bottom-4 w-0.5 bg-gradient-to-b from-cyan-500 via-indigo-500 to-purple-500/30 opacity-40" />

        {educationData.map((item, index) => (
          <div key={item.id || index} className="relative md:pl-12">
            
            {/* Desktop Orbital Waypoint Node */}
            <div className="hidden md:flex absolute left-4 top-8 -translate-x-1/2 w-7 h-7 rounded-full bg-slate-100 dark:bg-slate-900 border-2 border-cyan-400 items-center justify-center shadow-[0_0_15px_rgba(56,189,248,0.5)] z-10">
              <span className="w-2 h-2 rounded-full bg-cyan-500 dark:bg-cyan-300 animate-ping opacity-75" />
              <span className="absolute w-1.5 h-1.5 rounded-full bg-cyan-500 dark:bg-cyan-300" />
            </div>

            {/* The Card Component */}
            <EducationCard item={item} />
          </div>
        ))}
      </div>

    </div>
  );
}
