import React from 'react';
import { motion } from 'framer-motion';
import {
  GraduationCap,
  Calendar,
  School,
  Sparkles,
  MapPin,
  CheckCircle2,
} from 'lucide-react';
import { educationData } from '../data/portfolioData';

export default function Education() {
  return (
    <section id="education" className="py-24 relative bg-[#09090B] overflow-hidden">
      {/* Background ambient accents */}
      <div className="glow-purple top-1/3 -left-40 opacity-25 pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-950/40 border border-purple-800/40 text-purple-300 text-xs font-mono mb-3">
            <Sparkles size={12} />
            <span>ACADEMIC FOUNDATION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold tracking-tight text-[#F4F4F5]">
            Education
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#A1A1AA] max-w-xl font-sans">
            Formal computer science engineering coursework and pre-university academic distinction.
          </p>
          <div className="w-12 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full mt-4" />
        </div>

        {/* Timeline Container */}
        <div className="relative border-l border-[#27272A] ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-12">
          {educationData.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="relative group"
            >
              {/* Timeline Bullet Node */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#18181B] border-2 border-purple-500 flex items-center justify-center shadow-lg shadow-purple-500/20 group-hover:scale-110 transition-transform">
                <GraduationCap size={15} className="text-purple-400" />
              </div>

              {/* Education Card */}
              <div className="p-6 sm:p-7 rounded-2xl bg-[#18181B] border border-[#27272A] hover:border-purple-500/40 transition-all duration-300 shadow-xl space-y-3">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div className="flex items-center gap-2 text-xs font-mono text-purple-400">
                    <Calendar size={13} />
                    <span>{item.duration}</span>
                  </div>
                  <span className="self-start sm:self-auto text-xs font-mono font-semibold px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    {item.score}
                  </span>
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl font-heading font-bold text-white group-hover:text-purple-300 transition-colors">
                    {item.degree}
                  </h3>
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mt-1 text-sm text-cyan-400 font-medium font-sans">
                    <div className="flex items-center gap-1.5">
                      <School size={15} />
                      <span>{item.institution}</span>
                    </div>
                    {item.location && (
                      <span className="text-xs font-mono text-[#A1A1AA] flex items-center gap-1">
                        <MapPin size={12} />
                        <span>{item.location}</span>
                      </span>
                    )}
                  </div>
                </div>

                {item.board && (
                  <p className="text-xs font-mono text-[#A1A1AA]">
                    Examination Board: <span className="text-[#F4F4F5]">{item.board}</span>
                  </p>
                )}

                <p className="text-xs sm:text-sm text-[#A1A1AA] leading-relaxed pt-2 border-t border-[#27272A]/70 font-sans">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
