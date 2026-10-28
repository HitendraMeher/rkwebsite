import React from 'react';
import { X, MapPin, Phone, ShieldCheck } from 'lucide-react';
import { INSTITUTE_INFO } from '../data/instituteData';
import { IMAGES } from '../assets/images';

interface BannerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BannerModal: React.FC<BannerModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-stone-950/80 backdrop-blur-sm flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl max-w-2xl w-full overflow-hidden shadow-2xl border border-stone-300 animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="p-4 sm:p-5 border-b border-stone-200 flex items-center justify-between bg-stone-50">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-maroon-800" />
            <div>
              <h3 className="text-sm font-bold text-stone-900 font-display">
                Official Institute Desk Banner
              </h3>
              <p className="text-[11px] text-stone-500">
                At our Borivali West Office (Skyline Deepak Mahal)
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-stone-500 hover:text-stone-900 hover:bg-stone-200 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Banner Image Preview */}
        <div className="p-4 sm:p-6 bg-stone-100 flex items-center justify-center max-h-[60vh] overflow-y-auto">
          <div className="relative rounded-lg overflow-hidden shadow-lg border border-stone-300 bg-white">
            <img
              src={IMAGES.banner}
              alt="Official Rk Interior Designer Institute Banner"
              referrerPolicy="no-referrer"
              className="max-h-[50vh] w-auto object-contain mx-auto"
            />
          </div>
        </div>

        {/* Banner Details Extracted */}
        <div className="p-4 sm:p-6 bg-white space-y-3 text-xs text-stone-600 border-t border-stone-200">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="flex items-start gap-2">
              <MapPin className="w-4 h-4 text-maroon-800 shrink-0 mt-0.5" />
              <span>{INSTITUTE_INFO.address}</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-maroon-800 shrink-0" />
              <span className="font-semibold text-stone-900 font-mono text-sm">
                Contact: {INSTITUTE_INFO.phone}
              </span>
            </div>
          </div>

          <div className="pt-2 flex items-center justify-end">
            <button
              onClick={onClose}
              className="px-4 py-2 text-xs font-semibold text-white bg-maroon-800 hover:bg-maroon-900 rounded-lg transition-colors"
            >
              Close Preview
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
