import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiPlay, FiVideo, FiX, FiExternalLink } from 'react-icons/fi';
import { FaTiktok } from 'react-icons/fa';
import { getVideos } from '../utils/imageLoader';

export default function Videos() {
  const videos = getVideos();
  const [activeVideoModal, setActiveVideoModal] = useState(null);

  return (
    <section id="videos" className="py-24 relative overflow-hidden bg-[#0F172A]">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 right-10 w-96 h-96 bg-purple-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-mono font-semibold uppercase tracking-widest text-purple-400 px-3 py-1 rounded-full bg-purple-950/60 border border-purple-800/40 inline-block mb-3"
          >
            Visual Media Production
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight"
          >
            Video & <span className="text-gradient">Content Creation</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 text-base sm:text-lg mt-4 leading-relaxed"
          >
            High-engagement short-form videos, promotional commercials, brand story vlogs, and color-graded reels.
          </motion.p>
        </div>

        {/* Video Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16">
          {videos.map((vid, idx) => (
            <motion.div
              key={vid.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-card rounded-3xl border border-slate-800 flex flex-col justify-between overflow-hidden group interactive"
            >
              {/* Video Thumbnail / Preview Container */}
              <div
                onClick={() => setActiveVideoModal(vid)}
                className="relative aspect-[16/9] overflow-hidden bg-black cursor-pointer group/thumb"
              >
                {vid.videoUrl ? (
                  <video
                    src={vid.videoUrl}
                    muted
                    loop
                    playsInline
                    onMouseOver={(e) => e.currentTarget.play()}
                    onMouseOut={(e) => e.currentTarget.pause()}
                    className="w-full h-full object-cover group-hover/thumb:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <img
                    src={vid.thumbnail}
                    alt={vid.title}
                    className="w-full h-full object-cover group-hover/thumb:scale-105 transition-transform duration-500"
                  />
                )}

                {/* Play Overlay Icon */}
                <div className="absolute inset-0 bg-slate-950/40 group-hover/thumb:bg-slate-950/60 transition-colors flex items-center justify-center pointer-events-none">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-blue-600 via-cyan-500 to-amber-500 p-[2px] shadow-xl group-hover/thumb:scale-110 transition-transform">
                    <div className="w-full h-full bg-slate-950 rounded-full flex items-center justify-center text-white pl-0.5">
                      <FiPlay className="w-7 h-7 fill-white text-white" />
                    </div>
                  </div>
                </div>

                {/* Duration Badge */}
                <div className="absolute bottom-3 right-3 px-3 py-1 rounded-md bg-slate-950/80 backdrop-blur-md border border-slate-700/60 text-[11px] font-mono text-cyan-300 font-bold">
                  {vid.duration}
                </div>
              </div>

              {/* Card Meta */}
              <div className="p-6 flex items-center justify-between">
                <div>
                  <span className="text-xs font-mono text-purple-400 font-semibold uppercase tracking-wider block mb-1">
                    {vid.category}
                  </span>
                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {vid.title}
                  </h3>
                </div>
                <button
                  onClick={() => setActiveVideoModal(vid)}
                  className="px-4 py-2 rounded-xl bg-purple-600/80 hover:bg-purple-600 text-white font-semibold text-xs transition-colors flex items-center gap-1.5"
                >
                  <FiPlay className="w-3.5 h-3.5 fill-white" />
                  <span>Play Video</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* TikTok Callout Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center p-8 rounded-3xl bg-gradient-to-r from-purple-950/50 via-slate-900 to-cyan-950/50 border border-purple-500/30 shadow-2xl backdrop-blur-md flex flex-col items-center"
        >
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-pink-500 via-purple-500 to-cyan-400 p-[2px] mb-4 shadow-lg shadow-purple-500/30">
            <div className="w-full h-full bg-slate-950 rounded-[14px] flex items-center justify-center text-white">
              <FaTiktok className="w-7 h-7" />
            </div>
          </div>

          <h3 className="text-2xl font-bold text-white mb-2">Want to see more content?</h3>
          <p className="text-slate-300 text-sm mb-6">
            Follow my latest daily video edits, creative storytelling, and viral content on TikTok.
          </p>

          <a
            href="https://www.tiktok.com/@hothann289"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-3 px-8 py-3.5 rounded-full bg-gradient-to-r from-pink-500 via-purple-600 to-cyan-500 text-white font-bold text-sm shadow-xl shadow-purple-600/40 hover:scale-105 transition-transform interactive"
          >
            <FaTiktok className="w-5 h-5" />
            <span>Visit TikTok: @hothann289</span>
            <FiExternalLink className="w-4 h-4" />
          </a>
        </motion.div>

      </div>

      {/* Video Player Modal */}
      <AnimatePresence>
        {activeVideoModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveVideoModal(null)}
            className="fixed inset-0 z-50 bg-slate-950/95 backdrop-blur-xl p-4 sm:p-8 flex items-center justify-center"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-5xl w-full bg-slate-900 rounded-3xl p-6 border border-slate-700 shadow-2xl flex flex-col items-center"
            >
              <button
                onClick={() => setActiveVideoModal(null)}
                className="absolute top-4 right-4 p-2.5 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors interactive z-20"
              >
                <FiX className="w-6 h-6" />
              </button>

              <div className="w-full text-center mb-4 pr-12">
                <h3 className="text-2xl font-bold text-white">{activeVideoModal.title}</h3>
                <span className="text-xs font-mono text-purple-400">{activeVideoModal.category}</span>
              </div>

              {/* Full Interactive Video Player */}
              <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden bg-black flex items-center justify-center shadow-2xl border border-slate-800">
                {activeVideoModal.videoUrl ? (
                  <video
                    src={activeVideoModal.videoUrl}
                    controls
                    autoPlay
                    className="w-full h-full object-contain"
                  />
                ) : (
                  <div className="flex flex-col items-center justify-center p-6 text-center">
                    <img
                      src={activeVideoModal.thumbnail}
                      alt={activeVideoModal.title}
                      className="w-full h-full object-cover opacity-80"
                    />
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
