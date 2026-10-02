import React, { useState } from 'react';
import { Feather, Wind, Activity, Droplet, Heart, Moon, Target, ShowerHead, ChevronLeft, ChevronRight } from 'lucide-react';

const treatments = [
  {
    key: 'swedish', label: 'Swedish', tag: 'Full Body Calm',
    name: 'Swedish Massage', price: '₹1,999', service: 'Swedish Massage',
    desc: 'Gentle to moderate strokes that warm up muscle tissues, flush lactic acid, and relieve generalized fatigue.',
    attrs: [
      { icon: Feather, label: 'Pressure', value: 'Gentle to Moderate' },
      { icon: Droplet, label: 'Oil', value: 'Neutral Herbal Carrier Oils' },
      { icon: Heart, label: 'Best For', value: 'First-timers & stress unwind' },
      { icon: ShowerHead, label: 'Steam', value: 'En-suite steam included' },
    ],
    highlight: false,
  },
  {
    key: 'aroma', label: 'Aroma', tag: 'Mind & Sensory Calm',
    name: 'Aroma Massage', price: '₹2,199', service: 'Aroma Massage', badge: 'Most Popular',
    desc: 'Blends gentle soothing touch with the direct inhalation of organic lavender and chamomile essential oils.',
    attrs: [
      { icon: Wind, label: 'Pressure', value: 'Light to Gentle' },
      { icon: Droplet, label: 'Oil', value: 'Pure Lavender & Chamomile' },
      { icon: Moon, label: 'Best For', value: 'Burnout, insomnia & calm' },
      { icon: ShowerHead, label: 'Steam', value: 'En-suite steam included' },
    ],
    highlight: true,
  },
  {
    key: 'deep', label: 'Deep Tissue', tag: 'Deep Knots & Posture',
    name: 'Deep Tissue Massage', price: '₹2,299', service: 'Deep Tissue Massage',
    desc: 'Targeted, firm friction strokes designed to release dense adhesions and knots in the trapezius and back.',
    attrs: [
      { icon: Activity, label: 'Pressure', value: 'Firm & Deep' },
      { icon: Droplet, label: 'Oil', value: 'Warm Wintergreen Infusion' },
      { icon: Target, label: 'Best For', value: 'Desk neck, stiffness & gym knots' },
      { icon: ShowerHead, label: 'Steam', value: 'En-suite steam included' },
    ],
    highlight: false,
  },
];

