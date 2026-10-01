import React, { useState } from 'react';
import { personalInfo } from '../../data/portfolio';
import { Mail, Phone, MapPin, Linkedin, Github, Send, CheckCircle2, AlertCircle, Copy, Check } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const validate = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Please provide your full name.';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters.';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Please provide your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please provide a valid email format.';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please include a message.';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) return;

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="contact" className="py-20 sm:py-28 bg-[#F9F9FB] relative border-b border-[#E8E8EC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 pb-6 border-b border-[#E8E8EC]">
          <div>
            <div className="flex items-center gap-2 mb-2 text-xs font-mono uppercase tracking-widest text-black font-semibold">
              <span>07</span>
              <span className="text-zinc-300">/</span>
              <span>Communication</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-black tracking-tight">
              Start a Conversation
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#585860] max-w-md font-sans">
            Open for software engineering opportunities, machine learning research discussions, and technical collaborations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Direct Verified Contacts */}
          <div className="lg:col-span-5 space-y-6 text-left">
            <div className="p-8 rounded-xs bg-white border border-[#E8E8EC] space-y-6 shadow-2xs">
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-black font-bold">
                  Direct Verification Details
                </span>
                <h3 className="mt-1 text-2xl font-display font-bold text-black tracking-tight">
                  Contact Information
                </h3>
                <p className="mt-2 text-sm text-[#585860] font-sans">
                  Feel free to reach out directly via email, phone, or connect on LinkedIn and GitHub.
                </p>
              </div>

              {/* Email item */}
              <div className="p-4 rounded-2xs bg-[#F9F9FB] border border-[#E8E8EC] flex items-center justify-between gap-3">
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="w-10 h-10 rounded-2xs bg-black text-white flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-[11px] font-mono uppercase text-[#8E8E98] block font-bold">
                      Email Address
                    </span>
                    <a
                      href={`mailto:${personalInfo.email}`}
                      className="text-sm text-black hover:underline font-mono font-medium truncate block"
                    >
                      {personalInfo.email}
                    </a>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  aria-label="Copy email address"
                  className="p-2 text-black hover:bg-[#D4FF00] rounded-2xs bg-white border border-[#E8E8EC] transition-colors shrink-0"
                  title="Copy email"
                >
                  {copiedEmail ? (
                    <Check className="w-4 h-4 text-emerald-600" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              {/* Phone item */}
              <div className="p-4 rounded-2xs bg-[#F9F9FB] border border-[#E8E8EC] flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xs bg-black text-white flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[11px] font-mono uppercase text-[#8E8E98] block font-bold">
                    Phone Contact
                  </span>
                  <a
                    href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}
                    className="text-sm text-black hover:underline font-mono font-medium"
                  >
                    {personalInfo.phone}
                  </a>
                </div>
              </div>

              {/* Location item */}
              <div className="p-4 rounded-2xs bg-[#F9F9FB] border border-[#E8E8EC] flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xs bg-black text-white flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[11px] font-mono uppercase text-[#8E8E98] block font-bold">
                    Location
                  </span>
                  <span className="text-sm text-black font-medium font-sans">
                    {personalInfo.location}
                  </span>
                </div>
              </div>

              {/* Social Network Links */}
              <div className="pt-2 flex items-center gap-3">
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-2xs bg-white border border-[#E8E8EC] hover:border-black text-xs font-mono font-bold text-black transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                  <span>LinkedIn</span>
                </a>

                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-2xs bg-white border border-[#E8E8EC] hover:border-black text-xs font-mono font-bold text-black transition-colors"
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-8 rounded-xs bg-white border border-[#E8E8EC] text-left shadow-2xs">
              <div className="pb-4 border-b border-[#E8E8EC]">
                <h3 className="text-2xl font-display font-bold text-black tracking-tight">
                  Send a Direct Message
                </h3>
                <p className="mt-1 text-sm text-[#585860] font-sans">
                  Fill in the details below to dispatch an inquiry directly.
                </p>
              </div>

              {isSubmitted ? (
                <div className="py-12 space-y-4 text-center">
                  <div className="w-12 h-12 rounded-full bg-[#D4FF00] border border-black flex items-center justify-center text-black mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="text-xl font-display font-bold text-black">
                    Message Prepared
                  </h4>
                  <p className="text-sm text-[#585860] max-w-md mx-auto leading-relaxed font-sans">
                    Thank you, <span className="text-black font-bold">{formData.name}</span>. Your inquiry has been prepared. You can also open your mail client directly.
                  </p>
                  <div className="pt-4 flex flex-wrap justify-center gap-3">
                    <a
                      href={`mailto:${personalInfo.email}?subject=${encodeURIComponent(
                        `Inquiry from ${formData.name}`
                      )}&body=${encodeURIComponent(formData.message)}`}
                      className="px-6 py-3 text-xs font-mono font-bold uppercase tracking-wider text-black bg-[#D4FF00] hover:bg-[#c9f500] border border-black rounded-2xs transition-colors inline-flex items-center gap-2"
                    >
                      <Mail className="w-4 h-4" />
                      <span>Open in Mail Client</span>
                    </a>
                    <button
                      onClick={() => {
                        setIsSubmitted(false);
                        setFormData({ name: '', email: '', message: '' });
                      }}
                      className="px-6 py-3 text-xs font-mono font-bold uppercase tracking-wider text-black bg-white hover:bg-zinc-100 border border-[#E8E8EC] rounded-2xs transition-colors"
                    >
                      Send Another
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="mt-6 space-y-5">
                  {/* Name field */}
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block text-xs font-mono uppercase tracking-wider text-black font-bold mb-2"
                    >
                      Your Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => {
                        setFormData({ ...formData, name: e.target.value });
                        if (errors.name) setErrors({ ...errors, name: '' });
                      }}
                      placeholder="e.g. Alex Morgan"
                      className={`w-full px-4 py-3 rounded-2xs bg-[#F9F9FB] border text-sm text-black placeholder-zinc-400 focus:outline-none focus:border-black transition-colors ${
                        errors.name
                          ? 'border-red-500 bg-red-50/20'
                          : 'border-[#E8E8EC] focus:border-black'
                      }`}
                    />
                    {errors.name && (
                      <p className="mt-1.5 text-xs text-red-600 flex items-center gap-1 font-mono">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.name}</span>
                      </p>
                    )}
                  </div>

                  {/* Email field */}
                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block text-xs font-mono uppercase tracking-wider text-black font-bold mb-2"
                    >
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => {
                        setFormData({ ...formData, email: e.target.value });
                        if (errors.email) setErrors({ ...errors, email: '' });
                      }}
                      placeholder="e.g. alex@company.com"
                      className={`w-full px-4 py-3 rounded-2xs bg-[#F9F9FB] border text-sm text-black placeholder-zinc-400 focus:outline-none focus:border-black transition-colors ${
                        errors.email
                          ? 'border-red-500 bg-red-50/20'
                          : 'border-[#E8E8EC] focus:border-black'
                      }`}
                    />
                    {errors.email && (
                      <p className="mt-1.5 text-xs text-red-600 flex items-center gap-1 font-mono">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.email}</span>
                      </p>
                    )}
                  </div>

                  {/* Message field */}
                  <div>
                    <label
                      htmlFor="contact-message"
                      className="block text-xs font-mono uppercase tracking-wider text-black font-bold mb-2"
                    >
                      Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="contact-message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => {
                        setFormData({ ...formData, message: e.target.value });
                        if (errors.message) setErrors({ ...errors, message: '' });
                      }}
                      placeholder="Discuss project requirements, hiring opportunities, or technical inquiries..."
                      className={`w-full px-4 py-3 rounded-2xs bg-[#F9F9FB] border text-sm text-black placeholder-zinc-400 focus:outline-none focus:border-black transition-colors resize-none ${
                        errors.message
                          ? 'border-red-500 bg-red-50/20'
                          : 'border-[#E8E8EC] focus:border-black'
                      }`}
                    />
                    {errors.message && (
                      <p className="mt-1.5 text-xs text-red-600 flex items-center gap-1 font-mono">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.message}</span>
                      </p>
                    )}
                  </div>

                  {/* Submit button */}
                  <div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 px-6 rounded-xs bg-black hover:bg-[#D4FF00] hover:text-black text-white font-mono font-bold text-xs sm:text-sm tracking-wider uppercase transition-colors flex items-center justify-center gap-2 shadow-xs active:scale-[0.99] disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          <span>Dispatching...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Send Message</span>
                        </>
                      )}
                    </button>
                  </div>

                  <div className="text-[11px] text-[#8E8E98] font-mono text-center pt-2">
                    Inquiry will route directly to {personalInfo.email}.
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
