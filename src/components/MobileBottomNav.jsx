import React from 'react';
import { Phone, MessageCircle, CalendarCheck, MapPin, Sparkles } from 'lucide-react';

export default function MobileBottomNav({ onOpenBooking }) {
  return (
    <nav 
      aria-label="Mobile Bottom Navigation"
      className="md:hidden fixed bottom-0 inset-x-0 z-50 bg-[#080d0a]/95 backdrop-blur-xl border-t border-[#e6c35c]/30 px-3 pt-2 pb-[max(0.5rem,env(safe-area-inset-bottom))] shadow-[0_-10px_25px_rgba(0,0,0,0.8)]"
    >
      <div className="flex items-center justify-between gap-2 max-w-md mx-auto">
        
        {/* Call Concierge */}
        <a
          href="tel:09945264342"
          className="flex flex-col items-center justify-center py-1.5 px-2.5 rounded-xl bg-white/5 hover:bg-white/10 active:scale-95 text-slate-200 hover:text-white transition-all min-w-[54px]"
          title="Call Reception"
        >
          <Phone className="w-4 h-4 text-[#e6c35c] mb-0.5" />
          <span className="text-[10px] font-medium tracking-tight">Call</span>
        </a>

        {/* WhatsApp */}
        <a
          href="https://wa.me/919945264342?text=Hello%20Bliss%20Spa%20BTM%20Layout,%20I%20would%20like%20to%20check%20availability%20for%20a%20therapy."
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-1.5 px-2.5 rounded-xl bg-white/5 hover:bg-[#25d366]/15 active:scale-95 text-slate-200 hover:text-emerald-400 transition-all min-w-[54px]"
          title="WhatsApp Concierge"
        >
          <MessageCircle className="w-4 h-4 text-[#25D366] mb-0.5" />
          <span className="text-[10px] font-medium tracking-tight">WhatsApp</span>
        </a>

        {/* Directions */}
        <a
          href="#location"
          className="flex flex-col items-center justify-center py-1.5 px-2.5 rounded-xl bg-white/5 hover:bg-white/10 active:scale-95 text-slate-200 hover:text-white transition-all min-w-[54px]"
          title="Directions & Map"
        >
          <MapPin className="w-4 h-4 text-[#e6c35c] mb-0.5" />
          <span className="text-[10px] font-medium tracking-tight">Map</span>
        </a>

        {/* Instant Book CTA Pill */}
        <button
          onClick={() => onOpenBooking('Swedish Massage', '₹1,999')}
          className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-gradient-to-r from-[#fff3d1] via-[#e6c35c] to-[#b89128] text-slate-950 font-bold text-xs shadow-[0_2px_12px_rgba(230,195,92,0.4)] active:scale-98 transition-all"
        >
          <CalendarCheck className="w-3.5 h-3.5 text-black shrink-0" />
          <span className="truncate uppercase tracking-wider font-extrabold text-[11px]">Book Session</span>
        </button>

      </div>
    </nav>
  );
}
