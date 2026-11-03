import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Mail,
  Linkedin,
  Github,
  Send,
  CheckCircle2,
  AlertCircle,
  Copy,
  Check,
  Sparkles,
  Phone,
  FileDown,
  ExternalLink,
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
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'simulated' | 'error' | null
  const [statusMessage, setStatusMessage] = useState('');
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const isEmailJsConfigured = Boolean(
    emailjsConfig.publicKey &&
    emailjsConfig.serviceId &&
    emailjsConfig.templateId &&
    !emailjsConfig.publicKey.includes('YOUR_') &&
    !emailjsConfig.serviceId.includes('YOUR_') &&
    !emailjsConfig.templateId.includes('YOUR_')
  );

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Please provide your name.';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters.';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Please provide your email address.';
    } else if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = 'Please provide a valid email address.';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Please provide a subject.';
    } else if (formData.subject.trim().length < 3) {
      newErrors.subject = 'Subject must be at least 3 characters.';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please enter your message.';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters.';
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
            reply_to: formData.email,
          },
          emailjsConfig.publicKey
        );

        confetti({
          particleCount: 80,
          spread: 60,
          origin: { y: 0.8 },
          colors: ['#8B5CF6', '#06B6D4', '#10B981'],
        });

        setSubmitStatus('success');
        setStatusMessage(
          "Thank you! Your email has been delivered directly to Siddharth via EmailJS. I will respond promptly."
        );
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        // Fallback preview mode when keys are not yet inserted
        await new Promise((resolve) => setTimeout(resolve, 600));

        confetti({
          particleCount: 60,
          spread: 50,
          origin: { y: 0.8 },
          colors: ['#8B5CF6', '#06B6D4'],
        });

        setSubmitStatus('simulated');
        setStatusMessage(
          "Message submitted! (To send directly through your mail app right now, click the 'Send via Email App' button below, or add your EmailJS keys in .env)."
        );
      }
    } catch (err) {
      console.error('EmailJS submit error:', err);
      setSubmitStatus('error');
      setStatusMessage(
        "Could not send via EmailJS gateway. You can send this message directly via your email client or write to " +
          personalInfo.contactInfo.email
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const copyToClipboard = (text, type) => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  const mailtoUrl = `mailto:${personalInfo.contactInfo.email}?subject=${encodeURIComponent(
    formData.subject || 'Portfolio Inquiry - Software Developer'
  )}&body=${encodeURIComponent(
    `Hi Siddharth,\n\nName: ${formData.name || ''}\nEmail: ${formData.email || ''}\n\nMessage:\n${formData.message || ''}\n`
  )}`;

  return (
    <section id="contact" className="py-24 relative bg-[#09090B] overflow-hidden">
      {/* Ambient background glows */}
      <div className="glow-purple -bottom-40 -left-40 opacity-30 pointer-events-none" />
      <div className="glow-cyan -top-40 -right-40 opacity-25 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-950/40 border border-purple-800/40 text-purple-300 text-xs font-mono mb-3">
            <Sparkles size={12} />
            <span>GET IN TOUCH</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold tracking-tight text-[#F4F4F5]">
            Let's Build Something <span className="gradient-text-purple">Meaningful Together.</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#A1A1AA] max-w-xl font-sans">
            I'm open to software development opportunities, internships, technical collaboration and interesting projects. Feel free to connect with me.
          </p>
          <div className="w-12 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full mt-4" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Contact & Profiles */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 sm:p-8 rounded-2xl bg-[#18181B] border border-[#27272A] space-y-6">
              <div>
                <h3 className="text-xl font-heading font-bold text-white mb-1">
                  Contact Information
                </h3>
                <p className="text-xs text-[#A1A1AA] font-sans">
                  Reach out through email, phone, or connect on professional networks.
                </p>
              </div>

              {/* Email item */}
              <div className="p-4 rounded-xl bg-[#09090B] border border-[#27272A] flex items-center justify-between gap-3">
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="w-10 h-10 rounded-lg bg-purple-600/10 border border-purple-500/20 flex items-center justify-center text-purple-400 shrink-0">
                    <Mail size={18} />
                  </div>
                  <div className="overflow-hidden">
                    <span className="text-[10px] font-mono uppercase text-[#A1A1AA] block">Direct Email</span>
                    <a
                      href={`mailto:${personalInfo.contactInfo.email}`}
                      className="text-xs sm:text-sm font-mono text-white hover:text-purple-300 transition-colors truncate block"
                    >
                      {personalInfo.contactInfo.email}
                    </a>
                  </div>
                </div>

                <button
                  onClick={() => copyToClipboard(personalInfo.contactInfo.email, 'email')}
                  className="p-2 rounded-lg bg-[#18181B] hover:bg-[#27272A] text-[#A1A1AA] hover:text-white border border-[#27272A] transition-colors shrink-0 cursor-pointer"
                  title="Copy email to clipboard"
                >
                  {copiedEmail ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
                </button>
              </div>

              {/* Phone item */}
              <div className="p-4 rounded-xl bg-[#09090B] border border-[#27272A] flex items-center justify-between gap-3">
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="w-10 h-10 rounded-lg bg-cyan-600/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 shrink-0">
                    <Phone size={18} />
                  </div>
                  <div className="overflow-hidden">
                    <span className="text-[10px] font-mono uppercase text-[#A1A1AA] block">Phone / WhatsApp</span>
                    <a
                      href={`tel:${personalInfo.contactInfo.phone}`}
                      className="text-xs sm:text-sm font-mono text-white hover:text-cyan-300 transition-colors truncate block"
                    >
                      {personalInfo.contactInfo.phone}
                    </a>
                  </div>
                </div>

                <button
                  onClick={() => copyToClipboard(personalInfo.contactInfo.phone, 'phone')}
                  className="p-2 rounded-lg bg-[#18181B] hover:bg-[#27272A] text-[#A1A1AA] hover:text-white border border-[#27272A] transition-colors shrink-0 cursor-pointer"
                  title="Copy phone to clipboard"
                >
                  {copiedPhone ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
                </button>
              </div>

              {/* Social Profiles Grid */}
              <div className="pt-2 border-t border-[#27272A]">
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#A1A1AA] block mb-3">
                  Professional Channels:
                </span>
                <div className="grid grid-cols-2 gap-3">
                  <a
                    href={personalInfo.socialLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-[#09090B] border border-[#27272A] hover:border-cyan-500/40 text-xs font-mono text-[#D4D4D8] flex items-center gap-2 transition-all group"
                  >
                    <Linkedin size={16} className="text-cyan-400 group-hover:scale-110 transition-transform" />
                    <span>LinkedIn</span>
                  </a>

                  <a
                    href={personalInfo.socialLinks.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-[#09090B] border border-[#27272A] hover:border-purple-500/40 text-xs font-mono text-[#D4D4D8] flex items-center gap-2 transition-all group"
                  >
                    <Github size={16} className="text-purple-400 group-hover:scale-110 transition-transform" />
                    <span>GitHub</span>
                  </a>
                </div>
              </div>

              {/* Download Resume Link */}
              <div className="pt-2 border-t border-[#27272A]">
                <a
                  href={personalInfo.resume.downloadUrl}
                  download={personalInfo.resume.fileName}
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-[#09090B] hover:bg-[#202025] border border-[#27272A] text-xs font-mono text-[#D4D4D8] transition-colors"
                >
                  <FileDown size={15} className="text-purple-400" />
                  <span>Download Latest Resume (PDF)</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Functional Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-[#18181B] border border-[#27272A]">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                <h3 className="text-xl font-heading font-bold text-white">
                  Send a Message
                </h3>
                <span className="text-[11px] font-mono text-purple-400 bg-purple-950/40 px-2 py-0.5 rounded border border-purple-800/30 self-start sm:self-auto">
                  {isEmailJsConfigured ? "EmailJS Gateway Active" : "Direct Email Ready"}
                </span>
              </div>
              
              <p className="text-xs text-[#A1A1AA] mb-6 font-sans">
                Fill in the details below and I'll respond as soon as possible.
              </p>

              {submitStatus === 'success' && (
                <div className="mb-6 p-4 rounded-xl bg-emerald-950/40 border border-emerald-800/40 flex items-start gap-3 text-xs text-emerald-300">
                  <CheckCircle2 size={18} className="shrink-0 mt-0.5" />
                  <span>{statusMessage}</span>
                </div>
              )}

              {submitStatus === 'simulated' && (
                <div className="mb-6 p-4 rounded-xl bg-purple-950/40 border border-purple-800/40 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-purple-300">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 size={16} className="shrink-0 mt-0.5 text-purple-400" />
                    <span>{statusMessage}</span>
                  </div>
                  <a
                    href={mailtoUrl}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-purple-600 hover:bg-purple-500 text-white font-mono text-[11px] shrink-0"
                  >
                    <Mail size={12} />
                    <span>Open in Email App</span>
                  </a>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="mb-6 p-4 rounded-xl bg-rose-950/40 border border-rose-800/40 flex items-start gap-3 text-xs text-rose-300">
                  <AlertCircle size={18} className="shrink-0 mt-0.5" />
                  <span>{statusMessage}</span>
                </div>
              )}

              <form onSubmit={handleSubmit} noValidate className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name Field */}
                  <div className="space-y-1.5">
                    <label htmlFor="contact-name" className="text-xs font-mono text-[#D4D4D8]">
                      Your Name <span className="text-purple-400">*</span>
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Alex Morgan"
                      className={`w-full px-4 py-2.5 rounded-xl bg-[#09090B] border text-xs text-white placeholder-[#71717A] focus:outline-none focus:ring-1 transition-all ${
                        errors.name
                          ? 'border-rose-500 focus:ring-rose-500'
                          : 'border-[#27272A] focus:border-purple-500 focus:ring-purple-500'
                      }`}
                    />
                    {errors.name && (
                      <p className="text-[11px] font-mono text-rose-400">{errors.name}</p>
                    )}
                  </div>

                  {/* Email Field */}
                  <div className="space-y-1.5">
                    <label htmlFor="contact-email" className="text-xs font-mono text-[#D4D4D8]">
                      Your Email <span className="text-purple-400">*</span>
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. alex@example.com"
                      className={`w-full px-4 py-2.5 rounded-xl bg-[#09090B] border text-xs text-white placeholder-[#71717A] focus:outline-none focus:ring-1 transition-all ${
                        errors.email
                          ? 'border-rose-500 focus:ring-rose-500'
                          : 'border-[#27272A] focus:border-purple-500 focus:ring-purple-500'
                      }`}
                    />
                    {errors.email && (
                      <p className="text-[11px] font-mono text-rose-400">{errors.email}</p>
                    )}
                  </div>
                </div>

                {/* Subject Field */}
                <div className="space-y-1.5">
                  <label htmlFor="contact-subject" className="text-xs font-mono text-[#D4D4D8]">
                    Subject <span className="text-purple-400">*</span>
                  </label>
                  <input
                    id="contact-subject"
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="e.g. Graduate Software Engineer Role Inquiry"
                    className={`w-full px-4 py-2.5 rounded-xl bg-[#09090B] border text-xs text-white placeholder-[#71717A] focus:outline-none focus:ring-1 transition-all ${
                      errors.subject
                        ? 'border-rose-500 focus:ring-rose-500'
                        : 'border-[#27272A] focus:border-purple-500 focus:ring-purple-500'
                    }`}
                  />
                  {errors.subject && (
                    <p className="text-[11px] font-mono text-rose-400">{errors.subject}</p>
                  )}
                </div>

                {/* Message Field */}
                <div className="space-y-1.5">
                  <label htmlFor="contact-message" className="text-xs font-mono text-[#D4D4D8]">
                    Message <span className="text-purple-400">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project, team opportunity, or idea..."
                    className={`w-full px-4 py-2.5 rounded-xl bg-[#09090B] border text-xs text-white placeholder-[#71717A] focus:outline-none focus:ring-1 transition-all resize-none ${
                      errors.message
                        ? 'border-rose-500 focus:ring-rose-500'
                        : 'border-[#27272A] focus:border-purple-500 focus:ring-purple-500'
                    }`}
                  />
                  {errors.message && (
                    <p className="text-[11px] font-mono text-rose-400">{errors.message}</p>
                  )}
                </div>

                {/* Buttons Row */}
                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-purple-600 hover:bg-purple-500 disabled:opacity-50 text-white font-heading font-medium text-xs shadow-md shadow-purple-600/20 transition-all cursor-pointer"
                  >
                    <Send size={14} className={isSubmitting ? 'animate-pulse' : ''} />
                    <span>{isSubmitting ? 'Sending Message...' : 'Send Message'}</span>
                  </button>

                  <a
                    href={mailtoUrl}
                    className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-[#18181B] hover:bg-[#202025] text-[#D4D4D8] hover:text-white border border-[#27272A] hover:border-purple-500/30 text-xs font-mono transition-colors"
                    title="Send using your default email application"
                  >
                    <Mail size={14} className="text-cyan-400" />
                    <span>Send via Email App</span>
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
