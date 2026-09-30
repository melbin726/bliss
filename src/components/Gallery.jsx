import React from 'react';
import { galleryData } from '../data/galleryData';

export default function Gallery({ onOpenLightbox }) {
  return (
    <section id="gallery" className="relative bg-[#0d1612] border-t border-white/10 py-10 sm:py-20 px-3.5 sm:px-6 lg:px-8">
      <div className="container max-w-7xl mx-auto">
        <div className="reveal text-center mb-6 sm:mb-12">
          <h2 className="font-serif text-xl sm:text-3xl lg:text-4xl font-bold text-white mb-1.5 sm:mb-2">
            Glimpse of Bliss Spa
          </h2>
          <p className="text-[11px] sm:text-sm text-slate-300 max-w-xl mx-auto leading-relaxed">
            Private candlelit suites in BTM 1st Stage. Clean, calm, and sound-buffered.
          </p>
        </div>

        {/* 2-Column Mosaic on Mobile, 3-Column on Desktop */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2.5 sm:gap-6">
          {galleryData.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => onOpenLightbox(item)}
              className={`reveal-scale stagger-${(idx % 6) + 1} relative h-40 xs:h-48 sm:h-72 rounded-xl sm:rounded-3xl overflow-hidden shadow-md border border-white/10 group cursor-pointer active:scale-95 transition-transform`}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent p-2.5 xs:p-3 sm:p-5 flex flex-col justify-end">
                <h5 className="font-serif text-xs xs:text-sm sm:text-lg font-bold text-white mb-0.5 line-clamp-1">{item.title}</h5>
                <p className="text-[9px] xs:text-[10px] sm:text-xs text-slate-200 line-clamp-2">{item.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
