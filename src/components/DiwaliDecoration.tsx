import React, { useState } from 'react';
import { Sparkles, X, ChevronRight, Gift, Flame, Star } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface DiwaliProps {
  onOpenEnquire: (courseName?: string) => void;
}

/**
 * Traditional Indian Terracotta Diya with animated flickering flame & ambient aura
 */
export const DiyaSvg: React.FC<{ size?: number; className?: string }> = ({ size = 28, className = '' }) => {
  return (
    <div className={`relative inline-flex items-center justify-center shrink-0 ${className}`} style={{ width: size, height: size * 1.1 }}>
      {/* Soft radial golden aura */}
      <div
        className="absolute -top-1 w-4 h-4 rounded-full bg-amber-400/40 blur-sm pointer-events-none animate-diya-glow"
        style={{ width: size * 0.7, height: size * 0.7 }}
      />

      <svg
        viewBox="0 0 40 44"
        width={size}
        height={size * 1.1}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="overflow-visible"
      >
        {/* Animated Flickering Flame */}
        <g className="animate-diya-flame origin-bottom">
          {/* Outer Flame Amber Glow */}
          <path
            d="M20 2C18.5 7 13 13 13 18C13 22 16.5 25 20 25C23.5 25 27 22 27 18C27 13 21.5 7 20 2Z"
            fill="url(#outerFlameGrad)"
          />
          {/* Inner Golden Core */}
          <path
            d="M20 7C19.2 10 16 14.5 16 18C16 20.8 18 23 20 23C22 23 24 20.8 24 18C24 14.5 20.8 10 20 7Z"
            fill="url(#innerFlameGrad)"
          />
          {/* White-hot Center */}
          <ellipse cx="20" cy="19" rx="1.8" ry="3.5" fill="#FFFDF0" />
        </g>

        {/* Diya Wick */}
        <path d="M20 22L19.5 26" stroke="#4A1E08" strokeWidth="1.5" strokeLinecap="round" />

        {/* Diya Terracotta Clay Bowl */}
        <path
          d="M6 25C6 25 10 37 20 37C30 37 34 25 34 25C34 25 28 28.5 20 28.5C12 28.5 6 25 6 25Z"
          fill="url(#clayBowlGrad)"
          stroke="#B45309"
          strokeWidth="0.8"
        />

        {/* Diya Rim Gold Accent */}
        <path
          d="M5 25C11 28 29 28 35 25C33 26.5 27 29.5 20 29.5C13 29.5 7 26.5 5 25Z"
          fill="#F59E0B"
        />

        {/* Decorative Gold Dots on Rim */}
        <circle cx="12" cy="27" r="0.9" fill="#FEF3C7" />
        <circle cx="16" cy="28" r="0.9" fill="#FEF3C7" />
        <circle cx="20" cy="28.5" r="1.1" fill="#FEF3C7" />
        <circle cx="24" cy="28" r="0.9" fill="#FEF3C7" />
        <circle cx="28" cy="27" r="0.9" fill="#FEF3C7" />

        {/* Base Stand */}
        <path
          d="M15 36.5C15 36.5 16.5 39 20 39C23.5 39 25 36.5 25 36.5"
          stroke="#92400E"
          strokeWidth="1.2"
          strokeLinecap="round"
        />

        {/* Gradient Defs */}
        <defs>
          <radialGradient id="outerFlameGrad" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(20 18) rotate(90) scale(16 11)">
            <stop stopColor="#F59E0B" />
            <stop offset="0.65" stopColor="#EA580C" />
            <stop offset="1" stopColor="#DC2626" stopOpacity="0.8" />
          </radialGradient>
          <linearGradient id="innerFlameGrad" x1="20" y1="7" x2="20" y2="23" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FEF08A" />
            <stop offset="0.8" stopColor="#FBBF24" />
          </linearGradient>
          <linearGradient id="clayBowlGrad" x1="6" y1="25" x2="34" y2="37" gradientUnits="userSpaceOnUse">
            <stop stopColor="#D97706" />
            <stop offset="0.5" stopColor="#B45309" />
            <stop offset="1" stopColor="#78350F" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

/**
 * Traditional Marigold Toran Garland (Hanging across the header/banner)
 * Authentic auspicious green mango leaves & vibrant yellow/orange marigolds
 */
export const MarigoldToranHeader: React.FC = () => {
  return (
    <div className="w-full h-3 overflow-hidden pointer-events-none select-none flex items-center justify-between opacity-90 relative z-30">
      {/* Repeating Garland Segments */}
      <div className="w-full flex items-center justify-around">
        {[...Array(14)].map((_, i) => (
          <div key={i} className="flex items-center -space-x-1 shrink-0">
            {/* Green Mango Leaf */}
            <span className="w-2.5 h-1.5 rounded-b-full bg-emerald-700/80 -rotate-12" />
            {/* Marigold Flower Orange */}
            <span className="w-2.5 h-2.5 rounded-full bg-gradient-to-br from-amber-400 via-orange-500 to-amber-600 shadow-2xs" />
            {/* Marigold Flower Yellow */}
            <span className="w-2 h-2 rounded-full bg-gradient-to-br from-yellow-300 to-amber-400 shadow-2xs" />
            {/* Green Mango Leaf */}
            <span className="w-2.5 h-1.5 rounded-b-full bg-emerald-700/80 rotate-12" />
          </div>
        ))}
      </div>
    </div>
  );
};

/**
 * Subtle Floating Golden Sparkles across the hero section
 */
export const DiwaliFestiveSparkles: React.FC = () => {
  const sparkleItems = [
    { top: '15%', left: '8%', delay: 0, duration: 4 },
    { top: '25%', left: '85%', delay: 1.2, duration: 3.5 },
    { top: '65%', left: '12%', delay: 0.7, duration: 4.5 },
    { top: '55%', left: '90%', delay: 2, duration: 3.8 },
    { top: '35%', left: '48%', delay: 1.5, duration: 5 },
    { top: '75%', left: '78%', delay: 0.4, duration: 4.2 }
  ];

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
      {sparkleItems.map((item, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0.1, y: 0, scale: 0.8 }}
          animate={{
            opacity: [0.1, 0.75, 0.1],
            y: [-10, 10, -10],
            scale: [0.8, 1.2, 0.8]
          }}
          transition={{
            duration: item.duration,
            repeat: Infinity,
            delay: item.delay,
            ease: 'easeInOut'
          }}
          style={{ top: item.top, left: item.left }}
          className="absolute"
        >
          <div className="relative">
            <div className="w-2 h-2 rounded-full bg-amber-400 blur-[1px]" />
            <Star className="w-2.5 h-2.5 text-amber-300 fill-amber-300 -mt-1 -ml-0.5" />
          </div>
        </motion.div>
      ))}
    </div>
  );
};

