import React, { useState } from 'react';
import { ChevronDown, Sparkles, MessageCircle } from 'lucide-react';
import { siteData } from '../data/siteData';

export default function FAQSection({ onOpenDevis }) {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-20 md:py-32 bg-[#FAFBFC] border-t border-gray-200">
      <div className="mx-auto max-w-[960px] px-5 md:px-8">
        
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 rounded-full border border-brand-primary/20 bg-brand-primary/10 px-4 py-1.5 text-xs font-extrabold uppercase tracking-wider text-brand-primary mb-4">
            <Sparkles className="h-3.5 w-3.5" />
            Questions Fréquentes
          </div>
          <h2 className="font-nunito text-3xl sm:text-4xl md:text-5xl font-black text-brand-dark leading-tight">
            Tout ce que vous devez savoir <br />
            <span className="text-brand-primary">avant de démarrer.</span>
          </h2>
        </div>

        {/* Accordions List */}
        <div className="space-y-4">
          {siteData.faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`overflow-hidden rounded-2xl border transition-all duration-300 ${
                  isOpen ? 'border-brand-primary/40 bg-white shadow-md' : 'border-gray-200 bg-white hover:border-gray-300'
                }`}
              >
                <button
                  onClick={() => toggle(idx)}
                  className="flex w-full items-center justify-between p-5 sm:p-6 text-left"
                >
                  <span className="font-nunito text-base sm:text-lg font-bold text-brand-dark pr-4">
                    {faq.q}
                  </span>
                  <div className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-transform duration-300 ${
                    isOpen ? 'bg-brand-primary text-white rotate-180' : 'bg-gray-100 text-gray-600'
                  }`}>
                    <ChevronDown className="h-4 w-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm font-montserrat leading-relaxed text-gray-600 border-t border-gray-100 animate-in fade-in duration-200">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions banner */}
        <div className="mt-12 text-center p-6 rounded-2xl bg-white border border-gray-200 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h4 className="font-nunito text-base font-bold text-brand-dark">Vous avez une question spécifique ?</h4>
            <p className="text-xs text-gray-500">Je réponds personnellement sous 2h sur WhatsApp.</p>
          </div>

          <a
            href={siteData.profile.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-magnetic inline-flex items-center gap-2 rounded-full bg-brand-primary px-6 py-2.5 text-xs font-bold text-white shadow-sm hover:bg-brand-primary-hover"
          >
            <MessageCircle className="h-4 w-4" />
            <span>Poser ma question en direct</span>
          </a>
        </div>

      </div>
    </section>
  );
}
