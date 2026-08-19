import React, { useState } from 'react';
import { EyeOff, MessageSquareX, FileX, AlertTriangle, CheckCircle2, TrendingDown, ArrowRight } from 'lucide-react';

export default function ProblemSection({ onOpenDevis }) {
  const [selectedCardId, setSelectedCardId] = useState('chaos');
  const [viewMode, setViewMode] = useState('problem'); // 'problem' or 'solution'

  const points = [
    {
      id: 'visibility',
      title: 'Aucune visibilité',
      short: 'BLACKOUT TOTAL',
      desc: 'Vous validez un devis et plus aucune nouvelle pendant 3 semaines. Impossible de savoir si le travail avance ou s’il est bloqué.',
      icon: EyeOff,
      solution: 'Timeline accessible 24/7 avec pourcentage d’avancement et notifications à chaque jalon.'
    },
    {
      id: 'chaos',
      title: 'Échanges éparpillés',
      short: 'WHATSAPP & MAILS PERDUS',
      desc: 'Des retours vocaux oubliés, 50 pièces jointes dispersées, des demandes d’ajustements jamais appliquées.',
      icon: MessageSquareX,
      solution: 'Espace de commentaires visuels épinglés directement sur les écrans pour un feedback limpide.'
    },
    {
      id: 'framework',
      title: 'Zéro cadre légal',
      short: 'RETARDS & BUGS SANS GARANTIE',
      desc: 'Délais non tenus, surcoûts imprévus découverts en cours de route et développeur injoignable après le paiement.',
      icon: FileX,
      solution: 'Contrat électronique signé, calendrier fixe et garantie de maintenance 60 jours incluse.'
    }
  ];

  return (
    <section id="probleme" className="py-20 md:py-28 bg-[#FAFBFC] border-y border-gray-200/70">
      <div className="mx-auto max-w-[1240px] px-4 sm:px-6 md:px-8">
        
        {/* Main Problem Container */}
        <div className="rounded-[28px] md:rounded-[36px] border border-gray-200/80 bg-white p-6 sm:p-10 md:p-12 shadow-sm">
          
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-gray-100">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-rose-50 border border-rose-200/90 px-4 py-1 text-xs font-black uppercase tracking-wider text-rose-600 shadow-sm">
                <AlertTriangle className="h-3.5 w-3.5 text-rose-600" />
                LA RÉALITÉ DU MARCHÉ
              </span>
              <h2 className="mt-4 font-nunito text-3xl sm:text-4xl md:text-5xl font-black text-brand-dark leading-[1.15] tracking-tight">
                Travailler avec un freelance est souvent <br className="hidden sm:inline" />
                <span className="text-rose-600 underline decoration-rose-200 decoration-4 underline-offset-8">
                  une source d'angoisse.
                </span>
              </h2>
            </div>

            {/* Toggle Switch */}
            <div className="flex items-center rounded-2xl bg-gray-100/90 p-1.5 border border-gray-200 self-start md:self-auto shadow-inner">
              <button
                onClick={() => setViewMode('problem')}
                className={`rounded-xl px-4 py-2 text-xs font-bold transition-all ${
                  viewMode === 'problem' 
                    ? 'bg-white text-rose-600 shadow-sm border border-gray-200/60' 
                    : 'text-gray-600 hover:text-brand-dark'
                }`}
              >
                Le constat classique
              </button>
              <button
                onClick={() => setViewMode('solution')}
                className={`rounded-xl px-4 py-2 text-xs font-bold transition-all ${
                  viewMode === 'solution' 
                    ? 'bg-[#2563EB] text-white shadow-sm' 
                    : 'text-gray-600 hover:text-brand-dark'
                }`}
              >
                Notre Méthode ★
              </button>
            </div>
          </div>

          {/* Core Content Grid */}
          <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
            
            {/* Left Column: 3 Pain Points */}
            <div className="lg:col-span-6 flex flex-col justify-between gap-4 sm:gap-5">
              {points.map((p) => {
                const Icon = p.icon;
                const isSelected = selectedCardId === p.id;
                
                return (
                  <div
                    key={p.id}
                    onClick={() => setSelectedCardId(p.id)}
                    className={`cursor-pointer rounded-2xl border p-5 transition-all duration-300 ${
                      viewMode === 'solution'
                        ? 'border-emerald-200 bg-emerald-50/40 hover:bg-emerald-50'
                        : isSelected
                        ? 'border-rose-300 bg-white ring-2 ring-rose-500/10 shadow-md'
                        : 'border-gray-100 bg-[#FAFAFC] hover:bg-white hover:border-gray-200'
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl transition-all ${
                        viewMode === 'solution'
                          ? 'bg-emerald-500 text-white'
                          : isSelected
                          ? 'bg-rose-500 text-white shadow-sm'
                          : 'bg-rose-50 text-rose-500'
                      }`}>
                        {viewMode === 'solution' ? <CheckCircle2 className="h-5 w-5" /> : <Icon className="h-5 w-5" />}
                      </div>

                      <div className="flex-1">
                        <div className="flex items-center justify-between gap-2">
                          <h3 className="font-nunito text-base sm:text-lg font-bold text-brand-dark">
                            {p.title}
                          </h3>
                          <span className={`text-[10px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full ${
                            viewMode === 'solution'
                              ? 'bg-emerald-100 text-emerald-700'
                              : 'bg-gray-100 text-gray-700'
                          }`}>
                            {viewMode === 'solution' ? 'Solution Mathias' : p.short}
                          </span>
                        </div>

                        <p className="mt-1.5 font-montserrat text-xs sm:text-sm leading-relaxed text-gray-600">
                          {viewMode === 'solution' ? p.solution : p.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}

              <div className="pt-2">
                <button
                  onClick={onOpenDevis}
                  className="btn-magnetic inline-flex items-center gap-2.5 rounded-2xl bg-[#0F172A] px-6 py-3.5 text-xs sm:text-sm font-bold text-white shadow-md hover:bg-rose-600 transition-colors"
                >
                  <span>Éviter ces erreurs sur votre projet</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Right Column: Dynamic SVG Chart Box */}
            <div className="lg:col-span-6 flex flex-col">
              <div className="flex-1 flex flex-col justify-between rounded-3xl border border-gray-100 bg-[#FAFAFC] p-6 sm:p-8 shadow-inner">
                
                {/* Metric Summary */}
                <div className="flex items-center justify-between">
                  <div>
                    <span className="font-montserrat text-[10px] font-bold uppercase tracking-widest text-gray-400">
                      IMPACT SUR LE REVENU CLIENT
                    </span>
                    <div className="mt-1 flex items-baseline gap-3">
                      <span className="font-nunito text-3xl sm:text-4xl font-black text-rose-600">
                        -85% à -95%
                      </span>
                      <span className="rounded-lg bg-rose-50 border border-rose-200/80 px-2.5 py-0.5 text-xs font-bold text-rose-600">
                        Chute critique
                      </span>
                    </div>
                  </div>

                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-rose-50 text-rose-500">
                    <TrendingDown className="h-5 w-5" />
                  </div>
                </div>

                {/* SVG Visual Graphic */}
                <div className="my-6 relative w-full aspect-[440/220]">
                  <svg viewBox="0 0 440 220" preserveAspectRatio="xMidYMid meet" className="h-full w-full">
                    <defs>
                      <linearGradient id="chart-fail-grad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#F43F5E" stopOpacity="0.22" />
                        <stop offset="100%" stopColor="#F43F5E" stopOpacity="0" />
                      </linearGradient>
                    </defs>

                    {/* Grid Lines */}
                    {[30, 75, 120, 165].map((y, idx) => (
                      <g key={idx}>
                        <line x1="45" y1={y} x2="420" y2={y} stroke="#E2E8F0" strokeWidth="1" strokeDasharray="4 4" />
                        <text x="38" y={y + 3} fontSize="9" textAnchor="end" fill="#94A3B8" fontFamily="sans-serif">
                          {400 - idx * 100}k
                        </text>
                      </g>
                    ))}

                    {/* Months */}
                    {['Jan', 'Fév', 'Mar', 'Avr', 'Mai'].map((m, i) => (
                      <text key={i} x={70 + i * 85} y="195" fontSize="10" textAnchor="middle" fill="#94A3B8" fontWeight="600">
                        {m}
                      </text>
                    ))}

                    {/* Area under curve */}
                    <path d="M70,165 L155,50 L240,120 L325,40 L410,180 L410,185 L70,185 Z" fill="url(#chart-fail-grad)" />

                    {/* Segments */}
                    <path d="M70,165 L155,50" fill="none" stroke="#10B981" strokeWidth="3.5" strokeLinecap="round" />
                    <path d="M155,50 L240,120" fill="none" stroke="#F59E0B" strokeWidth="3.5" strokeLinecap="round" />
                    <path d="M240,120 L325,40" fill="none" stroke="#3B82F6" strokeWidth="3.5" strokeLinecap="round" />
                    <path d="M325,40 L410,180" fill="none" stroke="#EF4444" strokeWidth="4" strokeLinecap="round" />

                    {/* Interactive Curve Nodes */}
                    <circle cx="70" cy="165" r="4" fill="#FFFFFF" stroke="#10B981" strokeWidth="3" />
                    <circle cx="155" cy="50" r="4" fill="#FFFFFF" stroke="#F59E0B" strokeWidth="3" />
                    <circle cx="240" cy="120" r="4" fill="#FFFFFF" stroke="#3B82F6" strokeWidth="3" />
                    <circle cx="325" cy="40" r="4" fill="#FFFFFF" stroke="#EF4444" strokeWidth="3" />
                    <circle cx="410" cy="180" r="5.5" fill="#EF4444" />
                    <circle cx="410" cy="180" r="11" fill="#EF4444" opacity="0.25" className="animate-ping" />

                    {/* Annotations */}
                    <text x="155" y="32" fontSize="9" fontWeight="bold" textAnchor="middle" fill="#F59E0B">Livraison ratée</text>
                    <text x="395" y="160" fontSize="9" fontWeight="bold" textAnchor="middle" fill="#EF4444">Crash d'activité</text>
                  </svg>
                </div>

                {/* Legend & Explanatory Tag */}
                <div className="pt-4 border-t border-gray-200/80 flex flex-wrap items-center justify-between gap-3 text-xs">
                  <div className="flex items-center gap-4">
                    <span className="flex items-center gap-1.5 text-gray-600 font-medium">
                      <span className="h-2.5 w-2.5 rounded-full bg-emerald-500"></span> Lancement
                    </span>
                    <span className="flex items-center gap-1.5 text-gray-600 font-medium">
                      <span className="h-2.5 w-2.5 rounded-full bg-amber-500"></span> Retards
                    </span>
                    <span className="flex items-center gap-1.5 text-gray-600 font-medium">
                      <span className="h-2.5 w-2.5 rounded-full bg-rose-500"></span> Effondrement
                    </span>
                  </div>
                  <span className="italic text-[11px] text-gray-400">Conséquence d'un projet mal cadré</span>
                </div>

              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
