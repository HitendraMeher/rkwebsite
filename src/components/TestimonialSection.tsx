import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, GraduationCap, Star } from 'lucide-react';
import { IMAGES } from '../assets/images';

interface TestimonialItem {
  id: string;
  author: string;
  role: string;
  course: string;
  rating: number;
  highlight1: string;
  highlight2?: string;
  quoteParagraphs: string[];
  image: string;
  alt: string;
}

const TESTIMONIALS: TestimonialItem[] = [
  {
    id: "niddhi",
    author: "Niddhi",
    role: "Civil & Architecture Student",
    course: "Auto CAD 2D",
    rating: 5,
    highlight1: "perfect for beginners advancing to intermediate level",
    highlight2: "confidently creating professional drawings",
    quoteParagraphs: [
      "“ I specifically learned to create line plans, detailed apartment 2D drawings complete with elevations, sections, and furniture layouts. The pacing was <mark>perfect for beginners advancing to intermediate level</mark>, and the teacher was always responsive to questions about CAD best practices for Indian construction standards.",
      "Highly recommend for anyone in civil engineering or architecture. I went from struggling with basic commands to <mark>confidently creating professional drawings</mark> for my internship reports. Thank you! ”"
    ],
    image: IMAGES.students.niddhi,
    alt: "Niddhi - Civil & Architecture Student at RK Interior Designer Institute"
  },
  {
    id: "sana",
    author: "Sana Khan",
    role: "Interior Design Student",
    course: "Auto CAD 2D",
    rating: 5,
    highlight1: "detailed apartment 2D drawings with complete elevations",
    highlight2: "very innovative and super effective!",
    quoteParagraphs: [
      "“ If you want a place for learning computer aided designs with practical experience, then this place is for you. I specifically learnt to create <mark>detailed apartment 2D drawings with complete elevations, sections, and furniture layouts</mark>. The course helped me to understand Autocad with ease.",
      "Their teaching ways are <mark>very innovative and super effective!</mark> The faculty was very hands-on and helped to clear all my doubts in a jiffy. Timings are super flexible! Highly recommend for anyone in interior designing or architecture. Thank you so much! ”"
    ],
    image: IMAGES.students.priya,
    alt: "Sana Khan - Interior Design Student at RK Interior Designer Institute"
  },
  {
    id: "shreyash",
    author: "Shreyash Lad",
    role: "CAD & 3D Design Student",
    course: "Auto CAD 2D & 3D'S Max",
    rating: 5,
    highlight1: "neatly attend the student in class",
    highlight2: "very helpful to students about doubt",
    quoteParagraphs: [
      "“ RK Interior Designer Institute is very nice and <mark>neatly attend the student in class</mark>. The teacher was <mark>very helpful to students about doubt</mark> and guided every practical command patiently.",
      "Concepts are taught with complete clarity and personal 1-on-1 computer attention. Great institute for career building! ”"
    ],
    image: IMAGES.students.shreyas,
    alt: "Shreyash Lad - Student at RK Interior Designer Institute"
  }
];

