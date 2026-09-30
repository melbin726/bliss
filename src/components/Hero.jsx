import React from 'react';
import { Sparkles, Calendar, ShieldCheck, Star } from 'lucide-react';

export default function Hero({ onOpenBooking }) {
  const quickPicks = [
    { name: 'Swedish', service: 'Swedish Massage', price: '₹1,999', img: 'assets/images/hero-massage.jpg' },
    { name: 'Aroma', service: 'Aroma Massage', price: '₹2,199', img: 'assets/images/spa-ambience.jpg' },
    { name: 'Deep Tissue', service: 'Deep Tissue Massage', price: '₹2,299', img: 'assets/images/swedish-deep-tissue.jpg' },
    { name: 'Thai Yoga', service: 'Thai Massage', price: '₹2,499', img: 'assets/images/thai-massage.jpg' },
    { name: 'Ayurveda', service: 'Ayurveda Spa Massage', price: '₹2,799', img: 'assets/images/ayurvedic-shirodhara.jpg' },
    { name: 'Hot Stone', service: 'Sacred Hot Stone Therapy', price: '₹2,799', img: 'assets/images/hot-stone.jpg' },
    { name: 'Couples', service: 'Royal Couples Suite', price: '₹5,999', img: 'assets/images/couples-suite.jpg' },
  ];

  const trustPoints = [
    'Certified female & male therapists',
    'Private A/C suites with en-suite steam + shower',
    'No advance payment required (Pay ₹0 today)',
  ];

  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-gradient-to-b from-[#050807] via-[#09110d] to-[#050807] px-3.5 pb-10 pt-6 sm:px-6 sm:pb-14 sm:pt-10 lg:px-8 lg:pt-14"
    >
      {/* Background Radial Glow Accent */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#cfa559]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="mx-auto grid w-full max-w-7xl items-center gap-7 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10 relative z-10">
        
        {/* Left Column: Heading, Value Props & CTAs (Order 1 on both Mobile and Desktop for instant headline visibility) */}
        <div className="order-1 text-left">
          {/* Live Status Badge */}
          <div className="mb-4 inline-flex max-w-full items-center gap-2 rounded-full border border-[#cfa559]/35 bg-[#14221c]/90 px-3.5 py-1.5 text-[11px] font-medium text-slate-200 backdrop-blur-md shadow-lg sm:text-xs">
            <span className="h-2 w-2 shrink-0 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_#34d399]" />
            <span>Open today 10 AM – 10 PM • <strong className="text-[#dfc282] font-bold">4.9 ★</strong> from 1,450+ guests</span>
          </div>

          {/* Primary H1 Heading */}
          <h1 className="font-serif text-[1.85rem] font-bold leading-[1.18] tracking-tight text-white sm:text-4xl lg:text-[3.2rem]">
            <span className="mb-2 block font-sans text-[10px] font-bold uppercase tracking-[0.24em] text-[#dfc282] sm:text-xs">
              Bliss Spa • BTM 1st Stage • Near Udupi Garden
            </span>
            Leave Stress Behind.
            <span className="mt-1 block bg-gradient-to-r from-[#dfc282] via-[#cfa559] to-[#b38838] bg-clip-text font-medium text-transparent">
              Quiet Your Body, Restore Your Mind.
            </span>
          </h1>

          <p className="mt-4 max-w-xl text-xs sm:text-sm lg:text-base leading-relaxed text-slate-200">
            Bengaluru's candlelit sanctuary in BTM 1st Stage. Warm herbal oils, certified therapist care, and private A/C suites with en-suite hot steam &amp; shower.
          </p>

          {/* Action Buttons: Champagne Satin Gold + WhatsApp Concierge */}
          <div className="mt-6 flex flex-col gap-2.5 sm:flex-row sm:items-center">
            <button
              type="button"
              onClick={() => onOpenBooking('Swedish Massage', '₹1,999')}
              className="inline-flex min-h-[46px] w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#dfc282] via-[#cfa559] to-[#b38838] px-6 py-3 text-sm font-bold text-[#060f0a] shadow-[0_4px_18px_rgba(197,160,89,0.25)] hover:shadow-[0_6px_24px_rgba(197,160,89,0.35)] hover:brightness-105 active:scale-[0.98] transition cursor-pointer sm:w-auto"
            >
              <Calendar className="h-4 w-4 shrink-0 text-[#060f0a]" />
              <span>Book Your Session (Pay ₹0 Advance)</span>
            </button>

            <a
              href="https://wa.me/919945264342?text=Hello%20Bliss%20Spa%20BTM%20Layout%2C%20I%20would%20like%20to%20reserve%20a%20relaxation%20session."
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-[46px] w-full items-center justify-center gap-2 rounded-full border border-[#25d366]/55 bg-[#25d366]/15 hover:bg-[#25d366]/25 px-6 py-3 text-sm font-semibold text-[#4ade80] transition active:scale-[0.98] sm:w-auto backdrop-blur-md"
            >
              <span>WhatsApp Concierge</span>
            </a>
          </div>

          {/* Trust Highlights Checklist */}
          <div className="mt-6 grid gap-2 text-xs text-slate-300 sm:text-sm">
            {trustPoints.map((point) => (
              <p key={point} className="inline-flex items-start gap-2.5">
                <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-[#dfc282]" />
                <span>{point}</span>
              </p>
            ))}
          </div>

          {/* Quick Metrics */}
          <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-2 pt-2 border-t border-white/10">
            <div className="bg-[#14221c]/70 border border-white/10 rounded-xl p-2.5 text-center">
              <span className="font-serif text-sm font-bold text-[#dfc282] block">4.9 / 5.0</span>
              <span className="text-[10px] text-slate-300">1,450+ Guests</span>
            </div>
            <div className="bg-[#14221c]/70 border border-white/10 rounded-xl p-2.5 text-center">
              <span className="font-serif text-sm font-bold text-white block">Certified</span>
              <span className="text-[10px] text-slate-300">Male &amp; Female Staff</span>
            </div>
            <div className="bg-[#14221c]/70 border border-white/10 rounded-xl p-2.5 text-center">
              <span className="font-serif text-sm font-bold text-[#dfc282] block">Steam &amp; Shower</span>
              <span className="text-[10px] text-slate-300">Private En-Suite</span>
            </div>
            <div className="bg-[#14221c]/70 border border-white/10 rounded-xl p-2.5 text-center">
              <span className="font-serif text-sm font-bold text-emerald-400 block">₹0 Advance</span>
              <span className="text-[10px] text-slate-300">Pay At Spa Desk</span>
            </div>
          </div>
        </div>

        {/* Right Column: Visual Showcase & Quick Picks Carousel */}
        <div className="order-2">
          {/* Main Visual Photo Card */}
          <div className="relative overflow-hidden rounded-2xl border border-white/15 bg-[#0a110e] shadow-2xl sm:rounded-3xl">
            <div className="h-[36vh] min-h-[240px] max-h-[380px] sm:h-[46vh] sm:min-h-[320px] sm:max-h-[500px] lg:h-[54vh] lg:max-h-[520px]">
              <img
                src="assets/images/hero-massage.jpg"
                alt="Therapist performing a relaxing massage session at Bliss Spa BTM Layout Bangalore"
                className="h-full w-full object-cover object-center"
                loading="eager"
              />
            </div>
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#050807]/90 via-[#050807]/25 to-transparent" />
            
            {/* Overlay Badge */}
            <div className="absolute inset-x-0 bottom-0 p-3.5 sm:p-5 flex items-center justify-between">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#cfa559]/40 bg-[#0e1814]/90 px-3 py-1.5 text-[11px] font-semibold text-slate-200 backdrop-blur-md sm:text-xs shadow-lg">
                <Star className="h-3.5 w-3.5 text-[#dfc282]" />
                <span>Signature massage rituals from ₹1,999</span>
              </div>
              <span className="text-[10px] text-emerald-400 bg-emerald-500/15 border border-emerald-500/30 px-2 py-0.5 rounded-full font-bold hidden sm:inline-block">
                A/C Suites Available
              </span>
            </div>
          </div>

          {/* Quick Picks Interactive Carousel */}
          <div className="mt-3.5 rounded-2xl border border-white/10 bg-[#0d1713]/80 p-3 sm:mt-4 sm:rounded-3xl sm:p-4 backdrop-blur-md shadow-lg">
            <div className="mb-2.5 flex items-center justify-between px-1">
              <span className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-white sm:text-xs">
                <Sparkles className="h-3.5 w-3.5 text-[#dfc282]" />
                Popular Spa Rituals
              </span>
              <span className="text-[10px] text-slate-400">Tap card to book</span>
            </div>
            
            <div className="flex gap-2.5 overflow-x-auto pb-1.5 scrollbar-none snap-x snap-mandatory">
              {quickPicks.map((pick) => (
                <button
                  key={pick.service}
                  type="button"
                  onClick={() => onOpenBooking(pick.service, pick.price)}
                  className="group min-w-[130px] sm:min-w-[140px] shrink-0 rounded-xl border border-white/10 bg-[#14221c]/90 p-2 text-left transition hover:border-[#cfa559]/50 hover:bg-[#1b2f27] active:scale-95 cursor-pointer snap-start focus:outline-none shadow-md"
                >
                  <div className="mb-2 h-16 sm:h-20 overflow-hidden rounded-lg bg-slate-950">
                    <img 
                      src={pick.img} 
                      alt={pick.service} 
                      className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300" 
                      loading="lazy" 
                    />
                  </div>
                  <p className="truncate text-xs font-semibold text-white group-hover:text-[#dfc282] transition-colors">
                    {pick.name}
                  </p>
                  <p className="text-[11px] font-bold text-[#dfc282] font-mono mt-0.5">
                    {pick.price}
                  </p>
                </button>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
