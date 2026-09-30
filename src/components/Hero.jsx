import React from 'react';
import { Sparkles, Calendar, ShieldCheck, Star } from 'lucide-react';

export default function Hero({ onOpenBooking }) {
  const quickPicks = [
    { name: 'Swedish', service: 'Swedish Massage', price: '₹1,999', img: 'assets/images/hero-massage.jpg' },
    { name: 'Aroma', service: 'Aroma Massage', price: '₹2,199', img: 'assets/images/spa-ambience.jpg' },
    { name: 'Deep Tissue', service: 'Deep Tissue Massage', price: '₹2,299', img: 'assets/images/swedish-deep-tissue.jpg' },
    { name: 'Thai', service: 'Thai Massage', price: '₹2,499', img: 'assets/images/thai-massage.jpg' },
    { name: 'Ayurveda', service: 'Ayurveda Spa Massage', price: '₹2,799', img: 'assets/images/ayurvedic-shirodhara.jpg' },
  ];

  const trustPoints = [
    'Certified female & male therapists',
    'Private A/C suites with steam + shower',
    'No advance payment required',
  ];

  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-gradient-to-b from-[#060a08] via-[#0b1410] to-[#060a08] px-3.5 pb-10 pt-6 sm:px-6 sm:pb-14 sm:pt-10 lg:px-8 lg:pt-14"
    >
      <div className="mx-auto grid w-full max-w-7xl items-center gap-7 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
        <div className="order-2 text-left lg:order-1">
          <div className="mb-4 inline-flex max-w-full items-center gap-2 rounded-full border border-[#e6c35c]/40 bg-[#14221c]/85 px-3.5 py-1.5 text-[11px] font-medium text-slate-200 backdrop-blur-md sm:text-xs">
            <span className="h-2 w-2 shrink-0 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399]" />
            Open today 10 AM – 10 PM • 4.9★ from 1,450+ guests
          </div>

          <h1 className="font-serif text-[1.85rem] font-bold leading-[1.15] tracking-tight text-white sm:text-4xl lg:text-[3.2rem]">
            <span className="mb-2 block font-sans text-[10px] font-bold uppercase tracking-[0.24em] text-[#e6c35c] sm:text-xs">
              Bliss Spa • BTM 1st Stage
            </span>
            Quiet Your Body,
            <span className="mt-1 block bg-gradient-to-r from-[#fff3d1] via-[#e6c35c] to-[#b89128] bg-clip-text font-medium text-transparent">
              Restore Your Mind.
            </span>
          </h1>

          <p className="mt-4 max-w-xl text-sm leading-relaxed text-slate-200 sm:text-base">
            A calm, candlelit spa in Bengaluru with warm herbal oils, skilled therapy, and private rooms designed for deep recovery.
          </p>

          <div className="mt-5 flex flex-col gap-2.5 sm:flex-row sm:items-center">
            <button
              type="button"
              onClick={() => onOpenBooking('Swedish Massage', '₹1,999')}
              className="inline-flex min-h-[46px] w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#fff3d1] via-[#e6c35c] to-[#b89128] px-6 py-3 text-sm font-bold text-slate-950 shadow-[0_6px_24px_rgba(230,195,92,0.42)] transition hover:shadow-[0_8px_28px_rgba(230,195,92,0.58)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#fff2cc] focus-visible:ring-offset-2 focus-visible:ring-offset-[#08100c] active:scale-[0.98] sm:w-auto"
            >
              <Calendar className="h-4 w-4 shrink-0" />
              <span>Book Your Session</span>
            </button>

            <a
              href="https://wa.me/919945264342?text=Hello%20Bliss%20Spa%20BTM%20Layout%2C%20I%20would%20like%20to%20reserve%20a%20relaxation%20session."
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-[46px] w-full items-center justify-center gap-2 rounded-full border border-[#25d366]/55 bg-[#25d366]/10 px-6 py-3 text-sm font-semibold text-[#4ade80] transition hover:bg-[#25d366]/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4ade80] focus-visible:ring-offset-2 focus-visible:ring-offset-[#08100c] active:scale-[0.98] sm:w-auto"
            >
              WhatsApp Concierge
            </a>
          </div>

          <div className="mt-5 grid gap-2 text-xs text-slate-300 sm:text-sm">
            {trustPoints.map((point) => (
              <p key={point} className="inline-flex items-start gap-2.5">
                <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-[#e6c35c]" />
                <span>{point}</span>
              </p>
            ))}
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <div className="relative overflow-hidden rounded-2xl border border-white/15 bg-[#0a110e] shadow-2xl sm:rounded-3xl">
            <div className="h-[44vh] min-h-[260px] max-h-[430px] sm:h-[50vh] sm:min-h-[340px] sm:max-h-[560px] lg:h-[66vh] lg:max-h-[640px]">
              <img
                src="assets/images/hero-massage.jpg"
                alt="Therapist performing a relaxing massage session at Bliss Spa"
                className="h-full w-full object-contain object-center sm:object-cover"
                fetchPriority="high"
              />
            </div>
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#050807]/78 via-[#050807]/20 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-3.5 sm:p-5">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#e6c35c]/40 bg-[#0e1814]/85 px-3 py-1.5 text-[11px] font-semibold text-slate-200 backdrop-blur-md sm:text-xs">
                <Star className="h-3.5 w-3.5 text-[#e6c35c]" />
                Signature massage rituals from ₹1,999
              </div>
            </div>
          </div>

          <div className="mt-3.5 rounded-2xl border border-white/10 bg-[#111d18]/70 p-3 sm:mt-4 sm:rounded-3xl sm:p-4">
            <div className="mb-2 flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider text-slate-300 sm:text-xs">
              <Sparkles className="h-3.5 w-3.5 text-[#e6c35c]" />
              Quick picks
            </div>
            <div className="flex gap-2 overflow-x-auto pb-1.5 scrollbar-none sm:gap-3">
              {quickPicks.map((pick) => (
                <button
                  key={pick.service}
                  type="button"
                  onClick={() => onOpenBooking(pick.service, pick.price)}
                  className="group min-w-[136px] shrink-0 rounded-xl border border-white/10 bg-[#15251f]/85 p-2.5 text-left transition hover:border-[#e6c35c]/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#e6c35c]"
                >
                  <div className="mb-2 h-16 overflow-hidden rounded-lg">
                    <img src={pick.img} alt={pick.service} className="h-full w-full object-cover" loading="lazy" />
                  </div>
                  <p className="truncate text-xs font-semibold text-white group-hover:text-[#e6c35c]">{pick.name}</p>
                  <p className="text-[11px] text-[#e6c35c]">{pick.price}</p>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
