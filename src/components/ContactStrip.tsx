import React from 'react';
import { MapPin, Phone, MessageSquare } from 'lucide-react';
import { INSTITUTE_INFO } from '../data/instituteData';

export const ContactStrip: React.FC = () => {
  return (
    <section id="contact" data-section="contact" className="relative bg-[#6e1030] text-white py-10 sm:py-12 border-b border-white/10 scroll-mt-20">
      <div id="location" className="absolute -top-20" />
      <div id="address" className="absolute -top-20" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center divide-y md:divide-y-0 md:divide-x divide-white/20">
          
          {/* Col 1: Visit Our Institute */}
          <div className="md:col-span-5 flex items-start gap-4 pt-4 md:pt-0">
            <div className="w-12 h-12 rounded-full bg-white text-[#6e1030] flex items-center justify-center shrink-0 shadow-md">
              <MapPin className="w-6 h-6 stroke-[2.5]" />
            </div>
            <div className="space-y-1">
              <div className="text-sm font-semibold text-rose-200">
                Visit Our Institute
              </div>
              <p className="text-xs sm:text-sm text-stone-100 font-medium leading-relaxed max-w-sm">
                903, Rijin, Skyline Deepak Mahal,<br />
                Near Dwarka Hotel, Shimpoli Road, Mhatre Wadi,<br />
                Borivali West, Mumbai Maharashtra 400092
              </p>
            </div>
          </div>

          {/* Col 2: Call Us */}
          <div className="md:col-span-4 flex items-center gap-4 pt-6 md:pt-0 md:pl-8">
            <div className="w-12 h-12 rounded-full bg-white text-[#6e1030] flex items-center justify-center shrink-0 shadow-md">
              <Phone className="w-6 h-6 fill-[#6e1030] stroke-none" />
            </div>
            <div>
              <div className="text-xs text-rose-200 font-medium">
                Call Us
              </div>
              <a
                href={`tel:${INSTITUTE_INFO.phone}`}
                className="text-xl sm:text-2xl font-bold font-mono text-white tracking-wide hover:underline block"
              >
                {INSTITUTE_INFO.phone}
              </a>
              <div className="text-[11px] text-stone-200">
                For Course Details & Admissions
              </div>
            </div>
          </div>

          {/* Col 3: Chat on WhatsApp */}
          <div className="md:col-span-3 flex items-center pt-6 md:pt-0 md:pl-8">
            <a
              href={`https://wa.me/${INSTITUTE_INFO.whatsappNumber}?text=Hello%20RK%20Interior%20Designer%20Institute%2C%20I%20would%20like%20to%20inquire%20about%20course%20details%20and%20admissions.`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 group text-white hover:opacity-90 transition-opacity"
            >
              <div className="w-12 h-12 rounded-full bg-white text-emerald-600 flex items-center justify-center shrink-0 shadow-md">
                <MessageSquare className="w-6 h-6 fill-emerald-600 stroke-none" />
              </div>
              <div className="text-sm sm:text-base font-bold text-white group-hover:underline">
                Chat on WhatsApp
              </div>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};
