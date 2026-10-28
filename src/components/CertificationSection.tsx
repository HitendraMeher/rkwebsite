import React from 'react';
import { Award, CheckCircle, ShieldCheck, FileText, ArrowRight } from 'lucide-react';

interface CertificationSectionProps {
  onOpenInquiry: () => void;
}

export const CertificationSection: React.FC<CertificationSectionProps> = ({ onOpenInquiry }) => {
  return (
    <section id="certification" className="py-16 md:py-24 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Certificate Credential Graphic / Visual */}
          <div className="lg:col-span-6">
            <div className="relative p-6 sm:p-8 bg-stone-50 border-2 border-stone-300 rounded-2xl shadow-md">
              {/* Certificate Inner Frame */}
              <div className="border border-maroon-800/30 p-6 sm:p-8 rounded-xl bg-white relative">
                
                {/* Header of Certificate Preview */}
                <div className="text-center pb-6 border-b border-stone-200">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-maroon-50 text-maroon-800 mb-2">
                    <Award className="w-6 h-6 text-maroon-800" />
                  </div>
                  <h4 className="text-xs uppercase tracking-widest text-stone-500 font-semibold">
                    Certificate of Competency
                  </h4>
                  <h3 className="text-lg sm:text-xl font-bold font-display text-stone-900 mt-1">
                    RK Interior Designer Institute
                  </h3>
                  <p className="text-[11px] text-stone-500">Borivali West, Mumbai · Private Computer Classes</p>
                </div>

                {/* Body of Certificate Preview */}
                <div className="py-6 text-center space-y-2">
                  <p className="text-xs text-stone-500 italic">This is to certify that</p>
                  <p className="text-base font-bold font-display text-maroon-900">[Student Name]</p>
                  <p className="text-xs text-stone-600 max-w-sm mx-auto leading-relaxed">
                    has successfully completed the comprehensive certified curriculum in
                  </p>
                  <div className="text-xs font-semibold text-stone-900 py-1 px-3 bg-stone-100 rounded inline-block font-mono">
                    AutoCAD 2D · 3ds Max · V-Ray · Photoshop
                  </div>
                  <p className="text-[11px] text-stone-500 pt-1">
                    demonstrating practical mastery in architectural working drawings, 3D interior spatial modeling, and photorealistic lighting rendering.
                  </p>
                </div>

                {/* Footer Signatures */}
                <div className="pt-6 border-t border-stone-200 flex items-center justify-between text-xs text-stone-600">
                  <div>
                    <div className="w-24 border-b border-stone-400 mb-1" />
                    <span className="text-[10px] uppercase tracking-wider text-stone-400">Date of Award</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 rounded-full border border-maroon-800 flex items-center justify-center text-[9px] font-bold text-maroon-800 uppercase tracking-tighter">
                      Official Seal
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="w-24 border-b border-stone-400 mb-1 ml-auto" />
                    <span className="text-[10px] uppercase tracking-wider text-stone-400">Authorized Signatory</span>
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* Right Column: Why Certification Matters */}
          <div className="lg:col-span-6 space-y-6">
            <div className="text-xs font-semibold text-maroon-800 tracking-wider uppercase">
              Official Credential
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-stone-900 font-display text-balance">
              Industry-Recognized Certification Backed by a Verified Portfolio
            </h2>
            <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
              Design studios in Mumbai look for demonstrable skills, not theoretical certificates. Our certification is awarded solely upon submission of a complete set of CAD drawings and photorealistic 3D renders.
            </p>

            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-maroon-800 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-stone-900">
                    Rigorous Practical Assessment
                  </h4>
                  <p className="text-xs sm:text-sm text-stone-600 mt-0.5">
                    Every floor plan and 3D render is thoroughly reviewed for millimeter scale accuracy, light balance, and contractor-ready drafting standards.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <FileText className="w-5 h-5 text-maroon-800 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-stone-900">
                    Complete Job-Ready Portfolio
                  </h4>
                  <p className="text-xs sm:text-sm text-stone-600 mt-0.5">
                    Graduate with an A3/A4 digital PDF presentation deck including living room, modular kitchen, and bedroom sets ready for architectural firm interviews.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-maroon-800 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-stone-900">
                    Lifetime Doubt Support
                  </h4>
                  <p className="text-xs sm:text-sm text-stone-600 mt-0.5">
                    Even after graduation, our faculty is accessible for guidance on challenging site drawings or freelance 3D rendering queries.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-3">
              <button
                onClick={onOpenInquiry}
                className="inline-flex items-center gap-2 px-6 py-3 text-xs font-semibold uppercase tracking-wider text-white bg-maroon-800 hover:bg-maroon-900 rounded-lg transition-colors shadow-xs"
              >
                <span>Enroll in Certified Program</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
