import React from 'react';
import { ArrowRight, CheckCircle2, Clock, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';
import { IMAGES } from '../assets/images';
import { SoftwareLogo } from './SoftwareLogos';
import { DiyaSvg } from './DiwaliDecoration';

interface CoursesSectionProps {
  onSelectCourse: (courseId: string) => void;
}

interface CourseItem {
  id: string;
  title: string;
  duration: string;
  vendor: string;
  edition: string;
  image: string;
  description: string;
  modules: string[];
}

const COURSES_DATA: CourseItem[] = [
  {
    id: 'autocad-2d',
    title: 'Auto CAD 2D',
    duration: '2 Months',
    vendor: 'Autodesk',
    edition: '2D Architectural & Interior Drafting',
    image: IMAGES.autocad,
    description: 'Master precision 2D drafting, civil layouts, elevations, space planning, false ceiling designs, and municipal-standard residential working drawings.',
    modules: [
      'Civil Layout',
      'Elevation & Section',
      'Furniture Layout',
      'Dimension Layout',
      'Basic Design',
      'Space Planing',
      'Celing Layout',
      'False Celing Design',
      'Electrical Layout',
      'Residential Projects'
    ]
  },
  {
    id: '3dsmax-vray-photoshop',
    title: "3D'SMax Vray Photoshop (6 Το 8 Months)",
    duration: '6 Το 8 Months',
    vendor: 'Autodesk · Chaos · Adobe',
    edition: '3D Spatial Modeling, V-Ray & Post-Production',
    image: IMAGES.livingRoom,
    description: "Complete master diploma in 3D modeling, photorealistic V-Ray global illumination, PBR materials, texturing, and Photoshop post-production.",
    modules: [
      'Modeling',
      'Camera',
      'Basic Keys & Unit Setup',
      'Materials',
      'Spline',
      'Rendering',
      'Poly',
      'Lights',
      'Vray',
      'Texturing',
      'Shape 2D & 3D',
      'UVW Mapping'
    ]
  }
];

export const CoursesSection: React.FC<CoursesSectionProps> = ({ onSelectCourse }) => {
  return (
    <section id="courses" data-section="courses" className="relative py-16 sm:py-24 bg-white border-b border-stone-200/80 scroll-mt-20">
      <div id="programs" className="absolute -top-20" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Diwali Theme */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div>
            <div className="flex items-center gap-2.5 text-xs font-bold text-[#9b1747] uppercase tracking-wider mb-2">
              <DiyaSvg size={18} />
              <span>OUR COURSES · FESTIVE ADMISSIONS OPEN</span>
              <span className="w-10 h-0.5 bg-[#9b1747]/60" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 font-display tracking-tight">
              Industry-Relevant <span className="text-[#9b1747]">Courses</span>
            </h2>
          </div>

          <p className="max-w-md text-stone-600 text-sm sm:text-base leading-relaxed md:text-right">
            Master professional software and drafting techniques with hands-on 1-on-1 practice and real-world Mumbai residential projects.
          </p>
        </div>

        {/* 2 Focused Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 max-w-5xl mx-auto">
          {COURSES_DATA.map((course, index) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              className="bg-white rounded-3xl overflow-hidden border border-amber-300/60 shadow-sm hover:shadow-2xl hover:shadow-amber-500/15 hover:border-amber-400 transition-all flex flex-col justify-between group relative"
            >
              <div>
                {/* Course Image Header with Software Logo & Duration Badge */}
                <div className="relative aspect-16/9 overflow-hidden bg-stone-100">
                  <img
                    src={course.image}
                    alt={course.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-stone-950/20 to-transparent" />

                  {/* Top Left: Duration Badge */}
                  <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#9b1747] text-white text-xs font-bold tracking-wide shadow-md">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{course.duration}</span>
                  </div>

                  {/* Top Right: Official Software Logo(s) */}
                  <div className="absolute top-3.5 right-4 shadow-lg rounded-xl overflow-hidden ring-1 ring-white/30 backdrop-blur-md bg-stone-900/80 p-1.5 flex items-center justify-center transition-transform group-hover:scale-105 duration-300">
                    <SoftwareLogo name={course.title} className="w-8 h-8" />
                  </div>

                  {/* Bottom Image Overlay Tag */}
                  <div className="absolute bottom-3 left-4 right-4 text-white text-xs font-medium text-stone-200 line-clamp-1">
                    {course.edition}
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 sm:p-7 space-y-4">
                  {/* Diwali Festive Special Pill */}
                  <div className="flex items-center justify-between gap-2">
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-amber-500/15 border border-amber-500/35 text-amber-950 text-[11px] font-bold">
                      <Sparkles className="w-3 h-3 text-amber-600" />
                      <span>Diwali Special Batch</span>
                    </div>
                    <span className="text-[11px] font-bold text-[#9b1747]">Govt. Certified</span>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold font-display text-stone-900 tracking-tight">
                      {course.title}
                    </h3>
                    <p className="mt-2 text-xs sm:text-sm text-stone-600 leading-relaxed">
                      {course.description}
                    </p>
                  </div>

                  {/* Festive Bonus Perks Strip */}
                  <div className="p-2.5 rounded-xl bg-amber-50/90 border border-amber-200/80 text-xs text-amber-950 flex items-center gap-2">
                    <DiyaSvg size={16} />
                    <span><strong>Festive Inclusion:</strong> Dedicated 1-on-1 Workstation & Personal Mentorship</span>
                  </div>

                  {/* Learning Modules / Topics List */}
                  <div className="space-y-2.5 pt-2 border-t border-stone-100">
                    <div className="text-xs font-bold uppercase tracking-wider text-stone-800 flex items-center justify-between">
                      <span>Learning Modules ({course.modules.length} Topics):</span>
                      <span className="text-[11px] font-medium text-[#9b1747]">100% Practical</span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                      {course.modules.map((moduleName, idx) => (
                        <div
                          key={idx}
                          className="flex items-center gap-2 px-2.5 py-1.5 rounded-lg bg-stone-50 border border-stone-100 text-xs sm:text-[13px] text-stone-800 font-medium"
                        >
                          <CheckCircle2 className="w-4 h-4 text-[#9b1747] shrink-0" />
                          <span className="truncate">{moduleName}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="px-6 sm:px-7 pb-6 pt-2 border-t border-stone-100/80 flex items-center justify-between gap-4">
                <button
                  onClick={() => onSelectCourse(course.id)}
                  className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#9b1747] hover:text-[#7d1238] group-hover:underline underline-offset-4 transition-all cursor-pointer"
                >
                  <span>Detailed Syllabus & Topics</span>
                  <ArrowRight className="w-4 h-4 stroke-[2.5] group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
