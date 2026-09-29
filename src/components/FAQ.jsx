import React, { useState } from 'react';
import { ChevronDown, HelpCircle, PhoneCall, MessageCircle } from 'lucide-react';
import { faqData } from '../data/faqData';

export default function FAQ({ onOpenBooking }) {
  const [openId, setOpenId] = useState('swedish-vs-aroma');

  const toggleAccordion = (id) => {
    setOpenId(prev => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="faq-section relative bg-[#090e0b] border-t border-white/10 py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
      <div className="container max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <span className="section-label inline-flex items-center gap-1.5 text-xs font-bold text-[#e6c35c] tracking-widest uppercase mb-2">
            <HelpCircle className="w-3.5 h-3.5" />
            Curious Minds Ask
          </span>
          <h2 className="section-heading font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-3">
            Frequently Asked Questions
          </h2>
          <p className="section-subtitle text-xs sm:text-base text-slate-300 max-w-xl mx-auto leading-relaxed">
            Everything you need to know about our treatments, hygiene, and booking at Bliss Spa BTM Layout.
          </p>
        </div>

        <div className="space-y-4">
          {faqData.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                className="bg-[#131d17] border border-white/10 rounded-2xl overflow-hidden transition-all duration-300 hover:border-[#e6c35c]/30 shadow-md"
              >
                <button
                  onClick={() => toggleAccordion(item.id)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between p-5 sm:p-6 text-left focus:outline-none"
                >
                  <span className="font-serif text-base sm:text-lg font-semibold text-white pr-4">
                    {item.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 border border-white/10 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 bg-[#e6c35c]/20 text-[#e6c35c] border-[#e6c35c]/40' : 'bg-white/5 text-slate-300'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>
                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-slate-300 text-xs sm:text-base leading-relaxed border-t border-white/5">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Extra Help Callout */}
        <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#17251d] to-[#121c16] border border-[#e6c35c]/30 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div>
            <h4 className="font-serif text-lg sm:text-xl font-bold text-white mb-1">
              Have another question in mind?
            </h4>
            <p className="text-xs sm:text-sm text-slate-300">
              Our front desk receptionist in BTM Layout is ready to guide you anytime between 10:00 AM – 9:00 PM.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <a
              href="tel:09945264342"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 text-white font-medium text-xs sm:text-sm transition-all"
            >
              <PhoneCall className="w-4 h-4 text-[#e6c35c]" />
              Call Reception
            </a>
            <a
              href="https://wa.me/919945264342?text=Hello%20Bliss%20Spa,%20I%20have%20a%20question%20regarding%20treatments"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[#25D366]/20 hover:bg-[#25D366]/30 border border-[#25D366]/40 text-[#4ade80] font-semibold text-xs sm:text-sm transition-all"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
