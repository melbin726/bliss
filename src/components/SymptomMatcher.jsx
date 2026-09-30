import React, { useState, useEffect } from 'react';
import { Sparkles, Heart, Phone, ArrowRight, ShieldCheck, ShowerHead, Car, DollarSign, Calendar } from 'lucide-react';
import { symptomsData } from '../data/symptomsData';

export default function SymptomMatcher({ onOpenBooking, isZenPlaying, onToggleZen }) {
  const [breathText, setBreathText] = useState('Breathe In...');
  const [activeSymptom, setActiveSymptom] = useState(null);

  useEffect(() => {
    const cycle = [
      { text: 'Breathe In (4s)...', duration: 4000 },
      { text: 'Hold (7s)...', duration: 7000 },
      { text: 'Exhale Slowly (8s)...', duration: 8000 }
    ];
    let step = 0;
    let timer;

    const runCycle = () => {
      setBreathText(cycle[step].text);
      timer = setTimeout(() => {
        step = (step + 1) % cycle.length;
        runCycle();
      }, cycle[step].duration);
    };

    runCycle();
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="matcher" className="relative bg-gradient-to-b from-[#0a110e] via-[#101b16] to-[#0a110e] border-t border-white/10 py-10 sm:py-20 px-3.5 sm:px-6 lg:px-8">
      <div className="container max-w-7xl mx-auto">

        {/* 4-7-8 Breathing Decompression Box */}
        <div className="reveal-scale max-w-xl mx-auto text-center bg-gradient-to-b from-[#14221c] to-[#0d1612] border border-[#cfa559]/25 rounded-2xl sm:rounded-3xl p-4 sm:p-8 shadow-xl backdrop-blur-md">
          <div className="flex items-center justify-center gap-2 mb-1.5 sm:mb-2">
            <span className="inline-flex items-center gap-1.5 bg-[#cfa559]/15 border border-[#cfa559]/35 text-[#e8d4a2] text-[10px] sm:text-xs font-semibold px-2.5 py-0.5 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_6px_#34d399]" />
              Mind &amp; Body Decompression
            </span>
          </div>
          <h3 className="font-serif text-base sm:text-2xl lg:text-3xl font-bold text-white mb-1">Take A 30-Second Breath</h3>
          <p className="font-sans text-[11px] sm:text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
            Sync your breath with the glowing golden aura below and feel shoulder tension release.
          </p>

          <div className="relative w-28 h-28 sm:w-44 sm:h-44 mx-auto my-3 sm:my-6 flex items-center justify-center">
            <div className="breathing-ring absolute inset-0 rounded-full border-2 border-[#cfa559]/50 shadow-[0_0_24px_rgba(197,160,89,0.25)]" />
            <div className="font-serif text-xs sm:text-lg font-bold text-[#dfc282] z-10 px-2">
              {breathText}
            </div>
          </div>

          <div className="flex justify-center gap-2 sm:gap-3 flex-wrap mt-2 sm:mt-3">
            <button
              type="button"
              onClick={onToggleZen}
              className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold transition active:scale-95 cursor-pointer border whitespace-nowrap ${isZenPlaying
                  ? 'bg-[#cfa559] text-[#060f0a] border-[#cfa559]'
                  : 'bg-[#cfa559]/10 hover:bg-[#cfa559]/20 border-[#cfa559]/40 text-[#dfc282]'
                }`}
            >
              <span>{isZenPlaying ? 'Mute Zen Audio' : 'Play Zen Audio'}</span>
            </button>
            <a
              href="tel:09945264342"
              className="inline-flex items-center gap-1.5 bg-white/5 hover:bg-white/10 border border-white/20 text-slate-200 px-3.5 py-1.5 rounded-full text-xs font-semibold transition active:scale-95 whitespace-nowrap"
            >
              <Phone className="w-3.5 h-3.5 text-[#dfc282] shrink-0" />
              <span className="whitespace-nowrap font-mono">099452 64342</span>
            </a>
          </div>
        </div>

        {/* Diagnostic Matcher Headline */}
        <div className="reveal text-center mt-8 sm:mt-16 mb-3 sm:mb-8">
          <h2 className="font-serif text-xl sm:text-3xl font-bold text-white mb-1.5">
            How Does Your Body Feel Today?
          </h2>
          <p className="text-[11px] sm:text-sm text-slate-300 max-w-xl mx-auto leading-relaxed">
            Tap your current fatigue symptom below to match your body with the ideal therapeutic treatment.
          </p>
        </div>

        {/* Mobile Swipe Hint */}
        <div className="reveal stagger-1 flex md:hidden items-center justify-center gap-1.5 text-[10px] text-[#dfc282] font-medium mb-2.5">
          <span>Swipe cards to find your symptom</span>
          <ArrowRight className="w-3 h-3" />
        </div>

        {/* Symptom Cards Grid (Responsive Edge-Bleed Swipe on Mobile) */}
        <div className="-mx-3.5 px-3.5 sm:mx-0 sm:px-1 flex md:grid md:grid-cols-3 lg:grid-cols-5 gap-2.5 sm:gap-4 overflow-x-auto pb-2 md:pb-0 scrollbar-none snap-x snap-mandatory pt-1">
          {symptomsData.map((item, idx) => {
            const isSelected = activeSymptom === item.id;
            const staggerClass = `stagger-${(idx % 5) + 1}`;
            return (
              <div
                key={item.id}
                onClick={() => {
                  setActiveSymptom(item.id);
                  onOpenBooking(item.targetService, item.price);
                }}
                className={`reveal-scale ${staggerClass} flex-shrink-0 w-[195px] xs:w-[215px] md:w-auto rounded-2xl p-3.5 sm:p-4 flex flex-col justify-between cursor-pointer transition-all duration-300 snap-start border active:scale-98 ${isSelected
                    ? 'border-[#cfa559] bg-[#cfa559]/15 shadow-[0_0_16px_rgba(197,160,89,0.2)]'
                    : 'bg-[#14221c] border-white/10 hover:border-[#cfa559]/40'
                  }`}
              >
                <div>
                  <div className="text-2xl mb-1.5">{item.icon}</div>
                  <h4 className="font-serif text-base font-bold text-white">{item.title}</h4>
                  <p className="text-xs text-slate-300 leading-relaxed mt-1">{item.description}</p>
                </div>
                <div className="mt-2.5 pt-2 border-t border-white/10 flex items-center justify-between text-xs font-semibold text-[#dfc282]">
                  <span className="truncate pr-1">👉 {item.recommendation} ({item.price})</span>
                  <Calendar className="w-3.5 h-3.5 shrink-0" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Zero-Friction Trust Guarantees (Clean 2-Column Grid on Mobile) */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-4 mt-6 sm:mt-14">
          <div className="reveal stagger-1 bg-[#14221c]/80 border border-white/10 rounded-xl sm:rounded-2xl p-2.5 sm:p-4 flex flex-col sm:flex-row items-start gap-2 sm:gap-3">
            <div className="w-7 h-7 sm:w-9 sm:h-9 rounded-lg sm:rounded-xl bg-[#cfa559]/15 border border-[#cfa559]/35 text-[#dfc282] flex items-center justify-center shrink-0">
              <DollarSign className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </div>
            <div>
              <h5 className="text-[11px] sm:text-sm font-bold text-white mb-0.5">Pay ₹0 Advance</h5>
              <p className="text-[10px] sm:text-xs text-slate-300 leading-relaxed">Pay at reception after therapy.</p>
            </div>
          </div>

          <div className="reveal stagger-2 bg-[#14221c]/80 border border-white/10 rounded-xl sm:rounded-2xl p-2.5 sm:p-4 flex flex-col sm:flex-row items-start gap-2 sm:gap-3">
            <div className="w-7 h-7 sm:w-9 sm:h-9 rounded-lg sm:rounded-xl bg-[#cfa559]/15 border border-[#cfa559]/35 text-[#dfc282] flex items-center justify-center shrink-0">
              <Car className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </div>
            <div>
              <h5 className="text-[11px] sm:text-sm font-bold text-white mb-0.5">Traffic Reschedule</h5>
              <p className="text-[10px] sm:text-xs text-slate-300 leading-relaxed">Free instant slot change.</p>
            </div>
          </div>

          <div className="reveal stagger-3 bg-[#14221c]/80 border border-white/10 rounded-xl sm:rounded-2xl p-2.5 sm:p-4 flex flex-col sm:flex-row items-start gap-2 sm:gap-3">
            <div className="w-7 h-7 sm:w-9 sm:h-9 rounded-lg sm:rounded-xl bg-[#cfa559]/15 border border-[#cfa559]/35 text-[#dfc282] flex items-center justify-center shrink-0">
              <ShowerHead className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </div>
            <div>
              <h5 className="text-[11px] sm:text-sm font-bold text-white mb-0.5">Steam &amp; Shower</h5>
              <p className="text-[10px] sm:text-xs text-slate-300 leading-relaxed">Private en-suite included.</p>
            </div>
          </div>

          <div className="reveal stagger-4 bg-[#14221c]/80 border border-white/10 rounded-xl sm:rounded-2xl p-2.5 sm:p-4 flex flex-col sm:flex-row items-start gap-2 sm:gap-3">
            <div className="w-7 h-7 sm:w-9 sm:h-9 rounded-lg sm:rounded-xl bg-[#cfa559]/15 border border-[#cfa559]/35 text-[#dfc282] flex items-center justify-center shrink-0">
              <ShieldCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </div>
            <div>
              <h5 className="text-[11px] sm:text-sm font-bold text-white mb-0.5">Certified Staff</h5>
              <p className="text-[10px] sm:text-xs text-slate-300 leading-relaxed">Female &amp; male therapists.</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
