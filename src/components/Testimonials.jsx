import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronLeft, FiChevronRight, FiStar, FiMessageSquare } from 'react-icons/fi';
import { FaQuoteLeft } from 'react-icons/fa';

const testimonials = [
  {
    id: 1,
    name: 'Amina Abdi',
    role: 'Business Owner & Founder',
    company: 'Hazna Boutique',
    rating: 5,
    quote: 'Hodan built our e-commerce platform from scratch. Her attention to detail, modern UI design, and responsive layouts exceeded our expectations. Highly recommended!',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&q=80',
  },
  {
    id: 2,
    name: 'Abdirahman Hassan',
    role: 'Marketing Manager',
    company: 'Horyaal Group',
    rating: 5,
    quote: 'Working with Hodan on graphic design and social media posters has been fantastic. Her visual branding skills are outstanding, delivering prompt and creative results every time.',
    avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=150&q=80',
  },
  {
    id: 3,
    name: 'Ahmed Osman',
    role: 'Content Creator & Producer',
    company: 'Media Wave',
    rating: 5,
    quote: 'The video edits and promo reels Hodan produced for our brand went viral on TikTok. Her cuts, pacing, and color grading brought our content to life!',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80',
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-24 relative overflow-hidden bg-[#070A13]">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-mono font-semibold uppercase tracking-widest text-cyan-400 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-800/40 inline-block mb-3"
          >
            Client Feedback
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight"
          >
            What Clients <span className="text-gradient">Say</span>
          </motion.h2>
        </div>

        {/* Animated Slider Container */}
        <div className="max-w-4xl mx-auto relative">
          
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, scale: 0.95, x: 20 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              exit={{ opacity: 0, scale: 0.95, x: -20 }}
              transition={{ duration: 0.4 }}
              className="glass-card p-8 sm:p-12 rounded-3xl border border-slate-800 text-center relative overflow-hidden flex flex-col items-center"
            >
              {/* Quote Mark Background Icon */}
              <FaQuoteLeft className="absolute top-6 left-8 text-7xl text-blue-500/10 pointer-events-none" />

              {/* Stars Rating */}
              <div className="flex items-center gap-1 mb-6 text-amber-400">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <FiStar key={i} className="w-5 h-5 fill-amber-400" />
                ))}
              </div>

              {/* Quote Text */}
              <p className="text-lg sm:text-2xl font-medium text-slate-200 leading-relaxed italic mb-8 max-w-2xl">
                "{testimonials[currentIndex].quote}"
              </p>

              {/* Client Info */}
              <div className="flex items-center gap-4">
                <img
                  src={testimonials[currentIndex].avatar}
                  alt={testimonials[currentIndex].name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-cyan-400 shadow-md"
                />
                <div className="text-left">
                  <h4 className="text-lg font-bold text-white">
                    {testimonials[currentIndex].name}
                  </h4>
                  <p className="text-xs text-slate-400 font-mono">
                    {testimonials[currentIndex].role} • <span className="text-cyan-400">{testimonials[currentIndex].company}</span>
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prevTestimonial}
              className="p-3 rounded-full bg-slate-900 border border-slate-800 hover:border-cyan-400 text-slate-300 hover:text-white transition-all interactive"
              aria-label="Previous Testimonial"
            >
              <FiChevronLeft className="w-5 h-5" />
            </button>

            {/* Indicator Dots */}
            <div className="flex items-center gap-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2.5 rounded-full transition-all interactive ${
                    currentIndex === idx ? 'w-8 bg-cyan-400' : 'w-2.5 bg-slate-800'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="p-3 rounded-full bg-slate-900 border border-slate-800 hover:border-cyan-400 text-slate-300 hover:text-white transition-all interactive"
              aria-label="Next Testimonial"
            >
              <FiChevronRight className="w-5 h-5" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
