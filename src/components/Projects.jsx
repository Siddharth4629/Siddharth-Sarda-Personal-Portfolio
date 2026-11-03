import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Github,
  ExternalLink,
  Sparkles,
  Layers,
  ArrowRight,
  CheckCircle2,
  BookOpen,
  ChevronDown,
  ChevronUp,
} from 'lucide-react';
import { featuredProjects, additionalProjects } from '../data/portfolioData';
import ProjectMockupVisual from './ProjectMockupVisual';

export default function Projects({ onSelectProject }) {
  const [showAdditional, setShowAdditional] = useState(false);

  return (
    <section id="projects" className="py-24 relative bg-[#09090B] overflow-hidden">
      {/* Background accents */}
      <div className="glow-purple top-1/4 -right-36 opacity-30 pointer-events-none" />
      <div className="glow-cyan bottom-1/4 -left-36 opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-950/40 border border-purple-800/40 text-purple-300 text-xs font-mono mb-3">
            <Sparkles size={12} />
            <span>PRIMARY PORTFOLIO PROJECTS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold tracking-tight text-[#F4F4F5]">
            Featured <span className="gradient-text-purple">Projects</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#A1A1AA] max-w-2xl font-sans">
            Demonstrating end-to-end software development, intelligent AI integrations, relational database engineering, and real-time distributed systems.
          </p>
          <div className="w-12 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full mt-4" />
        </div>

        {/* Primary 3 Resume Projects */}
        <div className="space-y-12">
          
          {/* PROJECT 1 — GETCAREERPILOT (Flagship Featured Project — Prominent Layout) */}
          {featuredProjects.slice(0, 1).map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55 }}
              className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-[#18181B] via-[#141418] to-[#18181B] border-2 border-purple-500/40 hover:border-purple-500/60 transition-all shadow-2xl hover:shadow-purple-950/30"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                
                {/* Left: Project Details & Content */}
                <div className="lg:col-span-7 space-y-4">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-xs font-mono font-semibold px-3 py-1 rounded-full bg-purple-600/20 text-purple-300 border border-purple-500/30">
                      {project.featuredBadge}
                    </span>
                    <span className="text-xs font-mono text-[#A1A1AA] bg-[#09090B] px-2.5 py-1 rounded border border-[#27272A]">
                      {project.category}
                    </span>
                    <span className="text-xs font-mono text-cyan-400">
                      {project.year}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-heading font-extrabold text-white">
                    {project.title}
                    <span className="text-base sm:text-lg font-medium text-purple-300 block mt-1 font-sans">
                      {project.subtitle}
                    </span>
                  </h3>

                  <p className="text-sm text-[#D4D4D8] leading-relaxed font-sans">
                    {project.shortDescription}
                  </p>

                  {/* Showcase Features Grid */}
                  <div className="space-y-2 pt-2">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-[#A1A1AA] block">
                      Core Implementation Highlights:
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {project.showcaseFeatures.slice(0, 4).map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-start gap-2 text-xs text-[#E4E4E7]">
                          <CheckCircle2 size={13} className="text-purple-400 mt-0.5 shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="pt-2">
                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies.map((tech, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2.5 py-1 rounded-md bg-[#09090B] text-xs font-mono text-[#D4D4D8] border border-[#27272A]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-[#27272A]">
                    <Link
                      to={project.caseStudyUrl}
                      className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white text-xs font-heading font-semibold shadow-md transition-all group"
                    >
                      <span>Read Full Case Study</span>
                      <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </Link>

                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#18181B] hover:bg-[#27272A] border border-[#27272A] hover:border-purple-500/40 text-xs font-mono text-[#F4F4F5] transition-colors"
                      >
                        <Github size={14} />
                        <span>GitHub</span>
                      </a>
                    )}

                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#18181B] hover:bg-[#27272A] border border-[#27272A] hover:border-cyan-500/40 text-xs font-mono text-cyan-300 transition-colors"
                      >
                        <ExternalLink size={14} />
                        <span>Live Demo</span>
                      </a>
                    )}
                  </div>
                </div>

                {/* Right: Architectural Mockup Component */}
                <div className="lg:col-span-5 rounded-2xl border border-[#27272A] overflow-hidden bg-[#09090B] shadow-xl">
                  <div className="p-3 bg-[#111116] border-b border-[#27272A] flex items-center justify-between text-xs font-mono text-[#A1A1AA]">
                    <span>getcareerpilot.visual</span>
                    <span className="text-[10px] text-purple-400 bg-purple-950/40 px-2 py-0.5 rounded border border-purple-800/30">
                      Gemini 2.5 Flash
                    </span>
                  </div>
                  <ProjectMockupVisual projectId={project.id} />
                </div>

              </div>
            </motion.div>
          ))}

          {/* PROJECTS 2 & 3: SKIPLINE & STUDENT MANAGEMENT SYSTEM (Supporting Cards Grid) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredProjects.slice(1).map((project, idx) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="bg-[#18181B] border border-[#27272A] rounded-2xl overflow-hidden hover:border-purple-500/40 transition-all duration-300 flex flex-col justify-between group shadow-xl"
              >
                <div>
                  {/* Visual Mockup Header */}
                  <div className="relative">
                    <ProjectMockupVisual projectId={project.id} />
                    
                    <div className="absolute bottom-3 left-3 z-10">
                      <span className="text-[11px] font-mono font-medium px-2.5 py-1 rounded-md bg-[#09090B]/90 text-purple-300 border border-purple-500/30 backdrop-blur-md">
                        {project.category}
                      </span>
                    </div>

                    <div className="absolute bottom-3 right-3 z-10">
                      <span className="text-[11px] font-mono font-medium px-2.5 py-1 rounded-md bg-[#09090B]/90 text-cyan-300 border border-cyan-500/30 backdrop-blur-md">
                        {project.year}
                      </span>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-6 space-y-3">
                    <h3 className="text-xl sm:text-2xl font-heading font-bold text-white group-hover:text-purple-300 transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-[#A1A1AA] leading-relaxed font-sans">
                      {project.shortDescription}
                    </p>

                    {/* Features list */}
                    <div className="space-y-1.5 pt-1">
                      {project.showcaseFeatures.slice(0, 3).map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-start gap-2 text-xs text-[#D4D4D8]">
                          <CheckCircle2 size={13} className="text-cyan-400 mt-0.5 shrink-0" />
                          <span className="line-clamp-1">{feat}</span>
                        </div>
                      ))}
                    </div>

                    {/* Tech pills */}
                    <div className="pt-2">
                      <div className="flex flex-wrap gap-1.5">
                        {project.technologies.slice(0, 5).map((tech, tIdx) => (
                          <span
                            key={tIdx}
                            className="px-2 py-0.5 rounded bg-[#09090B] text-[11px] font-mono text-[#D4D4D8] border border-[#27272A]"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 5 && (
                          <span className="px-2 py-0.5 rounded bg-[#09090B] text-[11px] font-mono text-cyan-400 border border-[#27272A]">
                            +{project.technologies.length - 5} more
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card Actions Footer */}
                <div className="p-6 pt-3 border-t border-[#27272A] flex items-center justify-between">
                  <Link
                    to={project.caseStudyUrl}
                    className="inline-flex items-center gap-1.5 text-xs font-heading font-semibold text-purple-400 hover:text-purple-300 transition-colors"
                  >
                    <span>View Case Study</span>
                    <ArrowRight size={13} />
                  </Link>

                  <div className="flex items-center gap-2">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg bg-[#09090B] text-[#A1A1AA] hover:text-white border border-[#27272A] hover:border-purple-500/30 transition-colors"
                        title="GitHub Repository"
                      >
                        <Github size={15} />
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg bg-[#09090B] text-cyan-400 hover:text-cyan-300 border border-[#27272A] hover:border-cyan-500/30 transition-colors"
                        title="Live Demo"
                      >
                        <ExternalLink size={15} />
                      </a>
                    )}
                  </div>
                </div>

              </motion.div>
            ))}
          </div>

        </div>

        {/* Additional / Exploratory Projects Toggle */}
        <div className="mt-16 text-center">
          <button
            onClick={() => setShowAdditional(!showAdditional)}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#18181B] hover:bg-[#202025] text-xs font-mono text-[#D4D4D8] border border-[#27272A] hover:border-purple-500/40 transition-all"
          >
            <BookOpen size={14} className="text-purple-400" />
            <span>
              {showAdditional
                ? "Hide Additional Projects"
                : "Explore Additional & Exploratory Projects (CollabMind, GramShiksha AI)"}
            </span>
            {showAdditional ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
          </button>

          {showAdditional && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              transition={{ duration: 0.4 }}
              className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 text-left"
            >
              {additionalProjects.map((proj) => (
                <div
                  key={proj.id}
                  className="p-6 rounded-2xl bg-[#18181B] border border-[#27272A] space-y-3"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-mono text-purple-400 bg-purple-950/40 px-2 py-0.5 rounded border border-purple-800/30">
                      {proj.category}
                    </span>
                    <span className="text-xs font-mono text-[#A1A1AA]">{proj.year}</span>
                  </div>

                  <h4 className="text-lg font-heading font-bold text-white">{proj.title}</h4>
                  <p className="text-xs text-[#A1A1AA] leading-relaxed font-sans">
                    {proj.shortDescription}
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {proj.technologies.map((t, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 rounded bg-[#09090B] text-[10px] font-mono text-[#D4D4D8] border border-[#27272A]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="pt-2">
                    <a
                      href={proj.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-mono text-cyan-400 hover:underline"
                    >
                      <Github size={13} />
                      <span>Repository Link</span>
                    </a>
                  </div>
                </div>
              ))}
            </motion.div>
          )}
        </div>

      </div>
    </section>
  );
}
