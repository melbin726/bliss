import React, { useState } from 'react';
import { Calendar, Clock, Sparkles, User } from 'lucide-react';
import CustomDropdown from './CustomDropdown';

export default function BookingStrip({ onOpenBooking }) {
  const [service, setService] = useState('Swedish Massage');
  const [date, setDate] = useState('');
  const [slot, setSlot] = useState('Evening (05:00 PM - 08:00 PM)');
  const [therapist, setTherapist] = useState('Female Therapist');

  const serviceOptions = [
    { value: 'Swedish Massage', label: 'Swedish Massage', badge: '₹1,999' },
    { value: 'Aroma Massage', label: 'Aroma Massage', badge: '₹2,199' },
    { value: 'Deep Tissue Massage', label: 'Deep Tissue Massage', badge: '₹2,299' },
    { value: 'Thai Massage', label: 'Thai Massage', badge: '₹2,499' },
    { value: 'Ayurveda Spa Massage', label: 'Ayurveda Spa Massage', badge: '₹2,799' },
    { value: 'Sacred Hot Stone Therapy', label: 'Sacred Hot Stone Therapy', badge: '₹2,799' },
    { value: 'Royal Couples Suite', label: 'Royal Couples Suite', badge: '₹5,999' },
  ];

  const slotOptions = [
    { value: 'Morning (10:00 AM - 01:00 PM)', label: 'Morning (10:00 AM - 01:00 PM)' },
    { value: 'Afternoon (01:00 PM - 05:00 PM)', label: 'Afternoon (01:00 PM - 05:00 PM)' },
    { value: 'Evening (05:00 PM - 08:00 PM)', label: 'Evening (05:00 PM - 08:00 PM)' },
    { value: 'Late Evening (08:00 PM - 10:00 PM)', label: 'Late Evening (08:00 PM - 10:00 PM)' },
  ];

  const therapistOptions = [
    { value: 'Female Therapist', label: 'Certified Female Therapist' },
    { value: 'Male Therapist', label: 'Certified Male Therapist' },
    { value: 'First Available Senior Expert', label: 'First Available Senior Expert' },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    const selectedServiceObj = serviceOptions.find(s => s.value === service);
    const price = selectedServiceObj ? selectedServiceObj.badge : '₹1,999';
    onOpenBooking(service, price, { date, slot, therapist });
  };

  return (
    <section className="relative z-20 hidden md:block -mt-6 sm:-mt-8 px-3 sm:px-6 max-w-7xl mx-auto">
      {/* Desktop Full 5-Column Grid */}
      <div>
        <form 
          onSubmit={handleSubmit}
          className="bg-[#14221c]/95 border border-[#cfa559]/25 rounded-2xl p-5 sm:p-6 shadow-[0_15px_40px_rgba(0,0,0,0.6)] backdrop-blur-xl grid grid-cols-2 lg:grid-cols-5 gap-4 items-end"
        >
          <div>
            <CustomDropdown
              label="Select Treatment"
              value={service}
              onChange={setService}
              options={serviceOptions}
              placeholder="Select Treatment"
              icon={Sparkles}
            />
          </div>

          <div className="flex flex-col">
            <label className="block text-[11px] font-semibold text-slate-300 mb-1 flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-[#dfc282] shrink-0" /> Preferred Date
            </label>
            <input 
              type="date" 
              value={date} 
              onChange={(e) => setDate(e.target.value)}
              className="w-full min-h-[42px] bg-[#14221c] hover:bg-[#1a2c24]/80 border border-white/15 focus:border-[#cfa559] rounded-xl px-3.5 py-2 text-xs sm:text-sm text-slate-200 outline-none transition"
              required 
            />
          </div>

          <div>
            <CustomDropdown
              label="Preferred Slot"
              value={slot}
              onChange={setSlot}
              options={slotOptions}
              placeholder="Select Slot"
              icon={Clock}
            />
          </div>

          <div>
            <CustomDropdown
              label="Practitioner"
              value={therapist}
              onChange={setTherapist}
              options={therapistOptions}
              placeholder="Select Practitioner"
              icon={User}
            />
          </div>

          <div>
            <button 
              type="submit"
              className="w-full min-h-[42px] py-2 px-4 rounded-xl bg-gradient-to-r from-[#dfc282] via-[#cfa559] to-[#b38838] text-[#060f0a] font-bold text-xs sm:text-sm shadow-md hover:brightness-105 active:scale-98 transition cursor-pointer flex items-center justify-center gap-2 whitespace-nowrap"
            >
              <span>Instant Reserve</span>
              <Sparkles className="w-3.5 h-3.5 text-[#060f0a]" />
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
