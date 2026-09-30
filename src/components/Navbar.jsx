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

const PRIMARY_NAV = [
  { id: 'matcher', label: 'De-Stress', href: '#matcher' },
  { id: 'therapies', label: 'Therapies', href: '#therapies' },
  { id: 'thai-massage', label: 'Thai Ritual', href: '#thai-massage' },
  { id: 'ayurveda', label: 'Ayurveda', href: '#ayurveda' },
  { id: 'guide', label: 'Spa Guide', href: '#guide' },
  { id: 'location', label: 'Location', href: '#location' },
];

const DRAWER_ITEMS = [
  { id: 'hero', label: 'Sanctuary Home', href: '#hero', icon: Compass },
  { id: 'matcher', label: 'De-Stress Matcher', href: '#matcher', icon: Heart },
  { id: 'therapies', label: 'All Therapies', href: '#therapies', icon: Sparkles },
  { id: 'thai-massage', label: 'Traditional Thai Massage', href: '#thai-massage', icon: Flame },
  { id: 'ayurveda', label: 'Ayurvedic Rituals', href: '#ayurveda', icon: ShieldCheck },
  { id: 'guide', label: 'Therapy Comparison Guide', href: '#guide', icon: Compass },
  { id: 'calculator', label: 'Custom Package Builder', href: '#calculator', icon: Sparkles },
  { id: 'gallery', label: 'Photo Gallery', href: '#gallery', icon: Image },
  { id: 'faq', label: 'Guest FAQ', href: '#faq', icon: HelpCircle },
  { id: 'location', label: 'Directions & Map', href: '#location', icon: MapPin },
];

