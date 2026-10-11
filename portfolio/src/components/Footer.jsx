import React from 'react';
import { ArrowUp, Mail } from 'lucide-react';
import { TechLogo } from './TechLogos';
import { personalInfo } from '../data/portfolioData';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-carbon text-paper py-16 px-4 md:px-8 border-t-[3px] border-carbon">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-12 border-b border-paper/20 gap-8">
          <div>
            <h2 className="font-display font-black text-4xl sm:text-6xl text-paper uppercase tracking-tight leading-none mb-3">
              CHARU SHARMA
            </h2>
            <p className="font-display font-bold text-sm sm:text-base text-sunburst uppercase tracking-wider">
              JAVA FULL-STACK DEVELOPER
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href={personalInfo.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-paper/10 hover:bg-paper/20 text-paper border border-paper/30 transition-colors"
              aria-label="GitHub Profile"
            >
              <TechLogo name="github" className="w-5 h-5" />
            </a>

            <a
              href={personalInfo.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-paper/10 hover:bg-paper/20 text-paper border border-paper/30 transition-colors"
              aria-label="LinkedIn Profile"
            >
              <TechLogo name="linkedin" className="w-5 h-5" />
            </a>

            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 px-5 py-3 rounded-pill bg-sunburst text-carbon font-display font-black text-xs uppercase tracking-wider hover:bg-sunburst/90 transition-all"
            >
              <span>BACK TO TOP</span>
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Bottom credits */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono font-medium text-paper/60">
          <p>
            BUILT WITH JAVA, REACT & A LOT OF CURIOSITY.
          </p>
          <p>
            © 2026 CHARU SHARMA • ALL RIGHTS RESERVED
          </p>
        </div>
      </div>
    </footer>
  );
};
