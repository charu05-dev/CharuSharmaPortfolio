import React, { useState } from 'react';
import { ArrowRight, CheckCircle, Database, Server, Layers, Cpu } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { Sticker } from './Sticker';
import { TechLogo } from './TechLogos';

export const About = () => {
  const [activeStep, setActiveStep] = useState(0);

  const pipelineSteps = [
    {
      title: "JAVA",
      subtitle: "Core Engine",
      color: "sunburst",
      logo: "java",
      desc: "Robust Object-Oriented foundation with clean logic, data structures, and multithreading."
    },
    {
      title: "SPRING BOOT",
      subtitle: "Backend Services",
      color: "mint",
      logo: "spring",
      desc: "REST APIs, secure JWT authentication filters, Hibernate ORM, and MVC architecture."
    },
    {
      title: "REACT",
      subtitle: "Frontend Interface",
      color: "electric",
      logo: "react",
      desc: "Responsive component hierarchy, state management, seamless HTTP API integration, and clean UX."
    },
    {
      title: "MYSQL",
      subtitle: "Relational Persistence",
      color: "lavender",
      logo: "mysql",
      desc: "Structured schemas, relational CRUD operations, transaction integrity, and query optimization."
    }
  ];

  const activeBgMap = {
    sunburst: "bg-[#ffd731]",
    mint: "bg-[#55db9c]",
    electric: "bg-[#4da2ff]",
    lavender: "bg-[#e9ccff]"
  };

  return (
    <section id="about" className="relative py-24 px-4 md:px-8 bg-paper border-b-[2px] border-carbon overflow-hidden">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <div className="inline-block bg-mint px-3.5 py-1 rounded-pill border-[1.5px] border-carbon shadow-[2px_2px_0px_#000000] text-xs font-display font-black tracking-wider uppercase mb-3">
              ABOUT CHARU
            </div>
            <h2 className="font-display font-black text-carbon text-5xl sm:text-6xl md:text-7xl uppercase leading-[0.85] tracking-tight">
              WHO IS <br className="hidden sm:inline" />CHARU?
            </h2>
          </div>
          <div className="max-w-md">
            <p className="font-body text-carbon/80 font-semibold text-base">
              A software engineer who thrives at the intersection of robust backend logic, enterprise API design, and interactive web frontends.
            </p>
          </div>
        </div>

        {/* Editorial Story Collage */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-20">
          
          {/* Main Bio Card */}
          <div className="lg:col-span-7 bg-sky rounded-card border-[2px] border-carbon p-6 sm:p-8 shadow-[6px_6px_0px_#000000] relative">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-3 h-3 rounded-full bg-ember border border-carbon"></span>
              <span className="w-3 h-3 rounded-full bg-sunburst border border-carbon"></span>
              <span className="w-3 h-3 rounded-full bg-mint border border-carbon"></span>
              <span className="text-xs font-mono font-bold text-carbon/60 ml-2">bio.json</span>
            </div>

            <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-carbon mb-4 leading-tight">
              Information Technology Graduate & Full-Stack Engineer.
            </h3>

            <p className="font-body text-base sm:text-lg text-carbon/90 leading-relaxed font-medium mb-6">
              {personalInfo.bio}
            </p>

            {/* TAP Academy Badge */}
            <div className="bg-paper rounded-card border-[1.5px] border-carbon p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 shadow-[3px_3px_0px_#000000]">
              <div>
                <div className="text-[10px] uppercase font-black tracking-wider text-carbon/60">INTERNSHIP EXPERIENCE</div>
                <div className="font-display font-extrabold text-lg text-carbon">TAP Academy — Full Stack Developer Intern</div>
                <div className="text-xs font-bold text-carbon/75 font-mono">July 2026 – January 2027</div>
              </div>
              <span className="px-3 py-1 bg-mint text-carbon rounded-pill border border-carbon text-xs font-bold font-display whitespace-nowrap">
                BACKEND & UI
              </span>
            </div>
          </div>

          {/* Quick Stats & Stickers Card */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="bg-sunburst rounded-card border-[2px] border-carbon p-6 shadow-[6px_6px_0px_#000000]">
              <div className="text-xs font-black font-display uppercase tracking-wider text-carbon mb-2">
                CORE TECHNICAL FOCUS
              </div>
              <div className="font-display font-black text-3xl sm:text-4xl text-carbon leading-tight">
                ENTERPRISE JAVA & REACT ECOSYSTEM
              </div>
              <p className="font-body font-semibold text-sm text-carbon/90 mt-2">
                Architecting complete end-to-end data pipelines from relational SQL stores to modern React user interfaces.
              </p>
            </div>

            {/* Small tactile pill row */}
            <div className="flex flex-wrap gap-2.5 p-4 bg-mist rounded-card border-[1.5px] border-carbon shadow-[3px_3px_0px_#000000]">
              <Sticker name="Clean Code" color="paper" tilt="-2deg" size="sm" />
              <Sticker name="Scalable Architecture" color="lavender" tilt="2deg" size="sm" />
              <Sticker name="JWT Security" color="ember" tilt="-3deg" size="sm" />
              <Sticker name="RESTful APIs" color="electric" tilt="1deg" size="sm" />
              <Sticker name="Relational CRUD" color="mint" tilt="-1deg" size="sm" />
            </div>
          </div>
        </div>

        {/* INTERACTIVE FULL-STACK ARCHITECTURAL PIPELINE */}
        <div className="bg-mist rounded-card-lg border-[2px] border-carbon p-6 sm:p-10 shadow-[6px_6px_0px_#000000]">
          <div className="text-center max-w-xl mx-auto mb-8">
            <div className="inline-block bg-paper px-3 py-1 rounded-pill border border-carbon text-xs font-display font-black tracking-wider uppercase mb-2">
              THE FULL-STACK STACK PIPELINE
            </div>
            <h3 className="font-display font-black text-3xl sm:text-4xl text-carbon uppercase tracking-tight">
              JAVA → SPRING → REACT → MYSQL
            </h3>
            <p className="font-body text-xs sm:text-sm font-bold text-carbon/75 mt-1">
              Click each layer to inspect how data moves through the architecture.
            </p>
          </div>

          {/* Interactive Steps Bar */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 relative">
            {pipelineSteps.map((step, idx) => (
              <div
                key={step.title}
                onClick={() => setActiveStep(idx)}
                className={`
                  cursor-pointer p-5 rounded-card border-[2px] border-carbon transition-all duration-200
                  ${activeStep === idx 
                    ? `${activeBgMap[step.color]} shadow-[5px_5px_0px_#000000] -translate-y-1.5` 
                    : 'bg-paper hover:bg-mist shadow-[2px_2px_0px_#000000] hover:-translate-y-0.5'
                  }
                `}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="w-7 h-7 rounded-full bg-carbon text-paper flex items-center justify-center font-display font-black text-xs">
                    0{idx + 1}
                  </span>
                  <TechLogo name={step.logo} className="w-6 h-6" />
                </div>
                <div className="font-display font-black text-xl text-carbon">{step.title}</div>
                <div className="text-xs font-bold text-carbon/70 uppercase tracking-wide mb-2">{step.subtitle}</div>
                <p className="font-body text-xs font-semibold text-carbon/85 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Detailed Inspector Strip */}
          <div className="mt-6 bg-paper rounded-card border-[1.5px] border-carbon p-4 sm:p-5 flex items-center justify-between flex-wrap gap-3">
            <div className="flex items-center gap-3">
              <span className="w-3 h-3 rounded-full bg-mint animate-pulse"></span>
              <span className="text-xs sm:text-sm font-bold font-mono text-carbon">
                Active Layer: <span className="font-black underline">{pipelineSteps[activeStep].title}</span> ({pipelineSteps[activeStep].subtitle})
              </span>
            </div>
            <div className="text-xs font-mono font-semibold text-carbon/70">
              Pattern: Model-View-Controller + REST API Security
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
