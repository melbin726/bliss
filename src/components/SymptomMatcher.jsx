import React, { useState, useEffect } from 'react';
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
    <section id="matcher" className="experience-section relative bg-gradient-to-b from-[#0a110e] via-[#101b16] to-[#0a110e] border-t border-white/10 py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
      <div className="container max-w-7xl mx-auto">
        
        {/* 4-7-8 Breathing Decompression Box */}
        <div className="breathing-box max-w-2xl mx-auto text-center bg-gradient-to-b from-[#14221c] to-[#0d1612] border border-[#e6c35c]/35 rounded-3xl p-6 sm:p-8 shadow-[0_12px_40px_rgba(0,0,0,0.55)] backdrop-blur-md">
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="live-pulse-badge inline-flex items-center gap-2 bg-[#e6c35c]/15 border border-[#e6c35c]/40 text-[#fff2cc] text-xs font-semibold px-3 py-1 rounded-full">
              <span className="pulse-dot w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_#34d399]"></span>
              Mind &amp; Body Decompression
            </span>
          </div>
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-2">Take A 30-Second Breath</h3>
          <p className="font-sans text-xs sm:text-sm text-slate-200 max-w-lg mx-auto leading-relaxed">
            Your relaxation does not start at our spa door — it begins right now. Sync your breath with the glowing golden aura below and feel your shoulder tension dissolve.
          </p>

          <div className="breathing-circle-wrapper relative w-40 h-40 sm:w-48 sm:h-48 mx-auto my-6 flex items-center justify-center">
            <div className="breathing-ring absolute inset-0 rounded-full border-2 border-[#e6c35c]/60 shadow-[0_0_35px_rgba(230,195,92,0.45)]"></div>
            <div className="breathing-text font-serif text-lg sm:text-xl font-bold text-[#e6c35c] z-10">
              {breathText}
            </div>
          </div>

          <div className="flex justify-center gap-3 flex-wrap mt-4">
            <button
              onClick={onToggleZen}
              className={`btn-secondary inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold transition cursor-pointer border ${
                isZenPlaying 
                  ? 'bg-[#e6c35c] text-slate-950 border-[#e6c35c]' 
                  : 'bg-[#e6c35c]/10 hover:bg-[#e6c35c]/20 border-[#e6c35c] text-[#fff2cc]'
              }`}
            >
              <i className="fas fa-water"></i>
              <span>{isZenPlaying ? 'Mute Zen Audio' : 'Play Zen Singing Bowls'}</span>
            </button>
            <a 
              href="tel:09945264342" 
              className="btn-secondary inline-flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/20 text-slate-200 px-4 py-2 rounded-full text-xs font-semibold transition"
            >
              <i className="fas fa-phone-alt text-[#e6c35c]"></i>
              <span>Front Desk Concierge</span>
            </a>
          </div>
        </div>

        {/* Diagnostic Matcher Headline */}
        <div className="text-center mt-14 sm:mt-16">
          <span className="section-label inline-block text-xs font-bold text-[#e6c35c] tracking-widest uppercase mb-2">Self-Diagnostic Matcher</span>
          <h2 className="section-heading font-serif text-2xl sm:text-4xl font-bold text-white mb-3">How Does Your Body Feel Today?</h2>
          <p className="section-subtitle text-xs sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed font-normal">
            Tap your current state of fatigue below. Our wellness concierge will instantly prescribe the exact therapeutic ritual tailored for your body.
          </p>
        </div>

        {/* Mobile Swipe Hint */}
        <div className="mobile-swipe-hint flex md:hidden items-center justify-center gap-2 text-xs text-[#e6c35c] font-medium my-4">
          <i className="fas fa-hand-pointer"></i>
          <span>Swipe cards to find your symptom</span>
          <i className="fas fa-arrow-right"></i>
        </div>

        {/* Symptom Cards Grid */}
        <div className="symptom-grid flex md:grid md:grid-cols-3 lg:grid-cols-5 gap-4 overflow-x-auto pb-4 md:pb-0 scrollbar-none snap-x snap-mandatory pt-2">
          {symptomsData.map((item) => {
            const isSelected = activeSymptom === item.id;
            return (
              <div
                key={item.id}
                onClick={() => {
                  setActiveSymptom(item.id);
                  onOpenBooking(item.targetService, item.price);
                }}
                className={`symptom-card flex-shrink-0 w-[260px] md:w-auto rounded-2xl p-5 flex flex-col justify-between cursor-pointer transition-all duration-300 snap-start group border ${
                  isSelected 
                    ? 'border-[#e6c35c] bg-[#e6c35c]/15 shadow-[0_0_24px_rgba(230,195,92,0.3)]' 
                    : 'bg-[#14221c] border-white/10 hover:border-[#e6c35c]/60 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(230,195,92,0.15)]'
                }`}
              >
                <div>
                  <div className="symptom-icon text-3xl mb-3">{item.icon}</div>
                  <h4 className="symptom-title font-serif text-lg font-bold text-white group-hover:text-[#e6c35c] transition">{item.title}</h4>
                  <p className="symptom-desc text-xs text-slate-300 leading-relaxed mt-2 font-normal">{item.description}</p>
                </div>
                <div className="symptom-recommendation mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-xs font-semibold text-[#e6c35c] group-hover:text-white transition">
                  <span>👉 {item.recommendation} ({item.price})</span>
                  <i className="fas fa-calendar-check"></i>
                </div>
              </div>
            );
          })}
        </div>

        {/* Zero-Friction Trust Guarantees */}
        <div className="trust-guarantee-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-14">
          <div className="trust-item bg-[#14221c]/80 border border-white/10 rounded-2xl p-5 flex items-start gap-4 backdrop-blur-sm hover:border-[#e6c35c]/40 transition">
            <div className="trust-item-icon w-11 h-11 rounded-xl bg-[#e6c35c]/15 border border-[#e6c35c]/40 text-[#e6c35c] flex items-center justify-center text-lg flex-shrink-0">
              <i className="fas fa-hand-holding-usd"></i>
            </div>
            <div className="trust-item-text">
              <h5 className="text-sm font-bold text-white mb-1">Pay ₹0 Today Online</h5>
              <p className="text-xs text-slate-300 leading-relaxed font-normal">No credit card required. Pay at Bliss Spa front desk only after your therapy is complete.</p>
            </div>
          </div>

          <div className="trust-item bg-[#14221c]/80 border border-white/10 rounded-2xl p-5 flex items-start gap-4 backdrop-blur-sm hover:border-[#e6c35c]/40 transition">
            <div className="trust-item-icon w-11 h-11 rounded-xl bg-[#e6c35c]/15 border border-[#e6c35c]/40 text-[#e6c35c] flex items-center justify-center text-lg flex-shrink-0">
              <i className="fas fa-route"></i>
            </div>
            <div className="trust-item-text">
              <h5 className="text-sm font-bold text-white mb-1">Traffic-Friendly Reschedule</h5>
              <p className="text-xs text-slate-300 leading-relaxed font-normal">Stuck in Bangalore traffic? Free rescheduling anytime with zero cancellation penalty.</p>
            </div>
          </div>

          <div className="trust-item bg-[#14221c]/80 border border-white/10 rounded-2xl p-5 flex items-start gap-4 backdrop-blur-sm hover:border-[#e6c35c]/40 transition">
            <div className="trust-item-icon w-11 h-11 rounded-xl bg-[#e6c35c]/15 border border-[#e6c35c]/40 text-[#e6c35c] flex items-center justify-center text-lg flex-shrink-0">
              <i className="fas fa-shower"></i>
            </div>
            <div className="trust-item-text">
              <h5 className="text-sm font-bold text-white mb-1">En-Suite Steam &amp; Shower</h5>
              <p className="text-xs text-slate-300 leading-relaxed font-normal">Private A/C therapy room with personal herbal steam &amp; hot shower included with every session.</p>
            </div>
          </div>

          <div className="trust-item bg-[#14221c]/80 border border-white/10 rounded-2xl p-5 flex items-start gap-4 backdrop-blur-sm hover:border-[#e6c35c]/40 transition">
            <div className="trust-item-icon w-11 h-11 rounded-xl bg-[#e6c35c]/15 border border-[#e6c35c]/40 text-[#e6c35c] flex items-center justify-center text-lg flex-shrink-0">
              <i className="fas fa-user-check"></i>
            </div>
            <div className="trust-item-text">
              <h5 className="text-sm font-bold text-white mb-1">Certified Therapists</h5>
              <p className="text-xs text-slate-300 leading-relaxed font-normal">Skilled, background-verified practitioners. Choose your exact pressure: gentle, medium, or deep.</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
