import React, { useState } from 'react';
import { Check, Sparkles, Clock, FolderGit2, Briefcase, ArrowRight } from 'lucide-react';
import { COMBO_PACKAGES } from '../data/instituteData';
import { SoftwareLogo } from './SoftwareLogos';

interface ComboCourseCalculatorProps {
  onOpenInquiry: (customComboText?: string) => void;
}

const AVAILABLE_SOFTWARES = [
  { id: 'autocad', name: 'AutoCAD 2D', weeks: 4, projects: 1, role: 'CAD Drafter / Space Planner' },
  { id: 'max', name: '3ds Max', weeks: 6, projects: 2, role: '3D Spatial Modeler' },
  { id: 'vray', name: 'V-Ray', weeks: 4, projects: 2, role: 'Photorealistic Lighting Artist' },
  { id: 'photoshop', name: 'Photoshop', weeks: 3, projects: 1, role: 'Presentation & Post-Production Designer' }
];

export const ComboCourseCalculator: React.FC<ComboCourseCalculatorProps> = ({ onOpenInquiry }) => {
  const [selectedSoftwares, setSelectedSoftwares] = useState<string[]>([
    'autocad',
    'max',
    'vray',
    'photoshop'
  ]);

  const toggleSoftware = (id: string) => {
    if (selectedSoftwares.includes(id)) {
      if (selectedSoftwares.length > 1) {
        setSelectedSoftwares(selectedSoftwares.filter(s => s !== id));
      }
    } else {
      setSelectedSoftwares([...selectedSoftwares, id]);
    }
  };

  const selectAll = () => {
    setSelectedSoftwares(['autocad', 'max', 'vray', 'photoshop']);
  };

  // Compute calculated values
  const totalWeeks = selectedSoftwares.reduce((acc, curr) => {
    const sw = AVAILABLE_SOFTWARES.find(s => s.id === curr);
    return acc + (sw ? sw.weeks : 0);
  }, 0);

  // When combined, private pacing optimizes duration by ~20%
  const optimizedDurationMonths = (totalWeeks * 0.85 / 4).toFixed(1);

  const totalProjects = selectedSoftwares.reduce((acc, curr) => {
    const sw = AVAILABLE_SOFTWARES.find(s => s.id === curr);
    return acc + (sw ? sw.projects : 0);
  }, 0) + (selectedSoftwares.length >= 3 ? 1 : 0);

  const selectedNames = selectedSoftwares
    .map(s => AVAILABLE_SOFTWARES.find(sw => sw.id === s)?.name)
    .filter(Boolean)
    .join(' + ');

  return (
    <section id="curriculum" className="py-16 md:py-24 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold text-maroon-800 tracking-wider uppercase mb-2">
            Custom Career Pathways
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-stone-900 font-display text-balance">
            Pre-Packaged Combos or Build Your Own Course Bundle
          </h2>
          <p className="mt-3 text-stone-600 text-sm sm:text-base leading-relaxed">
            Select the exact software you need to learn. Because all our sessions are private computer classes, our curriculum adapts to your existing background.
          </p>
        </div>

        {/* 3 Pre-Packaged Bundles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {COMBO_PACKAGES.map((pkg) => (
            <div
              key={pkg.id}
              className="bg-stone-50 border border-stone-200 rounded-xl p-6 flex flex-col justify-between hover:border-maroon-800/40 transition-all shadow-xs"
            >
              <div>
                <div className="flex items-center justify-between text-xs mb-3">
                  <span className="font-semibold text-maroon-800 uppercase tracking-wide">
                    {pkg.badge}
                  </span>
                  <span className="text-stone-500 font-medium">
                    {pkg.duration}
                  </span>
                </div>

                <h3 className="text-xl font-bold font-display text-stone-900 mb-1">
                  {pkg.title}
                </h3>
                <p className="text-xs font-medium text-stone-600 mb-4">
                  {pkg.subtitle}
                </p>

                <p className="text-xs text-stone-500 mb-4 pb-4 border-b border-stone-200">
                  <strong className="text-stone-700">Best for:</strong> {pkg.suitableFor}
                </p>

                <div className="space-y-2 mb-6">
                  <div className="text-xs font-semibold uppercase tracking-wider text-stone-800 mb-2">
                    Included Software:
                  </div>
                  {pkg.includedSoftware.map((sw, idx) => (
                    <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm text-stone-700">
                      <SoftwareLogo name={sw} className="w-5 h-5 shrink-0 shadow-xs" />
                      <span className="font-medium">{sw}</span>
                    </div>
                  ))}
                </div>

                <div className="p-3 bg-white rounded-lg border border-stone-200 text-xs text-stone-600 mb-6">
                  <span className="font-semibold text-stone-900 block mb-0.5">
                    Portfolio Deliverable:
                  </span>
                  {pkg.projectsCount}
                </div>
              </div>

              <button
                onClick={() => onOpenInquiry(`Package: ${pkg.title}`)}
                className="w-full py-2.5 px-4 text-xs font-semibold uppercase tracking-wider text-white bg-maroon-800 hover:bg-maroon-900 rounded-lg transition-colors flex items-center justify-center gap-2 shadow-xs cursor-pointer"
              >
                <span>Select this Package</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          ))}
        </div>

        {/* Interactive Custom Course Builder Box */}
        <div className="bg-stone-900 text-white rounded-2xl p-6 sm:p-10 border border-stone-800 shadow-xl">
          <div className="max-w-3xl mb-8">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-amber-400 tracking-wider uppercase mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Interactive Customizer</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold font-display text-white">
              Design Your Personalized Training Plan
            </h3>
            <p className="text-xs sm:text-sm text-stone-300 mt-1">
              Select or deselect software below to estimate your course duration and portfolio scope.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Software Checkboxes */}
            <div className="lg:col-span-7 space-y-3">
              {AVAILABLE_SOFTWARES.map((sw) => {
                const isSelected = selectedSoftwares.includes(sw.id);
                return (
                  <div
                    key={sw.id}
                    onClick={() => toggleSoftware(sw.id)}
                    className={`cursor-pointer p-4 rounded-xl border transition-all flex items-center justify-between ${
                      isSelected
                        ? 'bg-stone-800/95 border-rose-500/80 text-white shadow-md'
                        : 'bg-stone-950/40 border-stone-800 text-stone-400 hover:border-stone-700'
                    }`}
                  >
                    <div className="flex items-center gap-3.5">
                      <div
                        className={`w-5 h-5 rounded flex items-center justify-center border transition-colors ${
                          isSelected ? 'bg-maroon-600 border-maroon-500 text-white' : 'border-stone-600 bg-stone-900'
                        }`}
                      >
                        {isSelected && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                      </div>

                      {/* Real Software Logo */}
                      <div className="shrink-0 p-0.5 rounded-lg bg-stone-950 border border-stone-700/80">
                        <SoftwareLogo name={sw.name} className="w-8 h-8" />
                      </div>

                      <div>
                        <div className="font-semibold text-sm sm:text-base text-stone-100 flex items-center gap-2">
                          <span>{sw.name}</span>
                        </div>
                        <div className="text-xs text-stone-400">
                          {sw.role}
                        </div>
                      </div>
                    </div>

                    <div className="text-right text-xs text-stone-400 font-mono">
                      ~{sw.weeks} wks
                    </div>
                  </div>
                );
              })}

              <div className="pt-2 flex items-center gap-3 text-xs">
                <button
                  onClick={selectAll}
                  className="text-amber-400 hover:underline cursor-pointer"
                >
                  Select All 4 Programs (Recommended)
                </button>
              </div>
            </div>

            {/* Live Calculation Output Card */}
            <div className="lg:col-span-5 bg-stone-800/80 border border-stone-700/80 rounded-xl p-6 space-y-5">
              <h4 className="text-sm font-semibold uppercase tracking-wider text-stone-200 pb-3 border-b border-stone-700">
                Your Customized Plan
              </h4>

              <div className="space-y-4 text-xs sm:text-sm">
                <div>
                  <div className="text-xs text-stone-400 mb-1.5">Selected Programs:</div>
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    {selectedSoftwares.map(swId => {
                      const sw = AVAILABLE_SOFTWARES.find(s => s.id === swId);
                      if (!sw) return null;
                      return (
                        <div key={swId} className="flex items-center gap-1.5 bg-stone-900/90 border border-stone-700 px-2 py-1 rounded-md text-xs text-white">
                          <SoftwareLogo name={sw.name} className="w-4 h-4" />
                          <span>{sw.name}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 pt-2">
                  <div className="bg-stone-900/80 p-3 rounded-lg border border-stone-700/50">
                    <div className="flex items-center gap-1.5 text-stone-400 text-xs mb-1">
                      <Clock className="w-3.5 h-3.5 text-amber-400" />
                      <span>Est. Duration</span>
                    </div>
                    <div className="text-lg font-bold text-white font-mono">
                      ~{optimizedDurationMonths} Months
                    </div>
                    <div className="text-[11px] text-stone-500">Flexible pacing</div>
                  </div>

                  <div className="bg-stone-900/80 p-3 rounded-lg border border-stone-700/50">
                    <div className="flex items-center gap-1.5 text-stone-400 text-xs mb-1">
                      <FolderGit2 className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Portfolio Projects</span>
                    </div>
                    <div className="text-lg font-bold text-white font-mono">
                      {totalProjects} Projects
                    </div>
                    <div className="text-[11px] text-stone-500">Ready for review</div>
                  </div>
                </div>

                <div className="pt-1 text-xs text-stone-300 flex items-start gap-2">
                  <Briefcase className="w-4 h-4 text-maroon-400 shrink-0 mt-0.5" />
                  <span>Includes 1-on-1 private instruction at our Borivali West computer lab & official course certificate.</span>
                </div>
              </div>

              <button
                onClick={() => onOpenInquiry(`Custom Plan: ${selectedNames} (~${optimizedDurationMonths} Months)`)}
                className="w-full py-3 px-4 text-xs font-semibold uppercase tracking-wider text-stone-900 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors flex items-center justify-center gap-2 shadow-sm font-display font-bold"
              >
                <span>Get Fees & Batch Schedule</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
