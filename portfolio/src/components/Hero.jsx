import React, { useState, useEffect } from 'react';
import { ArrowDown, ArrowUpRight, Sparkles, Terminal, Code2, Database } from 'lucide-react';
import { Ribbon3D } from './Ribbon3D';
import { Sticker } from './Sticker';
import { personalInfo } from '../data/portfolioData';

export const Hero = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { innerWidth, innerHeight } = window;
      setMousePos({
        x: (e.clientX / innerWidth - 0.5) * 30,
        y: (e.clientY / innerHeight - 0.5) * 30
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section 
      id="hero" 
      className="relative min-h-screen pt-28 pb-16 px-4 md:px-8 bg-sky flex flex-col justify-between overflow-hidden border-b-[2px] border-carbon"
    >
      {/* 3D Inflatable Electric Blue Ribbon in Background */}
      <div className="absolute inset-0 z-0">
        <Ribbon3D variant="hero" interactive={true} className="w-full h-full" />
      </div>

      {/* Floating Parallax Sticker Collage around typography */}
      <div className="absolute inset-0 pointer-events-none z-20 overflow-hidden">
        {/* Java Sticker */}
        <div 
          className="absolute pointer-events-auto transition-transform duration-100 ease-out"
          style={{
            top: '18%',
            left: '6%',
            transform: `translate(${mousePos.x * -0.6}px, ${mousePos.y * -0.6}px)`
          }}
        >
          <Sticker 
            name="Java" 
            role="Core programming language" 
            logo="java" 
            color="sunburst" 
            tilt="-7deg" 
            size="lg" 
          />
        </div>

        {/* Spring Boot Sticker */}
        <div 
          className="absolute pointer-events-auto transition-transform duration-100 ease-out"
          style={{
            top: '20%',
            right: '8%',
            transform: `translate(${mousePos.x * 0.7}px, ${mousePos.y * 0.7}px)`
          }}
        >
          <Sticker 
            name="Spring Boot" 
            role="Backend microservices & APIs" 
            logo="spring" 
            color="mint" 
            tilt="6deg" 
            size="lg" 
          />
        </div>

        {/* React Sticker */}
        <div 
          className="absolute pointer-events-auto transition-transform duration-100 ease-out"
          style={{
            bottom: '24%',
            left: '8%',
            transform: `translate(${mousePos.x * 0.5}px, ${mousePos.y * 0.5}px)`
          }}
        >
          <Sticker 
            name="React" 
            role="Frontend component architecture" 
            logo="react" 
            color="electric" 
            tilt="-5deg" 
            size="lg" 
          />
        </div>

        {/* MySQL Sticker */}
        <div 
          className="absolute pointer-events-auto transition-transform duration-100 ease-out"
          style={{
            bottom: '22%',
            right: '12%',
            transform: `translate(${mousePos.x * -0.5}px, ${mousePos.y * -0.5}px)`
          }}
        >
          <Sticker 
            name="MySQL" 
            role="Relational database operations" 
            logo="mysql" 
            color="lavender" 
            tilt="8deg" 
            size="md" 
          />
        </div>

        {/* REST API Sticker */}
        <div 
          className="absolute pointer-events-auto hidden md:block transition-transform duration-100 ease-out"
          style={{
            top: '46%',
            right: '4%',
            transform: `translate(${mousePos.x * 0.9}px, ${mousePos.y * 0.9}px)`
          }}
        >
          <Sticker 
            name="REST API" 
            role="Stateless client-server architecture" 
            logo="rest" 
            color="violet" 
            tilt="4deg" 
            size="sm" 
          />
        </div>

        {/* JWT Auth Sticker */}
        <div 
          className="absolute pointer-events-auto hidden md:block transition-transform duration-100 ease-out"
          style={{
            top: '48%',
            left: '3%',
            transform: `translate(${mousePos.x * -0.8}px, ${mousePos.y * -0.8}px)`
          }}
        >
          <Sticker 
            name="JWT Auth" 
            role="Secure authentication & authorization" 
            logo="jwt" 
            color="ember" 
            tilt="-6deg" 
            size="sm" 
          />
        </div>

        {/* GitHub Sticker */}
        <div 
          className="absolute pointer-events-auto hidden lg:block transition-transform duration-100 ease-out"
          style={{
            bottom: '36%',
            right: '5%',
            transform: `translate(${mousePos.x * 0.4}px, ${mousePos.y * 0.4}px)`
          }}
        >
          <Sticker 
            name="GitHub" 
            role="charu05-dev" 
            logo="github" 
            color="carbon" 
            tilt="-3deg" 
            size="sm" 
          />
        </div>
      </div>

      {/* Main Center Composition */}
      <div className="relative z-10 max-w-7xl mx-auto w-full flex-1 flex flex-col justify-center items-center text-center my-auto">
        
        {/* Role Tag Pill */}
        <div className="inline-flex items-center gap-2 bg-paper px-4 py-1.5 rounded-pill border-[1.5px] border-carbon shadow-[3px_3px_0px_#000000] mb-6 transform -rotate-1 hover:rotate-0 transition-transform">
          <span className="w-2.5 h-2.5 rounded-full bg-mint animate-pulse"></span>
          <span className="font-display font-black text-xs md:text-sm tracking-wider uppercase text-carbon">
            JAVA FULL-STACK DEVELOPER
          </span>
        </div>

        {/* GIGANTIC OVERSIZED DISPLAY TYPOGRAPHY */}
        <div className="relative select-none my-2 md:my-4">
          <h1 className="font-display font-black uppercase text-carbon leading-[0.78] tracking-tighter text-[19vw] sm:text-[17vw] lg:text-[15.5vw]">
            CHARU
          </h1>
          <h1 className="font-display font-black uppercase text-carbon leading-[0.78] tracking-tighter text-[19vw] sm:text-[17vw] lg:text-[15.5vw]">
            SHARMA
          </h1>
        </div>

        {/* Supporting Copy strictly from resume */}
        <div className="max-w-2xl mx-auto mt-6 md:mt-8 px-4">
          <p className="font-body text-base sm:text-lg md:text-xl font-bold text-carbon/90 bg-paper/85 backdrop-blur-sm p-4 rounded-card border-[1.5px] border-carbon shadow-[3px_3px_0px_#000000]">
            Building scalable web applications with <span className="underline decoration-sunburst decoration-4">Java</span>, <span className="underline decoration-mint decoration-4">Spring Boot</span>, <span className="underline decoration-electric decoration-4">React</span> and <span className="underline decoration-lavender decoration-4">MySQL</span>.
          </p>
        </div>

        {/* Dual Primary & Secondary CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
          <a
            href="#projects"
            className="px-8 py-4 bg-carbon text-paper rounded-pill border-[1.5px] border-carbon font-display font-black text-sm md:text-base tracking-wider uppercase shadow-[4px_4px_0px_#000000] hover:shadow-[6px_6px_0px_#000000] hover:-translate-y-1 active:translate-y-0.5 transition-all flex items-center gap-2"
          >
            <span>VIEW MY WORK</span>
            <ArrowDown className="w-4 h-4" />
          </a>

          <a
            href="#contact"
            className="px-8 py-4 bg-paper text-carbon rounded-pill border-[1.5px] border-carbon font-display font-black text-sm md:text-base tracking-wider uppercase shadow-[4px_4px_0px_#000000] hover:shadow-[6px_6px_0px_#000000] hover:-translate-y-1 active:translate-y-0.5 transition-all flex items-center gap-2"
          >
            <span>LET'S CONNECT</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>

    </section>
  );
};
