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
  Phone,
  MapPin,
  Award,
  Trophy,
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
        className="relative w-full max-w-4xl bg-[#18181B] border border-[#27272A] rounded-2xl shadow-2xl overflow-hidden my-6 flex flex-col max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Control Bar */}
        <div className="p-4 bg-[#09090B] border-b border-[#27272A] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs font-semibold text-purple-400 bg-purple-950/50 border border-purple-800/40 px-2.5 py-1 rounded">
              OFFICIAL RESUME PREVIEW
            </span>
            <span className="text-xs text-[#A1A1AA] hidden sm:inline">
              Updated • Siddharth Sarda
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
        <div className="p-6 sm:p-10 overflow-y-auto bg-[#0F0F12] space-y-6 text-[#F4F4F5] font-sans">
          
          {/* Header */}
          <div className="border-b border-[#27272A] pb-5 text-center sm:text-left">
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white uppercase">
              {personalInfo.name}
            </h1>
            
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-x-4 gap-y-1.5 text-xs text-[#D4D4D8] font-mono mt-2.5">
              <span className="flex items-center gap-1">
                <Phone size={12} className="text-purple-400" />
                <span>+91-8788668577</span>
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Mail size={12} className="text-purple-400" />
                <span>siddharthsarda742@gmail.com</span>
              </span>
              <span>•</span>
              <a
                href={personalInfo.socialLinks.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1 text-cyan-400 hover:underline"
              >
                <Linkedin size={12} />
                <span>linkedin.com/in/siddharth-sarda</span>
              </a>
              <span>•</span>
              <a
                href={personalInfo.socialLinks.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1 text-purple-300 hover:underline"
              >
                <Github size={12} />
                <span>github.com/Siddharth4629</span>
              </a>
            </div>
          </div>

          {/* Profile Summary */}
          <section className="space-y-2">
            <h2 className="text-xs font-mono uppercase tracking-wider text-purple-400 font-bold border-b border-[#27272A] pb-1">
              Profile Summary
            </h2>
            <p className="text-xs sm:text-sm text-[#D4D4D8] leading-relaxed">
              {personalInfo.profileSummary}
            </p>
          </section>

          {/* Education */}
          <section className="space-y-3">
            <h2 className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold border-b border-[#27272A] pb-1">
              Education
            </h2>
            <div className="space-y-3 text-xs">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between">
                <div>
                  <span className="font-bold text-white text-sm">Parul University</span>
                  <p className="text-purple-300">Bachelor of Technology (B.Tech) – Computer Science Engineering</p>
                </div>
                <div className="text-right text-[#A1A1AA] font-mono mt-1 sm:mt-0">
                  <span className="font-semibold text-white">2023 – 2027</span> | <span>Vadodara, Gujarat</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between pt-1 border-t border-[#27272A]/50">
                <div>
                  <span className="font-bold text-white text-sm">Shroff High School and Junior College</span>
                  <p className="text-[#D4D4D8]">Maharashtra State Board – Class XII</p>
                </div>
                <div className="text-right text-[#A1A1AA] font-mono mt-1 sm:mt-0">
                  <span className="font-semibold text-emerald-400">83.17%</span> | <span>2023 • Maharashtra, India</span>
                </div>
              </div>
            </div>
          </section>

          {/* Technical Skills */}
          <section className="space-y-3">
            <h2 className="text-xs font-mono uppercase tracking-wider text-purple-400 font-bold border-b border-[#27272A] pb-1">
              Technical Skills
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              <div className="p-2.5 rounded bg-[#18181B] border border-[#27272A]">
                <span className="font-mono text-purple-300 font-semibold">Programming Languages: </span>
                <span className="text-[#D4D4D8]">Python, JavaScript, C, C++</span>
              </div>
              <div className="p-2.5 rounded bg-[#18181B] border border-[#27272A]">
                <span className="font-mono text-cyan-400 font-semibold">AI & Generative AI: </span>
                <span className="text-[#D4D4D8]">Generative AI, LLMs, Google Gemini API, Prompt Engineering</span>
              </div>
              <div className="p-2.5 rounded bg-[#18181B] border border-[#27272A]">
                <span className="font-mono text-purple-300 font-semibold">Core Concepts: </span>
                <span className="text-[#D4D4D8]">Data Structures & Algorithms, OOP, DBMS, SQL, Operating Systems</span>
              </div>
              <div className="p-2.5 rounded bg-[#18181B] border border-[#27272A]">
                <span className="font-mono text-cyan-400 font-semibold">Backend Technologies: </span>
                <span className="text-[#D4D4D8]">Node.js, Express.js, Flask, REST APIs</span>
              </div>
              <div className="p-2.5 rounded bg-[#18181B] border border-[#27272A]">
                <span className="font-mono text-purple-300 font-semibold">Web Technologies: </span>
                <span className="text-[#D4D4D8]">HTML, CSS, JavaScript, React.js, Tailwind CSS</span>
              </div>
              <div className="p-2.5 rounded bg-[#18181B] border border-[#27272A]">
                <span className="font-mono text-cyan-400 font-semibold">Databases: </span>
                <span className="text-[#D4D4D8]">MySQL, MongoDB</span>
              </div>
              <div className="p-2.5 rounded bg-[#18181B] border border-[#27272A]">
                <span className="font-mono text-purple-300 font-semibold">AI Development: </span>
                <span className="text-[#D4D4D8]">API Integration, Structured AI Outputs, Async/Await</span>
              </div>
              <div className="p-2.5 rounded bg-[#18181B] border border-[#27272A]">
                <span className="font-mono text-cyan-400 font-semibold">Tools: </span>
                <span className="text-[#D4D4D8]">VS Code, Git, GitHub, MongoDB Compass</span>
              </div>
            </div>
          </section>

          {/* Projects */}
          <section className="space-y-4">
            <h2 className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold border-b border-[#27272A] pb-1">
              Projects
            </h2>
            <div className="space-y-4 text-xs">
              
              {/* Project 1: GetCareerPilot */}
              <div className="space-y-1.5 bg-[#18181B] p-3 rounded-xl border border-[#27272A]">
                <div className="flex justify-between items-baseline">
                  <div>
                    <span className="font-bold text-white text-sm">GetCareerPilot</span>
                    <span className="text-purple-300 ml-1.5">– AI-Powered Career Guidance Platform</span>
                  </div>
                  <span className="font-mono text-[#A1A1AA]">2026</span>
                </div>
                <p className="text-[11px] font-mono text-cyan-400">AI Application Developer</p>
                <ul className="space-y-1 text-[#D4D4D8] list-disc list-inside">
                  <li>Developed an AI-powered career guidance platform using JavaScript and Google Gemini API for personalized career recommendations</li>
                  <li>Built AI features including personalized learning roadmap generation, resume skill-gap analysis, AI career mentor chatbot, and job matching</li>
                  <li>Implemented structured AI responses using JSON schema and asynchronous API calls for reliable AI-generated outputs</li>
                  <li>Designed a modular JavaScript architecture with responsive UI and LocalStorage-based persistent application state</li>
                </ul>
              </div>

              {/* Project 2: Skipline */}
              <div className="space-y-1.5 bg-[#18181B] p-3 rounded-xl border border-[#27272A]">
                <div className="flex justify-between items-baseline">
                  <div>
                    <span className="font-bold text-white text-sm">Skipline</span>
                    <span className="text-cyan-300 ml-1.5">– Smart University Queue Management System</span>
                  </div>
                  <span className="font-mono text-[#A1A1AA]">2025 – Present</span>
                </div>
                <p className="text-[11px] font-mono text-purple-400">Full Stack Developer</p>
                <ul className="space-y-1 text-[#D4D4D8] list-disc list-inside">
                  <li>Developed a smart queue and ordering platform using MERN stack technologies</li>
                  <li>Implemented digital token generation and real-time queue tracking for campus services</li>
                  <li>Built student, vendor, and admin modules to streamline order and queue management</li>
                  <li>Integrated MongoDB database and REST APIs for efficient data handling and service operations</li>
                </ul>
              </div>

              {/* Project 3: Student Management System */}
              <div className="space-y-1.5 bg-[#18181B] p-3 rounded-xl border border-[#27272A]">
                <div className="flex justify-between items-baseline">
                  <div>
                    <span className="font-bold text-white text-sm">Student Management System</span>
                  </div>
                  <span className="font-mono text-[#A1A1AA]">2024</span>
                </div>
                <p className="text-[11px] font-mono text-emerald-400">Developer – Academic Project</p>
                <ul className="space-y-1 text-[#D4D4D8] list-disc list-inside">
                  <li>Developed a CRUD-based application for managing student records</li>
                  <li>Implemented authentication, role-based access control, and optimized SQL queries</li>
                </ul>
              </div>

            </div>
          </section>

          {/* Certifications */}
          <section className="space-y-2.5">
            <h2 className="text-xs font-mono uppercase tracking-wider text-purple-400 font-bold border-b border-[#27272A] pb-1">
              Certifications
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#D4D4D8]">
              {achievementsData.certifications.map((cert, idx) => (
                <div key={idx} className="flex items-start gap-2 p-2 rounded bg-[#18181B] border border-[#27272A]">
                  <CheckCircle2 size={13} className="text-purple-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-medium text-white">{cert.title}</span>
                    <p className="text-[10px] font-mono text-[#A1A1AA]">{cert.issuer}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Achievements */}
          <section className="space-y-2">
            <h2 className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold border-b border-[#27272A] pb-1">
              Achievements
            </h2>
            <ul className="space-y-1 text-xs text-[#D4D4D8] list-disc list-inside">
              <li>Solved 100+ DSA problems involving arrays, strings, stacks, queues, and sorting algorithms</li>
              <li>Developed an AI-powered career platform integrating Google Gemini API and structured AI outputs</li>
              <li>Participated in Bharatiya Antariksh Hackathon 2025 (ISRO / Hack2Skill)</li>
            </ul>
          </section>

          {/* Soft Skills */}
          <section className="space-y-2">
            <h2 className="text-xs font-mono uppercase tracking-wider text-purple-400 font-bold border-b border-[#27272A] pb-1">
              Soft Skills
            </h2>
            <div className="flex flex-wrap gap-2 text-xs">
              {personalInfo.softSkills.map((skill, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-full bg-[#18181B] text-[#D4D4D8] border border-[#27272A] font-mono"
                >
                  {skill}
                </span>
              ))}
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}
