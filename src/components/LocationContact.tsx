import React, { useState } from 'react';
import { MapPin, Phone, MessageSquare, Clock, Send, CheckCircle2 } from 'lucide-react';
import { INSTITUTE_INFO, COURSES } from '../data/instituteData';
import { InquiryFormData } from '../types';

interface LocationContactProps {
  initialCourse?: string;
  onOpenBanner: () => void;
}

export const LocationContact: React.FC<LocationContactProps> = ({ initialCourse, onOpenBanner }) => {
  const [formData, setFormData] = useState<InquiryFormData>({
    fullName: '',
    phone: '',
    email: '',
    selectedCourse: initialCourse || 'Complete 4-in-1 Master Diploma',
    preferredBatch: 'Morning (9 AM - 12 PM)',
    experienceLevel: 'Complete Beginner',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [phoneError, setPhoneError] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (name === 'phone' && phoneError) {
      setPhoneError('');
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validation
    const cleanPhone = formData.phone.replace(/\D/g, '');
    if (cleanPhone.length < 10) {
      setPhoneError('Please enter a valid 10-digit mobile number');
      return;
    }

    setSubmitted(true);
  };

  const handleSendToWhatsApp = () => {
    const text = `Hello RK Interior Designer Institute!
My Name: ${formData.fullName || 'Student'}
Phone: ${formData.phone}
Interested Course: ${formData.selectedCourse}
Preferred Batch: ${formData.preferredBatch}
Level: ${formData.experienceLevel}
Message: ${formData.message || 'I would like to inquire about course fees, demo class, and upcoming batch dates.'}`;

    const url = `https://wa.me/${INSTITUTE_INFO.whatsappNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="location" className="py-16 md:py-24 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold text-maroon-800 tracking-wider uppercase mb-2">
            Visit Our Institute
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-stone-900 font-display text-balance">
            Borivali West Center & Interactive Inquiry
          </h2>
          <p className="mt-3 text-stone-600 text-sm sm:text-base leading-relaxed">
            Conveniently situated near Dwarka Hotel, Shimpoli Road in Borivali West. Drop in for a personal consultation or request a callback for batch schedules.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
          
          {/* Left Column: Institute Details & Transit Guide */}
          <div className="lg:col-span-6 space-y-8">
            
            {/* Primary Address Card */}
            <div className="p-6 bg-stone-50 border border-stone-200 rounded-2xl space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-maroon-800 shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-stone-900 text-base font-display">
                    Institute Location
                  </h3>
                  <p className="text-stone-700 text-sm leading-relaxed mt-1 font-medium">
                    {INSTITUTE_INFO.address}
                  </p>
                  <p className="text-xs text-stone-500 mt-1">
                    Landmark: {INSTITUTE_INFO.landmark}
                  </p>
                </div>
              </div>

              {/* Transit & Commute Highlights */}
              <div className="border-t border-stone-200 pt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-stone-600">
                <div className="bg-white p-3 rounded border border-stone-200/80">
                  <div className="font-semibold text-stone-900">Metro Line 2A</div>
                  <div className="mt-0.5">Shimpoli Metro Station (5 mins walk)</div>
                </div>
                <div className="bg-white p-3 rounded border border-stone-200/80">
                  <div className="font-semibold text-stone-900">Western Railway</div>
                  <div className="mt-0.5">Borivali West Station (8-10 mins auto/bus)</div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <a
                  href={INSTITUTE_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 text-xs font-semibold text-stone-800 bg-white border border-stone-300 rounded-lg hover:bg-stone-100 transition-colors inline-flex items-center gap-1.5"
                >
                  <MapPin className="w-3.5 h-3.5 text-maroon-800" />
                  <span>Get Driving Directions</span>
                </a>

                <button
                  onClick={onOpenBanner}
                  className="px-4 py-2 text-xs font-semibold text-maroon-800 bg-maroon-50 border border-maroon-200 rounded-lg hover:bg-maroon-100 transition-colors"
                >
                  View Desk Banner Photo
                </button>
              </div>
            </div>

            {/* Direct Contact Methods */}
            <div className="space-y-3">
              <div className="p-4 bg-stone-50 border border-stone-200 rounded-xl flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-maroon-100/60 rounded-lg text-maroon-800">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-stone-500 font-medium">Direct Institute Line</div>
                    <div className="text-sm font-bold text-stone-900">{INSTITUTE_INFO.displayPhone}</div>
                  </div>
                </div>
                <a
                  href={`tel:${INSTITUTE_INFO.phone}`}
                  className="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white bg-maroon-800 hover:bg-maroon-900 rounded-lg transition-colors whitespace-nowrap"
                >
                  Call Now
                </a>
              </div>

              <div className="p-4 bg-stone-50 border border-stone-200 rounded-xl flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-emerald-100/80 rounded-lg text-emerald-700">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-stone-500 font-medium">Instant WhatsApp Chat</div>
                    <div className="text-sm font-bold text-stone-900">+91 70390 63446</div>
                  </div>
                </div>
                <a
                  href={`https://wa.me/${INSTITUTE_INFO.whatsappNumber}?text=Hi%20RK%20Interior%20Designer%20Institute%2C%20I%20would%20like%20to%20know%20about%20the%20certified%20computer%20classes.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-emerald-800 bg-emerald-100 hover:bg-emerald-200 rounded-lg transition-colors whitespace-nowrap"
                >
                  Chat Now
                </a>
              </div>

              <div className="p-4 bg-stone-50 border border-stone-200 rounded-xl flex items-center gap-3 text-xs text-stone-600">
                <Clock className="w-4 h-4 text-stone-400 shrink-0" />
                <span>{INSTITUTE_INFO.workingHours}</span>
              </div>
            </div>

          </div>

          {/* Right Column: Lead Capture & Demo Booking Form */}
          <div className="lg:col-span-6">
            <div className="p-6 sm:p-8 bg-stone-50 border border-stone-300/80 rounded-2xl shadow-sm">
              
              {!submitted ? (
                <>
                  <div className="mb-6">
                    <h3 className="text-xl font-bold font-display text-stone-900">
                      Book a Free 1-on-1 Consultation
                    </h3>
                    <p className="text-xs sm:text-sm text-stone-600 mt-1">
                      Fill out your details to receive full syllabus brochures, fee structure, and schedule your personal computer demo class.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        required
                        value={formData.fullName}
                        onChange={handleInputChange}
                        placeholder="e.g. Rahul Sharma"
                        className="w-full px-3.5 py-2.5 text-sm bg-white border border-stone-300 rounded-lg focus:outline-none focus:border-maroon-800 transition-colors"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1">
                          Mobile Number *
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="e.g. 9876543210"
                          className="w-full px-3.5 py-2.5 text-sm bg-white border border-stone-300 rounded-lg focus:outline-none focus:border-maroon-800 transition-colors"
                        />
                        {phoneError && (
                          <p className="text-xs text-rose-600 mt-1">{phoneError}</p>
                        )}
                      </div>

                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1">
                          Email Address
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="student@example.com"
                          className="w-full px-3.5 py-2.5 text-sm bg-white border border-stone-300 rounded-lg focus:outline-none focus:border-maroon-800 transition-colors"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1">
                        Interested Course / Package *
                      </label>
                      <select
                        name="selectedCourse"
                        value={formData.selectedCourse}
                        onChange={handleInputChange}
                        className="w-full px-3.5 py-2.5 text-sm bg-white border border-stone-300 rounded-lg focus:outline-none focus:border-maroon-800 transition-colors"
                      >
                        <option value="Complete 4-in-1 Master Diploma">Complete 4-in-1 Master Diploma (AutoCAD 2D + 3ds Max + V-Ray + Photoshop)</option>
                        {COURSES.map(c => (
                          <option key={c.id} value={c.name}>{c.name}</option>
                        ))}
                        <option value="3D Visualization Specialist (3ds Max + V-Ray)">3D Visualization Specialist (3ds Max + V-Ray)</option>
                        <option value="Architectural CAD Drafting (AutoCAD 2D + Photoshop)">Architectural CAD Drafting (AutoCAD 2D + Photoshop)</option>
                      </select>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1">
                          Preferred Batch Timing
                        </label>
                        <select
                          name="preferredBatch"
                          value={formData.preferredBatch}
                          onChange={handleInputChange}
                          className="w-full px-3.5 py-2.5 text-sm bg-white border border-stone-300 rounded-lg focus:outline-none focus:border-maroon-800 transition-colors"
                        >
                          <option value="Morning (9 AM - 12 PM)">Morning (9:00 AM – 12:00 PM)</option>
                          <option value="Afternoon (12 PM - 4 PM)">Afternoon (12:00 PM – 4:00 PM)</option>
                          <option value="Evening (5 PM - 8:30 PM)">Evening (5:00 PM – 8:30 PM)</option>
                          <option value="Weekend Special (Sat & Sun)">Weekend Special (Sat & Sun)</option>
                          <option value="Custom Private Hours">Custom Private Hours</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1">
                          Current Background
                        </label>
                        <select
                          name="experienceLevel"
                          value={formData.experienceLevel}
                          onChange={handleInputChange}
                          className="w-full px-3.5 py-2.5 text-sm bg-white border border-stone-300 rounded-lg focus:outline-none focus:border-maroon-800 transition-colors"
                        >
                          <option value="Complete Beginner">Complete Beginner</option>
                          <option value="Interior Design Student">Interior Design Student</option>
                          <option value="Architecture / Civil Engineer">Architecture / Civil Engineer</option>
                          <option value="Working Professional Switching Careers">Working Professional Switching Careers</option>
                          <option value="Practicing Interior Designer">Practicing Interior Designer</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1">
                        Any specific goals or questions?
                      </label>
                      <textarea
                        name="message"
                        rows={2}
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="e.g. Want to learn 3ds Max lighting for modular kitchens..."
                        className="w-full px-3.5 py-2 text-sm bg-white border border-stone-300 rounded-lg focus:outline-none focus:border-maroon-800 transition-colors"
                      />
                    </div>

                    <div className="pt-2">
                      <button
                        type="submit"
                        className="w-full py-3.5 px-4 text-xs font-semibold uppercase tracking-wider text-white bg-maroon-800 hover:bg-maroon-900 rounded-lg transition-colors flex items-center justify-center gap-2 shadow-xs"
                      >
                        <Send className="w-4 h-4" />
                        <span>Submit Inquiry & Request Demo</span>
                      </button>
                    </div>

                    <p className="text-[11px] text-stone-500 text-center">
                      We respect your privacy. No spam. You will be contacted directly by our Borivali West office instructor.
                    </p>
                  </form>
                </>
              ) : (
                <div className="py-8 text-center space-y-4">
                  <div className="w-14 h-14 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold font-display text-stone-900">
                    Inquiry Received Successfully!
                  </h3>
                  <p className="text-sm text-stone-600 max-w-md mx-auto leading-relaxed">
                    Thank you, <strong className="text-stone-900">{formData.fullName}</strong>. Our instructor from the Borivali West center will contact you shortly on <strong className="text-stone-900">{formData.phone}</strong> regarding <strong>{formData.selectedCourse}</strong>.
                  </p>

                  <div className="pt-4 border-t border-stone-200 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <button
                      onClick={handleSendToWhatsApp}
                      className="w-full sm:w-auto px-5 py-2.5 text-xs font-semibold text-emerald-800 bg-emerald-100 hover:bg-emerald-200 rounded-lg transition-colors inline-flex items-center justify-center gap-2"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Forward Directly to WhatsApp</span>
                    </button>

                    <button
                      onClick={() => setSubmitted(false)}
                      className="w-full sm:w-auto px-4 py-2.5 text-xs font-semibold text-stone-600 hover:text-stone-900 transition-colors"
                    >
                      Submit Another Query
                    </button>
                  </div>
                </div>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
