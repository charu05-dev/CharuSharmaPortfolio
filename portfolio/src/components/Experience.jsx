import React from 'react';
import { experience, personalInfo } from '../data/portfolioData';
import { CheckCircle2, Calendar, MapPin, Briefcase, Award, ArrowRight } from 'lucide-react';
import { Sticker } from './Sticker';

export const Experience = () => {
  const exp = experience[0];

  return (
    <section id="experience" className="relative py-24 px-4 md:px-8 bg-sky border-b-[2px] border-carbon overflow-hidden">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <div className="inline-block bg-lavender text-carbon px-3.5 py-1 rounded-pill border-[1.5px] border-carbon shadow-[2px_2px_0px_#000000] text-xs font-display font-black tracking-wider uppercase mb-3">
              CAREER TIMELINE
            </div>
            <h2 className="font-display font-black text-carbon text-5xl sm:text-6xl md:text-7xl uppercase leading-[0.85] tracking-tight">
              WHERE I'VE BEEN <br className="hidden sm:inline" />BUILDING
            </h2>
          </div>
          <div className="max-w-md">
            <p className="font-body text-carbon/80 font-semibold text-base">
              Hands-on enterprise full-stack development, delivering robust backend micro-modules and high-speed user interfaces.
            </p>
          </div>
        </div>

        {/* EDITORIAL VIP TECH PASS / TIMELINE CARD */}
        <div className="bg-paper rounded-card-lg border-[3px] border-carbon p-6 sm:p-12 shadow-[8px_8px_0px_#000000] relative">
          
          {/* Top Bar with Stamp and Period */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b-[2px] border-carbon">
            <div className="flex items-center gap-3">
              <span className="w-10 h-10 rounded-full bg-mint border-[1.5px] border-carbon flex items-center justify-center font-display font-black text-sm">
                TAP
              </span>
              <div>
                <h3 className="font-display font-black text-2xl sm:text-3xl text-carbon leading-none">
                  {exp.company}
                </h3>
                <span className="font-display font-bold text-sm text-carbon/70 uppercase">
                  FULL-STACK DEVELOPMENT TRACK
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2 bg-sunburst px-4 py-2 rounded-pill border-[1.5px] border-carbon font-mono font-bold text-xs sm:text-sm text-carbon shadow-[2px_2px_0px_#000000]">
              <Calendar className="w-4 h-4" />
              <span>{exp.period}</span>
            </div>
          </div>

          {/* Role Header */}
          <div className="py-6">
            <div className="inline-block px-3 py-1 bg-carbon text-paper rounded-pill font-display font-black text-xs uppercase mb-3">
              VERIFIED ROLE
            </div>
            <h4 className="font-display font-extrabold text-3xl sm:text-4xl text-carbon uppercase tracking-tight">
              {exp.role}
            </h4>
          </div>

          {/* Responsibilities list directly from resume */}
          <div className="space-y-4 mb-8">
            {exp.responsibilities.map((resp, idx) => (
              <div 
                key={idx} 
                className="flex items-start gap-4 p-4 rounded-card bg-mist border-[1.5px] border-carbon shadow-[3px_3px_0px_#000000]"
              >
                <span className="w-7 h-7 rounded-full bg-sunburst border border-carbon flex items-center justify-center font-display font-black text-xs flex-shrink-0 mt-0.5">
                  0{idx + 1}
                </span>
                <p className="font-body text-sm sm:text-base font-semibold text-carbon/90 leading-relaxed">
                  {resp}
                </p>
              </div>
            ))}
          </div>

          {/* Core Technologies Mastered */}
          <div className="pt-6 border-t-[2px] border-carbon">
            <div className="text-xs font-display font-black uppercase text-carbon/70 tracking-wider mb-3">
              TECHNOLOGIES DEPLOYED DURING INTERNSHIP
            </div>
            <div className="flex flex-wrap gap-2.5">
              {exp.skillsLearned.map((skill, i) => (
                <Sticker 
                  key={skill} 
                  name={skill} 
                  logo={skill.toLowerCase().replace(' ', '')} 
                  color={i % 3 === 0 ? "mint" : i % 3 === 1 ? "sunburst" : "lavender"} 
                  tilt={i % 2 === 0 ? "-2deg" : "2deg"} 
                  size="sm" 
                />
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
