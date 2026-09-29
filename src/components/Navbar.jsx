import React, { useState, useEffect } from 'react';

export default function Navbar({ onOpenBooking, isZenPlaying, onToggleZen }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeDrawer = () => setIsDrawerOpen(false);

  return (
    <>
      <header className={`site-header sticky top-0 z-40 w-full transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#050807]/95 border-b border-[#e6c35c]/25 shadow-[0_10px_30px_rgba(0,0,0,0.8)] backdrop-blur-xl' 
          : 'bg-[#0a110e]/90 border-b border-white/10 backdrop-blur-lg'
      }`}>
        <div className="nav-container max-w-7xl mx-auto px-4 sm:px-6 h-16 sm:h-20 flex items-center justify-between gap-4">
          
          {/* Brand Logo */}
          <a href="#" className="brand-logo flex items-center gap-3 group flex-shrink-0" aria-label="Bliss Spa Home">
            <div className="lotus-icon w-10 h-10 rounded-full bg-[#14221c] border border-[#e6c35c] text-[#e6c35c] flex items-center justify-center text-base shadow-[0_0_15px_rgba(230,195,92,0.35)] group-hover:rotate-12 transition-transform duration-500">
              <i className="fas fa-spa text-base"></i>
            </div>
            <div className="brand-text">
              <span className="font-serif text-xl sm:text-2xl font-bold tracking-wider text-white m-0 leading-none block">BLISS SPA</span>
              <span className="font-sans text-[0.62rem] sm:text-[0.68rem] tracking-[0.22em] text-[#e6c35c] uppercase block mt-1 font-semibold">BTM LAYOUT 1ST STAGE</span>
            </div>
          </a>

          {/* Desktop Capsule Navigation */}
          <nav className="desktop-nav hidden lg:flex items-center justify-center flex-1 max-w-2xl px-2" aria-label="Primary Navigation">
            <div className="nav-capsule inline-flex items-center gap-0.5 xl:gap-1 bg-[#14221c]/80 border border-[#e6c35c]/30 rounded-full p-1.5 backdrop-blur-md shadow-lg">
              <a href="#matcher" className="nav-link text-slate-200 hover:text-white hover:bg-white/10 text-xs xl:text-sm font-medium px-3 xl:px-4 py-2 rounded-full transition-all">De-Stress</a>
              <a href="#therapies" className="nav-link text-slate-200 hover:text-white hover:bg-white/10 text-xs xl:text-sm font-medium px-3 xl:px-4 py-2 rounded-full transition-all">Therapies</a>
              <a href="#thai-massage" className="nav-link text-slate-200 hover:text-white hover:bg-white/10 text-xs xl:text-sm font-medium px-3 xl:px-4 py-2 rounded-full transition-all">Thai Ritual</a>
              <a href="#ayurveda" className="nav-link text-slate-200 hover:text-white hover:bg-white/10 text-xs xl:text-sm font-medium px-3 xl:px-4 py-2 rounded-full transition-all">Ayurveda</a>
              <a href="#guide" className="nav-link text-slate-200 hover:text-white hover:bg-white/10 text-xs xl:text-sm font-medium px-3 xl:px-4 py-2 rounded-full transition-all">Spa Guide</a>
              <a href="#location" className="nav-link text-slate-200 hover:text-white hover:bg-white/10 text-xs xl:text-sm font-medium px-3 xl:px-4 py-2 rounded-full transition-all">Location</a>
            </div>
          </nav>

          {/* Header Action Buttons */}
          <div className="header-actions flex items-center gap-2 sm:gap-2.5 flex-shrink-0">
            {/* Zen Sound Button (XL Screens) */}
            <button
              onClick={onToggleZen}
              className={`zen-audio-btn hidden xl:inline-flex items-center gap-2 px-3.5 py-2 rounded-full text-xs font-semibold transition cursor-pointer border ${
                isZenPlaying 
                  ? 'bg-[#e6c35c] text-slate-950 border-[#e6c35c] shadow-[0_0_15px_rgba(230,195,92,0.5)]' 
                  : 'bg-[#e6c35c]/10 hover:bg-[#e6c35c]/20 border-[#e6c35c]/35 text-[#e6c35c]'
              }`}
              title="Toggle Zen Meditation Singing Bowls"
            >
              <i className="fas fa-water text-sm"></i>
              <span>{isZenPlaying ? 'Zen Active' : 'Zen Sound'}</span>
              <div className="sound-waves flex items-center gap-0.5 h-3">
                <span className={`w-0.5 rounded-full ${isZenPlaying ? 'bg-slate-950 h-2.5 animate-pulse' : 'bg-[#e6c35c] h-1'}`}></span>
                <span className={`w-0.5 rounded-full ${isZenPlaying ? 'bg-slate-950 h-3 animate-pulse' : 'bg-[#e6c35c] h-2'}`}></span>
                <span className={`w-0.5 rounded-full ${isZenPlaying ? 'bg-slate-950 h-2 animate-pulse' : 'bg-[#e6c35c] h-1.5'}`}></span>
              </div>
            </button>

            {/* Direct Phone Pill */}
            <a
              href="tel:09945264342"
              className="header-phone-pill hidden lg:inline-flex items-center gap-2 bg-white/5 hover:bg-[#e6c35c]/15 border border-[#e6c35c]/35 text-[#fff2cc] px-3.5 xl:px-4 py-2 rounded-full text-xs xl:text-sm font-semibold transition backdrop-blur-sm"
              title="Call Concierge: 099452 64342"
            >
              <i className="fas fa-phone-alt text-[#e6c35c] text-sm"></i>
              <span>099452 64342</span>
            </a>

            {/* Book Therapy CTA */}
            <button
              onClick={() => onOpenBooking('Swedish Massage', '₹1,999')}
              className="btn-primary header-book-btn hidden sm:inline-flex items-center gap-2 bg-gradient-to-r from-[#fff3d1] via-[#e6c35c] to-[#b89128] text-slate-950 font-bold text-xs sm:text-sm px-4 sm:px-5 py-2 sm:py-2.5 rounded-full shadow-[0_4px_18px_rgba(230,195,92,0.4)] hover:shadow-[0_6px_26px_rgba(230,195,92,0.65)] hover:scale-105 active:scale-95 transition-all cursor-pointer"
            >
              <i className="far fa-calendar-check text-sm"></i>
              <span>Book Therapy</span>
            </button>

            {/* Mobile Call Icon (Uniform 40px Circle) */}
            <a
              href="tel:09945264342"
              className="mobile-header-call-btn lg:hidden w-10 h-10 rounded-full bg-white/5 hover:bg-[#e6c35c]/15 border border-[#e6c35c]/40 text-[#e6c35c] flex items-center justify-center transition active:scale-95 shadow-[0_0_12px_rgba(230,195,92,0.25)]"
              title="Call Front Desk"
              aria-label="Call Front Desk"
            >
              <i className="fas fa-phone-alt text-sm"></i>
            </a>

            {/* Mobile Drawer Hamburger Button (Uniform 40px Circle) */}
            <button
              onClick={() => setIsDrawerOpen(true)}
              className="mobile-menu-toggle lg:hidden w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 border border-white/15 text-white flex items-center justify-center transition active:scale-95 cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              <i className="fas fa-bars text-sm"></i>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Backdrop */}
      <div 
        className={`mobile-drawer-backdrop fixed inset-0 z-50 bg-black/80 backdrop-blur-sm transition-opacity duration-300 ${
          isDrawerOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={closeDrawer}
      ></div>

      {/* Mobile Slide-Out Drawer */}
      <nav 
        className={`mobile-drawer fixed top-0 right-0 w-[84%] max-w-[360px] h-full bg-[#0d1512] border-l border-white/10 shadow-[-15px_0_40px_rgba(0,0,0,0.8)] z-50 flex flex-col justify-between overflow-y-auto transition-transform duration-300 ${
          isDrawerOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        aria-label="Mobile Navigation Drawer"
      >
        <div className="drawer-header flex items-center justify-between p-5 border-b border-white/10 bg-[#14221c]">
          <div className="brand-logo flex items-center gap-3">
            <div className="lotus-icon w-9 h-9 rounded-full bg-[#14221c] border border-[#e6c35c] text-[#e6c35c] flex items-center justify-center text-sm shadow-[0_0_12px_rgba(230,195,92,0.3)]">
              <i className="fas fa-spa text-sm"></i>
            </div>
            <div className="brand-text">
              <strong className="font-serif text-lg text-white block leading-none">BLISS SPA</strong>
              <span className="font-sans text-[0.6rem] tracking-[0.2em] text-[#e6c35c] uppercase font-semibold">BTM LAYOUT 1ST STAGE</span>
            </div>
          </div>
          <button 
            onClick={closeDrawer}
            className="drawer-close-btn w-9 h-9 rounded-full bg-white/5 border border-white/15 text-slate-300 hover:text-white flex items-center justify-center text-sm cursor-pointer transition active:scale-95" 
            aria-label="Close navigation menu"
          >
            <i className="fas fa-times text-sm"></i>
          </button>
        </div>

        <ul className="drawer-nav-list p-4 flex flex-col gap-1 list-none flex-1">
          <li><a href="#hero" onClick={closeDrawer} className="flex items-center gap-3 text-slate-200 hover:text-[#e6c35c] hover:bg-white/5 font-serif text-lg p-3 rounded-xl transition"><i className="fas fa-home text-[#e6c35c] w-5 text-center text-sm"></i> <span>Home</span></a></li>
          <li><a href="#matcher" onClick={closeDrawer} className="flex items-center gap-3 text-slate-200 hover:text-[#e6c35c] hover:bg-white/5 font-serif text-lg p-3 rounded-xl transition"><i className="fas fa-heartbeat text-[#e6c35c] w-5 text-center text-sm"></i> <span>De-Stress Matcher</span></a></li>
          <li><a href="#therapies" onClick={closeDrawer} className="flex items-center gap-3 text-slate-200 hover:text-[#e6c35c] hover:bg-white/5 font-serif text-lg p-3 rounded-xl transition"><i className="fas fa-spa text-[#e6c35c] w-5 text-center text-sm"></i> <span>All Therapies</span></a></li>
          <li><a href="#thai-massage" onClick={closeDrawer} className="flex items-center gap-3 text-slate-200 hover:text-[#e6c35c] hover:bg-white/5 font-serif text-lg p-3 rounded-xl transition"><i className="fas fa-pray text-[#e6c35c] w-5 text-center text-sm"></i> <span>Traditional Thai</span></a></li>
          <li><a href="#ayurveda" onClick={closeDrawer} className="flex items-center gap-3 text-slate-200 hover:text-[#e6c35c] hover:bg-white/5 font-serif text-lg p-3 rounded-xl transition"><i className="fas fa-leaf text-[#e6c35c] w-5 text-center text-sm"></i> <span>Ayurvedic Rituals</span></a></li>
          <li><a href="#guide" onClick={closeDrawer} className="flex items-center gap-3 text-slate-200 hover:text-[#e6c35c] hover:bg-white/5 font-serif text-lg p-3 rounded-xl transition"><i className="fas fa-balance-scale text-[#e6c35c] w-5 text-center text-sm"></i> <span>Comparison Guide</span></a></li>
          <li><a href="#calculator" onClick={closeDrawer} className="flex items-center gap-3 text-slate-200 hover:text-[#e6c35c] hover:bg-white/5 font-serif text-lg p-3 rounded-xl transition"><i className="fas fa-calculator text-[#e6c35c] w-5 text-center text-sm"></i> <span>Package Builder</span></a></li>
          <li><a href="#gallery" onClick={closeDrawer} className="flex items-center gap-3 text-slate-200 hover:text-[#e6c35c] hover:bg-white/5 font-serif text-lg p-3 rounded-xl transition"><i className="fas fa-images text-[#e6c35c] w-5 text-center text-sm"></i> <span>Spa Gallery</span></a></li>
          <li><a href="#location" onClick={closeDrawer} className="flex items-center gap-3 text-slate-200 hover:text-[#e6c35c] hover:bg-white/5 font-serif text-lg p-3 rounded-xl transition"><i className="fas fa-map-marker-alt text-[#e6c35c] w-5 text-center text-sm"></i> <span>Directions &amp; Map</span></a></li>
        </ul>

        <div className="drawer-footer-actions p-5 border-t border-white/10 flex flex-col gap-2.5 bg-[#14221c]">
          <button 
            onClick={onToggleZen} 
            className="zen-audio-btn w-full bg-[#e6c35c]/10 hover:bg-[#e6c35c]/20 border border-[#e6c35c]/35 text-[#e6c35c] text-xs font-semibold py-2.5 rounded-full flex items-center justify-center gap-2 transition cursor-pointer"
          >
            <i className="fas fa-water text-sm"></i>
            <span>{isZenPlaying ? 'Mute Zen Audio' : 'Play Zen Singing Bowls'}</span>
          </button>
          <button 
            onClick={() => { closeDrawer(); onOpenBooking('Swedish Massage', '₹1,999'); }}
            className="btn-primary w-full bg-gradient-to-r from-[#fff3d1] via-[#e6c35c] to-[#b89128] text-slate-950 font-bold text-sm py-3 rounded-full flex items-center justify-center gap-2 shadow-[0_4px_16px_rgba(230,195,92,0.4)] cursor-pointer"
          >
            <i className="far fa-calendar-check text-sm"></i>
            <span>Book Appointment</span>
          </button>
          <a 
            href="tel:09945264342" 
            className="btn-secondary w-full bg-white/5 hover:bg-white/10 border border-white/15 text-slate-200 text-sm font-semibold py-2.5 rounded-full flex items-center justify-center gap-2 transition"
          >
            <i className="fas fa-phone-alt text-[#e6c35c] text-sm"></i>
            <span>Call: 099452 64342</span>
          </a>
        </div>
      </nav>
    </>
  );
}
