import React from 'react';
import { Instagram, Facebook, Youtube } from 'lucide-react';
import { INSTITUTE_INFO } from '../data/instituteData';
import { scrollToSection } from '../utils/scroll';
import { DiyaSvg } from './DiwaliDecoration';

interface FooterProps {
  onOpenBanner: () => void;
  onOpenAdmin?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenBanner }) => {
  return (
    <footer className="bg-white text-stone-700 py-12 border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-10 border-b border-stone-100">
          
          {/* Brand Wordmark & Subtitle */}
          <div className="flex items-center gap-3">
            <span className="text-3xl sm:text-4xl font-extrabold tracking-tight font-serif text-[#9b1747]">
              Rk
            </span>
            <div className="flex flex-col">
              <span className="text-sm sm:text-base font-bold text-stone-900 leading-tight">
                Interior Designer Institute
              </span>
              <span className="text-[11px] sm:text-xs text-stone-500 font-medium">
                ( Private Computer Classes )
              </span>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-wrap items-center justify-center gap-5 sm:gap-7 text-sm font-medium text-stone-600">
            <a
              href="#home"
              onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}
              className="hover:text-[#9b1747] transition-colors cursor-pointer"
            >
              Home
            </a>
            <a
              href="#courses"
              onClick={(e) => { e.preventDefault(); scrollToSection('courses'); }}
              className="hover:text-[#9b1747] transition-colors cursor-pointer"
            >
              Courses
            </a>
            <a
              href="#about"
              onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}
              className="hover:text-[#9b1747] transition-colors cursor-pointer"
            >
              About
            </a>
            <a
              href="#gallery"
              onClick={(e) => { e.preventDefault(); scrollToSection('gallery'); }}
              className="hover:text-[#9b1747] transition-colors cursor-pointer"
            >
              Gallery
            </a>
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}
              className="hover:text-[#9b1747] transition-colors cursor-pointer"
            >
              Contact
            </a>
            <button
              onClick={onOpenBanner}
              className="text-xs text-stone-500 hover:text-stone-800 hover:underline cursor-pointer"
            >
              Desk Banner
            </button>
          </nav>

          {/* Social Icons Matching Mockup */}
          <div className="flex items-center gap-3">
            <a
              href="https://www.instagram.com/rkinteriordesignerinstitute?obrf=bDd1cHA0NjIxaG04"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-stone-800 text-white hover:bg-[#9b1747] flex items-center justify-center transition-colors"
              aria-label="Instagram - RK Interior Designer Institute"
              title="Follow RK Institute on Instagram"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a
              href="https://www.facebook.com/share/1JHZapbzJd/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-stone-800 text-white hover:bg-[#9b1747] flex items-center justify-center transition-colors"
              aria-label="Facebook - RK Interior Designer Institute"
              title="Follow RK Institute on Facebook"
            >
              <Facebook className="w-4 h-4" />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-stone-800 text-white hover:bg-[#9b1747] flex items-center justify-center transition-colors"
              aria-label="YouTube"
            >
              <Youtube className="w-4 h-4" />
            </a>
          </div>

        </div>

        {/* Festive Diwali Warm Greetings Banner */}
        <div className="py-4 my-6 rounded-2xl bg-gradient-to-r from-amber-500/10 via-orange-500/15 to-amber-500/10 border border-amber-500/25 flex flex-col sm:flex-row items-center justify-center gap-3 text-center sm:text-left px-6">
          <DiyaSvg size={22} className="hidden sm:inline-flex" />
          <div>
            <div className="text-xs sm:text-sm font-bold text-amber-950 font-display">
              Shubh Deepawali & Prosperous New Year from RK Interior Designer Institute
            </div>
            <p className="text-[11px] sm:text-xs text-amber-800/90 mt-0.5">
              Wishing all students and aspiring design creators a shining future filled with light, happiness, and career milestones.
            </p>
          </div>
          <DiyaSvg size={22} />
        </div>

        {/* Bottom Copyright Matching Mockup */}
        <div className="pt-2 text-center text-xs text-stone-500 font-medium">
          © {new Date().getFullYear()} RK Interior Designer Institute. All Rights Reserved. · Borivali West, Mumbai
        </div>

      </div>
    </footer>
  );
};
