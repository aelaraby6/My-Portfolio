import React, { useState } from 'react';
import { Send, ArrowLeft, CheckCircle2, MessageSquare, Globe, Sparkles } from 'lucide-react';
import { GithubIcon, LinkedinIcon, LeetCodeIcon, CodeforcesIcon } from '../components/Icons';
import profileData from '../data/profile.json';

export default function Contact({ onBackToHome }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoUrl = `mailto:abdelrahman.elaraby777@gmail.com?subject=${encodeURIComponent(formData.subject || 'Portfolio Inquiry from ' + formData.name)}&body=${encodeURIComponent(`From: ${formData.name} (${formData.email})\n\nMessage:\n${formData.message}`)}`;
    window.location.href = mailtoUrl;
    setSubmitted(true);
  };

  return (
    <div className="py-12 sm:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
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
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 dark:bg-cyan-950/40 border border-cyan-500/20 dark:border-cyan-500/30 text-cyan-700 dark:text-cyan-300 text-xs font-mono font-medium mb-4 backdrop-blur-sm">
            <MessageSquare className="w-4 h-4 text-cyan-500" />
            <span>COMMUNICATION CHANNEL</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-3">
            Get in <span className="cosmos-text-gradient">Touch</span>
          </h1>

          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed">
            Have a question, proposal, or want to discuss systems architecture and engineering opportunities? Drop a message below.
          </p>
        </div>

        {/* Transmission Form Card */}
        <div className="glass-card p-6 sm:p-10 rounded-3xl border border-slate-200/90 dark:border-slate-800/90 relative overflow-hidden shadow-xl">
          
          {/* Top Subtle Gradient */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />

          {submitted && (
            <div className="mb-6 p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-700 dark:text-emerald-300 flex items-center gap-3 text-xs font-mono animate-in fade-in duration-300">
              <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
              <span>Email client opened successfully! Transmit your dispatch there.</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              
              {/* Name Field */}
              <div>
                <label className="block text-xs font-mono uppercase tracking-widest text-slate-500 dark:text-slate-400 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Alex Turing"
                  className="w-full px-4 py-3 rounded-xl bg-slate-100/80 dark:bg-[#070d20]/80 border border-slate-300/80 dark:border-slate-800 text-slate-900 dark:text-white text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all font-mono placeholder:text-slate-400 dark:placeholder:text-slate-600"
                />
              </div>

              {/* Email Field */}
              <div>
                <label className="block text-xs font-mono uppercase tracking-widest text-slate-500 dark:text-slate-400 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="alex@domain.com"
                  className="w-full px-4 py-3 rounded-xl bg-slate-100/80 dark:bg-[#070d20]/80 border border-slate-300/80 dark:border-slate-800 text-slate-900 dark:text-white text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all font-mono placeholder:text-slate-400 dark:placeholder:text-slate-600"
                />
              </div>
            </div>

            {/* Subject Field */}
            <div>
              <label className="block text-xs font-mono uppercase tracking-widest text-slate-500 dark:text-slate-400 mb-2">
                Subject
              </label>
              <input
                type="text"
                required
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                placeholder="Backend Engineering Role / Project Collaboration"
                className="w-full px-4 py-3 rounded-xl bg-slate-100/80 dark:bg-[#070d20]/80 border border-slate-300/80 dark:border-slate-800 text-slate-900 dark:text-white text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all font-mono placeholder:text-slate-400 dark:placeholder:text-slate-600"
              />
            </div>

            {/* Message Field */}
            <div>
              <label className="block text-xs font-mono uppercase tracking-widest text-slate-500 dark:text-slate-400 mb-2">
                Message
              </label>
              <textarea
                rows={5}
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Write your message here..."
                className="w-full px-4 py-3 rounded-xl bg-slate-100/80 dark:bg-[#070d20]/80 border border-slate-300/80 dark:border-slate-800 text-slate-900 dark:text-white text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all font-mono resize-none placeholder:text-slate-400 dark:placeholder:text-slate-600"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-cyan-500 via-indigo-500 to-cyan-600 hover:from-cyan-400 hover:to-indigo-500 text-white font-mono font-semibold text-sm shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/30 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer group hover:scale-[1.01]"
            >
              <span>SEND MESSAGE</span>
              <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </form>

        </div>

      </div>
    </div>
  );
}
