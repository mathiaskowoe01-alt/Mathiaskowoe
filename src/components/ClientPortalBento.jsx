import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Activity, 
  MessageSquare, 
  FileText, 
  CheckCircle2, 
  Sparkles, 
  Play, 
  Clock, 
  ArrowRight,
  Pin,
  Lock,
  Layers
} from 'lucide-react';
import { siteData } from '../data/siteData';

export default function ClientPortalBento({ onOpenSandbox }) {
  const [activeTab, setActiveTab] = useState('feed');
  const [pinnedNote, setPinnedNote] = useState('Agrandir le bouton CTA et passer le fond en sombre');

  const activityFeed = [
    { title: "Progression globale : 78%", time: "Il y a 3 min", color: "bg-emerald-500", type: "system" },
    { title: "Maquette V2 validée par le client", time: "Il y a 25 min", color: "bg-blue-500", type: "milestone" },
    { title: "Nouveau commentaire de Mathias", time: "Il y a 1h", color: "bg-brand-primary", type: "chat" },
    { title: "Contrat électronique signé", time: "Hier", color: "bg-purple-500", type: "contract" },
    { title: "Preview Staging mise à jour", time: "Hier", color: "bg-emerald-500", type: "preview" },
    { title: "Charte graphique approuvée", time: "Il y a 2j", color: "bg-amber-500", type: "milestone" },
    { title: "Acompte de démarrage reçu", time: "Il y a 3j", color: "bg-emerald-500", type: "payment" },
  ];

  return (
    <section id="espace-client" className="py-20 md:py-32 bg-white relative overflow-hidden">
      
      {/* Background Decorative Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[900px] bg-brand-primary/5 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="mx-auto max-w-[1240px] px-5 md:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 rounded-full border border-brand-primary/20 bg-brand-primary/5 px-4 py-1.5 backdrop-blur-sm mb-5">
            <span className="h-2 w-2 rounded-full bg-brand-primary animate-pulse"></span>
            <span className="font-montserrat text-xs font-bold uppercase tracking-[0.15em] text-brand-primary">
              L'Innovation MathiasDev
            </span>
          </div>

          <h2 className="font-nunito text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-black text-brand-dark leading-[1.15]">
            Votre propre <span className="text-brand-primary relative inline-block">
              Espace Client Dédié
              <span className="absolute -bottom-1 left-0 h-1 w-full bg-brand-primary/20 rounded-full"></span>
            </span>
          </h2>

          <p className="mt-5 font-montserrat text-base sm:text-lg text-gray-600 leading-relaxed">
            Fini les incertitudes et les messages perdus. Accédez 24h/24 à un cockpit privé moderne pour suivre chaque étape, tester les previews et valider vos livrables.
          </p>

          {/* Interactive Trigger Button */}
          <div className="mt-8 flex justify-center">
            <button
              onClick={onOpenSandbox}
              className="btn-magnetic inline-flex items-center gap-3 rounded-full bg-brand-dark px-7 py-3.5 font-montserrat text-xs sm:text-sm font-bold text-white shadow-xl hover:bg-brand-primary hover:shadow-glow-primary transition-all duration-300"
            >
              <Play className="h-4 w-4 fill-brand-primary text-brand-primary" />
              <span>Tester la démo interactive du portail</span>
            </button>
          </div>
        </div>

        {/* Bento Grid Layout (4 Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8">
          
          {/* Card 1: Live Timeline & Continuous Activity (Large 7 cols) */}
          <div className="md:col-span-12 lg:col-span-7 rounded-[32px] border border-gray-200/90 bg-[#FAFBFC] p-6 sm:p-8 flex flex-col justify-between shadow-card-soft hover:shadow-card-hover transition-all duration-300 group">
            
            <div>
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-2 rounded-xl bg-emerald-500/10 px-3 py-1 text-xs font-bold text-emerald-600">
                  <Activity className="h-3.5 w-3.5 animate-pulse" />
                  Flux d'activité en direct
                </span>
                <span className="font-mono text-xs text-gray-400 font-semibold">Temps réel • 24/7</span>
              </div>

              <h3 className="mt-4 font-nunito text-2xl font-black text-brand-dark">
                Timeline & Jalons de validation
              </h3>
              <p className="mt-2 font-montserrat text-xs sm:text-sm text-gray-600">
                Chaque tâche accomplie s'affiche instantanément. Vous savez toujours exactement où en est votre projet.
              </p>
            </div>

            {/* Simulated Live Stream Feed Box */}
            <div className="mt-6 rounded-2xl border border-gray-200 bg-white p-4 overflow-hidden relative max-h-[220px]">
              <div className="flex flex-col gap-2.5 animate-scroll-up [animation-play-state:running] group-hover:[animation-play-state:paused]">
                {activityFeed.concat(activityFeed).map((item, idx) => (
                  <div 
                    key={idx} 
                    className="flex items-center justify-between gap-3 rounded-xl border border-gray-100 bg-slate-50/70 px-4 py-2.5 text-xs transition-colors hover:bg-white hover:shadow-sm"
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <span className={`h-2.5 w-2.5 shrink-0 rounded-full ${item.color}`}></span>
                      <span className="truncate font-montserrat font-semibold text-brand-dark">
                        {item.title}
                      </span>
                    </div>
                    <span className="shrink-0 font-mono text-[11px] text-gray-400">
                      {item.time}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-gray-200/70 flex items-center justify-between text-xs text-gray-500">
              <span className="flex items-center gap-1.5 font-bold text-brand-dark">
                <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                Notification email & WhatsApp à chaque mise à jour
              </span>
            </div>

          </div>

          {/* Card 2: Visual Pin Feedback (5 cols - Light Theme) */}
          <div className="md:col-span-12 lg:col-span-5 rounded-[32px] border border-gray-200/90 bg-[#FAFBFC] text-brand-dark p-6 sm:p-8 flex flex-col justify-between shadow-card-soft hover:shadow-card-hover transition-all duration-300 group">
            
            <div>
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 rounded-xl bg-brand-primary/10 px-3 py-1 text-xs font-bold text-brand-primary">
                  <Pin className="h-3.5 w-3.5" />
                  Feedbacks Visuels
                </span>
                <span className="text-[11px] font-mono text-gray-400">Zéro confusion</span>
              </div>

              <h3 className="mt-4 font-nunito text-2xl font-black text-brand-dark">
                Commentez directement sur les écrans
              </h3>
              <p className="mt-2 font-montserrat text-xs sm:text-sm text-gray-600">
                Cliquez n'importe où sur une maquette pour déposer votre remarque avec photo ou texte.
              </p>
            </div>

            {/* Interactive Mockup Pin Demo */}
            <div className="mt-6 rounded-2xl border border-gray-200 bg-gray-100/70 p-4 relative">
              <div className="rounded-lg bg-white border border-gray-200/80 p-3 flex items-center justify-between text-xs shadow-sm">
                <span className="font-mono text-gray-700 font-medium">Écran : Page_Accueil_V2.fig</span>
                <span className="h-2 w-2 rounded-full bg-emerald-500"></span>
              </div>

              {/* Simulated Pin Dot */}
              <div className="mt-3 relative h-20 rounded-lg bg-white border border-gray-200 flex items-center justify-center p-3 shadow-inner">
                <div className="absolute top-2 left-6 flex items-center gap-2 animate-bounce">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-brand-primary text-white font-bold text-[10px] shadow-md">
                    1
                  </div>
                </div>

                <p className="text-[11px] text-gray-700 font-montserrat italic text-center max-w-[260px] font-medium">
                  « {pinnedNote} »
                </p>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-gray-200/70 flex items-center justify-between text-xs text-gray-500">
              <span>Appliqué et résolu sous 24h</span>
              <span className="text-brand-primary font-bold">100% traçabilité</span>
            </div>

          </div>

          {/* Card 3: Digital Contract & Vault (5 cols) */}
          <div className="md:col-span-12 lg:col-span-5 rounded-[32px] border border-gray-200/90 bg-[#FAFBFC] p-6 sm:p-8 flex flex-col justify-between shadow-card-soft hover:shadow-card-hover transition-all duration-300">
            <div>
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 rounded-xl bg-purple-500/10 px-3 py-1 text-xs font-bold text-purple-600">
                  <Lock className="h-3.5 w-3.5" />
                  Coffre-fort Sécurisé
                </span>
                <span className="text-[11px] font-mono text-gray-400">Archivage illimité</span>
              </div>

              <h3 className="mt-4 font-nunito text-2xl font-black text-brand-dark">
                Contrat & Factures en 1 clic
              </h3>
              <p className="mt-2 font-montserrat text-xs sm:text-sm text-gray-600">
                Signature électronique sécurisée, devis validés et téléchargement de vos livrables finaux.
              </p>
            </div>

            <div className="mt-6 space-y-2.5">
              <div className="flex items-center justify-between rounded-xl border border-gray-200 bg-white p-3 text-xs">
                <div className="flex items-center gap-2.5">
                  <FileText className="h-4 w-4 text-purple-600" />
                  <span className="font-semibold text-brand-dark">Contrat_Prestation_Signe.pdf</span>
                </div>
                <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-[10px] font-bold text-emerald-700">Validé</span>
              </div>

              <div className="flex items-center justify-between rounded-xl border border-gray-200 bg-white p-3 text-xs">
                <div className="flex items-center gap-2.5">
                  <FileText className="h-4 w-4 text-blue-600" />
                  <span className="font-semibold text-brand-dark">Facture_Acompte_Acquittee.pdf</span>
                </div>
                <span className="rounded-full bg-blue-100 px-2 py-0.5 text-[10px] font-bold text-blue-700">Payé</span>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-gray-200 flex items-center justify-between text-xs text-gray-500">
              <span className="font-semibold text-brand-dark">Protection juridique complète</span>
              <ShieldCheck className="h-4 w-4 text-purple-600" />
            </div>
          </div>

          {/* Card 4: Staging Preview & Live Test Sandbox (7 cols) */}
          <div className="md:col-span-12 lg:col-span-7 rounded-[32px] border border-gray-200/90 bg-gradient-to-br from-white to-blue-50/40 p-6 sm:p-8 flex flex-col justify-between shadow-card-soft hover:shadow-card-hover transition-all duration-300">
            <div>
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 rounded-xl bg-brand-primary/10 px-3 py-1 text-xs font-bold text-brand-primary">
                  <Layers className="h-3.5 w-3.5" />
                  Environnement de Staging
                </span>
                <span className="text-[11px] font-mono text-gray-400">Sous-domaine privé</span>
              </div>

              <h3 className="mt-4 font-nunito text-2xl font-black text-brand-dark">
                Testez votre site sur mobile & desktop avant mise en ligne
              </h3>
              <p className="mt-2 font-montserrat text-xs sm:text-sm text-gray-600">
                Vous recevez une URL secrète pour naviguer, tester les boutons, passer des commandes tests et valider l'expérience utilisateur.
              </p>
            </div>

            {/* Mini Staging Browser Frame */}
            <div className="mt-6 rounded-2xl border border-gray-300/80 bg-white shadow-md overflow-hidden">
              <div className="bg-gray-100 px-4 py-2 flex items-center gap-2 border-b border-gray-200">
                <div className="flex gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-400"></span>
                  <span className="h-2.5 w-2.5 rounded-full bg-yellow-400"></span>
                  <span className="h-2.5 w-2.5 rounded-full bg-green-400"></span>
                </div>
                <div className="mx-auto rounded-md bg-white px-4 py-0.5 text-[11px] font-mono text-gray-500 border border-gray-200">
                  https://preview.votre-entreprise.staging-mathias.dev
                </div>
              </div>

              <div className="p-4 flex items-center justify-between text-xs">
                <div className="flex items-center gap-3">
                  <span className="h-3 w-3 rounded-full bg-emerald-500 animate-pulse"></span>
                  <span className="font-bold text-brand-dark">Version V2.4 en ligne</span>
                </div>
                <button 
                  onClick={onOpenSandbox}
                  className="rounded-lg bg-brand-dark px-3 py-1.5 text-xs font-bold text-white hover:bg-brand-primary transition-colors"
                >
                  Ouvrir le Sandbox
                </button>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-gray-200/70 flex items-center justify-between text-xs text-gray-500">
              <span className="font-semibold text-brand-dark">Zéro coupure lors de la bascule en production</span>
              <Sparkles className="h-4 w-4 text-brand-primary" />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
