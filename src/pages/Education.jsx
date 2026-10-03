import React from 'react';
import EducationTimeline from '../components/EducationTimeline';
import CertificatesSection from '../components/CertificatesSection';
import { GraduationCap, ArrowLeft } from 'lucide-react';

export default function Education({ onBackToHome }) {
  return (
    <div className="py-12 sm:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
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
            <GraduationCap className="w-4 h-4 text-cyan-500" />
            <span>ACADEMIC RECORD</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-2">
            Education &amp; <span className="cosmos-text-gradient">Trajectory</span>
          </h1>
        </div>

        {/* The Timeline Section (Zagazig University + ITI) */}
        <EducationTimeline />

        {/* The Verified Certificates & Specializations Section */}
        <CertificatesSection />

      </div>
    </div>
  );
}
