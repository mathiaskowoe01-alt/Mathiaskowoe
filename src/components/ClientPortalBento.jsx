import React from 'react';
import { 
  AppWindow, 
  Eye, 
  FileText, 
  MessageSquare, 
  Send, 
  Check, 
  Monitor, 
  Smartphone, 
  Tablet,
  Play
} from 'lucide-react';

export default function ClientPortalBento({ onOpenSandbox }) {
  return (
    <section id="espace-client" className="py-20 md:py-32 bg-white relative overflow-hidden">
      
      {/* Background Decorative Subtle Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[800px] bg-blue-500/5 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="mx-auto max-w-[1240px] px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 md:mb-18">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-200/80 bg-blue-50/70 px-4 py-1 text-xs font-black uppercase tracking-widest text-[#2563EB] mb-4 shadow-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-[#2563EB]"></span>
            LA SOLUTION
          </div>

          <h2 className="font-nunito text-3xl sm:text-4xl md:text-5xl font-black text-brand-dark tracking-tight leading-[1.15]">
            Découvrez votre <span className="text-[#2563EB]">espace client dédié</span>
          </h2>

          <p className="mt-4 font-montserrat text-sm sm:text-base text-gray-500 max-w-xl mx-auto leading-relaxed">
            Un portail d'exception pensé pour votre sérénité : transparent, fluide et sans compromis.
          </p>
        </div>

        {/* 2x2 Grid of 4 Cards Exactly Matching Reference */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-[1080px] mx-auto">
          
          {/* ================= CARD 1: Espace client dédié ================= */}
          <div 
            onClick={onOpenSandbox}
            className="group cursor-pointer rounded-[32px] sm:rounded-[36px] border border-gray-100/90 bg-white p-6 sm:p-8 flex flex-col justify-between shadow-[0_15px_40px_-15px_rgba(0,0,0,0.06)] hover:shadow-xl transition-all duration-300"
          >
            {/* Top Visual Mockup */}
            <div className="rounded-2xl border border-gray-100 bg-[#FAFAFC] p-4 sm:p-5 space-y-2.5 shadow-inner">
              
              <div className="flex items-center justify-between rounded-xl bg-white border border-gray-100 px-3.5 py-2.5 text-xs shadow-sm">
                <div className="flex items-center gap-2.5 min-w-0">
                  <span className="h-2 w-2 rounded-full bg-emerald-500 shrink-0"></span>
                  <span className="truncate font-montserrat font-medium text-gray-700 text-[11px] sm:text-xs">
                    Preview en ligne mise à jour
                  </span>
                </div>
                <span className="font-mono text-[10px] font-bold text-gray-400 uppercase shrink-0">3H</span>
              </div>

              <div className="flex items-center justify-between rounded-xl bg-white border border-gray-100 px-3.5 py-2.5 text-xs shadow-sm">
                <div className="flex items-center gap-2.5 min-w-0">
                  <span className="h-2 w-2 rounded-full bg-amber-400 shrink-0"></span>
                  <span className="truncate font-montserrat font-medium text-gray-700 text-[11px] sm:text-xs">
                    Nouvelle tâche créée
                  </span>
                </div>
                <span className="font-mono text-[10px] font-bold text-gray-400 uppercase shrink-0">5H</span>
              </div>

              <div className="flex items-center justify-between rounded-xl bg-white border border-gray-100 px-3.5 py-2.5 text-xs shadow-sm">
                <div className="flex items-center gap-2.5 min-w-0">
                  <span className="h-2 w-2 rounded-full bg-emerald-500 shrink-0"></span>
                  <span className="truncate font-montserrat font-medium text-gray-700 text-[11px] sm:text-xs">
                    Contrat signé par le client
                  </span>
                </div>
                <span className="font-mono text-[10px] font-bold text-gray-400 uppercase shrink-0">HIER</span>
              </div>

              <div className="flex items-center justify-between rounded-xl bg-white/60 border border-gray-100 px-3.5 py-2.5 text-xs">
                <div className="flex items-center gap-2.5 min-w-0">
                  <span className="h-2 w-2 rounded-full bg-gray-300 shrink-0"></span>
                  <span className="truncate font-montserrat font-medium text-gray-400 text-[11px] sm:text-xs">
                    Progression mise à jour : 40%
                  </span>
                </div>
                <span className="font-mono text-[10px] font-bold text-gray-300 uppercase shrink-0">HIER</span>
              </div>

            </div>

            {/* Bottom Info */}
            <div className="mt-7">
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-blue-50 text-[#2563EB] mb-4 shadow-sm group-hover:scale-110 transition-transform">
                <AppWindow className="h-5 w-5" />
              </div>
              <h3 className="font-nunito text-xl font-bold text-brand-dark">
                Espace client dédié
              </h3>
              <p className="mt-2 font-montserrat text-xs sm:text-sm text-gray-500 leading-relaxed">
                Suivez votre projet en temps réel depuis votre espace d'accompagnement privilégié.
              </p>
            </div>
          </div>

          {/* ================= CARD 2: Preview en temps réel ================= */}
          <div 
            onClick={onOpenSandbox}
            className="group cursor-pointer rounded-[32px] sm:rounded-[36px] border border-gray-100/90 bg-white p-6 sm:p-8 flex flex-col justify-between shadow-[0_15px_40px_-15px_rgba(0,0,0,0.06)] hover:shadow-xl transition-all duration-300"
          >
            {/* Top Visual Mockup */}
            <div className="rounded-2xl border border-gray-100 bg-[#FAFAFC] p-6 flex flex-col items-center justify-center min-h-[196px] relative shadow-inner overflow-hidden">
              
              {/* Central Glowing Code Block Icon */}
              <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-tr from-[#2563EB] to-blue-400 text-white font-mono text-lg font-bold shadow-lg shadow-blue-500/25 group-hover:scale-105 transition-transform">
                &lt; &gt;
              </div>

              {/* Connecting Radiation Glow */}
              <div className="w-24 h-6 bg-gradient-to-b from-blue-400/20 to-transparent blur-sm"></div>

              {/* Device Wireframes Silhouettes */}
              <div className="mt-2 flex items-center gap-6 text-gray-400">
                <div className="flex flex-col items-center gap-1 opacity-60 group-hover:opacity-100 transition-opacity">
                  <Monitor className="h-6 w-6" />
                </div>
                <div className="flex flex-col items-center gap-1 opacity-90 group-hover:opacity-100 transition-opacity text-[#2563EB]">
                  <Smartphone className="h-6 w-6" />
                </div>
                <div className="flex flex-col items-center gap-1 opacity-60 group-hover:opacity-100 transition-opacity">
                  <Tablet className="h-6 w-6" />
                </div>
              </div>

            </div>

            {/* Bottom Info */}
            <div className="mt-7">
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-blue-50 text-[#2563EB] mb-4 shadow-sm group-hover:scale-110 transition-transform">
                <Eye className="h-5 w-5" />
              </div>
              <h3 className="font-nunito text-xl font-bold text-brand-dark">
                Preview en temps réel
              </h3>
              <p className="mt-2 font-montserrat text-xs sm:text-sm text-gray-500 leading-relaxed">
                Visualisez l'évolution de votre plateforme à chaque étape stratégique.
              </p>
            </div>
          </div>

          {/* ================= CARD 3: Contrat en ligne ================= */}
          <div 
            onClick={onOpenSandbox}
            className="group cursor-pointer rounded-[32px] sm:rounded-[36px] border border-gray-100/90 bg-white p-6 sm:p-8 flex flex-col justify-between shadow-[0_15px_40px_-15px_rgba(0,0,0,0.06)] hover:shadow-xl transition-all duration-300"
          >
            {/* Top Visual Mockup */}
            <div className="rounded-2xl border border-gray-100 bg-[#FAFAFC] p-6 flex items-center justify-center min-h-[196px] shadow-inner">
              
              <div className="flex items-center justify-between w-full max-w-[320px]">
                
                {/* Step 1: Envoyé */}
                <div className="flex flex-col items-center gap-2">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-tr from-[#2563EB] to-blue-400 text-white shadow-md shadow-blue-500/25">
                    <Send className="h-5 w-5" />
                  </div>
                  <span className="font-montserrat text-[10px] font-black tracking-widest text-gray-800 uppercase">
                    ENVOYÉ
                  </span>
                </div>

                {/* Divider Line */}
                <div className="h-[2px] flex-1 bg-gray-200 mx-2 -mt-4"></div>

                {/* Step 2: Lu */}
                <div className="flex flex-col items-center gap-2">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-400 shadow-sm">
                    <Eye className="h-4 w-4" />
                  </div>
                  <span className="font-montserrat text-[10px] font-bold tracking-widest text-gray-400 uppercase">
                    LU
                  </span>
                </div>

                {/* Divider Line */}
                <div className="h-[2px] flex-1 bg-gray-200 mx-2 -mt-4"></div>

                {/* Step 3: Signé */}
                <div className="flex flex-col items-center gap-2">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-400 shadow-sm">
                    <Check className="h-4 w-4" />
                  </div>
                  <span className="font-montserrat text-[10px] font-bold tracking-widest text-gray-400 uppercase">
                    SIGNÉ
                  </span>
                </div>

              </div>

            </div>

            {/* Bottom Info */}
            <div className="mt-7">
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-blue-50 text-[#2563EB] mb-4 shadow-sm group-hover:scale-110 transition-transform">
                <FileText className="h-5 w-5" />
              </div>
              <h3 className="font-nunito text-xl font-bold text-brand-dark">
                Contrat en ligne
              </h3>
              <p className="mt-2 font-montserrat text-xs sm:text-sm text-gray-500 leading-relaxed">
                Apposition de signature électronique sécurisée pour lancer votre projet sans délai.
              </p>
            </div>
          </div>

          {/* ================= CARD 4: Feedback instantané ================= */}
          <div 
            onClick={onOpenSandbox}
            className="group cursor-pointer rounded-[32px] sm:rounded-[36px] border border-gray-100/90 bg-white p-6 sm:p-8 flex flex-col justify-between shadow-[0_15px_40px_-15px_rgba(0,0,0,0.06)] hover:shadow-xl transition-all duration-300"
          >
            {/* Top Visual Mockup */}
            <div className="rounded-2xl border border-gray-100 bg-[#FAFAFC] p-4 sm:p-5 flex flex-col justify-between min-h-[196px] shadow-inner">
              
              {/* Header Status */}
              <div className="flex items-center gap-2.5 pb-2 border-b border-gray-100">
                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#2563EB] text-white font-bold text-[11px] font-montserrat">
                  M
                </div>
                <div>
                  <div className="font-montserrat text-xs font-bold text-gray-800">Mathias • Studio</div>
                  <div className="flex items-center gap-1 font-montserrat text-[9px] font-black text-emerald-600 tracking-wider uppercase">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
                    EN LIGNE
                  </div>
                </div>
              </div>

              {/* Chat Messages Preview */}
              <div className="space-y-2.5 my-1">
                
                {/* Client bubble */}
                <div className="rounded-2xl bg-white border border-gray-200/80 px-4 py-2 text-[11px] sm:text-xs font-medium text-gray-700 shadow-sm w-fit max-w-[85%]">
                  Ajoute une section témoignages
                </div>

                {/* Mathias reply bubble */}
                <div className="rounded-2xl bg-[#2563EB] text-white px-4 py-2 text-[11px] sm:text-xs font-bold shadow-md ml-auto w-fit max-w-[85%] flex items-center gap-1.5">
                  <span>Ajoutée ! Validée ?</span>
                  <Check className="h-3.5 w-3.5" />
                </div>

              </div>

            </div>

            {/* Bottom Info */}
            <div className="mt-7">
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-blue-50 text-[#2563EB] mb-4 shadow-sm group-hover:scale-110 transition-transform">
                <MessageSquare className="h-5 w-5" />
              </div>
              <h3 className="font-nunito text-xl font-bold text-brand-dark">
                Feedback instantané
              </h3>
              <p className="mt-2 font-montserrat text-xs sm:text-sm text-gray-500 leading-relaxed">
                Un canal de communication direct pour des ajustements précis et une réactivité maximale.
              </p>
            </div>
          </div>

        </div>

        {/* Sandbox Test CTA under the grid */}
        <div className="mt-12 text-center">
          <button
            onClick={onOpenSandbox}
            className="btn-magnetic inline-flex items-center gap-2.5 rounded-full bg-brand-dark px-7 py-3.5 text-xs sm:text-sm font-bold text-white shadow-lg hover:bg-[#2563EB] hover:shadow-glow-primary transition-all duration-300"
          >
            <Play className="h-4 w-4 fill-current text-[#2563EB] group-hover:text-white" />
            <span>Tester la démo interactive du portail client</span>
          </button>
        </div>

      </div>

    </section>
  );
}
