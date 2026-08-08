import React from 'react';
import { motion } from 'framer-motion';
import { FiCode, FiFeather, FiVideo, FiShare2, FiCalendar, FiMapPin } from 'react-icons/fi';

const experiences = [
  {
    role: 'MERN Full Stack Developer',
    period: '2025 - Present',
    type: 'Freelance & Contract',
    icon: FiCode,
    color: 'from-blue-600 to-cyan-500',
    borderColor: 'border-blue-500/40',
    description: 'Architecting and deploying scalable full-stack web applications using MongoDB, Express.js, React, Node.js, RESTful APIs, and Tailwind CSS.',
    highlights: ['Built 6+ MERN stack & frontend applications', 'Engineered secure backend APIs & database schemas', 'Optimized web performance & responsive interface designs'],
  },
  {
    role: 'Graphic Designer',
    period: '2026 - Present',
    type: 'Creative Design',
    icon: FiFeather,
    color: 'from-amber-500 to-orange-500',
    borderColor: 'border-amber-500/40',
    description: 'Creating high-impact visual artwork, brand logos, promotional posters, and social media marketing assets for local businesses and digital agencies.',
    highlights: ['Designed 50+ custom banners & marketing posters', 'Created complete visual identity packages', 'Expert in Photoshop, Illustrator, Canva, & Figma'],
  },
  {
    role: 'Video Editor',
    period: '2026 - Present',
    type: 'Media Production',
    icon: FiVideo,
    color: 'from-purple-600 to-pink-500',
    borderColor: 'border-purple-500/40',
    description: 'Editing commercial product advertisements, promo reels, event highlights, and vlogs with advanced transition effects, sound design, and color grading.',
    highlights: ['Edited 30+ short-form promo reels & ads', 'Proficient in Premiere Pro, After Effects, and CapCut', 'Enhanced client video engagement rates by 40%'],
  },
  {
    role: 'Content Creator',
    period: '2026 - Present',
    type: 'Digital Growth',
    icon: FiShare2,
    color: 'from-emerald-500 to-teal-400',
    borderColor: 'border-teal-500/40',
    description: 'Managing online video channels, producing creative short-form videos, brand storytelling content, and cultivating social media communities.',
    highlights: ['Active creator on TikTok @hothann289', 'Produced viral short-form media content', 'Helped brands grow audience reach through storytelling'],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-[#0F172A]">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-mono font-semibold uppercase tracking-widest text-blue-400 px-3 py-1 rounded-full bg-blue-950/60 border border-blue-800/40 inline-block mb-3"
          >
            Career Journey
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight"
          >
            Experience <span className="text-gradient">Timeline</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 text-base sm:text-lg mt-4 leading-relaxed"
          >
            A chronological timeline of my professional growth across software engineering, graphic design, and content creation.
          </motion.p>
        </div>

        {/* Animated Vertical Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Central Line */}
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 via-cyan-500 to-amber-500 -translate-x-1/2 opacity-30 hidden sm:block" />

          <div className="space-y-12">
            {experiences.map((exp, idx) => {
              const Icon = exp.icon;
              const isEven = idx % 2 === 0;
              return (
                <motion.div
                  key={exp.role}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.15 }}
                  className={`relative flex flex-col sm:flex-row items-center ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline Node Badge */}
                  <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 z-20 w-12 h-12 rounded-full bg-slate-950 border-2 border-slate-700 p-[2px] shadow-xl shadow-blue-500/20 mb-4 sm:mb-0">
                    <div className={`w-full h-full rounded-full bg-gradient-to-tr ${exp.color} flex items-center justify-center text-white`}>
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Timeline Card */}
                  <div className={`w-full sm:w-[calc(50%-2.5rem)] ${isEven ? 'sm:text-right' : 'sm:text-left'}`}>
                    <div className={`glass-card p-7 rounded-3xl border ${exp.borderColor} relative overflow-hidden group interactive`}>
                      <div className={`flex items-center gap-2 mb-2 text-xs font-mono font-bold text-cyan-400 ${isEven ? 'sm:justify-end' : 'sm:justify-start'}`}>
                        <FiCalendar className="w-3.5 h-3.5" />
                        <span>{exp.period}</span>
                        <span className="text-slate-600">•</span>
                        <span className="text-slate-400">{exp.type}</span>
                      </div>

                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                        {exp.role}
                      </h3>

                      <p className="text-slate-300 text-sm leading-relaxed mb-4">
                        {exp.description}
                      </p>

                      <ul className={`space-y-1.5 text-xs text-slate-400 ${isEven ? 'sm:items-end' : 'sm:items-start'}`}>
                        {exp.highlights.map((h, i) => (
                          <li key={i} className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
