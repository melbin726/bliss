import React from 'react';
import { 
  Sparkles, 
  MapPin, 
  Phone, 
  Clock, 
  ShieldCheck, 
  Lock, 
  Heart,
  ChevronRight
} from 'lucide-react';

export default function Footer({ onOpenAdmin, onOpenBooking }) {
  return (
    <footer className="bg-[#060a08] border-t border-white/10 pt-10 sm:pt-16 pb-24 md:pb-16 px-3.5 sm:px-6 lg:px-8 text-slate-300">
      <div className="container max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 mb-10">
          
          {/* Col 1: Brand & Philosophy */}
          <div>
            <div className="flex items-center gap-2.5 mb-3">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#d4af37] to-[#8c7322] flex items-center justify-center text-black font-serif font-black text-base shadow-md">
                B
              </div>
              <div>
                <span className="font-serif text-lg sm:text-xl font-bold tracking-wide text-white block">
                  Bliss Spa
                </span>
                <span className="text-[9px] tracking-widest text-[#e6c35c] uppercase font-semibold block">
                  BTM 1st Stage • Bengaluru
                </span>
              </div>
            </div>
            
            <p className="text-xs text-slate-300 leading-relaxed mb-4">
              Sanctuary for genuine stress relief, authentic Thai yoga therapies, and certified Ayurvedic wellness. Private suites with en-suite showers.
            </p>

            <div className="flex items-center gap-2 text-[11px] text-slate-300 bg-white/5 border border-white/10 rounded-xl p-2.5">
              <ShieldCheck className="w-3.5 h-3.5 text-[#e6c35c] shrink-0" />
              <span>Certified Therapists • Strict Hygiene</span>
            </div>
          </div>

          {/* Col 2: Signature Therapies (2-Column on Mobile) */}
          <div>
            <h4 className="font-serif text-sm sm:text-base font-bold text-white uppercase tracking-wider mb-3 border-b border-white/10 pb-1.5">
              Signature Treatments
            </h4>
            <ul className="grid grid-cols-2 sm:grid-cols-1 gap-2 text-xs">
              <li>
                <a href="#therapies" className="hover:text-[#e6c35c] transition-colors flex items-center gap-1">
                  <ChevronRight className="w-3 h-3 text-[#e6c35c]" />
                  Aroma Ritual
                </a>
              </li>
              <li>
                <a href="#thai-massage" className="hover:text-[#e6c35c] transition-colors flex items-center gap-1">
                  <ChevronRight className="w-3 h-3 text-[#e6c35c]" />
                  Thai Yoga
                </a>
              </li>
              <li>
                <a href="#therapies" className="hover:text-[#e6c35c] transition-colors flex items-center gap-1">
                  <ChevronRight className="w-3 h-3 text-[#e6c35c]" />
                  Deep Tissue
                </a>
              </li>
              <li>
                <a href="#ayurveda" className="hover:text-[#e6c35c] transition-colors flex items-center gap-1">
                  <ChevronRight className="w-3 h-3 text-[#e6c35c]" />
                  Ayurveda
                </a>
              </li>
              <li>
                <a href="#therapies" className="hover:text-[#e6c35c] transition-colors flex items-center gap-1">
                  <ChevronRight className="w-3 h-3 text-[#e6c35c]" />
                  Hot Stone
                </a>
              </li>
              <li>
                <a href="#therapies" className="hover:text-[#e6c35c] transition-colors flex items-center gap-1">
                  <ChevronRight className="w-3 h-3 text-[#e6c35c]" />
                  Couples Suite
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Navigation (2-Column on Mobile) */}
          <div>
            <h4 className="font-serif text-sm sm:text-base font-bold text-white uppercase tracking-wider mb-3 border-b border-white/10 pb-1.5">
              Navigation
            </h4>
            <ul className="grid grid-cols-2 sm:grid-cols-1 gap-2 text-xs">
              <li>
                <a href="#matcher" className="hover:text-[#e6c35c] transition-colors flex items-center gap-1">
                  <ChevronRight className="w-3 h-3 text-[#e6c35c]" />
                  De-Stress Matcher
                </a>
              </li>
              <li>
                <a href="#guide" className="hover:text-[#e6c35c] transition-colors flex items-center gap-1">
                  <ChevronRight className="w-3 h-3 text-[#e6c35c]" />
                  Comparison Guide
                </a>
              </li>
              <li>
                <a href="#calculator" className="hover:text-[#e6c35c] transition-colors flex items-center gap-1">
                  <ChevronRight className="w-3 h-3 text-[#e6c35c]" />
                  Package Builder
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-[#e6c35c] transition-colors flex items-center gap-1">
                  <ChevronRight className="w-3 h-3 text-[#e6c35c]" />
                  Photo Gallery
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-[#e6c35c] transition-colors flex items-center gap-1">
                  <ChevronRight className="w-3 h-3 text-[#e6c35c]" />
                  FAQ
                </a>
              </li>
              <li>
                <a href="#location" className="hover:text-[#e6c35c] transition-colors flex items-center gap-1">
                  <ChevronRight className="w-3 h-3 text-[#e6c35c]" />
                  Directions
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Visit & Reception */}
          <div>
            <h4 className="font-serif text-sm sm:text-base font-bold text-white uppercase tracking-wider mb-3 border-b border-white/10 pb-1.5">
              Reception Desk
            </h4>
            <div className="space-y-2 text-xs">
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#e6c35c] shrink-0 mt-0.5" />
                <span className="text-slate-300 leading-snug">
                  No. 63, 1st Floor, 16th Main, near Udupi Garden, BTM 1st Stage
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-[#e6c35c] shrink-0" />
                <span className="text-slate-200">10:00 AM – 10:00 PM (Daily)</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#e6c35c] shrink-0" />
                <div className="space-x-1.5">
                  <a href="tel:09945264342" className="text-white hover:text-[#e6c35c] font-semibold">
                    099452 64342
                  </a>
                  <span>/</span>
                  <a href="tel:08095266198" className="text-white hover:text-[#e6c35c] font-semibold">
                    080 9526 6198
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-4 flex flex-col gap-2">
              <button
                onClick={() => onOpenBooking()}
                className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-[#d4af37] to-[#b38e28] text-black font-semibold text-xs text-center shadow"
              >
                Instant Appointment
              </button>
              
              <button
                onClick={onOpenAdmin}
                className="w-full py-1.5 px-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-[10px] text-slate-400 hover:text-slate-200 flex items-center justify-center gap-1.5"
              >
                <Lock className="w-3 h-3 text-[#e6c35c]" />
                Staff Front Desk Log
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] text-slate-400 text-center sm:text-left">
          <p>© {new Date().getFullYear()} Bliss Spa BTM Layout Bengaluru. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Made with <Heart className="w-3 h-3 text-rose-500 fill-rose-500" /> in BTM 1st Stage
          </p>
        </div>
      </div>
    </footer>
  );
}
