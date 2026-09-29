import React from 'react';

export default function LocationMap() {
  return (
    <section id="location" className="location-section relative bg-[#0a110e] border-t border-white/10 py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
      <div className="container max-w-7xl mx-auto">
        <div className="location-grid grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          
          {/* Location Information Card */}
          <div className="location-info-card bg-[#14221c] border border-white/10 rounded-3xl p-6 sm:p-8 shadow-xl flex flex-col justify-between">
            <div>
              <span className="section-label inline-block text-xs font-bold text-[#e6c35c] tracking-widest uppercase mb-2">
                Directions &amp; Contact
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-2">
                BLISS SPA &amp; BTM LAYOUT
              </h3>
              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed mb-6 font-normal">
                A relaxing wellness destination offering a range of rejuvenating spa and massage treatments in Bengaluru.
              </p>

              <div className="loc-detail-group flex flex-col gap-4 mb-6">
                <div className="loc-item flex items-start gap-3 bg-white/5 border border-white/10 rounded-2xl p-4">
                  <div className="loc-icon w-9 h-9 rounded-xl bg-[#e6c35c]/15 text-[#e6c35c] flex items-center justify-center text-sm flex-shrink-0">
                    <i className="fas fa-map-marked-alt"></i>
                  </div>
                  <div className="loc-text">
                    <h6 className="text-xs font-bold text-[#e6c35c] uppercase tracking-wider mb-1">Address</h6>
                    <p className="text-xs sm:text-sm text-slate-100 font-medium leading-relaxed">
                      No. 63, 1st Floor, B-Block, 16th Main, 8th Cross Road, near Udupi Garden, BTM 1st Stage, Bengaluru 560029.
                    </p>
                  </div>
                </div>

                <div className="loc-item flex items-start gap-3 bg-white/5 border border-white/10 rounded-2xl p-4">
                  <div className="loc-icon w-9 h-9 rounded-xl bg-[#e6c35c]/15 text-[#e6c35c] flex items-center justify-center text-sm flex-shrink-0">
                    <i className="fas fa-phone-alt"></i>
                  </div>
                  <div className="loc-text">
                    <h6 className="text-xs font-bold text-[#e6c35c] uppercase tracking-wider mb-1">Phone Numbers</h6>
                    <p className="text-xs sm:text-sm leading-relaxed">
                      <a href="tel:09945264342" className="text-[#e6c35c] font-bold hover:underline">099452 64342</a>
                      <span className="text-white/30 mx-2">/</span>
                      <a href="tel:08095266198" className="text-white font-bold hover:underline">080 9526 6198</a>
                    </p>
                  </div>
                </div>

                <div className="loc-item flex items-start gap-3 bg-white/5 border border-white/10 rounded-2xl p-4">
                  <div className="loc-icon w-9 h-9 rounded-xl bg-[#e6c35c]/15 text-[#e6c35c] flex items-center justify-center text-sm flex-shrink-0">
                    <i className="far fa-clock"></i>
                  </div>
                  <div className="loc-text">
                    <h6 className="text-xs font-bold text-[#e6c35c] uppercase tracking-wider mb-1">Operating Hours</h6>
                    <p className="text-xs sm:text-sm text-slate-200">
                      Monday - Sunday: 10:00 AM – 10:00 PM (Appointments &amp; Walk-ins accepted)
                    </p>
                  </div>
                </div>

                <div className="loc-item flex items-start gap-3 bg-white/5 border border-white/10 rounded-2xl p-4">
                  <div className="loc-icon w-9 h-9 rounded-xl bg-[#e6c35c]/15 text-[#e6c35c] flex items-center justify-center text-sm flex-shrink-0">
                    <i className="fas fa-landmark"></i>
                  </div>
                  <div className="loc-text">
                    <h6 className="text-xs font-bold text-[#e6c35c] uppercase tracking-wider mb-1">Key Landmarks</h6>
                    <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-normal">
                      Near Udupi Garden Signal, 16th Main Road, BTM 1st Stage. Conveniently connected to Madiwala, Silk Board, and Bannerghatta Road.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="loc-actions flex gap-3 flex-wrap pt-2">
              <a 
                href="https://maps.google.com/?q=12.919902,77.610656" 
                target="_blank" 
                rel="noreferrer"
                className="btn-primary inline-flex items-center gap-2 bg-gradient-to-r from-[#fff3d1] via-[#e6c35c] to-[#b89128] text-slate-950 font-bold text-sm px-6 py-3 rounded-full shadow-[0_4px_18px_rgba(230,195,92,0.4)] hover:scale-105 active:scale-95 transition-all"
              >
                <i className="fas fa-directions"></i>
                <span>Open in Google Maps</span>
              </a>
              <a 
                href="https://wa.me/916282696352?text=Hello%20Bliss%20Spa%2C%20please%20send%20me%20directions%20to%20your%20BTM%201st%20Stage%20branch." 
                target="_blank" 
                rel="noreferrer"
                className="btn-secondary inline-flex items-center gap-2 bg-[#25d366]/15 hover:bg-[#25d366]/25 border border-[#25d366] text-[#25d366] font-semibold text-sm px-5 py-3 rounded-full transition"
              >
                <i className="fab fa-whatsapp"></i>
                <span>WhatsApp (6282696352)</span>
              </a>
            </div>
          </div>

          {/* Embedded Google Map */}
          <div className="map-visual-wrap relative rounded-3xl overflow-hidden shadow-2xl border border-white/10 min-h-[380px] lg:min-h-full">
            <iframe 
              src="https://maps.google.com/maps?q=12.919902,77.610656&hl=en&z=17&output=embed"
              className="w-full h-full min-h-[380px] border-0"
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Bliss Spa BTM 1st Stage Exact Map Location"
            ></iframe>
            <div className="map-badge-overlay absolute top-4 left-4 right-4 sm:right-auto bg-[#0a110e]/92 backdrop-blur-md border border-[#e6c35c]/40 rounded-2xl p-3.5 shadow-xl flex flex-col">
              <strong className="text-white text-xs sm:text-sm font-serif font-bold flex items-center gap-2">
                <i className="fas fa-spa text-[#e6c35c]"></i> Bliss Spa &amp; BTM Layout
              </strong>
              <span className="text-[0.7rem] sm:text-xs text-slate-300 mt-0.5">
                No. 63, 16th Main, near Udupi Garden, BTM 1st Stage
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
