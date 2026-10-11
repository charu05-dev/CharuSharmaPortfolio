import React, { useEffect } from 'react';
import { X, ExternalLink, CheckCircle2, Server, Database, Shield, Layout, ArrowRight } from 'lucide-react';
import { TechLogo } from './TechLogos';
import { Sticker } from './Sticker';
import { personalInfo } from '../data/portfolioData';

export const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-carbon/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-paper rounded-card-lg border-[3px] border-carbon p-6 sm:p-10 shadow-[8px_8px_0px_#000000]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-paper border-[1.5px] border-carbon hover:bg-mist shadow-[2px_2px_0px_#000000] active:translate-y-0.5 transition-all"
          aria-label="Close Project Modal"
        >
          <X className="w-5 h-5 text-carbon" />
        </button>

        {/* Header Badges */}
        <div className="flex flex-wrap items-center gap-2 mb-4">
          <span className="px-3 py-1 bg-carbon text-paper font-display font-black text-xs uppercase rounded-pill">
            PROJECT {project.number}
          </span>
          <span className="px-3 py-1 bg-sunburst text-carbon border border-carbon font-display font-black text-xs uppercase rounded-pill">
            {project.badge}
          </span>
          <span className="px-3 py-1 bg-mist text-carbon border border-carbon font-mono font-bold text-xs rounded-pill">
            {project.date}
          </span>
        </div>

        {/* Project Title */}
        <h2 className="font-display font-black text-4xl sm:text-5xl text-carbon uppercase tracking-tight leading-none mb-2">
          {project.title}
        </h2>
        <div className="text-sm sm:text-base font-bold text-carbon/75 uppercase tracking-wide mb-6">
          {project.subtitle}
        </div>

        {/* Technology Stickers Row */}
        <div className="flex flex-wrap gap-2 mb-8 p-3 bg-mist rounded-card border border-carbon">
          {project.technologies.map((tech) => (
            <Sticker key={tech} name={tech} logo={tech.toLowerCase().replace(' ', '')} size="sm" tilt="0deg" interactive={false} />
          ))}
        </div>

        {/* Description Section */}
        <div className="mb-8">
          <h3 className="font-display font-black text-xl uppercase text-carbon mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-mint"></span>
            PROJECT SCOPE & OBJECTIVE
          </h3>
          <p className="font-body text-base font-medium text-carbon/90 leading-relaxed bg-sky/30 p-4 rounded-card border border-carbon">
            {project.description}
          </p>
        </div>

        {/* Key Features (Directly from resume) */}
        <div className="mb-8">
          <h3 className="font-display font-black text-xl uppercase text-carbon mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-sunburst"></span>
            KEY ENGINEERING HIGHLIGHTS
          </h3>
          <div className="space-y-3">
            {project.details.map((detail, idx) => (
              <div key={idx} className="flex items-start gap-3 p-3 bg-paper rounded-card border-[1.5px] border-carbon shadow-[2px_2px_0px_#000000]">
                <CheckCircle2 className="w-5 h-5 text-mint flex-shrink-0 mt-0.5" />
                <p className="font-body text-sm font-semibold text-carbon/90 leading-normal">
                  {detail}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Architectural Breakdown Grid */}
        <div className="mb-8">
          <h3 className="font-display font-black text-xl uppercase text-carbon mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-electric"></span>
            FULL-STACK ARCHITECTURAL BREAKDOWN
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-mist rounded-card border border-carbon">
              <div className="flex items-center gap-2 font-display font-black text-sm uppercase text-carbon mb-1.5">
                <Layout className="w-4 h-4 text-electric" />
                FRONTEND (REACT)
              </div>
              <p className="text-xs font-semibold text-carbon/80 leading-relaxed">
                {project.architecture.frontend}
              </p>
            </div>

            <div className="p-4 bg-mist rounded-card border border-carbon">
              <div className="flex items-center gap-2 font-display font-black text-sm uppercase text-carbon mb-1.5">
                <Server className="w-4 h-4 text-mint" />
                BACKEND (SPRING BOOT)
              </div>
              <p className="text-xs font-semibold text-carbon/80 leading-relaxed">
                {project.architecture.backend}
              </p>
            </div>

            <div className="p-4 bg-mist rounded-card border border-carbon">
              <div className="flex items-center gap-2 font-display font-black text-sm uppercase text-carbon mb-1.5">
                <Shield className="w-4 h-4 text-ember" />
                SECURITY (JWT AUTH)
              </div>
              <p className="text-xs font-semibold text-carbon/80 leading-relaxed">
                {project.architecture.security}
              </p>
            </div>

            <div className="p-4 bg-mist rounded-card border border-carbon">
              <div className="flex items-center gap-2 font-display font-black text-sm uppercase text-carbon mb-1.5">
                <Database className="w-4 h-4 text-lavender" />
                DATABASE (SQL / MYSQL)
              </div>
              <p className="text-xs font-semibold text-carbon/80 leading-relaxed">
                {project.architecture.database}
              </p>
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="pt-6 border-t-[2px] border-carbon flex flex-wrap items-center justify-between gap-4">
          <a
            href={personalInfo.contact.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-carbon text-paper rounded-pill font-display font-black text-xs uppercase tracking-wider shadow-[3px_3px_0px_#000000] hover:bg-carbon/90 hover:-translate-y-0.5 transition-all"
          >
            <TechLogo name="github" className="w-4 h-4" />
            <span>EXPLORE CODE ON GITHUB</span>
          </a>

          <button
            onClick={onClose}
            className="px-6 py-3 bg-mist text-carbon rounded-pill border-[1.5px] border-carbon font-display font-bold text-xs uppercase tracking-wider hover:bg-concrete transition-colors"
          >
            CLOSE WINDOW
          </button>
        </div>
      </div>
    </div>
  );
};
