import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  ArrowUp,
  Github,
  Linkedin,
  Mail,
  Heart,
  Code2,
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const footerNavLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Education', href: '#education' },
  { name: 'Contact', href: '#contact' },
];

export default function Footer() {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#09090B] border-t border-[#27272A] py-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-[#27272A]">
          
          {/* Brand Info */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h3 className="text-lg font-heading font-bold text-white">
              {personalInfo.name}
            </h3>
            <p className="text-xs font-mono text-[#A1A1AA] mt-0.5">
              {personalInfo.title} • Parul University '27
            </p>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs font-heading font-medium text-[#A1A1AA]">
            {footerNavLinks.map((link) => (
              <a
                key={link.name}
                href={isHomePage ? link.href : '/' + link.href}
                className="hover:text-purple-300 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Social Profiles & Back to Top */}
          <div className="flex items-center gap-3">
            <a
              href={personalInfo.socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-[#18181B] text-[#A1A1AA] hover:text-white border border-[#27272A] hover:border-purple-500/40 transition-colors"
              aria-label="GitHub Profile"
            >
              <Github size={15} />
            </a>

            <a
              href={personalInfo.socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-[#18181B] text-[#A1A1AA] hover:text-cyan-400 border border-[#27272A] hover:border-cyan-500/40 transition-colors"
              aria-label="LinkedIn Profile"
            >
              <Linkedin size={15} />
            </a>

            <a
              href={`mailto:${personalInfo.socialLinks.email}`}
              className="p-2 rounded-lg bg-[#18181B] text-[#A1A1AA] hover:text-purple-400 border border-[#27272A] hover:border-purple-500/40 transition-colors"
              aria-label="Send Email"
            >
              <Mail size={15} />
            </a>

            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-[#18181B] hover:bg-[#202025] text-purple-400 hover:text-purple-300 border border-[#27272A] transition-colors ml-2"
              title="Back to Top"
              aria-label="Back to top of page"
            >
              <ArrowUp size={15} />
            </button>
          </div>

        </div>

        {/* Copyright notice */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#71717A] font-sans">
          <p>© {new Date().getFullYear()} {personalInfo.name}. All rights reserved.</p>
          <p className="flex items-center gap-1 font-mono text-[11px]">
            <span>Engineered with React, Vite & Tailwind CSS</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
