import React, { useState, useEffect } from 'react';
import { X, CheckCircle2, Send, MessageSquare } from 'lucide-react';
import { INSTITUTE_INFO, COURSES } from '../data/instituteData';
import { InquiryFormData } from '../types';

import { WhatsAppIcon } from './SoftwareLogos';
import { trackingService } from '../services/trackingService';

interface InquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedCourse?: string;
}

export const InquiryModal: React.FC<InquiryModalProps> = ({ isOpen, onClose, preselectedCourse }) => {
  const [formData, setFormData] = useState<InquiryFormData>({
    fullName: '',
    phone: '',
    email: '',
    selectedCourse: preselectedCourse || 'Auto CAD 2D',
    preferredBatch: 'Morning (9 AM - 12 PM)',
    experienceLevel: 'Complete Beginner',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [phoneError, setPhoneError] = useState('');

  useEffect(() => {
    if (preselectedCourse) {
      setFormData(prev => ({ ...prev, selectedCourse: preselectedCourse }));
    }
  }, [preselectedCourse]);

  if (!isOpen) return null;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (name === 'phone' && phoneError) {
      setPhoneError('');
    }
  };

  const buildWhatsAppText = () => {
    return `Hello RK Interior Designer Institute!
*New Course Inquiry*
*Name:* ${formData.fullName.trim()}
*Phone:* ${formData.phone.trim()}
${formData.email.trim() ? `*Email:* ${formData.email.trim()}\n` : ''}*Course Interested:* ${formData.selectedCourse}
*Preferred Batch:* ${formData.preferredBatch}
*Experience Level:* ${formData.experienceLevel}
*Message / Questions:* ${formData.message.trim() || 'I would like to know the fee structure, demo class schedule, and batch start dates.'}`;
  };

  const handleSendToWhatsApp = () => {
    const text = buildWhatsAppText();
    const url = `https://wa.me/${INSTITUTE_INFO.whatsappNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanPhone = formData.phone.replace(/\D/g, '');
    if (cleanPhone.length < 10) {
      setPhoneError('Please enter a valid 10-digit mobile number');
      return;
    }

    // Save enquiry into persistent tracking service for Admin Dashboard
    try {
      trackingService.logEnquiry({
        fullName: formData.fullName,
        phone: formData.phone,
        email: formData.email,
        course: formData.selectedCourse,
        preferredBatch: formData.preferredBatch,
        experienceLevel: formData.experienceLevel,
        message: formData.message,
        source: 'Website Enquire Form'
      });
    } catch (err) {
      console.warn('Failed to log inquiry:', err);
    }

    // Automatically send details as WhatsApp message
    handleSendToWhatsApp();
    setSubmitted(true);
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-stone-950/80 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl max-w-xl w-full overflow-hidden shadow-2xl border border-stone-300 animate-in fade-in zoom-in-95 duration-200 my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="p-5 border-b border-stone-200 flex items-center justify-between bg-stone-50">
          <div>
            <h3 className="text-lg font-bold text-stone-900 font-display">
              Enroll / Book Free Demo Class
            </h3>
            <p className="text-xs text-stone-500">
              RK Interior Designer Institute · Borivali West, Mumbai
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-stone-500 hover:text-stone-900 hover:bg-stone-200 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6">
          {!submitted ? (
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
                  placeholder="e.g. Rahul Shah"
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
                    Email (Optional)
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
                  Selected Course
                </label>
                <select
                  name="selectedCourse"
                  value={formData.selectedCourse}
                  onChange={handleInputChange}
                  className="w-full px-3.5 py-2.5 text-sm bg-white border border-stone-300 rounded-lg focus:outline-none focus:border-[#9b1747] transition-colors"
                >
                  <option value="Auto CAD 2D">Auto CAD 2D</option>
                  <option value="3D'SMax Vray Photoshop (6 Το 8 Months)">3D'SMax Vray Photoshop (6 Το 8 Months)</option>
                  <option value="Both Courses (AutoCAD 2D + 3D'SMax Vray Photoshop)">Both Courses (AutoCAD 2D + 3D'SMax Vray Photoshop)</option>
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1">
                    Preferred Batch Time
                  </label>
                  <select
                    name="preferredBatch"
                    value={formData.preferredBatch}
                    onChange={handleInputChange}
                    className="w-full px-3.5 py-2.5 text-sm bg-white border border-stone-300 rounded-lg focus:outline-none focus:border-[#9b1747] transition-colors"
                  >
                    <option value="Morning (9 AM - 12 PM)">Morning (9:00 AM – 12:00 PM)</option>
                    <option value="Afternoon (12 PM - 4 PM)">Afternoon (12:00 PM – 4:00 PM)</option>
                    <option value="Evening (5 PM - 8:30 PM)">Evening (5:00 PM – 8:30 PM)</option>
                    <option value="Weekend Special (Sat & Sun)">Weekend Special (Sat & Sun)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1">
                    Experience Level
                  </label>
                  <select
                    name="experienceLevel"
                    value={formData.experienceLevel}
                    onChange={handleInputChange}
                    className="w-full px-3.5 py-2.5 text-sm bg-white border border-stone-300 rounded-lg focus:outline-none focus:border-[#9b1747] transition-colors"
                  >
                    <option value="Complete Beginner">Complete Beginner</option>
                    <option value="Interior Design Student">Interior Design Student</option>
                    <option value="Architecture / Civil Engineer">Architecture / Civil Engineer</option>
                    <option value="Career Switcher">Career Switcher</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1">
                  Message / Questions
                </label>
                <textarea
                  name="message"
                  rows={2}
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Ask about fee structure, 1-on-1 dates, or software requirements..."
                  className="w-full px-3.5 py-2.5 text-sm bg-white border border-stone-300 rounded-lg focus:outline-none focus:border-[#9b1747] transition-colors"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 px-4 text-xs sm:text-sm font-semibold uppercase tracking-wider text-white bg-emerald-600 hover:bg-emerald-700 rounded-full transition-all flex items-center justify-center gap-2.5 shadow-md hover:shadow-lg cursor-pointer active:scale-98"
                >
                  <WhatsAppIcon className="w-5 h-5 fill-current" />
                  <span>Send Enquiry via WhatsApp</span>
                </button>
              </div>
            </form>
          ) : (
            <div className="py-6 text-center space-y-4">
              <div className="w-14 h-14 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto shadow-sm">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold font-display text-stone-900">
                Inquiry Forwarded to WhatsApp!
              </h3>
              <p className="text-sm text-stone-600 leading-relaxed max-w-md mx-auto">
                Thank you, <strong className="text-stone-900">{formData.fullName}</strong>. Your inquiry details for <strong className="text-[#9b1747]">{formData.selectedCourse}</strong> have been formatted and dispatched to RK Institute on WhatsApp (<strong>+91 {INSTITUTE_INFO.phone}</strong>).
              </p>

              <div className="pt-3 flex flex-col gap-2.5 max-w-sm mx-auto">
                <button
                  onClick={handleSendToWhatsApp}
                  className="w-full py-3 text-xs sm:text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-700 rounded-full transition-all inline-flex items-center justify-center gap-2 shadow-sm cursor-pointer"
                >
                  <WhatsAppIcon className="w-4 h-4 fill-current" />
                  <span>Re-Open WhatsApp Chat</span>
                </button>
                <a
                  href={`tel:${INSTITUTE_INFO.phone}`}
                  className="w-full py-2.5 text-xs font-semibold text-stone-800 bg-stone-100 hover:bg-stone-200 rounded-full transition-colors inline-flex items-center justify-center gap-2"
                >
                  <span>Or Call Directly: +91 {INSTITUTE_INFO.phone}</span>
                </a>
                <button
                  onClick={onClose}
                  className="w-full py-2 text-xs font-semibold text-stone-500 hover:text-stone-900 transition-colors cursor-pointer"
                >
                  Close Window
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