export const TestimonialSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto rotate every 8 seconds, pausing if user interacts
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 8000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  const current = TESTIMONIALS[currentIndex];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  // Helper to render formatted paragraph with highlighted berry text
  const renderFormattedText = (text: string) => {
    const parts = text.split(/(<mark>.*?<\/mark>)/g);
    return parts.map((part, idx) => {
      if (part.startsWith('<mark>') && part.endsWith('</mark>')) {
        const clean = part.replace(/<\/?mark>/g, '');
        return (
          <span key={idx} className="text-[#9b1747] font-semibold">
            {clean}
          </span>
        );
      }
      return <span key={idx}>{part}</span>;
    });
  };

  return (
    <section 
      id="testimonials" 
      data-section="testimonials" 
      className="relative py-14 sm:py-24 bg-[#fcfbf9] border-b border-stone-200/80 overflow-hidden scroll-mt-20"
    >
      <div id="reviews" className="absolute -top-20" />

      {/* Decorative Organic Rose Backdrop Wave on Right Side for Desktop */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[52%] h-[120%] bg-gradient-to-l from-rose-100/60 via-rose-50/40 to-transparent rounded-l-[300px] pointer-events-none -z-10 hidden lg:block" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* ========================================================================= */}
        {/* 1. MOBILE VIEW (Screen < lg) - Formatted Exactly to image_49a89673.png     */}
        {/* ========================================================================= */}
        <div className="block lg:hidden space-y-6">
          
          {/* Mobile Header: Tag & Heading */}
          <div>
            <div className="flex items-center gap-3 text-xs font-bold text-[#9b1747] uppercase tracking-wider mb-2">
              <span>STUDENT TESTIMONIAL</span>
              <span className="w-10 h-0.5 bg-[#9b1747]" />
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 font-display tracking-tight leading-[1.14]">
              What Our <br />
              Students{' '}
              <span className="relative text-[#9b1747] inline-block">
                Say
                {/* 3 Playful radiating burst lines */}
                <svg 
                  className="absolute -top-3.5 -right-5 w-5 h-5 text-[#9b1747] select-none" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2.5" 
                  strokeLinecap="round"
                >
                  <line x1="3" y1="15" x2="1" y2="13" />
                  <line x1="7" y1="8" x2="5" y2="4" />
                  <line x1="14" y1="6" x2="18" y2="2" />
                </svg>
                <span className="absolute left-0 -bottom-1 w-full h-1 bg-[#9b1747]/25 rounded-full" />
              </span>
            </h2>
          </div>

          {/* Elevated White Card Enclosing the entire testimonial (exact match to image_49a89673.png) */}
          <div className="bg-white rounded-[2.2rem] sm:rounded-[2.5rem] p-6 sm:p-8 shadow-xl shadow-stone-200/50 border border-stone-200/80 relative space-y-5">
            
            {/* Inside Card Top Row: Floating Rose Quote Icon on Left + Circular Student Portal on Right */}
            <div className="relative flex items-center justify-between">
              
              {/* Rose Quote Badge on Left */}
              <div className="w-13 h-13 rounded-full bg-rose-100/90 text-[#9b1747] flex items-center justify-center font-serif text-3xl font-black shadow-xs border-2 border-white select-none shrink-0 self-start mt-1">
                “
              </div>

              {/* Circular Student Avatar on Right with Wave Halo and Playful Bursts */}
              <div className="relative shrink-0">
                {/* Soft pink circular halo backdrop */}
                <div className="absolute -inset-3.5 rounded-full bg-rose-100/70 -z-10 blur-xs" />
                
                <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full border-4 border-white shadow-md overflow-hidden relative bg-stone-100">
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={currentIndex}
                      src={current.image}
                      alt={current.alt}
                      referrerPolicy="no-referrer"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 1.05 }}
                      transition={{ duration: 0.35 }}
                      className="w-full h-full object-cover object-center"
                    />
                  </AnimatePresence>
                </div>

                {/* 3 Playful burst marks on top right of circular photo */}
                <svg 
                  className="absolute -top-2.5 -right-2 w-6 h-6 text-[#9b1747] select-none pointer-events-none" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2.5" 
                  strokeLinecap="round"
                >
                  <line x1="3" y1="15" x2="1" y2="13" />
                  <line x1="7" y1="8" x2="5" y2="4" />
                  <line x1="14" y1="6" x2="18" y2="2" />
                </svg>
              </div>

            </div>

            {/* Testimonial Quote Text inside card */}
            <div className="min-h-[160px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.35 }}
                  className="space-y-3.5 text-stone-700 text-sm sm:text-base leading-relaxed"
                >
                  {current.quoteParagraphs.map((para, idx) => (
                    <p key={idx}>
                      {renderFormattedText(para)}
                    </p>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Inside Card Bottom Row: Author details & Stars on Left, Course Badge with Divider on Right */}
            <div className="pt-4 border-t border-stone-100 flex items-end justify-between gap-3">
              
              {/* Left: Dash, Author Name, Role, Stars */}
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="w-5 h-0.5 bg-[#9b1747]" />
                  <h3 className="text-base sm:text-lg font-bold text-stone-900 font-display leading-tight">
                    {current.author}
                  </h3>
                </div>
                <p className="text-xs text-stone-500 pl-7 leading-tight">
                  {current.role} <br />
                  {current.course}
                </p>
                <div className="flex items-center gap-1 text-amber-400 pl-7 pt-1">
                  {[...Array(current.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 stroke-amber-400" />
                  ))}
                </div>
              </div>

              {/* Right: Soft Rose Course Capsule Badge with Vertical Divider (Exact to image_49a89673.png) */}
              <div className="inline-flex items-center gap-2 px-3 sm:px-3.5 py-2 rounded-2xl bg-rose-100/80 border border-rose-200/70 text-[#9b1747] shadow-2xs shrink-0">
                <GraduationCap className="w-4 h-4 sm:w-5 sm:h-5 text-[#9b1747] shrink-0" />
                <span className="h-4 w-px bg-[#9b1747]/25" />
                <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider leading-tight">
                  {current.course}
                </span>
              </div>

            </div>

          </div>

          {/* Carousel Navigation below card: [ < ]   [ ━ • • ]   [ > ] (Exact to image_49a89673.png) */}
          <div className="flex items-center justify-between px-3 pt-1 select-none">
            {/* Left Circular Arrow Button */}
            <button
              onClick={handlePrev}
              className="w-11 h-11 rounded-full bg-rose-50/90 hover:bg-rose-100 text-stone-700 hover:text-[#9b1747] flex items-center justify-center transition-all cursor-pointer shadow-xs active:scale-95"
              aria-label="Previous review"
            >
              <ChevronLeft className="w-5 h-5 stroke-[2.2]" />
            </button>

            {/* Pagination Dots */}
            <div className="flex items-center gap-2">
              {TESTIMONIALS.map((_, dotIdx) => (
                <button
                  key={dotIdx}
                  onClick={() => setCurrentIndex(dotIdx)}
                  className={`transition-all rounded-full cursor-pointer ${
                    currentIndex === dotIdx
                      ? 'w-7 h-2 bg-[#9b1747]'
                      : 'w-2 h-2 bg-stone-300 hover:bg-stone-400'
                  }`}
                  aria-label={`Slide ${dotIdx + 1}`}
                />
              ))}
            </div>

            {/* Right Circular Arrow Button */}
            <button
              onClick={handleNext}
              className="w-11 h-11 rounded-full bg-rose-50/90 hover:bg-rose-100 text-stone-700 hover:text-[#9b1747] flex items-center justify-center transition-all cursor-pointer shadow-xs active:scale-95"
              aria-label="Next review"
            >
              <ChevronRight className="w-5 h-5 stroke-[2.2]" />
            </button>
          </div>

        </div>

        {/* ========================================================================= */}
        {/* 2. DESKTOP VIEW (Screen >= lg) - Elevated Card & Large Circular Portal     */}
        {/* ========================================================================= */}
        <div className="hidden lg:block">
          
          {/* Section Header with Line & Playful Burst Marks over "Say" */}
          <div className="mb-10 sm:mb-12">
            <div className="flex items-center gap-3 text-xs font-bold text-[#9b1747] uppercase tracking-wider mb-2.5">
              <span>STUDENT TESTIMONIAL</span>
              <span className="w-12 h-0.5 bg-[#9b1747]" />
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[2.65rem] font-extrabold text-stone-900 font-display tracking-tight flex items-center flex-wrap gap-2">
              <span>What Our Students</span>
              <span className="relative text-[#9b1747] inline-block">
                Say
                <svg 
                  className="absolute -top-3 sm:-top-3.5 -right-5 sm:-right-6 w-5 h-5 sm:w-6 sm:h-6 text-[#9b1747] select-none" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2.5" 
                  strokeLinecap="round"
                >
                  <line x1="3" y1="15" x2="1" y2="13" />
                  <line x1="7" y1="8" x2="5" y2="4" />
                  <line x1="14" y1="6" x2="18" y2="2" />
                </svg>
                <span className="absolute left-0 -bottom-1 w-full h-1.5 bg-[#9b1747]/20 rounded-full" />
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-12 gap-8 items-center">
            
            {/* Left Column: Testimonial Card, Author & Slider Controls */}
            <div className="col-span-7 space-y-7">
              
              <div className="relative bg-white rounded-[2rem] p-6 sm:p-9 shadow-sm border border-stone-200/80 pt-10 sm:pt-12">
                <div className="absolute -top-6 left-6 sm:left-9 w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-rose-100/90 text-[#9b1747] flex items-center justify-center font-serif text-3xl font-black shadow-xs border-2 border-white select-none">
                  “
                </div>

                <div className="min-h-[170px] flex items-center">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentIndex}
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -12 }}
                      transition={{ duration: 0.35 }}
                      className="space-y-3.5 text-stone-700 text-sm sm:text-base leading-relaxed"
                    >
                      {current.quoteParagraphs.map((para, idx) => (
                        <p key={idx}>
                          {renderFormattedText(para)}
                        </p>
                      ))}
                    </motion.div>
                  </AnimatePresence>
                </div>

                <div className="mt-6 pt-5 border-t border-stone-100 flex flex-wrap items-center justify-between gap-3">
                  <div className="flex items-center gap-2.5">
                    <span className="w-5 h-0.5 bg-[#9b1747]" />
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-stone-900 font-display leading-tight">
                        {current.author}
                      </h3>
                      <p className="text-xs sm:text-[13px] text-stone-500">
                        {current.role} · {current.course}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(current.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 stroke-amber-400" />
                    ))}
                  </div>
                </div>
              </div>

              {/* Slider Navigation Bar */}
              <div className="flex items-center gap-4 sm:gap-6 pt-1 select-none">
                <button
                  onClick={handlePrev}
                  className="w-10 h-10 rounded-full bg-rose-50 hover:bg-rose-100 text-stone-700 hover:text-[#9b1747] flex items-center justify-center transition-all cursor-pointer shadow-xs active:scale-95"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-5 h-5 stroke-[2.2]" />
                </button>

                <div className="flex items-center gap-2.5">
                  {TESTIMONIALS.map((item, idx) => {
                    const isActive = currentIndex === idx;
                    return (
                      <button
                        key={item.id}
                        onClick={() => setCurrentIndex(idx)}
                        className={`relative rounded-full transition-all cursor-pointer ${
                          isActive
                            ? 'ring-2 ring-[#9b1747] ring-offset-2 scale-110'
                            : 'opacity-50 hover:opacity-90 hover:scale-105'
                        }`}
                        aria-label={`View review from ${item.author}`}
                        title={`${item.author} (${item.course})`}
                      >
                        <img
                          src={item.image}
                          alt={item.author}
                          referrerPolicy="no-referrer"
                          className="w-9 h-9 sm:w-10 sm:h-10 rounded-full object-cover border border-stone-200"
                        />
                        {isActive && (
                          <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 flex gap-0.5">
                            <span className="w-1 h-1 rounded-full bg-[#9b1747]" />
                          </div>
                        )}
                      </button>
                    );
                  })}
                </div>

                <div className="flex items-center gap-1.5">
                  {TESTIMONIALS.map((_, dotIdx) => (
                    <button
                      key={dotIdx}
                      onClick={() => setCurrentIndex(dotIdx)}
                      className={`transition-all rounded-full cursor-pointer ${
                        currentIndex === dotIdx
                          ? 'w-6 h-2 bg-[#9b1747]'
                          : 'w-2 h-2 bg-stone-300 hover:bg-stone-400'
                      }`}
                      aria-label={`Jump to slide ${dotIdx + 1}`}
                    />
                  ))}
                </div>

                <button
                  onClick={handleNext}
                  className="w-10 h-10 rounded-full bg-rose-50 hover:bg-rose-100 text-stone-700 hover:text-[#9b1747] flex items-center justify-center transition-all cursor-pointer shadow-xs active:scale-95"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-5 h-5 stroke-[2.2]" />
                </button>
              </div>

            </div>

            {/* Right Column: Circular Student Portal */}
            <div className="col-span-5 flex flex-col items-center justify-center relative">
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-[22rem] lg:h-[22rem] xl:w-[24rem] xl:h-[24rem]">
                <div className="absolute -inset-3 rounded-full bg-gradient-to-tr from-rose-200/40 via-amber-100/30 to-rose-100/40 -z-10 blur-md" />

                <div className="w-full h-full rounded-full border-4 sm:border-[6px] border-white shadow-2xl overflow-hidden relative bg-stone-100 group">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentIndex}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 1.05 }}
                      transition={{ duration: 0.4 }}
                      className="w-full h-full relative"
                    >
                      <img
                        src={current.image}
                        alt={current.alt}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover object-center group-hover:scale-104 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-stone-900/30 via-transparent to-transparent opacity-60" />
                    </motion.div>
                  </AnimatePresence>
                </div>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0, scale: 0.85, y: 10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.85, y: 10 }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                    className="absolute bottom-4 right-0 sm:bottom-6 sm:-right-2 z-20 bg-white/95 backdrop-blur-md px-4 py-2 rounded-full border border-stone-200 shadow-lg flex items-center gap-2 select-none"
                  >
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-xs sm:text-sm font-bold text-stone-900 font-display">
                      {current.author}
                    </span>
                  </motion.div>
                </AnimatePresence>
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.3 }}
                  className="mt-5 text-center"
                >
                  <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-rose-100/90 border border-rose-200 text-[#9b1747] text-xs sm:text-[13px] font-bold uppercase tracking-wider shadow-xs">
                    <GraduationCap className="w-4 h-4 stroke-[2.2]" />
                    <span>{current.course}</span>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
