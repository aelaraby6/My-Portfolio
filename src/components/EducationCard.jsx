import React, { useState } from 'react';
import { 
  GraduationCap, 
  ExternalLink, 
  X 
} from 'lucide-react';
import { GithubIcon } from './Icons';

export default function EducationCard({ item }) {
  const [activeImage, setActiveImage] = useState(null);

  return (
    <div className="glass-card rounded-2xl p-6 sm:p-8 border border-slate-200/90 dark:border-slate-800/90 hover:border-cyan-500/40 relative overflow-hidden group">
      
      {/* Subtle top accent gradient */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 via-indigo-500 to-purple-500 opacity-80" />

      {/* Header section: Logo, Degree & Institution */}
      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-6">
        <div className="flex items-start gap-4">
          {/* Institution Logo */}
          <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-center shrink-0 shadow-sm overflow-hidden group-hover:scale-105 transition-transform">
            {item.icon ? (
              <img 
                src={item.icon} 
                alt={item.institution} 
                className="w-full h-full object-cover"
                loading="lazy"
                decoding="async"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.parentElement.innerHTML = '<div class="text-cyan-500 font-mono text-xl font-bold">🎓</div>';
                }}
              />
            ) : (
              <GraduationCap className="w-8 h-8 text-cyan-500" />
            )}
          </div>

          <div>
            <div className="flex items-center gap-2 flex-wrap mb-1">
              <span className="text-xs font-mono font-semibold text-cyan-600 dark:text-cyan-400">
                {item.institution}
              </span>
              <span className="w-1 h-1 rounded-full bg-slate-400" />
              <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400">
                {item.status}
              </span>
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors">
              {item.degree}
            </h3>

            {item.faculty && (
              <div className="text-sm font-medium text-slate-600 dark:text-slate-300 mt-0.5">
                {item.faculty}
              </div>
            )}
          </div>
        </div>

        {/* Academic Badges: GPA */}
        {item.gpa && (
          <div className="flex items-start sm:items-end shrink-0">
            <div className="px-3 py-1.5 rounded-lg bg-cyan-500/10 dark:bg-cyan-950/50 border border-cyan-500/30 text-cyan-700 dark:text-cyan-300 text-xs font-mono font-bold tracking-tight">
              GPA: {item.gpa}
            </div>
          </div>
        )}
      </div>

      {/* Meta Bar: Dates & Location */}
      <div className="flex flex-wrap items-center gap-2 py-2 px-3.5 rounded-xl bg-slate-100/70 dark:bg-slate-900/50 border border-slate-200/60 dark:border-slate-800/70 text-xs font-mono text-slate-600 dark:text-slate-400 mb-6">
        <span>{item.date}</span>
        {item.location && (
          <>
            <span className="opacity-40">•</span>
            <span>{item.location}</span>
          </>
        )}
      </div>

      {/* Description */}
      {item.description && (
        <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed mb-6 font-normal">
          {item.description}
        </p>
      )}

      {/* Key Courses with Grades */}
      {item.courses && item.courses.length > 0 && (
        <div className="mb-6">
          <div className="text-xs font-mono uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-3">
            Key Academic Coursework &amp; Grades
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
            {item.courses.map((c, idx) => (
              <div 
                key={idx}
                className="flex items-center justify-between p-2.5 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800/80"
              >
                <span className="text-xs font-medium text-slate-800 dark:text-slate-200 truncate pr-1">
                  {c.name}
                </span>
                <span className="text-xs font-mono font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded">
                  {c.grade}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Graduation Project Link (if available) */}
      {item.project && (
        <div className="mb-6">
          <a
            href={item.project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 dark:bg-slate-800 dark:hover:bg-slate-700 text-white text-xs sm:text-sm font-medium transition-all group/btn shadow-sm"
          >
            <GithubIcon className="w-4 h-4" />
            <span>{item.project.name}</span>
            <ExternalLink className="w-3.5 h-3.5 opacity-70 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
          </a>
        </div>
      )}

      {/* Ceremony / Distinction Image Gallery */}
      {item.images && item.images.length > 0 && (
        <div>
          <div className="text-xs font-mono uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-3">
            Ceremony &amp; Distinction Gallery
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {item.images.map((img, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setActiveImage(img)}
                className="relative rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 group/img aspect-video bg-slate-950 cursor-pointer focus-visible:ring-2 focus-visible:ring-cyan-400"
              >
                <img 
                  src={img} 
                  alt={`${item.institution} media ${idx + 1}`} 
                  className="w-full h-full object-cover group-hover/img:scale-105 transition-transform duration-300"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-slate-950/30 group-hover/img:bg-transparent transition-colors flex items-center justify-center">
                  <span className="opacity-0 group-hover/img:opacity-100 text-[10px] font-mono text-white bg-slate-900/80 px-2 py-0.5 rounded backdrop-blur-sm transition-opacity">
                    Click to preview
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Fullscreen Image Preview Modal */}
      {activeImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={() => setActiveImage(null)}
        >
          <div className="relative max-w-4xl max-h-[90vh] flex flex-col items-center">
            <button
              onClick={() => setActiveImage(null)}
              className="absolute -top-10 right-0 p-2 text-white/80 hover:text-white bg-slate-800/80 rounded-full cursor-pointer"
              aria-label="Close image preview"
            >
              <X className="w-5 h-5" />
            </button>
            <img 
              src={activeImage} 
              alt="Enlarged preview" 
              className="max-w-full max-h-[85vh] rounded-2xl object-contain border border-slate-700 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}

    </div>
  );
}
