import React, { useState, useEffect } from 'react';
import { Sparkles, X } from 'lucide-react';

const mockProofs = [
  { name: 'Dr. Arjun M.', location: 'Koramangala', therapy: 'Deep Tissue Sports Recovery', timeAgo: '8m ago' },
  { name: 'Priya & Rohit', location: 'HSR Layout', therapy: 'VIP Couples Suite Sanctuary', timeAgo: '14m ago' },
  { name: 'Shreya K.', location: 'BTM 2nd Stage', therapy: 'Aromatherapy Calming Ritual', timeAgo: '21m ago' },
  { name: 'Vikram S.', location: 'Bannerghatta Rd', therapy: 'Traditional Thai Yoga Massage', timeAgo: '32m ago' },
  { name: 'Nandini R.', location: 'Jayanagar', therapy: 'Ayurvedic Abhyanga & Shirodhara', timeAgo: '45m ago' }
];

export default function SocialProofToast({ onBookTherapy }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    if (isDismissed) return;

    // Show first toast after 4 seconds
    const initialTimer = setTimeout(() => {
      setIsVisible(true);
    }, 4000);

    // Rotate toasts every 14 seconds
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % mockProofs.length);
        setIsVisible(true);
      }, 800);
    }, 14000);

    return () => {
      clearTimeout(initialTimer);
      clearInterval(interval);
    };
  }, [isDismissed]);

  if (isDismissed || !isVisible) return null;

  const current = mockProofs[currentIndex];

  return (
    <div className="fixed bottom-20 left-4 z-30 hidden sm:flex items-center gap-3 bg-[#0d1612]/95 border border-[#e6c35c]/30 rounded-2xl p-3.5 shadow-2xl backdrop-blur-md max-w-sm animate-fade-in transition-all">
      <div className="w-10 h-10 rounded-full bg-[#e6c35c]/15 border border-[#e6c35c]/30 flex items-center justify-center shrink-0">
        <Sparkles className="w-4 h-4 text-[#e6c35c]" />
      </div>

      <div className="text-left flex-1 min-w-0 pr-2">
        <p className="text-xs font-semibold text-white truncate">
          {current.name} <span className="text-[10px] text-slate-400 font-normal">from {current.location}</span>
        </p>
        <p className="text-[11px] text-[#e6c35c] truncate">
          Reserved {current.therapy}
        </p>
        <span className="text-[9px] text-slate-400 font-mono">
          Verified reservation • {current.timeAgo}
        </span>
      </div>

      <button
        onClick={() => setIsDismissed(true)}
        className="w-5 h-5 rounded-full hover:bg-white/10 text-slate-400 hover:text-white flex items-center justify-center transition-colors"
        title="Dismiss"
      >
        <X className="w-3 h-3" />
      </button>
    </div>
  );
}
