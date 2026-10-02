import React, { useState, useEffect } from 'react';
import { 
  Sparkles, 
  Heart, 
  Phone, 
  ArrowRight, 
  ShieldCheck, 
  ShowerHead, 
  Calendar, 
  Volume2, 
  VolumeX, 
  ChevronLeft, 
  ChevronRight,
  Activity,
  Moon,
  Navigation,
  Droplets,
  Feather,
  CreditCard,
  Clock,
  Award
} from 'lucide-react';
import { symptomsData } from '../data/symptomsData';

const SYMPTOM_ICONS = {
  'desk-neck': Activity,
  'mental-burnout': Moon,
  'commute-stiffness': Navigation,
  'toxin-heaviness': Droplets,
  'pure-unwind': Feather,
};

export default function SymptomMatcher({ onOpenBooking, isZenPlaying, onToggleZen }) {
  const [breathText, setBreathText] = useState('Breathe In...');
  const [activeSymptom, setActiveSymptom] = useState(symptomsData[0].id);
  const [activeIdx, setActiveIdx] = useState(0);
  const [touchStart, setTouchStart] = useState(null);

  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = (e) => {
    if (touchStart === null) return;
    const touchEnd = e.changedTouches[0].clientX;
    const distance = touchStart - touchEnd;
    if (distance > 45) {
      // Swiped left -> next
      setActiveIdx((prev) => (prev + 1) % symptomsData.length);
    } else if (distance < -45) {
      // Swiped right -> prev
      setActiveIdx((prev) => (prev - 1 + symptomsData.length) % symptomsData.length);
    }
    setTouchStart(null);
  };

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
            <div className="font-serif text-xs sm:text-lg font-bold text-[#dfc282] z-10 px-2 text-center">
              {breathText}
            </div>
          </div>

          <div className="flex justify-center gap-2 sm:gap-3 flex-wrap mt-2 sm:mt-3">
            <button
              type="button"
              onClick={onToggleZen}
              className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold transition active:scale-95 cursor-pointer border whitespace-nowrap ${isZenPlaying
                  ? 'bg-[#cfa559] text-[#060f0a] border-[#cfa559] shadow-[0_0_12px_rgba(207,165,89,0.4)]'
                  : 'bg-[#cfa559]/10 hover:bg-[#cfa559]/20 border-[#cfa559]/40 text-[#dfc282]'
                }`}
              aria-label={isZenPlaying ? 'Mute Zen Audio' : 'Play Zen Audio'}
            >
              {isZenPlaying ? (
                <Volume2 className="w-3.5 h-3.5 animate-pulse shrink-0" />
              ) : (
                <VolumeX className="w-3.5 h-3.5 shrink-0 opacity-80" />
              )}
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

        {/* ─── Mobile: Interactive Symptom Diagnostic Tool (Pill Switcher + Match Card) ─── */}
        <div className="block md:hidden">
          {/* Quick Tap Symptom Pills */}
          <div className="flex flex-wrap justify-center gap-1.5 mb-3 px-0.5">
            {symptomsData.map((item, idx) => {
              const isActive = activeIdx === idx;
              const PillIcon = SYMPTOM_ICONS[item.id] || Sparkles;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => {
                    setActiveIdx(idx);
                    setActiveSymptom(item.id);
                  }}
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 active:scale-95 cursor-pointer border ${
                    isActive
                      ? 'bg-gradient-to-r from-[#dfc282] via-[#cfa559] to-[#b38838] text-[#060f0a] border-[#cfa559] shadow-[0_2px_10px_rgba(207,165,89,0.35)]'
                      : 'bg-[#14221c] text-slate-300 border-white/10 hover:border-[#cfa559]/40'
                  }`}
                >
                  <PillIcon className={`w-3.5 h-3.5 shrink-0 ${isActive ? 'text-[#060f0a]' : 'text-[#dfc282]'}`} />
                  <span>{item.title.split('&')[0].trim()}</span>
                </button>
              );
            })}
          </div>

          {/* Active Symptom Card */}
          {(() => {
            const current = symptomsData[activeIdx];
            const CardIcon = SYMPTOM_ICONS[current.id] || Sparkles;
            return (
              <div 
                className="bg-gradient-to-b from-[#14221c] to-[#0e1713] border border-[#cfa559]/35 rounded-2xl p-4 shadow-xl relative"
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
              >
                {/* Top Badge & Match Tag */}
                <div className="flex items-center justify-between gap-2 mb-2">
                  <div className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-[#dfc282]">
                    <Sparkles className="w-3.5 h-3.5 text-[#dfc282]" />
                    <span>Personalized Match</span>
                  </div>
                  <span className="text-[10px] font-mono text-slate-300 bg-white/5 border border-white/10 px-2 py-0.5 rounded-full">
                    {activeIdx + 1} of {symptomsData.length}
                  </span>
                </div>

                {/* Symptom Info */}
                <div className="flex items-start gap-3 mb-3">
                  <span className="w-11 h-11 rounded-xl bg-[#cfa559]/15 border border-[#cfa559]/30 shrink-0 flex items-center justify-center text-[#dfc282]">
                    <CardIcon className="w-5 h-5 text-[#dfc282]" />
                  </span>
                  <div>
                    <h4 className="font-serif text-base font-bold text-white leading-tight">
                      {current.title}
                    </h4>
                    <p className="text-[11px] text-slate-300 leading-relaxed mt-1">
                      {current.description}
                    </p>
                  </div>
                </div>

                {/* Recommended Remedy Box */}
                <div className="bg-[#09110d] border border-[#cfa559]/25 rounded-xl p-3 mb-3.5 flex items-center justify-between gap-2">
                  <div>
                    <span className="text-[10px] uppercase font-semibold tracking-wider text-[#dfc282] block mb-0.5">
                      Recommended Treatment
                    </span>
                    <h5 className="font-serif text-sm font-bold text-white">
                      {current.recommendation}
                    </h5>
                  </div>
                  <div className="text-right shrink-0">
                    <span className="text-base font-bold text-[#dfc282] block font-mono">
                      {current.price}
                    </span>
                    <span className="text-[10px] text-slate-400">
                      Private Suite Included
                    </span>
                  </div>
                </div>

                {/* Action Buttons: Book CTA + Prev / Next */}
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => onOpenBooking(current.targetService, current.price)}
                    className="flex-1 min-h-[44px] py-2.5 px-3 rounded-full bg-gradient-to-r from-[#dfc282] via-[#cfa559] to-[#b38838] text-[#060f0a] font-bold text-xs shadow-[0_4px_14px_rgba(207,165,89,0.25)] hover:brightness-105 active:scale-95 transition flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <Calendar className="w-3.5 h-3.5 shrink-0" />
                    <span className="truncate">Book {current.recommendation}</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      const next = (activeIdx - 1 + symptomsData.length) % symptomsData.length;
                      setActiveIdx(next);
                      setActiveSymptom(symptomsData[next].id);
                    }}
                    aria-label="Previous symptom"
                    className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 border border-white/15 flex items-center justify-center transition active:scale-90 shrink-0 cursor-pointer"
                  >
                    <ChevronLeft className="w-4 h-4 text-[#dfc282]" />
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      const next = (activeIdx + 1) % symptomsData.length;
                      setActiveIdx(next);
                      setActiveSymptom(symptomsData[next].id);
                    }}
                    aria-label="Next symptom"
                    className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 border border-white/15 flex items-center justify-center transition active:scale-90 shrink-0 cursor-pointer"
                  >
                    <ChevronRight className="w-4 h-4 text-[#dfc282]" />
                  </button>
                </div>

                {/* Dot Pagination Indicator */}
                <div className="flex items-center justify-center gap-1.5 mt-3">
                  {symptomsData.map((_, i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={() => {
                        setActiveIdx(i);
                        setActiveSymptom(symptomsData[i].id);
                      }}
                      aria-label={`Go to symptom ${i + 1}`}
                      className={`h-1.5 rounded-full transition-all duration-200 cursor-pointer ${
                        i === activeIdx ? 'w-5 bg-[#cfa559]' : 'w-1.5 bg-white/20'
                      }`}
                    />
                  ))}
                </div>
              </div>
            );
          })()}
        </div>

        {/* ─── Desktop: 5-Column Grid ─── */}
        <div className="hidden md:grid md:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 pt-1">
          {symptomsData.map((item, idx) => {
            const isSelected = activeSymptom === item.id;
            const staggerClass = `stagger-${(idx % 5) + 1}`;
            const ItemIcon = SYMPTOM_ICONS[item.id] || Sparkles;
            return (
              <div
                key={item.id}
                onClick={() => {
                  setActiveSymptom(item.id);
                  onOpenBooking(item.targetService, item.price);
                }}
                className={`reveal-scale ${staggerClass} rounded-2xl p-4 flex flex-col justify-between cursor-pointer transition-all duration-300 border hover:shadow-lg active:scale-98 ${isSelected
                    ? 'border-[#cfa559] bg-[#cfa559]/15 shadow-[0_0_16px_rgba(197,160,89,0.2)]'
                    : 'bg-[#14221c] border-white/10 hover:border-[#cfa559]/40'
                  }`}
              >
                <div>
                  <div className="w-9 h-9 rounded-xl bg-[#cfa559]/15 border border-[#cfa559]/30 flex items-center justify-center mb-2.5 text-[#dfc282]">
                    <ItemIcon className="w-4 h-4 text-[#dfc282]" />
                  </div>
                  <h4 className="font-serif text-base font-bold text-white">{item.title}</h4>
                  <p className="text-xs text-slate-300 leading-relaxed mt-1">{item.description}</p>
                </div>
                <div className="mt-3 pt-2.5 border-t border-white/10 flex items-center justify-between text-xs font-semibold text-[#dfc282]">
                  <span className="truncate pr-1 text-[#dfc282]">{item.recommendation} ({item.price})</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#dfc282] shrink-0" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Zero-Friction Trust Guarantees (Clean 2-Column Grid on Mobile) */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-4 mt-6 sm:mt-14">
          <div className="reveal stagger-1 bg-[#14221c]/80 border border-white/10 rounded-xl sm:rounded-2xl p-2.5 sm:p-4 flex flex-col sm:flex-row items-start gap-2 sm:gap-3">
            <div className="w-7 h-7 sm:w-9 sm:h-9 rounded-lg sm:rounded-xl bg-[#cfa559]/15 border border-[#cfa559]/35 text-[#dfc282] flex items-center justify-center shrink-0">
              <CreditCard className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#dfc282]" />
            </div>
            <div>
              <h5 className="text-[11px] sm:text-sm font-bold text-white mb-0.5">Pay ₹0 Advance</h5>
              <p className="text-[10px] sm:text-xs text-slate-300 leading-relaxed">Pay at reception after therapy.</p>
            </div>
          </div>

          <div className="reveal stagger-2 bg-[#14221c]/80 border border-white/10 rounded-xl sm:rounded-2xl p-2.5 sm:p-4 flex flex-col sm:flex-row items-start gap-2 sm:gap-3">
            <div className="w-7 h-7 sm:w-9 sm:h-9 rounded-lg sm:rounded-xl bg-[#cfa559]/15 border border-[#cfa559]/35 text-[#dfc282] flex items-center justify-center shrink-0">
              <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#dfc282]" />
            </div>
            <div>
              <h5 className="text-[11px] sm:text-sm font-bold text-white mb-0.5">Traffic Reschedule</h5>
              <p className="text-[10px] sm:text-xs text-slate-300 leading-relaxed">Free instant slot change.</p>
            </div>
          </div>

          <div className="reveal stagger-3 bg-[#14221c]/80 border border-white/10 rounded-xl sm:rounded-2xl p-2.5 sm:p-4 flex flex-col sm:flex-row items-start gap-2 sm:gap-3">
            <div className="w-7 h-7 sm:w-9 sm:h-9 rounded-lg sm:rounded-xl bg-[#cfa559]/15 border border-[#cfa559]/35 text-[#dfc282] flex items-center justify-center shrink-0">
              <ShowerHead className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#dfc282]" />
            </div>
            <div>
              <h5 className="text-[11px] sm:text-sm font-bold text-white mb-0.5">Steam &amp; Shower</h5>
              <p className="text-[10px] sm:text-xs text-slate-300 leading-relaxed">Private en-suite included.</p>
            </div>
          </div>

          <div className="reveal stagger-4 bg-[#14221c]/80 border border-white/10 rounded-xl sm:rounded-2xl p-2.5 sm:p-4 flex flex-col sm:flex-row items-start gap-2 sm:gap-3">
            <div className="w-7 h-7 sm:w-9 sm:h-9 rounded-lg sm:rounded-xl bg-[#cfa559]/15 border border-[#cfa559]/35 text-[#dfc282] flex items-center justify-center shrink-0">
              <Award className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#dfc282]" />
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
