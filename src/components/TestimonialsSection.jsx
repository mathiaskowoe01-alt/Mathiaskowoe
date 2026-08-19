import React from 'react';
import { Star, Quote, CheckCircle2, Sparkles } from 'lucide-react';
import { siteData } from '../data/siteData';

export default function TestimonialsSection() {
  return (
    <section className="py-20 md:py-32 bg-white relative">
      <div className="mx-auto max-w-[1240px] px-5 md:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-brand-primary/20 bg-brand-primary/10 px-4 py-1.5 text-xs font-extrabold uppercase tracking-wider text-brand-primary mb-4">
            <Sparkles className="h-3.5 w-3.5" />
            Retours d'Expérience
          </div>
          <h2 className="font-nunito text-3xl sm:text-4xl md:text-5xl font-black text-brand-dark leading-tight">
            Ce que nos clients disent de <br className="hidden sm:inline" />
            <span className="text-brand-primary">notre niveau d'exigence.</span>
          </h2>
        </div>

        {/* Testimonials 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {siteData.testimonials.map((t, idx) => (
            <div
              key={idx}
              className="card-lift rounded-[32px] border border-gray-200 bg-[#FAFBFC] p-7 sm:p-8 flex flex-col justify-between shadow-card-soft relative"
            >
              <div>
                {/* Rating & Project Badge */}
                <div className="flex items-center justify-between">
                  <div className="flex gap-1">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-brand-primary text-brand-primary" />
                    ))}
                  </div>
                  <span className="rounded-full bg-slate-200/60 px-3 py-0.5 text-[10px] font-bold text-gray-700">
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
                  className="h-12 w-12 rounded-full object-cover border-2 border-brand-primary shadow-sm"
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
    </section>
  );
}
