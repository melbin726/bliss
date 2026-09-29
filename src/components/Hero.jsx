import React from 'react';

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
    <section id="hero" className="hero-section relative min-h-[92vh] flex items-center justify-center pt-20 sm:pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden bg-[#050807]">
      {/* Background Image with Dark Emerald/Gold Overlay */}
      <div className="hero-bg-wrapper absolute inset-0 z-0">
        <img 
          src="assets/images/hero-massage.jpg" 
          alt="Relaxing Spa Massage at Bliss Spa BTM Layout Bangalore" 
          className="hero-bg-image w-full h-full object-cover object-center scale-105 transition-transform duration-1000"
        />
        <div className="hero-overlay absolute inset-0 bg-gradient-to-b from-[#050807]/92 via-[#0a110e]/85 to-[#050807]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#e6c35c]/10 via-transparent to-transparent pointer-events-none"></div>
      </div>

      <div className="container relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center">
        <div className="hero-content flex flex-col items-center w-full">
          
          {/* Live Operational & Rating Badge */}
          <div className="hero-badge inline-flex flex-wrap items-center justify-center gap-2 sm:gap-3 bg-[#14221c]/90 border border-[#e6c35c]/40 rounded-full py-1.5 px-4 sm:px-5 mb-6 backdrop-blur-md shadow-[0_4px_20px_rgba(0,0,0,0.5)]">
            <span className="live-pulse-badge inline-flex items-center gap-2 text-xs font-semibold text-emerald-400">
              <span className="pulse-dot w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_#34d399]"></span>
              Open Today: 10 AM - 10 PM • BTM 1st Stage
            </span>
            <span className="rating-stars text-[#e6c35c] text-xs font-bold hidden sm:inline">★★★★★</span>
            <span className="badge-text text-xs text-slate-200">
              <strong className="text-white font-bold">4.9/5 Rating</strong> • 1,450+ Relaxed Bengaluru Guests
            </span>
          </div>

          {/* Primary H1 Heading for High-Ranking Search */}
          <h1 className="hero-title font-serif text-3xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.2] sm:leading-[1.15] max-w-4xl mb-6">
            <span className="block text-[#e6c35c] text-xs sm:text-sm font-sans tracking-[0.22em] uppercase font-bold mb-3">
              Bliss Spa &amp; BTM Layout • Near Udupi Garden, 1st Stage
            </span>
            Leave Bengaluru's Traffic &amp; Stress Behind.<br />
            <span className="gradient-gold-text bg-gradient-to-r from-[#fff3d1] via-[#e6c35c] to-[#b89128] bg-clip-text text-transparent font-medium">
              Step Into Pure Quiet &amp; Deep Rejuvenation.
            </span>
          </h1>

          {/* Subtitle */}
          <p className="hero-description font-sans text-base sm:text-lg text-slate-200 leading-relaxed max-w-2xl mb-8 font-normal">
            Your body carries the weight of 9+ hour screen sprints, Silk Board commute fatigue, and daily city pressure. At Bliss Spa BTM Layout, experience warm therapeutic herbal oils, rhythmic thumb pressure along tense knots, hot steam, and peaceful candlelit rooms.
          </p>

          {/* CTAs */}
          <div className="hero-actions flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto mb-10">
            <button
              onClick={() => onOpenBooking('Swedish Massage', '₹1,999')}
              className="btn-primary w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-[#fff3d1] via-[#e6c35c] to-[#b89128] text-slate-950 font-bold text-sm sm:text-base px-7 py-3.5 rounded-full shadow-[0_6px_25px_rgba(230,195,92,0.45)] hover:shadow-[0_8px_32px_rgba(230,195,92,0.65)] hover:scale-105 active:scale-95 transition-all cursor-pointer"
            >
              <i className="fas fa-sparkles text-xs sm:text-sm"></i>
              <span>Book Instant Relief (Pay After)</span>
            </button>
            <a 
              href="#matcher" 
              className="btn-secondary w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 border border-[#e6c35c]/40 text-slate-100 font-semibold text-sm px-6 py-3.5 rounded-full backdrop-blur-md transition hover:scale-105 active:scale-95"
            >
              <i className="fas fa-heartbeat text-[#e6c35c]"></i>
              <span>Find My Ideal Therapy</span>
            </a>
            <a 
              href="https://wa.me/916282696352?text=Hello%20Bliss%20Spa%20BTM%20Layout%2C%20I%20would%20like%20to%20reserve%20a%20relaxation%20session." 
              target="_blank" 
              rel="noreferrer"
              className="btn-secondary w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#25d366]/15 hover:bg-[#25d366]/25 border border-[#25d366] text-[#25d366] font-semibold text-sm px-6 py-3.5 rounded-full backdrop-blur-md transition hover:scale-105 active:scale-95"
            >
              <i className="fab fa-whatsapp text-base"></i>
              <span>WhatsApp Concierge</span>
            </a>
          </div>

          {/* Quick Therapy Story Rings */}
          <div className="mobile-stories-wrapper w-full max-w-3xl mb-10 text-left">
            <div className="stories-heading flex items-center justify-between px-2 mb-3">
              <span className="text-xs font-bold text-slate-200 uppercase tracking-wider flex items-center gap-1.5">
                <i className="fas fa-sparkles text-[#e6c35c]"></i> Popular Rituals
              </span>
              <small className="text-xs text-slate-400">Swipe &amp; tap to book</small>
            </div>
            <div className="mobile-stories-track flex gap-4 overflow-x-auto pb-3 pt-1 px-1 scrollbar-none snap-x snap-mandatory">
              {stories.map((s, idx) => (
                <div 
                  key={idx}
                  onClick={() => onOpenBooking(s.service, s.price)}
                  className="story-item flex flex-col items-center gap-1.5 flex-shrink-0 cursor-pointer snap-start group"
                >
                  <div className="story-ring w-16 h-16 sm:w-20 sm:h-20 rounded-full p-0.5 bg-gradient-to-tr from-[#e6c35c] via-[#b89128] to-emerald-400 group-hover:scale-110 transition-transform duration-300 shadow-[0_0_15px_rgba(230,195,92,0.35)]">
                    <img src={s.img} alt={s.name} className="w-full h-full rounded-full object-cover" />
                  </div>
                  <span className="text-xs text-slate-200 group-hover:text-[#e6c35c] font-medium transition">{s.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Stats Grid */}
          <div className="hero-stats-grid grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 w-full max-w-4xl">
            <div className="stat-item bg-[#14221c]/75 border border-white/10 rounded-2xl p-3.5 sm:p-4 text-center backdrop-blur-md shadow-lg">
              <span className="stat-number block font-serif text-lg sm:text-xl font-bold text-[#e6c35c]">BTM 1st Stage</span>
              <span className="stat-label block text-xs text-slate-300 mt-0.5">Near Udupi Garden</span>
            </div>
            <div className="stat-item bg-[#14221c]/75 border border-white/10 rounded-2xl p-3.5 sm:p-4 text-center backdrop-blur-md shadow-lg">
              <span className="stat-number block font-serif text-lg sm:text-xl font-bold text-white">099452 64342</span>
              <span className="stat-label block text-xs text-slate-300 mt-0.5">Front Desk Direct</span>
            </div>
            <div className="stat-item bg-[#14221c]/75 border border-white/10 rounded-2xl p-3.5 sm:p-4 text-center backdrop-blur-md shadow-lg">
              <span className="stat-number block font-serif text-lg sm:text-xl font-bold text-white">080 9526 6198</span>
              <span className="stat-label block text-xs text-slate-300 mt-0.5">Reception Line</span>
            </div>
            <div className="stat-item bg-[#14221c]/75 border border-white/10 rounded-2xl p-3.5 sm:p-4 text-center backdrop-blur-md shadow-lg">
              <span className="stat-number block font-serif text-lg sm:text-xl font-bold text-[#e6c35c]">10 AM - 10 PM</span>
              <span className="stat-label block text-xs text-slate-300 mt-0.5">Open 7 Days a Week</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
