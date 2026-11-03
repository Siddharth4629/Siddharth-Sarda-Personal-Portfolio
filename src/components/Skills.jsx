import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Sparkles,
  Layers,
  Code2,
  Database,
  Cpu,
  Server,
  Wrench,
  Cloud,
  CheckCircle2,
} from 'lucide-react';
import { skillsData } from '../data/portfolioData';
import { renderIcon } from '../utils/IconHelper';

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', ...skillsData.map((s) => s.category)];

  const displayedCategories =
    activeCategory === 'All'
      ? skillsData
      : skillsData.filter((s) => s.category === activeCategory);

  return (
    <section id="skills" className="py-24 relative bg-[#09090B] overflow-hidden">
      {/* Background ambient accents */}
      <div className="glow-purple top-1/2 -left-36 opacity-30 pointer-events-none" />
      <div className="glow-cyan top-1/4 -right-36 opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-950/40 border border-purple-800/40 text-purple-300 text-xs font-mono mb-3">
            <Sparkles size={12} />
            <span>TECHNICAL CAPABILITIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold tracking-tight text-[#F4F4F5]">
            Technical <span className="gradient-text-purple">Skills</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#A1A1AA] max-w-2xl font-sans">
            Core programming languages, systems knowledge, databases, and AI tooling applied across production-grade full-stack architectures.
          </p>
          <div className="w-12 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full mt-4" />
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`text-xs font-mono px-3.5 py-1.5 rounded-lg transition-all duration-200 ${
                activeCategory === cat
                  ? 'bg-purple-600 text-white shadow-md shadow-purple-600/30'
                  : 'bg-[#18181B] text-[#A1A1AA] hover:text-[#F4F4F5] border border-[#27272A] hover:border-purple-500/30'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skills Grid by Category */}
        <div className="space-y-10">
          {displayedCategories.map((group, groupIdx) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: groupIdx * 0.05 }}
              className="p-6 rounded-2xl bg-[#18181B] border border-[#27272A]"
            >
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-5 pb-3 border-b border-[#27272A]">
                <div>
                  <h3 className="text-lg font-heading font-bold text-white flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-purple-500 inline-block" />
                    <span>{group.category}</span>
                  </h3>
                  <p className="text-xs text-[#A1A1AA] mt-0.5 font-sans">
                    {group.description}
                  </p>
                </div>
                <span className="text-[11px] font-mono text-cyan-400 mt-2 sm:mt-0">
                  {group.items.length} Technologies
                </span>
              </div>

              {/* Items in Category */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
                {group.items.map((skill, sIdx) => (
                  <div
                    key={sIdx}
                    className="p-3.5 rounded-xl bg-[#09090B] border border-[#27272A] hover:border-purple-500/50 hover:bg-[#111116] transition-all group flex flex-col justify-between"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div
                        className="w-8 h-8 rounded-lg flex items-center justify-center p-1.5 transition-transform group-hover:scale-110"
                        style={{
                          backgroundColor: `${skill.color}15`,
                          color: skill.color,
                        }}
                      >
                        {renderIcon(skill.icon, 18)}
                      </div>
                      <div className="w-1.5 h-1.5 rounded-full bg-[#27272A] group-hover:bg-purple-400 transition-colors" />
                    </div>

                    <div>
                      <h4 className="text-xs font-heading font-semibold text-[#F4F4F5] group-hover:text-purple-300 transition-colors">
                        {skill.name}
                      </h4>
                      <p className="text-[10px] font-mono text-[#A1A1AA] mt-0.5 truncate">
                        {skill.tag}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