export default function ComparisonGuide({ onOpenBooking }) {
  const [activeTab, setActiveTab] = useState(1);
  const [touchStart, setTouchStart] = useState(null);

  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = (e) => {
    if (touchStart === null) return;
    const touchEnd = e.changedTouches[0].clientX;
    const distance = touchStart - touchEnd;
    if (distance > 45) {
      setActiveTab((prev) => (prev + 1) % treatments.length);
    } else if (distance < -45) {
      setActiveTab((prev) => (prev - 1 + treatments.length) % treatments.length);
    }
    setTouchStart(null);
  };

  return (
    <section id="guide" className="relative bg-[#0d1612] border-t border-white/10 py-10 sm:py-20 px-3.5 sm:px-6 lg:px-8">
      <div className="container max-w-7xl mx-auto">
        <div className="reveal text-center mb-6 sm:mb-12">
          <h2 className="font-serif text-xl sm:text-3xl lg:text-4xl font-bold text-white mb-1.5 sm:mb-2">
            Swedish vs. Aroma vs. Deep Tissue
          </h2>
          <p className="text-[11px] sm:text-sm text-slate-300 max-w-xl mx-auto leading-relaxed">
            Side-by-side comparison to help you choose the ideal therapeutic bodywork.
          </p>
        </div>

        {/* ─── Desktop: 3-column grid ─── */}
        <div className="hidden md:grid md:grid-cols-3 gap-4 sm:gap-6">
          {treatments.map((t) => (
            <div
              key={t.key}
              className={`reveal-scale bg-[#14221c] rounded-3xl p-4 sm:p-6 flex flex-col justify-between shadow-lg relative ${
                t.highlight ? 'border-2 border-[#cfa559] shadow-xl' : 'border border-white/10'
              }`}
            >
              {t.badge && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#cfa559] text-[#060f0a] font-bold text-[10px] px-3 py-0.5 rounded-full uppercase tracking-wider shadow">
                  {t.badge}
                </span>
              )}
              <div>
                <span className="text-[10px] font-bold text-[#dfc282] uppercase tracking-wider block mb-1 mt-1">{t.tag}</span>
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-white mb-2">{t.name}</h3>
                <p className="text-xs text-slate-300 leading-relaxed mb-4">{t.desc}</p>
                <ul className="flex flex-col gap-2 text-xs text-slate-200 border-t border-white/10 pt-4 mb-5">
                  {t.attrs.map((a) => (
                    <li key={a.label} className="flex items-center gap-2">
                      <a.icon className="w-3.5 h-3.5 text-[#dfc282] shrink-0" />
                      <span><strong>{a.label}:</strong> {a.value}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <button
                type="button"
                onClick={() => onOpenBooking(t.service, t.price)}
                className="w-full py-2.5 px-4 rounded-full bg-gradient-to-r from-[#dfc282] via-[#cfa559] to-[#b38838] text-[#060f0a] font-semibold text-xs shadow-[0_2px_10px_rgba(197,160,89,0.2)] hover:brightness-105 active:scale-95 transition cursor-pointer"
              >
                Choose {t.name.split(' ')[0]} ({t.price})
              </button>
            </div>
          ))}
        </div>

        {/* ─── Mobile: Tab → single card ─── */}
        <div className="md:hidden">
          {/* Pill tabs */}
          <div className="flex items-center gap-1.5 mb-5 bg-[#09120e]/90 border border-white/10 rounded-full p-1 shadow-[0_4px_24px_rgba(0,0,0,0.5)] backdrop-blur-xl">
            {treatments.map((t, i) => (
              <button
                key={t.key}
                type="button"
                onClick={() => setActiveTab(i)}
                className={`flex-1 py-2 px-2 rounded-full text-[11px] font-semibold transition-all duration-200 cursor-pointer ${
                  activeTab === i
                    ? 'bg-gradient-to-r from-[#dfc282] via-[#cfa559] to-[#b38838] text-[#060f0a] font-bold shadow-[0_2px_12px_rgba(207,165,89,0.32)]'
                    : 'text-slate-300'
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>

          {/* Active card */}
          {(() => {
            const t = treatments[activeTab];
            return (
              <div
                key={t.key}
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
                className={`relative bg-[#14221c] rounded-2xl p-4 flex flex-col shadow-xl transition-all duration-300 ${
                  t.highlight ? 'border-2 border-[#cfa559]' : 'border border-white/10'
                }`}
              >
                {t.badge && (
                  <span className="absolute -top-3 left-4 bg-[#cfa559] text-[#060f0a] font-bold text-[10px] px-3 py-0.5 rounded-full uppercase tracking-wider shadow">
                    {t.badge}
                  </span>
                )}
                <span className="text-[10px] font-bold text-[#dfc282] uppercase tracking-wider block mb-0.5 mt-1">{t.tag}</span>
                <h3 className="font-serif text-lg font-bold text-white mb-2">{t.name}</h3>
                <p className="text-[11px] text-slate-300 leading-relaxed mb-3">{t.desc}</p>
                <ul className="flex flex-col gap-2 text-[11px] text-slate-200 border-t border-white/10 pt-3 mb-4">
                  {t.attrs.map((a) => (
                    <li key={a.label} className="flex items-center gap-2">
                      <a.icon className="w-3.5 h-3.5 text-[#dfc282] shrink-0" />
                      <span><strong>{a.label}:</strong> {a.value}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex items-center gap-2.5">
                  <button
                    type="button"
                    onClick={() => onOpenBooking(t.service, t.price)}
                    className="flex-1 py-2.5 px-3 rounded-full bg-gradient-to-r from-[#dfc282] via-[#cfa559] to-[#b38838] text-[#060f0a] font-bold text-xs active:scale-95 transition cursor-pointer"
                  >
                    Book — {t.price}
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveTab((activeTab - 1 + treatments.length) % treatments.length)}
                    className="w-9 h-9 rounded-full bg-white/5 hover:bg-white/10 border border-white/15 flex items-center justify-center transition active:scale-90"
                  >
                    <ChevronLeft className="w-4 h-4 text-[#dfc282]" />
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveTab((activeTab + 1) % treatments.length)}
                    className="w-9 h-9 rounded-full bg-white/5 hover:bg-white/10 border border-white/15 flex items-center justify-center transition active:scale-90"
                  >
                    <ChevronRight className="w-4 h-4 text-[#dfc282]" />
                  </button>
                </div>

                <div className="flex items-center justify-center gap-1.5 mt-3">
                  {treatments.map((_, i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={() => setActiveTab(i)}
                      aria-label={`View ${treatments[i].label}`}
                      className={`h-1.5 rounded-full transition-all duration-200 cursor-pointer ${
                        i === activeTab ? 'w-5 bg-[#cfa559]' : 'w-1.5 bg-white/20 hover:bg-white/40'
                      }`}
                    />
                  ))}
                </div>
              </div>
            );
          })()}
        </div>

      </div>
    </section>
  );
}

