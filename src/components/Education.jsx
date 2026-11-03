import React from 'react';
import { motion } from 'framer-motion';
import {
  GraduationCap,
  Calendar,
  Award,
  Sparkles,
  BookOpen,
  School,
  CheckCircle2,
} from 'lucide-react';
import { educationData } from '../data/portfolioData';

export default function Education() {
  return (
    <section id="education" className="py-24 relative bg-[#09090B] overflow-hidden">
      {/* Background ambient accents */}
      <div className="glow-purple top-1/3 -left-40 opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-950/40 border border-purple-800/40 text-purple-300 text-xs font-mono mb-3">
            <Sparkles size={12} />
            <span>ACADEMIC BACKGROUND</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#F4F4F5]">
            Education <span className="gradient-text-purple">Timeline</span>
          </h2>
          <p className="mt-3 text-base text-[#A1A1AA] max-w-2xl">
            My formal engineering education and foundational schooling, combining academic rigor with hands-on computer science training.
          </p>
          <div className="w-12 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full mt-4" />
        </div>

        {/* Timeline Container */}
        <div className="max-w-4xl mx-auto relative">
          
          {/* Vertical Connecting Line */}
          <div className="absolute left-4 sm:left-1/2 top-4 bottom-4 w-[2px] bg-gradient-to-b from-purple-500 via-cyan-500 to-purple-800 -translate-x-1/2 hidden sm:block opacity-40" />

          <div className="space-y-12">
            {educationData.map((item, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.15 }}
                  className={`relative flex flex-col sm:flex-row items-center ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  }`}
                >
                  {/* Central Timeline Node */}
                  <div className="absolute sm:left-1/2 -translate-x-1/2 top-6 z-20 hidden sm:flex items-center justify-center">
                    <div className="w-10 h-10 rounded-full bg-[#18181B] border-2 border-purple-500 flex items-center justify-center shadow-lg shadow-purple-500/30">
                      <GraduationCap size={18} className="text-purple-400" />
                    </div>
                  </div>

                  {/* Content Card */}
                  <div className="w-full sm:w-1/2 sm:px-8">
                    <div className="bg-[#18181B] border border-[#27272A] rounded-2xl p-6 hover:border-purple-500/40 transition-all duration-300 shadow-xl group">
                      
                      {/* Top metadata pill */}
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                        <div className="flex items-center gap-1.5 text-xs font-mono text-purple-400">
                          <Calendar size={13} />
                          <span>{item.duration}</span>
                        </div>
                        <span className="text-xs font-mono font-semibold px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                          {item.score}
                        </span>
                      </div>

                      {/* Degree / Certificate Title */}
                      <h3 className="text-lg sm:text-xl font-bold text-[#F4F4F5] group-hover:text-purple-300 transition-colors">
                        {item.degree}
                      </h3>

                      {/* Institution & Board */}
                      <div className="mt-1 flex flex-wrap items-center justify-between gap-1 text-sm text-cyan-400/90 font-medium">
                        <div className="flex items-center gap-2">
                          <School size={15} />
                          <span>{item.institution}</span>
                        </div>
                        {item.location && (
                          <span className="text-xs font-mono text-[#A1A1AA]">
                            {item.location}
                          </span>
                        )}
                      </div>

                      {item.board && (
                        <div className="text-xs font-mono text-[#A1A1AA] mt-1">
                          Board: <span className="text-[#F4F4F5]">{item.board}</span>
                        </div>
                      )}

                      {/* Highlight Badge */}
                      {item.highlight && (
                        <div className="mt-3 inline-flex items-center gap-1.5 text-xs text-purple-300 bg-purple-950/40 border border-purple-800/40 px-2.5 py-1 rounded-md">
                          <CheckCircle2 size={12} className="text-purple-400" />
                          <span>{item.highlight}</span>
                        </div>
                      )}

                      {/* Description */}
                      <p className="mt-3 text-xs sm:text-sm text-[#A1A1AA] leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
