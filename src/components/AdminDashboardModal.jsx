import React, { useState, useEffect } from 'react';
import { 
  X, 
  Shield, 
  Phone, 
  Calendar, 
  Clock, 
  User, 
  Check, 
  Trash2, 
  Plus, 
  RefreshCw, 
  Send, 
  MessageSquare, 
  Bell, 
  Settings, 
  ExternalLink 
} from 'lucide-react';

export default function AdminDashboardModal({ isOpen, onClose }) {
  const [bookings, setBookings] = useState([]);
  const [showAddForm, setShowAddForm] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [walkinName, setWalkinName] = useState('');
  const [walkinPhone, setWalkinPhone] = useState('');
  const [walkinService, setWalkinService] = useState('Swedish Body Therapy');

  // Free Telegram Alert configuration state
  const [telegramToken, setTelegramToken] = useState('');
  const [telegramChatId, setTelegramChatId] = useState('');
  const [testingTelegram, setTestingTelegram] = useState(false);

  const loadBookings = () => {
    try {
      const stored = JSON.parse(localStorage.getItem('bliss_spa_bookings') || '[]');
      if (stored.length === 0) {
        const sampleData = [
          {
            id: 'BK-892104',
            timestamp: new Date().toISOString(),
            name: 'Vikram Sundaram',
            phone: '9845012345',
            service: 'Ayurvedic Abhyanga & Shirodhara',
            date: new Date().toISOString().split('T')[0],
            time: '04:00 PM',
            status: 'Confirmed',
            notes: 'Upper back focus, warm sesame oil'
          },
          {
            id: 'BK-774129',
            timestamp: new Date().toISOString(),
            name: 'Priya & Ananya',
            phone: '9900112233',
            service: 'VIP Couples Royal Indulgence',
            date: new Date().toISOString().split('T')[0],
            time: '06:00 PM',
            status: 'Confirmed',
            notes: 'Steam bath included'
          }
        ];
        localStorage.setItem('bliss_spa_bookings', JSON.stringify(sampleData));
        setBookings(sampleData);
      } else {
        setBookings(stored);
      }

      // Load Telegram config
      const tgConfig = JSON.parse(localStorage.getItem('bliss_telegram_config') || '{}');
      if (tgConfig.botToken) setTelegramToken(tgConfig.botToken);
      if (tgConfig.chatId) setTelegramChatId(tgConfig.chatId);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    if (isOpen) {
      loadBookings();
      const handleKeyDown = (e) => {
        if (e.key === 'Escape') onClose();
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => window.removeEventListener('keydown', handleKeyDown);
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleUpdateStatus = (id, newStatus) => {
    const updated = bookings.map((b) => (b.id === id ? { ...b, status: newStatus } : b));
    setBookings(updated);
    localStorage.setItem('bliss_spa_bookings', JSON.stringify(updated));
  };

  const handleDelete = (id) => {
    if (window.confirm('Delete this reservation from the front desk record?')) {
      const updated = bookings.filter((b) => b.id !== id);
      setBookings(updated);
      localStorage.setItem('bliss_spa_bookings', JSON.stringify(updated));
    }
  };

  const handleAddWalkin = (e) => {
    e.preventDefault();
    if (!walkinName.trim() || !walkinPhone.trim()) return;

    const newWalkin = {
      id: 'WL-' + Date.now().toString().slice(-6),
      timestamp: new Date().toISOString(),
      name: walkinName.trim(),
      phone: walkinPhone.trim(),
      service: walkinService,
      date: new Date().toISOString().split('T')[0],
      time: 'Immediate Walk-in',
      status: 'In Session',
      notes: 'Front Desk Walk-in guest'
    };

    const updated = [newWalkin, ...bookings];
    setBookings(updated);
    localStorage.setItem('bliss_spa_bookings', JSON.stringify(updated));
    setWalkinName('');
    setWalkinPhone('');
    setShowAddForm(false);
  };

  const handleSaveTelegram = (e) => {
    e.preventDefault();
    localStorage.setItem('bliss_telegram_config', JSON.stringify({
      botToken: telegramToken.trim(),
      chatId: telegramChatId.trim()
    }));
    alert('Settings saved! Any new web booking will automatically trigger an alert to this Telegram.');
  };

  const handleTestTelegram = async () => {
    if (!telegramToken.trim() || !telegramChatId.trim()) {
      alert('Please enter both your Telegram Bot Token and Chat ID first.');
      return;
    }
    setTestingTelegram(true);
    try {
      const res = await fetch(`https://api.telegram.org/bot${telegramToken.trim()}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: telegramChatId.trim(),
          text: `🌿 *Bliss Spa Test Notification*\n\n✅ Success! Your 100% Free Telegram Alert integration is working perfectly. You will now receive instant push notifications on your phone whenever a guest books on the website without paying for any SMS gateway!`,
          parse_mode: 'Markdown'
        })
      });
      const data = await res.json();
      if (data.ok) {
        localStorage.setItem('bliss_telegram_config', JSON.stringify({
          botToken: telegramToken.trim(),
          chatId: telegramChatId.trim()
        }));
        alert('🎉 Success! Check your Telegram app. A test booking notification was just sent to your phone!');
      } else {
        alert('❌ Telegram responded: ' + (data.description || 'Invalid token or chat ID. Please verify.'));
      }
    } catch (err) {
      alert('❌ Network error: ' + err.message);
    } finally {
      setTestingTelegram(false);
    }
  };

  const getCustomerSmsUrl = (booking) => {
    const text = `BLISS SPA BTM: Hi ${booking.name}, your appointment for ${booking.service} on ${booking.date} at ${booking.time} is CONFIRMED (Ref: ${booking.id}). We look forward to welcoming you! Ph: 099452 64342`;
    return `sms:${booking.phone}?&body=${encodeURIComponent(text)}`;
  };

  const getCustomerWhatsAppUrl = (booking) => {
    const msg = `*🌿 Bliss Spa & Massage - Appointment Confirmed*%0A%0A` +
      `Hello *${encodeURIComponent(booking.name)}*,%0A` +
      `Your reservation has been confirmed by our front desk!%0A%0A` +
      `*Service:* ${encodeURIComponent(booking.service)}%0A` +
      `*Date & Time:* ${encodeURIComponent(booking.date)} at ${encodeURIComponent(booking.time)}%0A` +
      `*Booking Ref:* ${booking.id}%0A` +
      `*Address:* 2nd Floor, 7th Main Rd, BTM 1st Stage, Bengaluru%0A%0A` +
      `_Please arrive 10 minutes before your slot to relax. For assistance, call 099452 64342._`;
    return `https://wa.me/91${booking.phone}?text=${msg}`;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 xs:p-2 sm:p-4 overflow-y-auto bg-black/85 backdrop-blur-md animate-fade-in">
      <div 
        className="relative w-full max-w-4xl bg-[#0d1612] border-t sm:border border-[#cfa559]/25 rounded-t-3xl sm:rounded-3xl p-4.5 xs:p-6 sm:p-8 shadow-2xl overflow-hidden max-h-[92dvh] sm:max-h-[90vh] my-auto flex flex-col pb-[max(1.25rem,env(safe-area-inset-bottom))] sm:pb-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Mobile Pull Indicator Pill */}
        <div className="sm:hidden w-10 h-1 rounded-full bg-white/20 mx-auto mb-3" />

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 sm:pb-6 border-b border-white/10 gap-3 sm:gap-4 shrink-0">
          <div>
            <span className="inline-flex items-center gap-1.5 text-[11px] font-bold text-[#dfc282] tracking-widest uppercase mb-1">
              <Shield className="w-3.5 h-3.5" />
              Staff Internal Portal
            </span>
            <h3 className="font-serif text-xl sm:text-3xl font-bold text-white leading-tight">
              Front Desk Appointment Log
            </h3>
            <p className="text-[11px] sm:text-xs text-slate-400 mt-0.5">
              Live guest bookings for Bliss Spa &amp; Massage • BTM 1st Stage
            </p>
          </div>

          <div className="flex items-center gap-2 self-start sm:self-auto flex-wrap">
            <button
              type="button"
              onClick={() => setShowSettings(!showSettings)}
              className={`py-2 px-3 min-h-[38px] rounded-xl border text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer ${
                showSettings 
                  ? 'bg-[#cfa559]/20 border-[#cfa559] text-[#dfc282]' 
                  : 'bg-white/5 hover:bg-white/10 border-white/10 text-slate-300'
              }`}
              title="Free Instant Phone Alerts Setup"
            >
              <Bell className="w-3.5 h-3.5 text-[#dfc282]" />
              <span className="hidden xs:inline">Free Phone Alerts</span>
            </button>

            <button
              type="button"
              onClick={() => setShowAddForm(!showAddForm)}
              className="py-2 px-3.5 min-h-[38px] rounded-xl bg-gradient-to-r from-[#dfc282] via-[#cfa559] to-[#b38838] text-[#060f0a] font-bold text-xs flex items-center gap-1.5 transition-all active:scale-95 cursor-pointer shadow-md"
            >
              <Plus className="w-4 h-4" />
              <span>Add Walk-In</span>
            </button>

            <button
              type="button"
              onClick={loadBookings}
              className="w-9 h-9 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white flex items-center justify-center transition-colors active:scale-95 cursor-pointer"
              title="Refresh Records"
              aria-label="Refresh records"
            >
              <RefreshCw className="w-4 h-4" />
            </button>

            <button
              type="button"
              onClick={onClose}
              className="w-9 h-9 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white flex items-center justify-center transition-colors active:scale-95 cursor-pointer"
              title="Close"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Free Phone Alert (Telegram) Settings Panel */}
        {showSettings && (
          <div className="my-3 p-4 rounded-2xl bg-[#09110d] border border-[#cfa559]/35 text-xs text-slate-300 animate-fade-in shrink-0 space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Bell className="w-4 h-4 text-[#dfc282]" />
                <strong className="text-white text-sm">
                  100% Free Instant Phone Alerts (Telegram Bot)
                </strong>
              </div>
              <span className="bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 font-bold px-2 py-0.5 rounded-full text-[10px]">
                ₹0 / Unlimited
              </span>
            </div>

            <p className="text-[11px] leading-relaxed text-slate-300">
              Commercial SMS gateways in India charge per SMS and require paid TRAI DLT registration. You can receive <strong>instant push notifications on your mobile phone for ₹0 forever</strong> using a free Telegram bot in 2 minutes:
            </p>

            <ol className="text-[11px] space-y-1 list-decimal list-inside text-slate-400 bg-black/30 p-2.5 rounded-xl border border-white/5">
              <li>Open Telegram, search for <strong className="text-white">@BotFather</strong>, send <code className="text-[#dfc282]">/newbot</code> to get your Bot Token.</li>
              <li>Search for <strong className="text-white">@userinfobot</strong> in Telegram and press Start to get your numeric Chat ID.</li>
              <li>Paste both below and click &quot;Save &amp; Test Alert&quot;!</li>
            </ol>

            <form onSubmit={handleSaveTelegram} className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
              <div>
                <label className="block text-[10px] uppercase font-bold text-slate-400 mb-1">
                  Telegram Bot Token
                </label>
                <input
                  type="text"
                  placeholder="e.g. 123456789:ABCdefGhIJKlmNoPQRstuVWXyz"
                  value={telegramToken}
                  onChange={(e) => setTelegramToken(e.target.value)}
                  className="w-full bg-[#121c16] border border-white/15 rounded-lg px-3 py-1.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#dfc282]"
                />
              </div>

              <div>
                <label className="block text-[10px] uppercase font-bold text-slate-400 mb-1">
                  Your Telegram Chat ID
                </label>
                <input
                  type="text"
                  placeholder="e.g. 987654321"
                  value={telegramChatId}
                  onChange={(e) => setTelegramChatId(e.target.value)}
                  className="w-full bg-[#121c16] border border-white/15 rounded-lg px-3 py-1.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#dfc282]"
                />
              </div>

              <div className="sm:col-span-2 flex items-center gap-2 pt-1">
                <button
                  type="submit"
                  className="py-1.5 px-3 rounded-lg bg-white/10 hover:bg-white/15 text-white font-semibold text-xs transition cursor-pointer"
                >
                  Save Settings
                </button>

                <button
                  type="button"
                  onClick={handleTestTelegram}
                  disabled={testingTelegram}
                  className="py-1.5 px-3 rounded-lg bg-[#dfc282] hover:bg-[#cfa559] text-[#060f0a] font-bold text-xs transition cursor-pointer flex items-center gap-1.5"
                >
                  <Send className="w-3 h-3" />
                  <span>{testingTelegram ? 'Sending Test...' : 'Send Test Phone Alert'}</span>
                </button>

                <button
                  type="button"
                  onClick={() => setShowSettings(false)}
                  className="ml-auto text-xs text-slate-400 hover:text-white"
                >
                  Close Panel
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Walk-in Entry Form */}
        {showAddForm && (
          <form onSubmit={handleAddWalkin} className="my-3 sm:my-4 p-4 rounded-2xl bg-[#14211a] border border-[#cfa559]/40 animate-fade-in shrink-0">
            <h4 className="font-serif text-sm font-bold text-white mb-3 flex items-center gap-2">
              <span>Quick Register Walk-in Guest</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-3">
              <input
                type="text"
                placeholder="Guest Name"
                value={walkinName}
                onChange={(e) => setWalkinName(e.target.value)}
                required
                className="w-full min-h-[40px] bg-[#0e1713] border border-white/15 rounded-xl px-3 py-2 text-xs sm:text-sm text-white placeholder-slate-400 focus:outline-none focus:border-[#dfc282]"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                value={walkinPhone}
                onChange={(e) => setWalkinPhone(e.target.value)}
                required
                inputMode="tel"
                className="w-full min-h-[40px] bg-[#0e1713] border border-white/15 rounded-xl px-3 py-2 text-xs sm:text-sm text-white placeholder-slate-400 focus:outline-none focus:border-[#dfc282]"
              />
              <select
                value={walkinService}
                onChange={(e) => setWalkinService(e.target.value)}
                className="w-full min-h-[40px] bg-[#0e1713] border border-white/15 rounded-xl px-3 py-2 text-xs sm:text-sm text-white focus:outline-none focus:border-[#dfc282]"
              >
                <option value="Swedish Body Therapy">Swedish Body Therapy</option>
                <option value="Deep Tissue Muscle Relief">Deep Tissue Muscle Relief</option>
                <option value="Traditional Thai Yoga Massage">Traditional Thai Yoga</option>
                <option value="Ayurvedic Abhyanga">Ayurvedic Abhyanga</option>
                <option value="Aromatherapy Destress">Aromatherapy Destress</option>
              </select>
            </div>
            <div className="flex justify-end gap-2">
              <button
                type="button"
                onClick={() => setShowAddForm(false)}
                className="px-3 py-1.5 rounded-lg text-xs text-slate-400 hover:text-white"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-1.5 rounded-lg bg-[#cfa559] hover:bg-[#dfc282] text-[#060f0a] font-bold text-xs"
              >
                Save Walk-in
              </button>
            </div>
          </form>
        )}

        {/* Bookings List */}
        <div className="flex-1 overflow-y-auto space-y-3 pr-1 pt-3">
          {bookings.length === 0 ? (
            <div className="text-center py-12 text-slate-400">
              <p className="text-sm">No reservations logged yet.</p>
            </div>
          ) : (
            bookings.map((b) => (
              <div 
                key={b.id}
                className="p-3.5 sm:p-4 rounded-2xl bg-[#14211a]/80 border border-white/10 hover:border-white/20 transition-all flex flex-col md:flex-row md:items-center justify-between gap-3"
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-2.5 flex-wrap">
                    <span className="font-mono text-xs font-bold text-[#dfc282]">
                      {b.id}
                    </span>
                    <strong className="text-white text-sm font-semibold">
                      {b.name}
                    </strong>
                    <span className="text-xs text-slate-400">
                      ({b.phone})
                    </span>
                    <span 
                      className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                        b.status === 'Completed'
                          ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                          : b.status === 'In Session'
                          ? 'bg-blue-500/20 text-blue-300 border border-blue-500/30'
                          : 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
                      }`}
                    >
                      {b.status || 'Scheduled'}
                    </span>
                  </div>

                  <div className="text-xs text-slate-300 flex items-center gap-2 sm:gap-3 flex-wrap">
                    <span className="text-white font-medium">{b.service}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-[#dfc282]" />
                      {b.date}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3 text-[#dfc282]" />
                      {b.time}
                    </span>
                  </div>

                  {b.notes && (
                    <p className="text-[11px] text-slate-400 italic">
                      Note: {b.notes}
                    </p>
                  )}
                </div>

                {/* Instant Actions for Front Desk */}
                <div className="flex items-center gap-1.5 shrink-0 self-end md:self-center flex-wrap">
                  {/* Direct Phone Call */}
                  <a
                    href={`tel:${b.phone}`}
                    className="w-9 h-9 rounded-xl bg-white/5 hover:bg-white/10 active:scale-90 text-slate-300 hover:text-white transition-all flex items-center justify-center cursor-pointer"
                    title={`Call ${b.phone}`}
                    aria-label={`Call ${b.name}`}
                  >
                    <Phone className="w-3.5 h-3.5 text-emerald-400" />
                  </a>

                  {/* Send Free Native SMS to Customer */}
                  <a
                    href={getCustomerSmsUrl(b)}
                    className="w-9 h-9 rounded-xl bg-white/5 hover:bg-white/10 active:scale-90 text-slate-300 hover:text-white transition-all flex items-center justify-center cursor-pointer"
                    title="Send Free Confirmation SMS to Customer"
                    aria-label="Send Free Confirmation SMS"
                  >
                    <MessageSquare className="w-3.5 h-3.5 text-[#dfc282]" />
                  </a>

                  {/* Send WhatsApp Confirmation */}
                  <a
                    href={getCustomerWhatsAppUrl(b)}
                    target="_blank"
                    rel="noreferrer"
                    className="w-9 h-9 rounded-xl bg-[#25D366]/15 hover:bg-[#25D366]/25 border border-[#25D366]/30 text-[#25D366] active:scale-90 transition-all flex items-center justify-center cursor-pointer"
                    title="Send WhatsApp Confirmation"
                    aria-label="Send WhatsApp Confirmation"
                  >
                    <Send className="w-3.5 h-3.5" />
                  </a>

                  {/* Mark Completed */}
                  <button
                    type="button"
                    onClick={() => handleUpdateStatus(b.id, 'Completed')}
                    className="w-9 h-9 rounded-xl bg-white/5 hover:bg-white/10 active:scale-90 text-slate-300 hover:text-white transition-all flex items-center justify-center cursor-pointer"
                    title="Mark Completed"
                    aria-label="Mark Completed"
                  >
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                  </button>

                  {/* Delete Record */}
                  <button
                    type="button"
                    onClick={() => handleDelete(b.id)}
                    className="w-9 h-9 rounded-xl bg-white/5 hover:bg-white/10 active:scale-90 text-slate-300 hover:text-rose-400 transition-all flex items-center justify-center cursor-pointer"
                    title="Remove Record"
                    aria-label="Remove Record"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
