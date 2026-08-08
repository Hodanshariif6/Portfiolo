import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function LoadingScreen({ onComplete }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => onComplete(), 400);
          return 100;
        }
        return prev + Math.floor(Math.random() * 12) + 4;
      });
    }, 80);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <motion.div
      exit={{ opacity: 0, transition: { duration: 0.8, ease: 'easeInOut' } }}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#070A13] text-white selection:bg-none select-none"
    >
      {/* Background glow blobs */}
      <div className="absolute w-[400px] h-[400px] bg-blue-600/20 rounded-full blur-[120px] pointer-events-none animate-pulse" />
      <div className="absolute w-[300px] h-[300px] bg-cyan-500/20 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center max-w-sm w-full px-6">
        {/* Animated Brand Logo */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="mb-8 flex items-center gap-3"
        >
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-blue-600 via-cyan-500 to-amber-500 p-[2px] shadow-lg shadow-blue-500/30">
            <div className="w-full h-full bg-[#0F172A] rounded-[14px] flex items-center justify-center text-2xl font-black text-white">
              HS
            </div>
          </div>
          <div className="flex flex-col text-left">
            <span className="text-xl font-bold tracking-tight text-white">Hodan Shariif</span>
            <span className="text-xs font-medium text-cyan-400 tracking-widest uppercase">Portfolio 2026</span>
          </div>
        </motion.div>

        {/* Progress Bar Container */}
        <div className="w-full h-2 bg-slate-800/80 rounded-full overflow-hidden p-0.5 border border-slate-700/50 mb-4 shadow-inner">
          <motion.div
            className="h-full bg-gradient-to-r from-blue-600 via-cyan-400 to-amber-400 rounded-full shadow-[0_0_12px_rgba(6,182,212,0.8)]"
            style={{ width: `${Math.min(progress, 100)}%` }}
            transition={{ ease: 'easeOut' }}
          />
        </div>

        {/* Counter Percentage */}
        <div className="flex justify-between w-full text-xs font-mono text-slate-400">
          <span>INITIALIZING EXPERIENCES</span>
          <span className="text-cyan-400 font-bold">{Math.min(progress, 100)}%</span>
        </div>
      </div>
    </motion.div>
  );
}
