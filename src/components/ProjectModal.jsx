import React, { useEffect } from 'react';
import {
  X,
  Github,
  ExternalLink,
  CheckCircle2,
  Clock,
  Layers,
  Sparkles,
  AlertCircle,
  Code2,
} from 'lucide-react';
import ProjectMockupVisual from './ProjectMockupVisual';

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-md animate-fade-in">
      <div
        className="relative w-full max-w-3xl bg-[#18181B] border border-[#27272A] rounded-2xl shadow-2xl overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header visual preview */}
        <div className="relative">
          <ProjectMockupVisual projectId={project.id} />
          
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-3 right-3 p-2 rounded-full bg-[#09090B]/80 text-[#A1A1AA] hover:text-[#F4F4F5] hover:bg-[#09090B] border border-[#27272A] transition-colors z-20"
            aria-label="Close details"
          >
            <X size={18} />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[65vh] overflow-y-auto">
          {/* Title & Category */}
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="text-xs font-mono font-medium px-2.5 py-0.5 rounded-full bg-purple-500/10 text-purple-300 border border-purple-500/20">
                {project.category}
              </span>
              {project.badge && (
                <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                  {project.badge}
                </span>
              )}
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-[#F4F4F5]">
              {project.title}
            </h3>
            <p className="text-sm font-medium text-purple-300/80 mt-1">
              {project.tagline}
            </p>
          </div>

          {/* Description */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-[#A1A1AA]">
              Project Overview
            </h4>
            <p className="text-sm sm:text-base text-[#D4D4D8] leading-relaxed">
              {project.fullDescription || project.shortDescription}
            </p>
          </div>

          {/* Tech Stack */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-[#A1A1AA] mb-3">
              Technologies & Frameworks
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="text-xs font-mono px-3 py-1.5 rounded-lg bg-[#09090B] text-[#F4F4F5] border border-[#27272A]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Features breakdown: Handle GramShiksha AI's distinct implemented vs planned features */}
          {project.implementedFeatures ? (
            <div className="space-y-5">
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-emerald-400 mb-2 flex items-center gap-1.5">
                  <CheckCircle2 size={14} />
                  <span>Currently Implemented Capabilities</span>
                </h4>
                <div className="space-y-2 bg-[#09090B] p-4 rounded-xl border border-emerald-900/30">
                  {project.implementedFeatures.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-[#D4D4D8]">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1.5 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-amber-400 mb-2 flex items-center gap-1.5">
                  <Clock size={14} />
                  <span>Planned Roadmap & Next Phases</span>
                </h4>
                <div className="space-y-2 bg-[#09090B] p-4 rounded-xl border border-amber-900/30">
                  {project.plannedFeatures.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-[#A1A1AA]">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-1.5 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-[#A1A1AA] mb-3">
                Key Features & Capabilities
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 bg-[#09090B] p-4 rounded-xl border border-[#27272A]">
                {project.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-[#D4D4D8]">
                    <CheckCircle2 size={14} className="text-purple-400 shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Architecture Highlights */}
          {project.architectureHighlights && (
            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-[#A1A1AA] mb-3 flex items-center gap-1.5">
                <Layers size={14} className="text-cyan-400" />
                <span>Architecture & Engineering Highlights</span>
              </h4>
              <div className="space-y-2 bg-[#09090B] p-4 rounded-xl border border-[#27272A]">
                {project.architectureHighlights.map((arch, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-[#A1A1AA]">
                    <span className="text-cyan-400 font-mono">▸</span>
                    <span>{arch}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer with Actions */}
        <div className="p-4 sm:p-6 bg-[#09090B] border-t border-[#27272A] flex flex-wrap items-center justify-between gap-4">
          <div className="text-xs font-mono text-[#A1A1AA]">
            Editable links in <span className="text-purple-400">portfolioData.js</span>
          </div>

          <div className="flex items-center gap-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#18181B] hover:bg-[#27272A] text-xs font-medium text-[#F4F4F5] border border-[#27272A] transition-colors"
              >
                <Github size={14} />
                <span>GitHub Repository</span>
              </a>
            )}

            {project.liveUrl ? (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-purple-600 hover:bg-purple-500 text-xs font-medium text-white shadow-md shadow-purple-600/30 transition-colors"
              >
                <ExternalLink size={14} />
                <span>Live Demo</span>
              </a>
            ) : (
              <button
                disabled
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#18181B]/60 text-xs font-medium text-[#71717A] border border-[#27272A] cursor-not-allowed"
                title="Live deployment URL will be linked here once publicly hosted"
              >
                <ExternalLink size={14} />
                <span>Live Demo (Pending Host)</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
