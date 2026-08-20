import React, { useState } from 'react';
import { Download, FileText, Layout, CheckSquare, Code2, Sparkles, ArrowRight, Check } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function ResourcesSection() {
  const [downloadedId, setDownloadedId] = useState(null);

  const resources = [
    {
      id: 'guide-cahier-des-charges',
      title: 'Guide : Rédiger un Cahier des Charges Web',
      category: 'Guide PDF • 24 pages',
      desc: 'Le modèle complet pour définir votre projet, fixer votre budget et éviter les pièges lors de la sous-traitance.',
      tag: 'GRATUIT',
      icon: FileText,
      accentColor: '#2563EB'
    },
    {
      id: 'ui-kit-figma',
      title: 'Template Figma Starter UI Kit 2026',
      category: 'Fichier Figma • 150+ Composants',
      desc: 'Kit UI complet avec boutons, cartes, formulaires, modales et système de design responsive prêt à utiliser.',
      tag: 'DESIGN',
      icon: Layout,
      accentColor: '#06B6D4'
    },
    {
      id: 'checklist-seo',
      title: 'Checklist SEO & Performance 100/100',
      category: 'Document Notion / PDF',
      desc: '30 points de contrôle essentiels pour atteindre 95+ de score Google PageSpeed et ranker en première page.',
      tag: 'SEO & OPTIM',
      icon: CheckSquare,
      accentColor: '#10B981'
    },
    {
      id: 'snippets-momo',
      title: 'Guide Intégration MoMo & FedaPay',
      category: 'Code Snippets & Doc Dev',
      desc: 'Exemples de code Node.js/React prêts à l\'emploi pour intégrer les paiements Mobile Money et cartes bancaires.',
      tag: 'DEV & PAY',
      icon: Code2,
      accentColor: '#9333EA'
    }
  ];

  const handleDownload = (id) => {
    setDownloadedId(id);
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.7 }
    });

    setTimeout(() => {
      setDownloadedId(null);
    }, 3000);
  };

  return (
    <section id="ressources" className="py-20 md:py-32 bg-[#FAFBFC] border-t border-gray-200 relative overflow-hidden">
      <div className="mx-auto max-w-[1240px] px-4 sm:px-6 md:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 rounded-full bg-blue-50 border border-blue-200/80 px-4 py-1 text-xs font-black uppercase tracking-wider text-[#2563EB] shadow-sm mb-3">
            <Sparkles className="h-3.5 w-3.5 text-[#2563EB]" />
            RESSOURCES & TEMPLATES GRATUITS
          </span>
          <h2 className="font-nunito text-3xl sm:text-4xl md:text-5xl font-black text-brand-dark leading-[1.15] tracking-tight">
            Outils & Ressources <span className="text-[#2563EB]">offerts</span>
          </h2>
          <p className="mt-4 text-gray-500 font-medium text-base sm:text-lg">
            Téléchargez nos templates, checklists et guides pratiques pour booster vos projets digitaux
          </p>
        </div>

        {/* 4 Resources Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {resources.map((res) => {
            const IconComp = res.icon;
            const isDownloaded = downloadedId === res.id;

            return (
              <div
                key={res.id}
                className="group rounded-3xl border border-gray-200/90 bg-white p-6 flex flex-col justify-between shadow-sm hover:shadow-xl transition-all duration-300 relative overflow-hidden"
              >
                <div>
                  {/* Category Tag & Icon */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-[#2563EB] group-hover:scale-110 transition-transform">
                      <IconComp className="h-6 w-6" />
                    </div>
                    <span className="rounded-full bg-slate-100 border border-gray-200 px-3 py-1 text-[10px] font-extrabold uppercase tracking-wider text-slate-700">
                      {res.tag}
                    </span>
                  </div>

                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#2563EB]">
                    {res.category}
                  </span>

                  <h3 className="mt-2 font-nunito text-lg font-bold text-slate-900 leading-snug group-hover:text-[#2563EB] transition-colors">
                    {res.title}
                  </h3>

                  <p className="mt-2.5 text-xs text-gray-500 leading-relaxed">
                    {res.desc}
                  </p>
                </div>

                {/* Download Button */}
                <div className="mt-6 pt-4 border-t border-gray-100">
                  <button
                    onClick={() => handleDownload(res.id)}
                    className={`w-full py-2.5 rounded-xl font-bold text-xs flex items-center justify-center gap-2 transition-all ${
                      isDownloaded
                        ? 'bg-emerald-600 text-white shadow-md'
                        : 'bg-[#1A1D27] text-white hover:bg-[#2563EB] shadow-sm'
                    }`}
                  >
                    {isDownloaded ? (
                      <>
                        <Check className="w-4 h-4" />
                        <span>Téléchargé avec succès !</span>
                      </>
                    ) : (
                      <>
                        <Download className="w-4 h-4" />
                        <span>Télécharger la ressource</span>
                      </>
                    )}
                  </button>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
