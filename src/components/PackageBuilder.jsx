import React, { useState } from 'react';
import { Sparkles, Check, ArrowRight } from 'lucide-react';

export default function PackageBuilder({ onOpenBooking }) {
  const [basePrice, setBasePrice] = useState(1999);
  const [baseName, setBaseName] = useState('Swedish Massage');
  const [durationPrice, setDurationPrice] = useState(0);
  const [durationName, setDurationName] = useState('60 Mins');
  const [addons, setAddons] = useState([]);

  const baseOptions = [
    { name: 'Swedish Massage', price: 1999, desc: 'Gentle whole-body unwind with herbal oils' },
    { name: 'Aroma Massage', price: 2199, desc: 'Lavender & chamomile essential oils' },
    { name: 'Deep Tissue', price: 2299, desc: 'Firm structural knot & muscle release' },
    { name: 'Thai Yoga Massage', price: 2499, desc: 'Assisted yoga stretching on floor mat' },
    { name: 'Ayurveda Spa', price: 2799, desc: 'Classical herbal oils & Marma healing' },
  ];

  const durationOptions = [
    { label: '60 Mins', extra: 0 },
    { label: '90 Mins (+₹600)', extra: 600 },
    { label: '120 Mins (+₹1,200)', extra: 1200 },
  ];

  const addonOptions = [
    { id: 'foot', name: 'Foot Reflexology (30m)', price: 499 },
    { id: 'head', name: 'Scalp Shirodhara (25m)', price: 699 },
    { id: 'stone', name: 'Hot Basalt Stones', price: 599 },
    { id: 'scrub', name: 'Organic Body Polish', price: 799 },
  ];

  const toggleAddon = (item) => {
    if (addons.some(a => a.id === item.id)) {
      setAddons(addons.filter(a => a.id !== item.id));
    } else {
      setAddons([...addons, item]);
    }
  };

  const addonsTotal = addons.reduce((sum, a) => sum + a.price, 0);
  const grandTotal = basePrice + durationPrice + addonsTotal;

  return (
    <section id="calculator" className="relative bg-[#0a110e] border-t border-white/10 py-10 sm:py-20 px-3.5 sm:px-6 lg:px-8">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-8 sm:mb-12">
          <span className="inline-block text-[10px] sm:text-xs font-bold text-[#e6c35c] tracking-widest uppercase mb-1">
            Interactive Cost Estimator
          </span>
          <h2 className="font-serif text-2xl sm:text-4xl font-bold text-white mb-2">
            Build Your Custom Spa Ritual
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto leading-relaxed">
            Select your base therapy, choose duration, and layer soothing add-ons.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-start">
          
          {/* Options Column */}
          <div className="lg:col-span-2 flex flex-col gap-4 sm:gap-6">
            
            {/* 1. Base Therapy */}
            <div className="bg-[#14221c] border border-white/10 rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-lg">
              <h4 className="font-serif text-base sm:text-lg font-bold text-white mb-3 flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-[#e6c35c] text-slate-950 text-xs flex items-center justify-center font-bold">1</span>
                <span>Select Base Therapy</span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {baseOptions.map((opt) => (
                  <div
                    key={opt.name}
                    onClick={() => { setBasePrice(opt.price); setBaseName(opt.name); }}
                    className={`p-3 rounded-xl border cursor-pointer transition flex items-center justify-between ${
                      baseName === opt.name 
                        ? 'border-[#e6c35c] bg-[#e6c35c]/15 shadow-[0_0_15px_rgba(230,195,92,0.2)]' 
                        : 'border-white/10 bg-[#0a110e]/70 hover:border-[#e6c35c]/40'
                    }`}
                  >
                    <div>
                      <strong className="text-white text-xs sm:text-sm block">{opt.name}</strong>
                      <small className="text-[10px] sm:text-xs text-slate-400 font-normal">{opt.desc}</small>
                    </div>
                    <span className="font-serif text-base font-bold text-[#e6c35c] ml-2 shrink-0">₹{opt.price}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* 2. Duration */}
            <div className="bg-[#14221c] border border-white/10 rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-lg">
              <h4 className="font-serif text-base sm:text-lg font-bold text-white mb-3 flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-[#e6c35c] text-slate-950 text-xs flex items-center justify-center font-bold">2</span>
                <span>Choose Duration</span>
              </h4>
              <div className="grid grid-cols-3 gap-1.5 xs:gap-2">
                {durationOptions.map((d) => (
                  <button
                    key={d.label}
                    type="button"
                    onClick={() => { setDurationPrice(d.extra); setDurationName(d.label); }}
                    className={`p-2 sm:p-3 min-h-[48px] rounded-xl border text-center cursor-pointer transition active:scale-95 flex flex-col items-center justify-center ${
                      durationPrice === d.extra 
                        ? 'border-[#e6c35c] bg-[#e6c35c]/15 font-bold text-white shadow-sm ring-1 ring-[#e6c35c]' 
                        : 'border-white/10 bg-[#0a110e]/70 text-slate-300 hover:border-[#e6c35c]/40'
                    }`}
                  >
                    <span className="text-[11px] xs:text-xs sm:text-sm font-semibold leading-tight">{d.label.split(' ')[0]} {d.label.split(' ')[1]}</span>
                    {d.extra > 0 ? (
                      <span className="text-[9px] xs:text-[10px] text-[#e6c35c] font-medium leading-none mt-0.5">+₹{d.extra}</span>
                    ) : (
                      <span className="text-[9px] xs:text-[10px] text-slate-400 font-medium leading-none mt-0.5">Base</span>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* 3. Add-ons */}
            <div className="bg-[#14221c] border border-white/10 rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-lg">
              <h4 className="font-serif text-base sm:text-lg font-bold text-white mb-3 flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-[#e6c35c] text-slate-950 text-xs flex items-center justify-center font-bold">3</span>
                <span>Add Signature Accents (Optional)</span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {addonOptions.map((addon) => {
                  const isChecked = addons.some(a => a.id === addon.id);
                  return (
                    <div
                      key={addon.id}
                      onClick={() => toggleAddon(addon)}
                      className={`p-2.5 sm:p-3 min-h-[44px] rounded-xl border cursor-pointer transition active:scale-98 flex items-center justify-between ${
                        isChecked 
                          ? 'border-[#e6c35c] bg-[#e6c35c]/15 shadow-sm' 
                          : 'border-white/10 bg-[#0a110e]/70 hover:border-[#e6c35c]/40'
                      }`}
                    >
                      <div className="flex items-center gap-2 min-w-0">
                        <input 
                          type="checkbox" 
                          checked={isChecked} 
                          onChange={() => {}} 
                          className="accent-[#e6c35c] w-4 h-4 pointer-events-none shrink-0" 
                        />
                        <span className="text-xs text-white truncate">{addon.name}</span>
                      </div>
                      <span className="text-xs font-bold text-[#e6c35c] ml-2 shrink-0">+₹{addon.price}</span>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Live Package Summary Card */}
          <div className="bg-[#14221c] border-2 border-[#e6c35c] rounded-2xl sm:rounded-3xl p-5 sm:p-7 shadow-xl lg:sticky lg:top-24">
            <span className="text-[10px] font-bold text-[#e6c35c] uppercase tracking-wider block mb-1">
              Custom Package Summary
            </span>
            <h4 className="font-serif text-xl sm:text-2xl font-bold text-white mb-4">
              Your Reserved Session
            </h4>

            <div className="space-y-2 text-xs sm:text-sm border-b border-white/10 pb-4 mb-4">
              <div className="flex justify-between">
                <span className="text-slate-300">{baseName}:</span>
                <span className="text-white font-medium">₹{basePrice}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-300">Duration ({durationName}):</span>
                <span className="text-white font-medium">{durationPrice > 0 ? `+₹${durationPrice}` : 'Included'}</span>
              </div>
              {addons.map((a) => (
                <div key={a.id} className="flex justify-between text-emerald-400">
                  <span className="truncate pr-2">+ {a.name}:</span>
                  <span>+₹{a.price}</span>
                </div>
              ))}
            </div>

            <div className="flex items-baseline justify-between mb-5">
              <span className="text-xs text-slate-300 font-semibold uppercase">Total Estimate:</span>
              <span className="font-serif text-2xl sm:text-3xl font-bold text-[#e6c35c]">
                ₹{grandTotal}
              </span>
            </div>

            <button
              type="button"
              onClick={() => onOpenBooking(`Custom Package: ${baseName} (${durationName})`, `₹${grandTotal}`)}
              className="w-full min-h-[46px] py-3 px-4 rounded-xl bg-gradient-to-r from-[#fff3d1] via-[#e6c35c] to-[#b89128] text-slate-950 font-bold text-xs sm:text-sm shadow-md active:scale-98 transition flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Confirm Custom Package</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
            <p className="text-[10px] text-center text-slate-400 mt-2">
              🔒 ₹0 Advance • Pay at Bliss Spa front desk
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
