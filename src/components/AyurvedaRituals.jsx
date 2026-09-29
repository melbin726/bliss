import React from 'react';

export default function AyurvedaRituals({ onOpenBooking }) {
  return (
    <section id="ayurveda" className="ayurveda-section relative bg-[#0a110e] border-t border-white/10 py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
      <div className="container max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          
          {/* Left Image Column */}
          <div className="ayurveda-img-col order-2 lg:order-1 relative rounded-3xl overflow-hidden shadow-2xl border border-white/10 group">
            <img 
              src="assets/images/ayurvedic-shirodhara.jpg" 
              alt="Ayurvedic Abhyanga & Shirodhara at Bliss Spa BTM Layout" 
              className="w-full h-[420px] sm:h-[500px] object-cover group-hover:scale-105 transition-transform duration-700" 
              loading="lazy" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent p-6 sm:p-8 flex flex-col justify-end">
              <span className="bg-[#e6c35c] text-slate-950 font-bold text-xs px-3 py-1 rounded-full w-max mb-2">
                Classical Vedic Healing
              </span>
              <h3 className="font-serif text-2xl font-bold text-white mb-1">Warm Medicated Herbal Decoctions</h3>
              <p className="text-xs text-slate-200">Prepared with sacred herbs to soothe the nervous system, release Ama toxins, and balance biological Doshas.</p>
            </div>
          </div>

          {/* Right Text Column */}
          <div className="ayurveda-text-col order-1 lg:order-2">
            <span className="section-label inline-block text-xs font-bold text-[#e6c35c] tracking-widest uppercase mb-2">
              Time-Tested Vedic Therapy
            </span>
            <h2 className="section-heading font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-5 leading-tight">
              Holistic Ayurvedic Spa &amp; Abhyanga in Bengaluru
            </h2>
            <p className="text-sm sm:text-base text-slate-200 leading-relaxed mb-6 font-normal">
              Ayurveda is not a temporary cosmetic treatment — it is a 5,000-year-old medical science that harmonizes body, mind, and spirit. At Bliss Spa BTM Layout, our certified Ayurvedic practitioners use customized warm classical herbal oils and synchronized strokes over 107 Marma energy nodes.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="bg-[#14221c] border border-white/10 rounded-2xl p-4 flex items-start gap-3">
                <i className="fas fa-leaf text-[#e6c35c] text-lg mt-0.5"></i>
                <div>
                  <h4 className="text-sm font-bold text-white">Authentic Abhyanga</h4>
                  <p className="text-xs text-slate-300 mt-1 font-normal">Synchronized rhythmic palm work that deeply nourishes tissues and joints.</p>
                </div>
              </div>
              <div className="bg-[#14221c] border border-white/10 rounded-2xl p-4 flex items-start gap-3">
                <i className="fas fa-leaf text-[#e6c35c] text-lg mt-0.5"></i>
                <div>
                  <h4 className="text-sm font-bold text-white">Vital Marma Healing</h4>
                  <p className="text-xs text-slate-300 mt-1 font-normal">Releases energetic blockages, improving blood circulation and immunity.</p>
                </div>
              </div>
              <div className="bg-[#14221c] border border-white/10 rounded-2xl p-4 flex items-start gap-3">
                <i className="fas fa-leaf text-[#e6c35c] text-lg mt-0.5"></i>
                <div>
                  <h4 className="text-sm font-bold text-white">Cellular Detoxification</h4>
                  <p className="text-xs text-slate-300 mt-1 font-normal">Warm medicated oils mobilize stored metabolic toxins for natural release.</p>
                </div>
              </div>
              <div className="bg-[#14221c] border border-white/10 rounded-2xl p-4 flex items-start gap-3">
                <i className="fas fa-leaf text-[#e6c35c] text-lg mt-0.5"></i>
                <div>
                  <h4 className="text-sm font-bold text-white">Herbal Steam Swedana</h4>
                  <p className="text-xs text-slate-300 mt-1 font-normal">Private en-suite eucalyptus herbal steam opens pores and calms the nervous system.</p>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4 flex-wrap">
              <button
                onClick={() => onOpenBooking('Ayurveda Spa Massage', '₹2,799')}
                className="btn-primary inline-flex items-center gap-2 bg-gradient-to-r from-[#fff3d1] via-[#e6c35c] to-[#b89128] text-slate-950 font-bold text-sm px-7 py-3.5 rounded-full shadow-[0_4px_18px_rgba(230,195,92,0.4)] hover:scale-105 active:scale-95 transition-all cursor-pointer"
              >
                <span>Reserve Ayurveda Ritual (₹2,799)</span>
                <i className="fas fa-arrow-right text-xs"></i>
              </button>
              <a
                href="https://wa.me/916282696352?text=Hello%20Bliss%20Spa%2C%20I%20would%20like%20to%20know%20more%20about%20your%20Ayurvedic%20treatments."
                target="_blank"
                rel="noreferrer"
                className="btn-secondary inline-flex items-center gap-2 bg-[#25d366]/15 hover:bg-[#25d366]/25 border border-[#25d366] text-[#25d366] text-sm font-semibold px-5 py-3 rounded-full transition"
              >
                <i className="fab fa-whatsapp"></i>
                <span>WhatsApp Questions</span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
