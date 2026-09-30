import React from 'react';
import { Sparkles, Calendar, Heart, Shield, Star, Award, ShieldCheck } from 'lucide-react';

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
    <section id="hero" className="relative min-h-[auto] sm:min-h-[88vh] flex items-center justify-center pt-6 sm:pt-20 pb-8 sm:pb-16 px-3.5 sm:px-6 lg:px-8 overflow-hidden bg-[#050807]">
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

      <div className="container relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center">
        
        {/* Streamlined Live Status Badge */}
        <div className="inline-flex items-center gap-1.5 xs:gap-2 bg-[#14221c]/90 border border-[#cfa559]/30 rounded-full py-1 px-3 xs:px-4 mb-3.5 sm:mb-4 backdrop-blur-md shadow-lg max-w-full">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_#34d399] shrink-0" />
          <span className="text-[10px] xs:text-[11px] sm:text-xs font-medium text-slate-100 truncate">
            Open Today 10 AM – 10 PM • <strong className="text-[#dfc282] font-bold">4.9 ★</strong> (1,450+ Guests)
          </span>
        </div>

        {/* Primary H1 Heading for High-Ranking Search */}
        <h1 className="font-serif text-[1.65rem] xs:text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-[1.2] sm:leading-[1.18] mb-3 sm:mb-5 max-w-3xl drop-shadow-[0_2px_12px_rgba(0,0,0,0.8)]">
          <span className="block text-[#dfc282] text-[10px] sm:text-xs font-sans tracking-[0.2em] uppercase font-bold mb-1.5 sm:mb-2">
            Bliss Spa &amp; BTM Layout • Near Udupi Garden
          </span>
          Leave Stress Behind.<br className="hidden sm:inline" />
          <span className="bg-gradient-to-r from-[#fae8c8] via-[#dfc282] to-[#c59e4b] bg-clip-text text-transparent font-medium">
            Step Into Pure Quiet &amp; Deep Rejuvenation.
          </span>
        </h1>

        {/* Concise Subtitle on Mobile */}
        <p className="font-sans text-xs xs:text-sm sm:text-base text-slate-100 leading-relaxed max-w-2xl mb-5 sm:mb-8 font-normal px-1 drop-shadow-[0_1px_4px_rgba(0,0,0,0.8)]">
          Bengaluru's candlelit sanctuary in BTM 1st Stage. Warm herbal oils, certified therapist care, private A/C suites with en-suite hot steam &amp; shower.
        </p>

        {/* Streamlined CTAs: 2 Balanced Buttons (Min-h 46px for Mobile Thumbs) */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2.5 sm:gap-4 w-full sm:w-auto mb-7 sm:mb-10">
          <button
            type="button"
            onClick={() => onOpenBooking('Swedish Massage', '₹1,999')}
            className="w-full sm:w-auto min-h-[46px] inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#dfc282] via-[#cfa559] to-[#b38838] text-[#060f0a] font-bold text-xs xs:text-sm px-5 xs:px-6 py-3 rounded-full shadow-[0_4px_16px_rgba(197,160,89,0.25)] hover:shadow-[0_6px_22px_rgba(197,160,89,0.35)] hover:brightness-105 active:scale-98 transition-all cursor-pointer"
          >
            <Sparkles className="w-4 h-4 text-[#060f0a] shrink-0" />
            <span>Book Instant Relief (Pay ₹0 Today)</span>
          </button>

          <a 
            href="https://wa.me/919945264342?text=Hello%20Bliss%20Spa%20BTM%20Layout%2C%20I%20would%20like%20to%20reserve%20a%20relaxation%20session." 
            target="_blank" 
            rel="noreferrer"
            className="w-full sm:w-auto min-h-[46px] inline-flex items-center justify-center gap-2 bg-[#25d366]/15 hover:bg-[#25d366]/25 border border-[#25d366]/60 text-[#25d366] font-semibold text-xs xs:text-sm px-5 py-3 rounded-full backdrop-blur-md transition active:scale-98"
          >
            <span>WhatsApp Concierge</span>
          </a>
        </div>

        {/* Quick Therapy Story Rings in a Frosted Luxury Island */}
        <div className="w-full max-w-3xl mb-6 sm:mb-10 text-left bg-[#0c1612]/85 border border-[#cfa559]/25 rounded-2xl p-3 sm:p-4 backdrop-blur-md shadow-[0_8px_32px_rgba(0,0,0,0.65)]">
          <div className="flex items-center justify-between px-1 mb-2.5">
            <span className="text-[11px] sm:text-xs font-bold text-white uppercase tracking-wider flex items-center gap-1.5 drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">
              <Sparkles className="w-3.5 h-3.5 text-[#dfc282]" />
              Popular Rituals
            </span>
            <span className="text-[10px] text-emerald-300 font-medium bg-[#05110b] border border-emerald-500/35 px-2 py-0.5 rounded-full shadow-inner">
              Tap circle to book
            </span>
          </div>
          
          <div className="-mx-1 px-1 sm:mx-0 sm:px-0 flex items-center gap-2 xs:gap-2.5 sm:gap-4 overflow-x-auto sm:justify-center pb-1 pt-1 scrollbar-none snap-x snap-mandatory">
            {stories.map((s, idx) => (
              <button 
                type="button"
                key={idx}
                onClick={() => onOpenBooking(s.service, s.price)}
                className="flex flex-col items-center gap-1.5 flex-shrink-0 cursor-pointer snap-start group w-14 xs:w-16 sm:w-20 text-center focus:outline-none p-1 rounded-xl hover:bg-white/5 active:scale-95 transition-all"
                aria-label={`Book ${s.service} for ${s.price}`}
              >
                <div className="w-12 h-12 xs:w-14 xs:h-14 sm:w-16 sm:h-16 rounded-full p-[2px] bg-gradient-to-tr from-[#cfa559] via-[#9a752b] to-emerald-400 group-hover:scale-105 active:scale-95 transition-all duration-300 shadow-[0_0_12px_rgba(197,160,89,0.25)] shrink-0">
                  <div className="w-full h-full rounded-full overflow-hidden bg-slate-950">
                    <img 
                      src={s.img} 
                      alt={s.service} 
                      className="w-full h-full object-cover rounded-full group-hover:scale-110 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                </div>
                <span className="text-[11px] sm:text-xs font-semibold text-white group-hover:text-[#dfc282] transition-colors truncate max-w-full leading-tight drop-shadow-[0_1px_3px_rgba(0,0,0,0.9)]">
                  {s.name}
                </span>
                <span className="text-[9px] xs:text-[10px] sm:text-[11px] font-bold bg-gradient-to-r from-[#e8d4a2] via-[#cfa559] to-[#b38838] text-[#060f0a] px-2 py-0.5 rounded-full leading-none shadow-[0_2px_8px_rgba(0,0,0,0.6)] border border-[#e8d4a2]/30 whitespace-nowrap">
                  {s.price}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Compact Trust Highlights (Clean 2x2 on Mobile) */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 w-full max-w-3xl">
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
