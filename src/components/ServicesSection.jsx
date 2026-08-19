import React, { useState } from 'react';
import { Check, Clock, Sparkles, ArrowRight, ShieldCheck, Zap, Layers, HelpCircle } from 'lucide-react';
import { siteData } from '../data/siteData';

export default function ServicesSection({ onSelectService }) {
  const [currency, setCurrency] = useState('XOF'); // 'XOF' (FCFA) or 'EUR'
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'Tous les packs' },
    { id: 'Conversion', label: 'Landing Page' },
    { id: 'Notoriété & Entreprise', label: 'Site Vitrine' },
    { id: 'Logiciel & SaaS', label: 'Applications & SaaS' },
    { id: 'Performance', label: 'Refonte & SEO' },
  ];

  const filteredServices = activeCategory === 'all' 
    ? siteData.services 
    : siteData.services.filter(s => s.category === activeCategory);

  return (
    <section id="services" className="py-20 md:py-32 bg-[#FAFBFC] border-t border-gray-200">
      <div className="mx-auto max-w-[1240px] px-5 md:px-8">
        
        {/* Header & Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-14">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-brand-primary/20 bg-brand-primary/10 px-4 py-1.5 text-xs font-extrabold uppercase tracking-wider text-brand-primary mb-4">
              <Sparkles className="h-3.5 w-3.5" />
              Offres Claires & Transparentes
            </div>
            <h2 className="font-nunito text-3xl sm:text-4xl md:text-5xl font-black text-brand-dark leading-tight">
              Des solutions web pensées pour <br className="hidden sm:inline" />
              <span className="text-brand-primary">maximiser votre chiffre d'affaires.</span>
            </h2>
            <p className="mt-3 font-montserrat text-sm sm:text-base text-gray-600 max-w-xl">
              Chaque pack inclut votre accès Espace Client, un design sur mesure, un code optimisé et une garantie de suivi.
            </p>
          </div>

          {/* Currency Toggle */}
          <div className="flex items-center self-start md:self-auto rounded-2xl bg-white p-1.5 border border-gray-200 shadow-sm">
            <button
              onClick={() => setCurrency('XOF')}
              className={`rounded-xl px-4 py-2 text-xs font-bold transition-all ${
                currency === 'XOF' 
                  ? 'bg-brand-dark text-white shadow-sm' 
                  : 'text-gray-600 hover:text-brand-dark'
              }`}
            >
              FCFA (XOF)
            </button>
            <button
              onClick={() => setCurrency('EUR')}
              className={`rounded-xl px-4 py-2 text-xs font-bold transition-all ${
                currency === 'EUR' 
                  ? 'bg-brand-dark text-white shadow-sm' 
                  : 'text-gray-600 hover:text-brand-dark'
              }`}
            >
              Euros (€)
            </button>
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 hide-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`shrink-0 rounded-full px-5 py-2 text-xs font-bold transition-all ${
                activeCategory === cat.id
                  ? 'bg-brand-primary text-white shadow-glow-sm'
                  : 'bg-white text-gray-600 border border-gray-200 hover:border-brand-primary/40 hover:text-brand-dark'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {filteredServices.map((srv) => (
            <div
              key={srv.id}
              className="card-lift rounded-[32px] border border-gray-200/90 bg-white p-7 sm:p-9 flex flex-col justify-between shadow-card-soft relative group"
            >
              {/* Badge */}
              {srv.badge && (
                <div className="absolute top-6 right-6">
                  <span className="rounded-full bg-brand-primary/10 border border-brand-primary/20 px-3.5 py-1 text-[11px] font-extrabold uppercase tracking-wider text-brand-primary">
                    {srv.badge}
                  </span>
                </div>
              )}

              <div>
                {/* Category & Title */}
                <span className="font-montserrat text-xs font-bold uppercase tracking-widest text-gray-400">
                  {srv.category}
                </span>
                
                <h3 className="mt-2 font-nunito text-2xl sm:text-3xl font-black text-brand-dark group-hover:text-brand-primary transition-colors">
                  {srv.title}
                </h3>

                <p className="mt-3 font-montserrat text-xs sm:text-sm text-gray-600 leading-relaxed">
                  {srv.tagline}
                </p>

                {/* Price Box */}
                <div className="mt-6 p-4 rounded-2xl bg-slate-50 border border-gray-100 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">TARIF ESTIMÉ</span>
                    <div className="font-nunito text-2xl font-black text-brand-dark">
                      {currency === 'XOF' ? srv.price : srv.priceEur}
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5 text-xs font-semibold text-gray-600 bg-white px-3 py-1.5 rounded-xl border border-gray-200">
                    <Clock className="h-3.5 w-3.5 text-brand-primary" />
                    <span>{srv.delay}</span>
                  </div>
                </div>

                {/* Deliverables list */}
                <div className="mt-6">
                  <h4 className="font-montserrat text-xs font-bold uppercase tracking-wider text-brand-dark mb-3">
                    Livrables & Avantages inclus :
                  </h4>
                  <ul className="space-y-2.5">
                    {srv.deliverables.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-xs sm:text-[13px] text-gray-700">
                        <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 mt-0.5">
                          <Check className="h-3 w-3 stroke-[3]" />
                        </div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Card Footer & Action */}
              <div className="mt-8 pt-6 border-t border-gray-100 flex items-center justify-between">
                <div className="flex items-center gap-1.5 text-[11px] font-semibold text-emerald-600">
                  <ShieldCheck className="h-4 w-4" />
                  <span>Espace Client inclus</span>
                </div>

                <button
                  onClick={() => onSelectService(srv.id)}
                  className="btn-magnetic inline-flex items-center gap-2 rounded-full bg-brand-dark px-6 py-3 text-xs font-bold text-white shadow-md hover:bg-brand-primary transition-all duration-300"
                >
                  <span>Me contacter</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Custom Project Note */}
        <div className="mt-14 rounded-3xl border border-brand-primary/20 bg-gradient-to-r from-brand-dark via-[#1A1A2E] to-[#252542] p-8 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="flex items-center gap-5">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-brand-primary text-white shadow-glow-sm">
              <Zap className="h-7 w-7" />
            </div>
            <div>
              <h4 className="font-nunito text-xl font-bold">Vous avez un projet sur-mesure ou complexe ?</h4>
              <p className="mt-1 text-xs sm:text-sm text-gray-300">
                Architecture API spécifique, SaaS multi-tenant, intégration ERP ou audit de sécurité.
              </p>
            </div>
          </div>

          <button
            onClick={() => onSelectService('sur-mesure')}
            className="btn-magnetic shrink-0 rounded-full bg-white px-8 py-3.5 font-montserrat text-xs sm:text-sm font-bold text-brand-dark hover:bg-brand-primary hover:text-white transition-all shadow-lg"
          >
            Discuter d'un cahier des charges
          </button>
        </div>

      </div>
    </section>
  );
}
