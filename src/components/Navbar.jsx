import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import {
  Menu,
  X,
  FileDown,
  Github,
  Linkedin,
  FileText,
  ExternalLink,
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Education', href: '#education' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar({ onOpenResume }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const location = useLocation();
  const navigate = useNavigate();

  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      if (!isHomePage) return;

      const sections = navLinks.map((link) => link.href.substring(1));
      const scrollPosition = window.scrollY + 140;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHomePage]);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    if (isHomePage) {
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate('/' + href);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#09090B]/90 backdrop-blur-md border-b border-[#27272A] shadow-lg shadow-black/20 py-3'
          : 'bg-transparent py-4 sm:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand: SS / Siddharth Sarda */}
          <Link
            to="/#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center gap-2.5 group focus:outline-none focus:ring-2 focus:ring-purple-500/50 rounded-lg p-1"
          >
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-gradient-to-br from-purple-600 to-cyan-500 p-[1.5px] shadow-md shadow-purple-500/20 group-hover:shadow-purple-500/40 transition-shadow">
              <div className="w-full h-full bg-[#09090B] rounded-[10px] flex items-center justify-center">
                <span className="font-heading text-xs font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  SS
                </span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-heading font-bold tracking-tight text-[#F4F4F5] group-hover:text-purple-300 transition-colors">
                {personalInfo.name}
              </span>
              <span className="text-[10px] font-mono text-[#A1A1AA]">
                {personalInfo.title}
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 bg-[#18181B]/80 border border-[#27272A] px-3 py-1.5 rounded-full shadow-inner">
            {navLinks.map((link) => {
              const isActive = isHomePage && activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={isHomePage ? link.href : '/' + link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`text-xs font-heading font-medium px-3.5 py-1.5 rounded-full transition-all duration-200 ${
                    isActive
                      ? 'bg-purple-600/20 text-purple-300 border border-purple-500/30 shadow-sm'
                      : 'text-[#A1A1AA] hover:text-[#F4F4F5] hover:bg-white/5'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Action Buttons: Resume, GitHub, LinkedIn */}
          <div className="hidden md:flex items-center gap-2.5">
            <button
              onClick={onOpenResume}
              className="flex items-center gap-1.5 text-xs font-mono font-medium text-[#F4F4F5] bg-[#18181B] hover:bg-[#27272A] border border-[#27272A] hover:border-purple-500/40 px-3 py-1.5 rounded-lg transition-all shadow-sm"
              title="View & Download Resume"
            >
              <FileText size={13} className="text-purple-400" />
              <span>Resume</span>
            </button>

            <a
              href={personalInfo.socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-[#18181B] text-[#A1A1AA] hover:text-[#F4F4F5] hover:bg-[#27272A] border border-[#27272A] hover:border-purple-500/40 transition-colors"
              aria-label="GitHub Profile"
            >
              <Github size={15} />
            </a>

            <a
              href={personalInfo.socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-[#18181B] text-[#A1A1AA] hover:text-cyan-400 hover:bg-[#27272A] border border-[#27272A] hover:border-cyan-500/40 transition-colors"
              aria-label="LinkedIn Profile"
            >
              <Linkedin size={15} />
            </a>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={onOpenResume}
              className="text-xs font-mono px-2.5 py-1 rounded bg-[#18181B] border border-[#27272A] text-purple-400"
            >
              Resume
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-[#18181B] text-[#A1A1AA] hover:text-[#F4F4F5] border border-[#27272A] transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#09090B] border-b border-[#27272A] px-4 pt-3 pb-6 space-y-3">
          <nav className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={isHomePage ? link.href : '/' + link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="px-3 py-2 rounded-lg text-sm font-heading font-medium text-[#D4D4D8] hover:text-white hover:bg-[#18181B] transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="pt-3 border-t border-[#27272A] flex items-center justify-between">
            <div className="flex items-center gap-2">
              <a
                href={personalInfo.socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-[#18181B] text-[#A1A1AA] hover:text-white border border-[#27272A]"
                aria-label="GitHub"
              >
                <Github size={16} />
              </a>
              <a
                href={personalInfo.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-[#18181B] text-cyan-400 border border-[#27272A]"
                aria-label="LinkedIn"
              >
                <Linkedin size={16} />
              </a>
            </div>

            <a
              href={personalInfo.resume.downloadUrl}
              download={personalInfo.resume.fileName}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-purple-600 text-white text-xs font-mono font-medium"
            >
              <FileDown size={13} />
              <span>PDF</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
