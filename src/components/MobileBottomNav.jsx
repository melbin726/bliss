import React from 'react';
import { Phone, CalendarCheck, MapPin, Sparkles } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';

export default function MobileBottomNav({ onOpenBooking }) {
  return (
    <nav 
      aria-label="Mobile Navigation"
      className="md:hidden fixed bottom-[max(0.75rem,env(safe-area-inset-bottom))] inset-x-3 max-w-sm mx-auto z-50 bg-[#0a120e]/95 backdrop-blur-xl border border-[#cfa559]/30 rounded-full px-2 py-1.5 shadow-[0_8px_30px_rgba(0,0,0,0.85)] select-none"
    >
      <div className="flex items-center justify-between gap-1 w-full">
        
        {/* Call Reception */}
        <a
          href="tel:09945264342"
          className="flex flex-col items-center justify-center h-9 px-2 rounded-full hover:bg-white/5 active:scale-95 text-slate-300 hover:text-white transition-all shrink-0 min-w-[40px]"
          title="Call Reception: 099452 64342"
          aria-label="Call Reception"
        >
          <Phone className="w-3.5 h-3.5 text-[#dfc282] mb-0.5 shrink-0" />
          <span className="text-[9px] font-medium leading-none">Call</span>
        </a>

        {/* WhatsApp */}
        <a
          href="https://wa.me/919945264342?text=Hello%20Bliss%20Spa%20BTM%20Layout,%20I%20would%20like%20to%20check%20availability%20for%20a%20therapy."
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center h-9 px-2 rounded-full hover:bg-[#25d366]/10 active:scale-95 text-slate-300 hover:text-emerald-400 transition-all shrink-0 min-w-[40px]"
          title="WhatsApp Concierge"
          aria-label="WhatsApp Concierge"
        >
          <WhatsAppIcon className="w-3.5 h-3.5 text-[#25D366] mb-0.5 shrink-0" />
          <span className="text-[9px] font-medium leading-none">Chat</span>
        </a>

        {/* Directions */}
        <a
          href="#location"
          className="flex flex-col items-center justify-center h-9 px-2 rounded-full hover:bg-white/5 active:scale-95 text-slate-300 hover:text-white transition-all shrink-0 min-w-[40px]"
          title="Directions & Map"
          aria-label="Directions and Map"
        >
          <MapPin className="w-3.5 h-3.5 text-[#dfc282] mb-0.5 shrink-0" />
          <span className="text-[9px] font-medium leading-none">Map</span>
        </a>

        {/* Serene Reserve Pill (No stressful pulsing pings) */}
        <button
          type="button"
          onClick={() => onOpenBooking('Swedish Massage', '₹1,999')}
          className="flex-1 h-9 flex items-center justify-center gap-1.5 px-3.5 rounded-full bg-gradient-to-r from-[#dfc282] via-[#cfa559] to-[#b38838] text-[#060f0a] font-semibold text-xs shadow-[0_2px_10px_rgba(197,160,89,0.25)] hover:brightness-105 active:scale-95 transition-all shrink min-w-0"
          aria-label="Reserve Suite"
        >
          <CalendarCheck className="w-3.5 h-3.5 text-[#060f0a] shrink-0" />
          <span className="truncate font-semibold tracking-wide text-xs">Reserve Suite</span>
        </button>

      </div>
    </nav>
  );
}
