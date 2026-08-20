import React from 'react';
import { ArrowUpRight, ExternalLink } from 'lucide-react';

export default function PortfolioSection({ onOpenDevis }) {
  const openProject = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const row1Projects = [
    {
      id: 'epf',
      url: 'https://epf-recencement.vercel.app/',
      domain: 'epf-recencement.vercel.app',
      badge: 'Official 2026',
      tag: 'RECENSEMENT NATIONAL OFFICIEL 2026',
      title: 'Bâtissons ensemble',
      highlight: "l'avenir de nos ministères.",
      desc: "La plateforme officielle pour l'identification, la structuration et la valorisation des choristes, fanfaristes et musiciens.",
      cta: 'Démarrer mon recensement ➔',
      theme: 'blue',
      bgColor: 'from-blue-50/60 via-white to-slate-50',
      borderColor: 'border-blue-200/80 hover:border-blue-400',
      accentText: 'text-blue-600',
      stats: [
        { val: '10 000+', lbl: 'Membres' },
        { val: '500+', lbl: 'Assemblées' },
        { val: '30+', lbl: 'Districts' }
      ]
    },
    {
      id: 'resto',
      url: 'https://resto-saas-roan.vercel.app/',
      domain: 'resto-saas-roan.vercel.app',
      badge: 'Menu Digital',
      tag: 'GASTRONOMIE AFRICAINE',
      title: 'Zaagoor',
      highlight: 'Restaurant',
      desc: 'Restaurant gastronomique proposant une cuisine africaine moderne avec des saveurs authentiques et des ingrédients locaux.',
      cta: '📍 Cotonou, Bénin • 📞 +229 01 57 30 76 77',
      theme: 'amber',
      bgColor: 'from-[#0F0C08] via-[#1A150F] to-black',
      borderColor: 'border-amber-500/30 hover:border-amber-500',
      accentText: 'text-amber-500',
      isDark: true,
      stats: [
        { val: 'Entrées 🥗', lbl: 'Fraîcheur' },
        { val: 'Plats 🍽️', lbl: 'Gourmand' },
        { val: 'Grillades 🔥', lbl: 'Spécialité' }
      ]
    },
    {
      id: 'retab-jus',
      url: 'https://re-tab.vercel.app/',
      domain: 're-tab.vercel.app',
      badge: 'BIENVENUE AU ReTAB',
      tag: 'JUS 100% NATURELS',
      title: 'La Pureté de l\'Ananas',
      highlight: 'Béninois.',
      desc: 'Des jus 100% naturels pressés à froid par le Réseau des Transformateurs d\'Ananas du Bénin. Sans eau, sans sucre ajouté.',
      cta: 'Explorer nos Jus ↗',
      theme: 'emerald',
      bgColor: 'from-[#0A140E] via-[#102017] to-black',
      borderColor: 'border-emerald-600/30 hover:border-emerald-500',
      accentText: 'text-amber-400',
      isDark: true,
      stats: [
        { val: 'Pressé', lbl: 'À froid' },
        { val: '100%', lbl: 'Naturel' },
        { val: 'Bio', lbl: 'Local' }
      ]
    }
  ];

  const row2Projects = [
    {
      id: 'africa-lms',
      url: 'https://africa-lms-projets.vercel.app/',
      domain: 'africa-lms-projets.vercel.app',
      badge: 'LMS Scolaire',
      tag: 'GESTION SCOLAIRE INTELLIGENTE',
      title: 'Système de Gestion',
      highlight: 'Scolaire Intelligent',
      desc: 'Accès Démo : Directeur, Secrétaire, Surveillant, Professeur, Élève, Parent.',
      cta: 'Accéder aux Démos ➔',
      theme: 'orange',
      bgColor: 'from-[#0C1017] via-[#141A26] to-black',
      borderColor: 'border-orange-500/30 hover:border-orange-500',
      accentText: 'text-orange-500',
      isDark: true,
      stats: [
        { val: '1 245', lbl: 'Élèves' },
        { val: '94%', lbl: 'Présence' },
        { val: '13.5/20', lbl: 'Moyenne' }
      ]
    },
    {
      id: 'retab-tech',
      url: 'https://re-tab.vercel.app/',
      domain: 're-tab.vercel.app',
      badge: 'Consulting & Dev',
      tag: 'ARCHITECTURES SCALABLES',
      title: 'Plateforme & Consulting',
      highlight: 'Web Sur-Mesure',
      desc: 'Optimisation de processus métiers, intégration d\'outils digitaux & accompagnement stratégique.',
      cta: 'Consulter l\'offre ↗',
      theme: 'cyan',
      bgColor: 'from-[#0B131E] via-[#121B2B] to-black',
      borderColor: 'border-cyan-500/30 hover:border-cyan-400',
      accentText: 'text-cyan-400',
      isDark: true,
      stats: [
        { val: 'SaaS', lbl: 'Métier' },
        { val: 'API', lbl: 'Sécurisée' },
        { val: 'Cloud', lbl: 'Scalable' }
      ]
    },
    {
      id: 'cv-online',
      url: 'https://mon-cv-self.vercel.app/',
      domain: 'mon-cv-self.vercel.app',
      badge: 'Portfolio & CV',
      tag: 'DEPUIS 2022',
      title: 'Transformateur d\'idées en',
      highlight: 'projets digitaux puissants',
      desc: 'Développeur Web Fullstack, Designer UI/UX, Monteur Vidéo & Formateur.',
      cta: 'Découvrir mon CV ↗',
      theme: 'rose',
      bgColor: 'from-[#160D18] via-[#221426] to-black',
      borderColor: 'border-rose-500/30 hover:border-rose-400',
      accentText: 'text-rose-400',
      isDark: true,
      stats: [
        { val: '3+ ans', lbl: 'Expérience' },
        { val: '50+', lbl: 'Projets' },
        { val: '92+', lbl: 'Clients' }
      ]
    }
  ];

  // Tripled lists for seamless loop
  const infiniteRow1 = [...row1Projects, ...row1Projects, ...row1Projects];
  const infiniteRow2 = [...row2Projects, ...row2Projects, ...row2Projects];

  return (
    <section id="portfolio" className="py-20 md:py-32 bg-white relative overflow-hidden">
      <div className="mx-auto max-w-[1240px] px-4 sm:px-6 md:px-8">
        
        {/* Section Header Row */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10">
          <div>
            <h2 className="font-nunito text-3xl sm:text-4xl md:text-5xl font-black text-brand-dark leading-[1.15] tracking-tight">
              Mon <span className="text-[#2563EB]">portfolio</span>
            </h2>
            <p className="mt-3 text-gray-500 font-medium text-base sm:text-lg max-w-2xl">
              Quelques projets récents dont je suis fier, du site vitrine à l'application web complexe.
            </p>
          </div>

          {/* Top Right Action Button */}
          <a
            href="https://mon-cv-self.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="self-start sm:self-auto inline-flex items-center gap-3 rounded-full border border-gray-200/90 bg-white px-5 py-2.5 text-xs sm:text-sm font-bold text-brand-dark hover:border-gray-400 hover:bg-gray-50 transition-all shadow-2xs group"
          >
            <span>Voir tout le portfolio</span>
            <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#1A1D27] text-white transition-transform duration-300 group-hover:rotate-45">
              <ArrowUpRight className="h-4 w-4" />
            </div>
          </a>
        </div>

        {/* Large Rounded Container Card (Exact screenshot wrapper) */}
        <div className="rounded-[28px] md:rounded-[36px] border border-gray-200/80 bg-[#F8FAFC] p-4 sm:p-6 md:p-8 shadow-sm overflow-hidden space-y-6">
          
          {/* ROW 1: AUTO SCROLL LEFT (Inside the rounded box) */}
          <div className="flex overflow-hidden group/track">
            <div className="flex gap-6 animate-marquee-left group-hover/track:[animation-play-state:paused] shrink-0">
              {infiniteRow1.map((proj, idx) => (
                <div
                  key={`r1-${idx}`}
                  onClick={() => openProject(proj.url)}
                  className={`w-[320px] sm:w-[380px] shrink-0 cursor-pointer rounded-2xl md:rounded-3xl overflow-hidden border bg-white shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col justify-between ${proj.borderColor}`}
                >
                  {/* Browser Window Header */}
                  <div className={`px-4 py-2.5 flex items-center justify-between border-b ${proj.isDark ? 'bg-[#181920] border-gray-800' : 'bg-slate-100/90 border-gray-200'}`}>
                    <div className="flex items-center gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-rose-400"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-amber-400"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-emerald-400"></div>
                    </div>
                    <div className={`rounded-md px-3 py-0.5 text-[10px] font-mono font-bold truncate max-w-[170px] ${proj.isDark ? 'bg-black text-gray-300 border border-gray-800' : 'bg-white text-blue-700 border border-gray-200'}`}>
                      {proj.domain}
                    </div>
                    <ExternalLink className={`w-3.5 h-3.5 ${proj.isDark ? 'text-gray-500' : 'text-gray-400'}`} />
                  </div>

                  {/* Hero Preview Card Content */}
                  <div className={`relative bg-gradient-to-br ${proj.bgColor} p-5 min-h-[250px] flex flex-col justify-between`}>
                    <div className="flex items-center justify-between text-[11px] font-bold mb-3">
                      <span className={`rounded-full px-2.5 py-0.5 text-[9px] font-bold border ${proj.isDark ? 'bg-white/10 text-white border-white/20' : 'bg-blue-100 text-blue-700 border-blue-200'}`}>
                        {proj.badge}
                      </span>
                      <span className={`text-[9px] font-bold ${proj.accentText}`}>↗ Live Site</span>
                    </div>

                    <div className="relative z-10 my-auto text-left">
                      <h3 className={`font-nunito font-black text-xl tracking-tight leading-snug ${proj.isDark ? 'text-white' : 'text-slate-900'}`}>
                        {proj.title} <br />
                        <span className={proj.accentText}>{proj.highlight}</span>
                      </h3>
                      <p className={`mt-1.5 text-[10px] leading-relaxed line-clamp-2 ${proj.isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                        {proj.desc}
                      </p>
                    </div>

                    <div className={`mt-4 pt-3 border-t grid grid-cols-3 gap-1 text-center text-[9px] font-bold ${proj.isDark ? 'border-gray-800/80 text-white' : 'border-gray-200/80 text-slate-700'}`}>
                      {proj.stats.map((st, sIdx) => (
                        <div key={sIdx} className={`rounded p-1 ${proj.isDark ? 'bg-gray-900/80 border border-gray-800' : 'bg-white/80 border border-gray-100'}`}>
                          <span className={`block font-extrabold text-[10px] ${proj.accentText}`}>{st.val}</span>
                          <span className="text-[7px] text-gray-400 uppercase">{st.lbl}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ROW 2: AUTO SCROLL RIGHT (Inside the rounded box) */}
          <div className="flex overflow-hidden group/track">
            <div className="flex gap-6 animate-marquee-right group-hover/track:[animation-play-state:paused] shrink-0">
              {infiniteRow2.map((proj, idx) => (
                <div
                  key={`r2-${idx}`}
                  onClick={() => openProject(proj.url)}
                  className={`w-[320px] sm:w-[380px] shrink-0 cursor-pointer rounded-2xl md:rounded-3xl overflow-hidden border bg-white shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col justify-between ${proj.borderColor}`}
                >
                  {/* Browser Window Header */}
                  <div className="px-4 py-2.5 flex items-center justify-between border-b bg-[#181920] border-gray-800">
                    <div className="flex items-center gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-rose-400"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-amber-400"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-emerald-400"></div>
                    </div>
                    <div className="rounded-md px-3 py-0.5 text-[10px] font-mono font-bold truncate max-w-[170px] bg-black text-gray-300 border border-gray-800">
                      {proj.domain}
                    </div>
                    <ExternalLink className="w-3.5 h-3.5 text-gray-500" />
                  </div>

                  {/* Hero Preview Card Content */}
                  <div className={`relative bg-gradient-to-br ${proj.bgColor} p-5 min-h-[250px] flex flex-col justify-between`}>
                    <div className="flex items-center justify-between text-[11px] font-bold mb-3">
                      <span className="rounded-full px-2.5 py-0.5 text-[9px] font-bold border bg-white/10 text-white border-white/20">
                        {proj.badge}
                      </span>
                      <span className={`text-[9px] font-bold ${proj.accentText}`}>↗ Live Site</span>
                    </div>

                    <div className="relative z-10 my-auto text-left">
                      <h3 className="font-nunito font-black text-xl tracking-tight leading-snug text-white">
                        {proj.title} <br />
                        <span className={proj.accentText}>{proj.highlight}</span>
                      </h3>
                      <p className="mt-1.5 text-[10px] leading-relaxed line-clamp-2 text-gray-300">
                        {proj.desc}
                      </p>
                    </div>

                    <div className="mt-4 pt-3 border-t grid grid-cols-3 gap-1 text-center text-[9px] font-bold border-gray-800/80 text-white">
                      {proj.stats.map((st, sIdx) => (
                        <div key={sIdx} className="rounded p-1 bg-gray-900/80 border border-gray-800">
                          <span className={`block font-extrabold text-[10px] ${proj.accentText}`}>{st.val}</span>
                          <span className="text-[7px] text-gray-400 uppercase">{st.lbl}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom Center Action Button */}
        <div className="mt-8 flex justify-center">
          <a
            href="https://mon-cv-self.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 rounded-full bg-[#1A1D27] px-8 py-3.5 text-sm font-bold text-white shadow-xl hover:bg-black transition-all duration-300 hover:scale-105"
          >
            <span>Voir tout le portfolio</span>
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>

      </div>
    </section>
  );
}
