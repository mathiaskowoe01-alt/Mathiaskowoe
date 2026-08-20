import React, { useState } from 'react';
import { BookOpen, Clock, ArrowUpRight, Sparkles, X, User } from 'lucide-react';

export default function BlogSection() {
  const [activeArticle, setActiveArticle] = useState(null);

  const articles = [
    {
      id: 'saas-react-supabase',
      title: 'Comment créer un SaaS rentable avec React 19 & Supabase en 2026',
      excerpt: 'Guide étape par étape pour concevoir une architecture SaaS scalable, gérer l\'authentification, les abonnements Stripe/MoMo et déployer sur Vercel.',
      category: 'Développement SaaS',
      readTime: '5 min de lecture',
      date: '20 Août 2026',
      author: 'Mathias KOWOE',
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format&fit=crop&q=80',
      content: `Développer un Software-as-a-Service (SaaS) performant en 2026 exige rapidité, sécurité et scalabilité. En associant React 19 pour l'interface utilisateur dynamique et Supabase pour la base de données PostgreSQL temps réel, vous bénéficiez de performances industrielles à moindre coût.\n\n1. Architecture Backend Supabase (Auth, RLS & Storage)\n2. Formulaires et état réactif avec React 19 Hooks\n3. Intégration des paiements récurrents et Mobile Money (FedaPay / Stripe)\n4. Déploiement CI/CD automatisé sur Vercel Edge Network.`
    },
    {
      id: 'ui-ux-conversion-mistakes',
      title: 'Les 5 erreurs UI/UX majeures qui ruinent votre taux de conversion',
      excerpt: 'Analyse ergonomique des pièges les plus fréquents sur les sites vitrines et landing pages, et comment les corriger pour doubler vos ventes.',
      category: 'Design UI/UX',
      readTime: '4 min de lecture',
      date: '15 Août 2026',
      author: 'Mathias KOWOE',
      image: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=800&auto=format&fit=crop&q=80',
      content: `Un design magnifique ne sert à rien s'il ne convertit pas les visiteurs en clients payants. Voici les 5 erreurs les plus dévastatrices relevées lors de nos audits :\n\n1. Des boutons Call-to-Action (CTA) noyés dans la masse visuelle\n2. Une hiérarchie typographique confuse sans contraste clair\n3. Des temps de chargement trop longs sur smartphone\n4. L'absence de preuves sociales et de témoignages clients certifiés\n5. Des formulaires de contact trop longs et décourageants.`
    },
    {
      id: 'vibe-coding-ai-workflow',
      title: 'Vibe Coding & IA : Multiplier sa vitesse de développement par 10',
      excerpt: 'Découvrez comment les outils agentiques comme Claude AI, Cursor et Antigravity révolutionnent la création web pour les créateurs et entreprises.',
      category: 'IA & Productivité',
      readTime: '6 min de lecture',
      date: '10 Août 2026',
      author: 'Mathias KOWOE',
      image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&auto=format&fit=crop&q=80',
      content: `Le Vibe Coding n'est pas un gadget : c'est le nouveau paradigme du développement logiciel. En déléguant le boilerplate et le refactoring lourd aux agents IA guidés par une vision produit claire, l'ingénieur frontend devient un chef d'orchestre créatif.\n\n- Automatisation des tests et builds\n- Intégration fluide de composants sur-mesure\n- Gain de temps massif centré sur l'expérience utilisateur et les besoins clients.`
    }
  ];

  return (
    <section id="blog" className="py-20 md:py-32 bg-white relative overflow-hidden">
      <div className="mx-auto max-w-[1240px] px-4 sm:px-6 md:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-blue-50 border border-blue-200/80 px-4 py-1 text-xs font-black uppercase tracking-wider text-[#2563EB] shadow-sm mb-3">
              <BookOpen className="h-3.5 w-3.5 text-[#2563EB]" />
              BLOG & ARTICLES TECH
            </span>
            <h2 className="font-nunito text-3xl sm:text-4xl md:text-5xl font-black text-brand-dark leading-[1.15] tracking-tight">
              Derniers articles & <span className="text-[#2563EB]">conseils stratégiques</span>
            </h2>
            <p className="mt-3 text-gray-500 font-medium text-base sm:text-lg max-w-2xl">
              Découvrez nos analyses, tutoriels et bonnes pratiques en développement web, IA et design.
            </p>
          </div>

          <a
            href="https://mon-cv-self.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="self-start sm:self-auto inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-5 py-2.5 text-xs sm:text-sm font-bold text-slate-900 hover:bg-gray-50 transition-all shadow-2xs"
          >
            <span>Voir tous les articles</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        {/* 3 Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((art) => (
            <article
              key={art.id}
              onClick={() => setActiveArticle(art)}
              className="group cursor-pointer rounded-3xl border border-gray-200/90 bg-[#FAFBFC] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              {/* Article Image Banner */}
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-900">
                <img
                  src={art.image}
                  alt={art.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
                
                {/* Category Pill Badge */}
                <div className="absolute top-4 left-4">
                  <span className="rounded-full bg-white/90 backdrop-blur-md px-3 py-1 text-[10px] font-extrabold uppercase tracking-wider text-slate-900 shadow-sm">
                    {art.category}
                  </span>
                </div>
              </div>

              {/* Body */}
              <div className="p-6 flex flex-col justify-between flex-1">
                <div>
                  <div className="flex items-center gap-3 text-xs text-gray-500 font-medium mb-3">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-[#2563EB]" />
                      {art.readTime}
                    </span>
                    <span>•</span>
                    <span>{art.date}</span>
                  </div>

                  <h3 className="font-nunito text-lg font-bold text-slate-900 group-hover:text-[#2563EB] transition-colors leading-snug">
                    {art.title}
                  </h3>

                  <p className="mt-2.5 text-xs text-gray-600 leading-relaxed line-clamp-3">
                    {art.excerpt}
                  </p>
                </div>

                {/* Read More Footer */}
                <div className="mt-6 pt-4 border-t border-gray-200/70 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-blue-100 text-[#2563EB] flex items-center justify-center font-bold text-[9px]">
                      MK
                    </div>
                    <span className="text-xs font-bold text-slate-700">{art.author}</span>
                  </div>

                  <span className="text-xs font-bold text-[#2563EB] flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    <span>Lire l'article</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </div>

              </div>

            </article>
          ))}
        </div>

      </div>

      {/* Article Reader Modal */}
      {activeArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-2xl overflow-hidden rounded-[32px] bg-white p-6 sm:p-8 shadow-2xl animate-in zoom-in-95 duration-200 max-h-[90vh] overflow-y-auto">
            
            <div className="flex items-center justify-between pb-4 border-b border-gray-100">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#2563EB]">
                  {activeArticle.category} • {activeArticle.readTime}
                </span>
                <h3 className="font-nunito text-xl sm:text-2xl font-black text-slate-900">
                  {activeArticle.title}
                </h3>
              </div>
              <button
                onClick={() => setActiveArticle(null)}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 shrink-0"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="mt-5 rounded-2xl overflow-hidden aspect-[16/9] border border-gray-200">
              <img
                src={activeArticle.image}
                alt={activeArticle.title}
                className="h-full w-full object-cover"
              />
            </div>

            <div className="mt-6 whitespace-pre-line text-sm text-gray-700 leading-relaxed font-montserrat">
              {activeArticle.content}
            </div>

            <div className="mt-8 pt-6 border-t border-gray-100 flex justify-end">
              <button
                onClick={() => setActiveArticle(null)}
                className="px-6 py-2.5 rounded-full bg-[#1A1D27] text-white font-bold text-xs hover:bg-black transition-all"
              >
                Fermer l'article
              </button>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}
