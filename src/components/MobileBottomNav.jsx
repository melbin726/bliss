import React from 'react';
import { Phone, MessageCircle, CalendarCheck, MapPin, Sparkles } from 'lucide-react';

export default function MobileBottomNav({ onOpenBooking }) {
  return (
    <nav 
      aria-label="Mobile Bottom Navigation"
      className="md:hidden fixed bottom-0 inset-x-0 z-50 bg-[#080d0a]/95 backdrop-blur-2xl border-t border-[#e6c35c]/35 px-2.5 xs:px-3 pt-2 pb-[max(0.6rem,env(safe-area-inset-bottom))] shadow-[0_-12px_30px_rgba(0,0,0,0.85)]"
    >
      <div className="flex items-center justify-between gap-1.5 xs:gap-2 max-w-md mx-auto w-full">
        
        {/* Call Concierge */}
        <a
          href="tel:09945264342"
          className="flex flex-col items-center justify-center h-11 py-1 px-2 rounded-xl bg-white/5 hover:bg-white/10 active:scale-95 text-slate-200 hover:text-white transition-all min-w-[46px] xs:min-w-[52px] shrink-0"
          title="Call Reception: 099452 64342"
          aria-label="Call Reception"
        >
          <Phone className="w-4 h-4 text-[#e6c35c] mb-0.5 shrink-0" />
          <span className="text-[10px] font-semibold tracking-tight leading-none">Call</span>
        </a>

        {/* WhatsApp */}
        <a
          href="https://wa.me/919945264342?text=Hello%20Bliss%20Spa%20BTM%20Layout,%20I%20would%20like%20to%20check%20availability%20for%20a%20therapy."
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center h-11 py-1 px-2 rounded-xl bg-white/5 hover:bg-[#25d366]/15 active:scale-95 text-slate-200 hover:text-emerald-400 transition-all min-w-[46px] xs:min-w-[52px] shrink-0"
          title="WhatsApp Concierge"
          aria-label="WhatsApp Concierge"
        >
          <MessageCircle className="w-4 h-4 text-[#25D366] mb-0.5 shrink-0" />
          <span className="text-[10px] font-semibold tracking-tight leading-none">Chat</span>
        </a>

        {/* Directions */}
        <a
          href="#location"
          className="flex flex-col items-center justify-center h-11 py-1 px-2 rounded-xl bg-white/5 hover:bg-white/10 active:scale-95 text-slate-200 hover:text-white transition-all min-w-[46px] xs:min-w-[52px] shrink-0"
          title="Directions & Map"
          aria-label="Directions and Map"
        >
          <MapPin className="w-4 h-4 text-[#e6c35c] mb-0.5 shrink-0" />
          <span className="text-[10px] font-semibold tracking-tight leading-none">Map</span>
        </a>

        {/* Instant Book CTA Pill */}
        <button
          type="button"
          onClick={() => onOpenBooking('Swedish Massage', '₹1,999')}
          className="flex-1 h-11 flex items-center justify-center gap-1.5 px-3 rounded-xl bg-gradient-to-r from-[#fff3d1] via-[#e6c35c] to-[#b89128] text-slate-950 font-bold text-xs shadow-[0_2px_14px_rgba(230,195,92,0.45)] active:scale-98 transition-all shrink min-w-0"
          aria-label="Book Session"
        >
          <span className="relative flex h-2 w-2 shrink-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-950 opacity-60"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-700"></span>
          </span>
          <CalendarCheck className="w-3.5 h-3.5 text-black shrink-0" />
          <span className="truncate uppercase tracking-wider font-extrabold text-[11px]">Book Session</span>
        </button>

      </div>
    </nav>
  );
}
