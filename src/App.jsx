import React, { useState, useEffect } from 'react';
import Lenis from 'lenis';

import { useZenAudio } from './hooks/useZenAudio';
import { useScrollReveal } from './hooks/useScrollReveal';

import ScrollProgressBar from './components/ScrollProgressBar';
import TopBanner from './components/TopBanner';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BookingStrip from './components/BookingStrip';
import SymptomMatcher from './components/SymptomMatcher';
import Therapies from './components/Therapies';
import ThaiMassage from './components/ThaiMassage';
import AyurvedaRituals from './components/AyurvedaRituals';
import ComparisonGuide from './components/ComparisonGuide';
import PackageBuilder from './components/PackageBuilder';
import Gallery from './components/Gallery';
import LocationMap from './components/LocationMap';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import MobileBottomNav from './components/MobileBottomNav';

import BookingModal from './components/BookingModal';
import AdminDashboardModal from './components/AdminDashboardModal';
import LightboxModal from './components/LightboxModal';
import SocialProofToast from './components/SocialProofToast';

export default function App() {
  // Lenis smooth scroll setup
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 2,
    });

    let animationFrameId;
    function raf(time) {
      lenis.raf(time);
      animationFrameId = requestAnimationFrame(raf);
    }
    animationFrameId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(animationFrameId);
      lenis.destroy();
    };
  }, []);

  // Zen 432Hz ambient audio hook
  const { isPlaying: isZenPlaying, toggleAudio: toggleZenAudio } = useZenAudio();

  // Mobile and desktop luxury scroll reveal observer
  useScrollReveal();

  // Booking Modal State
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('');
  const [selectedPrice, setSelectedPrice] = useState('');

  // Admin Dashboard State
  const [isAdminOpen, setIsAdminOpen] = useState(false);

  // Lightbox Modal State
  const [activeLightboxItem, setActiveLightboxItem] = useState(null);

  const handleOpenBooking = (service = '', price = '') => {
    setSelectedService(service);
    setSelectedPrice(price);
    setIsBookingOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingOpen(false);
    setSelectedService('');
    setSelectedPrice('');
  };

  return (
    <div className="min-h-screen bg-[#060a08] text-slate-100 font-sans selection:bg-[#cfa559] selection:text-[#060f0a]">
      {/* Luxury Golden Scroll Depth Tracker */}
      <ScrollProgressBar />

      {/* Top Notice Banner */}
      <TopBanner />

      {/* Main Sticky Glass Navigation */}
      <Navbar
        isZenPlaying={isZenPlaying}
        onToggleZen={toggleZenAudio}
        onToggleZenAudio={toggleZenAudio}
        onOpenBooking={() => handleOpenBooking()}
      />

      <main>
        {/* Hero Sanctuary Presentation */}
        <Hero onOpenBooking={handleOpenBooking} />

        {/* 5-Column Availability Booking Strip */}
        <BookingStrip onOpenBooking={handleOpenBooking} />

        {/* 4-7-8 Breathing Decompression & Symptom Matcher */}
        <SymptomMatcher 
          onOpenBooking={handleOpenBooking} 
          isZenPlaying={isZenPlaying}
          onToggleZen={toggleZenAudio}
        />

        {/* Signature Therapies Showcase */}
        <Therapies onOpenBooking={handleOpenBooking} />

        {/* Traditional Thai Massage Deep Dive */}
        <ThaiMassage onOpenBooking={handleOpenBooking} />

        {/* Ayurvedic Ancient Rituals & Shirodhara */}
        <AyurvedaRituals onOpenBooking={handleOpenBooking} />

        {/* Side-by-Side Comparison Guide */}
        <ComparisonGuide onOpenBooking={handleOpenBooking} />

        {/* Custom Spa Package Calculator */}
        <PackageBuilder onOpenBooking={handleOpenBooking} />

        {/* Sanctuary Visual Tour */}
        <Gallery onOpenLightbox={(item) => setActiveLightboxItem(item)} />

        {/* Precise Location & Live Google Maps */}
        <LocationMap onOpenBooking={handleOpenBooking} />

        {/* Frequently Asked Questions */}
        <FAQ onOpenBooking={handleOpenBooking} />
      </main>

      {/* Comprehensive Footer */}
      <Footer
        onOpenAdmin={() => setIsAdminOpen(true)}
        onOpenBooking={() => handleOpenBooking()}
      />

      {/* Mobile Floating Island Quick Action Bar */}
      <MobileBottomNav onOpenBooking={() => handleOpenBooking()} />

      {/* Live Social Proof Toast */}
      <SocialProofToast onBookTherapy={handleOpenBooking} />

      {/* Global Interactive Booking Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={handleCloseBooking}
        initialService={selectedService}
        initialPrice={selectedPrice}
      />

      {/* Front Desk Reception Dashboard */}
      <AdminDashboardModal
        isOpen={isAdminOpen}
        onClose={() => setIsAdminOpen(false)}
      />

      {/* Sanctuary Lightbox Image Zoom */}
      <LightboxModal
        item={activeLightboxItem}
        onClose={() => setActiveLightboxItem(null)}
      />
    </div>
  );
}
