import React from 'react';
import { Phone, MessageCircle, CalendarCheck, MapPin } from 'lucide-react';

export default function MobileBottomNav({ onOpenBooking }) {
  return (
    <div className="md:hidden fixed bottom-3 inset-x-3 z-40">
      <div className="bg-[#0e1713]/95 backdrop-blur-xl border border-[#e6c35c]/30 rounded-2xl p-2 shadow-2xl flex items-center justify-between gap-1">
        
        {/* Call Reception */}
        <a
          href="tel:09945264342"
          className="flex-1 flex flex-col items-center justify-center py-2 px-1 rounded-xl text-slate-200 hover:text-white hover:bg-white/5 active:scale-95 transition-all text-center"
        >
          <Phone className="w-4 h-4 text-[#e6c35c] mb-1" />
          <span className="text-[10px] font-semibold tracking-tight">Call</span>
        </a>

        {/* WhatsApp */}
        <a
          href="https://wa.me/919945264342?text=Hello%20Bliss%20Spa,%20I%20would%20like%20to%20inquire%20about%20booking%20an%20appointment."
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex flex-col items-center justify-center py-2 px-1 rounded-xl text-slate-200 hover:text-white hover:bg-white/5 active:scale-95 transition-all text-center"
        >
          <MessageCircle className="w-4 h-4 text-[#25D366] mb-1" />
          <span className="text-[10px] font-semibold tracking-tight">WhatsApp</span>
        </a>

        {/* Directions */}
        <a
          href="#location"
          className="flex-1 flex flex-col items-center justify-center py-2 px-1 rounded-xl text-slate-200 hover:text-white hover:bg-white/5 active:scale-95 transition-all text-center"
        >
          <MapPin className="w-4 h-4 text-[#e6c35c] mb-1" />
          <span className="text-[10px] font-semibold tracking-tight">Map</span>
        </a>

        {/* Instant Book CTA */}
        <button
          onClick={() => onOpenBooking()}
          className="flex-1 flex flex-col items-center justify-center py-2 px-2 rounded-xl bg-gradient-to-r from-[#d4af37] to-[#b38e28] text-black font-bold shadow-lg shadow-[#d4af37]/20 active:scale-95 transition-all text-center"
        >
          <CalendarCheck className="w-4 h-4 text-black mb-1" />
          <span className="text-[10px] uppercase font-bold tracking-tight">Book Now</span>
        </button>
      </div>
    </div>
  );
}
