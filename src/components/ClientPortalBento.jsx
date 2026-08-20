import React, { useState, useEffect } from 'react';
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
  // State 1: Active Device cycling for Card 2 (Preview en temps réel)
  const [activeDevice, setActiveDevice] = useState('mobile');

  // State 2: Active Contract Step cycling for Card 3 (Contrat en ligne)
  const [contractStep, setContractStep] = useState(1);

  // State 3: Live Chat Typing Simulation for Card 4 (Feedback instantané)
  const [chatStage, setChatStage] = useState(3); // 1: client, 2: typing, 3: replied

  // Cycle Device Preview on Card 2
  useEffect(() => {
    const deviceInterval = setInterval(() => {
      setActiveDevice((prev) => {
        if (prev === 'desktop') return 'mobile';
        if (prev === 'mobile') return 'tablet';
        return 'desktop';
      });
    }, 2200);

    return () => clearInterval(deviceInterval);
  }, []);

  // Cycle Contract Progress Steps on Card 3
  useEffect(() => {
    const stepInterval = setInterval(() => {
      setContractStep((prev) => (prev >= 3 ? 1 : prev + 1));
    }, 2600);

    return () => clearInterval(stepInterval);
  }, []);

  // Cycle Chat Messages on Card 4
  useEffect(() => {
    const chatInterval = setInterval(() => {
      setChatStage((prev) => (prev >= 3 ? 1 : prev + 1));
    }, 3200);

    return () => clearInterval(chatInterval);
  }, []);

  return (
    <section id="espace-client" className="py-20 md:py-32 bg-white relative overflow-hidden">
      
      {/* Background Decorative Subtle Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[800px] bg-blue-500/5 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="mx-auto max-w-[1240px] px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 md:mb-18">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-200/80 bg-blue-50/70 px-4 py-1 text-xs font-black uppercase tracking-widest text-[#2563EB] mb-4 shadow-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-[#2563EB] animate-ping"></span>
            LA SOLUTION
          </div>

          <h2 className="font-nunito text-3xl sm:text-4xl md:text-5xl font-black text-brand-dark tracking-tight leading-[1.15]">
            Découvrez votre <span className="text-[#2563EB]">espace client dédié</span>
          </h2>

          <p className="mt-4 font-montserrat text-sm sm:text-base text-gray-500 max-w-xl mx-auto leading-relaxed">
            Un portail d'exception pensé pour votre sérénité : transparent, fluide et sans compromis.
          </p>
        </div>

        {/* 2x2 Grid of 4 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-[1080px] mx-auto">
          
          {/* ================= CARD 1: Espace client dédié ================= */}
          <div 
            onClick={onOpenSandbox}
            className="group cursor-pointer rounded-[32px] sm:rounded-[36px] border border-gray-100/90 bg-white p-6 sm:p-8 flex flex-col justify-between shadow-[0_15px_40px_-15px_rgba(0,0,0,0.06)] hover:shadow-xl transition-all duration-300"
          >
            {/* Top Visual Mockup with Vertical Auto-Scroll (Bas vers le Haut) */}
            <div className="rounded-2xl border border-gray-100 bg-[#FAFAFC] p-3 sm:p-4 shadow-inner h-[205px] overflow-hidden relative group/vtrack">
              
              {/* Fade Gradient Masks for Smooth Top & Bottom Clipping */}
              <div className="absolute top-0 left-0 right-0 h-6 bg-gradient-to-b from-[#FAFAFC] to-transparent z-10 pointer-events-none"></div>
              <div className="absolute bottom-0 left-0 right-0 h-6 bg-gradient-to-t from-[#FAFAFC] to-transparent z-10 pointer-events-none"></div>

              {/* Vertical Animated Marquee Track */}
              <div className="space-y-2.5 animate-scroll-up group-hover/vtrack:[animation-play-state:paused] py-1">
                {[
                  { text: 'Preview en ligne mise à jour', time: '3H', dot: 'bg-emerald-500 animate-pulse', border: 'border-gray-100' },
                  { text: 'Nouvelle tâche créée', time: '5H', dot: 'bg-amber-400', border: 'border-gray-100' },
                  { text: 'Contrat signé par le client', time: 'HIER', dot: 'bg-emerald-500', border: 'border-gray-100' },
                  { text: 'Progression mise à jour : 40%', time: 'HIER', dot: 'bg-blue-500', border: 'border-gray-100' },
                  { text: 'Maquettes Figma validées', time: '2J', dot: 'bg-purple-500', border: 'border-gray-100' },
                  { text: 'Acompte projet confirmé', time: '3J', dot: 'bg-emerald-500', border: 'border-gray-100' },
                  
                  // Duplicated array items for seamless 100% infinite vertical loop
                  { text: 'Preview en ligne mise à jour', time: '3H', dot: 'bg-emerald-500 animate-pulse', border: 'border-gray-100' },
                  { text: 'Nouvelle tâche créée', time: '5H', dot: 'bg-amber-400', border: 'border-gray-100' },
                  { text: 'Contrat signé par le client', time: 'HIER', dot: 'bg-emerald-500', border: 'border-gray-100' },
                  { text: 'Progression mise à jour : 40%', time: 'HIER', dot: 'bg-blue-500', border: 'border-gray-100' },
                  { text: 'Maquettes Figma validées', time: '2J', dot: 'bg-purple-500', border: 'border-gray-100' },
                  { text: 'Acompte projet confirmé', time: '3J', dot: 'bg-emerald-500', border: 'border-gray-100' }
                ].map((item, idx) => (
                  <div key={idx} className={`flex items-center justify-between rounded-xl bg-white border ${item.border} px-3.5 py-2.5 text-xs shadow-sm transition-transform hover:scale-[1.02]`}>
                    <div className="flex items-center gap-2.5 min-w-0">
                      <span className={`h-2 w-2 rounded-full ${item.dot} shrink-0`}></span>
                      <span className="truncate font-montserrat font-medium text-gray-700 text-[11px] sm:text-xs">
                        {item.text}
                      </span>
                    </div>
                    <span className="font-mono text-[10px] font-bold text-gray-400 uppercase shrink-0 ml-2">{item.time}</span>
                  </div>
                ))}
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

          {/* ================= CARD 2: Preview en temps réel (DYNAMIC ANIMATION) ================= */}
          <div 
            onClick={onOpenSandbox}
            className="group cursor-pointer rounded-[32px] sm:rounded-[36px] border border-gray-100/90 bg-white p-6 sm:p-8 flex flex-col justify-between shadow-[0_15px_40px_-15px_rgba(0,0,0,0.06)] hover:shadow-xl transition-all duration-300"
          >
            {/* Top Visual Mockup */}
            <div className="rounded-2xl border border-gray-100 bg-[#FAFAFC] p-6 flex flex-col items-center justify-center min-h-[196px] relative shadow-inner overflow-hidden">
              
              {/* Central Glowing Code Block Icon */}
              <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-tr from-[#2563EB] to-blue-400 text-white font-mono text-lg font-bold shadow-lg shadow-blue-500/25 group-hover:scale-110 transition-transform">
                &lt; &gt;
              </div>

              {/* Connecting Radiation Pulse Beam */}
              <div className="w-24 h-6 bg-gradient-to-b from-blue-500/30 to-transparent blur-xs animate-pulse"></div>

              {/* Dynamic Device Wireframes Silhouettes */}
              <div className="mt-2 flex items-center gap-6 text-gray-400">
                {/* Desktop Icon */}
                <div className={`flex flex-col items-center gap-1 transition-all duration-300 ${
                  activeDevice === 'desktop' ? 'text-[#2563EB] scale-110 opacity-100' : 'opacity-40'
                }`}>
                  <Monitor className="h-6 w-6" />
                  <span className="text-[9px] font-mono font-bold tracking-wider uppercase">PC</span>
                </div>

                {/* Mobile Icon */}
                <div className={`flex flex-col items-center gap-1 transition-all duration-300 ${
                  activeDevice === 'mobile' ? 'text-[#2563EB] scale-110 opacity-100' : 'opacity-40'
                }`}>
                  <Smartphone className="h-6 w-6" />
                  <span className="text-[9px] font-mono font-bold tracking-wider uppercase">MOBILE</span>
                </div>

                {/* Tablet Icon */}
                <div className={`flex flex-col items-center gap-1 transition-all duration-300 ${
                  activeDevice === 'tablet' ? 'text-[#2563EB] scale-110 opacity-100' : 'opacity-40'
                }`}>
                  <Tablet className="h-6 w-6" />
                  <span className="text-[9px] font-mono font-bold tracking-wider uppercase">TAB</span>
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

          {/* ================= CARD 3: Contrat en ligne (DYNAMIC ANIMATION) ================= */}
          <div 
            onClick={onOpenSandbox}
            className="group cursor-pointer rounded-[32px] sm:rounded-[36px] border border-gray-100/90 bg-white p-6 sm:p-8 flex flex-col justify-between shadow-[0_15px_40px_-15px_rgba(0,0,0,0.06)] hover:shadow-xl transition-all duration-300"
          >
            {/* Top Visual Mockup */}
            <div className="rounded-2xl border border-gray-100 bg-[#FAFAFC] p-6 flex items-center justify-center min-h-[196px] shadow-inner">
              
              <div className="flex items-center justify-between w-full max-w-[320px]">
                
                {/* Step 1: Envoyé */}
                <div className="flex flex-col items-center gap-2">
                  <div className={`flex items-center justify-center transition-all duration-500 ${
                    contractStep >= 1
                      ? 'h-12 w-12 rounded-2xl bg-gradient-to-tr from-[#2563EB] to-blue-400 text-white shadow-md shadow-blue-500/25 scale-105'
                      : 'h-10 w-10 rounded-full border border-gray-200 bg-white text-gray-400'
                  }`}>
                    <Send className="h-5 w-5" />
                  </div>
                  <span className={`font-montserrat text-[10px] tracking-widest uppercase transition-colors ${
                    contractStep >= 1 ? 'font-black text-gray-800' : 'font-bold text-gray-400'
                  }`}>
                    ENVOYÉ
                  </span>
                </div>

                {/* Divider Line 1 */}
                <div className="h-[2px] flex-1 bg-gray-200 mx-2 -mt-4 overflow-hidden rounded-full">
                  <div className={`h-full bg-[#2563EB] transition-all duration-500 ${
                    contractStep >= 2 ? 'w-full' : 'w-0'
                  }`}></div>
                </div>

                {/* Step 2: Lu */}
                <div className="flex flex-col items-center gap-2">
                  <div className={`flex items-center justify-center transition-all duration-500 ${
                    contractStep >= 2
                      ? 'h-12 w-12 rounded-2xl bg-gradient-to-tr from-[#2563EB] to-blue-400 text-white shadow-md shadow-blue-500/25 scale-105'
                      : 'h-10 w-10 rounded-full border border-gray-200 bg-white text-gray-400'
                  }`}>
                    <Eye className="h-5 w-5" />
                  </div>
                  <span className={`font-montserrat text-[10px] tracking-widest uppercase transition-colors ${
                    contractStep >= 2 ? 'font-black text-gray-800' : 'font-bold text-gray-400'
                  }`}>
                    LU
                  </span>
                </div>

                {/* Divider Line 2 */}
                <div className="h-[2px] flex-1 bg-gray-200 mx-2 -mt-4 overflow-hidden rounded-full">
                  <div className={`h-full bg-[#2563EB] transition-all duration-500 ${
                    contractStep >= 3 ? 'w-full' : 'w-0'
                  }`}></div>
                </div>

                {/* Step 3: Signé */}
                <div className="flex flex-col items-center gap-2">
                  <div className={`flex items-center justify-center transition-all duration-500 ${
                    contractStep === 3
                      ? 'h-12 w-12 rounded-2xl bg-gradient-to-tr from-emerald-500 to-teal-400 text-white shadow-md shadow-emerald-500/25 scale-110'
                      : 'h-10 w-10 rounded-full border border-gray-200 bg-white text-gray-400'
                  }`}>
                    <Check className="h-5 w-5" />
                  </div>
                  <span className={`font-montserrat text-[10px] tracking-widest uppercase transition-colors ${
                    contractStep === 3 ? 'font-black text-emerald-600' : 'font-bold text-gray-400'
                  }`}>
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

          {/* ================= CARD 4: Feedback instantané (DYNAMIC LIVE CHAT) ================= */}
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
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-ping"></span>
                    EN LIGNE
                  </div>
                </div>
              </div>

              {/* Live Animated Chat Messages Preview */}
              <div className="space-y-2.5 my-1 min-h-[90px] flex flex-col justify-center">
                
                {/* Client bubble */}
                <div className="rounded-2xl bg-white border border-gray-200/80 px-4 py-2 text-[11px] sm:text-xs font-medium text-gray-700 shadow-sm w-fit max-w-[85%] animate-in fade-in duration-300">
                  Ajoute une section témoignages
                </div>

                {/* Typing Indicator / Reply */}
                {chatStage === 2 && (
                  <div className="rounded-2xl bg-[#2563EB]/10 text-[#2563EB] px-3.5 py-1.5 text-[11px] font-bold shadow-xs ml-auto w-fit flex items-center gap-1.5 animate-pulse">
                    <span className="text-[10px]">Mathias écrit...</span>
                    <span className="h-1.5 w-1.5 rounded-full bg-[#2563EB] animate-bounce"></span>
                  </div>
                )}

                {chatStage === 3 && (
                  <div className="rounded-2xl bg-[#2563EB] text-white px-4 py-2 text-[11px] sm:text-xs font-bold shadow-md ml-auto w-fit max-w-[85%] flex items-center gap-1.5 animate-in slide-in-from-bottom-2 duration-300">
                    <span>Ajoutée ! Validée ?</span>
                    <Check className="h-3.5 w-3.5 text-white" />
                  </div>
                )}

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
