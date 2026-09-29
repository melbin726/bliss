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
        <div className="absolute inset-0 bg-gradient-to-b from-[#050807]/94 via-[#0a110e]/88 to-[#050807]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#e6c35c]/10 via-transparent to-transparent pointer-events-none" />
      </div>

      <div className="container relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center">
        
        {/* Streamlined Live Status Badge */}
        <div className="inline-flex items-center gap-1.5 xs:gap-2 bg-[#14221c]/90 border border-[#e6c35c]/35 rounded-full py-1 px-3 xs:px-4 mb-3.5 sm:mb-4 backdrop-blur-md shadow-lg max-w-full">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_#34d399] shrink-0" />
          <span className="text-[10px] xs:text-[11px] sm:text-xs font-medium text-slate-200 truncate">
            Open Today 10 AM – 10 PM • <strong className="text-[#e6c35c] font-bold">4.9 ★</strong> (1,450+ Guests)
          </span>
        </div>

        {/* Primary H1 Heading for High-Ranking Search */}
        <h1 className="font-serif text-[1.65rem] xs:text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-[1.2] sm:leading-[1.18] mb-3 sm:mb-5 max-w-3xl">
          <span className="block text-[#e6c35c] text-[10px] sm:text-xs font-sans tracking-[0.2em] uppercase font-bold mb-1.5 sm:mb-2">
            Bliss Spa &amp; BTM Layout • Near Udupi Garden
          </span>
          Leave Stress Behind.<br className="hidden sm:inline" />
          <span className="bg-gradient-to-r from-[#fff3d1] via-[#e6c35c] to-[#b89128] bg-clip-text text-transparent font-medium">
            Step Into Pure Quiet &amp; Deep Rejuvenation.
          </span>
        </h1>

        {/* Concise Subtitle on Mobile */}
        <p className="font-sans text-xs xs:text-sm sm:text-base text-slate-200 leading-relaxed max-w-2xl mb-5 sm:mb-8 font-normal px-1">
          Bengaluru's candlelit sanctuary in BTM 1st Stage. Warm herbal oils, certified therapist care, private A/C suites with en-suite hot steam &amp; shower.
        </p>

        {/* Streamlined CTAs: 2 Balanced Buttons (Min-h 46px for Mobile Thumbs) */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2.5 sm:gap-4 w-full sm:w-auto mb-7 sm:mb-10">
          <button
            type="button"
            onClick={() => onOpenBooking('Swedish Massage', '₹1,999')}
            className="w-full sm:w-auto min-h-[46px] inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#fff3d1] via-[#e6c35c] to-[#b89128] text-slate-950 font-bold text-xs xs:text-sm px-5 xs:px-6 py-3 rounded-full shadow-[0_4px_20px_rgba(230,195,92,0.4)] hover:shadow-[0_6px_28px_rgba(230,195,92,0.6)] active:scale-98 transition-all"
          >
            <Sparkles className="w-4 h-4 text-black shrink-0" />
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

        {/* Quick Therapy Story Rings (Edge-Bleed Scroll on Mobile) */}
        <div className="w-full max-w-3xl mb-6 sm:mb-10 text-left">
          <div className="flex items-center justify-between px-1 mb-2">
            <span className="text-[11px] sm:text-xs font-bold text-slate-200 uppercase tracking-wider flex items-center gap-1.5">
              <Sparkles className="w-3 h-3 text-[#e6c35c]" />
              Popular Rituals
            </span>
            <span className="text-[10px] text-slate-400">Swipe &amp; tap to book</span>
          </div>
          
          <div className="-mx-3.5 px-3.5 sm:mx-0 sm:px-1 flex gap-2.5 xs:gap-3 sm:gap-4 overflow-x-auto pb-2 pt-1 scrollbar-none snap-x snap-mandatory">
            {stories.map((s, idx) => (
              <div 
                key={idx}
                onClick={() => onOpenBooking(s.service, s.price)}
                className="flex flex-col items-center gap-1 flex-shrink-0 cursor-pointer snap-start group"
              >
                <div className="w-13 h-13 xs:w-15 xs:h-15 sm:w-18 sm:h-18 rounded-full p-0.5 bg-gradient-to-tr from-[#e6c35c] via-[#b89128] to-emerald-400 group-hover:scale-105 active:scale-95 transition-transform duration-300 shadow-[0_0_12px_rgba(230,195,92,0.3)]">
                  <img 
                    src={s.img} 
                    alt={s.service} 
                    className="w-full h-full object-cover rounded-full"
                    loading="lazy"
                  />
                </div>
                <span className="text-[10px] sm:text-xs font-medium text-slate-200 group-hover:text-[#e6c35c] transition max-w-[62px] xs:max-w-[70px] sm:max-w-[76px] truncate text-center">
                  {s.name}
                </span>
                <span className="text-[9px] text-[#e6c35c] font-semibold">
                  {s.price}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Compact Trust Highlights (Clean 2x2 on Mobile) */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 w-full max-w-3xl">
          <div className="bg-[#14221c]/70 border border-white/10 rounded-xl p-2.5 sm:p-3 text-center">
            <span className="font-serif text-sm sm:text-lg font-bold text-[#e6c35c] block leading-tight">4.9 / 5.0</span>
            <span className="text-[10px] sm:text-xs text-slate-300">1,450+ Reviews</span>
          </div>
          <div className="bg-[#14221c]/70 border border-white/10 rounded-xl p-2.5 sm:p-3 text-center">
            <span className="font-serif text-sm sm:text-lg font-bold text-white block leading-tight">Certified</span>
            <span className="text-[10px] sm:text-xs text-slate-300">Female &amp; Male Staff</span>
          </div>
          <div className="bg-[#14221c]/70 border border-white/10 rounded-xl p-2.5 sm:p-3 text-center">
            <span className="font-serif text-sm sm:text-lg font-bold text-[#e6c35c] block leading-tight">Steam &amp; Shower</span>
            <span className="text-[10px] sm:text-xs text-slate-300">Private En-Suite</span>
          </div>
          <div className="bg-[#14221c]/70 border border-white/10 rounded-xl p-2.5 sm:p-3 text-center">
            <span className="font-serif text-sm sm:text-lg font-bold text-emerald-400 block leading-tight">₹0 Advance</span>
            <span className="text-[10px] sm:text-xs text-slate-300">Pay At Spa Reception</span>
          </div>
        </div>

      </div>
    </section>
  );
}
