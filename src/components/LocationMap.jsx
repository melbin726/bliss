import React from 'react';
import { MapPin, Phone, Clock, Navigation, Compass, ExternalLink } from 'lucide-react';

export default function LocationMap({ onOpenBooking }) {
  return (
    <section id="location" className="relative bg-[#0a110e] border-t border-white/10 py-10 sm:py-20 px-3.5 sm:px-6 lg:px-8">
      <div className="container max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 items-stretch">
          
          {/* Location Information Card */}
          <div className="bg-[#14221c] border border-white/10 rounded-2xl sm:rounded-3xl p-5 sm:p-7 shadow-xl flex flex-col justify-between">
            <div>
              <span className="inline-block text-[10px] sm:text-xs font-bold text-[#e6c35c] tracking-widest uppercase mb-1">
                Directions &amp; Contact
              </span>
              <h3 className="font-serif text-xl sm:text-3xl font-bold text-white mb-1.5">
                BLISS SPA &amp; BTM LAYOUT
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-5">
                Premium wellness destination near Udupi Garden signal in BTM 1st Stage.
              </p>

              <div className="space-y-3 mb-5">
                <div className="flex items-start gap-3 bg-white/5 border border-white/10 rounded-xl p-3">
                  <div className="w-8 h-8 rounded-lg bg-[#e6c35c]/15 text-[#e6c35c] flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <h6 className="text-[10px] font-bold text-[#e6c35c] uppercase tracking-wider">Address</h6>
                    <p className="text-xs sm:text-sm text-slate-100 font-medium leading-snug mt-0.5">
                      No. 63, 1st Floor, B-Block, 16th Main, 8th Cross Road, near Udupi Garden, BTM 1st Stage, Bengaluru 560029.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-white/5 border border-white/10 rounded-xl p-3">
                  <div className="w-8 h-8 rounded-lg bg-[#e6c35c]/15 text-[#e6c35c] flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <h6 className="text-[10px] font-bold text-[#e6c35c] uppercase tracking-wider">Phone Numbers</h6>
                    <p className="text-xs sm:text-sm leading-snug mt-0.5 space-x-2">
                      <a href="tel:09945264342" className="text-[#e6c35c] font-bold hover:underline">099452 64342</a>
                      <span className="text-white/30">/</span>
                      <a href="tel:08095266198" className="text-white font-bold hover:underline">080 9526 6198</a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-white/5 border border-white/10 rounded-xl p-3">
                  <div className="w-8 h-8 rounded-lg bg-[#e6c35c]/15 text-[#e6c35c] flex items-center justify-center shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <h6 className="text-[10px] font-bold text-[#e6c35c] uppercase tracking-wider">Operating Hours</h6>
                    <p className="text-xs text-slate-200 mt-0.5">
                      Mon – Sun: 10:00 AM – 10:00 PM (All 7 Days Open)
                    </p>
                  </div>
                </div>
              </div>

              {/* Landmark Cues */}
              <div className="bg-[#0a110e]/70 border border-[#e6c35c]/25 rounded-xl p-3 mb-5">
                <span className="text-[10px] uppercase font-bold text-[#e6c35c] block mb-1">
                  Nearby Landmarks
                </span>
                <p className="text-[11px] text-slate-300 leading-relaxed">
                  2 mins from Udupi Garden signal • 5 mins from Silk Board Junction • 8 mins from Koramangala 5th Block.
                </p>
              </div>
            </div>

            <div className="flex flex-col xs:flex-row gap-2.5">
              <a 
                href="https://maps.google.com/?q=12.919902,77.610656" 
                target="_blank" 
                rel="noreferrer"
                className="flex-1 min-h-[44px] py-2.5 px-3 rounded-xl bg-gradient-to-r from-[#fff3d1] via-[#e6c35c] to-[#b89128] text-slate-950 font-bold text-xs flex items-center justify-center gap-1.5 shadow-md active:scale-98 transition"
              >
                <Navigation className="w-3.5 h-3.5 text-black shrink-0" />
                <span>Open in Google Maps</span>
              </a>

              <button
                type="button"
                onClick={() => onOpenBooking('Directions & Immediate Arrival', '₹1,999')}
                className="min-h-[44px] py-2.5 px-4 rounded-xl bg-white/10 hover:bg-white/15 text-white font-semibold text-xs active:scale-98 transition flex items-center justify-center"
              >
                Book Arrival
              </button>
            </div>
          </div>

          {/* Interactive Google Map Embed */}
          <div className="rounded-2xl sm:rounded-3xl overflow-hidden border border-white/10 shadow-xl h-64 sm:h-[450px] relative bg-[#14221c]">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.8953761732947!2d77.6084673!3d12.919902!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15031b26fa05%3A0x6b402804b46c6eb0!2sBliss%20Spa!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) contrast(90%)' }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Bliss Spa BTM Layout Google Maps Directions"
            />
            <div className="absolute top-3 right-3 bg-[#0a110e]/90 backdrop-blur-md border border-[#e6c35c]/40 text-[#e6c35c] text-[10px] font-bold px-2.5 py-1 rounded-full pointer-events-none">
              📍 BTM 1st Stage
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
