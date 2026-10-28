import React, { useState, useEffect } from 'react';
import { Phone, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { INSTITUTE_INFO } from '../data/instituteData';
import { scrollToSection } from '../utils/scroll';
import { WhatsAppIcon } from './SoftwareLogos';
import { trackingService } from '../services/trackingService';
import { DiyaSvg } from './DiwaliDecoration';

interface HeaderProps {
  onOpenEnquire: (courseName?: string) => void;
  onOpenBanner: () => void;
  onOpenAdmin?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenEnquire, onOpenBanner }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'home' | 'courses' | 'about' | 'gallery' | 'contact'>('home');

  const navLinks = [
    { id: 'home', label: 'Home', targetId: 'home' },
    { id: 'courses', label: 'Courses', targetId: 'courses' },
    { id: 'about', label: 'About', targetId: 'about' },
    { id: 'gallery', label: 'Gallery', targetId: 'gallery' },
    { id: 'contact', label: 'Contact', targetId: 'contact' },
  ];

  // Accurate active section detection on scroll based on viewport coordinates
  useEffect(() => {
    const handleScroll = () => {
      const navOffset = 140;
      const sectionIds = ['contact', 'gallery', 'about', 'courses', 'home'];

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= navOffset && rect.bottom > 80) {
            setActiveTab(id as any);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent, targetId: string) => {
    e.preventDefault();
    setActiveTab(targetId as any);
    setMobileMenuOpen(false);

    // Track section view in visitor analytics
    trackingService.trackSectionView(targetId.charAt(0).toUpperCase() + targetId.slice(1));

    scrollToSection(targetId, 80);
    setTimeout(() => {
      scrollToSection(targetId, 80);
    }, 80);
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-stone-200/80 transition-all shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Brand Logo & Subtitle with subtle festive Diya */}
          <a
            href="#home"
            className="flex items-center gap-3 group shrink-0 cursor-pointer"
            onClick={(e) => handleNavClick(e, 'home')}
          >
            <span className="text-3xl sm:text-4xl font-extrabold tracking-tight font-serif text-[#9b1747] group-hover:opacity-90 transition-opacity">
              Rk
            </span>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="text-sm sm:text-base font-bold text-stone-900 leading-tight tracking-tight">
                  Interior Designer Institute
                </span>
                <DiyaSvg size={18} className="hidden sm:inline-flex" />
              </div>
              <span className="text-[11px] sm:text-xs text-stone-500 font-medium">
                ( Private Computer Classes )
              </span>
            </div>
          </a>

          {/* Center Navigation Links (Desktop) */}
          <nav className="hidden md:flex items-center gap-7 lg:gap-8 text-sm font-medium">
            {navLinks.map((link) => {
              const isActive = activeTab === link.id;
              return (
                <a
                  key={link.id}
                  href={`#${link.targetId}`}
                  onClick={(e) => handleNavClick(e, link.targetId)}
                  className={`relative py-1 transition-colors whitespace-nowrap cursor-pointer ${
                    isActive ? 'text-[#9b1747] font-semibold' : 'text-stone-600 hover:text-stone-900'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute left-0 right-0 -bottom-1 h-0.5 bg-[#9b1747] rounded-full"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right Action: Exactly ONE WhatsApp Circle + Exactly ONE Call Circle */}
          <div className="flex items-center gap-2.5 sm:gap-3 shrink-0">
            {/* ONLY ONE WhatsApp Circle Button */}
            <motion.a
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.94 }}
              href={`https://wa.me/${INSTITUTE_INFO.whatsappNumber}?text=${encodeURIComponent('Hello RK Interior Designer Institute, I would like to inquire about course details and admissions.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white flex items-center justify-center shadow-sm hover:shadow-md transition-all cursor-pointer"
              aria-label="Chat on WhatsApp"
              title="Chat with RK Institute on WhatsApp"
            >
              <WhatsAppIcon className="w-5 h-5 fill-current" />
            </motion.a>

            {/* ONLY ONE Call Circle Button */}
            <motion.a
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.94 }}
              href={`tel:${INSTITUTE_INFO.phone}`}
              className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#9b1747] hover:bg-[#821136] text-white flex items-center justify-center shadow-sm hover:shadow-md transition-all cursor-pointer"
              aria-label="Call Institute"
              title={`Call RK Institute: ${INSTITUTE_INFO.phone}`}
            >
              <Phone className="w-4 h-4 fill-white stroke-none" />
            </motion.a>

            {/* Mobile Hamburger Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-stone-700 hover:text-[#9b1747] transition-colors cursor-pointer md:hidden"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>

          </div>

        </div>
      </div>

      {/* Mobile Backdrop Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setMobileMenuOpen(false)}
            className="fixed inset-0 top-20 bg-stone-950/40 backdrop-blur-xs z-30 md:hidden"
            aria-hidden="true"
          />
        )}
      </AnimatePresence>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 right-0 w-full bg-white/98 backdrop-blur-md border-b border-stone-200 shadow-2xl z-40 md:hidden px-5 py-4 space-y-2 max-h-[calc(100vh-5.5rem)] overflow-y-auto"
          >
            <div className="flex flex-col space-y-1">
              {navLinks.map((link) => {
                const isActive = activeTab === link.id;
                return (
                  <a
                    key={link.id}
                    href={`#${link.targetId}`}
                    onClick={(e) => handleNavClick(e, link.targetId)}
                    className={`flex items-center justify-between px-4 py-3 rounded-xl text-base font-medium transition-all cursor-pointer ${
                      isActive
                        ? 'bg-[#9b1747]/10 text-[#9b1747] font-bold'
                        : 'text-stone-700 hover:bg-stone-50 active:bg-stone-100'
                    }`}
                  >
                    <span>{link.label}</span>
                    {isActive ? (
                      <span className="w-2 h-2 rounded-full bg-[#9b1747]" />
                    ) : (
                      <span className="text-stone-400 text-xs">→</span>
                    )}
                  </a>
                );
              })}
            </div>

            <div className="pt-3 border-t border-stone-100 flex flex-col gap-2.5">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenEnquire();
                }}
                className="w-full py-3 rounded-full text-center text-sm font-semibold text-white bg-[#9b1747] hover:bg-[#821136] shadow-sm cursor-pointer active:scale-98 transition-transform"
              >
                Enquire Now
              </button>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBanner();
                }}
                className="w-full py-2.5 rounded-full text-center text-xs font-medium text-stone-600 bg-stone-100 hover:bg-stone-200 cursor-pointer"
              >
                View Office Desk Banner
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
