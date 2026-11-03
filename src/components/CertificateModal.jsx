import React, { useEffect } from 'react';
import { X, ExternalLink, Download, Award, Calendar, CheckCircle2 } from 'lucide-react';

export default function CertificateModal({ certificate, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (certificate) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [certificate, onClose]);

  if (!certificate) return null;

  const isPdf = certificate.fileUrl && certificate.fileUrl.endsWith('.pdf');

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-black/85 backdrop-blur-md"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl bg-[#18181B] border border-[#27272A] rounded-2xl shadow-2xl overflow-hidden my-6 flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-4 bg-[#09090B] border-b border-[#27272A] flex items-center justify-between">
          <div className="flex items-center gap-2 overflow-hidden">
            <div className="w-8 h-8 rounded-lg bg-purple-500/15 border border-purple-500/30 flex items-center justify-center text-purple-400 shrink-0">
              <Award size={16} />
            </div>
            <div className="overflow-hidden">
              <h3 className="text-sm font-bold text-[#F4F4F5] truncate">
                {certificate.title}
              </h3>
              <p className="text-[11px] font-mono text-cyan-400">
                {certificate.issuer} • {certificate.date || certificate.year}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            {certificate.verifyUrl && (
              <a
                href={certificate.verifyUrl}
                target="_blank"
                rel="noreferrer"
                className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#18181B] hover:bg-[#27272A] text-xs font-mono text-cyan-300 border border-[#27272A] transition-colors"
              >
                <span>Verify Credential</span>
                <ExternalLink size={12} />
              </a>
            )}

            <a
              href={certificate.fileUrl}
              download
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-purple-600 hover:bg-purple-500 text-xs font-medium text-white transition-colors shadow-sm"
            >
              <Download size={13} />
              <span className="hidden sm:inline">Download</span>
            </a>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-[#18181B] hover:bg-[#27272A] text-[#A1A1AA] hover:text-[#F4F4F5] border border-[#27272A] transition-colors"
              aria-label="Close Preview"
            >
              <X size={16} />
            </button>
          </div>
        </div>

        {/* Certificate Display Area */}
        <div className="p-4 sm:p-6 overflow-y-auto bg-[#09090B] flex items-center justify-center min-h-[350px]">
          {isPdf ? (
            <div className="w-full h-[65vh] flex flex-col items-center justify-center">
              <iframe
                src={`${certificate.fileUrl}#toolbar=0`}
                title={certificate.title}
                className="w-full h-full rounded-xl border border-[#27272A]"
              />
            </div>
          ) : (
            <img
              src={certificate.fileUrl}
              alt={certificate.title}
              className="max-h-[70vh] w-auto object-contain rounded-xl border border-[#27272A] shadow-lg"
            />
          )}
        </div>

        {/* Footer info */}
        <div className="p-4 bg-[#18181B] border-t border-[#27272A] flex flex-wrap items-center justify-between gap-3 text-xs">
          <div className="text-[#A1A1AA]">
            {certificate.description}
          </div>
          {certificate.credentialId && (
            <span className="font-mono text-[11px] text-purple-300 bg-purple-950/50 px-2.5 py-1 rounded border border-purple-800/40">
              ID: {certificate.credentialId}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
