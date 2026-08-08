import React from 'react';
import { motion } from 'framer-motion';
import { FiCode, FiLayout, FiFeather, FiVideo, FiShare2, FiCheck, FiArrowRight } from 'react-icons/fi';

const services = [
  {
    title: 'MERN Full Stack Development',
    category: 'Development',
    icon: FiCode,
    color: 'from-blue-600 to-cyan-500',
    borderColor: 'border-blue-500/30',
    items: [
      'Full-Stack MERN Web Applications',
      'MongoDB & Database Architecture',
      'Express.js & Node.js REST APIs',
      'React & Interactive UI Components',
      'API Integration & Performance Tuning',
    ],
  },
  {
    title: 'Graphic Design',
    category: 'Creative Design',
    icon: FiFeather,
    color: 'from-amber-500 to-orange-500',
    borderColor: 'border-amber-500/30',
    items: [
      'Logo Design & Brand Identity',
      'Social Media Posters & Banners',
      'Marketing Flyers & Brochures',
      'UI/UX Component Systems',
    ],
  },
  {
    title: 'Video Editing',
    category: 'Post-Production',
    icon: FiVideo,
    color: 'from-purple-600 to-pink-500',
    borderColor: 'border-purple-500/30',
    items: [
      'Product Advertisement Ads',
      'Social Media Promo Reels',
      'Event Highlights & Recap Videos',
      'Cinematic Color Grading',
    ],
  },
  {
    title: 'Content Creation',
    category: 'Digital Growth',
    icon: FiShare2,
    color: 'from-emerald-500 to-teal-400',
    borderColor: 'border-teal-500/30',
    items: [
      'Viral Short-Form Content',
      'Brand Storytelling Videos',
      'Social Media Campaign Strategy',
      'Audience Engagement Media',
    ],
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 relative overflow-hidden bg-[#070A13]">
      {/* Glow blobs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-blue-600/10 rounded-full blur-[170px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-mono font-semibold uppercase tracking-widest text-cyan-400 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-800/40 inline-block mb-3"
          >
            What I Offer
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight"
          >
            Professional <span className="text-gradient">Services</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 text-base sm:text-lg mt-4 leading-relaxed"
          >
            Tailored digital services to build your online presence, elevate your brand, and produce viral media.
          </motion.p>
        </div>

        {/* 4 Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((srv, idx) => {
            const Icon = srv.icon;
            return (
              <motion.div
                key={srv.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`glass-card p-7 rounded-3xl border ${srv.borderColor} flex flex-col justify-between group interactive relative overflow-hidden`}
              >
                {/* Accent strip */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${srv.color}`} />

                <div>
                  {/* Icon */}
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-tr ${srv.color} p-[1px] mb-6 shadow-lg`}>
                    <div className="w-full h-full bg-slate-900 rounded-[14px] flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                      <Icon className="w-7 h-7" />
                    </div>
                  </div>

                  <span className="text-[11px] font-mono text-cyan-400 font-semibold uppercase tracking-wider block mb-1">
                    {srv.category}
                  </span>
                  <h3 className="text-xl font-bold text-white mb-6 group-hover:text-cyan-300 transition-colors">
                    {srv.title}
                  </h3>

                  {/* List items */}
                  <ul className="space-y-3 mb-8">
                    {srv.items.map((item) => (
                      <li key={item} className="flex items-center gap-2.5 text-xs text-slate-300">
                        <div className="w-4 h-4 rounded-full bg-blue-900/60 border border-cyan-500/40 flex items-center justify-center flex-shrink-0 text-cyan-400">
                          <FiCheck className="w-2.5 h-2.5" />
                        </div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                <a
                  href="#contact"
                  className="w-full py-3 rounded-xl bg-slate-900 border border-slate-800 text-xs font-semibold text-white group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-cyan-500 group-hover:border-transparent flex items-center justify-center gap-2 transition-all interactive"
                >
                  <span>Request Service</span>
                  <FiArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </a>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
