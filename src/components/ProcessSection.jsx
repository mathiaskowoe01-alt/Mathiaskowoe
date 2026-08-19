import React from 'react';
import { Sparkles, ArrowRight, ShieldCheck, CheckCircle2, Clock } from 'lucide-react';
import { siteData } from '../data/siteData';

export default function ProcessSection({ onOpenDevis }) {
  return (
    <section id="processus" className="py-20 md:py-32 bg-[#FAFBFC] border-t border-gray-200">
      <div className="mx-auto max-w-[1240px] px-5 md:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 rounded-full border border-brand-primary/20 bg-brand-primary/10 px-4 py-1.5 text-xs font-extrabold uppercase tracking-wider text-brand-primary mb-4">
            <Sparkles className="h-3.5 w-3.5" />
            Méthodologie Éprouvée
          </div>
          <h2 className="font-nunito text-3xl sm:text-4xl md:text-5xl font-black text-brand-dark leading-tight">
            Un processus en 4 étapes pour <br className="hidden sm:inline" />
            <span className="text-brand-primary">garantir votre tranquillité.</span>
          </h2>
          <p className="mt-3 font-montserrat text-sm sm:text-base text-gray-600">
            De la signature du contrat à la mise en ligne, chaque journée est planifiée dans votre Espace Client.
          </p>
        </div>

        {/* 4-Step Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {siteData.processSteps.map((step, idx) => (
            <div
              key={idx}
              className="card-lift rounded-[32px] border border-gray-200 bg-white p-7 flex flex-col justify-between shadow-card-soft relative group"
            >
              <div>
                {/* Number & Duration */}
                <div className="flex items-center justify-between">
                  <span className="font-nunito text-4xl font-black text-gray-200 group-hover:text-brand-primary transition-colors">
                    {step.number}
                  </span>
                  <span className="inline-flex items-center gap-1 rounded-full bg-slate-100 px-3 py-1 text-[11px] font-bold text-gray-600">
                    <Clock className="h-3 w-3 text-brand-primary" />
                    {step.duration}
                  </span>
                </div>

                <h3 className="mt-6 font-nunito text-xl font-bold text-brand-dark leading-snug">
                  {step.title}
                </h3>

                <p className="mt-3 font-montserrat text-xs leading-relaxed text-gray-600">
                  {step.desc}
                </p>
              </div>

              {/* Bottom Step Check */}
              <div className="mt-8 pt-4 border-t border-gray-100 flex items-center gap-2 text-xs font-semibold text-emerald-600">
                <CheckCircle2 className="h-4 w-4 shrink-0" />
                <span>Validation dans le portail</span>
              </div>
            </div>
          ))}
        </div>

        {/* SLA Guarantee Banner */}
        <div className="mt-14 rounded-3xl border border-emerald-200 bg-emerald-50/60 p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-emerald-500 text-white shadow-md">
              <ShieldCheck className="h-6 w-6" />
            </div>
            <div>
              <h4 className="font-nunito text-base sm:text-lg font-bold text-emerald-950">
                Engagement de Ponctualité & Garantie 60 jours
              </h4>
              <p className="text-xs sm:text-sm text-emerald-800">
                Chaque jour de retard non justifié vous donne droit à une remise de 5% sur la prestation.
              </p>
            </div>
          </div>

          <button
            onClick={onOpenDevis}
            className="btn-magnetic shrink-0 rounded-full bg-emerald-600 px-7 py-3 text-xs sm:text-sm font-bold text-white shadow-md hover:bg-emerald-700 transition-colors"
          >
            Démarrer sous 48h
          </button>
        </div>

      </div>
    </section>
  );
}
