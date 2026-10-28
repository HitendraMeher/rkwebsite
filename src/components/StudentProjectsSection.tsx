import React, { useState } from 'react';
import { ArrowRight, ZoomIn, X, CheckCircle2, Layers } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { IMAGES } from '../assets/images';
import { SoftwareLogo } from './SoftwareLogos';

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  courseId: 'autocad-2d' | '3dsmax-vray-photoshop';
  courseName: string;
  duration: string;
  image: string;
  software: string;
  modulesCovered: string[];
  description: string;
}

const FEATURED_PROJECTS: ProjectItem[] = [
  {
    id: 'p1',
    title: '2BHK Residential Civil & Furniture Layout',
    category: 'Civil Layout & Space Planning',
    courseId: 'autocad-2d',
    courseName: 'Auto CAD 2D',
    duration: '2 Months',
    image: IMAGES.cadCivil,
    software: 'AutoCAD 2D',
    modulesCovered: ['Civil Layout', 'Furniture Layout', 'Dimension Layout', 'Space Planing', 'Residential Projects'],
    description: 'Precision architectural working plan prepared by our student following standard municipal codes: complete civil wall dimensions, spatial clearance, furniture layouts, door schedule, and elevation markers.'
  },
  {
    id: 'p2',
    title: 'Luxury Living Room 3D Photorealistic Render',
    category: 'Photorealistic Interior Rendering',
    courseId: '3dsmax-vray-photoshop',
    courseName: "3D'SMax Vray Photoshop",
    duration: '6 Το 8 Months',
    image: IMAGES.livingRoom,
    software: '3ds Max · V-Ray · Photoshop',
    modulesCovered: ['Poly Modeling', 'Camera', 'Materials', 'Lights', 'Vray', 'Photoshop'],
    description: 'High-end contemporary living room designed with 3ds Max poly modeling, realistic V-Ray sun/sky illumination, custom wood panelling textures, and post-production color balance in Adobe Photoshop.'
  },
  {
    id: 'p3',
    title: 'Master Bedroom Ambience & Texture Render',
    category: '3D Materials & Lighting Design',
    courseId: '3dsmax-vray-photoshop',
    courseName: "3D'SMax Vray Photoshop",
    duration: '6 Το 8 Months',
    image: IMAGES.bedroom,
    software: '3ds Max · V-Ray · Photoshop',
    modulesCovered: ['Spline', 'UVW Mapping', 'Materials', 'Camera', 'Vray'],
    description: 'Serene luxury master suite featuring acoustic vertical fluted timber slat feature wall, realistic bed linen UVW mapping, physical camera exposure tuning, and warm recessed cove lighting.'
  }
];

