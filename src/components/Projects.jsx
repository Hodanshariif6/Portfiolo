import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiExternalLink, FiGithub, FiLayers, FiX, FiChevronLeft, FiChevronRight, FiGrid, FiArrowUpRight } from 'react-icons/fi';
import { getProjects } from '../utils/imageLoader';

export default function Projects() {
  const projects = getProjects();
  const [activeModalProject, setActiveModalProject] = useState(null);
  const [galleryIndex, setGalleryIndex] = useState(0);

  const openGalleryModal = (project) => {
    setActiveModalProject(project);
    setGalleryIndex(0);
  };

  const nextGalleryImage = () => {
    if (!activeModalProject) return;
    setGalleryIndex((prev) => (prev + 1) % activeModalProject.gallery.length);
  };

  const prevGalleryImage = () => {
    if (!activeModalProject) return;
    setGalleryIndex((prev) => (prev - 1 + activeModalProject.gallery.length) % activeModalProject.gallery.length);
  };

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-[#0F172A]">
      {/* Background glow blobs */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-mono font-semibold uppercase tracking-widest text-blue-400 px-3 py-1 rounded-full bg-blue-950/60 border border-blue-800/40 inline-block mb-3"
          >
            Featured Portfolio
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight"
          >
            My <span className="text-gradient">Featured Projects</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 text-base sm:text-lg mt-4 leading-relaxed"
          >
            A showcase of 6 completed web development projects engineered with modern frameworks and responsive design principles.
          </motion.p>
        </div>

        {/* 6 Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {projects.map((proj, idx) => (
            <motion.div
              key={proj.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-card rounded-3xl border border-slate-800/90 flex flex-col justify-between overflow-hidden group interactive"
            >
              {/* Cover Image */}
              <div
                onClick={() => openGalleryModal(proj)}
                className="relative aspect-[16/10] overflow-hidden bg-slate-900 cursor-pointer group/img"
              >
                <img
                  src={proj.cover}
                  alt={proj.title}
                  className="w-full h-full object-cover group-hover/img:scale-105 transition-transform duration-500"
                />

                {/* Number Badge */}
                <div className="absolute top-3 left-3 w-8 h-8 rounded-xl bg-slate-950/80 backdrop-blur-md border border-slate-700/60 flex items-center justify-center font-mono font-bold text-xs text-cyan-400">
                  {idx + 1}
                </div>

                {/* View Gallery Hover Badge */}
                <div className="absolute inset-0 bg-slate-950/60 opacity-0 group-hover/img:opacity-100 backdrop-blur-xs transition-opacity duration-300 flex items-center justify-center">
                  <span className="px-4 py-2 rounded-full bg-blue-600 text-white font-bold text-xs flex items-center gap-2 shadow-lg shadow-blue-600/40">
                    <FiGrid className="w-4 h-4" />
                    <span>View Gallery ({proj.gallery.length} Images)</span>
                  </span>
                </div>
              </div>

              {/* Content Body */}
              <div className="p-6 flex flex-col flex-grow justify-between">
                <div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                    {proj.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-4 line-clamp-3">
                    {proj.description}
                  </p>
                </div>

                {/* Tech Pills */}
                <div>
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {proj.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-[11px] font-mono text-cyan-400"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Buttons Action Row */}
                  <div className="flex items-center gap-3 pt-4 border-t border-slate-800/80">
                    <a
                      href={proj.demoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs flex items-center justify-center gap-2 transition-colors interactive shadow-md shadow-blue-600/20"
                    >
                      <span>Live Demo</span>
                      <FiExternalLink className="w-3.5 h-3.5" />
                    </a>

                    <a
                      href={proj.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700 transition-colors interactive"
                      aria-label="GitHub Code"
                    >
                      <FiGithub className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* GitHub Visit Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center p-8 rounded-3xl bg-gradient-to-r from-blue-900/40 via-cyan-900/30 to-purple-900/40 border border-blue-500/30 shadow-2xl backdrop-blur-md"
        >
          <h3 className="text-xl font-bold text-white mb-2">Want to see more projects?</h3>
          <p className="text-slate-300 text-sm mb-6">
            If you want to explore more open-source repositories and experimental code, visit my GitHub.
          </p>
          <a
            href="https://github.com/Hodanshariif6"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-3 px-8 py-3.5 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold text-sm shadow-xl shadow-blue-600/30 hover:scale-105 transition-transform interactive"
          >
            <FiGithub className="w-5 h-5" />
            <span>github.com/Hodanshariif6</span>
            <FiArrowUpRight className="w-4 h-4" />
          </a>
        </motion.div>

      </div>

      {/* Project Image Gallery Modal */}
      <AnimatePresence>
        {activeModalProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveModalProject(null)}
            className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-xl p-4 sm:p-8 flex items-center justify-center"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-5xl w-full bg-slate-900 rounded-3xl p-6 border border-slate-700 shadow-2xl flex flex-col"
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveModalProject(null)}
                className="absolute top-4 right-4 p-2.5 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors interactive z-20"
              >
                <FiX className="w-6 h-6" />
              </button>

              <div className="mb-4 pr-12">
                <h3 className="text-2xl font-bold text-white">{activeModalProject.title}</h3>
                <p className="text-xs font-mono text-cyan-400 mt-1">
                  Image {galleryIndex + 1} of {activeModalProject.gallery.length}
                </p>
              </div>

              {/* Main Image Slider Screen */}
              <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden bg-black flex items-center justify-center mb-4">
                <img
                  src={activeModalProject.gallery[galleryIndex]}
                  alt={`${activeModalProject.title} screenshot ${galleryIndex + 1}`}
                  className="max-h-[65vh] w-auto object-contain"
                />

                {/* Arrow Controls if multiple images */}
                {activeModalProject.gallery.length > 1 && (
                  <>
                    <button
                      onClick={prevGalleryImage}
                      className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-slate-900/80 hover:bg-blue-600 text-white transition-colors interactive"
                    >
                      <FiChevronLeft className="w-6 h-6" />
                    </button>
                    <button
                      onClick={nextGalleryImage}
                      className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-slate-900/80 hover:bg-blue-600 text-white transition-colors interactive"
                    >
                      <FiChevronRight className="w-6 h-6" />
                    </button>
                  </>
                )}
              </div>

              {/* Thumbnails Strip */}
              {activeModalProject.gallery.length > 1 && (
                <div className="flex items-center gap-3 overflow-x-auto pb-2">
                  {activeModalProject.gallery.map((img, i) => (
                    <button
                      key={i}
                      onClick={() => setGalleryIndex(i)}
                      className={`relative w-20 h-14 rounded-xl overflow-hidden border-2 transition-all flex-shrink-0 ${
                        galleryIndex === i ? 'border-cyan-400 scale-105 shadow-md shadow-cyan-400/30' : 'border-slate-800 opacity-60'
                      }`}
                    >
                      <img src={img} alt="thumbnail" className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
