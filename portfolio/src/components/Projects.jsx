import React, { useState } from 'react';
import { ArrowUpRight, ShoppingBag, Code2, ExternalLink, PlayCircle } from 'lucide-react';
import { projects } from '../data/portfolioData';
import { Sticker } from './Sticker';
import { ProjectModal } from './ProjectModal';

const ProjectPreview = ({ project }) => (
  <div className="bg-paper rounded-card border-[2px] border-carbon p-4 sm:p-5 shadow-[4px_4px_0px_#000000] space-y-4 min-w-0">
    <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-carbon">
      <div className="flex items-center gap-2 min-w-0">
        {project.id === 'fashionselect' ? <ShoppingBag className="w-5 h-5 shrink-0" /> : <Code2 className="w-5 h-5 shrink-0" />}
        <span className="font-display font-black text-sm uppercase">{project.title} / PROJECT OVERVIEW</span>
      </div>
      <span className="px-2.5 py-1 bg-mint text-carbon border border-carbon rounded-full text-[10px] font-black uppercase">
        {project.id === 'fashionselect' ? 'LIVE DEMO' : 'PROJECT OVERVIEW'}
      </span>
    </div>

    <div className="relative overflow-hidden rounded-card border-[1.5px] border-carbon bg-sky min-h-[220px] flex items-center justify-center p-5">
      <div className="absolute inset-0 opacity-40" style={{backgroundImage:'radial-gradient(#28313b 1px, transparent 1px)',backgroundSize:'16px 16px'}} />
      <div className="relative w-full max-w-sm bg-paper rounded-card border-2 border-carbon p-4 shadow-[4px_4px_0px_#000000]">
        <div className="flex items-center gap-2 mb-4">
          <span className="w-3 h-3 rounded-full bg-ember border border-carbon" />
          <span className="w-3 h-3 rounded-full bg-sunburst border border-carbon" />
          <span className="w-3 h-3 rounded-full bg-mint border border-carbon" />
          <span className="ml-auto text-[10px] font-mono font-bold">PROJECT PREVIEW</span>
        </div>
        <h4 className="font-display font-black text-2xl sm:text-3xl uppercase leading-none mb-2">{project.title}</h4>
        <p className="font-body text-xs sm:text-sm font-semibold text-carbon/70 mb-4">{project.subtitle}</p>
        <div className="grid grid-cols-3 gap-2">
          {(project.mockupFeatures || []).map((feature) => (
            <div key={feature.label} className="bg-mist border border-carbon rounded-lg p-2 min-w-0">
              <div className="font-mono text-[9px] font-black text-carbon/60 mb-1">{feature.label}</div>
              <div className="font-display text-[10px] sm:text-xs font-black leading-tight break-words">{feature.value}</div>
            </div>
          ))}
        </div>
        <p className="font-mono text-[10px] mt-4 text-carbon/60">Illustrative project overview · not a captured app screenshot</p>
      </div>
    </div>

    {project.videoUrl ? (
      <a href={project.videoUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 font-display font-black text-xs uppercase underline underline-offset-4">
        <PlayCircle className="w-4 h-4" /> Watch project demo <ExternalLink className="w-3 h-3" />
      </a>
    ) : (
      <p className="text-xs font-semibold text-carbon/60">Demo recording will be added when a real walkthrough is available.</p>
    )}
  </div>
);

export const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="relative py-24 px-4 md:px-8 bg-paper border-b-[2px] border-carbon overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <div className="inline-block bg-electric text-carbon px-3.5 py-1 rounded-pill border-[1.5px] border-carbon shadow-[2px_2px_0px_#000000] text-xs font-display font-black tracking-wider uppercase mb-3">
              FEATURED WORK
            </div>
            <h2 className="font-display font-black text-carbon text-5xl sm:text-6xl md:text-7xl uppercase leading-[0.85] tracking-tight">
              THINGS <br className="hidden sm:inline" />I BUILT
            </h2>
          </div>
          <p className="max-w-md font-body text-carbon/80 font-semibold text-base">
            Selected projects, the tools behind them, and a closer look at the features implemented or currently in development.
          </p>
        </div>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <article key={project.id} className={`group relative rounded-card-lg border-[2.5px] border-carbon p-5 sm:p-8 lg:p-10 shadow-[8px_8px_0px_#000000] hover:shadow-[12px_12px_0px_#000000] transition-all duration-300 ${index % 2 === 0 ? 'bg-sky' : 'bg-mint'}`}>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className="space-y-5 min-w-0">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="px-3 py-1 bg-carbon text-paper font-display font-black text-xs uppercase rounded-pill">PROJECT {project.number}</span>
                    <span className="px-3 py-1 bg-sunburst text-carbon border border-carbon font-display font-black text-xs uppercase rounded-pill">{project.badge}</span>
                  </div>
                  <h3 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl text-carbon uppercase tracking-tight leading-none break-words">{project.title}</h3>
                  <p className="font-display font-bold text-base sm:text-lg text-carbon/80 uppercase tracking-wide">{project.subtitle}</p>
                  <p className="font-body text-sm sm:text-base font-semibold text-carbon/90 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2 pt-1">
                    {project.technologies.map((tech, i) => (
                      <Sticker key={tech} name={tech} logo={tech.toLowerCase().replace(/[^a-z0-9]/g, '')} color={['sunburst','mint','electric','lavender','paper','ember'][i % 6]} tilt="0deg" size="sm" />
                    ))}
                  </div>
                  {project.plannedTechnologies?.length > 0 && (
                    <div className="pt-1">
                      <p className="font-display font-black text-xs uppercase mb-2">Planned backend / integrations</p>
                      <div className="flex flex-wrap gap-1.5">
                        {project.plannedTechnologies.map((tech) => <span key={tech} className="px-2 py-1 text-[10px] font-bold rounded-pill border border-carbon/60 bg-paper/70">{tech}</span>)}
                      </div>
                    </div>
                  )}
                  <div className="flex flex-wrap gap-3 pt-3">
                    <button onClick={() => setSelectedProject(project)} className="flex items-center gap-2 px-5 py-3 bg-carbon text-paper rounded-pill font-display font-black text-xs sm:text-sm uppercase tracking-wider shadow-[3px_3px_0px_#000000] hover:shadow-[5px_5px_0px_#000000] hover:-translate-y-1 transition-all">
                      View project details <ArrowUpRight className="w-4 h-4" />
                    </button>
                    {project.liveUrl && <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-5 py-3 bg-paper text-carbon border-[1.5px] border-carbon rounded-pill font-display font-black text-xs sm:text-sm uppercase tracking-wider shadow-[3px_3px_0px_#000000] hover:shadow-[5px_5px_0px_#000000] hover:-translate-y-1 transition-all">Open live site <ArrowUpRight className="w-4 h-4" /></a>}
                    {project.githubUrl && <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-5 py-3 bg-paper text-carbon border-[1.5px] border-carbon rounded-pill font-display font-black text-xs sm:text-sm uppercase tracking-wider hover:-translate-y-1 transition-all"><Code2 className="w-4 h-4" /> Source code <ArrowUpRight className="w-4 h-4" /></a>}
                  </div>
                </div>
                <ProjectPreview project={project} />
              </div>
            </article>
          ))}
        </div>
      </div>
      {selectedProject && <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />}
    </section>
  );
};
