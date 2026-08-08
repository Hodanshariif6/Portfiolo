import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMaximize2, FiX, FiEye, FiFeather, FiCheckCircle } from 'react-icons/fi';
import { getGraphicDesigns } from '../utils/imageLoader';

export default function Designs() {
  const designs = getGraphicDesigns();
  const [selectedDesign, setSelectedDesign] = useState(null);
  const [activeFilter, setActiveFilter] = useState('All');

  const categories = ['All', 'Logo Design', 'Branding', 'Islamic Calligraphy', 'Packaging'];

  const filteredDesigns = activeFilter === 'All' 
    ? designs 
    : designs.filter(d => d.category.toLowerCase().includes(activeFilter.toLowerCase()) || d.title.toLowerCase().includes(activeFilter.toLowerCase()));

  return (
    <section id="designs" className="py-24 relative overflow-hidden bg-[#070A13]">
      {/* Glow blobs */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-mono font-semibold uppercase tracking-widest text-amber-400 px-3 py-1 rounded-full bg-amber-950/60 border border-amber-800/40 inline-block mb-3"
          >
            Visual Identity & Logo Design
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight"
          >
            Graphic Design & <span className="text-gradient">Logo Portfolio</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 text-base sm:text-lg mt-4 leading-relaxed"
          >
            Professional logo design, brand identity systems, vector illustrations, luxury product packaging, and promotional banners.
          </motion.p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all interactive ${
                activeFilter === cat
                  ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-lg shadow-amber-500/30 font-bold'
                  : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry Grid of Design & Logo Artworks */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {filteredDesigns.map((design, idx) => (
            <motion.div
              key={design.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="break-inside-avoid glass-card rounded-3xl p-3 border border-slate-800 overflow-hidden group interactive relative"
            >
              {/* Image Box */}
              <div
                onClick={() => setSelectedDesign(design)}
                className="relative rounded-2xl overflow-hidden bg-slate-900 cursor-pointer"
              >
                <img
                  src={design.src}
                  alt={design.title}
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                />

                {/* Logo Design Tag Badge */}
                <div className="absolute top-3 left-3 bg-slate-950/80 backdrop-blur-md px-3 py-1 rounded-full border border-amber-500/30 flex items-center gap-1.5 text-[11px] font-mono text-amber-400 font-bold">
                  <FiFeather className="w-3.5 h-3.5" />
                  <span>Logo & Branding</span>
                </div>

                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6 flex flex-col justify-end">
                  <span className="text-xs font-mono text-amber-400 font-bold uppercase tracking-wider mb-1">
                    {design.category}
                  </span>
                  <h3 className="text-lg font-bold text-white mb-3">{design.title}</h3>

                  <div className="flex items-center gap-2 text-xs font-semibold text-white">
                    <div className="w-8 h-8 rounded-full bg-amber-500 flex items-center justify-center shadow-lg shadow-amber-500/40">
                      <FiEye className="w-4 h-4 text-slate-950" />
                    </div>
                    <span>Click for High-Res Fullscreen Preview</span>
                  </div>
                </div>
              </div>

              {/* Title under card */}
              <div className="p-3">
                <h4 className="text-sm font-bold text-slate-200 group-hover:text-amber-400 transition-colors">
                  {design.title}
                </h4>
                <span className="text-[11px] text-slate-400 font-mono">{design.category}</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Fullscreen Lightbox Modal */}
      <AnimatePresence>
        {selectedDesign && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedDesign(null)}
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
                onClick={() => setSelectedDesign(null)}
                className="absolute top-4 right-4 p-2.5 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors interactive z-10"
              >
                <FiX className="w-6 h-6" />
              </button>

              <div className="text-center mb-4 pr-12">
                <h3 className="text-2xl font-bold text-white">{selectedDesign.title}</h3>
                <span className="text-xs font-mono text-amber-400">{selectedDesign.category}</span>
              </div>

              <div className="w-full rounded-2xl overflow-hidden max-h-[75vh] flex items-center justify-center bg-black">
                <img
                  src={selectedDesign.src}
                  alt={selectedDesign.title}
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
