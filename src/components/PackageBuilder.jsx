import React, { useState } from 'react';

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
    { id: 'foot', name: 'Foot Reflexology Soak (30m)', price: 499 },
    { id: 'head', name: 'Head & Scalp Shirodhara (25m)', price: 699 },
    { id: 'stone', name: 'Volcanic Hot Stones Accent', price: 599 },
    { id: 'scrub', name: 'Organic Rose Body Polish', price: 799 },
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
    <section id="calculator" className="calculator-section relative bg-[#0a110e] border-t border-white/10 py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <span className="section-label inline-block text-xs font-bold text-[#e6c35c] tracking-widest uppercase mb-2">
            Interactive Cost Estimator
          </span>
          <h2 className="section-heading font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-3">
            Build Your Custom Spa Ritual
          </h2>
          <p className="section-subtitle text-xs sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed font-normal">
            Choose your base therapy, select your preferred duration, and layer soothing add-ons. Watch your total update in real-time.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          
          {/* Options Column */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            
            {/* 1. Base Therapy */}
            <div className="bg-[#14221c] border border-white/10 rounded-3xl p-6 sm:p-7 shadow-lg">
              <h4 className="font-serif text-xl font-bold text-white mb-4 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-[#e6c35c] text-slate-950 text-xs flex items-center justify-center font-bold">1</span>
                <span>Select Base Therapy</span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {baseOptions.map((opt) => (
                  <div
                    key={opt.name}
                    onClick={() => { setBasePrice(opt.price); setBaseName(opt.name); }}
                    className={`custom-option-label p-4 rounded-2xl border cursor-pointer transition flex items-center justify-between ${
                      baseName === opt.name 
                        ? 'border-[#e6c35c] bg-[#e6c35c]/15 shadow-[0_0_20px_rgba(230,195,92,0.2)]' 
                        : 'border-white/10 bg-[#0a110e]/70 hover:border-[#e6c35c]/40'
                    }`}
                  >
                    <div>
                      <strong className="text-white text-sm block">{opt.name}</strong>
                      <small className="text-xs text-slate-400 font-normal">{opt.desc}</small>
                    </div>
                    <span className="font-serif text-lg font-bold text-[#e6c35c] ml-3">₹{opt.price}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* 2. Duration */}
            <div className="bg-[#14221c] border border-white/10 rounded-3xl p-6 sm:p-7 shadow-lg">
              <h4 className="font-serif text-xl font-bold text-white mb-4 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-[#e6c35c] text-slate-950 text-xs flex items-center justify-center font-bold">2</span>
                <span>Choose Duration</span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {durationOptions.map((d) => (
                  <div
                    key={d.label}
                    onClick={() => { setDurationPrice(d.extra); setDurationName(d.label); }}
                    className={`p-3.5 rounded-2xl border text-center cursor-pointer transition ${
                      durationPrice === d.extra 
                        ? 'border-[#e6c35c] bg-[#e6c35c]/15 font-bold text-white shadow-[0_0_15px_rgba(230,195,92,0.2)]' 
                        : 'border-white/10 bg-[#0a110e]/70 text-slate-300 hover:border-[#e6c35c]/40'
                    }`}
                  >
                    <span className="text-sm">{d.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* 3. Add-ons */}
            <div className="bg-[#14221c] border border-white/10 rounded-3xl p-6 sm:p-7 shadow-lg">
              <h4 className="font-serif text-xl font-bold text-white mb-4 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-[#e6c35c] text-slate-950 text-xs flex items-center justify-center font-bold">3</span>
                <span>Add Signature Accents (Optional)</span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {addonOptions.map((addon) => {
                  const isChecked = addons.some(a => a.id === addon.id);
                  return (
                    <div
                      key={addon.id}
                      onClick={() => toggleAddon(addon)}
                      className={`p-3.5 rounded-2xl border cursor-pointer transition flex items-center justify-between ${
                        isChecked 
                          ? 'border-[#e6c35c] bg-[#e6c35c]/15 shadow-[0_0_15px_rgba(230,195,92,0.2)]' 
                          : 'border-white/10 bg-[#0a110e]/70 hover:border-[#e6c35c]/40'
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <input 
                          type="checkbox" 
                          checked={isChecked} 
                          onChange={() => {}} 
                          className="accent-[#e6c35c] w-4 h-4 cursor-pointer pointer-events-none" 
                        />
                        <span className="text-xs sm:text-sm text-white font-medium">{addon.name}</span>
                      </div>
                      <span className="text-xs font-bold text-[#e6c35c]">+₹{addon.price}</span>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Live Package Summary Card */}
          <div className="bg-[#14221c] border-2 border-[#e6c35c] rounded-3xl p-6 sm:p-8 shadow-[0_15px_40px_rgba(0,0,0,0.8)] sticky top-28">
            <span className="text-xs font-bold text-[#e6c35c] uppercase tracking-wider block mb-1">Your Curated Ritual</span>
            <h3 className="font-serif text-2xl font-bold text-white mb-4">Package Summary</h3>

            <div className="flex flex-col gap-3 py-4 border-y border-white/10 text-xs sm:text-sm text-slate-200">
              <div className="flex justify-between">
                <span>Base Therapy:</span>
                <strong className="text-white">{baseName}</strong>
              </div>
              <div className="flex justify-between">
                <span>Duration:</span>
                <strong className="text-white">{durationName}</strong>
              </div>
              {addons.length > 0 && (
                <div className="flex flex-col gap-1 pt-2 border-t border-white/5">
                  <span className="text-slate-400">Selected Add-ons:</span>
                  {addons.map((a) => (
                    <div key={a.id} className="flex justify-between text-xs text-[#fff2cc]">
                      <span>+ {a.name}</span>
                      <span>₹{a.price}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="pt-6 pb-6 text-center">
              <span className="text-xs text-slate-400 uppercase tracking-wider block mb-1">Estimated Total</span>
              <div className="font-serif text-4xl font-bold text-[#e6c35c]">
                ₹{grandTotal.toLocaleString()}
              </div>
              <small className="text-slate-400 text-xs block mt-1">Includes private steam, hot shower &amp; taxes</small>
            </div>

            <button
              onClick={() => onOpenBooking(`${baseName} (${durationName})`, `₹${grandTotal.toLocaleString()}`)}
              className="btn-primary w-full bg-gradient-to-r from-[#fff3d1] via-[#e6c35c] to-[#b89128] text-slate-950 font-bold text-sm py-3.5 rounded-full shadow-[0_4px_18px_rgba(230,195,92,0.4)] hover:scale-105 active:scale-95 transition-all cursor-pointer"
            >
              <span>Book This Custom Package</span>
            </button>
            <p className="text-center text-slate-400 text-xs mt-3">
              ₹0 Advance • Pay after therapy at Bliss Spa
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
