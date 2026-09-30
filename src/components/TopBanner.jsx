import React from 'react';

export default function TopBanner() {
  return (
    <aside className="top-banner w-full bg-[#050807] border-b border-white/10 text-xs py-2 px-4 text-slate-300 hidden md:flex items-center justify-between z-50 relative" aria-label="Announcement">
      <div className="flex items-center gap-2">
        <span className="pulse-dot w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_#22c55e] animate-pulse"></span>
        <span>
          <strong className="text-white">Live at BTM 1st Stage:</strong> 3 Private Suites Available Today • <strong className="text-[#fff2cc]">₹0 Advance</strong> • Pay After Therapy
        </span>
        <span className="banner-cta ml-2">
          <a href="#matcher" className="text-[#dfc282] underline hover:text-white transition">Find My Therapy</a>
        </span>
      </div>
      <div className="text-[0.78rem] opacity-90 flex items-center gap-4">
        <span className="flex items-center gap-1.5">
          <i className="fas fa-phone-alt text-[#dfc282] text-xs"></i> 
          <strong className="text-white">099452 64342</strong> / <strong className="text-white">080 9526 6198</strong>
        </span>
        <span className="flex items-center gap-1.5">
          <i className="far fa-clock text-[#dfc282] text-xs"></i> 10:00 AM - 10:00 PM
        </span>
      </div>
    </aside>
  );
}
