import React, { useState, useRef } from 'react';
import { Layers, Sparkles, MoveHorizontal } from 'lucide-react';
import { SoftwareLogo } from './SoftwareLogos';

export const InteractiveComparison: React.FC = () => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percent = Math.max(5, Math.min(95, (x / rect.width) * 100));
    setSliderPosition(percent);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  return (
    <section id="comparison" className="py-16 md:py-24 bg-stone-100 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="text-xs font-semibold text-maroon-800 tracking-wider uppercase mb-2">
            The Design Workflow Transition
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-stone-900 font-display text-balance">
            From 2D Blueprint Drafting to 3D Photorealistic Immersion
          </h2>
          <p className="mt-3 text-stone-600 text-sm sm:text-base leading-relaxed">
            Drag the interactive slider below to see how our students turn raw AutoCAD 2D line layouts into client-winning 3ds Max + V-Ray luxury interior renders.
          </p>
        </div>

        {/* Interactive Comparison Container */}
        <div className="max-w-4xl mx-auto">
          <div
            ref={containerRef}
            className="relative aspect-16/9 rounded-2xl overflow-hidden select-none border border-stone-300 shadow-md cursor-ew-resize group"
            onMouseDown={() => setIsDragging(true)}
            onMouseUp={() => setIsDragging(false)}
            onMouseLeave={() => setIsDragging(false)}
            onMouseMove={handleMouseMove}
            onTouchMove={handleTouchMove}
          >
            {/* Background Image: Finished 3D V-Ray Render (Right Side) */}
            <img
              src="/src/assets/images/hero_interior_render_1792441376270.jpg"
              alt="Final 3ds Max and V-Ray Photorealistic Render"
              referrerPolicy="no-referrer"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute top-4 right-4 z-10 px-3 py-1.5 rounded-lg bg-stone-950/85 backdrop-blur-md text-white text-xs font-semibold flex items-center gap-2 shadow-lg border border-white/10">
              <div className="flex items-center gap-1">
                <SoftwareLogo name="3ds Max" className="w-4 h-4" />
                <SoftwareLogo name="V-Ray" className="w-4 h-4" />
                <SoftwareLogo name="Photoshop" className="w-4 h-4" />
              </div>
              <span>3ds Max + V-Ray + Photoshop</span>
            </div>

            {/* Foreground Clipped Image: AutoCAD 2D Drafting (Left Side) */}
            <div
              className="absolute inset-0 overflow-hidden"
              style={{ width: `${sliderPosition}%` }}
            >
              <img
                src="/src/assets/images/autocad_drafting_plan_1792441376546.jpg"
                alt="Initial AutoCAD 2D Architectural Layout Drafting"
                referrerPolicy="no-referrer"
                className="absolute inset-0 w-full h-full object-cover"
                style={{ width: containerRef.current ? `${containerRef.current.clientWidth}px` : '100%', maxWidth: 'none' }}
              />
              <div className="absolute top-4 left-4 z-10 px-3 py-1.5 rounded-lg bg-stone-950/85 backdrop-blur-md text-white text-xs font-semibold flex items-center gap-2 shadow-lg border border-white/10">
                <SoftwareLogo name="AutoCAD 2D" className="w-4 h-4" />
                <span>AutoCAD 2D Working Drawing</span>
              </div>
            </div>

            {/* Vertical Divider Line with Draggable Handle */}
            <div
              className="absolute top-0 bottom-0 w-1 bg-white shadow-[0_0_10px_rgba(0,0,0,0.5)] z-20 pointer-events-none"
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-white text-stone-900 shadow-lg flex items-center justify-center border-2 border-maroon-800">
                <MoveHorizontal className="w-4 h-4 text-maroon-800" />
              </div>
            </div>
          </div>

          {/* Bottom Guidance & Preset Quick Buttons */}
          <div className="mt-4 flex flex-wrap items-center justify-between gap-4 text-xs text-stone-600">
            <div className="flex items-center gap-2">
              <span className="font-semibold text-stone-900">Interactive tip:</span>
              <span>Click or drag across the image to explore drafting vs rendering</span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setSliderPosition(15)}
                className="px-2.5 py-1 rounded bg-stone-200 hover:bg-stone-300 font-medium transition-colors"
              >
                Show 3D Render
              </button>
              <button
                onClick={() => setSliderPosition(50)}
                className="px-2.5 py-1 rounded bg-stone-200 hover:bg-stone-300 font-medium transition-colors"
              >
                50 / 50 Split
              </button>
              <button
                onClick={() => setSliderPosition(85)}
                className="px-2.5 py-1 rounded bg-stone-200 hover:bg-stone-300 font-medium transition-colors"
              >
                Show 2D Drafting
              </button>
            </div>
          </div>

          {/* Key Difference Cards */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-white border border-stone-200 text-xs sm:text-sm">
              <div className="font-semibold text-stone-900 mb-1 flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-maroon-800 inline-block" />
                <span>AutoCAD 2D Stage</span>
              </div>
              <p className="text-stone-600 text-xs">
                Accurate room dimensions, wall structural thicknesses, door and window swings, electrical switchboard locations, and plumbing clearances.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white border border-stone-200 text-xs sm:text-sm">
              <div className="font-semibold text-stone-900 mb-1 flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500 inline-block" />
                <span>3ds Max & V-Ray Stage</span>
              </div>
              <p className="text-stone-600 text-xs">
                Spatial volume, real-world sunlight angles, warm chandelier and cove illumination, physically accurate marble and velvet fabrics, and post-production polish.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
