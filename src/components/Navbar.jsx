import React, { useState, useEffect } from 'react';
import { 
  Sparkles, 
  Menu, 
  X, 
  Phone, 
  Calendar, 
  Volume2, 
  VolumeX, 
  MapPin, 
  Heart, 
  Compass, 
  HelpCircle, 
  Image, 
  Flame, 
  ShieldCheck 
} from 'lucide-react';

export default function Navbar({ onOpenBooking, isZenPlaying, onToggleZen }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeDrawer = () => setIsDrawerOpen(false);

  return (
    <>
      <header className={`site-header sticky top-0 z-40 w-full transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#050807]/95 border-b border-[#e6c35c]/25 shadow-[0_8px_30px_rgba(0,0,0,0.8)] backdrop-blur-xl' 
          : 'bg-[#0a110e]/90 border-b border-white/10 backdrop-blur-lg'
      }`}>
        <div className="max-w-7xl mx-auto px-3.5 sm:px-6 h-14 sm:h-20 flex items-center justify-between gap-3">
          
          {/* Brand Logo */}
          <a href="#" className="flex items-center gap-2.5 group flex-shrink-0" aria-label="Bliss Spa Home">
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-[#d4af37] to-[#8c7322] flex items-center justify-center text-black font-serif font-black text-base sm:text-xl shadow-[0_0_15px_rgba(230,195,92,0.35)] group-hover:scale-105 transition-transform duration-300">
              B
            </div>
            <div>
              <span className="font-serif text-lg sm:text-2xl font-bold tracking-wider text-white leading-none block">
                BLISS SPA
              </span>
              <span className="text-[9px] sm:text-[11px] tracking-[0.2em] text-[#e6c35c] uppercase font-semibold block mt-0.5">
                BTM 1ST STAGE
              </span>
            </div>
          </a>

          {/* Desktop Capsule Navigation */}
          <nav className="hidden lg:flex items-center justify-center flex-1 max-w-2xl px-2" aria-label="Primary Navigation">
            <div className="inline-flex items-center gap-1 bg-[#14221c]/80 border border-[#e6c35c]/30 rounded-full p-1.5 backdrop-blur-md shadow-lg">
              <a href="#matcher" className="text-slate-200 hover:text-white hover:bg-white/10 text-xs xl:text-sm font-medium px-3 xl:px-4 py-1.5 rounded-full transition-all">De-Stress</a>
              <a href="#therapies" className="text-slate-200 hover:text-white hover:bg-white/10 text-xs xl:text-sm font-medium px-3 xl:px-4 py-1.5 rounded-full transition-all">Therapies</a>
              <a href="#thai-massage" className="text-slate-200 hover:text-white hover:bg-white/10 text-xs xl:text-sm font-medium px-3 xl:px-4 py-1.5 rounded-full transition-all">Thai Ritual</a>
              <a href="#ayurveda" className="text-slate-200 hover:text-white hover:bg-white/10 text-xs xl:text-sm font-medium px-3 xl:px-4 py-1.5 rounded-full transition-all">Ayurveda</a>
              <a href="#guide" className="text-slate-200 hover:text-white hover:bg-white/10 text-xs xl:text-sm font-medium px-3 xl:px-4 py-1.5 rounded-full transition-all">Spa Guide</a>
              <a href="#location" className="text-slate-200 hover:text-white hover:bg-white/10 text-xs xl:text-sm font-medium px-3 xl:px-4 py-1.5 rounded-full transition-all">Location</a>
            </div>
          </nav>

          {/* Header Action Buttons */}
          <div className="flex items-center gap-2 sm:gap-2.5 flex-shrink-0">
            {/* Zen Sound Button (XL Screens) */}
            <button
              onClick={onToggleZen}
              className={`hidden xl:inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold transition cursor-pointer border ${
                isZenPlaying 
                  ? 'bg-[#e6c35c] text-slate-950 border-[#e6c35c] shadow-[0_0_15px_rgba(230,195,92,0.5)]' 
                  : 'bg-[#e6c35c]/10 hover:bg-[#e6c35c]/20 border-[#e6c35c]/35 text-[#e6c35c]'
              }`}
              title="Toggle Zen 432Hz Sound"
            >
              {isZenPlaying ? <Volume2 className="w-3.5 h-3.5" /> : <VolumeX className="w-3.5 h-3.5" />}
              <span>{isZenPlaying ? 'Zen Active' : 'Zen Sound'}</span>
            </button>

            {/* Direct Phone Pill (Desktop) */}
            <a
              href="tel:09945264342"
              className="hidden lg:inline-flex items-center gap-2 bg-white/5 hover:bg-[#e6c35c]/15 border border-[#e6c35c]/35 text-[#fff2cc] px-3.5 xl:px-4 py-1.5 rounded-full text-xs xl:text-sm font-semibold transition backdrop-blur-sm"
              title="Call Concierge: 099452 64342"
            >
              <Phone className="w-3.5 h-3.5 text-[#e6c35c]" />
              <span>099452 64342</span>
            </a>

            {/* Book Therapy CTA (Desktop / Tablet) */}
            <button
              onClick={() => onOpenBooking('Swedish Massage', '₹1,999')}
              className="hidden sm:inline-flex items-center gap-2 bg-gradient-to-r from-[#fff3d1] via-[#e6c35c] to-[#b89128] text-slate-950 font-bold text-xs sm:text-sm px-4 sm:px-5 py-2 sm:py-2.5 rounded-full shadow-[0_4px_18px_rgba(230,195,92,0.4)] hover:shadow-[0_6px_26px_rgba(230,195,92,0.65)] hover:scale-105 active:scale-95 transition-all cursor-pointer"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book Therapy</span>
            </button>

            {/* Mobile Hamburger Menu Toggle (Clean, Non-congested) */}
            <button
              onClick={() => setIsDrawerOpen(true)}
              className="lg:hidden w-9 h-9 rounded-full bg-white/5 hover:bg-white/10 border border-white/15 text-white flex items-center justify-center transition active:scale-95"
              aria-label="Toggle navigation menu"
            >
              <Menu className="w-4 h-4" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Backdrop */}
      <div 
        className={`fixed inset-0 z-50 bg-black/80 backdrop-blur-sm transition-opacity duration-300 ${
          isDrawerOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={closeDrawer}
      />

      {/* Mobile Slide-Out Drawer */}
      <nav 
        className={`fixed top-0 right-0 w-[84%] max-w-[340px] h-full bg-[#0d1512] border-l border-white/10 shadow-[-15px_0_40px_rgba(0,0,0,0.8)] z-50 flex flex-col justify-between overflow-y-auto transition-transform duration-300 ${
          isDrawerOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        aria-label="Mobile Navigation Drawer"
      >
        <div className="flex items-center justify-between p-4 border-b border-white/10 bg-[#14221c]">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#d4af37] to-[#8c7322] flex items-center justify-center text-black font-serif font-black text-sm">
              B
            </div>
            <div>
              <strong className="font-serif text-base text-white block leading-none">BLISS SPA</strong>
              <span className="text-[9px] tracking-[0.2em] text-[#e6c35c] uppercase font-semibold">BTM 1ST STAGE</span>
            </div>
          </div>
          <button 
            onClick={closeDrawer}
            className="w-8 h-8 rounded-full bg-white/5 border border-white/15 text-slate-300 hover:text-white flex items-center justify-center transition active:scale-95" 
            aria-label="Close menu"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <ul className="p-3.5 flex flex-col gap-1 list-none flex-1 overflow-y-auto">
          <li>
            <a href="#hero" onClick={closeDrawer} className="flex items-center gap-3 text-slate-200 hover:text-[#e6c35c] hover:bg-white/5 text-sm font-medium p-2.5 rounded-xl transition">
              <Compass className="w-4 h-4 text-[#e6c35c]" />
              <span>Sanctuary Home</span>
            </a>
          </li>
          <li>
            <a href="#matcher" onClick={closeDrawer} className="flex items-center gap-3 text-slate-200 hover:text-[#e6c35c] hover:bg-white/5 text-sm font-medium p-2.5 rounded-xl transition">
              <Heart className="w-4 h-4 text-[#e6c35c]" />
              <span>De-Stress Matcher</span>
            </a>
          </li>
          <li>
            <a href="#therapies" onClick={closeDrawer} className="flex items-center gap-3 text-slate-200 hover:text-[#e6c35c] hover:bg-white/5 text-sm font-medium p-2.5 rounded-xl transition">
              <Sparkles className="w-4 h-4 text-[#e6c35c]" />
              <span>All Therapies</span>
            </a>
          </li>
          <li>
            <a href="#thai-massage" onClick={closeDrawer} className="flex items-center gap-3 text-slate-200 hover:text-[#e6c35c] hover:bg-white/5 text-sm font-medium p-2.5 rounded-xl transition">
              <Flame className="w-4 h-4 text-[#e6c35c]" />
              <span>Traditional Thai Massage</span>
            </a>
          </li>
          <li>
            <a href="#ayurveda" onClick={closeDrawer} className="flex items-center gap-3 text-slate-200 hover:text-[#e6c35c] hover:bg-white/5 text-sm font-medium p-2.5 rounded-xl transition">
              <ShieldCheck className="w-4 h-4 text-[#e6c35c]" />
              <span>Ayurvedic Rituals</span>
            </a>
          </li>
          <li>
            <a href="#guide" onClick={closeDrawer} className="flex items-center gap-3 text-slate-200 hover:text-[#e6c35c] hover:bg-white/5 text-sm font-medium p-2.5 rounded-xl transition">
              <Compass className="w-4 h-4 text-[#e6c35c]" />
              <span>Therapy Comparison Guide</span>
            </a>
          </li>
          <li>
            <a href="#calculator" onClick={closeDrawer} className="flex items-center gap-3 text-slate-200 hover:text-[#e6c35c] hover:bg-white/5 text-sm font-medium p-2.5 rounded-xl transition">
              <Sparkles className="w-4 h-4 text-[#e6c35c]" />
              <span>Custom Package Builder</span>
            </a>
          </li>
          <li>
            <a href="#gallery" onClick={closeDrawer} className="flex items-center gap-3 text-slate-200 hover:text-[#e6c35c] hover:bg-white/5 text-sm font-medium p-2.5 rounded-xl transition">
              <Image className="w-4 h-4 text-[#e6c35c]" />
              <span>Photo Gallery</span>
            </a>
          </li>
          <li>
            <a href="#faq" onClick={closeDrawer} className="flex items-center gap-3 text-slate-200 hover:text-[#e6c35c] hover:bg-white/5 text-sm font-medium p-2.5 rounded-xl transition">
              <HelpCircle className="w-4 h-4 text-[#e6c35c]" />
              <span>Guest FAQ</span>
            </a>
          </li>
          <li>
            <a href="#location" onClick={closeDrawer} className="flex items-center gap-3 text-slate-200 hover:text-[#e6c35c] hover:bg-white/5 text-sm font-medium p-2.5 rounded-xl transition">
              <MapPin className="w-4 h-4 text-[#e6c35c]" />
              <span>Directions &amp; Map</span>
            </a>
          </li>
        </ul>

        <div className="p-4 border-t border-white/10 flex flex-col gap-2.5 bg-[#14221c]">
          <button 
            onClick={onToggleZen} 
            className="w-full bg-[#e6c35c]/10 hover:bg-[#e6c35c]/20 border border-[#e6c35c]/35 text-[#e6c35c] text-xs font-semibold py-2.5 rounded-full flex items-center justify-center gap-2 transition"
          >
            {isZenPlaying ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
            <span>{isZenPlaying ? 'Mute Zen Audio' : 'Play Zen Singing Bowls'}</span>
          </button>
          
          <button 
            onClick={() => { closeDrawer(); onOpenBooking('Swedish Massage', '₹1,999'); }}
            className="w-full bg-gradient-to-r from-[#fff3d1] via-[#e6c35c] to-[#b89128] text-slate-950 font-bold text-xs py-3 rounded-full flex items-center justify-center gap-2 shadow-[0_4px_16px_rgba(230,195,92,0.4)]"
          >
            <Calendar className="w-4 h-4" />
            <span>Book Instant Relief</span>
          </button>

          <a 
            href="tel:09945264342" 
            className="w-full bg-white/5 hover:bg-white/10 border border-white/15 text-slate-200 text-xs font-semibold py-2 rounded-full flex items-center justify-center gap-2 transition"
          >
            <Phone className="w-3.5 h-3.5 text-[#e6c35c]" />
            <span>Call: 099452 64342</span>
          </a>
        </div>
      </nav>
    </>
  );
}
