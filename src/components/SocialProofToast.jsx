import React, { useState, useEffect } from 'react';
import { BadgeCheck, X } from 'lucide-react';

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
    <div className="fixed bottom-20 left-4 z-30 hidden sm:flex items-center gap-3 bg-[#0d1612]/95 border border-[#cfa559]/25 rounded-2xl p-3.5 shadow-2xl backdrop-blur-md max-w-sm animate-fade-in transition-all">
      <div className="w-10 h-10 rounded-full bg-[#cfa559]/15 border border-[#cfa559]/25 flex items-center justify-center shrink-0">
        <BadgeCheck className="w-5 h-5 text-[#dfc282]" />
      </div>

      <div className="text-left flex-1 min-w-0 pr-2">
        <p className="text-xs font-semibold text-white truncate">
          {current.name} <span className="text-[10px] text-slate-400 font-normal">from {current.location}</span>
        </p>
        <p className="text-[11px] text-[#dfc282] truncate">
          Reserved {current.therapy}
        </p>
        <span className="text-[9px] text-slate-400 font-mono">
          Verified reservation • {current.timeAgo}
        </span>
      </div>

      <button
        type="button"
        onClick={() => setIsDismissed(true)}
        className="w-7 h-7 rounded-full hover:bg-white/10 active:scale-90 text-slate-400 hover:text-white flex items-center justify-center transition-all shrink-0"
        title="Dismiss"
        aria-label="Dismiss notification"
      >
        <X className="w-3.5 h-3.5" />
      </button>
    </div>
  );
}
