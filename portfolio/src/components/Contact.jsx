import React, { useState } from 'react';
import { personalInfo } from '../data/portfolioData';
import { Mail, Send, Copy, Check, ArrowUpRight } from 'lucide-react';
import { TechLogo } from './TechLogos';
import { Sticker } from './Sticker';
import { Ribbon3D } from './Ribbon3D';

export const Contact = ({ onTriggerToast }) => {
  const [copiedField, setCopiedField] = useState(null);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formError, setFormError] = useState('');

  const copyToClipboard = (text, fieldName) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    if (onTriggerToast) {
      onTriggerToast(`Copied ${fieldName} to clipboard!`);
    }
    setTimeout(() => setCopiedField(null), 2500);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormError('');
    setIsSubmitting(true);
    try {
      const payload = new URLSearchParams();
      payload.append('form-name', 'contact');
      Object.entries(formData).forEach(([key, value]) => payload.append(key, value));
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: payload.toString()
      });
      if (!response.ok) throw new Error('The form submission failed.');
      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      if (onTriggerToast) onTriggerToast('Message sent successfully!');
    } catch (error) {
      setFormError('Your message could not be sent. Please email charu05.dev@gmail.com directly.');
      if (onTriggerToast) onTriggerToast('Message could not be sent. Please try the email link.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative py-24 px-4 md:px-8 bg-sky border-b-[2px] border-carbon overflow-hidden">
      {/* 3D Ribbon in background */}
      <div className="absolute inset-0 z-0 opacity-80 pointer-events-none">
        <Ribbon3D variant="compact" interactive={false} className="w-full h-full" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        
        {/* DRAMATIC HEADLINE */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block bg-sunburst px-4 py-1.5 rounded-pill border-[1.5px] border-carbon shadow-[2px_2px_0px_#000000] text-xs font-display font-black tracking-wider uppercase mb-4">
            START A CONVERSATION
          </div>
          <h2 className="font-display font-black text-carbon text-6xl sm:text-7xl md:text-8xl uppercase leading-[0.80] tracking-tight">
            LET'S BUILD <br />SOMETHING <br />
            <span className="underline decoration-electric decoration-8">TOGETHER.</span>
          </h2>
          <p className="font-body font-bold text-carbon/80 text-base sm:text-lg mt-6">
            Available for Java Full-Stack engineering roles, backend microservice architecture, and interactive React applications.
          </p>
        </div>

        {/* FLOATING STICKERS ROW */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          <Sticker name="Java" logo="java" color="sunburst" tilt="-4deg" size="md" />
          <Sticker name="Spring" logo="spring" color="mint" tilt="3deg" size="md" />
          <Sticker name="React" logo="react" color="electric" tilt="-2deg" size="md" />
          <Sticker name="MySQL" logo="mysql" color="lavender" tilt="4deg" size="md" />
        </div>

        {/* MAIN CONTACT CONTENT GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT: DIRECT CONTACT CARDS */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Email Pill Card */}
            <div 
              onClick={() => copyToClipboard(personalInfo.contact.email, "Email")}
              className="group cursor-pointer bg-paper rounded-card border-[2px] border-carbon p-5 shadow-[4px_4px_0px_#000000] hover:shadow-[6px_6px_0px_#000000] hover:-translate-y-1 transition-all"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="w-10 h-10 rounded-full bg-sunburst border border-carbon flex items-center justify-center">
                    <Mail className="w-5 h-5 text-carbon" />
                  </span>
                  <div>
                    <div className="text-[11px] font-black uppercase text-carbon/60 font-display">EMAIL ADDRESS</div>
                    <div className="font-mono font-bold text-sm sm:text-base text-carbon break-all">
                      {personalInfo.contact.email}
                    </div>
                  </div>
                </div>
                <button className="p-2 rounded-full bg-mist border border-carbon group-hover:bg-sunburst transition-colors">
                  {copiedField === "Email" ? <Check className="w-4 h-4 text-carbon" /> : <Copy className="w-4 h-4 text-carbon" />}
                </button>
              </div>
            </div>
            

            {/* LinkedIn & GitHub Links */}
            <div className="grid grid-cols-2 gap-4">
              <a
                href={personalInfo.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-paper rounded-card border-[2px] border-carbon p-4 shadow-[4px_4px_0px_#000000] hover:shadow-[6px_6px_0px_#000000] hover:-translate-y-1 transition-all flex items-center justify-between"
              >
                <div className="flex items-center gap-2">
                  <TechLogo name="linkedin" className="w-5 h-5 text-electric" />
                  <span className="font-display font-black text-sm uppercase">LinkedIn</span>
                </div>
                <ArrowUpRight className="w-4 h-4 text-carbon" />
              </a>

              <a
                href={personalInfo.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-paper rounded-card border-[2px] border-carbon p-4 shadow-[4px_4px_0px_#000000] hover:shadow-[6px_6px_0px_#000000] hover:-translate-y-1 transition-all flex items-center justify-between"
              >
                <div className="flex items-center gap-2">
                  <TechLogo name="github" className="w-5 h-5 text-carbon" />
                  <span className="font-display font-black text-sm uppercase">GitHub</span>
                </div>
                <ArrowUpRight className="w-4 h-4 text-carbon" />
              </a>
            </div>

          </div>

          {/* RIGHT: INTERACTIVE MESSAGE FORM */}
          <div className="lg:col-span-7 bg-paper rounded-card-lg border-[3px] border-carbon p-6 sm:p-8 shadow-[8px_8px_0px_#000000]">
            <h3 className="font-display font-black text-2xl sm:text-3xl text-carbon uppercase mb-4">
              SEND A DIRECT MESSAGE
            </h3>

            {isSubmitted ? (
              <div className="p-6 bg-mint rounded-card border-[2px] border-carbon text-center space-y-2">
                <div className="text-3xl">✨</div>
                <h4 className="font-display font-black text-xl text-carbon uppercase">Message Received!</h4>
                <p className="font-body text-sm font-semibold text-carbon/80">
                  Thank you for reaching out, Charu will reply to you as soon as possible.
                </p>
              </div>
            ) : (
              <form name="contact" method="POST" data-netlify="true" onSubmit={handleSubmit} className="space-y-4">
                <input type="hidden" name="form-name" value="contact" />
                <div>
                  <label className="block text-xs font-display font-black uppercase text-carbon mb-1">
                    YOUR NAME
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Alex Morgan"
                    className="w-full px-4 py-3 bg-mist rounded-card border-[1.5px] border-carbon font-body font-semibold text-sm focus:outline-none focus:bg-paper focus:ring-2 focus:ring-carbon transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-display font-black uppercase text-carbon mb-1">
                    YOUR EMAIL
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. alex@company.com"
                    className="w-full px-4 py-3 bg-mist rounded-card border-[1.5px] border-carbon font-body font-semibold text-sm focus:outline-none focus:bg-paper focus:ring-2 focus:ring-carbon transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-display font-black uppercase text-carbon mb-1">
                    PROJECT / MESSAGE
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell me about your project, team, or opportunity..."
                    className="w-full px-4 py-3 bg-mist rounded-card border-[1.5px] border-carbon font-body font-semibold text-sm focus:outline-none focus:bg-paper focus:ring-2 focus:ring-carbon transition-all resize-none"
                  ></textarea>
                </div>

                {formError && (
                  <p role="alert" className="rounded-card border border-red-700 bg-red-50 p-3 text-sm font-semibold text-red-800">
                    {formError}
                  </p>
                )}



                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-carbon text-paper rounded-pill border-[1.5px] border-carbon font-display font-black text-sm uppercase tracking-wider shadow-[4px_4px_0px_#000000] hover:shadow-[6px_6px_0px_#000000] hover:-translate-y-0.5 active:translate-y-0.5 transition-all flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-wait"
                >
                  <Send className="w-4 h-4" />
                  <span>{isSubmitting ? "SENDING..." : "SEND MESSAGE"}</span>
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
