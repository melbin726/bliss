import React from 'react';

export default function ComparisonGuide({ onOpenBooking }) {
  return (
    <section id="guide" className="guide-section relative bg-[#0d1612] border-t border-white/10 py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
      <div className="container max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <span className="section-label inline-block text-xs font-bold text-[#e6c35c] tracking-widest uppercase mb-2">
            Spa Decision Guide
          </span>
          <h2 className="section-heading font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-3">
            Swedish vs. Aroma vs. Deep Tissue
          </h2>
          <p className="section-subtitle text-xs sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed font-normal">
            Not sure which therapy is right for your body today? Review our side-by-side comparison below to pick your ideal treatment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          
          {/* 1. Swedish */}
          <div className="guide-card bg-[#14221c] border border-white/10 rounded-3xl p-6 sm:p-8 flex flex-col justify-between hover:border-[#e6c35c]/50 transition shadow-xl">
            <div>
              <span className="text-xs font-bold text-[#e6c35c] uppercase tracking-wider block mb-2">Full Body Calm</span>
              <h3 className="font-serif text-2xl font-bold text-white mb-3">Swedish Massage</h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal mb-5">
                Focuses purely on physical relaxation. Gentle to moderate effleurage strokes warm up muscle tissues, flush lactic acid, and relieve generalized fatigue.
              </p>
              
              <ul className="flex flex-col gap-2.5 text-xs sm:text-sm text-slate-200 border-t border-white/10 pt-5 mb-6 list-none p-0">
                <li className="flex items-center gap-2"><i className="fas fa-feather text-[#e6c35c]"></i> <strong>Pressure:</strong> Gentle to Moderate</li>
                <li className="flex items-center gap-2"><i className="fas fa-oil-can text-[#e6c35c]"></i> <strong>Oil:</strong> Neutral Herbal Carrier Oils</li>
                <li className="flex items-center gap-2"><i className="fas fa-user text-[#e6c35c]"></i> <strong>Best For:</strong> First-timers &amp; stress unwind</li>
                <li className="flex items-center gap-2"><i className="fas fa-shower text-[#e6c35c]"></i> <strong>Steam:</strong> En-suite private steam included</li>
              </ul>
            </div>

            <button
              onClick={() => onOpenBooking('Swedish Massage', '₹1,999')}
              className="btn-primary w-full bg-gradient-to-r from-[#fff3d1] via-[#e6c35c] to-[#b89128] text-slate-950 font-bold text-xs py-3 rounded-full shadow-[0_4px_16px_rgba(230,195,92,0.35)]"
            >
              Choose Swedish (₹1,999)
            </button>
          </div>

          {/* 2. Aroma */}
          <div className="guide-card bg-[#14221c] border-2 border-[#e6c35c] rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-[0_0_30px_rgba(230,195,92,0.2)] relative">
            <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#e6c35c] text-slate-950 font-bold text-[0.7rem] px-3.5 py-1 rounded-full uppercase tracking-wider shadow-md">
              Most Popular for Anxiety
            </span>
            <div>
              <span className="text-xs font-bold text-[#e6c35c] uppercase tracking-wider block mb-2 mt-2">Mind &amp; Sensory Calm</span>
              <h3 className="font-serif text-2xl font-bold text-white mb-3">Aroma Massage</h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal mb-5">
                Focuses heavily on mental calm and nervous system resets. Combines gentle soothing touch with the direct inhalation of pure organic lavender and chamomile essential oils.
              </p>
              
              <ul className="flex flex-col gap-2.5 text-xs sm:text-sm text-slate-200 border-t border-white/10 pt-5 mb-6 list-none p-0">
                <li className="flex items-center gap-2"><i className="fas fa-feather text-[#e6c35c]"></i> <strong>Pressure:</strong> Light to Gentle</li>
                <li className="flex items-center gap-2"><i className="fas fa-spa text-[#e6c35c]"></i> <strong>Oil:</strong> Pure Lavender &amp; Chamomile</li>
                <li className="flex items-center gap-2"><i className="fas fa-user text-[#e6c35c]"></i> <strong>Best For:</strong> Insomnia, burnout &amp; anxiety</li>
                <li className="flex items-center gap-2"><i className="fas fa-shower text-[#e6c35c]"></i> <strong>Steam:</strong> En-suite private steam included</li>
              </ul>
            </div>

            <button
              onClick={() => onOpenBooking('Aroma Massage', '₹2,199')}
              className="btn-primary w-full bg-gradient-to-r from-[#fff3d1] via-[#e6c35c] to-[#b89128] text-slate-950 font-bold text-xs py-3 rounded-full shadow-[0_4px_18px_rgba(230,195,92,0.45)] hover:scale-105 transition"
            >
              Choose Aroma (₹2,199)
            </button>
          </div>

          {/* 3. Deep Tissue */}
          <div className="guide-card bg-[#14221c] border border-white/10 rounded-3xl p-6 sm:p-8 flex flex-col justify-between hover:border-[#e6c35c]/50 transition shadow-xl">
            <div>
              <span className="text-xs font-bold text-[#e6c35c] uppercase tracking-wider block mb-2">Deep Knots &amp; Posture</span>
              <h3 className="font-serif text-2xl font-bold text-white mb-3">Deep Tissue Massage</h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal mb-5">
                Targeted, slow, firm friction strokes designed to break down dense adhesions and stubborn knots in the trapezius, rhomboids, neck, and lower back.
              </p>
              
              <ul className="flex flex-col gap-2.5 text-xs sm:text-sm text-slate-200 border-t border-white/10 pt-5 mb-6 list-none p-0">
                <li className="flex items-center gap-2"><i className="fas fa-fist-raised text-[#e6c35c]"></i> <strong>Pressure:</strong> Firm &amp; Deep</li>
                <li className="flex items-center gap-2"><i className="fas fa-fire-alt text-[#e6c35c]"></i> <strong>Oil:</strong> Deep penetrating wintergreen</li>
                <li className="flex items-center gap-2"><i className="fas fa-user text-[#e6c35c]"></i> <strong>Best For:</strong> Desk neck, sciatica &amp; gym soreness</li>
                <li className="flex items-center gap-2"><i className="fas fa-shower text-[#e6c35c]"></i> <strong>Steam:</strong> En-suite private steam included</li>
              </ul>
            </div>

            <button
              onClick={() => onOpenBooking('Deep Tissue Massage', '₹2,299')}
              className="btn-primary w-full bg-gradient-to-r from-[#fff3d1] via-[#e6c35c] to-[#b89128] text-slate-950 font-bold text-xs py-3 rounded-full shadow-[0_4px_16px_rgba(230,195,92,0.35)]"
            >
              Choose Deep Tissue (₹2,299)
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
