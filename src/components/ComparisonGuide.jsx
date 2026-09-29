import React from 'react';
import { Feather, Droplet, Users, ShowerHead, Sparkles } from 'lucide-react';

export default function ComparisonGuide({ onOpenBooking }) {
  return (
    <section id="guide" className="relative bg-[#0d1612] border-t border-white/10 py-10 sm:py-20 px-3.5 sm:px-6 lg:px-8">
      <div className="container max-w-7xl mx-auto">
        <div className="text-center mb-8 sm:mb-12">
          <span className="inline-block text-[10px] sm:text-xs font-bold text-[#e6c35c] tracking-widest uppercase mb-1">
            Spa Decision Guide
          </span>
          <h2 className="font-serif text-2xl sm:text-4xl font-bold text-white mb-2">
            Swedish vs. Aroma vs. Deep Tissue
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto leading-relaxed">
            Side-by-side comparison to help you choose the ideal therapeutic bodywork.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          
          {/* 1. Swedish */}
          <div className="bg-[#14221c] border border-white/10 rounded-2xl sm:rounded-3xl p-4 xs:p-5 sm:p-7 flex flex-col justify-between shadow-lg">
            <div>
              <span className="text-[10px] font-bold text-[#e6c35c] uppercase tracking-wider block mb-1">Full Body Calm</span>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-white mb-2">Swedish Massage</h3>
              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                Gentle to moderate strokes that warm up muscle tissues, flush lactic acid, and relieve generalized fatigue.
              </p>
              
              <ul className="flex flex-col gap-2 text-xs text-slate-200 border-t border-white/10 pt-4 mb-5">
                <li className="flex items-center gap-2"><Feather className="w-3.5 h-3.5 text-[#e6c35c] shrink-0" /> <span><strong>Pressure:</strong> Gentle to Moderate</span></li>
                <li className="flex items-center gap-2"><Droplet className="w-3.5 h-3.5 text-[#e6c35c] shrink-0" /> <span><strong>Oil:</strong> Neutral Herbal Carrier Oils</span></li>
                <li className="flex items-center gap-2"><Users className="w-3.5 h-3.5 text-[#e6c35c] shrink-0" /> <span><strong>Best For:</strong> First-timers &amp; stress unwind</span></li>
                <li className="flex items-center gap-2"><ShowerHead className="w-3.5 h-3.5 text-[#e6c35c] shrink-0" /> <span><strong>Steam:</strong> En-suite steam included</span></li>
              </ul>
            </div>

            <button
              type="button"
              onClick={() => onOpenBooking('Swedish Massage', '₹1,999')}
              className="w-full min-h-[44px] bg-gradient-to-r from-[#fff3d1] via-[#e6c35c] to-[#b89128] text-slate-950 font-bold text-xs py-2.5 sm:py-3 rounded-full shadow-md active:scale-98 transition cursor-pointer"
            >
              Choose Swedish (₹1,999)
            </button>
          </div>

          {/* 2. Aroma */}
          <div className="bg-[#14221c] border-2 border-[#e6c35c] rounded-2xl sm:rounded-3xl p-4 xs:p-5 sm:p-7 flex flex-col justify-between shadow-xl relative">
            <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#e6c35c] text-slate-950 font-bold text-[10px] px-3 py-0.5 rounded-full uppercase tracking-wider shadow">
              Most Popular
            </span>
            <div>
              <span className="text-[10px] font-bold text-[#e6c35c] uppercase tracking-wider block mb-1 mt-1">Mind &amp; Sensory Calm</span>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-white mb-2">Aroma Massage</h3>
              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                Blends gentle soothing touch with the direct inhalation of organic lavender and chamomile essential oils.
              </p>
              
              <ul className="flex flex-col gap-2 text-xs text-slate-200 border-t border-white/10 pt-4 mb-5">
                <li className="flex items-center gap-2"><Feather className="w-3.5 h-3.5 text-[#e6c35c] shrink-0" /> <span><strong>Pressure:</strong> Light to Gentle</span></li>
                <li className="flex items-center gap-2"><Droplet className="w-3.5 h-3.5 text-[#e6c35c] shrink-0" /> <span><strong>Oil:</strong> Pure Lavender &amp; Chamomile</span></li>
                <li className="flex items-center gap-2"><Users className="w-3.5 h-3.5 text-[#e6c35c] shrink-0" /> <span><strong>Best For:</strong> Burnout, insomnia &amp; calm</span></li>
                <li className="flex items-center gap-2"><ShowerHead className="w-3.5 h-3.5 text-[#e6c35c] shrink-0" /> <span><strong>Steam:</strong> En-suite steam included</span></li>
              </ul>
            </div>

            <button
              type="button"
              onClick={() => onOpenBooking('Aroma Massage', '₹2,199')}
              className="w-full min-h-[44px] bg-gradient-to-r from-[#fff3d1] via-[#e6c35c] to-[#b89128] text-slate-950 font-bold text-xs py-2.5 sm:py-3 rounded-full shadow-md active:scale-98 transition cursor-pointer"
            >
              Choose Aroma (₹2,199)
            </button>
          </div>

          {/* 3. Deep Tissue */}
          <div className="bg-[#14221c] border border-white/10 rounded-2xl sm:rounded-3xl p-4 xs:p-5 sm:p-7 flex flex-col justify-between shadow-lg">
            <div>
              <span className="text-[10px] font-bold text-[#e6c35c] uppercase tracking-wider block mb-1">Deep Knots &amp; Posture</span>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-white mb-2">Deep Tissue Massage</h3>
              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                Targeted, firm friction strokes designed to release dense adhesions and knots in the trapezius and back.
              </p>
              
              <ul className="flex flex-col gap-2 text-xs text-slate-200 border-t border-white/10 pt-4 mb-5">
                <li className="flex items-center gap-2"><Feather className="w-3.5 h-3.5 text-[#e6c35c] shrink-0" /> <span><strong>Pressure:</strong> Firm &amp; Deep</span></li>
                <li className="flex items-center gap-2"><Droplet className="w-3.5 h-3.5 text-[#e6c35c] shrink-0" /> <span><strong>Oil:</strong> Warm Wintergreen Infusion</span></li>
                <li className="flex items-center gap-2"><Users className="w-3.5 h-3.5 text-[#e6c35c] shrink-0" /> <span><strong>Best For:</strong> Desk neck, stiffness &amp; gym knots</span></li>
                <li className="flex items-center gap-2"><ShowerHead className="w-3.5 h-3.5 text-[#e6c35c] shrink-0" /> <span><strong>Steam:</strong> En-suite steam included</span></li>
              </ul>
            </div>

            <button
              type="button"
              onClick={() => onOpenBooking('Deep Tissue Massage', '₹2,299')}
              className="w-full min-h-[44px] bg-gradient-to-r from-[#fff3d1] via-[#e6c35c] to-[#b89128] text-slate-950 font-bold text-xs py-2.5 sm:py-3 rounded-full shadow-md active:scale-98 transition cursor-pointer"
            >
              Choose Deep Tissue (₹2,299)
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
