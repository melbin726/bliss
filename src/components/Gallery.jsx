import React from 'react';
import { galleryData } from '../data/galleryData';

export default function Gallery({ onOpenLightbox }) {
  return (
    <section id="gallery" className="gallery-section relative bg-[#0d1612] border-t border-white/10 py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
      <div className="container max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <span className="section-label inline-block text-xs font-bold text-[#e6c35c] tracking-widest uppercase mb-2">
            Sanctuary &amp; Ambience
          </span>
          <h2 className="section-heading font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-3">
            Glimpse of Bliss Spa
          </h2>
          <p className="section-subtitle text-xs sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed font-normal">
            Step into our private candlelit suites in BTM 1st Stage. Hygienic, peaceful, and fully sound-buffered from city traffic.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryData.map((item) => (
            <div
              key={item.id}
              onClick={() => onOpenLightbox(item)}
              className="gallery-item relative h-72 sm:h-80 rounded-3xl overflow-hidden shadow-xl border border-white/10 group cursor-pointer"
            >
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                loading="lazy" 
              />
              <div className="gallery-overlay absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent p-6 flex flex-col justify-end">
                <h5 className="font-serif text-xl font-bold text-white mb-1">{item.title}</h5>
                <p className="text-xs text-slate-200">{item.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
