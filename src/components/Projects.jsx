import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Github,
  ExternalLink,
  Sparkles,
  Layers,
  ArrowUpRight,
  CheckCircle2,
  Clock,
  Info,
} from 'lucide-react';
import { projectsData } from '../data/portfolioData';
import ProjectMockupVisual from './ProjectMockupVisual';

export default function Projects({ onSelectProject }) {
  const [filter, setFilter] = useState('All');

  const filterOptions = ['All', 'AI & Intelligent Apps', 'Full-Stack Systems', 'Capstone'];

  const filteredProjects = projectsData.filter((project) => {
    if (filter === 'All') return true;
    if (filter === 'AI & Intelligent Apps') {
      return (
        project.category.includes('AI') ||
        project.technologies.some((t) => t.includes('Gemini') || t.includes('AI'))
      );
    }
    if (filter === 'Full-Stack Systems') {
      return project.technologies.includes('Node.js') || project.technologies.includes('Express.js');
    }
    if (filter === 'Capstone') {
      return project.category.includes('Final Year');
    }
    return true;
  });

  return (
    <section id="projects" className="py-24 relative bg-[#09090B] overflow-hidden">
      {/* Background accents */}
      <div className="glow-purple top-1/4 -right-36 opacity-35 pointer-events-none" />
      <div className="glow-cyan bottom-1/4 -left-36 opacity-35 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-950/40 border border-purple-800/40 text-purple-300 text-xs font-mono mb-3">
            <Sparkles size={12} />
            <span>PORTFOLIO SHOWCASE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#F4F4F5]">
            Featured <span className="gradient-text-purple">Projects</span>
          </h2>
          <p className="mt-3 text-base text-[#A1A1AA] max-w-2xl">
            Real-world software solutions spanning smart queue systems, AI collaboration platforms, and offline-first educational tools.
          </p>
          <div className="w-12 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full mt-4" />
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {filterOptions.map((opt) => (
            <button
              key={opt}
              onClick={() => setFilter(opt)}
              className={`text-xs sm:text-sm font-medium px-4 py-2 rounded-xl transition-all duration-200 ${
                filter === opt
                  ? 'bg-purple-600 text-white shadow-lg shadow-purple-600/30'
                  : 'bg-[#18181B] text-[#A1A1AA] hover:text-[#F4F4F5] border border-[#27272A] hover:border-purple-500/30'
              }`}
            >
              {opt}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-[#18181B] border border-[#27272A] rounded-2xl overflow-hidden hover:border-purple-500/40 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-950/20 flex flex-col justify-between group"
            >
              <div>
                {/* Visual Preview / Mockup Component */}
                <div className="relative">
                  <ProjectMockupVisual projectId={project.id} />
                  
                  {/* Category Pill floating */}
                  <div className="absolute bottom-3 left-3 z-10">
                    <span className="text-[11px] font-mono font-medium px-2.5 py-1 rounded-md bg-[#09090B]/90 text-purple-300 border border-purple-500/30 backdrop-blur-md">
                      {project.category}
                    </span>
                  </div>

                  {project.badge && (
                    <div className="absolute bottom-3 right-3 z-10">
                      <span className="text-[11px] font-mono font-medium px-2.5 py-1 rounded-md bg-[#09090B]/90 text-cyan-300 border border-cyan-500/30 backdrop-blur-md">
                        {project.badge}
                      </span>
                    </div>
                  )}
                </div>

                {/* Card Content */}
                <div className="p-6">
                  {/* Title */}
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <h3 className="text-xl sm:text-2xl font-bold text-[#F4F4F5] group-hover:text-purple-300 transition-colors">
                      {project.title}
                    </h3>
                  </div>

                  {/* Short Description */}
                  <p className="text-sm text-[#A1A1AA] leading-relaxed mb-4">
                    {project.shortDescription}
                  </p>

                  {/* Key Features preview */}
                  <div className="mb-5 space-y-2">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-[#A1A1AA] block">
                      Core Highlights:
                    </span>
                    {project.features ? (
                      <div className="space-y-1.5">
                        {project.features.slice(0, 3).map((feat, fIdx) => (
                          <div key={fIdx} className="flex items-start gap-2 text-xs text-[#D4D4D8]">
                            <CheckCircle2 size={13} className="text-purple-400 mt-0.5 shrink-0" />
                            <span className="line-clamp-1">{feat}</span>
                          </div>
                        ))}
                      </div>
                    ) : (
                      // GramShiksha distinct implemented & planned preview
                      <div className="space-y-1.5">
                        <div className="flex items-start gap-2 text-xs text-emerald-400">
                          <CheckCircle2 size={13} className="mt-0.5 shrink-0" />
                          <span className="line-clamp-1">Implemented: {project.implementedFeatures[0]}</span>
                        </div>
                        <div className="flex items-start gap-2 text-xs text-amber-400">
                          <Clock size={13} className="mt-0.5 shrink-0" />
                          <span className="line-clamp-1">Planned: {project.plannedFeatures[0]}</span>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Tech stack tags */}
                  <div className="flex flex-wrap gap-1.5 pt-2 border-t border-[#27272A]/70">
                    {project.technologies.slice(0, 6).map((tech) => (
                      <span
                        key={tech}
                        className="text-[11px] font-mono px-2.5 py-1 rounded bg-[#09090B] text-[#D4D4D8] border border-[#27272A]"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 6 && (
                      <span className="text-[11px] font-mono px-2 py-1 rounded bg-[#09090B] text-[#A1A1AA] border border-[#27272A]">
                        +{project.technologies.length - 6} more
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Action Buttons Footer */}
              <div className="p-4 sm:px-6 sm:py-4 bg-[#09090B] border-t border-[#27272A] flex items-center justify-between gap-3">
                <button
                  onClick={() => onSelectProject(project)}
                  className="flex items-center gap-1.5 text-xs font-medium text-purple-400 hover:text-purple-300 py-1.5 transition-colors"
                >
                  <Info size={14} />
                  <span>Project Details</span>
                </button>

                <div className="flex items-center gap-2">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-[#18181B] hover:bg-[#27272A] text-[#A1A1AA] hover:text-[#F4F4F5] border border-[#27272A] transition-colors"
                      title="GitHub Repository (Editable placeholder)"
                      aria-label={`${project.title} GitHub`}
                    >
                      <Github size={15} />
                    </a>
                  )}

                  {project.liveUrl ? (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-xs font-medium bg-purple-600 hover:bg-purple-500 text-white px-3 py-1.5 rounded-lg transition-colors"
                    >
                      <span>Live Demo</span>
                      <ArrowUpRight size={13} />
                    </a>
                  ) : (
                    <span
                      className="text-[11px] font-mono text-[#71717A] px-2.5 py-1 rounded bg-[#18181B] border border-[#27272A] cursor-default"
                      title="Editable placeholder link in portfolioData.js"
                    >
                      Pending Host
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Note on editable URLs */}
        <div className="mt-8 text-center text-xs text-[#71717A] font-mono">
          * Repository and live preview links are centrally managed in{' '}
          <code className="text-purple-400">src/data/portfolioData.js</code>.
        </div>
      </div>
    </section>
  );
}
