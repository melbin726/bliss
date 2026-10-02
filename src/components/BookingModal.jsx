import React, { useState, useEffect } from 'react';
import { 
  X, 
  Calendar, 
  Clock, 
  Sparkles, 
  CheckCircle2, 
  User, 
  Phone, 
  MessageSquare, 
  Copy, 
  Check, 
  ShieldCheck,
  ChevronRight
} from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';
import { therapiesData } from '../data/therapiesData';
import CustomDropdown from './CustomDropdown';

export const SPA_LINES = [
  {
    id: 'line1',
    label: 'Reception Desk',
    display: '099452 64342',
    digits: '9945264342',
    waNumber: '919945264342',
    isMain: true
  },
  {
    id: 'line2',
    label: 'Concierge Desk',
    display: '080 9526 6198',
    digits: '8095266198',
    waNumber: '918095266198',
    isMain: false
  }
];

export default function BookingModal({
  isOpen,
  onClose,
  initialService = '',
  initialPrice = '',
  onBookingSuccess
}) {
  const defaultServiceName = initialService || therapiesData[0]?.name || therapiesData[0]?.title || 'Swedish Massage';
  const [service, setService] = useState(defaultServiceName);
  const [date, setDate] = useState('');
  const [time, setTime] = useState('11:00 AM');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [notes, setNotes] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [confirmedBooking, setConfirmedBooking] = useState(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (initialService) {
      setService(initialService);
    }
  }, [initialService]);

  useEffect(() => {
    const today = new Date().toISOString().split('T')[0];
    setDate(today);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const timeSlots = [
    '10:00 AM', '11:00 AM', '12:00 PM', '01:00 PM', 
    '02:00 PM', '03:00 PM', '04:00 PM', '05:00 PM', 
    '06:00 PM', '07:00 PM', '08:00 PM', '09:00 PM'
  ];

  const getCurrentPrice = () => {
    if (initialPrice && service === initialService) return initialPrice;
    const found = therapiesData.find(t => (t.name || t.title) === service);
    return found?.price || initialPrice || '₹1,999';
  };

  const getWhatsAppUrl = (targetWaNumber = '919945264342', booking = confirmedBooking) => {
    if (!booking) return '';
    const priceText = booking.price || getCurrentPrice();
    const msg = `*🌿 New Booking Request - Bliss Spa BTM Layout*%0A%0A` +
      `*Guest Name:* ${encodeURIComponent(booking.name)}%0A` +
      `*Phone Number:* ${encodeURIComponent(booking.phone)}%0A` +
      `*Treatment:* ${encodeURIComponent(booking.service)}%0A` +
      `*Date:* ${encodeURIComponent(booking.date)}%0A` +
      `*Time Slot:* ${encodeURIComponent(booking.time)}%0A` +
      `*Price:* ${encodeURIComponent(priceText)}%0A` +
      `*Booking Ref:* ${booking.id}%0A` +
      (booking.notes && booking.notes !== 'No specific requests' ? `*Preferences:* ${encodeURIComponent(booking.notes)}%0A%0A` : '%0A') +
      `_Please confirm my private suite. Thank you!_`;
    return `https://wa.me/${targetWaNumber}?text=${msg}`;
  };

  const getNativeSmsUrl = (targetNumber = '9945264342', booking = confirmedBooking) => {
    if (!booking) return '';
    const text = `BLISS SPA: Hi, I booked ${booking.service} on ${booking.date} at ${booking.time}. Ref: ${booking.id}. Guest: ${booking.name} (${booking.phone}). Pay ₹0 advance. Please confirm suite. Thank you!`;
    return `sms:${targetNumber}?&body=${encodeURIComponent(text)}`;
  };

  const sendBackgroundAlert = (booking) => {
    try {
      const tgConfig = JSON.parse(localStorage.getItem('bliss_telegram_config') || '{}');
      if (tgConfig?.botToken && tgConfig?.chatId) {
        const text = `🌿 *New Booking @ Bliss Spa BTM*\n\n` +
          `👤 *Guest:* ${booking.name}\n` +
          `📞 *Phone:* ${booking.phone}\n` +
          `💆 *Service:* ${booking.service}\n` +
          `📅 *Date:* ${booking.date} at ${booking.time}\n` +
          `🏷 *ID:* ${booking.id}\n` +
          `📝 *Notes:* ${booking.notes}`;

        fetch(`https://api.telegram.org/bot${tgConfig.botToken}/sendMessage`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ chat_id: tgConfig.chatId, text, parse_mode: 'Markdown' })
        }).catch(() => {});
      }

      if (typeof window !== 'undefined' && 'Notification' in window && Notification.permission === 'granted') {
        new Notification('🌿 Bliss Spa Booking Received', {
          body: `${booking.name} booked ${booking.service} for ${booking.time}`,
          icon: '/favicon.ico'
        });
      }
    } catch (e) {
      console.warn('Background alert notice:', e);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) return;

    const priceText = getCurrentPrice();

    const newBooking = {
      id: 'BK-' + Date.now().toString().slice(-6),
      timestamp: new Date().toISOString(),
      name: name.trim(),
      phone: phone.trim(),
      service,
      date,
      time,
      price: priceText,
      notes: notes.trim() || 'No specific requests',
      targetLine: SPA_LINES[0].display
    };

    try {
      const existing = JSON.parse(localStorage.getItem('bliss_spa_bookings') || '[]');
      existing.unshift(newBooking);
      localStorage.setItem('bliss_spa_bookings', JSON.stringify(existing));
    } catch (err) {
      console.error('Failed to save booking to localStorage', err);
    }

    setConfirmedBooking(newBooking);
    setIsSubmitted(true);
    if (onBookingSuccess) onBookingSuccess(newBooking);

    // Fire background notification if configured
    sendBackgroundAlert(newBooking);
  };

  const handleResetAndClose = () => {
    setIsSubmitted(false);
    setConfirmedBooking(null);
    setName('');
    setPhone('');
    setNotes('');
    setCopied(false);
    onClose();
  };

  const handleCopyBookingDetails = () => {
    if (!confirmedBooking) return;
    const text = `BLISS SPA BOOKING: ${confirmedBooking.service} on ${confirmedBooking.date} at ${confirmedBooking.time}. Ref: ${confirmedBooking.id}. Guest: ${confirmedBooking.name} (${confirmedBooking.phone}). Reception: 099452 64342 / 080 9526 6198. Pay: ₹0 Advance.`;
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const serviceDropdownOptions = [
    ...therapiesData.map((t) => ({
      value: t.name || t.title,
      label: t.name || t.title,
      badge: t.price,
      subtext: `${t.duration || '60 Mins'} • Private suite included`
    })),
    { value: 'Custom Spa Package', label: 'Custom Spa Package Builder', badge: 'Flexible', subtext: 'Choose therapies & duration' },
    { value: 'Quick Consultation / Reception Guidance', label: 'Consultation on Arrival', badge: 'Free', subtext: 'Decide treatment at front desk' }
  ];

  const timeDropdownOptions = timeSlots.map((slot) => ({
    value: slot,
    label: slot
  }));

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 xs:p-2 sm:p-4 overflow-y-auto bg-black/80 backdrop-blur-md animate-fade-in">
      <div 
        className="relative w-full max-w-lg bg-[#0e1713] border-t sm:border border-[#cfa559]/35 rounded-t-3xl sm:rounded-3xl p-5 xs:p-6 sm:p-7 shadow-[0_20px_50px_rgba(0,0,0,0.95)] overflow-y-auto max-h-[92dvh] sm:max-h-[90vh] pb-[max(1.5rem,env(safe-area-inset-bottom))] sm:pb-7"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Mobile Pull Handle */}
        <div className="sm:hidden w-12 h-1 rounded-full bg-white/25 mx-auto mb-3" />

        {/* Glow Accent */}
        <div className="absolute top-0 right-0 w-36 h-36 bg-[#cfa559]/15 rounded-full blur-3xl pointer-events-none" />

        {/* Close Button */}
        <button
          type="button"
          onClick={handleResetAndClose}
          className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 active:scale-90 text-white flex items-center justify-center transition-all z-10 cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSubmitted ? (
          <div>
            {/* Header: Short, Clear, High-Contrast */}
            <div className="mb-4 pr-8">
              <span className="inline-flex items-center gap-1.5 text-[11px] font-bold text-[#dfc282] uppercase tracking-wider mb-1">
                <Sparkles className="w-3.5 h-3.5" />
                Reserve Suite
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white leading-tight">
                Book Your Therapy
              </h3>
              <p className="text-xs text-[#dfc282] font-medium mt-1 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block shadow-[0_0_6px_#34d399]" />
                <span>₹0 advance • Pay at spa after treatment</span>
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-3.5">
              {/* Select Service */}
              <div>
                <CustomDropdown
                  label="Select Treatment"
                  value={service}
                  onChange={setService}
                  options={serviceDropdownOptions}
                  placeholder="Select a treatment"
                  icon={Sparkles}
                  required
                />
              </div>

              {/* Date & Time Grid */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-200 mb-1 flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-[#dfc282]" />
                    <span>Date</span>
                  </label>
                  <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    required
                    className="w-full min-h-[44px] bg-[#14221c] border border-white/20 rounded-xl px-3 py-2 text-sm text-white focus:outline-none focus:border-[#dfc282] focus:ring-1 focus:ring-[#dfc282] transition-colors"
                  />
                </div>

                <div>
                  <CustomDropdown
                    label="Preferred Time"
                    value={time}
                    onChange={setTime}
                    options={timeDropdownOptions}
                    placeholder="Select time"
                    icon={Clock}
                    required
                  />
                </div>
              </div>

              {/* Guest Name & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-200 mb-1 flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5 text-[#dfc282]" />
                    <span>Your Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    autoComplete="name"
                    autoCapitalize="words"
                    className="w-full min-h-[44px] bg-[#14221c] border border-white/20 rounded-xl px-3.5 py-2.5 text-sm text-white placeholder-slate-400 focus:outline-none focus:border-[#dfc282] focus:ring-1 focus:ring-[#dfc282] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-200 mb-1 flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5 text-[#dfc282]" />
                    <span>Phone Number</span>
                  </label>
                  <input
                    type="tel"
                    placeholder="10-digit mobile number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                    inputMode="tel"
                    autoComplete="tel"
                    className="w-full min-h-[44px] bg-[#14221c] border border-white/20 rounded-xl px-3.5 py-2.5 text-sm text-white placeholder-slate-400 focus:outline-none focus:border-[#dfc282] focus:ring-1 focus:ring-[#dfc282] transition-colors font-mono"
                  />
                </div>
              </div>

              {/* Focus Area / Notes */}
              <div>
                <label className="block text-xs font-semibold text-slate-200 mb-1">
                  Focus Area / Preferences <span className="text-slate-400 font-normal">(Optional)</span>
                </label>
                <input
                  type="text"
                  placeholder="e.g. Neck stiffness, medium pressure, female therapist"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full min-h-[42px] bg-[#14221c] border border-white/20 rounded-xl px-3.5 py-2 text-sm text-white placeholder-slate-400 focus:outline-none focus:border-[#dfc282] focus:ring-1 focus:ring-[#dfc282] transition-colors"
                />
              </div>

              {/* Trust & Guarantee Banner */}
              <div className="bg-[#14221c] border border-[#cfa559]/30 rounded-xl p-3 flex items-center justify-between gap-2 text-xs">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span className="text-white font-medium">100% Free Reservation</span>
                </div>
                <span className="text-[#dfc282] font-semibold text-[11px] bg-[#cfa559]/15 px-2 py-0.5 rounded-full border border-[#cfa559]/30">
                  Pay After Therapy
                </span>
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                className="w-full min-h-[48px] py-3 px-5 rounded-full bg-gradient-to-r from-[#dfc282] via-[#cfa559] to-[#b38838] text-[#060f0a] font-bold text-sm tracking-wide shadow-[0_4px_16px_rgba(207,165,89,0.3)] hover:brightness-105 active:scale-98 transition flex items-center justify-center gap-2 cursor-pointer mt-1"
              >
                <span>Confirm Reservation • ₹0 Advance</span>
                <Sparkles className="w-4 h-4 text-[#060f0a] shrink-0" />
              </button>

              {/* Reception Assistance Line */}
              <p className="text-[11px] text-center text-slate-300 pt-0.5">
                Questions? Call Reception:{' '}
                <a href="tel:09945264342" className="text-[#dfc282] font-bold hover:underline">
                  099452 64342
                </a>
              </p>
            </form>
          </div>
        ) : (
          /* VIP Confirmation Screen - Clean, High Contrast, User-Friendly */
          <div className="text-center pt-2">
            <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto mb-3 border border-emerald-500/40 shadow-[0_0_20px_rgba(16,185,129,0.3)]">
              <CheckCircle2 className="w-7 h-7" />
            </div>

            <h3 className="font-serif text-2xl font-bold text-white mb-1">
              Booking Reserved!
            </h3>
            <p className="text-xs text-slate-200 max-w-sm mx-auto mb-4">
              Thank you, <strong className="text-white">{confirmedBooking?.name}</strong>. Your private suite is scheduled.
            </p>

            {/* High-Contrast VIP Summary Card */}
            <div className="bg-[#14221c] border border-[#cfa559]/30 rounded-2xl p-4 text-left mb-4 text-xs space-y-2.5 shadow-xl">
              <div className="flex items-center justify-between border-b border-white/10 pb-2">
                <span className="text-slate-300 font-medium">Treatment:</span>
                <span className="text-white font-bold text-sm text-right">{confirmedBooking?.service}</span>
              </div>
              <div className="flex items-center justify-between border-b border-white/10 pb-2">
                <span className="text-slate-300 font-medium">Date &amp; Time:</span>
                <span className="text-[#dfc282] font-semibold">{confirmedBooking?.date} at {confirmedBooking?.time}</span>
              </div>
              <div className="flex items-center justify-between border-b border-white/10 pb-2">
                <span className="text-slate-300 font-medium">Guest:</span>
                <span className="text-white font-medium">{confirmedBooking?.name} ({confirmedBooking?.phone})</span>
              </div>
              <div className="flex items-center justify-between border-b border-white/10 pb-2">
                <span className="text-slate-300 font-medium">Amount Due:</span>
                <span className="text-emerald-400 font-bold font-mono text-sm">{confirmedBooking?.price} (Pay at Spa)</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-300 font-medium">Reference Code:</span>
                <span className="text-[#dfc282] font-mono font-bold tracking-wider">{confirmedBooking?.id}</span>
              </div>
            </div>

            {/* Primary Action: 1-Tap Official WhatsApp Notification */}
            <div className="space-y-2 mb-3">
              <a
                href={getWhatsAppUrl('919945264342')}
                target="_blank"
                rel="noreferrer"
                className="w-full min-h-[46px] py-2.5 px-4 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-black font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-[0_4px_16px_rgba(37,211,102,0.35)] active:scale-95 transition cursor-pointer"
              >
                <WhatsAppIcon className="w-4 h-4 shrink-0 fill-current" />
                <span>Send Booking via WhatsApp</span>
              </a>

              {/* Secondary Actions Grid */}
              <div className="grid grid-cols-2 gap-2">
                <a
                  href="tel:09945264342"
                  className="min-h-[42px] py-2 px-3 rounded-xl bg-white/10 hover:bg-white/15 border border-white/15 text-white font-medium text-xs flex items-center justify-center gap-1.5 transition active:scale-95"
                >
                  <Phone className="w-3.5 h-3.5 text-[#dfc282] shrink-0" />
                  <span>Call Reception</span>
                </a>

                <button
                  type="button"
                  onClick={() => handleSendSMS('9945264342')}
                  className="min-h-[42px] py-2 px-3 rounded-xl bg-white/10 hover:bg-white/15 border border-white/15 text-white font-medium text-xs flex items-center justify-center gap-1.5 transition active:scale-95 cursor-pointer"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-[#dfc282] shrink-0" />
                  <span>Send Free SMS</span>
                </button>
              </div>
            </div>

            {/* Quick Copy Link */}
            <div className="flex items-center justify-center mb-3">
              <button
                type="button"
                onClick={handleCopyBookingDetails}
                className="inline-flex items-center gap-1 text-[11px] text-[#dfc282] hover:text-white transition font-medium px-3 py-1 rounded-lg hover:bg-white/5 cursor-pointer"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400 font-bold">Booking Details Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy Booking Details</span>
                  </>
                )}
              </button>
            </div>

            {/* Done / Return Button */}
            <button
              type="button"
              onClick={handleResetAndClose}
              className="w-full min-h-[44px] py-2.5 px-4 rounded-full bg-white/10 hover:bg-white/15 border border-white/15 text-white font-semibold text-xs active:scale-98 transition cursor-pointer"
            >
              Done / Return to Spa
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
