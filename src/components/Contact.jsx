import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiPhone, FiMail, FiLinkedin, FiGithub, FiSend, FiCopy, FiCheck } from 'react-icons/fi';
import { FaTiktok } from 'react-icons/fa';
import confetti from 'canvas-confetti';

const contactDetails = [
  {
    label: 'Phone',
    value: '+252 61 391 5805',
    link: 'tel:+252613915805',
    icon: FiPhone,
    color: 'text-cyan-400',
  },
  {
    label: 'Email',
    value: 'hodanshariif617@gmail.com',
    link: 'mailto:hodanshariif617@gmail.com',
    icon: FiMail,
    color: 'text-blue-400',
  },
  {
    label: 'LinkedIn',
    value: 'hodan-shariif-559315347',
    link: 'https://linkedin.com/in/hodan-shariif-559315347',
    icon: FiLinkedin,
    color: 'text-cyan-300',
  },
  {
    label: 'GitHub',
    value: 'github.com/Hodanshariif6',
    link: 'https://github.com/Hodanshariif6',
    icon: FiGithub,
    color: 'text-amber-400',
  },
  {
    label: 'TikTok',
    value: '@hothann289',
    link: 'https://www.tiktok.com/@hothann289',
    icon: FaTiktok,
    color: 'text-pink-400',
  },
];

export default function Contact() {
  const [copiedField, setCopiedField] = useState(null);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const copyToClipboard = (text, label) => {
    navigator.clipboard.writeText(text);
    setCopiedField(label);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      
      // Confetti celebration
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
      });

      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitted(false), 5000);
    }, 1200);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-[#0F172A]">
      {/* Background glow */}
      <div className="absolute top-1/4 right-10 w-96 h-96 bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-mono font-semibold uppercase tracking-widest text-cyan-400 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-800/40 inline-block mb-3"
          >
            Get In Touch
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight"
          >
            Let's Build Something <span className="text-gradient">Amazing</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 text-base sm:text-lg mt-4 leading-relaxed"
          >
            Have a project in mind, need design work, or want to collaborate on video content? Feel free to reach out anytime!
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Contact Info Cards */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 space-y-4"
          >
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-white mb-2">Contact Information</h3>
              <p className="text-slate-400 text-sm">
                Direct channels to get in contact with me immediately.
              </p>
            </div>

            {contactDetails.map((item) => {
              const Icon = item.icon;
              const isCopied = copiedField === item.label;
              return (
                <div
                  key={item.label}
                  className="glass-card p-5 rounded-2xl border border-slate-800 flex items-center justify-between group interactive hover:border-blue-500/40 transition-all"
                >
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-4 flex-1 min-w-0"
                  >
                    <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <Icon className={`w-5 h-5 ${item.color}`} />
                    </div>
                    <div className="min-w-0">
                      <span className="text-[11px] font-mono text-slate-400 block uppercase tracking-wider">
                        {item.label}
                      </span>
                      <span className="text-sm font-semibold text-white truncate block group-hover:text-cyan-300 transition-colors">
                        {item.value}
                      </span>
                    </div>
                  </a>

                  {/* Copy button */}
                  <button
                    onClick={() => copyToClipboard(item.value, item.label)}
                    className="p-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white transition-colors interactive flex-shrink-0 ml-2"
                    title="Copy to clipboard"
                  >
                    {isCopied ? <FiCheck className="w-4 h-4 text-emerald-400" /> : <FiCopy className="w-4 h-4" />}
                  </button>
                </div>
              );
            })}
          </motion.div>

          {/* Right Column: Animated Glassmorphism Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 glass-card p-8 sm:p-10 rounded-3xl border border-slate-800 shadow-2xl relative"
          >
            <h3 className="text-2xl font-bold text-white mb-6">Send Me a Message</h3>

            {submitted && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6 p-4 rounded-xl bg-emerald-950/80 border border-emerald-500/40 text-emerald-300 text-sm font-medium flex items-center gap-3"
              >
                <FiCheck className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                <span>Thank you! Your message has been sent successfully. I will get back to you soon.</span>
              </motion.div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-mono text-slate-300 uppercase tracking-wider mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Amina Abdi"
                    className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-300 uppercase tracking-wider mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. amina@example.com"
                    className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-300 uppercase tracking-wider mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  required
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="e.g. Frontend Website Inquiry"
                  className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-300 uppercase tracking-wider mb-2">
                  Your Message
                </label>
                <textarea
                  rows={5}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Write your message details here..."
                  className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400 transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 rounded-xl bg-gradient-to-r from-blue-600 via-cyan-500 to-amber-500 text-white font-bold text-sm shadow-xl shadow-blue-600/30 hover:shadow-cyan-500/50 hover:scale-[1.01] transition-all duration-300 flex items-center justify-center gap-2.5 interactive disabled:opacity-50"
              >
                <span>{isSubmitting ? 'Sending Message...' : 'Send Message'}</span>
                <FiSend className="w-4 h-4" />
              </button>
            </form>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
