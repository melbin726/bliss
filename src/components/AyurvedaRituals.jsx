import React from 'react';
import { Heart, Target, Droplets, Sparkles, ArrowRight } from 'lucide-react';

export default function AyurvedaRituals({ onOpenBooking }) {
  return (
    <section id="ayurveda" className="relative bg-[#0a110e] border-t border-white/10 py-10 sm:py-20 px-3.5 sm:px-6 lg:px-8">
      <div className="container max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 items-center">

          {/* Left Image Column */}
          <div className="reveal-left order-2 lg:order-1 relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl border border-white/10 h-56 sm:h-[460px]">
            <img
              src="assets/images/ayurvedic-shirodhara.jpg"
              alt="Ayurvedic Abhyanga & Shirodhara at Bliss Spa BTM Layout"
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent p-4 sm:p-6 flex flex-col justify-end">
              <span className="bg-[#cfa559] text-[#060f0a] font-bold text-[10px] px-2.5 py-0.5 rounded-full w-max mb-1">
                Classical Vedic Healing
              </span>
              <h3 className="font-serif text-base sm:text-xl font-bold text-white mb-0.5">
                Warm Medicated Herbal Oils
              </h3>
              <p className="text-[11px] sm:text-xs text-slate-200">
                Prepared with herbs to soothe nerves, release toxins, and restore vitality.
              </p>
            </div>
          </div>

          {/* Right Text Column */}
          <div className="reveal-right stagger-1 order-1 lg:order-2">

            <h2 className="font-serif text-xl sm:text-3xl lg:text-4xl font-bold text-white mb-2.5 sm:mb-3 leading-tight">
              Holistic Ayurvedic Spa &amp; Abhyanga in Bengaluru
            </h2>
            <p className="text-xs sm:text-sm lg:text-base text-slate-300 leading-relaxed mb-4 sm:mb-5">
              At Bliss Spa BTM Layout, our certified Ayurvedic practitioners use warm classical herbal oils and synchronized strokes over 107 Marma energy nodes for deep physiological restoration.
            </p>

            {/* 4 Highlights with Bespoke Thematic Icons */}
            <div className="grid grid-cols-1 xs:grid-cols-2 gap-2.5 sm:gap-3.5 mb-6">
              <div className="reveal-scale stagger-1 bg-[#14221c] border border-white/10 rounded-xl p-3 flex items-start gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-[#cfa559]/15 border border-[#cfa559]/25 flex items-center justify-center shrink-0">
                  <Heart className="w-4 h-4 text-[#dfc282]" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white">Abhyanga</h4>
                  <p className="text-[10px] text-slate-300 mt-0.5">Rhythmic nourishing palm work.</p>
                </div>
              </div>

              <div className="reveal-scale stagger-2 bg-[#14221c] border border-white/10 rounded-xl p-3 flex items-start gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-[#cfa559]/15 border border-[#cfa559]/25 flex items-center justify-center shrink-0">
                  <Target className="w-4 h-4 text-[#dfc282]" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white">Marma Healing</h4>
                  <p className="text-[10px] text-slate-300 mt-0.5">Releases blocked energy channels.</p>
                </div>
              </div>

              <div className="reveal-scale stagger-3 bg-[#14221c] border border-white/10 rounded-xl p-3 flex items-start gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-[#cfa559]/15 border border-[#cfa559]/25 flex items-center justify-center shrink-0">
                  <Sparkles className="w-4 h-4 text-[#dfc282]" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white">Natural Detox</h4>
                  <p className="text-[10px] text-slate-300 mt-0.5">Mobilizes stored metabolic toxins.</p>
                </div>
              </div>

              <div className="reveal-scale stagger-4 bg-[#14221c] border border-white/10 rounded-xl p-3 flex items-start gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-[#cfa559]/15 border border-[#cfa559]/25 flex items-center justify-center shrink-0">
                  <Droplets className="w-4 h-4 text-[#dfc282]" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white">Shirodhara</h4>
                  <p className="text-[10px] text-slate-300 mt-0.5">Continuous warm herbal stream.</p>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => onOpenBooking('Ayurveda Spa Massage', '₹2,799')}
                className="w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#dfc282] via-[#cfa559] to-[#b38838] text-[#060f0a] font-semibold text-xs sm:text-sm px-5 py-2.5 rounded-full shadow-[0_2px_10px_rgba(197,160,89,0.22)] hover:brightness-105 active:scale-95 transition-all cursor-pointer"
              >
                <span>Book Ayurveda Spa (₹2,799)</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
