import React from 'react';
import { Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';

export default function ThaiMassage({ onOpenBooking }) {
  return (
    <section id="thai-massage" className="relative bg-[#0d1612] border-t border-white/10 py-10 sm:py-20 px-3.5 sm:px-6 lg:px-8">
      <div className="container max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 items-center">

          {/* Left Text Column */}
          <div className="reveal-left">

            <h2 className="font-serif text-xl sm:text-3xl lg:text-4xl font-bold text-white mb-2.5 sm:mb-3 leading-tight">
              Authentic Traditional Thai Massage in BTM Layout
            </h2>
            <p className="text-xs sm:text-sm lg:text-base text-slate-300 leading-relaxed mb-4 sm:mb-5">
              Traditional Thai Massage is an ancient bodywork therapy performed on a comfortable floor mat. You remain in loose cotton attire while skilled practitioners guide your body through gentle yoga stretches, rhythmic palming, and acupressure.
            </p>

            {/* 4 Highlights */}
            <div className="grid grid-cols-1 xs:grid-cols-2 gap-2.5 sm:gap-3.5 mb-6">
              <div className="reveal-scale stagger-1 bg-[#14221c] border border-white/10 rounded-xl p-3 flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#dfc282] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-white">100% Oil-Free</h4>
                  <p className="text-[10px] text-slate-300 mt-0.5">Loose cotton robes, zero oils.</p>
                </div>
              </div>

              <div className="reveal-scale stagger-2 bg-[#14221c] border border-white/10 rounded-xl p-3 flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#dfc282] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-white">Decompression</h4>
                  <p className="text-[10px] text-slate-300 mt-0.5">Unlocks tight spine and hips.</p>
                </div>
              </div>

              <div className="reveal-scale stagger-3 bg-[#14221c] border border-white/10 rounded-xl p-3 flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#dfc282] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-white">Assisted Yoga</h4>
                  <p className="text-[10px] text-slate-300 mt-0.5">Deep passive yoga stretches.</p>
                </div>
              </div>

              <div className="reveal-scale stagger-4 bg-[#14221c] border border-white/10 rounded-xl p-3 flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#dfc282] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-white">Acupressure</h4>
                  <p className="text-[10px] text-slate-300 mt-0.5">Stimulates energy pathways.</p>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => onOpenBooking('Thai Massage', '₹2,499')}
                className="w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#dfc282] via-[#cfa559] to-[#b38838] text-[#060f0a] font-semibold text-xs sm:text-sm px-5 py-2.5 rounded-full shadow-[0_2px_10px_rgba(197,160,89,0.22)] hover:brightness-105 active:scale-95 transition-all cursor-pointer"
              >
                <span>Book Thai Yoga (₹2,499)</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Right Image Feature */}
          <div className="reveal-right stagger-2 relative rounded-2xl sm:rounded-3xl overflow-hidden border border-white/10 shadow-xl h-56 sm:h-[400px]">
            <img
              src="assets/images/thai-massage.jpg"
              alt="Traditional Thai Yoga Massage at Bliss Spa BTM Layout"
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-4 sm:p-6">
              <div className="bg-[#14221c]/90 backdrop-blur-md border border-[#cfa559]/25 rounded-xl p-2.5 sm:p-3 text-xs text-slate-200">
                ⭐ <strong className="text-white">Rated #1</strong> for desk workers &amp; runners in BTM 1st Stage
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
