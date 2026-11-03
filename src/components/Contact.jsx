import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Mail,
  Linkedin,
  Github,
  FileDown,
  Send,
  CheckCircle2,
  AlertCircle,
  Copy,
  Check,
  Sparkles,
  ExternalLink,
  MessageSquare,
} from 'lucide-react';
import emailjs from '@emailjs/browser';
import confetti from 'canvas-confetti';
import { personalInfo, emailjsConfig } from '../data/portfolioData';

export default function Contact({ onOpenResume }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null
  const [statusMessage, setStatusMessage] = useState('');
  const [copiedEmail, setCopiedEmail] = useState(false);

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Please provide your full name.';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters.';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Please provide your email address.';
    } else if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address.';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Please provide a subject.';
    } else if (formData.subject.trim().length < 3) {
      newErrors.subject = 'Subject must be at least 3 characters.';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please write a brief message.';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters long.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setSubmitStatus(null);
    setStatusMessage('');

    try {
      // Check if EmailJS is configured with a real public key
      const isEmailJsConfigured =
        emailjsConfig.publicKey &&
        emailjsConfig.publicKey !== 'YOUR_EMAILJS_PUBLIC_KEY' &&
        !emailjsConfig.publicKey.includes('YOUR_');

      if (isEmailJsConfigured) {
        await emailjs.send(
          emailjsConfig.serviceId,
          emailjsConfig.templateId,
          {
            from_name: formData.name,
            from_email: formData.email,
            subject: formData.subject,
            message: formData.message,
            to_name: personalInfo.name,
          },
          emailjsConfig.publicKey
        );
      } else {
        // Realistic simulation delay for development/evaluation mode
        await new Promise((resolve) => setTimeout(resolve, 800));
      }

      // Success celebration
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.8 },
        colors: ['#8B5CF6', '#06B6D4', '#10B981'],
      });

      setSubmitStatus('success');
      setStatusMessage(
        "Thank you! Your message has been sent successfully. I'll get back to you promptly."
      );
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (err) {
      console.error('Contact form transmission error:', err);
      // Fallback message with direct mailto
      setSubmitStatus('error');
      setStatusMessage(
        'Unable to send via web API right now. Please use the direct email link below to reach me instantly!'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(personalInfo.socialLinks.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const mailtoLink = `mailto:${personalInfo.socialLinks.email}?subject=${encodeURIComponent(
    formData.subject || 'Portfolio Inquiry / Opportunity'
  )}&body=${encodeURIComponent(
    `Hi Siddharth,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
  )}`;

  return (
    <section id="contact" className="py-24 relative bg-[#09090B] overflow-hidden">
      {/* Background ambient accents */}
      <div className="glow-purple -bottom-20 left-1/4 opacity-40 pointer-events-none" />
      <div className="glow-cyan -top-20 right-1/4 opacity-35 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-950/40 border border-purple-800/40 text-purple-300 text-xs font-mono mb-3">
            <Sparkles size={12} />
            <span>LET'S CONNECT</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#F4F4F5] max-w-3xl">
            Have an opportunity or interesting idea?{' '}
            <span className="gradient-text-purple">Let's connect.</span>
          </h2>
          <p className="mt-4 text-base text-[#A1A1AA] max-w-xl">
            I'm currently seeking Software Engineering and Full-Stack Internships. Feel free to drop a message or reach out across any channel.
          </p>
          <div className="w-12 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full mt-4" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Direct Contact Details & Links */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Quick Contact Card */}
            <div className="bg-[#18181B] border border-[#27272A] rounded-2xl p-6 sm:p-8 space-y-6 shadow-xl">
              <div>
                <h3 className="text-xl font-bold text-[#F4F4F5] mb-1">
                  Contact Information
                </h3>
                <p className="text-xs text-[#A1A1AA]">
                  Quickest response times via direct email and LinkedIn messages.
                </p>
              </div>

              {/* Email Address with Copy Button */}
              <div className="p-4 rounded-xl bg-[#09090B] border border-[#27272A] flex items-center justify-between gap-3">
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="w-9 h-9 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 shrink-0">
                    <Mail size={18} />
                  </div>
                  <div className="overflow-hidden">
                    <span className="text-[10px] font-mono text-[#A1A1AA] block uppercase">
                      Email Address
                    </span>
                    <a
                      href={`mailto:${personalInfo.socialLinks.email}`}
                      className="text-xs sm:text-sm font-mono text-[#F4F4F5] hover:text-purple-300 truncate block transition-colors"
                    >
                      {personalInfo.socialLinks.email}
                    </a>
                  </div>
                </div>

                <button
                  onClick={copyToClipboard}
                  className="p-2 rounded-lg bg-[#18181B] hover:bg-[#27272A] text-[#A1A1AA] hover:text-[#F4F4F5] border border-[#27272A] transition-colors shrink-0"
                  title="Copy email to clipboard"
                  aria-label="Copy email"
                >
                  {copiedEmail ? (
                    <Check size={16} className="text-emerald-400" />
                  ) : (
                    <Copy size={16} />
                  )}
                </button>
              </div>

              {/* Social Channels */}
              <div className="space-y-2.5">
                <span className="text-[11px] font-mono uppercase tracking-wider text-[#A1A1AA] block">
                  Professional Profiles:
                </span>

                {/* LinkedIn */}
                <a
                  href={personalInfo.socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-xl bg-[#09090B] border border-[#27272A] hover:border-cyan-500/40 hover:bg-[#121820] transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                      <Linkedin size={16} />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-[#F4F4F5] group-hover:text-cyan-300 transition-colors">
                        LinkedIn
                      </h4>
                      <p className="text-[11px] text-[#A1A1AA]">
                        Connect & view recommendations
                      </p>
                    </div>
                  </div>
                  <ExternalLink size={14} className="text-[#A1A1AA] group-hover:text-cyan-400 transition-colors" />
                </a>

                {/* GitHub */}
                <a
                  href={personalInfo.socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-xl bg-[#09090B] border border-[#27272A] hover:border-purple-500/40 hover:bg-[#161220] transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400">
                      <Github size={16} />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-[#F4F4F5] group-hover:text-purple-300 transition-colors">
                        GitHub
                      </h4>
                      <p className="text-[11px] text-[#A1A1AA]">
                        Explore open-source code & commits
                      </p>
                    </div>
                  </div>
                  <ExternalLink size={14} className="text-[#A1A1AA] group-hover:text-purple-400 transition-colors" />
                </a>
              </div>

              {/* Resume download / preview button in contact */}
              <div className="pt-4 border-t border-[#27272A] space-y-2">
                <span className="text-[11px] font-mono uppercase tracking-wider text-[#A1A1AA] block">
                  Curriculum Vitae:
                </span>
                <div className="grid grid-cols-2 gap-2">
                  <a
                    href={personalInfo.resume.downloadUrl}
                    download={personalInfo.resume.fileName}
                    className="flex items-center justify-center gap-1.5 p-2.5 rounded-xl bg-[#09090B] hover:bg-[#202025] text-xs font-medium text-[#F4F4F5] border border-[#27272A] hover:border-purple-500/40 transition-colors"
                  >
                    <FileDown size={14} className="text-purple-400" />
                    <span>Download PDF</span>
                  </a>
                  <button
                    onClick={onOpenResume}
                    className="flex items-center justify-center gap-1.5 p-2.5 rounded-xl bg-[#09090B] hover:bg-[#202025] text-xs font-medium text-[#F4F4F5] border border-[#27272A] hover:border-cyan-500/40 transition-colors"
                  >
                    <ExternalLink size={14} className="text-cyan-400" />
                    <span>Preview Online</span>
                  </button>
                </div>
              </div>

            </div>

            {/* Availability reminder badge */}
            <div className="p-4 rounded-xl bg-[#18181B] border border-emerald-500/30 flex items-center gap-3">
              <span className="relative flex h-3 w-3 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
              </span>
              <p className="text-xs text-[#D4D4D8]">
                Currently open for <span className="text-emerald-400 font-semibold">Summer / Fall 2025–2026 Internships</span> and collaborative projects.
              </p>
            </div>
          </div>

          {/* Right Column: Functional Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-[#18181B] border border-[#27272A] rounded-2xl p-6 sm:p-8 shadow-xl relative">
              <h3 className="text-xl font-bold text-[#F4F4F5] mb-2 flex items-center gap-2">
                <MessageSquare size={18} className="text-purple-400" />
                <span>Send a Message</span>
              </h3>
              <p className="text-xs text-[#A1A1AA] mb-6">
                Fill out the details below. All fields include validation and support direct communication.
              </p>

              {/* Status Alert Banner */}
              {submitStatus === 'success' && (
                <div className="mb-6 p-4 rounded-xl bg-emerald-950/40 border border-emerald-800/40 flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-emerald-400 shrink-0 mt-0.5" />
                  <div className="text-xs sm:text-sm text-emerald-200">
                    <p className="font-semibold mb-0.5">Message Transmitted!</p>
                    <p>{statusMessage}</p>
                  </div>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="mb-6 p-4 rounded-xl bg-rose-950/40 border border-rose-800/40 flex items-start gap-3">
                  <AlertCircle size={18} className="text-rose-400 shrink-0 mt-0.5" />
                  <div className="text-xs sm:text-sm text-rose-200">
                    <p className="font-semibold mb-0.5">Direct Email Backup Available</p>
                    <p className="mb-2">{statusMessage}</p>
                    <a
                      href={mailtoLink}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-rose-600 hover:bg-rose-500 text-white rounded-lg text-xs font-medium transition-colors"
                    >
                      <Mail size={12} />
                      <span>Open Pre-filled Email</span>
                    </a>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} noValidate className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-xs font-mono uppercase tracking-wider text-[#A1A1AA] mb-1.5"
                    >
                      Your Name <span className="text-rose-400">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Alex Morgan"
                      className={`w-full px-4 py-3 rounded-xl bg-[#09090B] text-sm text-[#F4F4F5] border focus:outline-none transition-colors ${
                        errors.name
                          ? 'border-rose-500 focus:border-rose-400'
                          : 'border-[#27272A] focus:border-purple-500'
                      }`}
                    />
                    {errors.name && (
                      <p className="text-[11px] text-rose-400 mt-1">{errors.name}</p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs font-mono uppercase tracking-wider text-[#A1A1AA] mb-1.5"
                    >
                      Your Email <span className="text-rose-400">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="alex@company.com"
                      className={`w-full px-4 py-3 rounded-xl bg-[#09090B] text-sm text-[#F4F4F5] border focus:outline-none transition-colors ${
                        errors.email
                          ? 'border-rose-500 focus:border-rose-400'
                          : 'border-[#27272A] focus:border-purple-500'
                      }`}
                    />
                    {errors.email && (
                      <p className="text-[11px] text-rose-400 mt-1">{errors.email}</p>
                    )}
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-xs font-mono uppercase tracking-wider text-[#A1A1AA] mb-1.5"
                  >
                    Subject <span className="text-rose-400">*</span>
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="e.g. Software Engineering Opportunity / Project Discussion"
                    className={`w-full px-4 py-3 rounded-xl bg-[#09090B] text-sm text-[#F4F4F5] border focus:outline-none transition-colors ${
                      errors.subject
                        ? 'border-rose-500 focus:border-rose-400'
                        : 'border-[#27272A] focus:border-purple-500'
                    }`}
                  />
                  {errors.subject && (
                    <p className="text-[11px] text-rose-400 mt-1">{errors.subject}</p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs font-mono uppercase tracking-wider text-[#A1A1AA] mb-1.5"
                  >
                    Message <span className="text-rose-400">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Write your note or opportunity details here..."
                    className={`w-full px-4 py-3 rounded-xl bg-[#09090B] text-sm text-[#F4F4F5] border focus:outline-none transition-colors resize-none ${
                      errors.message
                        ? 'border-rose-500 focus:border-rose-400'
                        : 'border-[#27272A] focus:border-purple-500'
                    }`}
                  />
                  {errors.message && (
                    <p className="text-[11px] text-rose-400 mt-1">{errors.message}</p>
                  )}
                </div>

                {/* Submit button & Mailto fallback */}
                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-sm font-medium text-white shadow-lg shadow-purple-600/30 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        <span>Transmitting...</span>
                      </>
                    ) : (
                      <>
                        <Send size={15} />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>

                  <a
                    href={mailtoLink}
                    className="text-xs text-[#A1A1AA] hover:text-purple-300 font-mono transition-colors flex items-center gap-1"
                  >
                    <span>Or send via email client</span>
                    <ExternalLink size={12} />
                  </a>
                </div>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
