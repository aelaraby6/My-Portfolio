import React, { useState } from 'react';
import certificatesData from '../data/certifications.json';
import { ExternalLink, X } from 'lucide-react';

export default function CertificatesSection() {
  const [activeImage, setActiveImage] = useState(null);

  return (
    <div className="mt-16 pt-12 border-t border-slate-200/80 dark:border-slate-800/80">
      
      {/* Section Header */}
      <div className="flex flex-col items-start mb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 dark:bg-cyan-950/40 border border-cyan-500/20 dark:border-cyan-500/30 text-cyan-600 dark:text-cyan-400 text-xs font-mono font-medium mb-3">
          <span>CREDENTIALS &amp; CERTIFICATIONS</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
          Certificates &amp; Specializations
        </h2>
        <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base mt-1">
          Validated problem-solving benchmarks, hackathons, and technical coursework.
        </p>
      </div>

      {/* Certificates Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {certificatesData.map((cert) => (
          <div
            key={cert.id}
            className="glass-card rounded-2xl p-5 border border-slate-200/80 dark:border-slate-800/80 hover:border-cyan-500/40 flex flex-col justify-between group transition-all duration-300 relative overflow-hidden"
          >
            {/* Top Tag Header (Clean without emojis) */}
            <div className="flex items-center justify-between gap-2 mb-4">
              <span className="text-xs font-mono font-semibold text-slate-500 dark:text-slate-400">
                {cert.issuer}
              </span>
              <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-cyan-500/10 dark:bg-cyan-950/60 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20 font-semibold uppercase tracking-wider">
                {cert.tag || 'CERTIFICATE'}
              </span>
            </div>

            {/* Certificate Preview Image */}
            {cert.image && (
              <div 
                className="relative w-full h-36 rounded-xl overflow-hidden bg-slate-950 mb-4 border border-slate-200/60 dark:border-slate-800 cursor-pointer group/img"
                onClick={() => setActiveImage(cert.image)}
              >
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-cover group-hover/img:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-slate-950/20 group-hover/img:bg-transparent transition-colors flex items-center justify-center">
                  <span className="opacity-0 group-hover/img:opacity-100 text-[10px] font-mono text-white bg-slate-900/80 px-2 py-0.5 rounded backdrop-blur-sm transition-opacity">
                    Click to enlarge
                  </span>
                </div>
              </div>
            )}

            {/* Title */}
            <div className="flex-grow">
              <h3 className="font-bold text-base text-slate-900 dark:text-slate-100 mb-1 group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors">
                {cert.title}
              </h3>
            </div>

            {/* Footer with Date & Verified Action Link */}
            <div className="pt-3 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between mt-3">
              <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400">
                {cert.date}
              </span>

              {cert.link && (
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-mono font-medium text-cyan-600 dark:text-cyan-400 hover:text-cyan-500 dark:hover:text-cyan-300 group/link"
                >
                  <span>Verify</span>
                  <ExternalLink className="w-3 h-3 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox for certificate previews */}
      {activeImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={() => setActiveImage(null)}
        >
          <div className="relative max-w-4xl max-h-[90vh] flex flex-col items-center">
            <button
              onClick={() => setActiveImage(null)}
              className="absolute -top-10 right-0 p-2 text-white/80 hover:text-white bg-slate-800/80 rounded-full cursor-pointer"
              aria-label="Close preview"
            >
              <X className="w-5 h-5" />
            </button>
            <img 
              src={activeImage} 
              alt="Enlarged certificate" 
              className="max-w-full max-h-[85vh] rounded-2xl object-contain border border-slate-700 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}

    </div>
  );
}
