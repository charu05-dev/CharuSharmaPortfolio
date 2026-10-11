import React from 'react';
import { achievements, education } from '../data/portfolioData';
import { Trophy, GraduationCap, MapPin, Award, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';

export const EducationAchievement = () => {
  const ach = achievements[0];

  const triggerConfetti = () => {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#ffd731', '#4da2ff', '#55db9c', '#fb4903', '#e9ccff', '#000000']
    });
  };

  return (
    <section id="education" className="relative py-24 px-4 md:px-8 bg-paper border-b-[2px] border-carbon overflow-hidden">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <div className="inline-block bg-sunburst text-carbon px-3.5 py-1 rounded-pill border-[1.5px] border-carbon shadow-[2px_2px_0px_#000000] text-xs font-display font-black tracking-wider uppercase mb-3">
              RECOGNITION & CREDENTIALS
            </div>
            <h2 className="font-display font-black text-carbon text-5xl sm:text-6xl md:text-7xl uppercase leading-[0.85] tracking-tight">
              ONE FOR THE <br className="hidden sm:inline" />TROPHY SHELF
            </h2>
          </div>
          <div className="max-w-md">
            <p className="font-body text-carbon/80 font-semibold text-base">
              Verified accolades in technical presentation and formal academic credentials in Information Technology.
            </p>
          </div>
        </div>

        {/* 2-COLUMN GRID: ACHIEVEMENT ON LEFT, EDUCATION ON RIGHT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* LEFT: ACHIEVEMENT CARD */}
          <div className="lg:col-span-6 bg-sunburst rounded-card-lg border-[3px] border-carbon p-6 sm:p-10 shadow-[8px_8px_0px_#000000] flex flex-col justify-between relative overflow-hidden">
            <div>
              {/* Badge */}
              <div className="flex items-center justify-between gap-2 mb-6">
                <span className="px-3.5 py-1 bg-carbon text-paper font-display font-black text-xs uppercase rounded-pill">
                  FEATURED RECOGNITION
                </span>
                <span className="text-3xl">🏆</span>
              </div>

              {/* Big Award Typography */}
              <div className="font-display font-black text-5xl sm:text-6xl text-carbon uppercase leading-none tracking-tight mb-3">
                {ach.title}
              </div>

              <div className="font-display font-extrabold text-xl sm:text-2xl text-carbon/90 uppercase tracking-wide mb-6">
                {ach.event}
              </div>

              <p className="font-body text-base font-semibold text-carbon/90 leading-relaxed bg-paper/90 p-4 rounded-card border-[1.5px] border-carbon shadow-[3px_3px_0px_#000000]">
                {ach.description}
              </p>
            </div>

            {/* Confetti Interactive Button */}
            <div className="mt-8 pt-6 border-t-[2px] border-carbon flex items-center justify-between">
              <span className="text-xs font-mono font-bold uppercase text-carbon/75">
                VERIFIED TECHNICAL COMPETITION
              </span>
              <button
                onClick={triggerConfetti}
                className="px-5 py-2.5 bg-carbon text-paper rounded-pill font-display font-black text-xs uppercase tracking-wider hover:bg-carbon/90 shadow-[3px_3px_0px_#000000] hover:-translate-y-0.5 active:translate-y-0.5 transition-all flex items-center gap-1.5"
              >
                <Sparkles className="w-3.5 h-3.5 text-sunburst" />
                <span>CELEBRATE 🏆</span>
              </button>
            </div>
          </div>

          {/* RIGHT: EDUCATION CARDS */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            
            {/* College Card */}
            <div className="bg-sky rounded-card-lg border-[2.5px] border-carbon p-6 sm:p-8 shadow-[6px_6px_0px_#000000] flex-1">
              <div className="flex items-center justify-between gap-2 mb-4">
                <span className="px-3 py-1 bg-paper text-carbon border border-carbon font-display font-black text-xs uppercase rounded-pill">
                  BACHELOR OF ENGINEERING
                </span>
                <span className="px-3 py-1 bg-mint text-carbon border border-carbon font-display font-black text-xs rounded-pill">
                  {education[0].score}
                </span>
              </div>

              <h3 className="font-display font-black text-2xl sm:text-3xl text-carbon uppercase tracking-tight mb-1">
                {education[0].institution}
              </h3>

              <div className="font-body text-base font-bold text-carbon/80 mb-4">
                {education[0].degree}
              </div>

              <div className="flex flex-wrap items-center gap-4 text-xs font-mono font-bold text-carbon/75 pt-3 border-t border-carbon/20">
                <span className="flex items-center gap-1">
                  📅 {education[0].period}
                </span>
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5" /> {education[0].location}
                </span>
              </div>
            </div>

            {/* School Card */}
            <div className="bg-mist rounded-card-lg border-[2.5px] border-carbon p-6 sm:p-8 shadow-[6px_6px_0px_#000000] flex-1">
              <div className="flex items-center justify-between gap-2 mb-4">
                <span className="px-3 py-1 bg-paper text-carbon border border-carbon font-display font-black text-xs uppercase rounded-pill">
                  HIGHER SECONDARY
                </span>
                <span className="px-3 py-1 bg-lavender text-carbon border border-carbon font-display font-black text-xs rounded-pill">
                  {education[1].score}
                </span>
              </div>

              <h3 className="font-display font-black text-2xl sm:text-3xl text-carbon uppercase tracking-tight mb-1">
                {education[1].institution}
              </h3>

              <div className="font-body text-base font-bold text-carbon/80 mb-4">
                {education[1].degree}
              </div>

              <div className="flex flex-wrap items-center gap-4 text-xs font-mono font-bold text-carbon/75 pt-3 border-t border-carbon/20">
                <span className="flex items-center gap-1">
                  📅 {education[1].period}
                </span>
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5" /> {education[1].location}
                </span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
