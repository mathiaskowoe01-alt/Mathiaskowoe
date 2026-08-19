import React, { useState } from 'react';
import { ExternalLink, Sparkles, Search, ArrowUpRight, TrendingUp, Layers, Check } from 'lucide-react';
import { siteData } from '../data/siteData';

export default function PortfolioSection({ onOpenDevis }) {
  const [selectedTag, setSelectedTag] = useState('Tous');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeProjectModal, setActiveProjectModal] = useState(null);

  const tags = ['Tous', 'Branding & Web', 'E-Learning', 'SaaS / Web App', 'Fintech', 'Immobilier & Luxe', 'Gestion & Facturation'];

  const filteredProjects = siteData.projects.filter((p) => {
    const matchesTag = selectedTag === 'Tous' || p.tag === selectedTag;
    const matchesSearch = p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          p.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          p.stack.some(st => st.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesTag && matchesSearch;
  });

  return (
    <section id="portfolio" className="py-20 md:py-32 bg-white relative">
      <div className="mx-auto max-w-[1240px] px-5 md:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-brand-primary/20 bg-brand-primary/10 px-4 py-1.5 text-xs font-extrabold uppercase tracking-wider text-brand-primary mb-4">
              <Sparkles className="h-3.5 w-3.5" />
              Réalisations & Études de Cas
            </div>
            <h2 className="font-nunito text-3xl sm:text-4xl md:text-5xl font-black text-brand-dark leading-tight">
              Des projets concrets conçus pour <br className="hidden sm:inline" />
              <span className="text-brand-primary">générer un impact mesurable.</span>
            </h2>
            <p className="mt-3 font-montserrat text-sm sm:text-base text-gray-600 max-w-xl">
              Découvrez un aperçu des applications, sites vitrines et plateformes livrés avec notre accompagnement sur mesure.
            </p>
          </div>

          {/* Live Search Input */}
          <div className="relative w-full md:w-72 self-start md:self-auto">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
            <input
              type="text"
              placeholder="Projet, technologie (ex: Next.js)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 text-xs sm:text-sm rounded-2xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 outline-none transition-all"
            />
          </div>
        </div>

        {/* Tag Filter Chips */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 hide-scrollbar">
          {tags.map((tag) => (
            <button
              key={tag}
              onClick={() => setSelectedTag(tag)}
              className={`shrink-0 rounded-full px-5 py-2 text-xs font-bold transition-all ${
                selectedTag === tag
                  ? 'bg-brand-dark text-white shadow-md'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {filteredProjects.map((proj) => (
            <div
              key={proj.id}
              onClick={() => setActiveProjectModal(proj)}
              className="card-lift group cursor-pointer overflow-hidden rounded-[28px] border border-gray-200 bg-[#FAFBFC] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              {/* Image Preview Container with Zoom Effect */}
              <div className="relative aspect-[16/10] overflow-hidden bg-gray-100">
                <img
                  src={proj.image}
                  alt={proj.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-brand-dark/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>
                
                {/* Category Pill Tag */}
                <div className="absolute top-4 left-4">
                  <span className="rounded-full bg-white/90 backdrop-blur-md px-3 py-1 text-[10px] font-extrabold uppercase tracking-wider text-brand-dark shadow-sm">
                    {proj.tag}
                  </span>
                </div>

                {/* Floating Metric Result Badge */}
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center gap-2 rounded-xl bg-black/60 backdrop-blur-md px-3 py-1.5 text-xs font-bold text-white border border-white/10">
                    <TrendingUp className="h-3.5 w-3.5 text-emerald-400" />
                    <span className="truncate">{proj.stats}</span>
                  </div>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between">
                    <h3 className="font-nunito text-xl font-bold text-brand-dark group-hover:text-brand-primary transition-colors">
                      {proj.title}
                    </h3>
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 text-gray-700 transition-transform group-hover:bg-brand-primary group-hover:text-white group-hover:rotate-45">
                      <ArrowUpRight className="h-4 w-4" />
                    </div>
                  </div>

                  <p className="mt-2.5 font-montserrat text-xs leading-relaxed text-gray-600 line-clamp-2">
                    {proj.desc}
                  </p>
                </div>

                {/* Stack Badges */}
                <div className="mt-6 pt-4 border-t border-gray-200/80 flex flex-wrap items-center gap-1.5">
                  {proj.stack.map((st, i) => (
                    <span key={i} className="rounded-md bg-white border border-gray-200 px-2 py-0.5 text-[10px] font-mono font-medium text-gray-600">
                      {st}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* If no results found */}
        {filteredProjects.length === 0 && (
          <div className="py-16 text-center rounded-3xl border border-dashed border-gray-300 bg-gray-50">
            <p className="font-nunito text-lg font-bold text-gray-600">Aucun projet ne correspond à cette recherche.</p>
            <button
              onClick={() => { setSelectedTag('Tous'); setSearchQuery(''); }}
              className="mt-3 text-xs font-bold text-brand-primary underline"
            >
              Réinitialiser les filtres
            </button>
          </div>
        )}

        {/* Competences & Stack Technique Grid from CV */}
        <div className="mt-20 pt-16 border-t border-gray-100">
          <div className="text-center max-w-xl mx-auto mb-10">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#2563EB]">
              EXPERTISE & STACK TECHNIQUE
            </span>
            <h3 className="mt-2 font-nunito text-2xl sm:text-3xl font-black text-brand-dark">
              Des technologies modernes pour des projets pérennes
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {siteData.skills.map((sk, idx) => (
              <div key={idx} className="rounded-2xl border border-gray-200/80 bg-[#FAFAFC] p-5 shadow-sm hover:shadow-md transition-all">
                <h4 className="font-nunito text-sm font-bold text-brand-dark mb-3 flex items-center justify-between">
                  <span>{sk.category}</span>
                  <span className="h-1.5 w-1.5 rounded-full bg-[#2563EB]"></span>
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {sk.items.map((item, i) => (
                    <span key={i} className="rounded-lg bg-white border border-gray-200/70 px-2.5 py-1 text-xs font-medium text-gray-700 shadow-2xs">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Project Case Study Modal */}
      {activeProjectModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-2xl overflow-hidden rounded-[32px] bg-white p-6 sm:p-8 shadow-2xl animate-in zoom-in-95 duration-200 max-h-[90vh] overflow-y-auto">
            
            <div className="flex items-center justify-between pb-4 border-b border-gray-100">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-brand-primary">
                  {activeProjectModal.tag}
                </span>
                <h3 className="font-nunito text-2xl font-black text-brand-dark">
                  {activeProjectModal.title}
                </h3>
              </div>
              <button
                onClick={() => setActiveProjectModal(null)}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200"
              >
                ✕
              </button>
            </div>

            <div className="mt-5 rounded-2xl overflow-hidden aspect-[16/9] border border-gray-200">
              <img
                src={activeProjectModal.image}
                alt={activeProjectModal.title}
                className="h-full w-full object-cover"
              />
            </div>

            <div className="mt-5 space-y-4">
              <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-100 flex items-center gap-3">
                <TrendingUp className="h-5 w-5 text-emerald-600 shrink-0" />
                <div className="text-xs sm:text-sm font-bold text-emerald-900">
                  Résultat mesuré : {activeProjectModal.stats}
                </div>
              </div>

              <p className="font-montserrat text-sm text-gray-700 leading-relaxed">
                {activeProjectModal.desc}
              </p>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">Technologies utilisées</h4>
                <div className="flex flex-wrap gap-2">
                  {activeProjectModal.stack.map((st, i) => (
                    <span key={i} className="rounded-lg bg-gray-100 px-3 py-1 font-mono text-xs font-semibold text-brand-dark">
                      {st}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-100 flex items-center justify-between">
              <button
                onClick={() => setActiveProjectModal(null)}
                className="rounded-full px-5 py-2.5 text-xs font-bold text-gray-600 hover:bg-gray-100"
              >
                Fermer
              </button>

              <button
                onClick={() => {
                  setActiveProjectModal(null);
                  onOpenDevis();
                }}
                className="btn-magnetic rounded-full bg-brand-primary px-7 py-3 text-xs sm:text-sm font-bold text-white shadow-glow-sm"
              >
                Lancer un projet similaire
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}
