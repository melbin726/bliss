import React from 'react';
import { Calendar, CalendarCheck, Heart, Shield, Star, Award, ShieldCheck } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';

export default function Hero({ onOpenBooking }) {
  const stories = [
    { name: "Swedish", service: "Swedish Massage", price: "₹1,999", img: "assets/images/hero-massage.jpg" },
    { name: "Aroma", service: "Aroma Massage", price: "₹2,199", img: "assets/images/spa-ambience.jpg" },
    { name: "Deep Tissue", service: "Deep Tissue Massage", price: "₹2,299", img: "assets/images/swedish-deep-tissue.jpg" },
    { name: "Thai Yoga", service: "Thai Massage", price: "₹2,499", img: "assets/images/thai-massage.jpg" },
    { name: "Ayurveda", service: "Ayurveda Spa Massage", price: "₹2,799", img: "assets/images/ayurvedic-shirodhara.jpg" },
    { name: "Hot Stone", service: "Sacred Hot Stone Therapy", price: "₹2,799", img: "assets/images/hot-stone.jpg" },
    { name: "Couples", service: "Royal Couples Suite", price: "₹5,999", img: "assets/images/couples-suite.jpg" },
  ];

  return (
    <section id="hero" className="relative min-h-[auto] sm:min-h-[88vh] flex items-center justify-center pt-5 sm:pt-20 pb-8 sm:pb-16 px-3.5 sm:px-6 lg:px-8 overflow-hidden bg-[#050807]">
      {/* Background Image with Dark Emerald/Gold Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="assets/images/hero-massage.jpg"
          alt="Relaxing Spa Massage at Bliss Spa BTM Layout Bangalore"
          className="w-full h-full object-cover object-center scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050807]/96 via-[#09100d]/92 to-[#050807]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#cfa559]/10 via-transparent to-transparent pointer-events-none" />
      </div>

      {/* Ambient Candlelight Shimmer Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 xs:w-96 h-72 xs:h-96 rounded-full bg-[#cfa559]/10 blur-[100px] pointer-events-none animate-ambient-shimmer" />

      <div className="container relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center">

        {/* Tranquil Live Status Badge */}
        <div className="reveal inline-flex items-center gap-1.5 bg-[#14221c] border border-[#cfa559]/40 rounded-full py-1 px-3 mb-3 sm:mb-4 shadow-[0_0_20px_rgba(0,0,0,0.6)] max-w-full">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_6px_#34d399] shrink-0" />
          <span className="text-[10px] xs:text-[11px] sm:text-xs font-medium text-white truncate">
            Open Today 10 AM – 10 PM • <strong className="text-[#dfc282] font-semibold">4.9 ★</strong> (1,450+ Guests)
          </span>
        </div>

        {/* Serene Cormorant Serif Heading */}
        <h1 className="reveal stagger-1 font-serif text-[1.35rem] xs:text-[1.5rem] sm:text-3xl md:text-4xl lg:text-5xl font-normal text-white tracking-tight leading-[1.22] sm:leading-[1.18] mb-2 sm:mb-4 max-w-3xl drop-shadow-[0_2px_12px_rgba(0,0,0,0.8)]">
          <span className="block text-[#dfc282] text-[9px] xs:text-[10px] sm:text-xs font-sans tracking-[0.22em] uppercase font-semibold mb-1 sm:mb-2 opacity-90">
            Bliss Spa &amp; Wellness • BTM Layout
          </span>
          Leave Stress Behind.<br className="hidden sm:inline" />
          <span className="bg-gradient-to-r from-[#fae8c8] via-[#dfc282] to-[#c59e4b] bg-clip-text text-transparent font-medium">
            Step Into Pure Quiet &amp; Deep Rejuvenation.
          </span>
        </h1>

        {/* Calming Poetic Subtitle */}
        <p className="reveal stagger-2 font-sans text-[11px] xs:text-xs sm:text-base text-white/95 leading-relaxed max-w-xl mx-auto mb-4 sm:mb-7 font-light px-2 drop-shadow-[0_1px_8px_rgba(0,0,0,0.95)]">
          Bengaluru's candlelit sanctuary in BTM 1st Stage. Warm herbal oils, certified therapist care, private A/C suites with en-suite hot steam &amp; shower.
        </p>

        {/* Ergonomic, Proportionate Mobile Buttons (No giant full-width slabs) */}
        <div className="reveal stagger-3 flex flex-row items-center justify-center gap-2 xs:gap-3 sm:gap-4 w-full sm:w-auto mb-5 sm:mb-9">
          <button
            type="button"
            onClick={() => onOpenBooking('Swedish Massage', '₹1,999')}
            className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 bg-gradient-to-r from-[#dfc282] via-[#cfa559] to-[#b38838] text-[#060f0a] font-semibold text-xs sm:text-sm px-3.5 xs:px-5 py-2.5 rounded-full shadow-[0_3px_12px_rgba(197,160,89,0.22)] hover:brightness-105 active:scale-95 transition-all cursor-pointer whitespace-nowrap"
          >
            <CalendarCheck className="w-3.5 h-3.5 text-[#060f0a] shrink-0" />
            <span>Book • ₹0 Today</span>
          </button>

          <a
            href="https://wa.me/919945264342?text=Hello%20Bliss%20Spa%20BTM%20Layout%2C%20I%20would%20like%20to%20reserve%20a%20relaxation%20session."
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-1.5 bg-[#25d366]/10 hover:bg-[#25d366]/20 border border-[#25d366]/40 text-[#25d366] font-medium text-xs sm:text-sm px-3 xs:px-4 py-2.5 rounded-full backdrop-blur-sm transition active:scale-95 whitespace-nowrap shrink-0"
          >
            <WhatsAppIcon className="w-3.5 h-3.5 text-[#25d366] shrink-0" />
            <span>WhatsApp</span>
          </a>
        </div>

        {/* Airy Therapy Story Rings (Un-boxed on mobile to eliminate clutter) */}
        <div className="reveal stagger-4 w-full max-w-3xl mb-5 sm:mb-9 text-left sm:bg-[#0c1612]/85 sm:border sm:border-[#cfa559]/25 sm:rounded-2xl sm:p-4 sm:backdrop-blur-md sm:shadow-[0_8px_32px_rgba(0,0,0,0.65)]">
          <div className="flex items-center justify-between px-1 mb-2">
            <span className="text-[10px] xs:text-[11px] sm:text-xs font-bold text-white uppercase tracking-widest flex items-center gap-1.5">
              <Star className="w-3 h-3 text-[#dfc282] fill-[#dfc282]" />
              Popular Rituals
            </span>
            <span className="text-[9px] xs:text-[10px] text-emerald-300 font-semibold bg-emerald-500/20 border border-emerald-400/40 px-2 py-0.5 rounded-full">
              Tap to book
            </span>
          </div>

          <div className="-mx-3.5 px-3.5 sm:mx-0 sm:px-0 flex items-center gap-2 sm:gap-3.5 overflow-x-auto sm:justify-center pb-1 pt-1 scrollbar-none snap-x snap-mandatory">
            {stories.map((s, idx) => (
              <button
                type="button"
                key={idx}
                onClick={() => onOpenBooking(s.service, s.price)}
                className="flex flex-col items-center gap-1 flex-shrink-0 cursor-pointer snap-start group w-13 xs:w-15 sm:w-20 text-center focus:outline-none p-1 rounded-xl hover:bg-white/5 active:scale-95 transition-all"
                aria-label={`Book ${s.service} for ${s.price}`}
              >
                <div className="w-11 h-11 xs:w-13 xs:h-13 sm:w-16 sm:h-16 rounded-full p-[1.5px] bg-gradient-to-tr from-[#cfa559] via-[#9a752b] to-emerald-400 group-hover:scale-105 active:scale-95 transition-all duration-300 shadow-[0_0_10px_rgba(197,160,89,0.2)] shrink-0">
                  <div className="w-full h-full rounded-full overflow-hidden bg-slate-950">
                    <img
                      src={s.img}
                      alt={s.service}
                      className="w-full h-full object-cover rounded-full group-hover:scale-110 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                </div>
                <span className="text-[10px] xs:text-[11px] sm:text-xs font-semibold text-white group-hover:text-[#dfc282] transition-colors truncate max-w-full leading-tight drop-shadow-[0_1px_3px_rgba(0,0,0,0.9)]">
                  {s.name}
                </span>
                <span className="text-[9px] xs:text-[10px] sm:text-[11px] font-bold bg-[#cfa559] text-[#060f0a] px-1.5 py-0.5 rounded-full leading-none whitespace-nowrap shadow-[0_1px_4px_rgba(0,0,0,0.5)]">
                  {s.price}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Mobile: Legible Trust Ribbon */}
        <div className="reveal stagger-5 sm:hidden flex items-center justify-center gap-2 xs:gap-3 text-[10px] xs:text-[11px] text-white py-1.5 px-3.5 bg-[#14221c] border border-[#cfa559]/30 rounded-full shadow-[0_0_16px_rgba(0,0,0,0.5)] max-w-full overflow-x-auto scrollbar-none">
          <span className="flex items-center gap-1 text-[#dfc282] font-bold whitespace-nowrap">
            <Star className="w-2.5 h-2.5 fill-[#dfc282]" /> 4.9 (1.4k+)
          </span>
          <span className="text-[#cfa559]/60">•</span>
          <span className="whitespace-nowrap text-slate-100 font-medium">Steam Suites</span>
          <span className="text-[#cfa559]/60">•</span>
          <span className="whitespace-nowrap text-emerald-300 font-bold">₹0 Advance</span>
        </div>

        {/* Tablet & Desktop: Spacious 4-Card Trust Grid */}
        <div className="reveal stagger-5 hidden sm:grid sm:grid-cols-4 gap-2.5 sm:gap-3 w-full max-w-3xl">
          <div className="bg-[#14221c]/85 border border-white/10 rounded-xl p-2.5 sm:p-3 text-center shadow-lg backdrop-blur-md">
            <span className="font-serif text-sm sm:text-lg font-bold text-[#dfc282] block leading-tight">4.9 / 5.0</span>
            <span className="text-[10px] sm:text-xs text-slate-200">1,450+ Reviews</span>
          </div>
          <div className="bg-[#14221c]/85 border border-white/10 rounded-xl p-2.5 sm:p-3 text-center shadow-lg backdrop-blur-md">
            <span className="font-serif text-sm sm:text-lg font-bold text-white block leading-tight">Certified</span>
            <span className="text-[10px] sm:text-xs text-slate-200">Female &amp; Male Staff</span>
          </div>
          <div className="bg-[#14221c]/85 border border-white/10 rounded-xl p-2.5 sm:p-3 text-center shadow-lg backdrop-blur-md">
            <span className="font-serif text-sm sm:text-lg font-bold text-[#dfc282] block leading-tight">Steam &amp; Shower</span>
            <span className="text-[10px] sm:text-xs text-slate-200">Private En-Suite</span>
          </div>
          <div className="bg-[#14221c]/85 border border-white/10 rounded-xl p-2.5 sm:p-3 text-center shadow-lg backdrop-blur-md">
            <span className="font-serif text-sm sm:text-lg font-bold text-emerald-400 block leading-tight">₹0 Advance</span>
            <span className="text-[10px] sm:text-xs text-slate-200">Pay At Spa Reception</span>
          </div>
        </div>

      </div>
    </section>
  );
}
