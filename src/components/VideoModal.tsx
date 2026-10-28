import React, { useRef, useEffect } from 'react';
import { X, CheckCircle2, Video, Phone, Award } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenEnquire: () => void;
}

export const VideoModal: React.FC<VideoModalProps> = ({ isOpen, onClose, onOpenEnquire }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const videoSrc = '/assets/aistudio/RK_Interior_Institute_30s_Promo_765fce18.mp4';

  // Pause video whenever modal closes
  useEffect(() => {
    if (!isOpen && videoRef.current) {
      videoRef.current.pause();
    } else if (isOpen && videoRef.current) {
      videoRef.current.play().catch(() => {
        // Autoplay policy prevented playback, user can use controls
      });
    }
  }, [isOpen]);

  const handleClose = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
    onClose();
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div
        className="fixed inset-0 z-50 bg-stone-950/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-4 overflow-y-auto"
        onClick={handleClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.25 }}
          className="bg-stone-900 text-white rounded-3xl max-w-3xl w-full overflow-hidden shadow-2xl border border-stone-800 my-auto"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="p-3.5 sm:p-4 flex items-center justify-between border-b border-stone-800 bg-stone-900/90 backdrop-blur-xs">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-[#9b1747]/20 border border-[#9b1747]/40 flex items-center justify-center">
                <Video className="w-4 h-4 text-[#f43f5e]" />
              </div>
              <div>
                <h2 className="text-sm sm:text-base font-bold text-white tracking-tight">
                  RK Interior Designer Institute
                </h2>
                <p className="text-[11px] text-stone-400">
                  Official Course Promo &amp; Lab Preview
                </p>
              </div>
            </div>

            <button
              onClick={handleClose}
              className="p-1.5 rounded-full hover:bg-stone-800 text-stone-400 hover:text-white transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Real Video Player */}
          <div>
            <div className="relative aspect-16/9 bg-black overflow-hidden flex items-center justify-center">
              <video
                ref={videoRef}
                src={videoSrc}
                controls
                autoPlay
                playsInline
                preload="auto"
                className="w-full h-full object-contain"
              >
                Your browser does not support the video tag.
              </video>
            </div>

            {/* Video Highlights Strip */}
            <div className="p-4 sm:p-5 bg-stone-900 border-t border-stone-800 space-y-3.5">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div>
                  <h3 className="text-sm sm:text-base font-bold font-display text-white">
                    Borivali West Lab • 1-on-1 Personalized Workstations
                  </h3>
                  <p className="text-[11px] sm:text-xs text-stone-400">
                    AutoCAD 2D • 3ds Max + V-Ray • Photoshop • Basic Vastu
                  </p>
                </div>
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[10px] font-semibold">
                  <Award className="w-3 h-3" />
                  Govt. Certificate Included
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-xs text-stone-300 pt-1">
                <div className="flex items-center gap-2 bg-stone-800/50 p-2 rounded-lg border border-stone-800">
                  <CheckCircle2 className="w-4 h-4 text-[#f43f5e] shrink-0" />
                  <span>Dedicated PC &amp; Personal Pace</span>
                </div>
                <div className="flex items-center gap-2 bg-stone-800/50 p-2 rounded-lg border border-stone-800">
                  <CheckCircle2 className="w-4 h-4 text-[#f43f5e] shrink-0" />
                  <span>Real Mumbai Projects Day 1</span>
                </div>
                <div className="flex items-center gap-2 bg-stone-800/50 p-2 rounded-lg border border-stone-800">
                  <CheckCircle2 className="w-4 h-4 text-[#f43f5e] shrink-0" />
                  <span>Basic Vastu Training Included</span>
                </div>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-stone-800">
                <span className="text-xs text-stone-400">
                  Near Dwarka Hotel, Shimpoli Road, Borivali West
                </span>
                <div className="flex items-center gap-2 w-full sm:w-auto">
                  <a
                    href="tel:+917039063446"
                    className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-full bg-stone-800 hover:bg-stone-700 text-stone-200 text-xs font-semibold transition-colors cursor-pointer"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#f43f5e]" />
                    <span>70390 63446</span>
                  </a>
                  <button
                    onClick={() => {
                      handleClose();
                      onOpenEnquire();
                    }}
                    className="flex-1 sm:flex-initial px-5 py-2 rounded-full bg-[#9b1747] hover:bg-[#821136] text-white text-xs font-semibold tracking-wide transition-colors cursor-pointer shadow-lg shadow-[#9b1747]/20"
                  >
                    Book Free Demo Session
                  </button>
                </div>
              </div>
            </div>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
};
