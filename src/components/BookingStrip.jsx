import React, { useState } from 'react';

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
    <section className="booking-strip-section relative z-20 -mt-6 sm:-mt-8 px-4 sm:px-6 max-w-7xl mx-auto">
      <div className="container w-full">
        <form 
          onSubmit={handleSubmit}
          className="booking-strip-card bg-[#14221c]/95 border border-[#e6c35c]/30 rounded-2xl p-5 sm:p-6 shadow-[0_15px_40px_rgba(0,0,0,0.6)] backdrop-blur-xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 items-end"
        >
          <div className="strip-field flex flex-col gap-1.5">
            <label className="text-xs font-semibold text-slate-300 flex items-center gap-1.5">
              <i className="fas fa-hand-holding-heart text-[#e6c35c]"></i> Select Treatment
            </label>
            <select 
              value={service} 
              onChange={(e) => setService(e.target.value)}
              className="bg-[#0a110e] border border-white/15 focus:border-[#e6c35c] rounded-xl px-3.5 py-2.5 text-sm text-slate-200 outline-none transition"
            >
              <option value="Swedish Massage">Swedish Massage (Relaxation) - ₹1,999</option>
              <option value="Aroma Massage">Aroma Massage (Essential Oils) - ₹2,199</option>
              <option value="Deep Tissue Massage">Deep Tissue (Muscle Tension) - ₹2,299</option>
              <option value="Thai Massage">Thai Massage (Ancient Stretching) - ₹2,499</option>
              <option value="Ayurveda Spa Massage">Ayurveda Spa Massage (Marmas &amp; Herbs) - ₹2,799</option>
              <option value="Sacred Hot Stone Therapy">Sacred Hot Stone Therapy - ₹2,799</option>
              <option value="Royal Couples Suite">Royal Couples Spa Retreat - ₹5,999</option>
            </select>
          </div>

          <div className="strip-field flex flex-col gap-1.5">
            <label className="text-xs font-semibold text-slate-300 flex items-center gap-1.5">
              <i className="far fa-calendar-alt text-[#e6c35c]"></i> Preferred Date
            </label>
            <input 
              type="date" 
              value={date} 
              onChange={(e) => setDate(e.target.value)}
              className="bg-[#0a110e] border border-white/15 focus:border-[#e6c35c] rounded-xl px-3.5 py-2.5 text-sm text-slate-200 outline-none transition"
              required 
            />
          </div>

          <div className="strip-field flex flex-col gap-1.5">
            <label className="text-xs font-semibold text-slate-300 flex items-center gap-1.5">
              <i className="far fa-clock text-[#e6c35c]"></i> Preferred Slot
            </label>
            <select 
              value={slot} 
              onChange={(e) => setSlot(e.target.value)}
              className="bg-[#0a110e] border border-white/15 focus:border-[#e6c35c] rounded-xl px-3.5 py-2.5 text-sm text-slate-200 outline-none transition"
            >
              <option value="Morning (10:00 AM - 01:00 PM)">Morning (10 AM - 1 PM)</option>
              <option value="Afternoon (01:00 PM - 05:00 PM)">Afternoon (1 PM - 5 PM)</option>
              <option value="Evening (05:00 PM - 08:00 PM)">Evening (5 PM - 8 PM)</option>
              <option value="Night (08:00 PM - 10:00 PM)">Night (8 PM - 10 PM)</option>
            </select>
          </div>

          <div className="strip-field flex flex-col gap-1.5">
            <label className="text-xs font-semibold text-slate-300 flex items-center gap-1.5">
              <i className="fas fa-user-friends text-[#e6c35c]"></i> Therapist
            </label>
            <select 
              value={therapist} 
              onChange={(e) => setTherapist(e.target.value)}
              className="bg-[#0a110e] border border-white/15 focus:border-[#e6c35c] rounded-xl px-3.5 py-2.5 text-sm text-slate-200 outline-none transition"
            >
              <option value="Female Therapist">Female Therapist</option>
              <option value="Male Therapist">Male Therapist</option>
              <option value="No Preference">No Preference</option>
            </select>
          </div>

          <button 
            type="submit" 
            className="btn-primary w-full bg-gradient-to-r from-[#fff3d1] via-[#e6c35c] to-[#b89128] text-slate-950 font-bold text-sm py-3 px-5 rounded-xl shadow-[0_4px_16px_rgba(230,195,92,0.4)] hover:shadow-[0_6px_22px_rgba(230,195,92,0.6)] hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>Check Availability</span>
            <i className="fas fa-arrow-right text-xs"></i>
          </button>
        </form>
      </div>
    </section>
  );
}
