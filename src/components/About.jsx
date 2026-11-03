import React from 'react';
import { motion } from 'framer-motion';
import {
  GraduationCap,
  Sparkles,
  Compass,
  Code2,
  Cpu,
  Database,
  Layers,
  ArrowRight,
} from 'lucide-react';
import { personalInfo, educationData } from '../data/portfolioData';

export default function About() {
  const btechInfo = educationData.find((edu) => edu.degree.includes('B.Tech'));

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-[#09090B]">
      {/* Subtle ambient divider glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-[#27272A] to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-950/40 border border-purple-800/40 text-purple-300 text-xs font-mono mb-3">
            <Sparkles size={12} />
            <span>BACKGROUND & INTERESTS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#F4F4F5]">
            About <span className="gradient-text-purple">Me</span>
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full mt-3" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Personal Narrative */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 space-y-5"
          >
            <div className="glass-card p-6 sm:p-8 rounded-2xl border border-[#27272A] space-y-4">
              <h3 className="text-xl font-semibold text-[#F4F4F5] flex items-center gap-2">
                <Code2 className="text-purple-400" size={20} />
                <span>Engineer's Perspective</span>
              </h3>

              <p className="text-[#A1A1AA] leading-relaxed text-base">
                {personalInfo.about.paragraph1}
              </p>

              <p className="text-[#A1A1AA] leading-relaxed text-base">
                {personalInfo.about.paragraph2}
              </p>

              <p className="text-[#A1A1AA] leading-relaxed text-base">
                {personalInfo.about.paragraph3}
              </p>
            </div>

            {/* Core Values / Philosophy */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-[#18181B] border border-[#27272A] hover:border-purple-500/30 transition-colors">
                <Layers className="text-purple-400 mb-2" size={20} />
                <h4 className="text-sm font-semibold text-[#F4F4F5]">Practical Engineering</h4>
                <p className="text-xs text-[#A1A1AA] mt-1 leading-normal">
                  Building software that solves tangible bottlenecks for everyday users.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#18181B] border border-[#27272A] hover:border-cyan-500/30 transition-colors">
                <Cpu className="text-cyan-400 mb-2" size={20} />
                <h4 className="text-sm font-semibold text-[#F4F4F5]">AI Integration</h4>
                <p className="text-xs text-[#A1A1AA] mt-1 leading-normal">
                  Leveraging LLMs and modern APIs to automate complex cognitive workflows.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#18181B] border border-[#27272A] hover:border-emerald-500/30 transition-colors">
                <Database className="text-emerald-400 mb-2" size={20} />
                <h4 className="text-sm font-semibold text-[#F4F4F5]">Solid Foundations</h4>
                <p className="text-xs text-[#A1A1AA] mt-1 leading-normal">
                  Grounded in core CS: data structures, relational schemas, and system design.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Education Card & Areas of Interest */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="lg:col-span-5 space-y-6"
          >
            {/* Education Quick Overview */}
            {btechInfo && (
              <div className="p-6 rounded-2xl bg-[#18181B] border border-[#27272A] relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-purple-500/10 rounded-bl-full pointer-events-none" />

                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-purple-600/15 border border-purple-500/30 flex items-center justify-center text-purple-400">
                    <GraduationCap size={22} />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-purple-400 uppercase tracking-wider">
                      Current Academic Focus
                    </span>
                    <h4 className="text-base font-semibold text-[#F4F4F5]">
                      {btechInfo.degree}
                    </h4>
                    <p className="text-xs text-cyan-400 font-mono mt-0.5">
                      {btechInfo.institution} • {btechInfo.location}
                    </p>
                  </div>
                </div>

                <div className="space-y-2 text-sm text-[#A1A1AA] pt-1 border-t border-[#27272A]">
                  <div className="flex justify-between items-center py-1">
                    <span>Timeline:</span>
                    <span className="font-mono text-[#F4F4F5]">{btechInfo.duration}</span>
                  </div>
                  <div className="flex justify-between items-center py-1">
                    <span>Academic Score:</span>
                    <span className="font-mono font-semibold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                      {btechInfo.score}
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-1">
                    <span>Status:</span>
                    <span className="font-mono text-cyan-300">{btechInfo.highlight}</span>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-[#27272A]">
                  <a
                    href="#education"
                    className="inline-flex items-center gap-1.5 text-xs text-purple-400 hover:text-purple-300 transition-colors"
                  >
                    <span>View full academic timeline</span>
                    <ArrowRight size={12} />
                  </a>
                </div>
              </div>
            )}

            {/* Areas of Interest */}
            <div className="p-6 rounded-2xl bg-[#18181B] border border-[#27272A]">
              <div className="flex items-center gap-2 mb-4">
                <Compass className="text-cyan-400" size={18} />
                <h4 className="text-base font-semibold text-[#F4F4F5]">
                  Areas of Interest
                </h4>
              </div>

              <div className="space-y-2.5">
                {personalInfo.areasOfInterest.map((interest, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2.5 p-2.5 rounded-lg bg-[#09090B] border border-[#27272A]/80 hover:border-cyan-500/40 transition-colors"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0" />
                    <span className="text-xs sm:text-sm text-[#F4F4F5] font-medium">
                      {interest}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
