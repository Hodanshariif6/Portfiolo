import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiAward, FiMaximize2, FiX, FiCheckCircle } from 'react-icons/fi';
import { getCertificates } from '../utils/imageLoader';

export default function Certificates() {
  const certificates = getCertificates();
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <section id="certificates" className="py-24 relative overflow-hidden bg-[#070A13]">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-mono font-semibold uppercase tracking-widest text-cyan-400 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-800/40 inline-block mb-3"
          >
            Verified Qualifications
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight"
          >
            My <span className="text-gradient">Certificates</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 text-base sm:text-lg mt-4 leading-relaxed"
          >
            Official credentials confirming expertise in Frontend Web Development and Graphic Design.
          </motion.p>
        </div>

        {/* Certificates Grid (Exactly 2 Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {certificates.map((cert, idx) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              className="glass-card rounded-3xl p-5 border border-slate-800 hover:border-blue-500/40 flex flex-col justify-between group interactive"
            >
              {/* Image Preview Container */}
              <div
                onClick={() => setSelectedCert(cert)}
                className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-slate-900 mb-5 cursor-pointer group/img"
              >
                <img
                  src={cert.src}
                  alt={cert.title}
                  className="w-full h-full object-cover group-hover/img:scale-105 transition-transform duration-500"
                />
                
                {/* Overlay hover trigger */}
                <div className="absolute inset-0 bg-slate-950/60 opacity-0 group-hover/img:opacity-100 backdrop-blur-xs transition-opacity duration-300 flex items-center justify-center gap-2">
                  <div className="px-4 py-2.5 rounded-full bg-blue-600 text-white font-bold text-xs flex items-center gap-2 shadow-lg shadow-blue-600/40">
                    <FiMaximize2 className="w-4 h-4" />
                    <span>View Fullscreen</span>
                  </div>
                </div>

                {/* Verified badge */}
                <div className="absolute top-3 left-3 bg-slate-950/80 backdrop-blur-md px-3 py-1 rounded-full border border-emerald-500/30 flex items-center gap-1.5 text-[11px] font-medium text-emerald-400">
                  <FiCheckCircle className="w-3.5 h-3.5" />
                  <span>Verified</span>
                </div>
              </div>

              {/* Certificate Info */}
              <div className="flex items-start justify-between gap-4 px-1">
                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {cert.title}
                  </h3>
                  <p className="text-xs text-slate-400 mt-1 font-mono">{cert.issuer}</p>
                </div>
                <span className="px-3 py-1 rounded-lg bg-slate-900 border border-slate-800 text-xs font-mono text-amber-400 font-bold">
                  {cert.date}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Fullscreen Lightbox Modal */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCert(null)}
            className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-xl p-4 sm:p-8 flex items-center justify-center"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full bg-slate-900 rounded-3xl p-4 sm:p-6 border border-slate-700 shadow-2xl flex flex-col items-center"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedCert(null)}
                className="absolute top-4 right-4 p-2.5 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors interactive z-10"
              >
                <FiX className="w-6 h-6" />
              </button>

              <h3 className="text-xl font-bold text-white mb-4 pr-12 text-center">
                {selectedCert.title}
              </h3>

              <div className="w-full rounded-2xl overflow-hidden max-h-[75vh] flex items-center justify-center bg-black">
                <img
                  src={selectedCert.src}
                  alt={selectedCert.title}
                  className="max-h-[75vh] w-auto object-contain"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
