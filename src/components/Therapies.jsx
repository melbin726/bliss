import React, { useState } from 'react';
import { therapiesData } from '../data/therapiesData';

export default function Therapies({ onOpenBooking }) {
  const [filter, setFilter] = useState('all');

  const filteredTherapies = filter === 'all' 
    ? therapiesData 
    : therapiesData.filter(t => t.category === filter);

  const tabs = [
    { label: 'All Treatments', value: 'all' },
    { label: 'Swedish Massage', value: 'swedish' },
    { label: 'Aroma Massage', value: 'aroma' },
    { label: 'Deep Tissue', value: 'deeptissue' },
    { label: 'Thai Massage', value: 'thai' },
    { label: 'Ayurveda Spa', value: 'ayurveda' },
  ];

  return (
    <section id="therapies" className="services-section relative bg-[#0a110e] border-t border-white/10 py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
      <div className="container max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <span className="section-label inline-block text-xs font-bold text-[#e6c35c] tracking-widest uppercase mb-2">Rejuvenating Treatments</span>
          <h2 className="section-heading font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-3">Bliss Spa Treatment Menu</h2>
          <p className="section-subtitle text-xs sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed font-normal">
            A relaxing wellness destination offering a curated range of rejuvenating spa and massage treatments in Bengaluru.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="service-tabs flex items-center justify-center gap-2 flex-wrap mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.value}
              onClick={() => setFilter(tab.value)}
              className={`tab-btn px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition cursor-pointer ${
                filter === tab.value
                  ? 'bg-[#e6c35c] text-slate-950 shadow-[0_4px_14px_rgba(230,195,92,0.35)]'
                  : 'bg-[#14221c] border border-white/15 text-slate-200 hover:text-white hover:border-[#e6c35c]/50'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="services-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredTherapies.map((therapy) => (
            <article 
              key={therapy.id}
              className="service-card bg-[#14221c] border border-white/10 hover:border-[#e6c35c]/60 rounded-3xl overflow-hidden shadow-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.6)] flex flex-col group"
            >
              <div className="service-img-wrap relative h-56 sm:h-64 overflow-hidden">
                <img 
                  src={therapy.image} 
                  alt={`${therapy.name} at Bliss Spa BTM Layout`} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                  loading="lazy" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#14221c] via-transparent to-transparent opacity-80"></div>
                <span className="service-duration-badge absolute top-3.5 left-3.5 bg-black/60 backdrop-blur-md border border-white/20 text-white text-xs font-semibold px-3 py-1 rounded-full flex items-center gap-1.5">
                  <i className="far fa-clock text-[#e6c35c]"></i> {therapy.duration}
                </span>
                <span className="service-tag absolute top-3.5 right-3.5 bg-[#e6c35c]/90 text-slate-950 font-bold text-xs px-3 py-1 rounded-full shadow-md">
                  {therapy.tag}
                </span>
              </div>

              <div className="service-body p-6 flex flex-col flex-1 justify-between">
                <div>
                  <h3 className="service-title font-serif text-2xl font-bold text-white group-hover:text-[#e6c35c] transition">
                    {therapy.name}
                  </h3>
                  <p className="service-desc text-sm text-slate-300 leading-relaxed mt-2.5 font-normal">
                    {therapy.description}
                  </p>
                  <div className="service-features flex flex-wrap gap-2 mt-4">
                    {therapy.features.map((feat, idx) => (
                      <span key={idx} className="feature-pill text-xs bg-white/5 border border-white/10 text-slate-200 px-2.5 py-1 rounded-lg flex items-center gap-1.5 font-normal">
                        <i className="fas fa-check text-[#e6c35c]"></i> {feat}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="service-footer flex items-center justify-between pt-6 border-t border-white/10 mt-6">
                  <div className="service-pricing">
                    <span className="price-label text-[0.7rem] text-slate-400 uppercase tracking-wider block">Starts from</span>
                    <span className="price-amount font-serif text-2xl font-bold text-[#e6c35c]">{therapy.price}</span>
                  </div>
                  <button 
                    onClick={() => onOpenBooking(therapy.name, therapy.price)}
                    className="btn-primary inline-flex items-center gap-2 bg-gradient-to-r from-[#fff3d1] via-[#e6c35c] to-[#b89128] text-slate-950 font-bold text-xs px-4 py-2.5 rounded-full shadow-[0_4px_16px_rgba(230,195,92,0.4)] hover:scale-105 active:scale-95 transition-all cursor-pointer"
                  >
                    <span>Reserve</span>
                    <i className="fas fa-arrow-right text-[0.65rem]"></i>
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
