import React from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaJsSquare, FaHtml5, FaCss3Alt, FaBootstrap, FaGitAlt, FaGithub, FaFigma, FaLaptopCode, FaNodeJs, FaDatabase } from 'react-icons/fa';
import { SiTailwindcss, SiMongodb, SiExpress } from 'react-icons/si';
import { FiVideo, FiFigma, FiScissors, FiImage, FiFeather, FiLayout, FiFilm, FiServer } from 'react-icons/fi';

const skillCategories = [
  {
    category: 'MERN Full Stack Development1',
    icon: FaLaptopCode,
    color: 'from-blue-600 to-cyan-500',
    borderColor: 'border-blue-500/30',
    skills: [
      { name: 'React', level: 92, icon: FaReact, color: 'text-cyan-400' },
      { name: 'Node.js', level: 88, icon: FaNodeJs, color: 'text-emerald-500' },
      { name: 'Express.js', level: 86, icon: SiExpress, color: 'text-slate-300' },
      { name: 'MongoDB', level: 85, icon: SiMongodb, color: 'text-emerald-400' },
      { name: 'JavaScript (ES6+)', level: 90, icon: FaJsSquare, color: 'text-amber-400' },
      { name: 'Tailwind CSS', level: 95, icon: SiTailwindcss, color: 'text-teal-400' },
      { name: 'HTML5 & CSS3', level: 95, icon: FaHtml5, color: 'text-orange-500' },
      { name: 'RESTful APIs', level: 90, icon: FiServer, color: 'text-purple-400' },
      { name: 'Git & GitHub', level: 90, icon: FaGithub, color: 'text-white' },
    ],
  },
  {
    category: 'Graphic & UI/UX Design',
    icon: FaFigma,
    color: 'from-amber-500 to-orange-500',
    borderColor: 'border-amber-500/30',
    skills: [
      { name: 'Photoshop', level: 90, icon: FiImage, color: 'text-blue-500' },
      { name: 'Illustrator', level: 85, icon: FiFeather, color: 'text-amber-500' },
      { name: 'Canva', level: 95, icon: FiLayout, color: 'text-cyan-400' },
      { name: 'Figma', level: 88, icon: FaFigma, color: 'text-pink-400' },
    ],
  },
  {
    category: 'Video & Content Creation',
    icon: FiVideo,
    color: 'from-purple-600 to-pink-500',
    borderColor: 'border-purple-500/30',
    skills: [
      { name: 'Premiere Pro', level: 70, icon: FiVideo, color: 'text-purple-400' },
      { name: 'After Effects', level: 82, icon: FiFilm, color: 'text-indigo-400' },
      { name: 'CapCut', level: 100, icon: FiScissors, color: 'text-cyan-400' },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-[#0F172A]">
      {/* Ambient Light */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-amber-500/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-mono font-semibold uppercase tracking-widest text-amber-400 px-3 py-1 rounded-full bg-amber-950/60 border border-amber-800/40 inline-block mb-3"
          >
            Technical & Creative Expertise
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight"
          >
            My <span className="text-gradient">Skills & Tools</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 text-base sm:text-lg mt-4 leading-relaxed"
          >
            A comprehensive MERN full-stack development and creative design toolset.
          </motion.p>
        </div>

        {/* Skill Category Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {skillCategories.map((cat, catIdx) => {
            const CatIcon = cat.icon;
            return (
              <motion.div
                key={cat.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: catIdx * 0.15 }}
                className={`glass-card p-8 rounded-3xl border ${cat.borderColor} flex flex-col justify-between relative overflow-hidden`}
              >
                {/* Category Header */}
                <div>
                  <div className="flex items-center gap-4 mb-8 pb-4 border-b border-slate-800">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-tr ${cat.color} p-[1px] shadow-lg`}>
                      <div className="w-full h-full bg-slate-900 rounded-[11px] flex items-center justify-center text-white">
                        <CatIcon className="w-6 h-6" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{cat.category}</h3>
                      <span className="text-xs text-slate-400 font-mono">{cat.skills.length} Mastered Skills</span>
                    </div>
                  </div>

                  {/* Skills List with Animated Progress Bars */}
                  <div className="space-y-5">
                    {cat.skills.map((skill, skillIdx) => {
                      const SkillIcon = skill.icon;
                      return (
                        <div key={skill.name} className="flex flex-col gap-1.5">
                          <div className="flex items-center justify-between text-xs font-semibold">
                            <span className="flex items-center gap-2 text-slate-200">
                              <SkillIcon className={`w-4 h-4 ${skill.color}`} />
                              {skill.name}
                            </span>
                            <span className="text-cyan-400 font-mono">{skill.level}%</span>
                          </div>
                          <div className="w-full h-2 bg-slate-900 rounded-full overflow-hidden p-0.5 border border-slate-800">
                            <motion.div
                              initial={{ width: 0 }}
                              whileInView={{ width: `${skill.level}%` }}
                              viewport={{ once: true }}
                              transition={{ duration: 1, delay: 0.2 + skillIdx * 0.05, ease: 'easeOut' }}
                              className={`h-full bg-gradient-to-r ${cat.color} rounded-full shadow-sm`}
                            />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Footer Tag */}
                <div className="mt-8 pt-4 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400 font-mono">
                  <span>PRODUCTION READY</span>
                  <span className="text-emerald-400">ACTIVE PRACTICE</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
