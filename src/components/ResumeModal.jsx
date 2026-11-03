import React, { useEffect } from 'react';
import {
  X,
  FileDown,
  Printer,
  ExternalLink,
  GraduationCap,
  Code2,
  Briefcase,
  CheckCircle2,
  Calendar,
  Mail,
  Linkedin,
  Github,
} from 'lucide-react';
import {
  personalInfo,
  educationData,
  skillsData,
  projectsData,
  achievementsData,
} from '../data/portfolioData';

export default function ResumeModal({ isOpen, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-black/85 backdrop-blur-md">
      <div
        className="relative w-full max-w-4xl bg-[#18181B] border border-[#27272A] rounded-2xl shadow-2xl overflow-hidden my-6 flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Control Bar */}
        <div className="p-4 bg-[#09090B] border-b border-[#27272A] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs font-semibold text-purple-400 bg-purple-950/50 border border-purple-800/40 px-2.5 py-1 rounded">
              CURRICULUM VITAE PREVIEW
            </span>
            <span className="text-xs text-[#A1A1AA] hidden sm:inline">
              ATS-Optimized Format
            </span>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={personalInfo.resume.downloadUrl}
              download={personalInfo.resume.fileName}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-purple-600 hover:bg-purple-500 text-xs font-medium text-white shadow-sm transition-colors"
            >
              <FileDown size={14} />
              <span>Download PDF</span>
            </a>

            <button
              onClick={handlePrint}
              className="p-1.5 rounded-lg bg-[#18181B] hover:bg-[#27272A] text-[#A1A1AA] hover:text-[#F4F4F5] border border-[#27272A] transition-colors"
              title="Print Resume"
            >
              <Printer size={16} />
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-[#18181B] hover:bg-[#27272A] text-[#A1A1AA] hover:text-[#F4F4F5] border border-[#27272A] transition-colors"
              aria-label="Close Preview"
            >
              <X size={16} />
            </button>
          </div>
        </div>

        {/* Printable/Viewable Resume Sheet */}
        <div className="p-6 sm:p-10 overflow-y-auto bg-[#0F0F12] space-y-6 text-[#F4F4F5]">
          
          {/* Header */}
          <div className="border-b border-[#27272A] pb-6">
            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
              {personalInfo.name}
            </h1>
            <p className="text-sm font-medium text-purple-400 font-mono mt-1">
              {personalInfo.title}
            </p>

            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-[#A1A1AA] font-mono mt-3">
              <span>Email: siddharthsarda742@gmail.com</span>
              <span>•</span>
              <span>GitHub: github.com/Siddharth4629</span>
              <span>•</span>
              <span>LinkedIn: linkedin.com/in/siddharth-sarda</span>
            </div>
          </div>

          {/* Education */}
          <section className="space-y-3">
            <h2 className="text-xs font-mono uppercase tracking-wider text-purple-400 font-bold border-b border-[#27272A] pb-1">
              Education
            </h2>
            <div className="space-y-3">
              {educationData.map((edu, idx) => (
                <div key={idx} className="flex flex-col sm:flex-row sm:items-baseline justify-between text-xs">
                  <div>
                    <span className="font-semibold text-white">{edu.degree}</span>
                    <p className="text-[#A1A1AA]">{edu.institution} {edu.board && `(${edu.board})`}</p>
                  </div>
                  <div className="text-right text-purple-300 font-mono mt-1 sm:mt-0">
                    <span>{edu.duration}</span> | <span className="font-bold text-emerald-400">{edu.score}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Technical Skills */}
          <section className="space-y-3">
            <h2 className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold border-b border-[#27272A] pb-1">
              Technical Skills
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              {skillsData.map((group, idx) => (
                <div key={idx} className="p-2 rounded bg-[#18181B] border border-[#27272A]">
                  <span className="font-mono text-purple-300 font-semibold">{group.category}: </span>
                  <span className="text-[#D4D4D8]">{group.items.map((i) => i.name).join(', ')}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Projects */}
          <section className="space-y-3">
            <h2 className="text-xs font-mono uppercase tracking-wider text-purple-400 font-bold border-b border-[#27272A] pb-1">
              Featured Engineering Projects
            </h2>
            <div className="space-y-4">
              {projectsData.map((proj) => (
                <div key={proj.id} className="text-xs space-y-1">
                  <div className="flex justify-between items-baseline font-semibold text-white">
                    <span>{proj.title} – <span className="text-purple-300 font-normal">{proj.tagline}</span></span>
                    <span className="text-xs font-mono text-[#A1A1AA]">{proj.category}</span>
                  </div>
                  <p className="text-[#A1A1AA]">{proj.shortDescription}</p>
                  <p className="font-mono text-[11px] text-cyan-400">
                    Stack: {proj.technologies.join(', ')}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Hackathons & Milestones */}
          <section className="space-y-2">
            <h2 className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold border-b border-[#27272A] pb-1">
              Competitions & Milestones
            </h2>
            <div className="text-xs space-y-1 text-[#D4D4D8]">
              <p>
                <span className="font-semibold text-white">Technoverse Hackathon 2026:</span> Rapid prototype development solving software challenges under 24-hr constraints.
              </p>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}
