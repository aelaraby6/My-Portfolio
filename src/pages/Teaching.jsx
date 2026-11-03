import React, { useState, useEffect } from 'react';
import coursesData from '../data/courses.json';
import CourseDetail from './CourseDetail';
import { 
  BookOpen, 
  ArrowLeft, 
  GraduationCap, 
  ExternalLink, 
  Layers, 
  Terminal, 
  Sparkles, 
  ChevronRight,
  Code2,
  CheckCircle2,
  Cpu
} from 'lucide-react';
import { GithubIcon } from '../components/Icons';

export default function Teaching({ onBackToHome, courseSlug, onNavigateToCourse }) {
  // If a slug is passed from routing (e.g., #teaching/vector-databases)
  const [selectedCourseSlug, setSelectedCourseSlug] = useState(courseSlug || null);

  useEffect(() => {
    if (courseSlug) {
      setSelectedCourseSlug(courseSlug);
    }
  }, [courseSlug]);

  const selectedCourse = coursesData.find(
    c => c.slug === selectedCourseSlug || c.id === selectedCourseSlug
  );

  const handleSelectCourse = (slug) => {
    setSelectedCourseSlug(slug);
    if (onNavigateToCourse) {
      onNavigateToCourse(slug);
    } else {
      if (slug) {
        window.location.hash = `teaching/${slug}`;
      } else {
        window.location.hash = 'teaching';
      }
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // If a course is currently active, render its dedicated page
  if (selectedCourse) {
    return (
      <CourseDetail
        course={selectedCourse}
        onBackToTeaching={() => handleSelectCourse(null)}
        onBackToHome={onBackToHome}
      />
    );
  }

  // Otherwise render the main Teaching Directory Hub
  return (
    <div className="py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
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
            <BookOpen className="w-4 h-4 text-cyan-500" />
            <span>ACADEMIC INSTRUCTION &amp; WORKSHOPS</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-3">
            Courses &amp; <span className="cosmos-text-gradient">Teaching</span>
          </h1>

          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base max-w-3xl leading-relaxed">
            Hands-on technical curricula and laboratory courses. Designed to bridge theoretical computer science foundations with modern production engineering, vector search architectures, and AI systems.
          </p>
        </div>

        {/* Courses Listing Section */}
        <div className="space-y-8">
          <div className="flex items-center justify-between pb-3 border-b border-slate-200/80 dark:border-slate-800/80">
            <div className="flex items-center gap-2 text-xs font-mono text-cyan-600 dark:text-cyan-400 uppercase tracking-wider">
              <GraduationCap className="w-4 h-4" />
              <span>Available Curricula</span>
            </div>
            <span className="text-xs font-mono text-slate-400">
              Showing {coursesData.length} course
            </span>
          </div>

          <div className="grid grid-cols-1 gap-8">
            {coursesData.map((course) => (
              <div 
                key={course.id}
                className="glass-card rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 relative overflow-hidden group hover:border-cyan-500/40 transition-all duration-300"
              >
                {/* Background soft ambient hover glow */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/5 group-hover:bg-cyan-500/10 rounded-full blur-3xl transition-all pointer-events-none" />

                <div className="relative z-10 flex flex-col justify-between h-full">
                  
                  {/* Card Header & Badges */}
                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-4">
                      <span className="px-3 py-1 rounded-full bg-cyan-500/15 text-cyan-700 dark:text-cyan-300 border border-cyan-500/30 text-xs font-mono font-medium">
                        {course.badge}
                      </span>
                      <span className="px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-700 dark:text-indigo-300 border border-indigo-500/20 text-xs font-mono">
                        {course.category}
                      </span>
                      <span className="px-3 py-1 rounded-full bg-slate-200/70 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 border border-slate-300/50 dark:border-slate-700/60 text-xs font-mono">
                        {course.duration}
                      </span>
                    </div>

                    {/* Course Title */}
                    <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white mb-3 group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors">
                      {course.title}
                    </h2>

                    {/* Tagline */}
                    <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 mb-6 leading-relaxed max-w-4xl">
                      {course.tagline}
                    </p>

                    {/* Progressive Parts Breakdown */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-6">
                      {course.parts.map((p) => (
                        <div 
                          key={p.partNumber}
                          className="p-3.5 rounded-xl bg-slate-100/70 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800/80"
                        >
                          <span className="text-[10px] font-mono text-cyan-600 dark:text-cyan-400 font-bold block mb-1">
                            PART {p.partNumber}
                          </span>
                          <h4 className="text-xs font-bold text-slate-900 dark:text-white mb-1 truncate">
                            {p.title.replace(/^Part \d+ — /, '')}
                          </h4>
                          <p className="text-[11px] text-slate-500 dark:text-slate-400 line-clamp-2">
                            {p.description}
                          </p>
                        </div>
                      ))}
                    </div>

                    {/* Stack & Tools Chips */}
                    <div className="flex flex-wrap items-center gap-1.5 mb-8">
                      <span className="text-xs font-mono text-slate-400 mr-1 flex items-center gap-1">
                        <Cpu className="w-3.5 h-3.5 text-cyan-500" /> Stack:
                      </span>
                      {['Python', 'ChromaDB', 'FAISS', 'Qdrant', 'pgvector', 'Google Colab', 'Sentence-Transformers', 'Qwen 2.5'].map((tool, idx) => (
                        <span
                          key={idx}
                          className="px-2.5 py-0.5 rounded-md bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-[11px] font-mono text-slate-600 dark:text-slate-400"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Card Bottom CTA Actions */}
                  <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-slate-200/80 dark:border-slate-800/80">
                    <button
                      type="button"
                      onClick={() => handleSelectCourse(course.slug)}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold text-xs sm:text-sm transition-all shadow-md shadow-cyan-500/20 cursor-pointer group/btn"
                    >
                      <span>Explore Full Course &amp; Materials</span>
                      <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </button>

                    <div className="flex items-center gap-3">
                      <a
                        href={course.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-xs font-mono text-slate-600 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-300 transition-colors"
                      >
                        <GithubIcon className="w-4 h-4 fill-current" />
                        <span>View Repository</span>
                        <ExternalLink className="w-3 h-3 opacity-60" />
                      </a>
                    </div>
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
