import React, { useState, useEffect } from 'react';
import { X, Calendar, Clock, Sparkles, CheckCircle2, User, Phone, FileText, Send } from 'lucide-react';
import { therapiesData } from '../data/therapiesData';

export default function BookingModal({
  isOpen,
  onClose,
  initialService = '',
  initialPrice = '',
  onBookingSuccess
}) {
  const [service, setService] = useState(initialService || therapiesData[0]?.title || 'Aromatherapy Calming Ritual');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('11:00 AM');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [notes, setNotes] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [confirmedBooking, setConfirmedBooking] = useState(null);

  useEffect(() => {
    if (initialService) {
      setService(initialService);
    }
  }, [initialService]);

  useEffect(() => {
    // Set default date to today in YYYY-MM-DD
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
    '06:00 PM', '07:00 PM', '08:00 PM'
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) return;

    const newBooking = {
      id: 'BK-' + Date.now().toString().slice(-6),
      timestamp: new Date().toISOString(),
      name: name.trim(),
      phone: phone.trim(),
      service,
      date,
      time,
      price: initialPrice || 'Starting from ₹1,499',
      notes: notes.trim() || 'No specific requests'
    };

    // Save to local storage for front desk admin log
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
  };

  const handleWhatsAppNotify = () => {
    if (!confirmedBooking) return;
    const msg = `*New Booking Request - Bliss Spa BTM Layout*%0A` +
      `*Name:* ${encodeURIComponent(confirmedBooking.name)}%0A` +
      `*Phone:* ${encodeURIComponent(confirmedBooking.phone)}%0A` +
      `*Service:* ${encodeURIComponent(confirmedBooking.service)}%0A` +
      `*Date:* ${encodeURIComponent(confirmedBooking.date)}%0A` +
      `*Time:* ${encodeURIComponent(confirmedBooking.time)}%0A` +
      `*Notes:* ${encodeURIComponent(confirmedBooking.notes)}%0A` +
      `*ID:* ${confirmedBooking.id}`;
    
    window.open(`https://wa.me/919945264342?text=${msg}`, '_blank');
  };

  const handleResetAndClose = () => {
    setIsSubmitted(false);
    setConfirmedBooking(null);
    setName('');
    setPhone('');
    setNotes('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-md animate-fade-in">
      <div 
        className="relative w-full max-w-lg bg-[#0e1713] border border-[#e6c35c]/30 rounded-3xl p-6 sm:p-8 shadow-2xl overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Glow Accent */}
        <div className="absolute top-0 right-0 w-48 h-48 bg-[#e6c35c]/10 rounded-full blur-3xl pointer-events-none" />

        {/* Close Button */}
        <button
          onClick={handleResetAndClose}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white flex items-center justify-center transition-colors"
        >
          <X className="w-4 h-4" />
        </button>

        {!isSubmitted ? (
          <div>
            <div className="mb-6">
              <span className="inline-flex items-center gap-1.5 text-[11px] font-bold text-[#e6c35c] tracking-widest uppercase mb-1">
                <Sparkles className="w-3.5 h-3.5" />
                Reserve Sanctuary Session
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">
                Book Your Therapy
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mt-1">
                Zero advance payment required. Pay at the spa reception desk upon arrival.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Select Service */}
              <div>
                <label className="block text-xs font-semibold text-slate-200 mb-1.5">
                  Select Treatment
                </label>
                <select
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="w-full bg-[#17251d] border border-white/10 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-[#e6c35c] transition-colors"
                >
                  {therapiesData.map((t) => (
                    <option key={t.id} value={t.title} className="bg-[#121c16] text-white">
                      {t.title} ({t.price})
                    </option>
                  ))}
                  <option value="Custom Spa Package" className="bg-[#121c16] text-white">
                    Custom Spa Package Builder
                  </option>
                  <option value="Quick Consultation / Reception Guidance" className="bg-[#121c16] text-white">
                    Quick Consultation (Guide Me on Arrival)
                  </option>
                </select>
              </div>

              {/* Date & Time Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-200 mb-1.5">
                    Preferred Date
                  </label>
                  <div className="relative">
                    <input
                      type="date"
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      required
                      className="w-full bg-[#17251d] border border-white/10 rounded-xl px-3 py-2.5 text-sm text-white focus:outline-none focus:border-[#e6c35c] transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-200 mb-1.5">
                    Time Slot
                  </label>
                  <select
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    className="w-full bg-[#17251d] border border-white/10 rounded-xl px-3 py-2.5 text-sm text-white focus:outline-none focus:border-[#e6c35c] transition-colors"
                  >
                    {timeSlots.map((slot) => (
                      <option key={slot} value={slot} className="bg-[#121c16] text-white">
                        {slot}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Guest Name & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-200 mb-1.5">
                    Your Full Name
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="e.g. Rahul Sharma"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      className="w-full bg-[#17251d] border border-white/10 rounded-xl pl-9 pr-3 py-2.5 text-sm text-white focus:outline-none focus:border-[#e6c35c] transition-colors"
                    />
                    <User className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-200 mb-1.5">
                    Phone / WhatsApp No.
                  </label>
                  <div className="relative">
                    <input
                      type="tel"
                      placeholder="10-digit mobile"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      required
                      className="w-full bg-[#17251d] border border-white/10 rounded-xl pl-9 pr-3 py-2.5 text-sm text-white focus:outline-none focus:border-[#e6c35c] transition-colors"
                    />
                    <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                  </div>
                </div>
              </div>

              {/* Notes / Therapist Preference */}
              <div>
                <label className="block text-xs font-semibold text-slate-200 mb-1.5">
                  Preferences / Specific Focus Area (Optional)
                </label>
                <textarea
                  rows="2"
                  placeholder="e.g. Neck & upper shoulder stiffness, medium-firm pressure..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full bg-[#17251d] border border-white/10 rounded-xl p-3 text-xs sm:text-sm text-white placeholder-slate-400 focus:outline-none focus:border-[#e6c35c] transition-colors"
                />
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                className="w-full py-3.5 px-6 rounded-2xl bg-gradient-to-r from-[#d4af37] via-[#f3d978] to-[#d4af37] text-black font-serif font-bold text-sm tracking-wide shadow-xl shadow-[#d4af37]/25 hover:brightness-105 active:scale-[0.99] transition-all flex items-center justify-center gap-2 mt-2"
              >
                <span>Confirm Reservation</span>
                <Sparkles className="w-4 h-4 text-black" />
              </button>

              <p className="text-[11px] text-center text-slate-400 mt-2">
                🔒 Free instant cancellation. Your suite will be held for 15 minutes after appointed time.
              </p>
            </form>
          </div>
        ) : (
          /* Confirmation Success Screen */
          <div className="text-center py-4">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto mb-4 border border-emerald-500/40">
              <CheckCircle2 className="w-9 h-9" />
            </div>

            <h3 className="font-serif text-2xl font-bold text-white mb-2">
              Appointment Reserved!
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-sm mx-auto mb-6">
              Thank you, <strong className="text-white">{confirmedBooking?.name}</strong>. Your session has been queued in our front desk scheduling system.
            </p>

            <div className="bg-[#17251d] border border-white/10 rounded-2xl p-4 text-left mb-6 text-xs sm:text-sm space-y-2">
              <div className="flex justify-between border-b border-white/5 pb-2">
                <span className="text-slate-400">Booking Reference:</span>
                <span className="text-[#e6c35c] font-mono font-bold">{confirmedBooking?.id}</span>
              </div>
              <div className="flex justify-between border-b border-white/5 pb-2">
                <span className="text-slate-400">Treatment:</span>
                <span className="text-white font-medium">{confirmedBooking?.service}</span>
              </div>
              <div className="flex justify-between border-b border-white/5 pb-2">
                <span className="text-slate-400">Date &amp; Time:</span>
                <span className="text-white font-medium">{confirmedBooking?.date} at {confirmedBooking?.time}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Location:</span>
                <span className="text-white text-right font-medium">BTM 1st Stage, near Udupi Garden</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={handleWhatsAppNotify}
                className="flex-1 py-3 px-4 rounded-xl bg-[#25D366] text-black font-bold text-xs flex items-center justify-center gap-2 hover:bg-[#20bd5a] transition-colors"
              >
                <Send className="w-4 h-4" />
                <span>Send WhatsApp Copy</span>
              </button>

              <button
                onClick={handleResetAndClose}
                className="py-3 px-5 rounded-xl bg-white/10 hover:bg-white/15 text-white font-semibold text-xs transition-colors"
              >
                Done
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
