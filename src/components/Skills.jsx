import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Code2,
  Terminal,
  Cpu,
  Layers,
  Server,
  Database,
  Wrench,
  BookOpen,
  Sparkles,
  CheckCircle,
} from 'lucide-react';
import { skillsData } from '../data/portfolioData';
import { DynamicIcon } from '../utils/IconHelper';

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', ...skillsData.map((s) => s.category)];

  const filteredSkills =
    selectedCategory === 'All'
      ? skillsData
      : skillsData.filter((s) => s.category === selectedCategory);

  return (
    <section id="skills" className="py-24 relative bg-[#09090B] overflow-hidden">
      {/* Background ambient accents */}
      <div className="glow-purple top-1/2 -left-32 opacity-40 pointer-events-none" />
      <div className="glow-cyan bottom-10 -right-32 opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-950/40 border border-purple-800/40 text-purple-300 text-xs font-mono mb-3">
            <Sparkles size={12} />
            <span>TECHNICAL CAPABILITIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#F4F4F5]">
            Technical <span className="gradient-text-purple">Skills</span>
          </h2>
          <p className="mt-3 text-base text-[#A1A1AA] max-w-2xl">
            A comprehensive overview of programming languages, frameworks, databases, and foundational computer science principles I utilize to build modern software.
          </p>
          <div className="w-12 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full mt-4" />
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`text-xs sm:text-sm font-medium px-4 py-2 rounded-xl transition-all duration-200 ${
                selectedCategory === category
                  ? 'bg-purple-600 text-white shadow-lg shadow-purple-600/30'
                  : 'bg-[#18181B] text-[#A1A1AA] hover:text-[#F4F4F5] border border-[#27272A] hover:border-purple-500/30'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((categoryGroup, idx) => (
            <motion.div
              key={categoryGroup.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="bg-[#18181B] border border-[#27272A] rounded-2xl p-6 hover:border-purple-500/40 transition-all duration-300 hover:shadow-xl hover:shadow-black/40 flex flex-col justify-between group"
            >
              <div>
                {/* Header */}
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-semibold text-[#F4F4F5] group-hover:text-purple-300 transition-colors">
                    {categoryGroup.category}
                  </h3>
                  <span className="text-[11px] font-mono text-[#A1A1AA] bg-[#09090B] px-2 py-0.5 rounded border border-[#27272A]">
                    {categoryGroup.items.length} Skills
                  </span>
                </div>
                <p className="text-xs text-[#A1A1AA] mb-5 leading-relaxed">
                  {categoryGroup.description}
                </p>

                {/* Skills items grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {categoryGroup.items.map((skill) => (
                    <div
                      key={skill.name}
                      className="p-3 rounded-xl bg-[#09090B] border border-[#27272A] hover:border-purple-500/40 hover:bg-[#121215] transition-all duration-200 group/item flex flex-col justify-between"
                    >
                      <div className="flex items-center gap-2 mb-1.5">
                        <div
                          className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0"
                          style={{
                            backgroundColor: `${skill.color}15`,
                            color: skill.color === '#FFFFFF' ? '#F4F4F5' : skill.color,
                          }}
                        >
                          <DynamicIcon name={skill.icon} size={15} />
                        </div>
                        <span className="text-xs sm:text-sm font-semibold text-[#F4F4F5] group-hover/item:text-purple-300 transition-colors">
                          {skill.name}
                        </span>
                      </div>

                      <span className="text-[10px] font-mono text-[#A1A1AA] block tracking-tight truncate">
                        {skill.tag}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom tag indicator */}
              <div className="mt-5 pt-3 border-t border-[#27272A]/70 flex items-center justify-between text-[11px] text-[#A1A1AA]">
                <span className="flex items-center gap-1 text-purple-400 font-mono">
                  <CheckCircle size={12} />
                  <span>Verified Project Use</span>
                </span>
                <span className="font-mono text-[#71717A]">No arbitrary %</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Core Competencies Summary Banner */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-purple-950/20 via-[#18181B] to-cyan-950/20 border border-[#27272A] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-purple-500/20 border border-purple-500/30 flex items-center justify-center text-purple-400 shrink-0">
              <Code2 size={20} />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-[#F4F4F5]">
                Engineering Philosophy: Fundamentals First
              </h4>
              <p className="text-xs text-[#A1A1AA]">
                Frameworks evolve rapidly; strong algorithmic foundations, clean object design, and deep understanding of databases remain timeless.
              </p>
            </div>
          </div>
          <a
            href="#projects"
            className="shrink-0 text-xs font-medium text-white bg-[#27272A] hover:bg-purple-600 px-4 py-2 rounded-lg transition-colors border border-white/10"
          >
            See Skills In Action
          </a>
        </div>
      </div>
    </section>
  );
}
