import React, { useState, useRef } from 'react';
import { Sparkles, Clock, Check, ArrowRight } from 'lucide-react';
import { therapiesData } from '../data/therapiesData';

export default function Therapies({ onOpenBooking }) {
  const [filter, setFilter] = useState('all');
  const [activeCardIdx, setActiveCardIdx] = useState(0);
  const carouselRef = useRef(null);

  const filteredTherapies = filter === 'all'
    ? therapiesData
    : therapiesData.filter(t => t.category === filter);

  const handleCarouselScroll = (e) => {
    const el = e.currentTarget;
    const firstChild = el.firstElementChild;
    if (!firstChild) return;
    const cardWidth = firstChild.offsetWidth;
    const gap = 14; // gap-3.5 is 14px in Tailwind
    const index = Math.round(el.scrollLeft / (cardWidth + gap));
    setActiveCardIdx(Math.min(filteredTherapies.length - 1, Math.max(0, index)));
  };

  const scrollToCard = (index) => {
    setActiveCardIdx(index);
    if (!carouselRef.current) return;
    const el = carouselRef.current;
    const firstChild = el.firstElementChild;
    if (!firstChild) return;
    const cardWidth = firstChild.offsetWidth;
    const gap = 14;
    el.scrollTo({
      left: index * (cardWidth + gap),
      behavior: 'smooth',
    });
  };

  const handleFilterChange = (tabValue) => {
    setFilter(tabValue);
    setActiveCardIdx(0);
    if (carouselRef.current) {
      carouselRef.current.scrollTo({ left: 0, behavior: 'smooth' });
    }
  };

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
        <div className="reveal text-center mb-6 sm:mb-10">
          <h2 className="font-serif text-xl sm:text-3xl lg:text-4xl font-bold text-white mb-1.5 sm:mb-2">
            Bliss Spa Treatment Menu
          </h2>
          <p className="text-[11px] sm:text-sm text-slate-300 max-w-xl mx-auto leading-relaxed">
            Curated range of soothing bodywork, authentic Thai stretching, and herbal therapy in BTM Layout.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="reveal stagger-1 relative mb-6 sm:mb-10">
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
                    onClick={() => handleFilterChange(tab.value)}
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

        {/* Mobile: Horizontal Swipe Carousel | Desktop: 3-column Grid */}
        <div className="relative">
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {filteredTherapies.map((therapy, idx) => (
              <article
                key={therapy.id}
                className={`reveal-scale stagger-${(idx % 3) + 1} bg-[#14221c] border border-white/10 hover:border-[#cfa559]/40 rounded-3xl overflow-hidden shadow-lg transition-all duration-300 flex flex-col group`}
              >
                <div className="relative h-52 sm:h-60 overflow-hidden">
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
                <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
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
                    <p className="text-xs text-slate-300 leading-relaxed mb-3">
                      {therapy.description}
                    </p>
                    <ul className="space-y-1.5 mb-4 text-xs text-slate-200 border-t border-white/10 pt-2.5">
                      {therapy.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <Check className="w-3.5 h-3.5 text-[#dfc282] shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <button
                    type="button"
                    onClick={() => onOpenBooking(therapy.name || therapy.title, therapy.price)}
                    className="w-full py-2.5 px-4 rounded-full bg-gradient-to-r from-[#dfc282] via-[#cfa559] to-[#b38838] text-[#060f0a] font-semibold text-xs shadow-[0_2px_10px_rgba(197,160,89,0.2)] hover:brightness-105 active:scale-95 transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <span>Book Appointment</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </article>
            ))}
          </div>

          {/* Mobile Horizontal Swipe Carousel */}
          <div 
            ref={carouselRef}
            onScroll={handleCarouselScroll}
            className="-mx-3.5 px-3.5 md:hidden flex gap-3.5 overflow-x-auto scrollbar-none snap-x snap-mandatory pb-4 pt-1"
          >
            {filteredTherapies.map((therapy, idx) => (
              <article
                key={therapy.id}
                className="snap-start shrink-0 w-[82vw] max-w-[300px] bg-[#14221c] border border-white/10 rounded-2xl overflow-hidden shadow-xl flex flex-col"
              >
                <div className="relative h-40 overflow-hidden">
                  <img
                    src={therapy.image}
                    alt={`${therapy.name || therapy.title} at Bliss Spa BTM Layout`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#14221c] via-[#14221c]/20 to-transparent" />
                  <span className="absolute top-2.5 left-2.5 bg-[#0a110e]/85 backdrop-blur-md border border-[#cfa559]/35 text-[#e8d4a2] text-[9px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">
                    {therapy.tag}
                  </span>
                  <span className="absolute top-2.5 right-2.5 bg-[#cfa559] text-[#060f0a] text-[11px] font-black px-2 py-0.5 rounded-full font-mono">
                    {therapy.price}
                  </span>
                </div>

                <div className="p-3.5 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between gap-1 mb-1.5">
                      <h3 className="font-serif text-sm font-bold text-white leading-tight">
                        {therapy.name || therapy.title}
                      </h3>
                      <span className="inline-flex items-center gap-0.5 text-[9px] text-slate-400 bg-white/5 px-1.5 py-0.5 rounded-full shrink-0 border border-white/10">
                        <Clock className="w-2.5 h-2.5 text-[#dfc282]" />
                        {therapy.duration}
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-400 leading-relaxed mb-2.5 line-clamp-2">
                      {therapy.description}
                    </p>
                    <ul className="space-y-1 mb-3 text-[10px] text-slate-300 border-t border-white/10 pt-2">
                      {therapy.features.slice(0, 3).map((feature, i) => (
                        <li key={i} className="flex items-center gap-1.5">
                          <Check className="w-3 h-3 text-[#dfc282] shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <button
                    type="button"
                    onClick={() => onOpenBooking(therapy.name || therapy.title, therapy.price)}
                    className="w-full py-2 px-3 rounded-full bg-gradient-to-r from-[#dfc282] via-[#cfa559] to-[#b38838] text-[#060f0a] font-bold text-[11px] shadow-[0_2px_10px_rgba(197,160,89,0.2)] active:scale-95 transition-all flex items-center justify-center gap-1 cursor-pointer"
                  >
                    <span>Book Appointment</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </article>
            ))}
          </div>

          {/* Dynamic interactive slide dots (mobile only) */}
          {filteredTherapies.length > 1 && (
            <div className="flex md:hidden items-center justify-center gap-1.5 mt-2">
              {filteredTherapies.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => scrollToCard(i)}
                  aria-label={`Go to slide ${i + 1}`}
                  className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                    i === activeCardIdx ? 'w-5 bg-[#cfa559]' : 'w-1.5 bg-white/20 hover:bg-white/40'
                  }`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
