import React from 'react';
import {
  ArrowUp,
  Github,
  Linkedin,
  Mail,
  Heart,
  Terminal,
  Code2,
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#09090B] border-t border-[#27272A] pt-14 pb-12 overflow-hidden">
      {/* Subtle top ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-purple-500/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-10 border-b border-[#27272A]/70">
          
          {/* Brand Info */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-2">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-600 to-cyan-500 p-[1.5px]">
                <div className="w-full h-full bg-[#09090B] rounded-[6px] flex items-center justify-center">
                  <span className="font-mono text-xs font-bold text-purple-400">
                    SS
                  </span>
                </div>
              </div>
              <span className="text-base font-bold text-[#F4F4F5]">
                {personalInfo.name}
              </span>
            </div>
            <p className="text-xs text-[#A1A1AA] max-w-sm">
              {personalInfo.title}
            </p>
            <p className="text-xs text-purple-400 font-mono">
              B.Tech Computer Science & Engineering (2023–2027)
            </p>
          </div>

          {/* Quick Page Links */}
          <div className="flex flex-wrap justify-center gap-6 text-xs text-[#A1A1AA]">
            <a href="#home" className="hover:text-[#F4F4F5] transition-colors">Home</a>
            <a href="#about" className="hover:text-[#F4F4F5] transition-colors">About</a>
            <a href="#skills" className="hover:text-[#F4F4F5] transition-colors">Skills</a>
            <a href="#projects" className="hover:text-[#F4F4F5] transition-colors">Projects</a>
            <a href="#education" className="hover:text-[#F4F4F5] transition-colors">Education</a>
            <a href="#achievements" className="hover:text-[#F4F4F5] transition-colors">Achievements</a>
            <a href="#contact" className="hover:text-[#F4F4F5] transition-colors">Contact</a>
          </div>

          {/* Social Links & Back to Top */}
          <div className="flex items-center gap-3">
            <a
              href={personalInfo.socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-[#18181B] text-[#A1A1AA] hover:text-[#F4F4F5] hover:bg-[#27272A] border border-[#27272A] hover:border-purple-500/40 transition-colors"
              aria-label="GitHub Profile"
            >
              <Github size={16} />
            </a>

            <a
              href={personalInfo.socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-[#18181B] text-[#A1A1AA] hover:text-cyan-400 hover:bg-[#27272A] border border-[#27272A] hover:border-cyan-500/40 transition-colors"
              aria-label="LinkedIn Profile"
            >
              <Linkedin size={16} />
            </a>

            <a
              href={`mailto:${personalInfo.socialLinks.email}`}
              className="p-2.5 rounded-xl bg-[#18181B] text-[#A1A1AA] hover:text-purple-400 hover:bg-[#27272A] border border-[#27272A] hover:border-purple-500/40 transition-colors"
              aria-label="Email Siddharth"
            >
              <Mail size={16} />
            </a>

            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-xl bg-[#18181B] text-[#A1A1AA] hover:text-[#F4F4F5] hover:bg-purple-600 border border-[#27272A] hover:border-purple-500 transition-all shadow-sm"
              title="Back to Top"
              aria-label="Back to Top"
            >
              <ArrowUp size={16} />
            </button>
          </div>
        </div>

        {/* Bottom copyright notice */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#71717A] font-mono">
          <div>
            © {currentYear} {personalInfo.name}. All rights reserved.
          </div>
          <div className="flex items-center gap-1.5">
            <span>Built with React, Vite & Tailwind CSS</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
