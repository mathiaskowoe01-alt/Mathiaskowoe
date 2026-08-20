import React, { useState } from 'react';
import { Star, Quote, Sparkles, MessageSquarePlus, CheckCircle2 } from 'lucide-react';
import { siteData } from '../data/siteData';
import ClientReviewModal from './ClientReviewModal';

export default function TestimonialsSection() {
  const [testimonialsList, setTestimonialsList] = useState(siteData.testimonials);
  const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);

  const handleAddTestimonial = (newReview) => {
    setTestimonialsList((prev) => [newReview, ...prev]);
  };

  return (
    <section id="temoignages" className="py-20 md:py-32 bg-white relative">
      <div className="mx-auto max-w-[1240px] px-5 md:px-8">
        
        {/* Header Row */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-xs font-extrabold uppercase tracking-wider text-[#2563EB] mb-4">
              <Sparkles className="h-3.5 w-3.5" />
              Retours d'Expérience & Avis Clients
            </div>
            <h2 className="font-nunito text-3xl sm:text-4xl md:text-5xl font-black text-brand-dark leading-tight">
              Ce que nos clients disent de <br className="hidden sm:inline" />
              <span className="text-[#2563EB]">notre niveau d'exigence.</span>
            </h2>
          </div>

          {/* Interactive CTA Button to open Review Modal */}
          <button
            onClick={() => setIsReviewModalOpen(true)}
            className="self-start sm:self-auto inline-flex items-center gap-2.5 rounded-full bg-[#2563EB] px-6 py-3 text-xs sm:text-sm font-bold text-white shadow-lg shadow-blue-500/25 hover:bg-[#1D4ED8] transition-all hover:scale-105"
          >
            <MessageSquarePlus className="w-4 h-4" />
            <span>Laisser un retour d'expérience</span>
          </button>
        </div>

        {/* Testimonials 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonialsList.map((t, idx) => (
            <div
              key={idx}
              className="card-lift rounded-[32px] border border-gray-200 bg-[#FAFBFC] p-7 sm:p-8 flex flex-col justify-between shadow-card-soft relative group hover:border-blue-300 transition-all duration-300"
            >
              <div>
                {/* Rating & Project Badge */}
                <div className="flex items-center justify-between">
                  <div className="flex gap-1">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="rounded-full bg-blue-50 border border-blue-100 px-3 py-0.5 text-[10px] font-bold text-[#2563EB]">
                    {t.project}
                  </span>
                </div>

                {/* Quote */}
                <p className="mt-6 font-montserrat text-xs sm:text-sm italic leading-relaxed text-gray-700">
                  « {t.quote} »
                </p>
              </div>

              {/* Author Info */}
              <div className="mt-8 pt-6 border-t border-gray-200/70 flex items-center gap-3.5">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="h-11 w-11 rounded-full object-cover border-2 border-[#2563EB] shadow-sm"
                />
                <div>
                  <div className="font-montserrat text-sm font-bold text-brand-dark">
                    {t.name}
                  </div>
                  <div className="font-montserrat text-xs text-gray-500 font-medium">
                    {t.role}
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Interactive Review Modal */}
      <ClientReviewModal
        isOpen={isReviewModalOpen}
        onClose={() => setIsReviewModalOpen(false)}
        onAddTestimonial={handleAddTestimonial}
      />
    </section>
  );
}
