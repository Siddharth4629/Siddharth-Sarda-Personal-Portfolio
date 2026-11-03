import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Award,
  Trophy,
  ExternalLink,
  Sparkles,
  CheckCircle2,
  Code2,
  ShieldCheck,
  FileText,
  Eye,
  ChevronDown,
  ChevronUp,
} from 'lucide-react';
import { primaryCertifications, achievementsData } from '../data/portfolioData';
import CertificateModal from './CertificateModal';

export default function Achievements() {
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  return (
    <section id="achievements" className="py-24 relative bg-[#09090B] overflow-hidden">
      {/* Background ambient accents */}
      <div className="glow-purple -top-32 right-1/4 opacity-25 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-950/40 border border-purple-800/40 text-purple-300 text-xs font-mono mb-3">
            <Sparkles size={12} />
            <span>CREDENTIALS & ACHIEVEMENTS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold tracking-tight text-[#F4F4F5]">
            Certifications & <span className="gradient-text-purple">Achievements</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#A1A1AA] max-w-2xl font-sans">
            Verified technical certifications in Artificial Intelligence, Cloud Infrastructure, and algorithmic milestones.
          </p>
          <div className="w-12 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full mt-4" />
        </div>

        {/* 1. Achievements Cards (Phase 11) */}
        <div className="mb-14">
          <h3 className="text-sm font-mono uppercase tracking-wider text-cyan-400 font-semibold mb-6 flex items-center gap-2">
            <Trophy size={16} />
            <span>Key Achievements</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {achievementsData.achievementsList.map((ach, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: idx * 0.1 }}
                className="p-6 rounded-2xl bg-[#18181B] border border-[#27272A] hover:border-cyan-500/40 transition-all flex items-start gap-4 shadow-lg group"
              >
                <div className="w-12 h-12 rounded-xl bg-cyan-950/40 border border-cyan-800/40 flex items-center justify-center text-cyan-400 shrink-0 group-hover:scale-105 transition-transform">
                  {idx === 0 ? <Code2 size={22} /> : <Trophy size={22} />}
                </div>

                <div className="space-y-1">
                  <div className="flex items-center justify-between gap-2">
                    <h4 className="text-base font-heading font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {ach.title}
                    </h4>
                    <span className="text-[10px] font-mono text-cyan-400 bg-cyan-950/60 px-2 py-0.5 rounded border border-cyan-800/30">
                      {ach.badge}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#A1A1AA] leading-relaxed font-sans">
                    {ach.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* 2. Primary Certifications (Phase 10) */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-sm font-mono uppercase tracking-wider text-purple-400 font-semibold flex items-center gap-2">
              <Award size={16} />
              <span>Verified Certifications</span>
            </h3>
            <span className="text-xs font-mono text-[#A1A1AA]">
              4 Verified Credentials
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {primaryCertifications.map((cert, idx) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: idx * 0.08 }}
                className="p-5 rounded-2xl bg-[#18181B] border border-[#27272A] hover:border-purple-500/40 transition-all flex flex-col justify-between shadow-xl group"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono text-purple-300 bg-purple-950/50 px-2 py-0.5 rounded border border-purple-800/30">
                      {cert.badge}
                    </span>
                    <span className="text-xs font-mono text-[#A1A1AA]">{cert.year}</span>
                  </div>

                  <h4 className="text-sm font-heading font-bold text-white group-hover:text-purple-300 transition-colors leading-snug">
                    {cert.title}
                  </h4>

                  <p className="text-xs text-cyan-400 font-mono">
                    {cert.issuer}
                  </p>

                  <p className="text-xs text-[#A1A1AA] leading-relaxed line-clamp-3 font-sans">
                    {cert.description}
                  </p>
                </div>

                {/* Actions */}
                <div className="pt-4 mt-4 border-t border-[#27272A] flex items-center justify-between gap-2">
                  {cert.fileUrl && (
                    <button
                      onClick={() => setSelectedCertificate(cert)}
                      className="inline-flex items-center gap-1.5 text-xs font-mono text-[#F4F4F5] hover:text-purple-300 transition-colors"
                      title="Inspect Document"
                    >
                      <Eye size={13} className="text-purple-400" />
                      <span>View File</span>
                    </button>
                  )}

                  {cert.verifyUrl ? (
                    <a
                      href={cert.verifyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-[11px] font-mono text-cyan-400 hover:text-cyan-300 transition-colors ml-auto"
                      title="Verify Online Badge"
                    >
                      <span>Verify</span>
                      <ExternalLink size={11} />
                    </a>
                  ) : (
                    <span className="text-[10px] font-mono text-emerald-400 flex items-center gap-1 ml-auto">
                      <CheckCircle2 size={11} />
                      <span>Verified</span>
                    </span>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>

      {/* Lightbox Certificate Viewer Modal */}
      {selectedCertificate && (
        <CertificateModal
          certificate={selectedCertificate}
          onClose={() => setSelectedCertificate(null)}
        />
      )}
    </section>
  );
}
