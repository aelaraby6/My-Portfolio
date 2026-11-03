import React, { useState } from 'react';
import { 
  ArrowLeft, 
  BookOpen, 
  ExternalLink, 
  Download, 
  FileText, 
  Layers, 
  Terminal, 
  CheckCircle2, 
  Sparkles, 
  Copy, 
  Check, 
  GraduationCap, 
  Cpu, 
  Code2, 
  ChevronRight,
  Database,
  Search,
  Brain,
  Share2
} from 'lucide-react';
import { GithubIcon } from '../components/Icons';

export default function CourseDetail({ course, onBackToTeaching, onBackToHome }) {
  const [activePartFilter, setActivePartFilter] = useState('all');
  const [copiedCode, setCopiedCode] = useState(false);

  if (!course) {
    return (
      <div className="py-20 text-center">
        <p className="text-slate-500">Course not found.</p>
        <button
          onClick={onBackToTeaching}
          className="mt-4 px-4 py-2 rounded-xl bg-cyan-500/20 text-cyan-400 font-mono text-xs"
        >
          Return to Teaching Directory
        </button>
      </div>
    );
  }

  const handleCopyClone = () => {
    const cloneCmd = `git clone ${course.githubUrl}.git`;
    navigator.clipboard.writeText(cloneCmd);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  const filteredSessions = activePartFilter === 'all'
    ? course.sessions
    : course.sessions.filter(s => s.part === Number(activePartFilter));

  return (
    <div className="py-10 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Navigation Breadcrumbs */}
        <div className="flex flex-wrap items-center gap-3 text-xs font-mono mb-8">
          <button
            onClick={onBackToHome}
            type="button"
            className="inline-flex items-center gap-1.5 text-slate-500 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-300 transition-colors cursor-pointer group"
          >
            <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
            <span>BASE (HOME)</span>
          </button>
          <span className="text-slate-400 dark:text-slate-600">/</span>
          <button
            onClick={onBackToTeaching}
            type="button"
            className="text-slate-500 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-300 transition-colors cursor-pointer"
          >
            TEACHING
          </button>
          <span className="text-slate-400 dark:text-slate-600">/</span>
          <span className="text-cyan-600 dark:text-cyan-400 font-semibold truncate max-w-xs sm:max-w-md">
            {course.title}
          </span>
        </div>

        {/* Hero Banner Section */}
        <div className="glass-card rounded-3xl p-6 sm:p-10 mb-12 relative overflow-hidden border border-slate-200 dark:border-slate-800">
          {/* Subtle Ambient Glowing Gradients */}
          <div className="absolute -top-24 -right-24 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col items-start">
            
            {/* Top Badges */}
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/15 text-cyan-700 dark:text-cyan-300 border border-cyan-500/30 text-xs font-mono font-medium">
                <Sparkles className="w-3 h-3 text-cyan-500" />
                {course.badge}
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-200/70 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 border border-slate-300/50 dark:border-slate-700/60 text-xs font-mono">
                <Layers className="w-3 h-3 text-indigo-400" />
                {course.duration}
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border border-emerald-500/30 text-xs font-mono">
                <Terminal className="w-3 h-3 text-emerald-500" />
                {course.runtime}
              </span>
            </div>

            {/* Course Title */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 dark:text-white mb-4 leading-tight">
              Vector Databases: <span className="cosmos-text-gradient">From Zero to RAG</span>
            </h1>

            {/* Subtitle / Tagline */}
            <p className="text-base sm:text-lg text-slate-700 dark:text-slate-300 max-w-4xl font-normal leading-relaxed mb-6">
              {course.tagline}
            </p>

            {/* Highlights Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full mb-8 py-3 border-y border-slate-200/80 dark:border-slate-800/80 text-xs font-mono">
              <div>
                <span className="text-slate-400 block text-[11px]">SESSIONS</span>
                <span className="font-bold text-slate-800 dark:text-slate-200 text-sm sm:text-base">9 Interactive Labs</span>
              </div>
              <div>
                <span className="text-slate-400 block text-[11px]">STRUCTURE</span>
                <span className="font-bold text-slate-800 dark:text-slate-200 text-sm sm:text-base">3 Progressive Parts</span>
              </div>
              <div>
                <span className="text-slate-400 block text-[11px]">ENVIRONMENT</span>
                <span className="font-bold text-slate-800 dark:text-slate-200 text-sm sm:text-base">Colab (No Setup)</span>
              </div>
              <div>
                <span className="text-slate-400 block text-[11px]">LLM STACK</span>
                <span className="font-bold text-slate-800 dark:text-slate-200 text-sm sm:text-base">Qwen 2.5 (Open-weight)</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3">
              <a
                href={course.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-semibold text-xs sm:text-sm hover:opacity-90 transition-all shadow-md cursor-pointer"
              >
                <GithubIcon className="w-4 h-4 fill-current" />
                <span>GitHub Repository</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-70" />
              </a>

              <a
                href="#sessions-table"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-cyan-500/15 dark:bg-cyan-950/70 border border-cyan-500/40 text-cyan-700 dark:text-cyan-300 font-semibold text-xs sm:text-sm hover:bg-cyan-500/25 transition-all cursor-pointer"
              >
                <BookOpen className="w-4 h-4" />
                <span>Browse Sessions &amp; Materials</span>
              </a>

              <button
                type="button"
                onClick={handleCopyClone}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-900/90 border border-slate-300 dark:border-slate-800 text-slate-700 dark:text-slate-300 font-mono text-xs hover:border-cyan-500/50 transition-all cursor-pointer"
              >
                {copiedCode ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-slate-400" />}
                <span>{copiedCode ? 'Cloned command copied!' : 'git clone repo'}</span>
              </button>
            </div>

          </div>
        </div>

        {/* 1. Course Overview & Learning Objectives (Detailed Academic Layout) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
          
          {/* Main Content Column (Overview & Objectives) */}
          <div className="lg:col-span-8 space-y-8">
            
            {/* Course Overview Card */}
            <div className="glass-card rounded-2xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800">
              <div className="flex items-center gap-2.5 mb-4 text-cyan-600 dark:text-cyan-400">
                <BookOpen className="w-5 h-5" />
                <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
                  Course Overview
                </h2>
              </div>
              <p className="text-slate-700 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
                {course.overview}
              </p>
            </div>

            {/* Learning Objectives Card */}
            <div className="glass-card rounded-2xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800">
              <div className="flex items-center gap-2.5 mb-4 text-cyan-600 dark:text-cyan-400">
                <GraduationCap className="w-5 h-5" />
                <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
                  Learning Objectives
                </h2>
              </div>
              <p className="text-xs sm:text-sm font-mono text-slate-500 dark:text-slate-400 mb-6">
                By completing this curriculum, participants will be able to:
              </p>
              
              <div className="space-y-3.5">
                {course.learningObjectives.map((obj, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="shrink-0 mt-1 w-5 h-5 rounded-full bg-cyan-500/15 dark:bg-cyan-950/80 border border-cyan-500/40 flex items-center justify-center">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-500 dark:text-cyan-300" />
                    </div>
                    <span className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                      {obj}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Topics Grid */}
            <div className="glass-card rounded-2xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800">
              <div className="flex items-center gap-2.5 mb-6 text-cyan-600 dark:text-cyan-400">
                <Brain className="w-5 h-5" />
                <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
                  Key Topics &amp; Core Syllabus
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {course.keyTopics.map((topic, i) => (
                  <div 
                    key={i}
                    className="p-4 rounded-xl bg-slate-100/60 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800/80 hover:border-cyan-500/30 transition-colors"
                  >
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="w-5 h-5 rounded-md bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 font-mono text-[10px] flex items-center justify-center font-bold">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <h3 className="font-semibold text-xs sm:text-sm text-slate-900 dark:text-slate-100">
                        {topic.title}
                      </h3>
                    </div>
                    <p className="text-[12px] sm:text-xs text-slate-600 dark:text-slate-400 leading-relaxed pl-7">
                      {topic.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Sidebar Column: Tools, Prerequisites, Audience */}
          <div className="lg:col-span-4 space-y-8">
            
            {/* Lab & Workshop Tools */}
            <div className="glass-card rounded-2xl p-6 border border-slate-200 dark:border-slate-800">
              <div className="flex items-center gap-2 mb-4 text-cyan-600 dark:text-cyan-400">
                <Cpu className="w-4 h-4" />
                <h3 className="text-base font-bold text-slate-900 dark:text-white">
                  Lab &amp; Workshop Tools
                </h3>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400 mb-5">
                Technologies utilized across the 9 hands-on Google Colab laboratories:
              </p>

              <div className="space-y-4">
                {course.toolsAndStack.map((group, idx) => (
                  <div key={idx} className="space-y-2">
                    <span className="text-[11px] font-mono uppercase text-slate-400 tracking-wider block">
                      {group.category}
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {group.tools.map((tool, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs font-mono text-slate-700 dark:text-slate-300 font-medium"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Who This Course Is For */}
            <div className="glass-card rounded-2xl p-6 border border-slate-200 dark:border-slate-800">
              <div className="flex items-center gap-2 mb-3 text-cyan-600 dark:text-cyan-400">
                <Search className="w-4 h-4" />
                <h3 className="text-base font-bold text-slate-900 dark:text-white">
                  Target Audience
                </h3>
              </div>
              <ul className="space-y-2.5 text-xs text-slate-600 dark:text-slate-400">
                {course.whoThisCourseIsFor.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <ChevronRight className="w-3.5 h-3.5 text-cyan-500 shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Prerequisites */}
            <div className="glass-card rounded-2xl p-6 border border-slate-200 dark:border-slate-800">
              <div className="flex items-center gap-2 mb-3 text-cyan-600 dark:text-cyan-400">
                <Terminal className="w-4 h-4" />
                <h3 className="text-base font-bold text-slate-900 dark:text-white">
                  Prerequisites
                </h3>
              </div>
              <ul className="space-y-2 text-xs text-slate-600 dark:text-slate-400">
                {course.prerequisites.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-cyan-500 font-mono">•</span>
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Repository Structure Info */}
            <div className="glass-card rounded-2xl p-6 border border-slate-200 dark:border-slate-800">
              <div className="flex items-center gap-2 mb-3 text-cyan-600 dark:text-cyan-400">
                <Database className="w-4 h-4" />
                <h3 className="text-base font-bold text-slate-900 dark:text-white">
                  Repository Layout
                </h3>
              </div>
              <div className="space-y-2.5 text-xs font-mono">
                {course.repoStructure.map((item, idx) => (
                  <div key={idx} className="p-2.5 rounded-lg bg-slate-100/70 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800">
                    <code className="text-cyan-600 dark:text-cyan-400 font-bold block mb-1">
                      {item.folder}
                    </code>
                    <p className="text-[11px] font-sans text-slate-600 dark:text-slate-400">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

        {/* 2. Interactive Sessions Table & Materials (Responsive Table + Cards) */}
        <section id="sessions-table" className="mb-14 scroll-mt-24">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 text-xs font-mono font-medium mb-2">
                <Layers className="w-3.5 h-3.5" />
                <span>NINE STRUCTURED SESSIONS</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white">
                Course Structure &amp; <span className="cosmos-text-gradient">Lecture Materials</span>
              </h2>
            </div>

            {/* Module Filter Tabs */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 max-w-full no-scrollbar">
              <button
                type="button"
                onClick={() => setActivePartFilter('all')}
                className={`px-3 py-1.5 rounded-xl text-xs font-mono transition-all cursor-pointer shrink-0 ${
                  activePartFilter === 'all'
                    ? 'bg-cyan-500/20 text-cyan-600 dark:text-cyan-300 border border-cyan-500/40 font-semibold'
                    : 'bg-slate-100 dark:bg-slate-900/60 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800'
                }`}
              >
                All (9)
              </button>
              <button
                type="button"
                onClick={() => setActivePartFilter('1')}
                className={`px-3 py-1.5 rounded-xl text-xs font-mono transition-all cursor-pointer shrink-0 ${
                  activePartFilter === '1'
                    ? 'bg-cyan-500/20 text-cyan-600 dark:text-cyan-300 border border-cyan-500/40 font-semibold'
                    : 'bg-slate-100 dark:bg-slate-900/60 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800'
                }`}
              >
                Part 1: Fundamentals
              </button>
              <button
                type="button"
                onClick={() => setActivePartFilter('2')}
                className={`px-3 py-1.5 rounded-xl text-xs font-mono transition-all cursor-pointer shrink-0 ${
                  activePartFilter === '2'
                    ? 'bg-cyan-500/20 text-cyan-600 dark:text-cyan-300 border border-cyan-500/40 font-semibold'
                    : 'bg-slate-100 dark:bg-slate-900/60 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800'
                }`}
              >
                Part 2: Under the Hood
              </button>
              <button
                type="button"
                onClick={() => setActivePartFilter('3')}
                className={`px-3 py-1.5 rounded-xl text-xs font-mono transition-all cursor-pointer shrink-0 ${
                  activePartFilter === '3'
                    ? 'bg-cyan-500/20 text-cyan-600 dark:text-cyan-300 border border-cyan-500/40 font-semibold'
                    : 'bg-slate-100 dark:bg-slate-900/60 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800'
                }`}
              >
                Part 3: ChromaDB &amp; RAG
              </button>
            </div>
          </div>

          {/* Desktop Table View (hidden on small screens) */}
          <div className="hidden lg:block glass-card rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-slate-200/80 dark:border-slate-800/80 bg-slate-100/50 dark:bg-slate-900/50 text-[11px] font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    <th className="py-4 px-4 w-16 text-center">#</th>
                    <th className="py-4 px-6">Topic &amp; Overview</th>
                    <th className="py-4 px-4">Lecture Slides</th>
                    <th className="py-4 px-4">Lab Sheet</th>
                    <th className="py-4 px-4 text-right">Notebook &amp; Colab</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200/60 dark:divide-slate-800/60 text-xs font-sans">
                  {filteredSessions.map((s) => (
                    <tr 
                      key={s.session}
                      className="hover:bg-slate-50/60 dark:hover:bg-slate-800/40 transition-colors"
                    >
                      {/* Session Number */}
                      <td className="py-4 px-4 text-center font-mono font-bold text-cyan-600 dark:text-cyan-400">
                        {String(s.session).padStart(2, '0')}
                      </td>

                      {/* Topic & Description */}
                      <td className="py-4 px-6 max-w-md">
                        <div className="font-semibold text-slate-900 dark:text-white text-sm mb-1">
                          {s.topic}
                        </div>
                        <div className="text-slate-500 dark:text-slate-400 text-xs leading-relaxed">
                          {s.description}
                        </div>
                        <div className="mt-1.5 inline-block text-[10px] font-mono text-indigo-500 dark:text-indigo-400 bg-indigo-500/10 px-2 py-0.5 rounded">
                          {s.partTitle}
                        </div>
                      </td>

                      {/* Slides Link */}
                      <td className="py-4 px-4">
                        <a
                          href={s.slides.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-900 hover:bg-cyan-500/10 border border-slate-200 dark:border-slate-800 hover:border-cyan-500/40 text-slate-700 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-300 font-mono text-xs transition-all group"
                          title="Open Presentation Slides"
                        >
                          <FileText className="w-3.5 h-3.5 text-amber-500" />
                          <span>Slides (.pptx)</span>
                          <ExternalLink className="w-3 h-3 opacity-50 group-hover:opacity-100" />
                        </a>
                      </td>

                      {/* Lab PDF Link */}
                      <td className="py-4 px-4">
                        <a
                          href={s.labPdf.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-900 hover:bg-cyan-500/10 border border-slate-200 dark:border-slate-800 hover:border-cyan-500/40 text-slate-700 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-300 font-mono text-xs transition-all group"
                          title="Download Guided Lab Instructions"
                        >
                          <Download className="w-3.5 h-3.5 text-rose-500" />
                          <span>Lab Guide (.pdf)</span>
                          <ExternalLink className="w-3 h-3 opacity-50 group-hover:opacity-100" />
                        </a>
                      </td>

                      {/* Notebook & Colab Direct Launcher */}
                      <td className="py-4 px-4 text-right">
                        <div className="flex items-center justify-end gap-2">
                          <a
                            href={s.notebook.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-900 hover:bg-slate-200 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 font-mono text-xs transition-all"
                            title="View source .ipynb on GitHub"
                          >
                            <Code2 className="w-3.5 h-3.5 text-cyan-500" />
                            <span>.ipynb</span>
                          </a>

                          <a
                            href={s.notebook.colab}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-gradient-to-r from-amber-500/15 to-orange-500/20 hover:from-amber-500/25 hover:to-orange-500/30 text-amber-700 dark:text-amber-300 border border-amber-500/30 font-semibold font-mono text-xs transition-all shadow-sm group"
                            title="Run in Google Colab (Zero Setup)"
                          >
                            <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
                            <span>Open in Colab</span>
                            <ExternalLink className="w-3 h-3 opacity-60 group-hover:opacity-100" />
                          </a>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Mobile / Tablet Card View (stacked responsive cards) */}
          <div className="lg:hidden space-y-4">
            {filteredSessions.map((s) => (
              <div 
                key={s.session}
                className="glass-card rounded-2xl p-5 border border-slate-200 dark:border-slate-800 space-y-4"
              >
                {/* Header: Session Number & Part */}
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-cyan-500/15 text-cyan-600 dark:text-cyan-400 font-mono text-xs font-bold">
                    SESSION {String(s.session).padStart(2, '0')}
                  </span>
                  <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400">
                    {s.partTitle}
                  </span>
                </div>

                {/* Topic & Description */}
                <div>
                  <h3 className="font-bold text-slate-900 dark:text-white text-base mb-1">
                    {s.topic}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    {s.description}
                  </p>
                </div>

                {/* Action Links Grid for Mobile */}
                <div className="grid grid-cols-2 gap-2 pt-2 border-t border-slate-200/80 dark:border-slate-800/80 text-xs font-mono">
                  <a
                    href={s.slides.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1.5 py-2 px-2.5 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:text-cyan-500 transition-colors"
                  >
                    <FileText className="w-3.5 h-3.5 text-amber-500" />
                    <span>Slides (.pptx)</span>
                  </a>

                  <a
                    href={s.labPdf.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1.5 py-2 px-2.5 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:text-cyan-500 transition-colors"
                  >
                    <Download className="w-3.5 h-3.5 text-rose-500" />
                    <span>Lab Guide (.pdf)</span>
                  </a>

                  <a
                    href={s.notebook.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1.5 py-2 px-2.5 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:text-cyan-500 transition-colors"
                  >
                    <Code2 className="w-3.5 h-3.5 text-cyan-500" />
                    <span>Notebook (.ipynb)</span>
                  </a>

                  <a
                    href={s.notebook.colab}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1.5 py-2 px-2.5 rounded-xl bg-amber-500/15 text-amber-700 dark:text-amber-300 border border-amber-500/30 font-semibold"
                  >
                    <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
                    <span>Open in Colab</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 3. Getting Started / Quick Start Terminal Block */}
        <div className="glass-card rounded-2xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
            <div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                Getting Started Locally or via Cloud
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Clone the full repository or execute directly inside Google Colab:
              </p>
            </div>
            <button
              onClick={handleCopyClone}
              type="button"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-cyan-500/15 text-cyan-700 dark:text-cyan-300 border border-cyan-500/40 text-xs font-mono font-medium hover:bg-cyan-500/25 transition-all cursor-pointer self-start sm:self-auto"
            >
              {copiedCode ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copiedCode ? 'Copied to Clipboard' : 'Copy Git Clone'}</span>
            </button>
          </div>

          <div className="p-4 rounded-xl bg-slate-900 text-slate-100 font-mono text-xs overflow-x-auto border border-slate-800 shadow-inner">
            <span className="text-slate-500 select-none"># 1. Clone the repository</span>
            <br />
            <span className="text-cyan-400">git clone</span> {course.githubUrl}.git
            <br /><br />
            <span className="text-slate-500 select-none"># 2. Open any session notebook in Google Colab directly without local GPU or setup</span>
            <br />
            <span className="text-slate-400">Each notebook installs its own dependencies in cell 1 (Sentence-Transformers, ChromaDB, Qwen 2.5).</span>
          </div>
        </div>

      </div>
    </div>
  );
}
