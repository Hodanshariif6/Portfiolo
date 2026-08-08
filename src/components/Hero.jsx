import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight, FiDownload, FiMail, FiGithub, FiLinkedin, FiVideo, FiCode, FiAward, FiLayers, FiCheckCircle } from 'react-icons/fi';
import { FaTiktok } from 'react-icons/fa';
import { getProfileImage } from '../utils/imageLoader';

const roles = ['MERN Full Stack Developer', 'Graphic Designer', 'Video Editor & Content Creator'];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const profileImg = getProfileImage();

  useEffect(() => {
    const currentRole = roles[roleIndex];
    let typingSpeed = isDeleting ? 40 : 80;

    if (!isDeleting && displayText === currentRole) {
      typingSpeed = 2200; // Pause at end of text
    } else if (isDeleting && displayText === '') {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
      typingSpeed = 400;
    }

    const timer = setTimeout(() => {
      setDisplayText((prev) => {
        if (!isDeleting) {
          if (prev === currentRole) {
            setIsDeleting(true);
            return prev;
          }
          return currentRole.substring(0, prev.length + 1);
        } else {
          return currentRole.substring(0, prev.length - 1);
        }
      });
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, roleIndex]);

  return (
    <section id="home" className="relative min-h-screen pt-28 pb-16 flex items-center justify-center overflow-hidden">
      {/* Background Animated Glowing Blobs */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-blue-600/20 rounded-full blur-[140px] pointer-events-none animate-pulse" />
      <div className="absolute bottom-10 right-10 w-[450px] h-[450px] bg-cyan-500/15 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-amber-500/10 rounded-full blur-[130px] pointer-events-none" />

      {/* Floating Geometric Background Elements */}
      <motion.div
        animate={{ y: [0, -15, 0], rotate: [0, 10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-28 left-[10%] hidden md:block opacity-30 text-blue-500"
      >
        <div className="w-12 h-12 border-2 border-blue-500 rounded-xl transform rotate-45" />
      </motion.div>
      <motion.div
        animate={{ y: [0, 20, 0], rotate: [0, -15, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-20 left-[15%] hidden md:block opacity-20 text-cyan-400"
      >
        <div className="w-16 h-16 border-2 stroke-dasharray border-cyan-400 rounded-full" />
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 flex flex-col items-start text-left"
          >
            {/* Status pill badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/60 border border-blue-500/30 text-xs font-mono text-cyan-300 mb-6 shadow-md">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span>Available for Freelance & Full-Time</span>
            </div>

            {/* Main Greeting */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.15] mb-4">
              Hello, I'm <br />
              <span className="text-gradient">Hodan Shariif</span>
            </h1>

            {/* Dynamic Typing Headline */}
            <div className="h-14 sm:h-16 flex items-center mb-6">
              <span className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-cyan-400 font-sans tracking-tight">
                {displayText}
              </span>
              <span className="w-1 h-8 sm:h-9 bg-amber-400 ml-1 animate-pulse" />
            </div>

            {/* Short Description */}
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl mb-8">
              "I build modern, responsive, and visually stunning digital experiences while helping brands grow through creative design and engaging content."
            </p>

            {/* CTA Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-10 w-full sm:w-auto">
              <a
                href="#projects"
                className="px-7 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold text-sm shadow-lg shadow-blue-600/30 hover:shadow-cyan-500/50 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2.5 interactive group"
              >
                <span>View Projects</span>
                <FiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#contact"
                className="px-7 py-3.5 rounded-xl bg-slate-900/80 border border-slate-700/80 text-white font-bold text-sm hover:bg-slate-800 hover:border-slate-600 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2.5 interactive shadow-md"
              >
                <FiDownload className="w-4 h-4 text-amber-400" />
                <span>Download CV</span>
              </a>

              <a
                href="#contact"
                className="px-6 py-3.5 rounded-xl bg-slate-900/40 border border-blue-500/20 text-cyan-300 font-semibold text-sm hover:bg-blue-900/30 hover:border-cyan-500/40 transition-all duration-300 flex items-center justify-center gap-2 interactive"
              >
                <FiMail className="w-4 h-4" />
                <span>Contact Me</span>
              </a>
            </div>

            {/* Social Links Row */}
            <div className="flex items-center gap-4 pt-4 border-t border-slate-800/80 w-full">
              <span className="text-xs text-slate-400 font-mono uppercase tracking-widest mr-2">Connect:</span>
              <a
                href="https://github.com/Hodanshariif6"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-blue-500 hover:scale-110 transition-all interactive"
                aria-label="GitHub"
              >
                <FiGithub className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com/in/hodan-shariif-559315347"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-blue-400 hover:border-blue-500 hover:scale-110 transition-all interactive"
                aria-label="LinkedIn"
              >
                <FiLinkedin className="w-4 h-4" />
              </a>
              <a
                href="https://www.tiktok.com/@hothann289"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-cyan-400 hover:border-cyan-500 hover:scale-110 transition-all interactive"
                aria-label="TikTok"
              >
                <FaTiktok className="w-4 h-4" />
              </a>
              <a
                href="mailto:hodanshariif617@gmail.com"
                className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-amber-400 hover:border-amber-500 hover:scale-110 transition-all interactive"
                aria-label="Email"
              >
                <FiMail className="w-4 h-4" />
              </a>
            </div>
          </motion.div>

          {/* Right Hero Image Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 flex flex-col items-center justify-center relative"
          >
            {/* Outer Glowing Ring */}
            <div className="relative w-72 h-72 sm:w-88 sm:h-88 lg:w-96 lg:h-96">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-blue-600 via-cyan-500 to-amber-500 blur-2xl opacity-40 animate-pulse" />
              
              {/* Profile Image Container */}
              <div className="relative w-full h-full rounded-3xl bg-slate-900 p-2.5 border border-slate-700/80 shadow-2xl overflow-hidden group">
                <img
                  src={profileImg}
                  alt="Hodan Shariif - Frontend Developer & Designer"
                  className="w-full h-full object-cover rounded-2xl group-hover:scale-105 transition-transform duration-700"
                />

                {/* Glass Badge - Top Right */}
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute top-4 right-4 bg-slate-950/80 backdrop-blur-md border border-cyan-500/30 px-3 py-2 rounded-xl flex items-center gap-2 shadow-xl"
                >
                  <FiCode className="w-4 h-4 text-cyan-400" />
                  <span className="text-xs font-bold text-white">MERN Full Stack</span>
                </motion.div>

                {/* Glass Badge - Bottom Left */}
                <motion.div
                  animate={{ y: [0, 8, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute bottom-4 left-4 bg-slate-950/80 backdrop-blur-md border border-amber-500/30 px-3 py-2 rounded-xl flex items-center gap-2 shadow-xl"
                >
                  <FiVideo className="w-4 h-4 text-amber-400" />
                  <span className="text-xs font-bold text-white">Content Creator</span>
                </motion.div>
              </div>
            </div>

            {/* Quick Metrics Bar underneath Profile */}
            <div className="grid grid-cols-4 gap-2 w-full mt-6 bg-slate-900/70 backdrop-blur-md border border-slate-800 p-3 rounded-2xl shadow-xl">
              <div className="flex flex-col items-center text-center">
                <span className="text-base sm:text-lg font-black text-cyan-400">2+</span>
                <span className="text-[10px] text-slate-400 font-medium">Certificates</span>
              </div>
              <div className="flex flex-col items-center text-center border-l border-slate-800">
                <span className="text-base sm:text-lg font-black text-blue-400">6+</span>
                <span className="text-[10px] text-slate-400 font-medium">Projects</span>
              </div>
              <div className="flex flex-col items-center text-center border-l border-slate-800">
                <span className="text-base sm:text-lg font-black text-amber-400">7+</span>
                <span className="text-[10px] text-slate-400 font-medium">Designs</span>
              </div>
              <div className="flex flex-col items-center text-center border-l border-slate-800">
                <span className="text-base sm:text-lg font-black text-purple-400">5+</span>
                <span className="text-[10px] text-slate-400 font-medium">Videos</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
