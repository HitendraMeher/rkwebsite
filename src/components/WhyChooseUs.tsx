import React from 'react';
import { WHY_CHOOSE_US, STUDENT_TESTIMONIALS } from '../data/instituteData';
import { Star } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-stone-100 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold text-maroon-800 tracking-wider uppercase mb-2">
            The Private Coaching Advantage
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-stone-900 font-display text-balance">
            Why Students in Mumbai Choose Our Private Computer Classes
          </h2>
          <p className="mt-3 text-stone-600 text-sm sm:text-base leading-relaxed">
            In standard coaching centers, teachers speak from a podium to 25+ students where slow learners lag behind and doubts remain unanswered. We do things differently.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {WHY_CHOOSE_US.map((item, index) => (
            <div
              key={index}
              className="bg-white border border-stone-200 rounded-xl p-6 flex flex-col justify-between shadow-xs hover:border-maroon-800/40 transition-colors"
            >
              <div>
                <div className="border-b border-stone-100 pb-3 mb-4">
                  <div className="text-2xl font-bold font-display text-maroon-800 tabular-nums">
                    {item.stat}
                  </div>
                  <div className="text-xs font-medium text-stone-500">
                    {item.unit}
                  </div>
                </div>

                <h3 className="text-base font-bold font-display text-stone-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Real Student Testimonials / Proof */}
        <div>
          <div className="text-xs font-semibold uppercase tracking-wider text-stone-500 mb-6">
            Student Experiences & Career Outcomes
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {STUDENT_TESTIMONIALS.map((t, idx) => (
              <div
                key={idx}
                className="bg-white border border-stone-200/90 rounded-xl p-6 flex flex-col justify-between shadow-xs"
              >
                <div>
                  <div className="flex items-center gap-1 mb-4 text-amber-500">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 stroke-amber-500" />
                    ))}
                  </div>

                  <p className="text-xs sm:text-sm text-stone-700 italic leading-relaxed mb-6">
                    "{t.quote}"
                  </p>
                </div>

                <div className="border-t border-stone-100 pt-4">
                  <div className="font-semibold text-sm text-stone-900 font-display">
                    {t.name}
                  </div>
                  <div className="text-xs text-maroon-800 font-medium">
                    {t.role}
                  </div>
                  <div className="text-[11px] text-stone-500 mt-0.5">
                    {t.area} · {t.courseTaken}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