/**
 * Festive Diwali Section Divider with Center Mandala Rangoli & Glowing Diyas
 */
export const DiwaliSectionDivider: React.FC<{ label?: string }> = ({ label }) => {
  return (
    <div className="relative py-8 flex items-center justify-center max-w-5xl mx-auto px-4 overflow-hidden select-none">
      {/* Left Festive Line */}
      <div className="flex-1 h-px bg-gradient-to-r from-transparent via-amber-400/50 to-amber-500" />
      
      {/* Center Motif with 2 Diyas & Auspicious Rangoli */}
      <div className="flex items-center gap-3 px-4 shrink-0">
        <DiyaSvg size={20} />
        
        {label ? (
          <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-gradient-to-r from-amber-500/10 via-orange-500/15 to-amber-500/10 border border-amber-500/30 text-amber-900 text-xs font-bold uppercase tracking-wider shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            <span>{label}</span>
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
          </div>
        ) : (
          <div className="flex items-center gap-1 text-amber-600">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
            <Sparkles className="w-4 h-4 text-amber-500" />
            <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
          </div>
        )}

        <DiyaSvg size={20} />
      </div>

      {/* Right Festive Line */}
      <div className="flex-1 h-px bg-gradient-to-l from-transparent via-amber-400/50 to-amber-500" />
    </div>
  );
};

