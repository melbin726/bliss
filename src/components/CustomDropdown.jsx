import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, Check } from 'lucide-react';

/**
 * Custom luxury glassmorphic dropdown matching the spa's dark emerald & champagne gold theme.
 * Completely replaces generic browser native selects with smooth transitions, touch-friendly items,
 * and high-contrast readable options.
 */
export default function CustomDropdown({
  label,
  value,
  onChange,
  options = [],
  placeholder = 'Select an option',
  icon: Icon,
  className = '',
  buttonClassName = '',
  required = false
}) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };

    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  // Normalize options to uniform { value, label, subtext, badge } format
  const normalizedOptions = options.map((opt) => {
    if (typeof opt === 'string') {
      return { value: opt, label: opt };
    }
    return {
      value: opt.value,
      label: opt.label || opt.name || opt.title || opt.value,
      subtext: opt.subtext || opt.desc,
      badge: opt.badge || opt.price
    };
  });

  const selectedOption = normalizedOptions.find((opt) => opt.value === value);

  const handleSelect = (optValue) => {
    onChange(optValue);
    setIsOpen(false);
  };

  return (
    <div className={`relative ${className}`} ref={containerRef}>
      {label && (
        <label className="block text-[11px] font-semibold text-slate-300 mb-1 flex items-center gap-1.5">
          {Icon && <Icon className="w-3.5 h-3.5 text-[#dfc282] shrink-0" />}
          <span>{label}</span>
          {required && <span className="text-[#dfc282]">*</span>}
        </label>
      )}

      {/* Trigger Button */}
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        className={`w-full min-h-[42px] px-3.5 py-2 rounded-xl text-left flex items-center justify-between gap-2 transition-all cursor-pointer select-none border ${
          isOpen
            ? 'bg-[#1a2c24] border-[#cfa559] shadow-[0_0_14px_rgba(207,165,89,0.22)]'
            : 'bg-[#14221c] hover:bg-[#1a2c24]/80 border-white/15 hover:border-white/30 text-white'
        } ${buttonClassName}`}
      >
        <div className="flex items-center gap-2 min-w-0 flex-1">
          {!label && Icon && <Icon className="w-3.5 h-3.5 text-[#dfc282] shrink-0" />}
          <span className={`block truncate text-xs sm:text-sm ${selectedOption ? 'text-white font-medium' : 'text-slate-400'}`}>
            {selectedOption ? selectedOption.label : placeholder}
          </span>
        </div>

        <ChevronDown
          className={`w-4 h-4 text-[#dfc282] shrink-0 transition-transform duration-200 ${
            isOpen ? 'rotate-180' : 'rotate-0'
          }`}
        />
      </button>

      {/* Dropdown Menu Panel */}
      {isOpen && (
        <div 
          role="listbox"
          className="absolute z-50 left-0 right-0 mt-1.5 bg-[#0e1713]/98 backdrop-blur-2xl border border-[#cfa559]/35 rounded-xl shadow-[0_12px_36px_rgba(0,0,0,0.9)] overflow-hidden animate-fade-in max-h-60 overflow-y-auto scrollbar-none py-1"
        >
          {normalizedOptions.map((opt) => {
            const isSelected = opt.value === value;
            return (
              <div
                key={opt.value}
                role="option"
                aria-selected={isSelected}
                onClick={() => handleSelect(opt.value)}
                className={`px-3 py-2.5 flex items-center justify-between gap-2 cursor-pointer transition-colors text-xs sm:text-sm ${
                  isSelected
                    ? 'bg-[#cfa559]/20 text-[#dfc282] font-semibold'
                    : 'text-slate-200 hover:bg-white/10 hover:text-white'
                }`}
              >
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-1.5 truncate">
                    <span className="truncate">{opt.label}</span>
                  </div>
                  {opt.subtext && (
                    <span className="block text-[10px] text-slate-400 font-normal truncate mt-0.5">
                      {opt.subtext}
                    </span>
                  )}
                </div>

                <div className="flex items-center gap-1.5 shrink-0">
                  {opt.badge && (
                    <span className="text-[10px] font-semibold bg-[#cfa559]/15 border border-[#cfa559]/30 text-[#dfc282] px-1.5 py-0.5 rounded-full font-mono">
                      {opt.badge}
                    </span>
                  )}
                  {isSelected && (
                    <Check className="w-3.5 h-3.5 text-[#dfc282] shrink-0" />
                  )}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
