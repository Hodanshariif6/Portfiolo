import React from 'react';
import { FiArrowUp, FiGithub, FiLinkedin, FiMail, FiHeart } from 'react-icons/fi';
import { FaTiktok } from 'react-icons/fa';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#070A13] border-t border-slate-800/80 pt-16 pb-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-12">
          
          {/* Brand Logo & Tagline */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <a href="#home" className="flex items-center gap-3 mb-2 group interactive">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 via-cyan-500 to-amber-500 p-[2px] shadow-lg shadow-blue-500/20">
                <div className="w-full h-full bg-[#0F172A] rounded-[10px] flex items-center justify-center font-black text-white text-lg">
                  HS
                </div>
              </div>
              <span className="font-bold text-xl text-white">
                Hodan <span className="text-blue-500">Shariif</span>
              </span>
            </a>
            <p className="text-slate-400 text-xs max-w-sm">
              MERN Full Stack Developer • Graphic Designer • Video Editor & Content Creator
            </p>
          </div>

          {/* Social Icons Row */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/Hodanshariif6"
              target="_blank"
              rel="noreferrer"
              className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-blue-500 transition-all hover:scale-110 interactive"
              aria-label="GitHub"
            >
              <FiGithub className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com/in/hodan-shariif-559315347"
              target="_blank"
              rel="noreferrer"
              className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-blue-400 hover:border-blue-500 transition-all hover:scale-110 interactive"
              aria-label="LinkedIn"
            >
              <FiLinkedin className="w-5 h-5" />
            </a>
            <a
              href="https://www.tiktok.com/@hothann289"
              target="_blank"
              rel="noreferrer"
              className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-cyan-400 hover:border-cyan-500 transition-all hover:scale-110 interactive"
              aria-label="TikTok"
            >
              <FaTiktok className="w-5 h-5" />
            </a>
            <a
              href="mailto:hodanshariif617@gmail.com"
              className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-amber-400 hover:border-amber-500 transition-all hover:scale-110 interactive"
              aria-label="Email"
            >
              <FiMail className="w-5 h-5" />
            </a>
          </div>

          {/* Back To Top Button */}
          <button
            onClick={scrollToTop}
            className="p-3.5 rounded-2xl bg-gradient-to-tr from-blue-600 to-cyan-500 text-white shadow-lg shadow-blue-500/30 hover:scale-110 transition-transform interactive flex items-center justify-center"
            aria-label="Back to top"
            title="Back to Top"
          >
            <FiArrowUp className="w-5 h-5" />
          </button>
        </div>

        {/* Bottom Line & Copyright */}
        <div className="pt-8 border-t border-slate-800/60 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 font-mono gap-4">
          <p>© {new Date().getFullYear()} Hodan Shariif. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            Designed with <FiHeart className="w-3.5 h-3.5 text-red-500 fill-red-500" /> using React & Tailwind CSS
          </p>
        </div>

      </div>
    </footer>
  );
}
