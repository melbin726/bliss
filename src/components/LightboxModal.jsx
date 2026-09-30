import React, { useEffect } from 'react';
import { X } from 'lucide-react';

export default function LightboxModal({ item, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && item) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [item, onClose]);

  if (!item) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center p-3 xs:p-4 bg-black/90 backdrop-blur-md animate-fade-in cursor-zoom-out"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative max-w-4xl w-full bg-[#0d1612] border border-[#cfa559]/25 rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl cursor-default max-h-[90dvh] flex flex-col"
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute top-3 right-3 sm:top-4 sm:right-4 z-10 w-10 h-10 rounded-full bg-black/70 hover:bg-black/90 text-white flex items-center justify-center border border-white/20 active:scale-90 transition-all"
          aria-label="Close image preview"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="relative max-h-[52vh] sm:max-h-[70vh] overflow-hidden bg-black flex items-center justify-center shrink-0">
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-auto max-h-[52vh] sm:max-h-[70vh] object-contain"
          />
        </div>

        <div className="p-4 sm:p-6 bg-gradient-to-b from-[#131d17] to-[#0a0f0c] border-t border-white/10 overflow-y-auto">
          <span className="text-[10px] uppercase font-bold tracking-widest text-[#dfc282] block mb-1">
            Bliss Spa Sanctuary Preview
          </span>
          <h4 className="font-serif text-lg sm:text-2xl font-bold text-white mb-1.5 leading-snug">
            {item.title}
          </h4>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            {item.caption}
          </p>
        </div>
      </div>
    </div>
  );
}
