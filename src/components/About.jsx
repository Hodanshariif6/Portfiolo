import React from 'react';
import { motion } from 'framer-motion';
import { FiCode, FiLayout, FiFeather, FiVideo, FiShare2, FiCheckCircle, FiUsers, FiBriefcase, FiSmile } from 'react-icons/fi';

const specializations = [
  {
    title: 'MERN Full Stack Development',
    desc: 'Building performant, full-stack web applications with MongoDB, Express.js, React, Node.js, and modern CSS frameworks.',
    icon: FiCode,
    color: 'from-blue-600 to-cyan-500',
    border: 'border-blue-500/30',
  },
  {
    title: 'UI/UX Design',
    desc: 'Crafting user-centered interfaces, intuitive user journeys, wireframes, and modern visual design systems.',
    icon: FiLayout,
    color: 'from-cyan-500 to-teal-400',
    border: 'border-cyan-500/30',
  },
  {
    title: 'Graphic Design',
    desc: 'Designing eye-catching logos, social media posters, brand identity assets, and marketing graphics.',
    icon: FiFeather,
    color: 'from-amber-500 to-orange-500',
    border: 'border-amber-500/30',
  },
  {
    title: 'Video Editing',
    desc: 'Editing high-impact commercial ads, promo reels, travel vlogs, and event highlights with seamless transitions.',
    icon: FiVideo,
    color: 'from-purple-600 to-pink-500',
    border: 'border-purple-500/30',
  },
  {
    title: 'Content Creation',
    desc: 'Producing engaging social media content, brand storytelling videos, and creative online campaigns.',
    icon: FiShare2,
    color: 'from-blue-500 to-indigo-600',
    border: 'border-indigo-500/30',
  },
];

const stats = [
  { label: 'Years Experience', value: '1+', icon: FiBriefcase, color: 'text-cyan-400' },
  { label: 'Happy Clients', value: '25+', icon: FiUsers, color: 'text-blue-400' },
  { label: 'Completed Projects', value: '35+', icon: FiCheckCircle, color: 'text-amber-400' },
  { label: 'Client Satisfaction', value: '100%', icon: FiSmile, color: 'text-emerald-400' },
];

export default function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden bg-[#070A13]">
      {/* Glow blobs */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-blue-600/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-mono font-semibold uppercase tracking-widest text-cyan-400 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-800/40 inline-block mb-3"
          >
            About Me
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight"
          >
            I Design, Develop & <span className="text-gradient">Create Digital Art</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 text-base sm:text-lg mt-4 leading-relaxed"
          >
            Passionate MERN Full Stack Developer, Graphic Designer, Video Editor, and Content Creator with a focus on delivering high-quality, aesthetic, and functional web applications.
          </motion.p>
        </div>

        {/* Specializations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {specializations.map((spec, index) => {
            const Icon = spec.icon;
            return (
              <motion.div
                key={spec.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`glass-card p-7 rounded-2xl border ${spec.border} relative overflow-hidden group interactive`}
              >
                {/* Top Glowing Gradient Accent */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${spec.color} opacity-80 group-hover:opacity-100 transition-opacity`} />
                
                <div className="flex items-center justify-between mb-5">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-tr ${spec.color} p-[1px] shadow-lg`}>
                    <div className="w-full h-full bg-slate-900 rounded-[11px] flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-7 h-7" />
                    </div>
                  </div>
                  <span className="text-xs font-mono text-slate-500 font-bold">0{index + 1}</span>
                </div>

                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                  {spec.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {spec.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Animated Counter Stats Bar */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-slate-900/80 border border-slate-800/80 p-6 rounded-2xl flex flex-col items-center justify-center text-center shadow-xl hover:border-slate-700 transition-all"
              >
                <Icon className={`w-8 h-8 ${stat.color} mb-3`} />
                <span className="text-3xl sm:text-4xl font-black text-white tracking-tight mb-1">
                  {stat.value}
                </span>
                <span className="text-xs font-medium text-slate-400 uppercase tracking-wider">
                  {stat.label}
                </span>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
