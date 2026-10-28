import React from 'react';
import { X, Check, Clock, Award, ArrowRight, BookOpen } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { COURSES } from '../data/instituteData';
import { SoftwareLogo } from './SoftwareLogos';

interface CourseDetailModalProps {
  courseId: string | null;
  onClose: () => void;
  onEnquire: (courseTitle: string) => void;
}

export const CourseDetailModal: React.FC<CourseDetailModalProps> = ({ courseId, onClose, onEnquire }) => {
  if (!courseId) return null;

  const course = COURSES.find((c) => c.id === courseId);
  if (!course) return null;

  return (
    <AnimatePresence>
      <div
        className="fixed inset-0 z-50 bg-stone-950/85 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.25 }}
          className="bg-white rounded-3xl max-w-2xl w-full my-8 overflow-hidden shadow-2xl border border-stone-300 max-h-[90vh] flex flex-col"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="relative aspect-16/7 bg-stone-100 overflow-hidden shrink-0">
            <img
              src={course.image}
              alt={course.name}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950/90 via-stone-950/40 to-transparent" />
            
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-full bg-stone-900/80 text-white hover:bg-stone-900 transition-colors cursor-pointer"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="absolute bottom-4 left-5 right-5 text-white flex items-end justify-between gap-4">
              <div className="space-y-1">
                <span className="px-2.5 py-0.5 rounded bg-[#9b1747] text-[10px] font-semibold uppercase tracking-wider inline-block">
                  {course.badge}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold font-display text-white">
                  {course.name}
                </h3>
                <p className="text-xs text-stone-200">{course.tagline}</p>
              </div>

              {/* Official Software Logo */}
              <div className="shrink-0 p-1 rounded-xl bg-stone-900/80 backdrop-blur-md border border-white/20 shadow-lg">
                <SoftwareLogo name={course.name} className="w-11 h-11" />
              </div>
            </div>
          </div>

          {/* Modal Scrollable Body */}
          <div className="p-6 overflow-y-auto space-y-6 flex-1">
            
            {/* Meta Strip */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-xs text-stone-600 pb-3 border-b border-stone-200">
              <div className="flex items-center gap-1.5 font-semibold text-stone-800">
                <Clock className="w-4 h-4 text-[#9b1747]" />
                <span>{course.duration}</span>
              </div>
              <span>·</span>
              <div className="flex items-center gap-1.5 font-semibold text-stone-800">
                <Award className="w-4 h-4 text-[#9b1747]" />
                <span>{course.level}</span>
              </div>
              <span>·</span>
              <div className="flex items-center gap-1 text-[11px] font-bold text-emerald-800 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                <span>Govt. Recognized Certificate</span>
              </div>
            </div>

            {/* Description */}
            <p className="text-sm text-stone-600 leading-relaxed">
              {course.description}
            </p>

            {/* Key Outcomes */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-stone-900 mb-2.5">
                Core Practical Skills:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-stone-700">
                {course.keyHighlights.map((hl, i) => (
                  <div key={i} className="flex items-start gap-2 bg-stone-50 p-2.5 rounded-lg border border-stone-200/80">
                    <Check className="w-4 h-4 text-[#9b1747] shrink-0 mt-0.5" />
                    <span>{hl}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Syllabus Modules */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-stone-900 mb-3 flex items-center gap-1.5">
                <BookOpen className="w-4 h-4 text-[#9b1747]" />
                <span>Syllabus Breakdown:</span>
              </h4>
              <div className="space-y-3">
                {course.curriculum.map((mod) => (
                  <div key={mod.moduleNumber} className="bg-stone-50 p-3.5 rounded-xl border border-stone-200 text-xs">
                    <div className="font-bold text-stone-900 mb-1 flex items-center gap-2">
                      <span className="text-[#9b1747] font-mono">Module {mod.moduleNumber}:</span>
                      <span>{mod.title}</span>
                    </div>
                    <ul className="mt-2 space-y-1 text-stone-600 pl-4 list-disc list-outside">
                      {mod.topics.map((t, idx) => (
                        <li key={idx}>{t}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Final Project Deliverable */}
            <div className="p-4 bg-[#9b1747]/5 border border-[#9b1747]/20 rounded-xl text-xs text-stone-800">
              <span className="font-bold text-[#9b1747] block mb-1">
                Practical Deliverable:
              </span>
              <span>{course.practicalProject}</span>
            </div>

          </div>

          {/* Footer CTA */}
          <div className="p-4 sm:p-5 bg-stone-50 border-t border-stone-200 flex items-center justify-between gap-3 shrink-0">
            <button
              onClick={onClose}
              className="px-4 py-2 text-xs font-semibold text-stone-600 hover:text-stone-900 transition-colors"
            >
              Close
            </button>

            <button
              onClick={() => {
                onClose();
                onEnquire(course.name);
              }}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#9b1747] hover:bg-[#821136] text-white text-xs font-bold uppercase tracking-wider shadow-sm transition-all"
            >
              <span>Enquire for {course.shortName}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
