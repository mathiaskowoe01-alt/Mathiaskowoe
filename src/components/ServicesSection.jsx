import React from 'react';
import { ArrowUpRight, ArrowRight, Sparkles, CheckCircle2, ShieldCheck, Zap } from 'lucide-react';

export default function ServicesSection({ onSelectService }) {
  const servicesList = [
    {
      id: 'site-vitrine',
      badge: 'Site vitrine',
      discount: 'Offre de lancement -35%',
      bannerTitle: 'REFONTE DE SITE WEB WORDPRESS & REACT',
      title: 'Refonte de site web',
      desc: 'Votre site est vieillissant ou ne convertit pas ? Je le transforme en une vitrine moderne, ultra-rapide et optimisée pour Google.',
      priceText: 'Sur devis',
      bgGradient: 'from-slate-900 via-slate-950 to-blue-950',
      badgeColor: 'bg-blue-600 text-white',
      accentColor: '#2563EB'
    },
    {
      id: 'e-commerce',
      badge: 'E-commerce',
      discount: 'Offre de lancement -35%',
      bannerTitle: 'CRÉATION DE BOUTIQUE EN LIGNE',
      title: 'Création de boutique en ligne',
      desc: 'Une boutique e-commerce complète pour vendre vos produits en ligne avec un design captivant et les passerelles MoMo / Stripe...',
      priceText: 'Sur devis',
      bgGradient: 'from-[#0B0C10] via-stone-950 to-[#1A100B]',
      badgeColor: 'bg-amber-600 text-white',
      accentColor: '#D97706'
    },
    {
      id: 'lms-elearning',
      badge: 'LMS / E-Learning',
      discount: 'Offre de lancement -35%',
      bannerTitle: 'CRÉATION DE SITE DE FORMATION (e-LEARNING)',
      title: 'Création de plateforme de cours en ligne (LMS)',
      desc: 'Une plateforme de formation en ligne complète pour héberger, vendre et gérer vos élèves avec vidéos et quiz automatiques...',
      priceText: 'Sur devis',
      bgGradient: 'from-[#0A140E] via-emerald-950 to-slate-950',
      badgeColor: 'bg-emerald-600 text-white',
      accentColor: '#059669'
    },
    {
      id: 'formation',
      badge: 'Formation & Coaching',
      discount: 'Offre de lancement -35%',
      bannerTitle: 'FORMATION ET ACCOMPAGNEMENT SUR-MESURE',
      title: 'Accompagnement création de sites',
      desc: 'Je vous accompagne personnellement pour apprendre à créer des sites web performants, administrer vos contenus et maîtriser vos outils...',
      priceText: 'Sur devis',
      bgGradient: 'from-purple-950 via-slate-950 to-indigo-950',
      badgeColor: 'bg-purple-600 text-white',
      accentColor: '#9333EA'
    },
    {
      id: 'maintenance',
      badge: 'Maintenance & Support',
      discount: 'Offre de lancement -35%',
      bannerTitle: 'MAINTENANCE ET SÉCURITÉ WEB',
      title: 'Maintenance et support technique',
      desc: 'Un forfait de maintenance pour garder votre site à jour, sécurisé et performant — mises à jour, sauvegardes et support réactif...',
      priceText: 'Sur devis',
      bgGradient: 'from-[#0B131E] via-slate-950 to-cyan-950',
      badgeColor: 'bg-cyan-600 text-white',
      accentColor: '#0891B2'
    },
    {
      id: 'design-branding',
      badge: 'Design UI/UX',
      discount: 'Offre de lancement -15%',
      bannerTitle: 'CRÉATION DE VOTRE LOGO & CHARTE GRAPHIQUE',
      title: 'Création de logo & identité visuelle',
      desc: 'Ton logo, c\'est la première chose que tes clients voient. Une charte graphique percutante et mémorable (Figma, Photoshop, Illustrator)...',
      priceText: 'Sur devis',
      bgGradient: 'from-rose-950 via-zinc-950 to-slate-950',
      badgeColor: 'bg-rose-600 text-white',
      accentColor: '#E11D48'
    }
  ];

  return (
    <section id="services" className="py-20 md:py-32 bg-[#FAFBFC] border-t border-gray-200 relative overflow-hidden">
      <div className="mx-auto max-w-[1240px] px-4 sm:px-6 md:px-8">
        
        {/* Section Header Row */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div>
            <h2 className="font-nunito text-3xl sm:text-4xl md:text-5xl font-black text-brand-dark leading-[1.15] tracking-tight">
              Mes <span className="text-[#2563EB]">services</span>
            </h2>
            <p className="mt-3 text-gray-500 font-medium text-base sm:text-lg max-w-2xl">
              Des solutions adaptées à chaque besoin et à chaque budget.
            </p>
          </div>

          {/* Top Right Action Button */}
          <button
            onClick={() => onSelectService('sur-mesure')}
            className="self-start sm:self-auto inline-flex items-center gap-3 rounded-full border border-gray-200/90 bg-white px-5 py-2.5 text-xs sm:text-sm font-bold text-brand-dark hover:border-gray-400 hover:bg-gray-50 transition-all shadow-2xs group"
          >
            <span>Voir tous mes services</span>
            <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#1A1D27] text-white transition-transform duration-300 group-hover:rotate-45">
              <ArrowUpRight className="h-4 w-4" />
            </div>
          </button>
        </div>

        {/* 6 Services Cards Grid (2 Rows of 3 Columns) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {servicesList.map((srv) => (
            <div
              key={srv.id}
              onClick={() => onSelectService(srv.id)}
              className="group cursor-pointer rounded-2xl md:rounded-3xl border border-gray-200/90 bg-white overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              {/* Card Top Visual Banner */}
              <div className={`relative aspect-[16/10] overflow-hidden bg-gradient-to-br ${srv.bgGradient} p-5 flex flex-col justify-between group-hover:scale-[1.01] transition-transform duration-500`}>
                
                {/* Top Category Badge */}
                <div className="relative z-10 flex items-center justify-between">
                  <span className="rounded-full bg-white/90 backdrop-blur-md px-3 py-1 text-[10px] font-extrabold uppercase tracking-wider text-slate-900 shadow-sm">
                    {srv.badge}
                  </span>
                  <span className="rounded-full bg-[#2563EB]/20 border border-[#2563EB]/30 backdrop-blur-md px-2.5 py-0.5 text-[9px] font-bold text-blue-300">
                    {srv.discount}
                  </span>
                </div>

                {/* Banner Headline Content */}
                <div className="relative z-10 my-auto text-left px-1">
                  <div className="flex items-center gap-1 mb-1">
                    <span className="text-[9px] font-mono text-gray-400">⭐⭐⭐⭐⭐ +80 clients satisfaits</span>
                  </div>
                  <h3 className="font-nunito font-black text-lg sm:text-xl text-white tracking-tight leading-snug">
                    {srv.bannerTitle}
                  </h3>
                </div>

                {/* Banner Bottom Decorative Strip */}
                <div className="relative z-10 flex items-center justify-between text-[9px] text-white/60 pt-2 border-t border-white/10">
                  <span>MathiasDev Services</span>
                  <span className="text-blue-400 font-bold group-hover:underline">Découvrir ↗</span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex flex-col justify-between flex-1">
                <div>
                  {/* Author / Provider Row */}
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-7 h-7 rounded-full bg-blue-50 border border-blue-200 flex items-center justify-center font-bold text-[10px] text-[#2563EB]">
                      MK
                    </div>
                    <span className="text-xs font-bold text-gray-800">Mathias KOWOE</span>
                  </div>

                  {/* Title & Desc */}
                  <h4 className="font-nunito text-lg sm:text-xl font-bold text-slate-900 group-hover:text-[#2563EB] transition-colors">
                    {srv.title}
                  </h4>
                  <p className="mt-2 text-xs text-gray-500 leading-relaxed line-clamp-3">
                    {srv.desc}
                  </p>
                </div>

                {/* Footer Action Row */}
                <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between">
                  <span className="font-nunito font-extrabold text-sm sm:text-base text-[#2563EB]">
                    {srv.priceText}
                  </span>

                  <span className="inline-flex items-center gap-1 text-xs font-bold text-slate-900 group-hover:text-[#2563EB] transition-colors">
                    <span>Découvrir</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Custom Project Note Banner */}
        <div className="mt-14 rounded-3xl border border-blue-200/80 bg-gradient-to-r from-slate-900 via-slate-950 to-blue-950 p-8 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="flex items-center gap-5">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#2563EB] text-white shadow-lg shadow-blue-500/30">
              <Zap className="h-7 w-7" />
            </div>
            <div>
              <h4 className="font-nunito text-xl font-bold">Vous avez un projet sur-mesure ou une demande spécifique ?</h4>
              <p className="mt-1 text-xs sm:text-sm text-gray-300">
                Application web métier, SaaS complexe, e-commerce sur-mesure ou accompagnement privé.
              </p>
            </div>
          </div>

          <button
            onClick={() => onSelectService('sur-mesure')}
            className="btn-magnetic shrink-0 rounded-full bg-white px-8 py-3.5 font-montserrat text-xs sm:text-sm font-bold text-slate-900 hover:bg-[#2563EB] hover:text-white transition-all shadow-lg"
          >
            Obtenir un devis instantané
          </button>
        </div>

      </div>
    </section>
  );
}
