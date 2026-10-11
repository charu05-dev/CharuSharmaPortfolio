import React, { useState } from 'react';
import { ArrowUpRight, ShoppingBag, Utensils, Database, Shield, Server, Check, Layers } from 'lucide-react';
import { projects, personalInfo } from '../data/portfolioData';
import { Sticker } from './Sticker';
import { ProjectModal } from './ProjectModal';

export const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="relative py-24 px-4 md:px-8 bg-paper border-b-[2px] border-carbon overflow-hidden">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <div className="inline-block bg-electric text-carbon px-3.5 py-1 rounded-pill border-[1.5px] border-carbon shadow-[2px_2px_0px_#000000] text-xs font-display font-black tracking-wider uppercase mb-3">
              FEATURED WORK
            </div>
            <h2 className="font-display font-black text-carbon text-5xl sm:text-6xl md:text-7xl uppercase leading-[0.85] tracking-tight">
              THINGS <br className="hidden sm:inline" />I BUILT
            </h2>
          </div>
          <div className="max-w-md">
            <p className="font-body text-carbon/80 font-semibold text-base">
              Full-stack production-grade architectures built with Spring Boot, React, and MySQL with verified JWT authentication.
            </p>
          </div>
        </div>

        {/* PROJECTS POSTERS GRID */}
        <div className="space-y-16">
          
          {/* PROJECT 01: FASHIONSELECT */}
          <div className="group relative bg-sky rounded-card-lg border-[2.5px] border-carbon p-6 sm:p-10 shadow-[8px_8px_0px_#000000] hover:shadow-[12px_12px_0px_#000000] transition-all duration-300">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Left Column: Editorial Info */}
              <div className="lg:col-span-6 space-y-5">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-3 py-1 bg-carbon text-paper font-display font-black text-xs uppercase rounded-pill">
                    PROJECT 01
                  </span>
                  <span className="px-3 py-1 bg-sunburst text-carbon border border-carbon font-display font-black text-xs uppercase rounded-pill">
                    FULL STACK
                  </span>
                  <span className="px-3 py-1 bg-paper text-carbon border border-carbon font-mono font-bold text-xs rounded-pill">
                    Jan 2026
                  </span>
                </div>

                <h3 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl text-carbon uppercase tracking-tight leading-none">
                  FASHIONSELECT
                </h3>

                <p className="font-display font-bold text-base sm:text-lg text-carbon/80 uppercase tracking-wide">
                  Fashion E-Commerce Platform
                </p>

                <p className="font-body text-sm sm:text-base font-semibold text-carbon/90 leading-relaxed">
                  A full-stack fashion e-commerce application built using Spring Boot and React, enabling users to browse products and interact with the application through RESTful APIs.
                </p>

                {/* Technology Stickers */}
                <div className="flex flex-wrap gap-2 pt-2">
                  <Sticker name="Java" logo="java" color="sunburst" tilt="-2deg" size="sm" />
                  <Sticker name="Spring Boot" logo="spring" color="mint" tilt="3deg" size="sm" />
                  <Sticker name="React" logo="react" color="electric" tilt="-3deg" size="sm" />
                  <Sticker name="SQL" logo="database" color="lavender" tilt="2deg" size="sm" />
                  <Sticker name="REST API" logo="rest" color="paper" tilt="-1deg" size="sm" />
                  <Sticker name="JWT" logo="jwt" color="ember" tilt="4deg" size="sm" />
                </div>

                {/* CTA Button */}
                <div className="pt-4">
                  <button
                    onClick={() => setSelectedProject(projects[0])}
                    className="flex items-center gap-2.5 px-6 py-3.5 bg-carbon text-paper rounded-pill font-display font-black text-xs sm:text-sm uppercase tracking-wider shadow-[3px_3px_0px_#000000] hover:shadow-[5px_5px_0px_#000000] hover:-translate-y-1 active:translate-y-0.5 transition-all"
                  >
                    <span>VIEW PROJECT DETAILS</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Right Column: Abstract E-Commerce UI Mockup */}
              <div className="lg:col-span-6 bg-paper rounded-card border-[2px] border-carbon p-5 shadow-[4px_4px_0px_#000000] space-y-4">
                {/* Mockup Header Bar */}
                <div className="flex items-center justify-between pb-3 border-b border-carbon">
                  <div className="flex items-center gap-2">
                    <ShoppingBag className="w-5 h-5 text-carbon" />
                    <span className="font-display font-black text-sm uppercase">FashionSelect Catalog</span>
                  </div>
                  <span className="px-2.5 py-0.5 bg-mint text-carbon border border-carbon rounded-full text-[10px] font-black uppercase">
                    JWT PROTECTED
                  </span>
                </div>

                {/* Abstract Product Cards Mockup */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3 bg-mist rounded-card border border-carbon space-y-2">
                    <div className="h-20 bg-sunburst/50 rounded-lg border border-carbon flex items-center justify-center font-display font-black text-xs">
                      SPRING JACKET
                    </div>
                    <div className="flex justify-between items-center text-xs font-bold font-mono">
                      <span>#SKU-104</span>
                      <span className="bg-carbon text-paper px-1.5 py-0.5 rounded">$89.00</span>
                    </div>
                  </div>

                  <div className="p-3 bg-mist rounded-card border border-carbon space-y-2">
                    <div className="h-20 bg-electric/40 rounded-lg border border-carbon flex items-center justify-center font-display font-black text-xs">
                      COTTON TEE
                    </div>
                    <div className="flex justify-between items-center text-xs font-bold font-mono">
                      <span>#SKU-208</span>
                      <span className="bg-carbon text-paper px-1.5 py-0.5 rounded">$34.00</span>
                    </div>
                  </div>
                </div>

                {/* API & SQL Query Drawer */}
                <div className="bg-carbon text-paper rounded-card p-3 font-mono text-xs space-y-1">
                  <div className="text-mint flex items-center gap-1.5 font-bold">
                    <span className="w-2 h-2 rounded-full bg-mint"></span>
                    GET /api/v1/products?category=apparel
                  </div>
                  <div className="text-paper/70 text-[11px]">
                    SELECT id, title, price, stock FROM products WHERE active = 1;
                  </div>
                </div>
              </div>

            </div>
          </div>


          {/* PROJECT 02: FOODSERVE */}
          <div className="group relative bg-mint rounded-card-lg border-[2.5px] border-carbon p-6 sm:p-10 shadow-[8px_8px_0px_#000000] hover:shadow-[12px_12px_0px_#000000] transition-all duration-300">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Left Column: Abstract Food Delivery Pipeline Mockup */}
              <div className="lg:col-span-6 order-2 lg:order-1 bg-paper rounded-card border-[2px] border-carbon p-5 shadow-[4px_4px_0px_#000000] space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-carbon">
                  <div className="flex items-center gap-2">
                    <Utensils className="w-5 h-5 text-carbon" />
                    <span className="font-display font-black text-sm uppercase">FoodServe Dispatch</span>
                  </div>
                  <span className="px-2.5 py-0.5 bg-sunburst text-carbon border border-carbon rounded-full text-[10px] font-black uppercase">
                    LIVE REST API
                  </span>
                </div>

                {/* Pipeline Flow: FOOD -> ORDER -> API -> DATABASE */}
                <div className="p-3 bg-sky rounded-card border border-carbon space-y-3">
                  <div className="text-[11px] font-black uppercase font-display text-carbon/70">
                    TRANSACTIONAL LIFECYCLE
                  </div>
                  <div className="grid grid-cols-4 gap-1 text-center font-display font-extrabold text-[11px]">
                    <div className="p-2 bg-paper rounded border border-carbon">FOOD</div>
                    <div className="p-2 bg-sunburst rounded border border-carbon">ORDER</div>
                    <div className="p-2 bg-electric rounded border border-carbon">API</div>
                    <div className="p-2 bg-lavender rounded border border-carbon">SQL DB</div>
                  </div>
                </div>

                {/* Real-time Order State Preview */}
                <div className="grid grid-cols-2 gap-3 font-mono text-xs">
                  <div className="p-3 bg-mist rounded-card border border-carbon">
                    <div className="text-carbon/60 text-[10px] font-bold">STATUS</div>
                    <div className="font-black text-carbon">ORDER_DISPATCHED</div>
                    <div className="text-[11px] text-carbon/75 mt-1">Bearer JWT Token Valid</div>
                  </div>
                  <div className="p-3 bg-mist rounded-card border border-carbon">
                    <div className="text-carbon/60 text-[10px] font-bold">PERSISTENCE</div>
                    <div className="font-black text-carbon">MYSQL COMMITTED</div>
                    <div className="text-[11px] text-carbon/75 mt-1">ACID Transaction OK</div>
                  </div>
                </div>
              </div>

              {/* Right Column: Editorial Info */}
              <div className="lg:col-span-6 order-1 lg:order-2 space-y-5">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-3 py-1 bg-carbon text-paper font-display font-black text-xs uppercase rounded-pill">
                    PROJECT 02
                  </span>
                  <span className="px-3 py-1 bg-sunburst text-carbon border border-carbon font-display font-black text-xs uppercase rounded-pill">
                    FULL STACK
                  </span>
                  <span className="px-3 py-1 bg-paper text-carbon border border-carbon font-mono font-bold text-xs rounded-pill">
                    May 2026
                  </span>
                </div>

                <h3 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl text-carbon uppercase tracking-tight leading-none">
                  FOODSERVE
                </h3>

                <p className="font-display font-bold text-base sm:text-lg text-carbon/80 uppercase tracking-wide">
                  Online Food Delivery Application
                </p>

                <p className="font-body text-sm sm:text-base font-semibold text-carbon/90 leading-relaxed">
                  A full-stack food service application built using Spring Boot and React, implementing RESTful APIs for seamless communication between frontend and backend.
                </p>

                {/* Technology Stickers */}
                <div className="flex flex-wrap gap-2 pt-2">
                  <Sticker name="Java" logo="java" color="sunburst" tilt="-3deg" size="sm" />
                  <Sticker name="Spring Boot" logo="spring" color="paper" tilt="2deg" size="sm" />
                  <Sticker name="React" logo="react" color="electric" tilt="-2deg" size="sm" />
                  <Sticker name="SQL" logo="database" color="lavender" tilt="4deg" size="sm" />
                  <Sticker name="REST API" logo="rest" color="sky" tilt="-1deg" size="sm" />
                  <Sticker name="JWT" logo="jwt" color="ember" tilt="3deg" size="sm" />
                </div>

                {/* CTA Button */}
                <div className="pt-4">
                  <button
                    onClick={() => setSelectedProject(projects[1])}
                    className="flex items-center gap-2.5 px-6 py-3.5 bg-carbon text-paper rounded-pill font-display font-black text-xs sm:text-sm uppercase tracking-wider shadow-[3px_3px_0px_#000000] hover:shadow-[5px_5px_0px_#000000] hover:-translate-y-1 active:translate-y-0.5 transition-all"
                  >
                    <span>VIEW PROJECT DETAILS</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
};