export default function Navbar({ onOpenBooking, isZenPlaying, onToggleZen, onToggleZenAudio }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const handleToggleZen = onToggleZen || onToggleZenAudio;

  // Track scroll position for header glass elevation and active section scrollspy
  useEffect(() => {
    const sectionIds = ['location', 'faq', 'gallery', 'calculator', 'guide', 'ayurveda', 'thai-massage', 'therapies', 'matcher'];

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // If at top hero area, reset active section
      if (window.scrollY < 180) {
        setActiveSection('');
        return;
      }

      // If at bottom of page, highlight location
      if (window.innerHeight + Math.round(window.scrollY) >= document.documentElement.scrollHeight - 80) {
        setActiveSection('location');
        return;
      }

      const scrollPosition = window.scrollY + 140;

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el && scrollPosition >= el.offsetTop) {
          if (['matcher', 'therapies', 'thai-massage', 'ayurveda', 'guide', 'location'].includes(id)) {
            setActiveSection(id);
          } else if (id === 'calculator' || id === 'gallery') {
            setActiveSection('guide');
          } else if (id === 'faq') {
            setActiveSection('location');
          }
          return;
        }
      }
      setActiveSection('');
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scroll handler with sticky header offset
  const scrollToSection = (e, href) => {
    if (e && e.preventDefault) e.preventDefault();
    const targetId = href.replace('#', '');
    const elem = document.getElementById(targetId);
    if (elem) {
      const yOffset = -76;
      const y = elem.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
      setActiveSection(targetId);
    } else if (href === '#hero' || href === '#') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setActiveSection('');
    }
  };

  // Prevent background scroll and support ESC key when drawer is open
  useEffect(() => {
    if (isDrawerOpen) {
      document.body.style.overflow = 'hidden';
      const handleKeyDown = (e) => {
        if (e.key === 'Escape') setIsDrawerOpen(false);
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        document.body.style.overflow = '';
        window.removeEventListener('keydown', handleKeyDown);
      };
    } else {
      document.body.style.overflow = '';
    }
  }, [isDrawerOpen]);

  const closeDrawer = () => setIsDrawerOpen(false);

  return (
    <>
      <header className={`site-header sticky top-0 z-40 w-full transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#050807]/95 border-b border-[#cfa559]/25 shadow-[0_8px_32px_rgba(0,0,0,0.8)] backdrop-blur-xl' 
          : 'bg-[#0a110e]/90 border-b border-white/10 backdrop-blur-lg'
      }`}>
        <div className="max-w-7xl mx-auto px-3.5 sm:px-6 h-14 sm:h-20 flex items-center justify-between gap-2 lg:gap-4">
          
          {/* Brand Logo */}
          <a 
            href="#" 
            onClick={(e) => scrollToSection(e, '#')}
            className="flex items-center gap-2.5 group flex-shrink-0" 
            aria-label="Bliss Spa Home"
          >
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-[#dfc282] via-[#cfa559] to-[#8c6b22] flex items-center justify-center text-[#060f0a] font-serif font-black text-base sm:text-xl shadow-[0_0_14px_rgba(197,160,89,0.3)] group-hover:scale-105 group-hover:shadow-[0_0_18px_rgba(197,160,89,0.45)] transition-all duration-300">
              B
            </div>
            <div>
              <span className="font-serif text-lg sm:text-2xl font-bold tracking-wider text-white leading-none block">
                BLISS SPA
              </span>
              <span className="text-[9px] sm:text-[11px] tracking-[0.2em] text-[#dfc282] uppercase font-semibold block mt-0.5">
                BTM 1ST STAGE
              </span>
            </div>
          </a>

          {/* Desktop Capsule Navigation (Responsive: scales seamlessly between lg and xl) */}
          <nav className="hidden lg:flex items-center justify-center flex-1 max-w-2xl px-1 xl:px-3" aria-label="Primary Navigation">
            <div className="inline-flex items-center gap-0.5 xl:gap-1 bg-[#09120e]/85 border border-white/10 hover:border-[#cfa559]/30 rounded-full p-1 shadow-[0_4px_24px_rgba(0,0,0,0.6),inset_0_1px_1px_rgba(255,255,255,0.08)] backdrop-blur-xl transition-all duration-300">
              {PRIMARY_NAV.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <a
                    key={item.id}
                    href={item.href}
                    onClick={(e) => scrollToSection(e, item.href)}
                    className={`relative px-2.5 xl:px-3.5 py-1.5 rounded-full text-xs xl:text-[13px] font-medium transition-all duration-200 whitespace-nowrap select-none ${
                      isActive
                        ? 'bg-gradient-to-r from-[#dfc282] via-[#cfa559] to-[#b38838] text-[#060f0a] font-bold shadow-[0_2px_12px_rgba(207,165,89,0.35)] scale-[1.02]'
                        : 'text-slate-300 hover:text-[#dfc282] hover:bg-white/[0.08]'
                    }`}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    {item.label}
                  </a>
                );
              })}
            </div>
          </nav>

          {/* Header Action Buttons */}
          <div className="flex items-center gap-2 sm:gap-2.5 flex-shrink-0">
            {/* Zen Sound Button (2XL Screens to avoid crowding) */}
            <button
              type="button"
              onClick={handleToggleZen}
              className={`hidden 2xl:inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold transition cursor-pointer border ${
                isZenPlaying 
                  ? 'bg-[#cfa559] text-[#060f0a] border-[#cfa559] shadow-[0_0_12px_rgba(197,160,89,0.3)]' 
                  : 'bg-[#cfa559]/10 hover:bg-[#cfa559]/20 border-[#cfa559]/35 text-[#dfc282]'
              }`}
              title="Toggle Zen 432Hz Sound"
            >
              {isZenPlaying ? <Volume2 className="w-3.5 h-3.5" /> : <VolumeX className="w-3.5 h-3.5" />}
              <span>{isZenPlaying ? 'Zen Active' : 'Zen Sound'}</span>
            </button>

            {/* Direct Phone Pill (Desktop XL+ - hidden on lg to preserve generous capsule breathing room) */}
            <a
              href="tel:09945264342"
              className="hidden xl:inline-flex items-center gap-2 bg-white/5 hover:bg-[#cfa559]/15 border border-[#cfa559]/30 hover:border-[#cfa559]/55 text-[#e8d4a2] px-3.5 py-1.5 rounded-full text-xs xl:text-sm font-semibold transition backdrop-blur-sm shadow-[0_2px_8px_rgba(0,0,0,0.3)]"
              title="Call Concierge: 099452 64342"
            >
              <Phone className="w-3.5 h-3.5 text-[#dfc282]" />
              <span>099452 64342</span>
            </a>

            {/* Book Therapy CTA (Desktop / Tablet) */}
            <button
              type="button"
              onClick={() => onOpenBooking('Swedish Massage', '₹1,999')}
              className="hidden sm:inline-flex items-center gap-2 bg-gradient-to-r from-[#dfc282] via-[#cfa559] to-[#b38838] text-[#060f0a] font-bold text-xs sm:text-sm px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-full shadow-[0_4px_16px_rgba(197,160,89,0.22)] hover:shadow-[0_6px_22px_rgba(197,160,89,0.32)] hover:brightness-105 active:scale-95 transition-all cursor-pointer whitespace-nowrap"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book Therapy</span>
            </button>

            {/* Mobile Hamburger Menu Toggle (Touch Target 44x44px min) */}
            <button
              type="button"
              onClick={() => setIsDrawerOpen(true)}
              className="lg:hidden w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 border border-white/15 text-white flex items-center justify-center transition active:scale-90"
              aria-label="Toggle navigation menu"
              aria-expanded={isDrawerOpen}
            >
              <Menu className="w-5 h-5 text-[#dfc282]" />
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
        aria-hidden={!isDrawerOpen}
      />

      {/* Mobile Slide-Out Drawer */}
      <nav 
        className={`fixed top-0 right-0 w-[84%] max-w-[340px] h-full bg-[#0d1612] border-l border-white/10 shadow-[-15px_0_40px_rgba(0,0,0,0.85)] z-50 flex flex-col justify-between overflow-y-auto transition-transform duration-300 ${
          isDrawerOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        aria-label="Mobile Navigation Drawer"
      >
        <div className="flex items-center justify-between p-4 pt-[max(1rem,env(safe-area-inset-top))] border-b border-white/10 bg-[#14221c]">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#dfc282] via-[#cfa559] to-[#8c6b22] flex items-center justify-center text-[#060f0a] font-serif font-black text-sm shadow-[0_0_10px_rgba(197,160,89,0.3)]">
              B
            </div>
            <div>
              <strong className="font-serif text-base text-white block leading-none">BLISS SPA</strong>
              <span className="text-[9px] tracking-[0.2em] text-[#dfc282] uppercase font-semibold">BTM 1ST STAGE</span>
            </div>
          </div>
          <button 
            type="button"
            onClick={closeDrawer}
            className="w-9 h-9 rounded-full bg-white/5 hover:bg-white/10 border border-white/15 text-slate-300 hover:text-white flex items-center justify-center transition active:scale-90" 
            aria-label="Close menu"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <ul className="p-3.5 flex flex-col gap-1 list-none flex-1 overflow-y-auto">
          {DRAWER_ITEMS.map((item) => {
            const isActive = activeSection === item.id;
            const Icon = item.icon;
            return (
              <li key={item.id}>
                <a 
                  href={item.href} 
                  onClick={(e) => {
                    scrollToSection(e, item.href);
                    closeDrawer();
                  }} 
                  className={`flex items-center gap-3 text-sm font-medium p-2.5 min-h-[44px] rounded-xl transition ${
                    isActive
                      ? 'bg-[#cfa559]/15 text-[#dfc282] border border-[#cfa559]/30 font-semibold shadow-[inset_0_0_12px_rgba(207,165,89,0.15)]'
                      : 'text-slate-200 hover:text-[#dfc282] hover:bg-white/5 active:bg-white/10'
                  }`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  <Icon className="w-4 h-4 text-[#dfc282] shrink-0" />
                  <span className="flex-1">{item.label}</span>
                  {isActive && (
                    <span className="w-1.5 h-1.5 rounded-full bg-[#dfc282] shadow-[0_0_6px_#dfc282]" />
                  )}
                </a>
              </li>
            );
          })}
        </ul>

        <div className="p-4 pb-[max(1.5rem,env(safe-area-inset-bottom))] border-t border-white/10 flex flex-col gap-2.5 bg-[#14221c]">
          <button 
            type="button"
            onClick={handleToggleZen} 
            className="w-full min-h-[44px] bg-[#cfa559]/10 hover:bg-[#cfa559]/20 border border-[#cfa559]/35 text-[#dfc282] text-xs font-semibold py-2.5 rounded-full flex items-center justify-center gap-2 transition active:scale-98"
          >
            {isZenPlaying ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
            <span>{isZenPlaying ? 'Mute Zen Audio' : 'Play Zen Singing Bowls'}</span>
          </button>
          
          <button 
            type="button"
            onClick={() => { closeDrawer(); onOpenBooking('Swedish Massage', '₹1,999'); }}
            className="w-full min-h-[44px] bg-gradient-to-r from-[#dfc282] via-[#cfa559] to-[#b38838] text-[#060f0a] font-bold text-xs py-3 rounded-full flex items-center justify-center gap-2 shadow-[0_4px_16px_rgba(197,160,89,0.25)] hover:brightness-105 active:scale-98 transition"
          >
            <Calendar className="w-4 h-4 text-[#060f0a] shrink-0" />
            <span>Book Instant Relief</span>
          </button>

          <div className="grid grid-cols-2 gap-2">
            <a 
              href="tel:09945264342" 
              className="min-h-[42px] bg-white/5 hover:bg-white/10 border border-white/15 text-slate-200 text-[11px] font-semibold py-2 px-1 rounded-full flex items-center justify-center gap-1 transition active:scale-98 whitespace-nowrap"
              title="Call Line 1: 099452 64342"
            >
              <Phone className="w-3 h-3 text-[#dfc282] shrink-0" />
              <span className="whitespace-nowrap font-mono tracking-tight">099452 64342</span>
            </a>
            <a 
              href="tel:08095266198" 
              className="min-h-[42px] bg-white/5 hover:bg-white/10 border border-white/15 text-slate-200 text-[11px] font-semibold py-2 px-1 rounded-full flex items-center justify-center gap-1 transition active:scale-98 whitespace-nowrap"
              title="Call Line 2: 080 9526 6198"
            >
              <Phone className="w-3 h-3 text-[#dfc282] shrink-0" />
              <span className="whitespace-nowrap font-mono tracking-tight">080 9526 6198</span>
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}
