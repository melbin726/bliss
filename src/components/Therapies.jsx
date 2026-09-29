import React, { useState } from 'react';
import { Sparkles, Clock, Check, ArrowRight } from 'lucide-react';
import { therapiesData } from '../data/therapiesData';

export default function Therapies({ onOpenBooking }) {
  const [filter, setFilter] = useState('all');

  const filteredTherapies = filter === 'all' 
    ? therapiesData 
    : therapiesData.filter(t => t.category === filter);

  const tabs = [
    { label: 'All Treatments', value: 'all' },
    { label: 'Swedish', value: 'swedish' },
    { label: 'Aroma', value: 'aroma' },
    { label: 'Deep Tissue', value: 'deeptissue' },
    { label: 'Thai Yoga', value: 'thai' },
    { label: 'Ayurveda', value: 'ayurveda' },
  ];

  return (
    <section id="therapies" className="relative bg-[#0a110e] border-t border-white/10 py-10 sm:py-20 px-3.5 sm:px-6 lg:px-8">
      <div className="container max-w-7xl mx-auto">
        <div className="text-center mb-6 sm:mb-10">
          <span className="inline-block text-[10px] sm:text-xs font-bold text-[#e6c35c] tracking-widest uppercase mb-1">
            Rejuvenating Treatments
          </span>
          <h2 className="font-serif text-2xl sm:text-4xl font-bold text-white mb-2">
            Bliss Spa Treatment Menu
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto leading-relaxed">
            Curated range of soothing bodywork, authentic Thai stretching, and herbal therapy in BTM Layout.
          </p>
        </div>

        {/* Filter Tabs (Horizontal Scroll on Mobile) */}
        <div className="flex items-center sm:justify-center gap-2 overflow-x-auto pb-3 pt-1 scrollbar-none px-1 mb-6 sm:mb-10 snap-x">
          {tabs.map((tab) => (
            <button
              key={tab.value}
              onClick={() => setFilter(tab.value)}
              className={`px-3.5 sm:px-5 py-1.5 sm:py-2 rounded-full text-xs font-semibold whitespace-nowrap transition cursor-pointer snap-start shrink-0 ${
                filter === tab.value
                  ? 'bg-[#e6c35c] text-slate-950 shadow-[0_2px_12px_rgba(230,195,92,0.35)]'
                  : 'bg-[#14221c] border border-white/15 text-slate-200 hover:text-white'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {filteredTherapies.map((therapy) => (
            <article 
              key={therapy.id}
              className="bg-[#14221c] border border-white/10 hover:border-[#e6c35c]/60 rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg transition-all duration-300 flex flex-col group"
            >
              <div className="relative h-44 sm:h-60 overflow-hidden">
                <img 
                  src={therapy.image} 
                  alt={`${therapy.title} at Bliss Spa BTM Layout`} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  loading="lazy" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#14221c] via-transparent to-transparent" />
                <span className="absolute top-3 left-3 bg-[#0a110e]/85 backdrop-blur-md border border-[#e6c35c]/40 text-[#fff2cc] text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
                  {therapy.tag}
                </span>
                <span className="absolute top-3 right-3 bg-[#e6c35c] text-slate-950 text-xs font-black px-2.5 py-1 rounded-full shadow-md font-mono">
                  {therapy.price}
                </span>
              </div>

              <div className="p-4 sm:p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <h3 className="font-serif text-lg sm:text-xl font-bold text-white group-hover:text-[#e6c35c] transition">
                      {therapy.title}
                    </h3>
                    <span className="inline-flex items-center gap-1 text-[11px] text-slate-300 bg-white/5 border border-white/10 px-2 py-0.5 rounded-full shrink-0">
                      <Clock className="w-3 h-3 text-[#e6c35c]" />
                      {therapy.duration}
                    </span>
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed mb-4">
                    {therapy.description}
                  </p>

                  <ul className="space-y-1.5 mb-5 text-[11px] sm:text-xs text-slate-200 border-t border-white/10 pt-3">
                    {therapy.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-[#e6c35c] shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  onClick={() => onOpenBooking(therapy.title, therapy.price)}
                  className="w-full py-2.5 sm:py-3 px-4 rounded-xl bg-gradient-to-r from-[#fff3d1] via-[#e6c35c] to-[#b89128] text-slate-950 font-bold text-xs shadow-md hover:brightness-105 active:scale-98 transition flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <span>Book Appointment</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