/**
 * Top Festive Diwali Banner across top of website (Warm Maroon & Gold)
 */
export const TopDiwaliBanner: React.FC<DiwaliProps> = ({ onOpenEnquire }) => {
  const [isDismissed, setIsDismissed] = useState<boolean>(() => {
    return sessionStorage.getItem('rk_diwali_banner_closed') === 'true';
  });

  const handleDismiss = () => {
    setIsDismissed(true);
    sessionStorage.setItem('rk_diwali_banner_closed', 'true');
  };

  if (isDismissed) return null;

  return (
    <div className="relative bg-gradient-to-r from-[#6e1030] via-[#9b1747] to-[#6e1030] text-amber-100 text-xs border-b border-amber-500/30 shadow-sm z-50 overflow-hidden">
      {/* Gentle background sparkle effect */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-400/15 via-transparent to-transparent pointer-events-none" />

      {/* Top marigold toran border */}
      <MarigoldToranHeader />

      <div className="max-w-7xl mx-auto flex items-center justify-between gap-3 py-1.5 px-3 sm:px-6 relative">
        <div className="flex items-center gap-2.5 sm:gap-3 flex-1 min-w-0">
          <DiyaSvg size={22} className="shrink-0" />
          
          <div className="flex flex-wrap items-center gap-x-2 gap-y-0.5 min-w-0">
            <span className="font-extrabold text-amber-300 tracking-wide flex items-center gap-1 shrink-0 font-display text-[13px]">
              <Sparkles className="w-3.5 h-3.5 text-amber-300 inline" />
              Shubh Deepawali!
            </span>
            <span className="text-white/95 truncate hidden md:inline text-xs">
              Celebrate with new creative skills · Special Festive Batch Admissions Open with 1-on-1 Mentorship (Borivali West)
            </span>
            <span className="text-white/95 truncate md:hidden text-[11px]">
              Festive Batches Open · 1-on-1 Training
            </span>
          </div>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={() => window.dispatchEvent(new CustomEvent('launch_diwali_rocket'))}
            className="hidden sm:inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-white/15 hover:bg-white/25 text-amber-200 text-[11px] font-semibold transition-all cursor-pointer border border-white/20 active:scale-95"
            title="Fire a Diwali rocket & sky shot"
          >
            <span>🚀 Fire Sky Shot</span>
          </button>

          <button
            onClick={() => onOpenEnquire('Diwali Festive Batch Admission')}
            className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-gradient-to-r from-amber-400 to-amber-300 hover:from-amber-300 hover:to-amber-200 text-stone-950 font-bold text-[11px] sm:text-xs shadow-md hover:shadow-lg transition-all cursor-pointer whitespace-nowrap active:scale-95"
          >
            <Gift className="w-3.5 h-3.5 text-stone-900" />
            <span>Festive Offer</span>
            <ChevronRight className="w-3 h-3 stroke-[2.5]" />
          </button>

          <button
            onClick={handleDismiss}
            className="p-1 rounded-full text-amber-200/80 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Dismiss Diwali banner"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};

/**
 * Floating Festive Diya Button (Bottom Left) + Auspicious Blessings & Perk Modal
 */
export const FloatingDiyaGreeting: React.FC<DiwaliProps> = ({ onOpenEnquire }) => {
  const [showTooltip, setShowTooltip] = useState(false);
  const [isGreetingModalOpen, setIsGreetingModalOpen] = useState(false);

  return (
    <>
      {/* Floating festive button with warm golden aura */}
      <div className="fixed bottom-5 left-4 sm:left-6 z-30 flex items-center">
        <motion.button
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsGreetingModalOpen(true)}
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
          className="group relative flex items-center gap-2.5 pl-2.5 pr-4 py-2 rounded-full bg-white/95 backdrop-blur-md border-2 border-amber-400/90 shadow-xl hover:shadow-2xl transition-all cursor-pointer"
          aria-label="Diwali Festive Greetings"
        >
          {/* Animated Diya */}
          <DiyaSvg size={24} />
          
          <div className="flex flex-col text-left">
            <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#9b1747] flex items-center gap-1">
              <span>Diwali Special</span>
              <Sparkles className="w-2.5 h-2.5 text-amber-500 fill-amber-500" />
            </span>
            <span className="text-[10px] text-amber-900 font-semibold">
              Shubh Deepawali ✨
            </span>
          </div>
        </motion.button>

        {/* Hover Tooltip */}
        <AnimatePresence>
          {showTooltip && (
            <motion.div
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 5 }}
              className="absolute left-0 bottom-full mb-2 bg-stone-900 text-white text-xs px-3 py-1.5 rounded-xl shadow-lg whitespace-nowrap pointer-events-none border border-amber-500/40"
            >
              Click for Diwali blessings & festive batch bonuses 🪔
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Festive Greeting Modal */}
      <AnimatePresence>
        {isGreetingModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-stone-950/80 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setIsGreetingModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-3xl max-w-md w-full p-6 sm:p-8 text-center relative overflow-hidden shadow-2xl border-2 border-amber-400"
            >
              {/* Marigold Toran on modal top */}
              <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-amber-400 via-orange-500 to-[#9b1747]" />

              <button
                onClick={() => setIsGreetingModalOpen(false)}
                className="absolute top-4 right-4 p-2 rounded-full text-stone-400 hover:text-stone-800 hover:bg-stone-100 transition-colors cursor-pointer"
                aria-label="Close greetings"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-b from-amber-100 to-orange-50 border-2 border-amber-300 flex items-center justify-center shadow-inner mb-4">
                <DiyaSvg size={44} />
              </div>

              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 border border-amber-300 text-amber-900 text-xs font-bold mb-3">
                <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                <span>Happy Diwali & Saal Mubarak</span>
              </div>

              <h3 className="text-2xl font-bold font-display text-stone-900">
                Light Up Your Career with <br />
                <span className="text-[#9b1747]">Interior Design</span>
              </h3>

              <p className="text-xs sm:text-sm text-stone-600 mt-3 leading-relaxed">
                May the divine glow of Deepawali illuminate your life with creativity, prosperity, and career milestones. Enroll in our special festive batches at Borivali West with 1-on-1 private training.
              </p>

              {/* Special Festive Perks Box */}
              <div className="mt-5 p-4 rounded-2xl bg-amber-50/90 border border-amber-200 text-left space-y-2.5">
                <div className="text-xs font-bold text-amber-900 flex items-center gap-1.5">
                  <Flame className="w-3.5 h-3.5 text-orange-500" />
                  <span>Diwali Festive Batch Inclusions:</span>
                </div>
                <ul className="text-xs text-stone-700 space-y-1.5 pl-4 list-disc marker:text-[#9b1747]">
                  <li>Personal 1-on-1 dedicated workstation & mentor</li>
                  <li>Government-recognized authorized certification</li>
                  <li>Flexible morning and afternoon batch</li>
                </ul>
              </div>

              <div className="mt-6 flex flex-col gap-2.5">
                <button
                  onClick={() => {
                    setIsGreetingModalOpen(false);
                    onOpenEnquire('Diwali Special Festive Batch');
                  }}
                  className="w-full py-3 rounded-full bg-[#9b1747] hover:bg-[#821136] text-white text-sm font-semibold shadow-md hover:shadow-lg transition-all cursor-pointer flex items-center justify-center gap-2 active:scale-98"
                >
                  <Sparkles className="w-4 h-4 text-amber-300" />
                  <span>Enquire for Festive Batch</span>
                </button>
                <button
                  onClick={() => setIsGreetingModalOpen(false)}
                  className="w-full py-2 text-xs font-semibold text-stone-500 hover:text-stone-800 transition-colors cursor-pointer"
                >
                  Continue Browsing Website
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
