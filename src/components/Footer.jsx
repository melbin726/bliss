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
    <footer className="footer-section bg-[#060a08] border-t border-white/10 pt-16 pb-28 md:pb-16 px-4 sm:px-6 lg:px-8 text-slate-300">
      <div className="container max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-12 mb-14">
          
          {/* Col 1: Brand & Philosophy */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#d4af37] to-[#8c7322] flex items-center justify-center text-black font-serif font-black text-xl shadow-lg shadow-[#d4af37]/20">
                B
              </div>
              <div>
                <span className="font-serif text-xl font-bold tracking-wide text-white block">
                  Bliss Spa
                </span>
                <span className="text-[10px] tracking-widest text-[#e6c35c] uppercase font-semibold block">
                  BTM 1st Stage • Bengaluru
                </span>
              </div>
            </div>
            
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
              Bengaluru's sanctuary for genuine stress relief, authentic Thai yoga therapies, and certified Ayurvedic wellness. Clean private suites with en-suite showers.
            </p>

            <div className="flex items-center gap-2 text-xs text-slate-300 bg-white/5 border border-white/10 rounded-xl p-3">
              <ShieldCheck className="w-4 h-4 text-[#e6c35c] shrink-0" />
              <span>100% Certified Female &amp; Male Therapists • Strict Hygiene</span>
            </div>
          </div>

          {/* Col 2: Signature Therapies */}
          <div>
            <h4 className="font-serif text-base font-bold text-white uppercase tracking-wider mb-4 border-b border-white/10 pb-2">
              Signature Treatments
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <a href="#therapies" className="hover:text-[#e6c35c] transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-[#e6c35c]" />
                  Aromatherapy Calming Ritual
                </a>
              </li>
              <li>
                <a href="#thai-massage" className="hover:text-[#e6c35c] transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-[#e6c35c]" />
                  Traditional Thai Yoga Massage
                </a>
              </li>
              <li>
                <a href="#therapies" className="hover:text-[#e6c35c] transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-[#e6c35c]" />
                  Deep Tissue Sports Recovery
                </a>
              </li>
              <li>
                <a href="#ayurveda" className="hover:text-[#e6c35c] transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-[#e6c35c]" />
                  Ayurvedic Abhyanga &amp; Shirodhara
                </a>
              </li>
              <li>
                <a href="#therapies" className="hover:text-[#e6c35c] transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-[#e6c35c]" />
                  Hot Stone Thermal Massage
                </a>
              </li>
              <li>
                <a href="#therapies" className="hover:text-[#e6c35c] transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-[#e6c35c]" />
                  VIP Couples Private Sanctuary
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Quick Navigation */}
          <div>
            <h4 className="font-serif text-base font-bold text-white uppercase tracking-wider mb-4 border-b border-white/10 pb-2">
              Navigation &amp; Tools
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <a href="#symptom-matcher" className="hover:text-[#e6c35c] transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-[#e6c35c]" />
                  Fatigue Symptom Matcher
                </a>
              </li>
              <li>
                <a href="#comparison" className="hover:text-[#e6c35c] transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-[#e6c35c]" />
                  Therapy Comparison Guide
                </a>
              </li>
              <li>
                <a href="#package-builder" className="hover:text-[#e6c35c] transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-[#e6c35c]" />
                  Custom Spa Package Builder
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-[#e6c35c] transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-[#e6c35c]" />
                  Sanctuary Photo Gallery
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-[#e6c35c] transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-[#e6c35c]" />
                  FAQ &amp; Guest Queries
                </a>
              </li>
              <li>
                <a href="#location" className="hover:text-[#e6c35c] transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-[#e6c35c]" />
                  Directions &amp; Map
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Visit & Reception */}
          <div>
            <h4 className="font-serif text-base font-bold text-white uppercase tracking-wider mb-4 border-b border-white/10 pb-2">
              Reception Desk
            </h4>
            <div className="space-y-3 text-xs sm:text-sm">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#e6c35c] shrink-0 mt-0.5" />
                <span className="text-slate-300 leading-snug">
                  No. 63, 1st Floor, B-Block, 16th Main, 8th Cross Road, near Udupi Garden, BTM 1st Stage, Bengaluru 560029
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-[#e6c35c] shrink-0" />
                <span className="text-slate-200">10:00 AM – 9:00 PM (Daily)</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#e6c35c] shrink-0" />
                <div className="space-x-2">
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

            <div className="mt-6 flex flex-col gap-2">
              <button
                onClick={() => onOpenBooking()}
                className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-[#d4af37] to-[#b38e28] text-black font-semibold text-xs text-center shadow hover:opacity-95 transition-opacity"
              >
                Instant Appointment
              </button>
              
              <button
                onClick={onOpenAdmin}
                className="w-full py-2 px-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-[11px] text-slate-400 hover:text-slate-200 flex items-center justify-center gap-1.5 transition-colors"
                title="Staff Front Desk Appointment Log"
              >
                <Lock className="w-3 h-3 text-[#e6c35c]" />
                Staff Front Desk Log
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-300">
          <p>© {new Date().getFullYear()} Bliss Spa BTM Layout Bengaluru. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Crafted with <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" /> for supreme relaxation in BTM 1st Stage
          </p>
        </div>
      </div>
    </footer>
  );
}
