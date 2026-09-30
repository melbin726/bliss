import React, { useState, useEffect } from 'react';
import { 
  X, 
  Calendar, 
  Clock, 
  Sparkles, 
  CheckCircle2, 
  User, 
  Phone, 
  FileText, 
  Send, 
  MessageSquare, 
  Copy, 
  Check, 
  Info,
  ShieldCheck,
  ExternalLink
} from 'lucide-react';
import { therapiesData } from '../data/therapiesData';
import CustomDropdown from './CustomDropdown';

export const SPA_LINES = [
  {
    id: 'line1',
    label: 'Reception Desk',
    badge: 'Front Desk',
    display: '099452 64342',
    digits: '9945264342',
    waNumber: '919945264342',
    tel: 'tel:09945264342',
    isMain: true
  },
  {
    id: 'line2',
    label: 'Concierge Desk',
    badge: 'Direct Line',
    display: '080 9526 6198',
    digits: '8095266198',
    waNumber: '918095266198',
    tel: 'tel:08095266198',
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
  const [preferredChannel, setPreferredChannel] = useState('whatsapp'); // 'whatsapp' | 'sms'
  const [selectedLineIndex, setSelectedLineIndex] = useState(0); // 0 = Line 1, 1 = Line 2
  const [autoOpenApp, setAutoOpenApp] = useState(true);

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

  const getSmsText = (booking = confirmedBooking) => {
    if (!booking) return '';
    return `BLISS SPA RESERVATION: Hi, I reserved ${booking.service} on ${booking.date} at ${booking.time}. Ref: ${booking.id}. Guest: ${booking.name} (Ph: ${booking.phone}). Notes: ${booking.notes}. Please confirm my suite. Thank you!`;
  };

  const getWhatsAppUrl = (targetWaNumber = '919945264342', booking = confirmedBooking) => {
    if (!booking) return '';
    const msg = `*🌿 New Booking Request - Bliss Spa BTM Layout*%0A%0A` +
      `*Guest Name:* ${encodeURIComponent(booking.name)}%0A` +
      `*Phone Number:* ${encodeURIComponent(booking.phone)}%0A` +
      `*Treatment:* ${encodeURIComponent(booking.service)}%0A` +
      `*Date:* ${encodeURIComponent(booking.date)}%0A` +
      `*Time Slot:* ${encodeURIComponent(booking.time)}%0A` +
      `*Price:* ${encodeURIComponent(booking.price)}%0A` +
      `*Booking Ref:* ${booking.id}%0A` +
      `*Preferences:* ${encodeURIComponent(booking.notes)}%0A%0A` +
      `_Please confirm suite availability. Thank you!_`;
    return `https://wa.me/${targetWaNumber}?text=${msg}`;
  };

  const getNativeSmsUrl = (targetNumber = '9945264342', booking = confirmedBooking) => {
    const text = getSmsText(booking);
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

    const chosenLine = SPA_LINES[selectedLineIndex] || SPA_LINES[0];

    const newBooking = {
      id: 'BK-' + Date.now().toString().slice(-6),
      timestamp: new Date().toISOString(),
      name: name.trim(),
      phone: phone.trim(),
      service,
      date,
      time,
      price: initialPrice || 'Starting from ₹1,999',
      notes: notes.trim() || 'No specific requests',
      targetLine: chosenLine.display
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

    // Fire free background alert
    sendBackgroundAlert(newBooking);

    // If auto-open is enabled, launch chosen line directly
    if (autoOpenApp) {
      if (preferredChannel === 'whatsapp') {
        window.open(getWhatsAppUrl(chosenLine.waNumber, newBooking), '_blank');
      } else if (preferredChannel === 'sms') {
        window.location.href = getNativeSmsUrl(chosenLine.digits, newBooking);
      }
    }
  };

  const handleWhatsAppNotify = (waNumber = SPA_LINES[0].waNumber) => {
    if (!confirmedBooking) return;
    window.open(getWhatsAppUrl(waNumber, confirmedBooking), '_blank');
  };

  const handleSendSMS = (targetPhone = SPA_LINES[0].digits) => {
    if (!confirmedBooking) return;
    window.location.href = getNativeSmsUrl(targetPhone, confirmedBooking);
  };

  const handleCopySms = () => {
    const text = getSmsText(confirmedBooking);
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
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

  const serviceDropdownOptions = [
    ...therapiesData.map((t) => ({
      value: t.name || t.title,
      label: t.name || t.title,
      badge: t.price,
      subtext: `${t.duration || '60 Mins'} • En-suite steam included`
    })),
    { value: 'Custom Spa Package', label: 'Custom Spa Package Builder', badge: 'Flexible', subtext: 'Choose your own therapies & duration' },
    { value: 'Quick Consultation / Reception Guidance', label: 'Quick Consultation (Guide Me on Arrival)', badge: 'Free', subtext: 'Decide treatment at front desk' }
  ];

  const timeDropdownOptions = timeSlots.map((slot) => ({
    value: slot,
    label: slot
  }));

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 xs:p-2 sm:p-4 overflow-y-auto bg-black/85 backdrop-blur-md animate-fade-in">
      <div 
        className="relative w-full max-w-lg bg-[#0e1713] border-t sm:border border-[#cfa559]/25 rounded-t-3xl sm:rounded-3xl p-4 xs:p-5 sm:p-7 shadow-2xl overflow-y-auto max-h-[92dvh] sm:max-h-[90vh] pb-[max(1.25rem,env(safe-area-inset-bottom))] sm:pb-7"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Mobile Pull Indicator Pill */}
        <div className="sm:hidden w-10 h-1 rounded-full bg-white/20 mx-auto mb-3" />

        {/* Glow Accent */}
        <div className="absolute top-0 right-0 w-36 h-36 bg-[#cfa559]/10 rounded-full blur-3xl pointer-events-none" />

        {/* Close Button */}
        <button
          type="button"
          onClick={handleResetAndClose}
          className="absolute top-3.5 right-3.5 sm:top-4 sm:right-4 w-9 h-9 rounded-full bg-white/5 hover:bg-white/10 active:scale-90 text-slate-300 hover:text-white flex items-center justify-center transition-all z-10 cursor-pointer"
          aria-label="Close booking modal"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSubmitted ? (
          <div>
            <div className="mb-3.5 sm:mb-5 pr-8">
              <span className="inline-flex items-center gap-1.5 text-[10px] sm:text-[11px] font-bold text-[#dfc282] tracking-widest uppercase mb-1">
                <Sparkles className="w-3 h-3" />
                Reserve Sanctuary Session
              </span>
              <h3 className="font-serif text-lg sm:text-2xl font-bold text-white leading-tight">
                Book Your Therapy
              </h3>
              <p className="text-[10.5px] xs:text-[11px] sm:text-xs text-slate-300 mt-0.5 leading-snug">
                Pay ₹0 advance. Instant confirmation to spa lines{' '}
                <span className="whitespace-nowrap inline-flex items-center gap-1 text-[#dfc282] font-semibold">
                  <span>099452 64342</span>
                  <span className="text-white/40">/</span>
                  <span>080 9526 6198</span>
                </span>.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-3.5">
              {/* Select Service with Custom Luxury Dropdown */}
              <div>
                <CustomDropdown
                  label="Treatment"
                  value={service}
                  onChange={setService}
                  options={serviceDropdownOptions}
                  placeholder="Select a treatment"
                  icon={Sparkles}
                  required
                />
              </div>

              {/* Date & Time Grid */}
              <div className="grid grid-cols-2 gap-2.5">
                <div>
                  <label className="block text-[11px] font-semibold text-slate-300 mb-1">
                    Date
                  </label>
                  <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    required
                    className="w-full min-h-[42px] bg-[#14221c] border border-white/15 rounded-xl px-3 py-2 text-xs sm:text-sm text-white focus:outline-none focus:border-[#dfc282] transition-colors"
                  />
                </div>

                <div>
                  <CustomDropdown
                    label="Time Slot"
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
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                <div>
                  <label className="block text-[11px] font-semibold text-slate-300 mb-1">
                    Full Name
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="e.g. Rahul Sharma"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      autoComplete="name"
                      autoCapitalize="words"
                      className="w-full min-h-[42px] bg-[#14221c] border border-white/15 rounded-xl pl-9 pr-3 py-2 text-xs sm:text-sm text-white placeholder-slate-400 focus:outline-none focus:border-[#dfc282] transition-colors"
                    />
                    <User className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-semibold text-slate-300 mb-1">
                    Phone Number
                  </label>
                  <div className="relative">
                    <input
                      type="tel"
                      placeholder="10-digit mobile"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      required
                      inputMode="tel"
                      autoComplete="tel"
                      className="w-full min-h-[42px] bg-[#14221c] border border-white/15 rounded-xl pl-9 pr-3 py-2 text-xs sm:text-sm text-white placeholder-slate-400 focus:outline-none focus:border-[#dfc282] transition-colors"
                    />
                    <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                  </div>
                </div>
              </div>

              {/* Preferences */}
              <div>
                <label className="block text-[11px] font-semibold text-slate-300 mb-1">
                  Focus Area / Preferences (Optional)
                </label>
                <textarea
                  rows="2"
                  placeholder="e.g. Upper shoulder knots, firm pressure, female therapist..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full bg-[#17251d] border border-white/15 rounded-xl p-3 text-sm text-white placeholder-slate-400 focus:outline-none focus:border-[#dfc282] transition-colors"
                />
              </div>

              {/* Free Confirmation to Spa Lines Section */}
              <div className="bg-[#14221c]/70 border border-white/10 rounded-xl p-3">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-semibold text-white flex items-center gap-1.5 text-xs">
                    <MessageSquare className="w-3.5 h-3.5 text-[#dfc282]" />
                    Send Free Booking Copy:
                  </span>
                  <span className="text-[10px] text-emerald-400 bg-emerald-500/15 border border-emerald-500/30 px-2 py-0.5 rounded-full font-bold">
                    ₹0 Free
                  </span>
                </div>

                {/* Spa Desk Line Selector */}
                <div className="mb-2">
                  <div className="text-[11px] text-slate-400 mb-1.5">Notify Front Desk Line:</div>
                  <div className="grid grid-cols-2 gap-2">
                    {SPA_LINES.map((line, idx) => (
                      <button
                        key={line.digits}
                        type="button"
                        onClick={() => setSelectedLineIndex(idx)}
                        className={`p-2 rounded-lg border text-left text-xs transition cursor-pointer flex flex-col ${
                          selectedLineIndex === idx
                            ? 'bg-[#cfa559]/20 border-[#cfa559] text-white shadow-[0_0_12px_rgba(207,165,89,0.2)]'
                            : 'bg-black/30 border-white/10 text-slate-300 hover:border-white/25'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-[10px] text-slate-400 uppercase font-semibold whitespace-nowrap">{line.label}</span>
                          {selectedLineIndex === idx && <span className="w-2 h-2 rounded-full bg-[#dfc282]" />}
                        </div>
                        <span className="font-mono font-bold text-white mt-0.5 whitespace-nowrap">{line.display}</span>
                      </button>
                    ))}
                  </div>
                </div>
                
                {/* Method selector */}
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <label className={`flex items-center gap-2 p-2.5 rounded-lg border cursor-pointer transition select-none ${
                    preferredChannel === 'whatsapp' 
                      ? 'bg-[#25D366]/15 border-[#25D366]/50 text-white font-medium shadow-[0_0_10px_rgba(37,211,102,0.15)]' 
                      : 'bg-black/20 border-white/10 text-slate-300 hover:border-white/20'
                  }`}>
                    <input
                      type="radio"
                      name="channel"
                      value="whatsapp"
                      checked={preferredChannel === 'whatsapp'}
                      onChange={() => setPreferredChannel('whatsapp')}
                      className="accent-[#25D366] w-3.5 h-3.5"
                    />
                    <span>via WhatsApp</span>
                  </label>

                  <label className={`flex items-center gap-2 p-2.5 rounded-lg border cursor-pointer transition select-none ${
                    preferredChannel === 'sms' 
                      ? 'bg-[#cfa559]/20 border-[#cfa559]/50 text-white font-medium shadow-[0_0_10px_rgba(207,165,89,0.15)]' 
                      : 'bg-black/20 border-white/10 text-slate-300 hover:border-white/20'
                  }`}>
                    <input
                      type="radio"
                      name="channel"
                      value="sms"
                      checked={preferredChannel === 'sms'}
                      onChange={() => setPreferredChannel('sms')}
                      className="accent-[#cfa559] w-3.5 h-3.5"
                    />
                    <span>via Free SMS App</span>
                  </label>
                </div>

                <label className="flex items-center gap-2 mt-2 pt-2 border-t border-white/10 cursor-pointer select-none text-[11px] text-slate-300">
                  <input
                    type="checkbox"
                    checked={autoOpenApp}
                    onChange={(e) => setAutoOpenApp(e.target.checked)}
                    className="accent-[#dfc282] rounded w-3.5 h-3.5"
                  />
                  <span>Auto-open confirmation app after clicking Confirm</span>
                </label>
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                className="w-full py-2.5 sm:py-3 px-5 rounded-full bg-gradient-to-r from-[#dfc282] via-[#cfa559] to-[#b38838] text-[#060f0a] font-semibold text-xs sm:text-sm tracking-wide shadow-[0_2px_12px_rgba(197,160,89,0.22)] hover:brightness-105 active:scale-95 transition flex items-center justify-center gap-1.5 cursor-pointer mt-2"
              >
                <span>Confirm Reservation (₹0 Advance)</span>
                <Sparkles className="w-4 h-4 text-[#060f0a] shrink-0" />
              </button>

              <p className="text-[10px] text-center text-slate-400 mt-1 pb-1">
                🔒 Free instant cancellation. Suite held for 15 mins after slot.
              </p>
            </form>
          </div>
        ) : (
          /* Confirmation Success Screen */
          <div className="text-center py-2 sm:py-3">
            <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto mb-3 border border-emerald-500/40 shadow-[0_0_20px_rgba(16,185,129,0.25)]">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <h3 className="font-serif text-xl sm:text-2xl font-bold text-white mb-1">
              Appointment Reserved!
            </h3>
            <p className="text-xs text-slate-300 max-w-sm mx-auto mb-4">
              Thank you, <strong className="text-white">{confirmedBooking?.name}</strong>. Your session is queued in our front desk diary.
            </p>

            {/* Booking Summary Card */}
            <div className="bg-[#14221c] border border-white/10 rounded-2xl p-3.5 sm:p-4 text-left mb-4 text-xs space-y-2 shadow-inner">
              <div className="flex justify-between border-b border-white/5 pb-2">
                <span className="text-slate-400">Booking Reference:</span>
                <span className="text-[#dfc282] font-mono font-bold">{confirmedBooking?.id}</span>
              </div>
              <div className="flex justify-between border-b border-white/5 pb-2">
                <span className="text-slate-400">Treatment:</span>
                <span className="text-white font-medium">{confirmedBooking?.service}</span>
              </div>
              <div className="flex justify-between border-b border-white/5 pb-2">
                <span className="text-slate-400">Date &amp; Time:</span>
                <span className="text-white font-medium">{confirmedBooking?.date} at {confirmedBooking?.time}</span>
              </div>
              <div className="flex justify-between border-b border-white/5 pb-2">
                <span className="text-slate-400">Guest Contact:</span>
                <span className="text-white font-medium">{confirmedBooking?.phone}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Location:</span>
                <span className="text-white font-medium">Bliss Spa, BTM 1st Stage</span>
              </div>
            </div>

            {/* Free SMS / WhatsApp to Spa Lines Section */}
            <div className="bg-[#0b1410] border border-[#cfa559]/30 rounded-2xl p-3.5 sm:p-4 mb-4 text-left shadow-lg">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <MessageSquare className="w-4 h-4 text-[#dfc282]" />
                  <span className="text-xs font-bold text-white uppercase tracking-wider">
                    Send via WhatsApp / SMS (100% Free)
                  </span>
                </div>
                <span className="text-[10px] text-emerald-400 bg-emerald-500/15 border border-emerald-500/30 px-2 py-0.5 rounded-full font-bold">
                  ₹0 Cost
                </span>
              </div>
              
              <p className="text-[11px] text-slate-300 leading-relaxed mb-3">
                Send your booking confirmation directly to Bliss Spa reception via <strong className="text-[#dfc282]">WhatsApp</strong> or <strong className="text-[#dfc282]">Free Mobile SMS</strong>. Choose either desk line below:
              </p>

              {/* Reception Desk Dispatch Block */}
              <div className="bg-black/40 border border-white/10 rounded-xl p-3 mb-2.5">
                <div className="flex items-center justify-between mb-2 gap-2">
                  <div className="flex items-center gap-1.5 flex-nowrap whitespace-nowrap min-w-0">
                    <Phone className="w-3.5 h-3.5 text-[#dfc282] shrink-0" />
                    <span className="text-xs font-bold text-white whitespace-nowrap">Reception Desk:</span>
                    <span className="text-xs font-mono text-[#dfc282] font-semibold whitespace-nowrap">099452 64342</span>
                  </div>
                  <span className="text-[10px] text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20 font-semibold whitespace-nowrap shrink-0">
                    Front Desk
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => handleSendSMS('9945264342')}
                    className="w-full py-2.5 px-2.5 rounded-lg bg-white/10 hover:bg-white/15 text-white font-semibold text-xs flex items-center justify-center gap-1.5 active:scale-95 transition cursor-pointer border border-white/10 whitespace-nowrap"
                    title="Open SMS App for 099452 64342"
                  >
                    <MessageSquare className="w-3.5 h-3.5 text-[#dfc282]" />
                    <span>Free SMS</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => handleWhatsAppNotify('919945264342')}
                    className="w-full py-2.5 px-2.5 rounded-lg bg-[#25D366] hover:bg-[#20bd5a] text-black font-bold text-xs flex items-center justify-center gap-1.5 active:scale-95 transition cursor-pointer shadow-[0_2px_8px_rgba(37,211,102,0.2)] whitespace-nowrap"
                    title="Send WhatsApp to 099452 64342"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>WhatsApp</span>
                  </button>
                </div>
              </div>

              {/* Concierge Desk Dispatch Block */}
              <div className="bg-black/40 border border-white/10 rounded-xl p-3 mb-3">
                <div className="flex items-center justify-between mb-2 gap-2">
                  <div className="flex items-center gap-1.5 flex-nowrap whitespace-nowrap min-w-0">
                    <Phone className="w-3.5 h-3.5 text-[#dfc282] shrink-0" />
                    <span className="text-xs font-bold text-white whitespace-nowrap">Concierge Desk:</span>
                    <span className="text-xs font-mono text-[#dfc282] font-semibold whitespace-nowrap">080 9526 6198</span>
                  </div>
                  <span className="text-[10px] text-[#dfc282] bg-[#cfa559]/10 px-2 py-0.5 rounded border border-[#cfa559]/20 font-semibold whitespace-nowrap shrink-0">
                    Direct Line
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => handleSendSMS('8095266198')}
                    className="w-full py-2.5 px-2.5 rounded-lg bg-white/10 hover:bg-white/15 text-white font-semibold text-xs flex items-center justify-center gap-1.5 active:scale-95 transition cursor-pointer border border-white/10"
                    title="Open SMS App for 080 9526 6198"
                  >
                    <MessageSquare className="w-3.5 h-3.5 text-[#dfc282]" />
                    <span>Free SMS</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => handleWhatsAppNotify('918095266198')}
                    className="w-full py-2.5 px-2.5 rounded-lg bg-[#25D366] hover:bg-[#20bd5a] text-black font-bold text-xs flex items-center justify-center gap-1.5 active:scale-95 transition cursor-pointer shadow-[0_2px_8px_rgba(37,211,102,0.2)]"
                    title="Send WhatsApp to 080 9526 6198"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>WhatsApp</span>
                  </button>
                </div>
              </div>

              {/* Optional: Send SMS to Customer's Own Number */}
              {confirmedBooking?.phone && (
                <button
                  type="button"
                  onClick={() => handleSendSMS(confirmedBooking.phone)}
                  className="w-full py-2 px-3 mb-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 text-xs flex items-center justify-center gap-1.5 transition active:scale-98 cursor-pointer"
                >
                  <Phone className="w-3.5 h-3.5 text-[#dfc282]" />
                  <span>Draft SMS to My Own Phone ({confirmedBooking.phone})</span>
                </button>
              )}

              {/* Copy SMS Text */}
              <div className="pt-2 border-t border-white/10 flex items-center justify-between gap-2">
                <span className="text-[10px] text-slate-400">
                  Copy booking text for SMS or notes:
                </span>
                <button
                  type="button"
                  onClick={handleCopySms}
                  className="inline-flex items-center gap-1 text-[11px] text-[#dfc282] hover:text-white transition font-medium px-2.5 py-1 rounded-lg bg-white/5 hover:bg-white/10 shrink-0 cursor-pointer"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400 font-bold">Copied to Clipboard!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy SMS Text</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Done Button */}
            <button
              type="button"
              onClick={handleResetAndClose}
              className="w-full min-h-[44px] py-2.5 px-5 rounded-xl bg-white/10 hover:bg-white/15 text-white font-semibold text-xs active:scale-98 transition cursor-pointer"
            >
              Done / Return to Sanctuary
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
