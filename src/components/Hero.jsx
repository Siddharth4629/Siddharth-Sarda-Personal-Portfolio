import React from 'react';
import { motion } from 'framer-motion';
import {
  FileDown,
  ArrowRight,
  Github,
  Linkedin,
  Mail,
  Sparkles,
  Terminal,
  Code2,
  CheckCircle2,
  ExternalLink,
  Layers,
  Cpu,
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Hero({ onOpenResume }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.55,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 md:py-32 overflow-hidden bg-grid-pattern"
    >
      {/* Ambient background glows */}
      <div className="glow-purple -top-24 -left-20 opacity-50 pointer-events-none" />
      <div className="glow-cyan -bottom-24 -right-20 opacity-40 pointer-events-none" />

      {/* Decorative gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#09090B]/60 to-[#09090B] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* Left Column: Editorial Introduction & Call-to-actions */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 flex flex-col items-start"
          >
            {/* 1. Small Label: HELLO, I'M */}
            <motion.div variants={itemVariants} className="mb-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#18181B] border border-[#27272A] shadow-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span className="text-[11px] font-mono tracking-wider text-purple-400 font-semibold uppercase">
                  {personalInfo.heroLabel}
                </span>
                <span className="text-xs text-[#A1A1AA]">•</span>
                <span className="text-[11px] font-mono text-[#A1A1AA]">
                  Parul University '27
                </span>
              </div>
            </motion.div>

            {/* 2. Main Heading: Siddharth Sarda */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold tracking-tight text-[#F4F4F5] leading-[1.1]"
            >
              <span className="gradient-text-purple">
                {personalInfo.name}
              </span>
            </motion.h1>

            {/* 3. Professional Title: Software Developer */}
            <motion.div variants={itemVariants} className="mt-3">
              <h2 className="text-xl sm:text-2xl font-heading font-semibold text-cyan-400 flex items-center gap-2.5">
                <Terminal size={20} className="text-purple-400 shrink-0" />
                <span>{personalInfo.title}</span>
              </h2>
            </motion.div>

            {/* 4. Supporting Tagline */}
            <motion.div variants={itemVariants} className="mt-3">
              <p className="text-base sm:text-lg font-medium text-[#F4F4F5] leading-snug">
                {personalInfo.tagline}
              </p>
            </motion.div>

            {/* 5. Introduction */}
            <motion.p
              variants={itemVariants}
              className="mt-4 text-sm sm:text-base text-[#A1A1AA] leading-relaxed max-w-2xl font-sans"
            >
              {personalInfo.intro}
            </motion.p>

            {/* 6. Technology Highlights Badge Row */}
            <motion.div variants={itemVariants} className="mt-6 w-full">
              <span className="text-[10px] font-mono uppercase tracking-wider text-[#71717A] block mb-2">
                Core Technologies:
              </span>
              <div className="flex flex-wrap gap-2">
                {personalInfo.techHighlights.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 rounded-md bg-[#18181B] text-[#D4D4D8] border border-[#27272A] hover:border-purple-500/40 text-xs font-mono transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* 7. Action Buttons */}
            <motion.div
              variants={itemVariants}
              className="mt-8 flex flex-wrap items-center gap-3.5 sm:gap-4 w-full sm:w-auto"
            >
              {/* Primary: Explore My Projects */}
              <a
                href="#projects"
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-heading font-medium text-sm text-white bg-gradient-to-r from-purple-600 via-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 shadow-lg shadow-purple-600/25 hover:shadow-purple-600/40 transition-all duration-200 group"
              >
                <span>Explore My Projects</span>
                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </a>

              {/* Secondary: Download Resume */}
              <a
                href={personalInfo.resume.downloadUrl}
                download={personalInfo.resume.fileName}
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-heading font-medium text-sm text-[#F4F4F5] bg-[#18181B] hover:bg-[#202025] border border-[#27272A] hover:border-purple-500/50 shadow-sm transition-all duration-200"
              >
                <FileDown size={16} className="text-purple-400" />
                <span>Download Resume</span>
              </a>

              {/* Preview Resume Modal */}
              <button
                onClick={onOpenResume}
                className="hidden sm:flex items-center justify-center gap-1.5 px-4 py-3.5 rounded-xl font-mono text-xs text-[#A1A1AA] hover:text-[#F4F4F5] hover:bg-white/5 transition-colors"
                title="View Resume in Browser"
              >
                <span>View Online</span>
                <ExternalLink size={12} />
              </button>
            </motion.div>

            {/* 8. Social Links */}
            <motion.div
              variants={itemVariants}
              className="mt-10 pt-6 border-t border-[#27272A]/80 w-full flex flex-wrap items-center justify-between gap-4"
            >
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono text-[#A1A1AA] uppercase tracking-wider">
                  Profiles:
                </span>
                <div className="flex items-center gap-2">
                  <a
                    href={personalInfo.socialLinks.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-lg bg-[#18181B] text-[#A1A1AA] hover:text-[#F4F4F5] hover:bg-[#27272A] border border-[#27272A] hover:border-purple-500/40 transition-all shadow-sm"
                    aria-label="GitHub Profile"
                  >
                    <Github size={18} />
                  </a>

                  <a
                    href={personalInfo.socialLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-lg bg-[#18181B] text-[#A1A1AA] hover:text-cyan-400 hover:bg-[#27272A] border border-[#27272A] hover:border-cyan-500/40 transition-all shadow-sm"
                    aria-label="LinkedIn Profile"
                  >
                    <Linkedin size={18} />
                  </a>

                  <a
                    href={`mailto:${personalInfo.socialLinks.email}`}
                    className="p-2.5 rounded-lg bg-[#18181B] text-[#A1A1AA] hover:text-purple-400 hover:bg-[#27272A] border border-[#27272A] hover:border-purple-500/40 transition-all shadow-sm"
                    aria-label="Send Email"
                  >
                    <Mail size={18} />
                  </a>
                </div>
              </div>

              {/* Status pill */}
              <div className="flex items-center gap-2 text-xs text-[#A1A1AA] font-mono">
                <Code2 size={14} className="text-purple-400" />
                <span>Full Stack • Backend • AI</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Elegant Abstract Developer Visual & Typography Composition */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative flex justify-center"
          >
            {/* Ambient halo */}
            <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/20 to-cyan-500/20 rounded-3xl blur-2xl transform scale-90 -z-10" />

            <div className="w-full max-w-md bg-[#18181B]/95 border border-[#27272A] rounded-2xl p-6 shadow-2xl backdrop-blur-xl relative overflow-hidden">
              
              {/* Window header */}
              <div className="flex items-center justify-between pb-4 border-b border-[#27272A]">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                </div>
                <div className="text-[11px] font-mono text-[#A1A1AA] flex items-center gap-1.5 bg-[#09090B] px-2.5 py-1 rounded-md border border-[#27272A]">
                  <Sparkles size={11} className="text-purple-400" />
                  <span>developer.profile.json</span>
                </div>
              </div>

              {/* Abstract Monogram Card Header */}
              <div className="mt-5 mb-4 p-4 rounded-xl bg-[#09090B] border border-[#27272A] flex items-center gap-4">
                <div className="relative">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-purple-500/30 to-cyan-500/30 border border-purple-500/40 p-1 flex items-center justify-center shadow-inner overflow-hidden">
                    <div className="w-full h-full bg-[#18181B] rounded-lg flex flex-col items-center justify-center text-center">
                      <span className="font-heading text-2xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                        SS
                      </span>
                      <span className="text-[8px] font-mono text-[#A1A1AA] tracking-tighter">
                        DEV • '27
                      </span>
                    </div>
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-3.5 h-3.5 rounded-full bg-emerald-500 border-2 border-[#09090B]" title="Active" />
                </div>

                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-heading font-semibold text-[#F4F4F5]">
                      {personalInfo.name}
                    </h3>
                    <span className="text-[10px] font-mono bg-purple-500/10 text-purple-300 border border-purple-500/20 px-2 py-0.5 rounded">
                      Software Dev
                    </span>
                  </div>
                  <p className="text-xs text-[#A1A1AA] mt-0.5 font-sans">
                    Parul University (2023 – 2027)
                  </p>
                  <p className="text-[11px] text-cyan-400 font-mono mt-1 flex items-center gap-1">
                    <span>⚡ Open to SDE Opportunities</span>
                  </p>
                </div>
              </div>

              {/* Structured Developer State Snippet */}
              <div className="bg-[#09090B] rounded-xl p-4 border border-[#27272A] font-mono text-xs text-[#A1A1AA] space-y-1.5 leading-relaxed overflow-x-auto">
                <p>
                  <span className="text-purple-400">const</span>{' '}
                  <span className="text-cyan-300">softwareEngineer</span> = {'{'}
                </p>
                <p className="pl-4">
                  <span className="text-[#F4F4F5]">targetRole</span>:{' '}
                  <span className="text-amber-300">'Graduate Software Engineer'</span>,
                </p>
                <p className="pl-4">
                  <span className="text-[#F4F4F5]">primaryStack</span>: [
                  <span className="text-emerald-300">'React'</span>,{' '}
                  <span className="text-emerald-300">'Node'</span>,{' '}
                  <span className="text-emerald-300">'Postgres'</span>],
                </p>
                <p className="pl-4">
                  <span className="text-[#F4F4F5]">aiDevelopment</span>: [
                  <span className="text-purple-300">'Gemini 2.5 Flash'</span>,{' '}
                  <span className="text-purple-300">'JSON Schemas'</span>],
                </p>
                <p className="pl-4">
                  <span className="text-[#F4F4F5]">coreFoundations</span>: [
                  <span className="text-cyan-300">'Data Structures & Algorithms'</span>,{' '}
                  <span className="text-cyan-300">'DBMS'</span>,{' '}
                  <span className="text-cyan-300">'OOP'</span>],
                </p>
                <p className="pl-4">
                  <span className="text-[#F4F4F5]">featuredWork</span>: [
                  <span className="text-amber-300">'GetCareerPilot'</span>,{' '}
                  <span className="text-amber-300">'SkipLine'</span>],
                </p>
                <p>{'}'};</p>
              </div>

              {/* Verified Quality Indicators */}
              <div className="grid grid-cols-2 gap-2 mt-4 pt-3 border-t border-[#27272A]">
                <div className="p-2 rounded-lg bg-[#09090B]/60 border border-[#27272A]/60 flex items-center gap-2">
                  <CheckCircle2 size={13} className="text-purple-400 shrink-0" />
                  <span className="text-[11px] font-mono text-[#A1A1AA]">Clean Architecture</span>
                </div>
                <div className="p-2 rounded-lg bg-[#09090B]/60 border border-[#27272A]/60 flex items-center gap-2">
                  <CheckCircle2 size={13} className="text-cyan-400 shrink-0" />
                  <span className="text-[11px] font-mono text-[#A1A1AA]">Real-World Projects</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