// All projects for the full gallery modal
const ALL_GALLERY_PROJECTS: ProjectItem[] = [
  ...FEATURED_PROJECTS,
  {
    id: 'p4',
    title: 'False Ceiling & Electrical Lighting Layout',
    category: 'Ceiling Design & Electrical Layout',
    courseId: 'autocad-2d',
    courseName: 'Auto CAD 2D',
    duration: '2 Months',
    image: IMAGES.cadCeiling,
    software: 'AutoCAD 2D',
    modulesCovered: ['Celing Layout', 'False Celing Design', 'Electrical Layout', 'Dimension Layout'],
    description: 'Comprehensive 2D false ceiling drawing showing gypsum cove levels, recessed LED spotlight coordinates, ceiling fan points, switchboard locations, and distribution board circuit loops.'
  },
  {
    id: 'p5',
    title: 'Modern Modular Kitchen & Island 3D',
    category: 'Cabinetry & Material Texturing',
    courseId: '3dsmax-vray-photoshop',
    courseName: "3D'SMax Vray Photoshop",
    duration: '6 Το 8 Months',
    image: IMAGES.kitchen,
    software: '3ds Max · V-Ray · Photoshop',
    modulesCovered: ['Modeling', 'Materials', 'Texturing', 'Vray', 'Photoshop'],
    description: 'Modular kitchen cabinetry with Italian marble waterfall island, matte textured panels, under-cabinet strip lighting, and photorealistic V-Ray reflections.'
  },
  {
    id: 'p6',
    title: 'Warm Dining Area & Chandelier Ambience',
    category: 'Lighting & Camera Composition',
    courseId: '3dsmax-vray-photoshop',
    courseName: "3D'SMax Vray Photoshop",
    duration: '6 Το 8 Months',
    image: IMAGES.dining,
    software: '3ds Max · V-Ray · Photoshop',
    modulesCovered: ['Camera', 'Lights', 'Materials', 'Rendering'],
    description: 'Photorealistic dining space study with suspended glass chandelier fixtures, warm wooden textures, and balanced daylight-ambient illumination.'
  },
  {
    id: 'p7',
    title: 'Architectural Working Drawing & Spatial Plan',
    category: 'Elevation, Section & Clearances',
    courseId: 'autocad-2d',
    courseName: 'Auto CAD 2D',
    duration: '2 Months',
    image: IMAGES.autocad,
    software: 'AutoCAD 2D',
    modulesCovered: ['Civil Layout', 'Elevation & Section', 'Space Planing', 'Basic Design'],
    description: 'Detailed floor plan with wall thickness notations, room dimensions, sectional markers, and municipal submission line weights.'
  }
];

