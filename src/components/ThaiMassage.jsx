import React from 'react';

export default function ThaiMassage({ onOpenBooking }) {
  return (
    <section id="thai-massage" className="thai-section relative bg-[#0d1612] border-t border-white/10 py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
      <div className="container max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          
          {/* Left Text Column */}
          <div className="thai-text-col">
            <span className="section-label inline-block text-xs font-bold text-[#e6c35c] tracking-widest uppercase mb-2">
              Ancient Nuad Bo-Rarn
            </span>
            <h2 className="section-heading font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-5 leading-tight">
              Authentic Traditional Thai Massage in BTM Layout
            </h2>
            <p className="text-sm sm:text-base text-slate-200 leading-relaxed mb-6 font-normal">
              Unlike western oil massages, Traditional Thai Massage is an ancient bodywork therapy performed on a firm, comfortable floor mat. You remain comfortably clothed in loose cotton attire while skilled practitioners guide your body through gentle, passive yoga stretches, rhythmic palming, and targeted acupressure.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="bg-[#14221c] border border-white/10 rounded-2xl p-4 flex items-start gap-3">
                <i className="fas fa-check-circle text-[#e6c35c] text-lg mt-0.5"></i>
                <div>
                  <h4 className="text-sm font-bold text-white">100% Oil-Free</h4>
                  <p className="text-xs text-slate-300 mt-1 font-normal">Done in loose, clean cotton clothing with zero sticky oils.</p>
                </div>
              </div>
              <div className="bg-[#14221c] border border-white/10 rounded-2xl p-4 flex items-start gap-3">
                <i className="fas fa-check-circle text-[#e6c35c] text-lg mt-0.5"></i>
                <div>
                  <h4 className="text-sm font-bold text-white">Spinal Decompression</h4>
                  <p className="text-xs text-slate-300 mt-1 font-normal">Unlocks tight vertebrae, opening hips and tense hamstrings.</p>
                </div>
              </div>
              <div className="bg-[#14221c] border border-white/10 rounded-2xl p-4 flex items-start gap-3">
                <i className="fas fa-check-circle text-[#e6c35c] text-lg mt-0.5"></i>
                <div>
                  <h4 className="text-sm font-bold text-white">Assisted Yoga Flow</h4>
                  <p className="text-xs text-slate-300 mt-1 font-normal">Experience deep yoga relief without needing to exert any physical effort.</p>
                </div>
              </div>
              <div className="bg-[#14221c] border border-white/10 rounded-2xl p-4 flex items-start gap-3">
                <i className="fas fa-check-circle text-[#e6c35c] text-lg mt-0.5"></i>
                <div>
                  <h4 className="text-sm font-bold text-white">Sen Line Acupressure</h4>
                  <p className="text-xs text-slate-300 mt-1 font-normal">Stimulates vital energetic pathways, restoring vibrant daily stamina.</p>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4 flex-wrap">
              <button
                onClick={() => onOpenBooking('Thai Massage', '₹2,499')}
                className="btn-primary inline-flex items-center gap-2 bg-gradient-to-r from-[#fff3d1] via-[#e6c35c] to-[#b89128] text-slate-950 font-bold text-sm px-7 py-3.5 rounded-full shadow-[0_4px_18px_rgba(230,195,92,0.4)] hover:scale-105 active:scale-95 transition-all cursor-pointer"
              >
                <span>Book Thai Yoga Ritual (₹2,499)</span>
                <i className="fas fa-arrow-right text-xs"></i>
              </button>
              <a
                href="tel:09945264342"
                className="btn-secondary inline-flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/15 text-slate-200 text-sm font-semibold px-5 py-3 rounded-full transition"
              >
                <i className="fas fa-phone-alt text-[#e6c35c]"></i>
                <span>Ask Concierge</span>
              </a>
            </div>
          </div>

          {/* Right Image Feature */}
          <div className="thai-img-col relative rounded-3xl overflow-hidden shadow-2xl border border-white/10 group">
            <img 
              src="assets/images/thai-massage.jpg" 
              alt="Traditional Thai Massage in BTM 1st Stage Bangalore" 
              className="w-full h-[420px] sm:h-[500px] object-cover group-hover:scale-105 transition-transform duration-700" 
              loading="lazy" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent p-6 sm:p-8 flex flex-col justify-end">
              <span className="bg-[#e6c35c] text-slate-950 font-bold text-xs px-3 py-1 rounded-full w-max mb-2">
                Ancient Heritage Ritual
              </span>
              <h3 className="font-serif text-2xl font-bold text-white mb-1">Authentic Sen Line Energy Work</h3>
              <p className="text-xs text-slate-200">Releases deep tension accumulated from long hours of sitting and daily Bangalore commute.</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
