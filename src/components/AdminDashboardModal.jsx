import React, { useState, useEffect } from 'react';
import { X, Shield, Phone, Calendar, Clock, User, Check, Trash2, Plus, RefreshCw } from 'lucide-react';

export default function AdminDashboardModal({ isOpen, onClose }) {
  const [bookings, setBookings] = useState([]);
  const [showAddForm, setShowAddForm] = useState(false);
  const [walkinName, setWalkinName] = useState('');
  const [walkinPhone, setWalkinPhone] = useState('');
  const [walkinService, setWalkinService] = useState('Swedish Body Therapy');

  const loadBookings = () => {
    try {
      const stored = JSON.parse(localStorage.getItem('bliss_spa_bookings') || '[]');
      if (stored.length === 0) {
        // Pre-populate with sample recent bookings if empty so the reception desk isn't blank
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
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    if (isOpen) {
      loadBookings();
    }
  }, [isOpen]);

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

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/85 backdrop-blur-md animate-fade-in">
      <div 
        className="relative w-full max-w-4xl bg-[#0d1612] border border-[#e6c35c]/30 rounded-3xl p-6 sm:p-8 shadow-2xl overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-white/10 gap-4">
          <div>
            <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#e6c35c] tracking-widest uppercase mb-1">
              <Shield className="w-3.5 h-3.5" />
              Staff Internal Portal
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">
              Front Desk Appointment Log
            </h3>
            <p className="text-xs text-slate-400 mt-0.5">
              Live guest bookings for Bliss Spa &amp; Massage • BTM 1st Stage
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setShowAddForm(!showAddForm)}
              className="py-2 px-3.5 rounded-xl bg-[#e6c35c] hover:bg-[#d4af37] text-black font-semibold text-xs flex items-center gap-1.5 transition-colors"
            >
              <Plus className="w-4 h-4" />
              <span>Add Walk-In</span>
            </button>

            <button
              onClick={loadBookings}
              className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors"
              title="Refresh Records"
            >
              <RefreshCw className="w-4 h-4" />
            </button>

            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors"
              title="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Walk-in Entry Form */}
        {showAddForm && (
          <form onSubmit={handleAddWalkin} className="my-6 p-4 rounded-2xl bg-[#14211a] border border-[#e6c35c]/40 animate-fade-in">
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
                className="bg-[#0e1713] border border-white/15 rounded-xl px-3 py-2 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-[#e6c35c]"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                value={walkinPhone}
                onChange={(e) => setWalkinPhone(e.target.value)}
                required
                className="bg-[#0e1713] border border-white/15 rounded-xl px-3 py-2 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-[#e6c35c]"
              />
              <select
                value={walkinService}
                onChange={(e) => setWalkinService(e.target.value)}
                className="bg-[#0e1713] border border-white/15 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-[#e6c35c]"
              >
                <option value="Swedish Body Therapy">Swedish Body Therapy</option>
                <option value="Aromatherapy Calming Ritual">Aromatherapy Calming Ritual</option>
                <option value="Traditional Thai Yoga Massage">Traditional Thai Yoga</option>
                <option value="Deep Tissue Sports Recovery">Deep Tissue Sports Recovery</option>
                <option value="Ayurvedic Abhyanga & Shirodhara">Ayurvedic Abhyanga</option>
                <option value="Hot Stone Thermal Therapy">Hot Stone Thermal Therapy</option>
              </select>
            </div>
            <div className="flex justify-end gap-2">
              <button
                type="button"
                onClick={() => setShowAddForm(false)}
                className="px-3 py-1.5 rounded-lg bg-white/10 text-xs text-slate-300 hover:text-white"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-1.5 rounded-lg bg-[#e6c35c] text-black font-semibold text-xs hover:bg-[#d4af37]"
              >
                Save Walk-In
              </button>
            </div>
          </form>
        )}

        {/* Bookings List */}
        <div className="mt-6 max-h-[60vh] overflow-y-auto pr-1 space-y-3">
          {bookings.length === 0 ? (
            <div className="text-center py-12 text-slate-400 text-sm">
              No appointments in the queue. Bookings made on the website will instantly appear here.
            </div>
          ) : (
            bookings.map((b) => (
              <div
                key={b.id}
                className="p-4 rounded-2xl bg-[#121c16] border border-white/10 hover:border-white/20 transition-all flex flex-col md:flex-row md:items-center justify-between gap-4"
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="font-mono text-xs text-[#e6c35c] font-bold bg-[#e6c35c]/10 px-2 py-0.5 rounded-md border border-[#e6c35c]/20">
                      {b.id}
                    </span>
                    <span className="font-serif text-base font-bold text-white">
                      {b.name}
                    </span>
                    <span
                      className={`text-[10px] font-semibold uppercase px-2 py-0.5 rounded-full ${
                        b.status === 'Completed'
                          ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                          : b.status === 'In Session'
                          ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
                          : 'bg-blue-500/20 text-blue-300 border border-blue-500/30'
                      }`}
                    >
                      {b.status || 'Scheduled'}
                    </span>
                  </div>

                  <div className="text-xs text-slate-300 flex items-center gap-3 flex-wrap">
                    <span className="text-white font-medium">{b.service}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-[#e6c35c]" />
                      {b.date}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3 text-[#e6c35c]" />
                      {b.time}
                    </span>
                  </div>

                  {b.notes && (
                    <p className="text-[11px] text-slate-400 italic">
                      Note: {b.notes}
                    </p>
                  )}
                </div>

                {/* Actions */}
                <div className="flex items-center gap-2 shrink-0 self-end md:self-center">
                  <a
                    href={`tel:${b.phone}`}
                    className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors"
                    title={`Call ${b.phone}`}
                  >
                    <Phone className="w-4 h-4 text-emerald-400" />
                  </a>

                  <button
                    onClick={() => handleUpdateStatus(b.id, 'Completed')}
                    className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors"
                    title="Mark Completed"
                  >
                    <Check className="w-4 h-4 text-emerald-400" />
                  </button>

                  <button
                    onClick={() => handleDelete(b.id)}
                    className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-rose-400 transition-colors"
                    title="Remove Record"
                  >
                    <Trash2 className="w-4 h-4" />
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
