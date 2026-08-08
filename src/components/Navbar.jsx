import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX, FiSend, FiCode, FiUser, FiBriefcase, FiGrid, FiFilm, FiAward, FiLayers, FiClock, FiMail } from 'react-icons/fi';

const navLinks = [
  { name: 'Home', href: '#home', icon: FiCode },
  { name: 'About', href: '#about', icon: FiUser },
  { name: 'Skills', href: '#skills', icon: FiLayers },
  { name: 'Projects', href: '#projects', icon: FiBriefcase },
  { name: 'Designs', href: '#designs', icon: FiGrid },
  { name: 'Videos', href: '#videos', icon: FiFilm },
  { name: 'Certificates', href: '#certificates', icon: FiAward },
  { name: 'Services', href: '#services', icon: FiLayers },
  { name: 'Experience', href: '#experience', icon: FiClock },
  { name: 'Contact', href: '#contact', icon: FiMail },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Section Intersection Observer
      const sections = navLinks.map((link) => link.href.substring(1));
      const scrollPos = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i]);
        if (element && element.offsetTop <= scrollPos) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        scrolled ? 'py-3 bg-[#0F172A]/80 backdrop-blur-xl border-b border-slate-800/60 shadow-xl' : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#home" className="flex items-center gap-3 group interactive">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 via-cyan-500 to-amber-500 p-[2px] shadow-lg shadow-blue-500/20 group-hover:scale-105 transition-transform duration-300">
            <div className="w-full h-full bg-[#0F172A] rounded-[10px] flex items-center justify-center font-black text-white text-lg tracking-wider">
              HS
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-lg text-white tracking-tight group-hover:text-cyan-400 transition-colors">
              Hodan <span className="text-blue-500">Shariif</span>
            </span>
            <span className="text-[10px] text-slate-400 font-mono tracking-widest uppercase">Portfolio</span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden xl:flex items-center gap-1 bg-slate-900/60 backdrop-blur-md px-4 py-1.5 rounded-full border border-slate-800/80 shadow-inner">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                className={`relative px-3 py-1.5 text-xs font-medium rounded-full transition-all duration-300 interactive ${
                  isActive ? 'text-white font-semibold' : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activePill"
                    className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full -z-10 shadow-md shadow-blue-500/30"
                    transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                  />
                )}
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Desktop CTA Button */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href="#contact"
            className="relative group overflow-hidden px-5 py-2.5 rounded-full bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 bg-[length:200%_auto] text-white text-xs font-semibold tracking-wide shadow-lg shadow-blue-600/30 hover:shadow-cyan-500/50 transition-all duration-500 hover:bg-[position:right_center] interactive flex items-center gap-2"
          >
            <span>Contact Me</span>
            <FiSend className="w-3.5 h-3.5 group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="xl:hidden p-2.5 rounded-xl bg-slate-800/80 border border-slate-700 text-slate-300 hover:text-white focus:outline-none interactive"
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <FiX className="w-6 h-6 text-cyan-400" /> : <FiMenu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="xl:hidden overflow-hidden bg-[#0F172A]/95 backdrop-blur-2xl border-b border-slate-800 px-4 pt-4 pb-6"
          >
            <div className="grid grid-cols-2 gap-2 mb-4">
              {navLinks.map((link) => {
                const Icon = link.icon;
                const isActive = activeSection === link.href.substring(1);
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-xs font-medium transition-all ${
                      isActive
                        ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold shadow-md shadow-blue-500/20'
                        : 'bg-slate-900/60 text-slate-300 hover:bg-slate-800 hover:text-white border border-slate-800/60'
                    }`}
                  >
                    <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-cyan-400'}`} />
                    <span>{link.name}</span>
                  </a>
                );
              })}
            </div>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-blue-600 via-cyan-500 to-amber-500 text-white font-bold text-center text-xs tracking-wider uppercase shadow-lg shadow-blue-500/30 flex items-center justify-center gap-2"
            >
              <span>Contact Me</span>
              <FiSend className="w-4 h-4" />
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
