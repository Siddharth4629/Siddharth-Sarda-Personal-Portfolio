import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Trophy,
  Award,
  BookOpen,
  Briefcase,
  Sparkles,
  ExternalLink,
  Calendar,
  CheckCircle2,
  Code2,
  Check,
} from 'lucide-react';
import { achievementsData } from '../data/portfolioData';

export default function Achievements() {
  const [activeTab, setActiveTab] = useState('achievements');

  const tabs = [
    { id: 'achievements', label: 'Achievements', icon: Trophy, count: achievementsData.achievementsList.length },
    { id: 'certifications', label: 'Certifications', icon: Award, count: achievementsData.certifications.length },
    { id: 'training', label: 'Technical Training', icon: BookOpen, count: achievementsData.technicalTraining.length },
    { id: 'experience', label: 'Work Experience', icon: Briefcase, count: 1 },
  ];

  return (
    <section id="achievements" className="py-24 relative bg-[#09090B] overflow-hidden">
      {/* Background ambient accents */}
      <div className="glow-cyan top-1/2 -right-40 opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-950/40 border border-purple-800/40 text-purple-300 text-xs font-mono mb-3">
            <Sparkles size={12} />
            <span>CREDENTIALS & TRACK RECORD</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#F4F4F5]">
            Certifications & <span className="gradient-text-purple">Achievements</span>
          </h2>
          <p className="mt-3 text-base text-[#A1A1AA] max-w-2xl">
            Verified certifications from AWS, Cisco, IBM, and ISRO/Hack2Skill, alongside competitive problem-solving and software milestones.
          </p>
          <div className="w-12 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full mt-4" />
        </div>

        {/* Tab navigation */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 text-xs sm:text-sm font-medium px-4 py-2.5 rounded-xl transition-all duration-200 ${
                  isActive
                    ? 'bg-purple-600 text-white shadow-lg shadow-purple-600/30'
                    : 'bg-[#18181B] text-[#A1A1AA] hover:text-[#F4F4F5] border border-[#27272A] hover:border-purple-500/30'
                }`}
              >
                <Icon size={16} />
                <span>{tab.label}</span>
                <span
                  className={`text-[10px] font-mono px-1.5 py-0.5 rounded-full ${
                    isActive ? 'bg-white/20 text-white' : 'bg-[#09090B] text-[#A1A1AA]'
                  }`}
                >
                  {tab.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Tab Content Panels */}
        <div className="max-w-4xl mx-auto">
          
          {/* 1. Achievements Tab */}
          {activeTab === 'achievements' && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
            >
              {achievementsData.achievementsList.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-[#18181B] border border-[#27272A] rounded-2xl p-6 hover:border-purple-500/40 transition-all shadow-xl group flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <div className="w-10 h-10 rounded-xl bg-purple-600/15 border border-purple-500/30 flex items-center justify-center text-purple-400">
                        <Trophy size={18} />
                      </div>
                      <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-purple-500/10 text-purple-300 border border-purple-500/20">
                        {item.badge}
                      </span>
                    </div>

                    <h3 className="text-base font-bold text-[#F4F4F5] group-hover:text-purple-300 transition-colors mb-2">
                      {item.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-[#A1A1AA] leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-[#27272A]/70 flex items-center gap-1.5 text-xs text-emerald-400 font-mono">
                    <CheckCircle2 size={13} />
                    <span>Verified Milestone</span>
                  </div>
                </div>
              ))}
            </motion.div>
          )}

          {/* 2. Certifications Tab */}
          {activeTab === 'certifications' && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="space-y-4"
            >
              {achievementsData.certifications.map((cert, idx) => (
                <div
                  key={idx}
                  className="bg-[#18181B] border border-[#27272A] rounded-2xl p-6 hover:border-purple-500/40 transition-all shadow-xl group"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 shrink-0">
                        <Award size={18} />
                      </div>
                      <div>
                        <h3 className="text-base font-bold text-[#F4F4F5] group-hover:text-purple-300 transition-colors">
                          {cert.title}
                        </h3>
                        <p className="text-xs font-mono text-cyan-400">
                          {cert.issuer} • {cert.year}
                        </p>
                      </div>
                    </div>

                    <span className="text-xs font-mono text-purple-400 bg-purple-500/10 px-2.5 py-0.5 rounded border border-purple-500/20 self-start sm:self-auto">
                      {cert.badge}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-[#A1A1AA] leading-relaxed mt-2 pl-12">
                    {cert.description}
                  </p>
                </div>
              ))}
            </motion.div>
          )}

          {/* 3. Technical Training Tab */}
          {activeTab === 'training' && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-4"
            >
              {achievementsData.technicalTraining.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-[#18181B] border border-[#27272A] rounded-2xl p-5 hover:border-cyan-500/40 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mb-3">
                      <BookOpen size={16} />
                    </div>
                    <h3 className="text-sm font-semibold text-[#F4F4F5] mb-2 leading-snug">
                      {item.topic}
                    </h3>
                    <p className="text-xs text-[#A1A1AA] leading-relaxed">
                      {item.focus}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-[#27272A] flex justify-between text-[11px] font-mono text-[#71717A]">
                    <span>Completed</span>
                    <span className="text-cyan-400">{item.year}</span>
                  </div>
                </div>
              ))}
            </motion.div>
          )}

          {/* 4. Experience Tab */}
          {activeTab === 'experience' && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="space-y-4"
            >
              {achievementsData.internships.map((exp, idx) => (
                <div
                  key={idx}
                  className="bg-gradient-to-br from-[#18181B] to-[#121215] border border-purple-500/30 rounded-2xl p-6 shadow-xl relative overflow-hidden"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-purple-600/20 border border-purple-500/40 flex items-center justify-center text-purple-400">
                        <Briefcase size={20} />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-[#F4F4F5]">
                          {exp.title}
                        </h3>
                        <p className="text-xs font-mono text-cyan-400 mt-0.5">
                          {exp.company}
                        </p>
                      </div>
                    </div>

                    <span className="text-xs font-mono px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30 self-start sm:self-auto flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      <span>{exp.status}</span>
                    </span>
                  </div>

                  <p className="text-sm text-[#D4D4D8] leading-relaxed mb-4">
                    {exp.description}
                  </p>

                  <div className="p-3 bg-[#09090B] rounded-xl border border-[#27272A] flex flex-wrap items-center justify-between gap-3 text-xs">
                    <span className="text-[#A1A1AA]">
                      Interested in discussing an engineering role or interview?
                    </span>
                    <a
                      href="#contact"
                      className="text-purple-400 hover:text-purple-300 font-medium inline-flex items-center gap-1"
                    >
                      <span>Reach Out via Contact Form</span>
                      <span>→</span>
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
