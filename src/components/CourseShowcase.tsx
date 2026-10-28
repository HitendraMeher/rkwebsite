import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Check, ArrowRight, BookOpen, Clock, Award } from 'lucide-react';
import { COURSES } from '../data/instituteData';
import { Course } from '../types';
import { SoftwareLogo } from './SoftwareLogos';

interface CourseShowcaseProps {
  onSelectCourse: (courseId: string) => void;
}

export const CourseShowcase: React.FC<CourseShowcaseProps> = ({ onSelectCourse }) => {
  const [expandedSyllabus, setExpandedSyllabus] = useState<string | null>(null);

  const toggleSyllabus = (courseId: string) => {
    setExpandedSyllabus(expandedSyllabus === courseId ? null : courseId);
  };

  return (
    <section id="courses" className="py-16 md:py-24 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold text-maroon-800 tracking-wider uppercase mb-2">
            Industry Certified Curriculum
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-stone-900 font-display text-balance">
            The 4 Essential Interior Design Software Modules
          </h2>
          <p className="mt-3 text-stone-600 text-base leading-relaxed">
            Every module is taught with a 1-on-1 hands-on methodology. From the initial 2D floor plan draft to photorealistic 3D visualization and client presentation portfolios.
          </p>
        </div>

        {/* 4 Course Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {COURSES.map((course: Course, index) => {
            const isExpanded = expandedSyllabus === course.id;

            return (
              <div
                key={course.id}
                className="flex flex-col bg-stone-50/70 border border-stone-200 rounded-xl overflow-hidden hover:border-maroon-800/40 transition-colors shadow-xs"
              >
                {/* Card Media Header */}
                <div className="relative aspect-16/9 bg-stone-200 overflow-hidden">
                  <img
                    src={course.image}
                    alt={course.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent" />
                  
                  <div className="absolute top-3 left-3 text-xs font-semibold text-white bg-maroon-900/90 px-2.5 py-1 rounded">
                    0{index + 1} · {course.badge}
                  </div>

                  {/* Real Official Software Logo */}
                  <div className="absolute top-3 right-3 shadow-lg rounded-xl overflow-hidden ring-1 ring-white/30 backdrop-blur-md bg-stone-900/60 p-1">
                    <SoftwareLogo name={course.name} className="w-9 h-9" />
                  </div>

                  <div className="absolute bottom-3 left-4 right-4 text-white">
                    <div className="flex items-center gap-2.5">
                      <SoftwareLogo name={course.name} className="w-6 h-6 shrink-0 hidden sm:block drop-shadow" />
                      <h3 className="text-xl font-bold font-display text-white">
                        {course.name}
                      </h3>
                    </div>
                    <p className="text-xs text-stone-300 mt-0.5">{course.tagline}</p>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-6">
                  
                  {/* Meta Strip (Unboxed) */}
                  <div className="flex flex-wrap items-center gap-3 text-xs text-stone-500 border-b border-stone-200 pb-4">
                    <div className="flex items-center gap-1.5 text-stone-700">
                      <Clock className="w-3.5 h-3.5 text-maroon-700" />
                      <span>{course.duration}</span>
                    </div>
                    <span aria-hidden="true" className="text-stone-300">·</span>
                    <div className="flex items-center gap-1.5 text-stone-700">
                      <Award className="w-3.5 h-3.5 text-maroon-700" />
                      <span>{course.level}</span>
                    </div>
                  </div>

                  {/* Summary */}
                  <p className="text-sm text-stone-600 leading-relaxed">
                    {course.description}
                  </p>

                  {/* Key Highlights */}
                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-stone-900 mb-2.5">
                      Core Learning Outcomes
                    </h4>
                    <ul className="space-y-2 text-xs sm:text-sm text-stone-700">
                      {course.keyHighlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <Check className="w-4 h-4 text-maroon-800 shrink-0 mt-0.5" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Practical Project Outcome */}
                  <div className="p-3.5 bg-white border border-stone-200/90 rounded-lg text-xs">
                    <span className="font-semibold text-stone-900 block mb-1">
                      Final Practical Project:
                    </span>
                    <span className="text-stone-600 leading-normal">
                      {course.practicalProject}
                    </span>
                  </div>

                  {/* Expandable Syllabus Accordion */}
                  <div>
                    <button
                      onClick={() => toggleSyllabus(course.id)}
                      className="w-full flex items-center justify-between py-2 text-xs font-semibold text-maroon-800 hover:text-maroon-900 transition-colors border-t border-stone-200/80 pt-3"
                    >
                      <span className="flex items-center gap-1.5">
                        <BookOpen className="w-3.5 h-3.5" />
                        {isExpanded ? 'Hide Detailed Syllabus' : 'View Detailed Syllabus Modules'}
                      </span>
                      {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </button>

                    {isExpanded && (
                      <div className="mt-4 pt-2 border-t border-stone-100 space-y-4">
                        {course.curriculum.map((mod) => (
                          <div key={mod.moduleNumber} className="bg-white p-3.5 rounded border border-stone-200 text-xs">
                            <div className="font-semibold text-stone-900 mb-1 flex items-center gap-2">
                              <span className="text-maroon-800 font-mono">Module {mod.moduleNumber}:</span>
                              <span>{mod.title}</span>
                            </div>
                            <ul className="mt-2 space-y-1 text-stone-600 pl-4 list-disc list-outside">
                              {mod.topics.map((topic, tidx) => (
                                <li key={tidx}>{topic}</li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Card Actions */}
                  <div className="pt-2 flex items-center justify-between gap-3 border-t border-stone-200">
                    <button
                      onClick={() => onSelectCourse(course.id)}
                      className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 text-xs font-semibold uppercase tracking-wider text-white bg-maroon-800 rounded-lg hover:bg-maroon-900 transition-all shadow-xs"
                    >
                      <span>Inquire / Enroll in {course.shortName}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
