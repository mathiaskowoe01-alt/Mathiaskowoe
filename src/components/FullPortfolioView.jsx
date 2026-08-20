import React, { useState, useMemo } from 'react';
import { Search, X, ExternalLink, ArrowUpRight, CheckCircle, ShieldCheck, Sparkles, Layers } from 'lucide-react';

export default function FullPortfolioView({ isOpen, onClose, onOpenDevis }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Tous les projets');
  const [selectedTech, setSelectedTech] = useState([]);

  // REAL AUTHENTIC PROJECTS OF MATHIAS KOWOE
  const projectsData = [
    {
      id: 'epf-recensement',
      title: 'EPF Recensement',
      category: 'Application web',
      url: 'https://epf-recencement.vercel.app/',
      domain: 'epf-recencement.vercel.app',
      tagline: 'RECENSEMENT NATIONAL OFFICIEL 2026',
      desc: 'Plateforme web de recensement, gestion et suivi statistique en temps réel des données pour EPF. Interface ultra-rapide avec graphiques réactifs.',
      tech: ['React', 'Tailwind CSS', 'Node.js', 'Vercel'],
      badge: 'Application web',
      bgColor: 'from-[#0B132B] via-[#1C2541] to-[#0B132B]',
      accentColor: 'text-cyan-400',
      borderColor: 'border-cyan-500/30',
      btnColor: 'bg-cyan-500 hover:bg-cyan-600'
    },
    {
      id: 'resto-saas',
      title: 'Zaagoor - Resto SaaS',
      category: 'Application web',
      url: 'https://resto-saas-roan.vercel.app/',
      domain: 'resto-saas-roan.vercel.app',
      tagline: 'SAAS RESTAURANT & COMMANDES EN LIGNE',
      desc: 'Solution SaaS complète pour restaurants : menus digitaux QR Code, gestion des commandes en direct et suivi des tables en temps réel.',
      tech: ['Next.js 14', 'Tailwind CSS', 'Supabase', 'Vercel'],
      badge: 'Application web',
      bgColor: 'from-[#1A0B2E] via-[#2A1B40] to-[#11052C]',
      accentColor: 'text-amber-400',
      borderColor: 'border-amber-500/30',
      btnColor: 'bg-amber-500 hover:bg-amber-600'
    },
    {
      id: 're-tab',
      title: 'Re-Tab (Jus Artisanaux)',
      category: 'Site vitrine',
      url: 'https://re-tab.vercel.app/',
      domain: 're-tab.vercel.app',
      tagline: 'E-COMMERCE & JUS ARTISANAUX',
      desc: 'Site vitrine e-commerce épuré et moderne pour la marque de jus artisanaux et naturels Re-Tab. Expérience visuelle immersive.',
      tech: ['React', 'Tailwind CSS', 'Framer', 'Vercel'],
      badge: 'Site vitrine',
      bgColor: 'from-[#0F1E14] via-[#183321] to-[#0A140D]',
      accentColor: 'text-emerald-400',
      borderColor: 'border-emerald-500/30',
      btnColor: 'bg-emerald-500 hover:bg-emerald-600'
    },
    {
      id: 'africa-lms',
      title: 'EduAfrica - Plateforme LMS',
      category: 'Formation',
      url: 'https://africa-lms-projets.vercel.app/',
      domain: 'africa-lms-projets.vercel.app',
      tagline: 'PLATEFORME E-LEARNING AFRIQUE 2026',
      desc: 'Plateforme de formation en ligne (LMS) complète pour étudiants et formateurs africains avec streaming vidéo, quizz et certifications.',
      tech: ['Next.js 14', 'Tailwind CSS', 'Supabase', 'Bunny Stream'],
      badge: 'Formation',
      bgColor: 'from-[#0B1528] via-[#162A4D] to-[#09101F]',
      accentColor: 'text-blue-400',
      borderColor: 'border-blue-500/30',
      btnColor: 'bg-blue-600 hover:bg-blue-700'
    },
    {
      id: 'mon-cv',
      title: 'Mon CV Online & Portfolio',
      category: 'Site vitrine',
      url: 'https://mon-cv-self.vercel.app/',
      domain: 'mon-cv-self.vercel.app',
      tagline: 'PORTFOLIO & EXPÉRIENCE PROFESSIONNELLE',
      desc: 'Portfolio interactif & CV digital présentant mes projets web, mes 13 compétences clés, mon parcours et opportunités de recrutement.',
      tech: ['React', 'Tailwind CSS', 'Vercel'],
      badge: 'Site vitrine',
      bgColor: 'from-[#1A0B1A] via-[#2D122D] to-[#120712]',
      accentColor: 'text-rose-400',
      borderColor: 'border-rose-500/30',
      btnColor: 'bg-rose-600 hover:bg-rose-700'
    }
  ];

  const categories = [
    { name: 'Tous les projets', count: projectsData.length },
    { name: 'Application web', count: projectsData.filter(p => p.category === 'Application web').length },
    { name: 'Site vitrine', count: projectsData.filter(p => p.category === 'Site vitrine').length },
    { name: 'Formation', count: projectsData.filter(p => p.category === 'Formation').length }
  ];

  const allTechList = ['React', 'Tailwind CSS', 'Next.js 14', 'Supabase', 'Bunny Stream', 'Vercel', 'Node.js', 'Framer'];

  const toggleTech = (techName) => {
    setSelectedTech(prev =>
      prev.includes(techName) ? prev.filter(t => t !== techName) : [...prev, techName]
    );
  };

  const filteredProjects = useMemo(() => {
    return projectsData.filter(p => {
      if (selectedCategory !== 'Tous les projets' && p.category !== selectedCategory) {
        return false;
      }
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesTitle = p.title.toLowerCase().includes(q);
        const matchesDesc = p.desc.toLowerCase().includes(q);
        const matchesTech = p.tech.some(t => t.toLowerCase().includes(q));
        if (!matchesTitle && !matchesDesc && !matchesTech) return false;
      }
      if (selectedTech.length > 0) {
        const hasAllTech = selectedTech.every(t => p.tech.includes(t));
        if (!hasAllTech) return false;
      }
      return true;
    });
  }, [selectedCategory, searchQuery, selectedTech]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-white animate-in fade-in duration-300">
      
      {/* Top Sticky Header */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-gray-200 px-4 md:px-8 py-4">
        <div className="mx-auto max-w-[1240px] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#2563EB] text-white font-bold text-sm">
              M
            </span>
            <span className="font-nunito font-black text-xl text-slate-900">
              Mathias<span className="text-[#2563EB]">Dev</span>
            </span>
          </div>

          <button
            onClick={onClose}
            className="flex items-center gap-2 rounded-full border border-gray-200 bg-gray-50 px-4 py-2 text-xs font-bold text-slate-800 hover:bg-gray-100 transition-all"
          >
            <span>Retour à l'accueil</span>
            <X className="w-4 h-4" />
          </button>
        </div>
      </header>

      {/* Main Showcase Container */}
      <div className="mx-auto max-w-[1240px] px-4 sm:px-6 md:px-8 py-10 md:py-16">
        
        {/* Title & Subtitle */}
        <div className="mb-10 text-center max-w-2xl mx-auto">
          <span className="rounded-full bg-blue-50 border border-blue-200 px-3.5 py-1 text-xs font-black uppercase tracking-wider text-[#2563EB]">
            PORTFOLIO RÉEL
          </span>
          <h1 className="mt-3 font-nunito text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
            Mes Réalisations
          </h1>
          <p className="mt-2 text-gray-500 font-medium text-sm sm:text-base">
            Une vitrine claire, filtrable et rapide pour explorer mes vrais projets en ligne.
          </p>
        </div>

        {/* Content Layout: Left Sidebar + Right Grid */}
        <div className="flex flex-col md:flex-row gap-8 items-start">
          
          {/* Left Sidebar Filters */}
          <aside className="w-full md:w-64 shrink-0 rounded-3xl border border-gray-200/90 bg-[#FAFAFC] p-6 shadow-xs space-y-6">
            
            {/* Search Input */}
            <div>
              <label className="block text-[10px] font-black uppercase tracking-widest text-gray-400 mb-2">
                RECHERCHER
              </label>
              <div className="relative">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Un projet, une techno..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full rounded-xl border border-gray-200 bg-white pl-9 pr-3 py-2 text-xs focus:border-[#2563EB] focus:ring-2 focus:ring-blue-100 outline-none transition-all"
                />
              </div>
            </div>

            {/* Categories */}
            <div>
              <label className="block text-[10px] font-black uppercase tracking-widest text-gray-400 mb-2">
                CATÉGORIES
              </label>
              <div className="space-y-1">
                {categories.map((cat) => {
                  const isSelected = selectedCategory === cat.name;
                  return (
                    <button
                      key={cat.name}
                      onClick={() => setSelectedCategory(cat.name)}
                      className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-bold transition-all ${
                        isSelected
                          ? 'bg-[#2563EB] text-white shadow-sm'
                          : 'text-gray-600 hover:bg-gray-100 hover:text-slate-900'
                      }`}
                    >
                      <span>{cat.name}</span>
                      <span className={`rounded-full px-2 py-0.5 text-[9px] font-extrabold ${
                        isSelected ? 'bg-white/20 text-white' : 'bg-gray-200 text-gray-700'
                      }`}>
                        {cat.count}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Tech Stack Pills */}
            <div>
              <label className="block text-[10px] font-black uppercase tracking-widest text-gray-400 mb-2">
                TECHNOLOGIES
              </label>
              <div className="flex flex-wrap gap-1.5">
                {allTechList.map((t) => {
                  const active = selectedTech.includes(t);
                  return (
                    <button
                      key={t}
                      onClick={() => toggleTech(t)}
                      className={`rounded-lg px-2.5 py-1 text-[10px] font-extrabold transition-all border ${
                        active
                          ? 'bg-[#2563EB] text-white border-[#2563EB]'
                          : 'bg-white text-gray-600 border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      {t}
                    </button>
                  );
                })}
              </div>
            </div>

          </aside>

          {/* Right Projects Grid */}
          <main className="flex-1 w-full">
            {filteredProjects.length === 0 ? (
              <div className="rounded-3xl border border-gray-200 bg-[#FAFAFC] p-12 text-center">
                <p className="text-sm font-bold text-gray-500">Aucun projet ne correspond à vos filtres.</p>
                <button
                  onClick={() => {
                    setSelectedCategory('Tous les projets');
                    setSelectedTech([]);
                    setSearchQuery('');
                  }}
                  className="mt-4 px-4 py-2 rounded-full bg-[#2563EB] text-white font-bold text-xs"
                >
                  Réinitialiser les filtres
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredProjects.map((proj) => (
                  <div
                    key={proj.id}
                    className="group rounded-3xl border border-gray-200/90 bg-white overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
                  >
                    {/* Rich Authentic Browser Mockup Top Banner */}
                    <div className={`relative aspect-[16/10] bg-gradient-to-br ${proj.bgColor} p-4 flex flex-col justify-between overflow-hidden border-b border-gray-100`}>
                      
                      {/* Fake Browser Top URL Bar */}
                      <div className="flex items-center justify-between rounded-xl bg-black/40 backdrop-blur-md px-3 py-1.5 text-[10px] text-gray-300 border border-white/10">
                        <div className="flex items-center gap-1.5">
                          <span className="w-2 h-2 rounded-full bg-rose-500"></span>
                          <span className="w-2 h-2 rounded-full bg-amber-500"></span>
                          <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                        </div>
                        <span className="font-mono text-[9px] text-gray-300 truncate max-w-[170px]">
                          https://{proj.domain}
                        </span>
                        <span className="rounded bg-emerald-500/20 px-1.5 py-0.5 text-[8px] font-bold text-emerald-300">
                          200 OK
                        </span>
                      </div>

                      {/* Mockup Central Headline */}
                      <div className="my-auto text-left py-2 px-1">
                        <span className={`text-[9px] font-extrabold uppercase tracking-widest ${proj.accentColor}`}>
                          {proj.tagline}
                        </span>
                        <h3 className="font-nunito text-xl font-black text-white leading-tight mt-1">
                          {proj.title}
                        </h3>
                      </div>

                      {/* Mockup Footer Badge */}
                      <div className="flex items-center justify-between text-[10px] text-white/60 pt-2 border-t border-white/10">
                        <span className="rounded-full bg-white/15 px-2.5 py-0.5 text-[9px] font-bold text-white">
                          {proj.badge}
                        </span>
                        <a
                          href={proj.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-white font-bold flex items-center gap-1 hover:underline text-[11px]"
                        >
                          <span>Tester le site en direct</span>
                          <ArrowUpRight className="w-3 h-3" />
                        </a>
                      </div>

                    </div>

                    {/* Card Content Body */}
                    <div className="p-6 flex flex-col justify-between flex-1">
                      <div>
                        <h4 className="font-nunito text-lg font-bold text-slate-900 group-hover:text-[#2563EB] transition-colors">
                          {proj.title}
                        </h4>

                        <p className="mt-2 text-xs text-gray-500 leading-relaxed">
                          {proj.desc}
                        </p>

                        {/* Tech Stack Pills */}
                        <div className="mt-4 flex flex-wrap gap-1.5">
                          {proj.tech.map((t, idx) => (
                            <span key={idx} className="rounded-md bg-slate-100 px-2 py-0.5 text-[9px] font-bold text-slate-600 border border-slate-200">
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Action Button */}
                      <div className="mt-6 pt-4 border-t border-gray-100">
                        <a
                          href={proj.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`w-full py-2.5 rounded-xl text-white font-nunito font-bold text-xs flex items-center justify-center gap-2 transition-all shadow-sm ${proj.btnColor}`}
                        >
                          <span>Accéder au site officiel ({proj.domain})</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      </div>

                    </div>

                  </div>
                ))}
              </div>
            )}
          </main>

        </div>

        {/* Bottom CTA Banner */}
        <div className="mt-20 rounded-3xl bg-slate-900 p-8 sm:p-10 text-center text-white relative overflow-hidden">
          <h2 className="font-nunito text-2xl sm:text-3xl font-black">
            Un projet similaire en tête ?
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-gray-400 max-w-lg mx-auto">
            Discutons ensemble de vos besoins et construisons une version sur-mesure encore meilleure pour votre marque.
          </p>
          <button
            onClick={() => {
              onClose();
              if (onOpenDevis) onOpenDevis();
            }}
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#2563EB] px-8 py-3.5 font-bold text-xs sm:text-sm text-white shadow-lg hover:bg-[#1D4ED8] transition-all"
          >
            <span>Me contacter</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

      </div>

    </div>
  );
}
