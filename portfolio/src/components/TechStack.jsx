import React, { useState } from 'react';
import { techStack } from '../data/portfolioData';
import { Sticker } from './Sticker';
import { Layers, Terminal, Sparkles, Filter } from 'lucide-react';

export const TechStack = () => {
  const [selectedCategory, setSelectedCategory] = useState("ALL");

  const categories = ["ALL", "LANGUAGE", "FRONTEND", "BACKEND", "DATABASE", "CORE"];

  const filteredSkills = selectedCategory === "ALL" 
    ? techStack 
    : techStack.filter(s => s.category === selectedCategory);

  return (
    <section id="skills" className="relative py-24 px-4 md:px-8 bg-mist border-b-[2px] border-carbon overflow-hidden">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-block bg-sunburst px-3.5 py-1 rounded-pill border-[1.5px] border-carbon shadow-[2px_2px_0px_#000000] text-xs font-display font-black tracking-wider uppercase mb-3">
              TECHNOLOGY INVENTORY
            </div>
            <h2 className="font-display font-black text-carbon text-5xl sm:text-6xl md:text-7xl uppercase leading-[0.85] tracking-tight">
              I SPEAK <br className="hidden sm:inline" />CODE
            </h2>
          </div>
          <div className="max-w-md">
            <p className="font-body text-carbon/80 font-semibold text-base">
              Verified skills and technologies directly from my technical toolkit. Hover over any sticker to inspect its role.
            </p>
          </div>
        </div>

        {/* Category Pill Filters */}
        <div className="flex flex-wrap items-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`
                px-4 py-2 rounded-pill font-display font-black text-xs md:text-sm tracking-wider uppercase
                border-[1.5px] border-carbon transition-all duration-150
                ${selectedCategory === cat 
                  ? 'bg-carbon text-paper shadow-[3px_3px_0px_#000000] -translate-y-0.5' 
                  : 'bg-paper text-carbon shadow-[2px_2px_0px_#000000] hover:bg-sky hover:-translate-y-0.5'
                }
              `}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* STICKER COLLAGE BOARD */}
        <div className="bg-paper rounded-card-lg border-[2px] border-carbon p-6 sm:p-10 shadow-[6px_6px_0px_#000000] min-h-[360px]">
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 py-6">
            {filteredSkills.map((tech) => (
              <Sticker
                key={tech.name}
                name={tech.name}
                role={tech.role}
                logo={tech.logo}
                color={tech.color}
                tilt={tech.rotation}
                size="lg"
                interactive={true}
                badge={tech.category}
              />
            ))}
          </div>

          {/* Quick Legend Footer */}
          <div className="mt-8 pt-6 border-t border-carbon/20 flex flex-wrap items-center justify-between gap-4 text-xs font-mono font-bold text-carbon/75">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-sunburst border border-carbon"></span>
              <span>Language</span>
              <span className="w-2.5 h-2.5 rounded-full bg-electric border border-carbon ml-2"></span>
              <span>Frontend</span>
              <span className="w-2.5 h-2.5 rounded-full bg-mint border border-carbon ml-2"></span>
              <span>Backend</span>
              <span className="w-2.5 h-2.5 rounded-full bg-lavender border border-carbon ml-2"></span>
              <span>Database</span>
            </div>
            <div>
              <span>Total Technologies: {filteredSkills.length}</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
