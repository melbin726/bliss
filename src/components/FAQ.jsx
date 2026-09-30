import React, { useState } from 'react';
import { ChevronDown, HelpCircle, PhoneCall, MessageCircle } from 'lucide-react';
import { faqData } from '../data/faqData';

export default function FAQ({ onOpenBooking }) {
  const [openId, setOpenId] = useState('swedish-vs-aroma');

  const toggleAccordion = (id) => {
    setOpenId(prev => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="relative bg-[#090e0b] border-t border-white/10 py-10 sm:py-20 px-3.5 sm:px-6 lg:px-8">
      <div className="container max-w-3xl mx-auto">
        <div className="reveal text-center mb-6 sm:mb-12">
          <h2 className="font-serif text-xl sm:text-3xl lg:text-4xl font-bold text-white mb-1.5 sm:mb-2">
            Frequently Asked Questions
          </h2>
          <p className="text-[11px] sm:text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
            Essential queries regarding hygiene, oils, and booking in BTM Layout.
          </p>
        </div>

        <div className="space-y-2.5 sm:space-y-3">
          {faqData.map((item, idx) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                className={`reveal stagger-${(idx % 6) + 1} bg-[#131d17] border border-white/10 rounded-xl sm:rounded-2xl overflow-hidden transition-all duration-300 shadow-sm`}
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(item.id)}
                  aria-expanded={isOpen}
                  className="w-full min-h-[46px] sm:min-h-[50px] flex items-center justify-between p-3 sm:p-5 text-left focus:outline-none active:bg-white/5 transition-colors"
                >
                  <span className="font-serif text-xs sm:text-base font-semibold text-white pr-2.5 leading-snug">
                    {item.question}
                  </span>
                  <div
                    className={`w-6 h-6 sm:w-7 sm:h-7 rounded-full flex items-center justify-center shrink-0 border border-white/10 transition-transform duration-300 ${isOpen ? 'rotate-180 bg-[#cfa559]/20 text-[#dfc282] border-[#cfa559]/40' : 'bg-white/5 text-slate-300'
                      }`}
                  >
                    <ChevronDown className="w-3.5 h-3.5" />
                  </div>
                </button>
                {isOpen && (
                  <div className="px-3 sm:px-5 pb-3.5 pt-0 text-slate-300 text-[11px] sm:text-sm leading-relaxed border-t border-white/5">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Extra Help Callout */}
        <div className="reveal stagger-2 mt-6 sm:mt-10 p-3.5 sm:p-6 rounded-2xl bg-gradient-to-r from-[#17251d] to-[#121c16] border border-[#cfa559]/25 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-3.5 sm:gap-4 shadow-lg">
          <div>
            <h4 className="font-serif text-sm sm:text-lg font-bold text-white mb-0.5">
              Have another question?
            </h4>
            <p className="text-[11px] sm:text-xs text-slate-300">
              Front desk is available 10:00 AM – 10:00 PM: <span className="whitespace-nowrap inline-flex items-center gap-1"><strong className="text-white whitespace-nowrap">099452 64342</strong> / <strong className="text-white whitespace-nowrap">080 9526 6198</strong></span>
            </p>
          </div>
          <div className="flex items-center gap-2 shrink-0 w-full sm:w-auto flex-wrap sm:flex-nowrap">
            <a
              href="tel:09945264342"
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-full bg-white/10 hover:bg-white/15 text-white font-medium text-[11px] sm:text-xs active:scale-95 transition-all whitespace-nowrap"
              title="Call Line 1: 099452 64342"
            >
              <PhoneCall className="w-3 h-3 text-[#dfc282] shrink-0" />
              <span className="whitespace-nowrap font-mono">099452 64342</span>
            </a>
            <a
              href="tel:08095266198"
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-full bg-white/10 hover:bg-white/15 text-white font-medium text-[11px] sm:text-xs active:scale-95 transition-all whitespace-nowrap"
              title="Call Line 2: 080 9526 6198"
            >
              <PhoneCall className="w-3 h-3 text-[#dfc282] shrink-0" />
              <span className="whitespace-nowrap font-mono">080 9526 6198</span>
            </a>
            <a
              href="https://wa.me/919945264342?text=Hello%20Bliss%20Spa,%20I%20have%20a%20question%20regarding%20treatments"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-full bg-[#25D366]/15 hover:bg-[#25D366]/25 border border-[#25D366]/40 text-[#4ade80] font-medium text-[11px] sm:text-xs active:scale-95 transition-all whitespace-nowrap"
            >
              <MessageCircle className="w-3 h-3 shrink-0" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
