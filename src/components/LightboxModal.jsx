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
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-fade-in cursor-zoom-out"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative max-w-4xl w-full bg-[#0d1612] border border-[#e6c35c]/30 rounded-3xl overflow-hidden shadow-2xl cursor-default"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-black/60 hover:bg-black/80 text-white flex items-center justify-center border border-white/20 transition-all"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="relative max-h-[70vh] overflow-hidden bg-black flex items-center justify-center">
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-auto max-h-[70vh] object-contain"
          />
        </div>

        <div className="p-6 bg-gradient-to-b from-[#131d17] to-[#0a0f0c] border-t border-white/10">
          <span className="text-[10px] uppercase font-bold tracking-widest text-[#e6c35c] block mb-1">
            Bliss Spa Sanctuary Preview
          </span>
          <h4 className="font-serif text-xl sm:text-2xl font-bold text-white mb-2">
            {item.title}
          </h4>
          <p className="text-xs sm:text-sm text-slate-300">
            {item.caption}
          </p>
        </div>
      </div>
    </div>
  );
}