export const StudentProjectsSection: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [isFullGalleryOpen, setIsFullGalleryOpen] = useState(false);
  const [galleryFilter, setGalleryFilter] = useState<'all' | 'autocad-2d' | '3dsmax-vray-photoshop'>('all');

  const filteredGalleryProjects = galleryFilter === 'all'
    ? ALL_GALLERY_PROJECTS
    : ALL_GALLERY_PROJECTS.filter(p => p.courseId === galleryFilter);

  return (
    <section id="gallery" data-section="gallery" className="relative py-16 sm:py-24 bg-white border-b border-stone-200/80 scroll-mt-20">
      <div id="projects" data-section="projects" className="absolute -top-20" />
      <div id="student-work" className="absolute -top-20" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-3 text-xs font-bold text-[#9b1747] uppercase tracking-wider mb-2">
              <span>OUR WORK</span>
              <span className="w-10 h-0.5 bg-[#9b1747]/60" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 font-display tracking-tight">
              Student <span className="text-[#9b1747]">Projects</span>
            </h2>
            <p className="text-sm sm:text-base text-stone-600 mt-2 max-w-2xl">
              Authentic work produced by students during our 2 industry-focused courses: <strong>AutoCAD 2D</strong> drafting layouts and <strong>3ds Max + V-Ray + Photoshop</strong> photorealistic 3D interior renders.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setIsFullGalleryOpen(true)}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-800 text-xs sm:text-sm font-semibold transition-all cursor-pointer shadow-2xs"
            >
              <span>View All Projects</span>
              <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
            </motion.button>
          </div>
        </div>

        {/* 3 Column Projects Grid directly representing both courses */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {FEATURED_PROJECTS.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.12, duration: 0.5 }}
              whileHover={{ y: -6 }}
              className="group cursor-pointer flex flex-col bg-white rounded-2xl border border-stone-200 shadow-sm hover:shadow-xl transition-all overflow-hidden"
              onClick={() => setSelectedProject(project)}
            >
              {/* Image Frame */}
              <div className="relative aspect-16/11 overflow-hidden bg-stone-900">
                <img
                  src={project.image}
                  alt={project.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-104 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-stone-950/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="p-3 rounded-full bg-white text-stone-900 shadow-md">
                    <ZoomIn className="w-5 h-5 text-[#9b1747]" />
                  </div>
                </div>

                {/* Course Badge Top-Left */}
                <div className="absolute top-3 left-3 bg-[#9b1747]/90 backdrop-blur-md text-white text-[10px] font-bold px-2.5 py-1 rounded-md shadow-md border border-white/20">
                  {project.courseName} · {project.duration}
                </div>

                {/* Software Pill Tag with Real Logos Bottom-Left */}
                <div className="absolute bottom-3 left-3 bg-stone-950/85 backdrop-blur-md text-white text-[10px] font-medium px-2.5 py-1 rounded-lg flex items-center gap-1.5 shadow-md border border-white/10">
                  <div className="flex items-center -space-x-1 mr-0.5">
                    {project.software.split('·').map((sw, i) => (
                      <SoftwareLogo key={i} name={sw.trim()} className="w-3.5 h-3.5 rounded" />
                    ))}
                  </div>
                  <span>{project.software}</span>
                </div>
              </div>

              {/* Caption Underneath */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <div className="text-[11px] font-semibold text-[#9b1747] uppercase tracking-wide mb-1">
                    {project.category}
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-stone-900 font-display group-hover:text-[#9b1747] transition-colors leading-snug">
                    {project.title}
                  </h3>
                  <p className="text-xs text-stone-500 mt-2 line-clamp-2 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Modules Tags */}
                <div className="mt-4 pt-3 border-t border-stone-100 flex flex-wrap gap-1.5">
                  {project.modulesCovered.slice(0, 3).map((mod, i) => (
                    <span
                      key={i}
                      className="inline-flex items-center gap-1 text-[10px] font-medium text-stone-600 bg-stone-100 px-2 py-0.5 rounded-md"
                    >
                      <CheckCircle2 className="w-2.5 h-2.5 text-[#9b1747]" />
                      {mod}
                    </span>
                  ))}
                  {project.modulesCovered.length > 3 && (
                    <span className="text-[10px] font-medium text-stone-400 self-center">
                      +{project.modulesCovered.length - 3} more
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal for Single Project */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-stone-950/85 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-white rounded-2xl max-w-3xl w-full overflow-hidden shadow-2xl border border-stone-300 my-6"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative aspect-16/10 bg-stone-900">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-contain"
                />
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 p-2 rounded-full bg-stone-900/80 hover:bg-stone-900 text-white transition-colors cursor-pointer"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
                <div className="absolute top-4 left-4 bg-[#9b1747] text-white text-xs font-bold px-3 py-1 rounded-md shadow-md">
                  {selectedProject.courseName} ({selectedProject.duration})
                </div>
              </div>

              <div className="p-6 space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <span className="text-xs font-bold text-[#9b1747] uppercase tracking-wider">
                      {selectedProject.category}
                    </span>
                    <h3 className="text-xl font-bold font-display text-stone-900 mt-0.5">
                      {selectedProject.title}
                    </h3>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg bg-stone-100 border border-stone-200 text-stone-800">
                    <div className="flex items-center -space-x-1">
                      {selectedProject.software.split('·').map((sw, i) => (
                        <SoftwareLogo key={i} name={sw.trim()} className="w-4 h-4 rounded" />
                      ))}
                    </div>
                    <span>{selectedProject.software}</span>
                  </div>
                </div>

                <p className="text-sm text-stone-600 leading-relaxed">
                  {selectedProject.description}
                </p>

                {/* Modules Covered Section */}
                <div className="bg-stone-50 rounded-xl p-4 border border-stone-200/80">
                  <div className="flex items-center gap-2 text-xs font-bold text-stone-700 uppercase tracking-wider mb-2">
                    <Layers className="w-3.5 h-3.5 text-[#9b1747]" />
                    <span>Learning Modules Applied in this Project:</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.modulesCovered.map((mod, i) => (
                      <span
                        key={i}
                        className="inline-flex items-center gap-1.5 text-xs font-medium text-stone-800 bg-white border border-stone-200 px-2.5 py-1 rounded-lg"
                      >
                        <CheckCircle2 className="w-3 h-3 text-[#9b1747]" />
                        {mod}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-2 flex justify-end">
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="px-4 py-2 text-xs font-semibold text-stone-700 bg-stone-100 hover:bg-stone-200 rounded-lg transition-colors cursor-pointer"
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Full Gallery Modal with Course Filters */}
      <AnimatePresence>
        {isFullGalleryOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-stone-950/85 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto"
            onClick={() => setIsFullGalleryOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-white rounded-2xl max-w-5xl w-full p-6 sm:p-8 my-8 shadow-2xl border border-stone-300 max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-stone-200 gap-4">
                <div>
                  <h3 className="text-2xl font-bold font-display text-stone-900">
                    Student Projects Gallery
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-500 mt-0.5">
                    Authentic 2D drafting drawings & 3D interior renders created by students at RK Interior Designer Institute, Borivali West
                  </p>
                </div>
                <button
                  onClick={() => setIsFullGalleryOpen(false)}
                  className="p-2 self-end sm:self-auto rounded-full hover:bg-stone-100 text-stone-500 hover:text-stone-900 transition-colors cursor-pointer"
                  aria-label="Close gallery"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Course Filter Tabs */}
              <div className="flex flex-wrap items-center gap-2 pt-6 pb-2">
                <button
                  onClick={() => setGalleryFilter('all')}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    galleryFilter === 'all'
                      ? 'bg-[#9b1747] text-white shadow-sm'
                      : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
                  }`}
                >
                  All Projects ({ALL_GALLERY_PROJECTS.length})
                </button>
                <button
                  onClick={() => setGalleryFilter('autocad-2d')}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    galleryFilter === 'autocad-2d'
                      ? 'bg-[#9b1747] text-white shadow-sm'
                      : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
                  }`}
                >
                  Auto CAD 2D (2 Months)
                </button>
                <button
                  onClick={() => setGalleryFilter('3dsmax-vray-photoshop')}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    galleryFilter === '3dsmax-vray-photoshop'
                      ? 'bg-[#9b1747] text-white shadow-sm'
                      : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
                  }`}
                >
                  3D'SMax Vray Photoshop (6-8 Months)
                </button>
              </div>

              {/* Projects Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-6">
                {filteredGalleryProjects.map((proj) => (
                  <div
                    key={proj.id}
                    className="cursor-pointer group flex flex-col bg-stone-50 rounded-xl border border-stone-200 overflow-hidden hover:shadow-lg transition-all"
                    onClick={() => {
                      setSelectedProject(proj);
                    }}
                  >
                    <div className="relative aspect-4/3 overflow-hidden bg-stone-900">
                      <img
                        src={proj.image}
                        alt={proj.title}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover group-hover:scale-104 transition-transform duration-500"
                      />
                      <div className="absolute top-2 left-2 bg-[#9b1747]/90 text-white text-[9px] font-bold px-2 py-0.5 rounded shadow">
                        {proj.courseName}
                      </div>
                      <div className="absolute bottom-2 left-2 bg-stone-950/85 backdrop-blur-md text-white text-[10px] px-2 py-0.5 rounded-md flex items-center gap-1 border border-white/10">
                        <div className="flex items-center -space-x-1">
                          {proj.software.split('·').map((sw, i) => (
                            <SoftwareLogo key={i} name={sw.trim()} className="w-3 h-3 rounded" />
                          ))}
                        </div>
                        <span>{proj.software}</span>
                      </div>
                    </div>
                    <div className="p-3.5 flex-1 flex flex-col justify-between">
                      <div>
                        <h4 className="text-sm font-bold text-stone-900 font-display group-hover:text-[#9b1747] transition-colors leading-snug">
                          {proj.title}
                        </h4>
                        <p className="text-xs text-stone-500 mt-0.5">{proj.category}</p>
                      </div>
                      <div className="mt-3 flex flex-wrap gap-1">
                        {proj.modulesCovered.slice(0, 2).map((mod, i) => (
                          <span key={i} className="text-[9px] bg-white border border-stone-200 text-stone-600 px-1.5 py-0.5 rounded">
                            {mod}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
};
