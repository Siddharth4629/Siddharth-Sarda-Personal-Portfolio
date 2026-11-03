import React from 'react';
import { motion } from 'framer-motion';
import {
  GraduationCap,
  Sparkles,
  Code2,
  Database,
  Layers,
  ArrowRight,
  Server,
  Workflow,
  Cpu,
  BookOpen,
} from 'lucide-react';
import { personalInfo, educationData } from '../data/portfolioData';

export default function About() {
  const coreFocusAreas = [
    {
      title: "DSA & Problem Solving",
      desc: "Analyzing algorithmic efficiency, data structures, and asymptotic time/space complexity.",
      icon: Workflow,
      color: "#8B5CF6",
    },
    {
      title: "OOP & System Architecture",
      desc: "Structuring modular, extensible code using encapsulation, inheritance, and clean design patterns.",
      icon: Code2,
      color: "#06B6D4",
    },
    {
      title: "Backend Development",
      desc: "Building reliable REST APIs, 3NF relational schemas, indexing, and ACID transaction safety.",
      icon: Server,
      color: "#10B981",
    },
    {
      title: "Software Engineering",
      desc: "Engineering scalable, reliable applications with clean architectures and disciplined testing.",
      icon: Layers,
      color: "#F59E0B",
    },
  ];

  const academicFocusTopics = [
    "Data Structures & Algorithms",
    "Object-Oriented Programming (OOP)",
    "Database Management Systems (DBMS)",
    "Operating Systems Concepts",
    "RESTful API Design",
    "Software Engineering & Architecture",
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-[#09090B]">
      {/* Subtle ambient divider */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-[#27272A] to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-950/40 border border-purple-800/40 text-purple-300 text-xs font-mono mb-3">
            <Sparkles size={12} />
            <span>BACKGROUND & CORE FOUNDATIONS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold tracking-tight text-[#F4F4F5]">
            About <span className="gradient-text-purple">Me</span>
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full mt-3" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: CSE Profile & Core Pillars */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="p-6 sm:p-8 rounded-2xl bg-[#18181B] border border-[#27272A] space-y-4">
              <h3 className="text-lg sm:text-xl font-heading font-semibold text-[#F4F4F5] flex items-center gap-2">
                <Code2 className="text-purple-400" size={20} />
                <span>Computer Science & Engineering Focus</span>
              </h3>

              <div className="text-[#D4D4D8] leading-relaxed text-sm sm:text-base font-sans space-y-3">
                <p>
                  I am a Computer Science and Engineering undergraduate at <strong className="text-white">Parul University</strong> (Class of 2027), pursuing software development with a strong dedication to core computer science fundamentals.
                </p>
                <p>
                  My engineering journey is grounded in <strong className="text-purple-300">Data Structures and Algorithms (DSA)</strong>, <strong className="text-cyan-300">Object-Oriented Programming (OOP)</strong>, and <strong className="text-emerald-300">Backend Systems</strong>. I focus on writing modular, well-documented code, evaluating algorithmic efficiency, and building structured relational database models.
                </p>
                <p className="text-xs sm:text-sm text-[#A1A1AA]">
                  Across my projects, I apply an architecture-first approach — engineering secure RESTful APIs, enforcing relational database normalization (3NF), integrating real-time communication protocols, and building robust full-stack applications designed for reliability.
                </p>
              </div>
            </div>

            {/* Core Foundational Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {coreFocusAreas.map((focus, idx) => {
                const Icon = focus.icon;
                return (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-[#18181B] border border-[#27272A] hover:border-purple-500/40 transition-all space-y-1.5 group"
                  >
                    <div className="flex items-center gap-2">
                      <div className="p-1.5 rounded-lg bg-[#09090B] border border-[#27272A]">
                        <Icon size={16} style={{ color: focus.color }} />
                      </div>
                      <h4 className="text-xs font-heading font-bold text-[#F4F4F5] group-hover:text-purple-300 transition-colors">
                        {focus.title}
                      </h4>
                    </div>
                    <p className="text-[11px] text-[#A1A1AA] leading-relaxed font-sans pt-0.5">
                      {focus.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* Right Column: Academic Details & Core Theoretical Foundations */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="lg:col-span-5 space-y-6"
          >
            {/* Academic Card */}
            <div className="p-6 sm:p-7 rounded-2xl bg-[#18181B] border border-[#27272A] relative overflow-hidden">
              <div className="absolute top-0 right-0 w-28 h-28 bg-purple-500/10 rounded-bl-full pointer-events-none" />

              <div className="flex items-center gap-3 mb-5">
                <div className="w-11 h-11 rounded-xl bg-purple-600/15 border border-purple-500/30 flex items-center justify-center text-purple-400">
                  <GraduationCap size={24} />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-purple-400 uppercase tracking-wider">
                    Degree Program
                  </span>
                  <h4 className="text-base font-heading font-bold text-[#F4F4F5]">
                    {personalInfo.about.degree}
                  </h4>
                  <p className="text-xs text-cyan-400 font-mono mt-0.5">
                    {personalInfo.about.university}
                  </p>
                </div>
              </div>

              {/* Academic Status Metrics */}
              <div className="grid grid-cols-2 gap-3 mb-5">
                <div className="p-3 rounded-xl bg-[#09090B] border border-[#27272A]">
                  <span className="text-[10px] font-mono text-[#A1A1AA] uppercase">Graduation Year</span>
                  <div className="text-lg font-heading font-bold text-white mt-0.5">
                    {personalInfo.about.graduationYear}
                  </div>
                </div>
                <div className="p-3 rounded-xl bg-[#09090B] border border-[#27272A]">
                  <span className="text-[10px] font-mono text-[#A1A1AA] uppercase">Academic Status</span>
                  <div className="text-lg font-heading font-bold text-cyan-400 mt-0.5">
                    Undergraduate
                  </div>
                </div>
              </div>

              {/* Core Computer Science Foundations */}
              <div className="space-y-2 pt-4 border-t border-[#27272A]">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#A1A1AA] block">
                    Core CS Disciplines:
                  </span>
                  <span className="text-[10px] font-mono text-purple-400">Theory & Systems</span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {academicFocusTopics.map((topic, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 rounded-md bg-[#09090B] text-[#D4D4D8] border border-[#27272A] text-xs font-mono"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-5 pt-3 border-t border-[#27272A] flex items-center justify-between">
                <a
                  href="#education"
                  className="inline-flex items-center gap-1.5 text-xs font-mono text-purple-400 hover:text-purple-300 transition-colors"
                >
                  <span>View full academic timeline</span>
                  <ArrowRight size={12} />
                </a>
                <span className="text-[10px] font-mono text-[#71717A]">Parul Univ '27</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
