import React from 'react';
import { ArrowRight, GraduationCap, Users, Briefcase, MapPin, CheckCircle2, ShieldCheck, Compass, Star } from 'lucide-react';
import { motion } from 'motion/react';

interface WhyChooseSectionProps {
  onOpenEnquire: () => void;
}

export const WhyChooseSection: React.FC<WhyChooseSectionProps> = ({ onOpenEnquire }) => {
  return (
    <section 
      id="about" 
      data-section="about" 
      className="relative py-16 sm:py-24 bg-[#fcfbf9] border-b border-stone-200/80 overflow-hidden scroll-mt-20"
    >
      <div id="why-us" data-section="why-us" className="absolute -top-20" />
      <div id="why-choose" className="absolute -top-20" />


      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* ========================================================= */}
          {/* LEFT COLUMN: Headings, Paragraph, Button & Certificate Banner */}
          {/* ========================================================= */}
          <div className="lg:col-span-6 space-y-7">
            
            {/* Header tag with trailing line */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-3 text-xs font-bold text-[#9b1747] uppercase tracking-wider"
            >
              <span>ABOUT US • WHY CHOOSE RK</span>
              <span className="w-12 h-0.5 bg-[#9b1747]" />
            </motion.div>

            {/* Main Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl sm:text-4xl lg:text-[2.85rem] font-extrabold text-stone-900 font-display tracking-tight leading-[1.12]"
            >
              More Than <br />
              <span className="text-[#9b1747]">Just a Computer Class</span>
            </motion.h2>

            {/* Description Paragraph including Basic Vastu */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="text-stone-600 text-sm sm:text-base leading-relaxed"
            >
              Founded in Borivali West, RK Interior Designer Institute is dedicated to empowering students, architects, and designers with real-world drafting and 3D visualization capabilities through focused private computer classes. <strong>We do teach basic vastu as per interior design</strong> to ensure our students learn both technical drafting precision and traditional spatial harmony.
            </motion.p>

            {/* Enquire Now CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <button
                onClick={onOpenEnquire}
                className="inline-flex items-center gap-3 px-8 py-3.5 rounded-full bg-[#9b1747] text-white text-sm sm:text-base font-semibold shadow-md hover:bg-[#831037] hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer"
              >
                <span>Enquire Now</span>
                <ArrowRight className="w-4 h-4 stroke-[2.5]" />
              </button>
            </motion.div>

            {/* Government-Recognised Certificate Included Card (Exact Match to Reference Mockup) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="relative p-6 sm:p-7 rounded-3xl bg-gradient-to-br from-amber-50/70 via-white to-rose-50/40 border-2 border-amber-300 shadow-xs overflow-hidden mt-6"
            >

              <div className="relative z-10 space-y-4">
                {/* Header row with Red Shield Icon and 2 Pill Badges */}
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-rose-600 to-[#9b1747] text-white flex items-center justify-center shrink-0 shadow-md">
                    <ShieldCheck className="w-7 h-7 stroke-[2.2]" />
                  </div>

                  <div className="space-y-1.5 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="inline-flex items-center gap-1 px-3 py-1 text-[11px] font-extrabold uppercase tracking-wider rounded-full bg-amber-500 text-white shadow-xs">
                        <Star className="w-3 h-3 fill-current" />
                        OFFICIAL ACCREDITATION
                      </span>
                      <span className="inline-flex items-center gap-1 px-3 py-1 text-[11px] font-bold uppercase tracking-wider rounded-full bg-emerald-100 text-emerald-800 border border-emerald-300">
                        <CheckCircle2 className="w-3 h-3 text-emerald-700" />
                        GOVT. RECOGNISED
                      </span>
                    </div>

                    <h3 className="text-lg sm:text-xl font-extrabold text-stone-900 font-display tracking-tight leading-snug">
                      Government-Recognised Certificate Included
                    </h3>
                  </div>
                </div>

                {/* Certificate description text */}
                <p className="text-xs sm:text-[13px] text-stone-600 leading-relaxed">
                  Upon successful course completion, every enrolled student receives an authorized Government-recognised certificate. This official qualification validates your professional competence and is widely accepted by top architectural firms, interior studios, and companies across India.
                </p>

                {/* Checklist with clean dividers */}
                <div className="pt-3 border-t border-amber-200/70 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs font-semibold text-emerald-800">
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Valid for Job Placements</span>
                  </div>
                  <span className="hidden sm:inline text-stone-300">|</span>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Architectural Firm Accepted</span>
                  </div>
                  <span className="hidden sm:inline text-stone-300">|</span>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Resume & Portfolio Boost</span>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>

          {/* ========================================================= */}
          {/* RIGHT COLUMN: 2x2 Grid + 1 Wide Card at Bottom */}
          {/* ========================================================= */}
          <div className="lg:col-span-6 space-y-4">
            
            {/* Top 2x2 Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* Card 1: Hands-on Practical Training */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 }}
                whileHover={{ y: -3, transition: { duration: 0.2 } }}
                className="bg-white rounded-3xl p-6 sm:p-7 border border-stone-200/80 shadow-xs hover:shadow-md transition-all flex flex-col justify-start items-start text-left"
              >
                <div className="w-13 h-13 rounded-2xl bg-rose-50 border border-rose-100 flex items-center justify-center text-[#9b1747] mb-4">
                  <GraduationCap className="w-7 h-7 stroke-[1.8]" />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-stone-900 font-display mb-2 leading-snug">
                  Hands-on Practical Training
                </h3>
                <p className="text-xs sm:text-[13px] text-stone-600 leading-relaxed">
                  Work on actual floor plans, 3D models, site measurements, and real-time architecture assignments from day one.
                </p>
              </motion.div>

              {/* Card 2: Basic Vastu for Interior Design */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.15 }}
                whileHover={{ y: -3, transition: { duration: 0.2 } }}
                className="bg-white rounded-3xl p-6 sm:p-7 border border-stone-200/80 shadow-xs hover:shadow-md transition-all flex flex-col justify-start items-start text-left"
              >
                <div className="w-13 h-13 rounded-2xl bg-rose-50 border border-rose-100 flex items-center justify-center text-[#9b1747] mb-4">
                  <Compass className="w-7 h-7 stroke-[1.8]" />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-stone-900 font-display mb-2 leading-snug">
                  Basic Vastu for Interior Design
                </h3>
                <p className="text-xs sm:text-[13px] text-stone-600 leading-relaxed">
                  We do teach basic vastu as per interior design – room orientation, entrance placements, and practical space harmony.
                </p>
              </motion.div>

              {/* Card 3: Small Batches & 1-on-1 Attention */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 }}
                whileHover={{ y: -3, transition: { duration: 0.2 } }}
                className="bg-white rounded-3xl p-6 sm:p-7 border border-stone-200/80 shadow-xs hover:shadow-md transition-all flex flex-col justify-start items-start text-left"
              >
                <div className="w-13 h-13 rounded-2xl bg-rose-50 border border-rose-100 flex items-center justify-center text-[#9b1747] mb-4">
                  <Users className="w-7 h-7 stroke-[1.8]" />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-stone-900 font-display mb-2 leading-snug">
                  Small Batches &amp; 1-on-1 Attention
                </h3>
                <p className="text-xs sm:text-[13px] text-stone-600 leading-relaxed">
                  Provide personalised computer classes ensuring your own pace, dedicated workstation, and sincere unanswered doubts.
                </p>
              </motion.div>

              {/* Card 4: Career & Placement Guidance */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.25 }}
                whileHover={{ y: -3, transition: { duration: 0.2 } }}
                className="bg-white rounded-3xl p-6 sm:p-7 border border-stone-200/80 shadow-xs hover:shadow-md transition-all flex flex-col justify-start items-start text-left"
              >
                <div className="w-13 h-13 rounded-2xl bg-rose-50 border border-rose-100 flex items-center justify-center text-[#9b1747] mb-4">
                  <Briefcase className="w-7 h-7 stroke-[1.8]" />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-stone-900 font-display mb-2 leading-snug">
                  Career &amp; Placement Guidance
                </h3>
                <p className="text-xs sm:text-[13px] text-stone-600 leading-relaxed">
                  Professional portfolio curation, interview coaching, and hiring connections with leading interior design studios in Mumbai.
                </p>
              </motion.div>

            </div>

            {/* Bottom Wide Card: Prime Location in Borivali West */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 }}
              whileHover={{ y: -3, transition: { duration: 0.2 } }}
              className="bg-white rounded-3xl p-6 sm:p-7 border border-stone-200/80 shadow-xs hover:shadow-md transition-all flex items-start gap-5 text-left"
            >
              <div className="w-13 h-13 rounded-2xl bg-rose-50 border border-rose-100 flex items-center justify-center text-[#9b1747] shrink-0">
                <MapPin className="w-7 h-7 stroke-[1.8]" />
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-bold text-stone-900 font-display mb-1.5 leading-snug">
                  Prime Location in Borivali West
                </h3>
                <p className="text-xs sm:text-[13px] text-stone-600 leading-relaxed">
                  Skyline Deepak Mahal, Near Dwarka Hotel, Shimpoli Road – minutes from Shimpoli Metro Line 2A &amp; Borivali Railway Station with easy access.
                </p>
              </div>
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
};
