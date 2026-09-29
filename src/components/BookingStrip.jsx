import React, { useState } from 'react';
import { Calendar, Clock, Sparkles, User, CheckCircle2 } from 'lucide-react';

export default function BookingStrip({ onOpenBooking }) {
  const [service, setService] = useState('Swedish Massage');
  const [date, setDate] = useState('');
  const [slot, setSlot] = useState('Evening (05:00 PM - 08:00 PM)');
  const [therapist, setTherapist] = useState('Female Therapist');

  const handleSubmit = (e) => {
    e.preventDefault();
    onOpenBooking(service, '₹1,999', { date, slot, therapist });
  };

  return (
    <section className="relative z-20 -mt-4 sm:-mt-8 px-3 sm:px-6 max-w-7xl mx-auto">
      {/* Mobile Streamlined 1-Tap Trigger Bar */}
      <div className="md:hidden">
        <div 
          onClick={() => onOpenBooking('Swedish Massage', '₹1,999')}
          className="bg-gradient-to-r from-[#14221c] via-[#1a2c24] to-[#14221c] border border-[#e6c35c]/45 rounded-2xl p-3 xs:p-3.5 shadow-xl flex items-center justify-between gap-2.5 xs:gap-3 cursor-pointer active:scale-98 transition-transform"
        >
          <div className="flex items-center gap-2.5 min-w-0">
            <div className="w-10 h-10 rounded-full bg-[#e6c35c]/15 border border-[#e6c35c]/35 flex items-center justify-center shrink-0">
              <Calendar className="w-4 h-4 text-[#e6c35c]" />
            </div>
            <div className="min-w-0">
              <span className="text-xs xs:text-sm font-bold text-white block truncate">
                Reserve Suite For Today
              </span>
              <span className="text-[10px] xs:text-[11px] text-emerald-400 block truncate font-medium">
                3 Private Suites Open • Pay After Therapy
              </span>
            </div>
          </div>
          <button 
            type="button"
            className="px-3.5 py-2 rounded-xl bg-[#e6c35c] text-black font-bold text-xs shrink-0 shadow-md min-h-[40px] flex items-center gap-1 active:scale-95 transition"
          >
            <span>Check Slots</span>
            <Sparkles className="w-3 h-3 text-black shrink-0" />
          </button>
        </div>
      </div>

      {/* Desktop Full 5-Column Grid */}
      <div className="hidden md:block">
        <form 
          onSubmit={handleSubmit}
          className="bg-[#14221c]/95 border border-[#e6c35c]/30 rounded-2xl p-5 sm:p-6 shadow-[0_15px_40px_rgba(0,0,0,0.6)] backdrop-blur-xl grid grid-cols-2 lg:grid-cols-5 gap-4 items-end"
        >
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-semibold text-slate-300 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-[#e6c35c]" /> Select Treatment
            </label>
            <select 
              value={service} 
              onChange={(e) => setService(e.target.value)}
              className="bg-[#0a110e] border border-white/15 focus:border-[#e6c35c] rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-slate-200 outline-none transition"
            >
              <option value="Swedish Massage">Swedish Massage - ₹1,999</option>
              <option value="Aroma Massage">Aroma Massage - ₹2,199</option>
              <option value="Deep Tissue Massage">Deep Tissue Massage - ₹2,299</option>
              <option value="Thai Massage">Thai Massage - ₹2,499</option>
              <option value="Ayurveda Spa Massage">Ayurveda Spa Massage - ₹2,799</option>
              <option value="Sacred Hot Stone Therapy">Sacred Hot Stone Therapy - ₹2,799</option>
              <option value="Royal Couples Suite">Royal Couples Suite - ₹5,999</option>
            </select>
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-semibold text-slate-300 flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-[#e6c35c]" /> Preferred Date
            </label>
            <input 
              type="date" 
              value={date} 
              onChange={(e) => setDate(e.target.value)}
              className="bg-[#0a110e] border border-white/15 focus:border-[#e6c35c] rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-slate-200 outline-none transition"
              required 
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-semibold text-slate-300 flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-[#e6c35c]" /> Preferred Slot
            </label>
            <select 
              value={slot} 
              onChange={(e) => setSlot(e.target.value)}
              className="bg-[#0a110e] border border-white/15 focus:border-[#e6c35c] rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-slate-200 outline-none transition"
            >
              <option value="Morning (10:00 AM - 01:00 PM)">Morning (10:00 AM - 01:00 PM)</option>
              <option value="Afternoon (01:00 PM - 05:00 PM)">Afternoon (01:00 PM - 05:00 PM)</option>
              <option value="Evening (05:00 PM - 08:00 PM)">Evening (05:00 PM - 08:00 PM)</option>
              <option value="Late Evening (08:00 PM - 10:00 PM)">Late Evening (08:00 PM - 10:00 PM)</option>
            </select>
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-semibold text-slate-300 flex items-center gap-1.5">
              <User className="w-3.5 h-3.5 text-[#e6c35c]" /> Practitioner
            </label>
            <select 
              value={therapist} 
              onChange={(e) => setTherapist(e.target.value)}
              className="bg-[#0a110e] border border-white/15 focus:border-[#e6c35c] rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-slate-200 outline-none transition"
            >
              <option value="Female Therapist">Certified Female Therapist</option>
              <option value="Male Therapist">Certified Male Therapist</option>
              <option value="First Available Senior Expert">First Available Senior Expert</option>
            </select>
          </div>

          <div>
            <button 
              type="submit"
              className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-[#fff3d1] via-[#e6c35c] to-[#b89128] text-slate-950 font-bold text-xs sm:text-sm shadow-md hover:scale-102 active:scale-98 transition cursor-pointer flex items-center justify-center gap-2"
            >
              <span>Instant Reserve</span>
              <Sparkles className="w-3.5 h-3.5 text-black" />
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
