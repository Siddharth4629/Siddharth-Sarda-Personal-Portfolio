import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowLeft,
  Github,
  ExternalLink,
  Code2,
  Cpu,
  Layers,
  CheckCircle2,
  AlertTriangle,
  Lightbulb,
  Sparkles,
  ArrowRight,
  Database,
  Calendar,
  User,
  ShieldCheck,
  Workflow,
} from 'lucide-react';
import { projectsCaseStudies } from '../data/projectsCaseStudies';
import ProjectMockupVisual from '../components/ProjectMockupVisual';

export default function ProjectDetail({ onOpenResume }) {
  const { slug } = useParams();
  const navigate = useNavigate();

  // Normalize slug (e.g. handle 'student-management' alias)
  const normalizedSlug = slug === 'student-management' ? 'student-management-system' : slug;
  const project = projectsCaseStudies[normalizedSlug];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!project) {
    return (
      <div className="min-h-[80vh] flex flex-col items-center justify-center px-4 text-center">
        <h1 className="text-3xl font-heading font-bold text-white mb-3">Case Study Not Found</h1>
        <p className="text-[#A1A1AA] text-sm mb-6 max-w-md">
          The project case study you requested could not be located.
        </p>
        <Link
          to="/#projects"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white text-xs font-semibold transition-all"
        >
          <ArrowLeft size={14} />
          <span>Return to Featured Projects</span>
        </Link>
      </div>
    );
  }

  // Determine prev / next project navigation
  const allSlugs = Object.keys(projectsCaseStudies);
  const currentIndex = allSlugs.indexOf(normalizedSlug);
  const prevSlug = currentIndex > 0 ? allSlugs[currentIndex - 1] : null;
  const nextSlug = currentIndex < allSlugs.length - 1 ? allSlugs[currentIndex + 1] : null;

  return (
    <article className="min-h-screen pt-28 pb-20 bg-[#09090B] text-[#F4F4F5] relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="glow-purple -top-32 -left-32 opacity-30 pointer-events-none" />
      <div className="glow-cyan bottom-10 right-0 opacity-25 pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Navigation Breadcrumb / Back Link */}
        <div className="mb-8 flex items-center justify-between">
          <Link
            to="/#projects"
            className="inline-flex items-center gap-2 text-xs font-mono text-[#A1A1AA] hover:text-[#F4F4F5] transition-colors py-1.5 px-3 rounded-lg bg-[#18181B] border border-[#27272A]"
          >
            <ArrowLeft size={13} className="text-purple-400" />
            <span>Back to Projects</span>
          </Link>

          <div className="flex items-center gap-2">
            <span className="text-xs font-mono text-purple-400 bg-purple-950/60 border border-purple-800/40 px-2.5 py-1 rounded">
              {project.category}
            </span>
            <span className="text-xs font-mono text-[#A1A1AA] bg-[#18181B] px-2.5 py-1 rounded border border-[#27272A]">
              {project.year}
            </span>
          </div>
        </div>

        {/* 1. Project Title & Overview Header */}
        <header className="space-y-4 mb-10 border-b border-[#27272A] pb-8">
          <div className="space-y-2">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold tracking-tight text-white">
              {project.title}
            </h1>
            <p className="text-lg sm:text-xl font-heading font-medium text-purple-300">
              {project.subtitle}
            </p>
          </div>

          <p className="text-sm sm:text-base text-[#D4D4D8] leading-relaxed max-w-3xl font-sans">
            {project.overview}
          </p>

          {/* Quick Meta Row */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 text-xs font-mono">
            <div className="p-3 rounded-xl bg-[#18181B] border border-[#27272A]">
              <span className="text-[#A1A1AA] block text-[10px] uppercase">My Role</span>
              <span className="text-white font-medium">{project.role}</span>
            </div>
            <div className="p-3 rounded-xl bg-[#18181B] border border-[#27272A]">
              <span className="text-[#A1A1AA] block text-[10px] uppercase">Project Status</span>
              <span className="text-cyan-400 font-medium">{project.status}</span>
            </div>
            <div className="p-3 rounded-xl bg-[#18181B] border border-[#27272A]">
              <span className="text-[#A1A1AA] block text-[10px] uppercase">Architecture</span>
              <span className="text-purple-300 font-medium truncate">{project.architecture.type}</span>
            </div>
            <div className="p-3 rounded-xl bg-[#18181B] border border-[#27272A] flex items-center justify-between">
              <div>
                <span className="text-[#A1A1AA] block text-[10px] uppercase">Links</span>
                <div className="flex items-center gap-2 mt-0.5">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-purple-400 transition-colors"
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
                      className="text-cyan-400 hover:text-cyan-300 transition-colors"
                      title="Live Demo"
                    >
                      <ExternalLink size={15} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* 10. Interactive Mockup & Visual */}
        <section className="mb-12">
          <div className="rounded-2xl border border-[#27272A] overflow-hidden shadow-2xl bg-[#18181B]">
            <div className="p-3 bg-[#09090B] border-b border-[#27272A] flex items-center justify-between text-xs font-mono text-[#A1A1AA]">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-rose-500/70" />
                <div className="w-2.5 h-2.5 rounded-full bg-amber-500/70" />
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/70" />
                <span className="ml-2 text-white font-medium">{project.slug}.architecture-preview</span>
              </div>
              <span className="text-[11px] text-purple-400 bg-purple-950/40 px-2 py-0.5 rounded border border-purple-800/30">
                Interactive Visual Component
              </span>
            </div>
            <ProjectMockupVisual projectId={project.id} />
          </div>
        </section>

        {/* 2 & 3. Problem Statement & Project Objective */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {/* Problem Statement */}
          <div className="p-6 rounded-2xl bg-[#18181B] border border-[#27272A] space-y-3">
            <div className="flex items-center gap-2 text-amber-400">
              <AlertTriangle size={18} />
              <h2 className="text-base font-heading font-bold uppercase tracking-wider">
                The Problem Statement
              </h2>
            </div>
            <p className="text-sm text-[#A1A1AA] leading-relaxed">
              {project.problemStatement}
            </p>
          </div>

          {/* Project Objective */}
          <div className="p-6 rounded-2xl bg-[#18181B] border border-[#27272A] space-y-3">
            <div className="flex items-center gap-2 text-cyan-400">
              <Lightbulb size={18} />
              <h2 className="text-base font-heading font-bold uppercase tracking-wider">
                Project Objective
              </h2>
            </div>
            <p className="text-sm text-[#A1A1AA] leading-relaxed">
              {project.projectObjective}
            </p>
          </div>
        </div>

        {/* 4. My Contribution */}
        <section className="mb-12 p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-[#18181B] to-[#121215] border border-purple-500/30 space-y-3 relative overflow-hidden">
          <div className="flex items-center gap-2 text-purple-400">
            <User size={18} />
            <h2 className="text-base font-heading font-bold uppercase tracking-wider">
              My Engineering Contribution
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#F4F4F5] leading-relaxed">
            {project.myContribution}
          </p>
        </section>

        {/* 5. Technology Stack */}
        <section className="mb-12 space-y-4">
          <div className="flex items-center gap-2 text-purple-400">
            <Code2 size={18} />
            <h2 className="text-base font-heading font-bold uppercase tracking-wider">
              Technology Stack
            </h2>
          </div>
          <div className="flex flex-wrap gap-2.5">
            {project.technologies.map((tech, idx) => (
              <span
                key={idx}
                className="px-3.5 py-1.5 rounded-lg bg-[#18181B] text-[#D4D4D8] border border-[#27272A] hover:border-purple-500/40 font-mono text-xs transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>

        {/* 6. Architecture Diagram & Workflow */}
        <section className="mb-12 space-y-4">
          <div className="flex items-center gap-2 text-cyan-400">
            <Workflow size={18} />
            <h2 className="text-base font-heading font-bold uppercase tracking-wider">
              System Architecture Flow
            </h2>
          </div>

          <div className="p-6 rounded-2xl bg-[#111116] border border-[#27272A] space-y-4">
            <p className="text-xs font-mono text-[#A1A1AA]">
              Architecture Style: <span className="text-white font-semibold">{project.architecture.type}</span>
            </p>

            <div className="grid grid-cols-1 gap-3">
              {project.architecture.diagram.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 p-3.5 rounded-xl bg-[#18181B] border border-[#27272A] hover:border-cyan-500/30 transition-colors"
                >
                  <span className="w-6 h-6 rounded-full bg-cyan-950/60 border border-cyan-800/40 text-cyan-300 font-mono text-xs flex items-center justify-center shrink-0 mt-0.5">
                    {idx + 1}
                  </span>
                  <div>
                    <h3 className="text-xs font-mono font-bold text-[#F4F4F5]">{item.step}</h3>
                    <p className="text-xs text-[#A1A1AA] mt-0.5">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 7. Key Features */}
        <section className="mb-12 space-y-4">
          <div className="flex items-center gap-2 text-purple-400">
            <Sparkles size={18} />
            <h2 className="text-base font-heading font-bold uppercase tracking-wider">
              Key Features & Capabilities
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {project.keyFeatures.map((feat, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-[#18181B] border border-[#27272A] hover:border-purple-500/30 transition-all space-y-1.5"
              >
                <div className="flex items-center gap-2 text-purple-300">
                  <CheckCircle2 size={16} className="text-purple-400 shrink-0" />
                  <h3 className="text-sm font-heading font-semibold text-white">{feat.title}</h3>
                </div>
                <p className="text-xs text-[#A1A1AA] leading-relaxed pl-6">
                  {feat.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 8 & 9. Technical Challenges & Solutions */}
        <section className="mb-12 space-y-4">
          <div className="flex items-center gap-2 text-emerald-400">
            <ShieldCheck size={18} />
            <h2 className="text-base font-heading font-bold uppercase tracking-wider">
              Technical Challenges & Solutions
            </h2>
          </div>

          <div className="space-y-4">
            {project.technicalChallenges.map((item, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-[#18181B] border border-[#27272A] space-y-2"
              >
                <div className="flex items-start gap-2 text-rose-300">
                  <span className="text-xs font-mono font-bold text-rose-400 bg-rose-950/40 px-2 py-0.5 rounded border border-rose-800/30">
                    Challenge {idx + 1}
                  </span>
                  <span className="text-xs sm:text-sm font-semibold text-white">
                    {item.challenge}
                  </span>
                </div>
                <div className="flex items-start gap-2 text-[#A1A1AA] text-xs leading-relaxed pt-1 border-t border-[#27272A]/50">
                  <span className="text-emerald-400 font-mono font-bold shrink-0">Solution:</span>
                  <span>{item.solution}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 11. Learning Outcomes */}
        <section className="mb-12 space-y-4">
          <div className="flex items-center gap-2 text-purple-400">
            <Layers size={18} />
            <h2 className="text-base font-heading font-bold uppercase tracking-wider">
              Key Engineering Takeaways
            </h2>
          </div>

          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-[#D4D4D8]">
            {project.learningOutcomes.map((outcome, idx) => (
              <li
                key={idx}
                className="flex items-start gap-2.5 p-3.5 rounded-xl bg-[#18181B] border border-[#27272A]"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-1.5 shrink-0" />
                <span>{outcome}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* 12 & 13. Links & Action Banner */}
        <section className="p-8 rounded-2xl bg-[#18181B] border border-[#27272A] flex flex-col sm:flex-row items-center justify-between gap-4 mb-16">
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="text-lg font-heading font-bold text-white">
              Explore the Implementation
            </h3>
            <p className="text-xs text-[#A1A1AA]">
              View source repository on GitHub or test live functionality.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#27272A] hover:bg-[#3F3F46] text-white text-xs font-mono font-semibold transition-colors"
              >
                <Github size={14} />
                <span>GitHub Repository</span>
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white text-xs font-semibold shadow-md transition-colors"
              >
                <ExternalLink size={14} />
                <span>Live Application</span>
              </a>
            )}
          </div>
        </section>

        {/* Pagination between project case studies */}
        <nav className="flex items-center justify-between pt-6 border-t border-[#27272A] text-xs font-mono">
          {prevSlug ? (
            <Link
              to={`/projects/${prevSlug}`}
              className="flex items-center gap-2 text-[#A1A1AA] hover:text-white transition-colors"
            >
              <ArrowLeft size={13} />
              <span>Previous Case Study</span>
            </Link>
          ) : <div />}

          {nextSlug ? (
            <Link
              to={`/projects/${nextSlug}`}
              className="flex items-center gap-2 text-[#A1A1AA] hover:text-white transition-colors"
            >
              <span>Next Case Study</span>
              <ArrowRight size={13} />
            </Link>
          ) : <div />}
        </nav>

      </div>
    </article>
  );
}
