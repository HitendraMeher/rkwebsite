import React, { useState } from 'react';
import { ZoomIn, X, Check } from 'lucide-react';
import { SoftwareLogo } from './SoftwareLogos';

interface GalleryItem {
  id: string;
  title: string;
  category: 'render' | 'cad' | 'commercial';
  software: string;
  image: string;
  description: string;
  details: string[];
}

const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: '1',
    title: 'Contemporary Luxury Living Room Space',
    category: 'render',
    software: '3ds Max · V-Ray · Photoshop',
    image: '/src/assets/images/hero_interior_render_1792441376270.jpg',
    description: 'A complete residential living room visual with recessed cove lighting, textured feature wall, custom modular furniture, and atmospheric evening mood.',
    details: ['AutoCAD floor plan imported and extruded', 'Custom sofa geometry and fabric PBR materials', 'IES spotlights & V-Ray Sun simulation', 'Color graded in Photoshop with Camera Raw']
  },
  {
    id: '2',
    title: 'Architectural Residential Ground Floor CAD Plan',
    category: 'cad',
    software: 'AutoCAD 2D',
    image: '/src/assets/images/autocad_drafting_plan_1792441376546.jpg',
    description: 'Accurate architectural working drawing with room dimensions, door/window schedules, furniture spatial clearances, and wall layers.',
    details: ['Precision grid snapping and dynamic blocks', 'Clearance compliance for living and bedrooms', 'Layered line weights for crisp plotting', 'Municipal approval drawing conventions']
  },
  {
    id: '3',
    title: 'Ultra-Modern Minimalist Kitchen Island',
    category: 'render',
    software: '3ds Max · V-Ray',
    image: '/src/assets/images/vray_kitchen_render_1792441376376.jpg',
    description: 'Italian marble waterfall island, under-counter warm LED linear lighting, matte charcoal cabinets, and photorealistic ambient daylight bounce.',
    details: ['Modular cabinet ergonomics and profile modeling', 'Calacatta marble vein texturing with bump maps', 'Reflective glass and brushed metal fixture shaders', 'V-Ray Frame Buffer exposure balancing']
  },
  {
    id: '4',
    title: 'Serene Luxury Master Bedroom with Fluted Paneling',
    category: 'render',
    software: '3ds Max · V-Ray · Photoshop',
    image: '/src/assets/images/bedroom_interior_render_1792441376675.jpg',
    description: 'Architectural master bedroom interior featuring vertical fluted wood slat accent wall, cozy bedside pendant lighting, and soft woven textures.',
    details: ['Wood slat parametric array modeling', 'Soft fabric displacement on bed throw & pillows', 'Warm 2700K pendant light simulations', 'Window view depth-of-field integration']
  }
];

export const StudentGallery: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'render' | 'cad'>('all');
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  const filteredItems = filter === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(item => item.category === filter);

  return (
    <section id="gallery" className="py-16 md:py-24 bg-stone-50 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="text-xs font-semibold text-maroon-800 tracking-wider uppercase mb-2">
              Portfolio Standards
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-stone-900 font-display text-balance">
              Real Work Created in Our Private Classes
            </h2>
            <p className="mt-3 text-stone-600 text-sm sm:text-base leading-relaxed">
              Every student creates a portfolio of full working drawings and 3D photorealistic visualization renders ready to present to interior design firms.
            </p>
          </div>

          {/* Filter Tabs (Interactive Filter Controls as allowed by skill) */}
          <div className="flex items-center gap-1.5 p-1 bg-stone-200/80 rounded-lg shrink-0">
            <button
              onClick={() => setFilter('all')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-md transition-colors ${
                filter === 'all' ? 'bg-white text-stone-900 shadow-xs' : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              All Projects
            </button>
            <button
              onClick={() => setFilter('render')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-md transition-colors ${
                filter === 'render' ? 'bg-white text-stone-900 shadow-xs' : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              3D V-Ray Renders
            </button>
            <button
              onClick={() => setFilter('cad')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-md transition-colors ${
                filter === 'cad' ? 'bg-white text-stone-900 shadow-xs' : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              2D AutoCAD Plans
            </button>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedItem(item)}
              className="cursor-pointer group bg-white border border-stone-200 rounded-xl overflow-hidden hover:border-maroon-800/40 hover:shadow-md transition-all"
            >
              <div className="relative aspect-16/10 overflow-hidden bg-stone-100">
                <img
                  src={item.image}
                  alt={item.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-stone-950/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="p-3 bg-white/95 rounded-full text-stone-900 shadow-md">
                    <ZoomIn className="w-5 h-5 text-maroon-800" />
                  </div>
                </div>

                <div className="absolute top-3 left-3 text-xs font-medium text-white bg-stone-950/85 backdrop-blur-md px-2.5 py-1 rounded-lg flex items-center gap-1.5 border border-white/10 shadow-md">
                  <div className="flex items-center -space-x-1">
                    {item.software.split('·').map((sw, idx) => (
                      <SoftwareLogo key={idx} name={sw.trim()} className="w-3.5 h-3.5 rounded" />
                    ))}
                  </div>
                  <span>{item.software}</span>
                </div>
              </div>

              <div className="p-5">
                <h3 className="text-lg font-bold font-display text-stone-900 group-hover:text-maroon-800 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 mt-1 line-clamp-2">
                  {item.description}
                </p>
                <div className="mt-3 text-xs font-semibold text-maroon-800 group-hover:underline">
                  Click to inspect project technical details →
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox / Modal */}
      {selectedItem && (
        <div
          className="fixed inset-0 z-50 bg-stone-950/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedItem(null)}
        >
          <div
            className="bg-white rounded-2xl max-w-4xl w-full overflow-hidden shadow-2xl border border-stone-300 animate-in fade-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-16/9 bg-stone-900">
              <img
                src={selectedItem.image}
                alt={selectedItem.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-stone-900/80 hover:bg-stone-900 text-white transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 sm:p-8 space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <div className="flex items-center gap-1.5 text-xs text-stone-700 font-semibold mb-1">
                    <div className="flex items-center -space-x-1">
                      {selectedItem.software.split('·').map((sw, idx) => (
                        <SoftwareLogo key={idx} name={sw.trim()} className="w-4 h-4 rounded" />
                      ))}
                    </div>
                    <span>{selectedItem.software}</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold font-display text-stone-900 mt-0.5">
                    {selectedItem.title}
                  </h3>
                </div>
              </div>

              <p className="text-sm text-stone-700 leading-relaxed">
                {selectedItem.description}
              </p>

              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-stone-900 mb-2">
                  Key Technical Competencies Demonstrated:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-stone-600">
                  {selectedItem.details.map((detail, idx) => (
                    <div key={idx} className="flex items-start gap-2 bg-stone-50 p-2.5 rounded border border-stone-200">
                      <Check className="w-3.5 h-3.5 text-maroon-800 shrink-0 mt-0.5" />
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-2 flex justify-end">
                <button
                  onClick={() => setSelectedItem(null)}
                  className="px-5 py-2 text-xs font-semibold text-stone-700 bg-stone-100 hover:bg-stone-200 rounded-lg transition-colors"
                >
                  Close Preview
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
