import React from 'react';
import { ArrowRight, Play, GraduationCap, Monitor, Users, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';
import { IMAGES } from '../assets/images';
import { SoftwareLogo } from './SoftwareLogos';
import { DiyaSvg, DiwaliFestiveSparkles } from './DiwaliDecoration';

interface HeroProps {
  onExploreCourses: () => void;
  onWatchVideo: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreCourses, onWatchVideo }) => {
  return (
    <section id="home" data-section="home" className="relative overflow-hidden bg-gradient-to-b from-[#fcfbf9] via-[#f9f7f4] to-white pt-8 pb-16 lg:pt-14 lg:pb-24 border-b border-stone-200/60 scroll-mt-20">
      {/* Floating Gentle Golden Diwali Sparkles */}
      <DiwaliFestiveSparkles />



      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Typography, Copy, and CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-5"
          >
            {/* Minimal Festive Diwali Announcement Pill */}
            <motion.div
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-amber-500/15 via-orange-500/10 to-amber-500/15 border border-amber-500/35 text-amber-950 text-xs font-semibold shadow-2xs w-fit"
            >
              <DiyaSvg size={18} />
              <span>Shubh Deepawali · Festive Admissions Now Open</span>
              <Sparkles className="w-3 h-3 text-amber-600" />
            </motion.div>

            {/* Top Eyebrow */}
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="text-xs sm:text-[13px] font-semibold text-stone-500 tracking-[0.2em] uppercase"
            >
              LEARN DESIGN &nbsp;|&nbsp; BUILD SKILLS &nbsp;|&nbsp; CREATE YOUR FUTURE
            </motion.div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-[3.75rem] xl:text-[4.1rem] font-extrabold text-stone-900 tracking-tight leading-[1.1] font-display">
              Design <br />
              <span className="text-[#9b1747]">Your Skills</span> <br />
              for a Brighter Future
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-stone-600 max-w-xl leading-relaxed font-normal">
              Professional courses in Interior Design and Computer Graphics with practical training and expert guidance.
            </p>

            {/* CTAs: Explore Courses + Watch Video */}
            <div className="pt-2 flex flex-wrap items-center gap-5">
              <motion.button
                whileHover={{ scale: 1.04, boxShadow: '0 10px 25px -5px rgba(155, 23, 71, 0.4)' }}
                whileTap={{ scale: 0.98 }}
                onClick={onExploreCourses}
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-[#9b1747] text-white text-sm sm:text-base font-semibold shadow-md transition-all whitespace-nowrap cursor-pointer"
              >
                <span>Explore Courses</span>
                <ArrowRight className="w-4 h-4 stroke-[2.5]" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.98 }}
                onClick={onWatchVideo}
                className="inline-flex items-center gap-3 px-4 py-3 rounded-full text-stone-800 hover:text-[#9b1747] text-sm sm:text-base font-semibold transition-colors cursor-pointer group"
              >
                <div className="w-10 h-10 rounded-full border-2 border-stone-800 group-hover:border-[#9b1747] flex items-center justify-center transition-colors">
                  <Play className="w-4 h-4 fill-stone-800 group-hover:fill-[#9b1747] text-stone-800 group-hover:text-[#9b1747] ml-0.5 transition-colors" />
                </div>
                <span>Watch Video</span>
              </motion.button>
            </div>

            {/* Three Feature Badges */}
            <div className="pt-6 sm:pt-8 grid grid-cols-3 gap-3 sm:gap-6 border-t border-stone-200/80 max-w-lg">
              
              {/* Badge 1 */}
              <div className="flex items-center gap-2.5 sm:gap-3">
                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-[#9b1747]/30 bg-[#9b1747]/5 flex items-center justify-center shrink-0">
                  <GraduationCap className="w-5 h-5 text-[#9b1747]" />
                </div>
                <div className="text-xs sm:text-sm font-semibold text-stone-800 leading-tight">
                  Practical <br />Training
                </div>
              </div>

              {/* Badge 2 */}
              <div className="flex items-center gap-2.5 sm:gap-3">
                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-[#9b1747]/30 bg-[#9b1747]/5 flex items-center justify-center shrink-0">
                  <Monitor className="w-5 h-5 text-[#9b1747]" />
                </div>
                <div className="text-xs sm:text-sm font-semibold text-stone-800 leading-tight">
                  Latest <br />Software
                </div>
              </div>

              {/* Badge 3 */}
              <div className="flex items-center gap-2.5 sm:gap-3">
                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-[#9b1747]/30 bg-[#9b1747]/5 flex items-center justify-center shrink-0">
                  <Users className="w-5 h-5 text-[#9b1747]" />
                </div>
                <div className="text-xs sm:text-sm font-semibold text-stone-800 leading-tight">
                  Expert <br />Faculty
                </div>
              </div>

            </div>

            {/* Official Real Software Logos Showcase Strip */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <span className="text-[11px] font-bold uppercase tracking-wider text-stone-500">
                Official Software:
              </span>
              <div className="flex flex-wrap items-center gap-2">
                <div className="flex items-center gap-1.5 bg-white border border-stone-200/90 shadow-xs px-2.5 py-1 rounded-lg text-xs font-semibold text-stone-800 hover:border-red-500/50 transition-colors">
                  <SoftwareLogo name="AutoCAD 2D" className="w-4 h-4" />
                  <span>AutoCAD</span>
                </div>
                <div className="flex items-center gap-1.5 bg-white border border-stone-200/90 shadow-xs px-2.5 py-1 rounded-lg text-xs font-semibold text-stone-800 hover:border-cyan-500/50 transition-colors">
                  <SoftwareLogo name="3ds Max" className="w-4 h-4" />
                  <span>3ds Max</span>
                </div>
                <div className="flex items-center gap-1.5 bg-white border border-stone-200/90 shadow-xs px-2.5 py-1 rounded-lg text-xs font-semibold text-stone-800 hover:border-red-500/50 transition-colors">
                  <SoftwareLogo name="V-Ray" className="w-4 h-4" />
                  <span>V-Ray</span>
                </div>
                <div className="flex items-center gap-1.5 bg-white border border-stone-200/90 shadow-xs px-2.5 py-1 rounded-lg text-xs font-semibold text-stone-800 hover:border-blue-500/50 transition-colors">
                  <SoftwareLogo name="Photoshop" className="w-4 h-4" />
                  <span>Photoshop</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Workstation Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative"
          >
            {/* Workstation Frame with Modern Floating Shadow */}
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3 }}
              onClick={onWatchVideo}
              className="relative rounded-2xl sm:rounded-3xl overflow-hidden bg-white shadow-2xl border border-stone-200/80 group cursor-pointer"
            >
              <div className="aspect-4/3 overflow-hidden bg-stone-100 relative">
                <img
                  src={IMAGES.workstation}
                  alt="Interior designer studio workstation monitor displaying 3D rendering project"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-700"
                />

                {/* Subtle Hover Play Overlay */}
                <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full bg-[#9b1747] text-white flex items-center justify-center shadow-xl transform group-hover:scale-110 transition-transform">
                    <Play className="w-6 h-6 fill-white ml-0.5" />
                  </div>
                </div>
              </div>

              {/* Subdued Glass Badge */}
              <div className="absolute bottom-4 left-4 right-4 bg-stone-900/80 backdrop-blur-md rounded-xl p-3 text-white flex items-center justify-between text-xs">
                <div>
                  <div className="font-semibold text-white">Live Student Workstation</div>
                  <div className="text-[11px] text-stone-300">Borivali West Lab · 1-on-1 Sessions</div>
                </div>
                <span className="px-2.5 py-1 rounded bg-[#9b1747] font-semibold text-[10px] uppercase tracking-wider text-white">
                  Watch Video
                </span>
              </div>
            </motion.div>

            {/* Decorative Ambient Glow */}
            <div className="absolute -z-10 -bottom-8 -right-8 w-64 h-64 bg-[#9b1747]/10 rounded-full blur-3xl" />
          </motion.div>

        </div>
      </div>
    </section>
  );
};
