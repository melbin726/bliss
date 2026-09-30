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
          <h2 className="font-serif text-2xl sm:text-4xl font-bold text-white mb-2">
            Bliss Spa Treatment Menu
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto leading-relaxed">
            Curated range of soothing bodywork, authentic Thai stretching, and herbal therapy in BTM Layout.
          </p>
        </div>

        {/* Filter Tabs (Responsive Track: Edge-Bleed Horizontal Scroll with Fade Indicators on Mobile, Centered Segmented Capsule on Desktop) */}
        <div className="relative mb-6 sm:mb-10">
          {/* Subtle Mobile Scroll Overflow Indicators */}
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-6 bg-gradient-to-r from-[#0a110e] to-transparent z-10 sm:hidden" />
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-6 bg-gradient-to-l from-[#0a110e] to-transparent z-10 sm:hidden" />

          <div className="-mx-3.5 px-3.5 sm:mx-0 sm:px-0 flex items-center justify-start sm:justify-center overflow-x-auto py-2 scrollbar-none snap-x overscroll-x-contain">
            <div className="inline-flex items-center gap-1 sm:gap-1.5 p-1 sm:p-1.5 bg-[#09120e]/90 border border-white/10 rounded-full shadow-[0_4px_24px_rgba(0,0,0,0.5),inset_0_1px_1px_rgba(255,255,255,0.08)] backdrop-blur-xl">
              {tabs.map((tab) => {
                const isActive = filter === tab.value;
                const count = tab.value === 'all'
                  ? therapiesData.length
                  : therapiesData.filter(t => t.category === tab.value).length;

                return (
                  <button
                    key={tab.value}
                    type="button"
                    onClick={() => setFilter(tab.value)}
                    className={`px-3 sm:px-4 py-2 min-h-[38px] rounded-full text-xs sm:text-[13px] font-semibold whitespace-nowrap transition-all duration-200 cursor-pointer snap-start shrink-0 active:scale-95 flex items-center gap-1.5 ${
                      isActive
                        ? 'bg-gradient-to-r from-[#dfc282] via-[#cfa559] to-[#b38838] text-[#060f0a] font-bold shadow-[0_2px_12px_rgba(207,165,89,0.32)] scale-[1.02]'
                        : 'text-slate-300 hover:text-[#dfc282] hover:bg-white/[0.08]'
                    }`}
                  >
                    <span>{tab.label}</span>
                    <span 
                      className={`text-[10px] px-1.5 py-0.5 rounded-full font-mono transition-colors ${
                        isActive
                          ? 'bg-[#060f0a]/20 text-[#060f0a] font-bold'
                          : 'bg-white/10 text-slate-400'
                      }`}
                    >
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {filteredTherapies.map((therapy) => (
            <article
              key={therapy.id}
              className="bg-[#14221c] border border-white/10 hover:border-[#cfa559]/40 rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg transition-all duration-300 flex flex-col group"
            >
              <div className="relative h-44 sm:h-60 overflow-hidden">
                <img
                  src={therapy.image}
                  alt={`${therapy.name || therapy.title} at Bliss Spa BTM Layout`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#14221c] via-transparent to-transparent" />
                <span className="absolute top-3 left-3 bg-[#0a110e]/85 backdrop-blur-md border border-[#cfa559]/35 text-[#e8d4a2] text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
                  {therapy.tag}
                </span>
                <span className="absolute top-3 right-3 bg-[#cfa559] text-[#060f0a] text-xs font-black px-2.5 py-1 rounded-full shadow-md font-mono">
                  {therapy.price}
                </span>
              </div>

              <div className="p-4 sm:p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <h3 className="font-serif text-lg sm:text-xl font-bold text-white group-hover:text-[#dfc282] transition">
                      {therapy.name || therapy.title}
                    </h3>
                    <span className="inline-flex items-center gap-1 text-[11px] text-slate-300 bg-white/5 border border-white/10 px-2 py-0.5 rounded-full shrink-0">
                      <Clock className="w-3 h-3 text-[#dfc282]" />
                      {therapy.duration}
                    </span>
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed mb-4">
                    {therapy.description}
                  </p>

                  <ul className="space-y-1.5 mb-5 text-[11px] sm:text-xs text-slate-200 border-t border-white/10 pt-3">
                    {therapy.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-[#dfc282] shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  type="button"
                  onClick={() => onOpenBooking(therapy.name || therapy.title, therapy.price)}
                  className="w-full min-h-[44px] py-2.5 sm:py-3 px-4 rounded-xl bg-gradient-to-r from-[#dfc282] via-[#cfa559] to-[#b38838] text-[#060f0a] font-bold text-xs shadow-md hover:brightness-105 active:scale-98 transition flex items-center justify-center gap-1.5 cursor-pointer"
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
