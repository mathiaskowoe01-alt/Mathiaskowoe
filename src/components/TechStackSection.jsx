import React, { useState } from 'react';
import { Layers, Sparkles } from 'lucide-react';

export default function TechStackSection() {
  const [activeTech, setActiveTech] = useState(7); // Default active item (Antigravity)

  const techItems = [
    {
      id: 'figma',
      name: 'Figma',
      category: 'DESIGN UI/UX',
      subtitle: 'Maquettes haute fidélité, design systems & prototypes interactifs',
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 38 57" fill="none">
          <path d="M19 28.5C19 23.2533 23.2533 19 28.5 19C33.7467 19 38 23.2533 38 28.5C38 33.7467 33.7467 38 28.5 38H19V28.5Z" fill="#1ABCFE"/>
          <path d="M0 47.5C0 42.2533 4.25329 38 9.5 38H19V47.5C19 52.7467 14.7467 57 9.5 57C4.25329 57 0 52.7467 0 47.5Z" fill="#0ACF83"/>
          <path d="M19 0V19H28.5C33.7467 19 38 14.7467 38 9.5C38 4.25329 33.7467 0 28.5 0H19Z" fill="#FF7262"/>
          <path d="M0 9.5C0 14.7467 4.25329 19 9.5 19H19V0H9.5C4.25329 0 0 4.25329 0 9.5Z" fill="#F24E1E"/>
          <path d="M0 28.5C0 33.7467 4.25329 38 9.5 38H19V19H9.5C4.25329 19 0 23.2533 0 28.5Z" fill="#A259FF"/>
        </svg>
      ),
      bgGlow: 'hover:border-[#F24E1E] hover:shadow-[0_0_20px_rgba(242,78,30,0.25)]',
      activeColor: '#F24E1E'
    },
    {
      id: 'photoshop',
      name: 'Photoshop',
      category: 'DESIGN GRAPHIQUE',
      subtitle: 'Retouche photo avancée, compositing & visuels publicitaires',
      icon: (
        <div className="w-6 h-6 rounded-md bg-[#001E36] border border-[#31A8FF]/40 flex items-center justify-center font-black font-montserrat text-[#31A8FF] text-[10px]">
          Ps
        </div>
      ),
      bgGlow: 'hover:border-[#31A8FF] hover:shadow-[0_0_20px_rgba(49,168,255,0.25)]',
      activeColor: '#31A8FF'
    },
    {
      id: 'illustrator',
      name: 'Illustrator',
      category: 'DESIGN VECTORIEL',
      subtitle: 'Création de logos, icônes sur-mesure & illustrations vectorielles',
      icon: (
        <div className="w-6 h-6 rounded-md bg-[#330000] border border-[#FF9A00]/40 flex items-center justify-center font-black font-montserrat text-[#FF9A00] text-[10px]">
          Ai
        </div>
      ),
      bgGlow: 'hover:border-[#FF9A00] hover:shadow-[0_0_20px_rgba(255,154,0,0.25)]',
      activeColor: '#FF9A00'
    },
    {
      id: 'react',
      name: 'React',
      category: 'FRONTEND DYNAMIQUE',
      subtitle: 'Composants réutilisables, Single Page Apps & interfaces ultra-fluides',
      icon: (
        <svg className="w-6 h-6 text-[#00D8FF]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <ellipse cx="12" cy="12" rx="10" ry="4.5" />
          <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(60 12 12)" />
          <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(120 12 12)" />
          <circle cx="12" cy="12" r="1.8" fill="#00D8FF" />
        </svg>
      ),
      bgGlow: 'hover:border-[#00D8FF] hover:shadow-[0_0_20px_rgba(0,216,255,0.25)]',
      activeColor: '#00D8FF'
    },
    {
      id: 'nextjs',
      name: 'Next.js',
      category: 'FRAMEWORK FULLSTACK',
      subtitle: 'Rendu Server-side (SSR), SEO optimisé & architectures web modernes',
      icon: (
        <svg className="w-5 h-5 text-black fill-current" viewBox="0 0 180 180">
          <mask id="mask_next" maskUnits="userSpaceOnUse" x="0" y="0" width="180" height="180">
            <circle cx="90" cy="90" r="90" fill="black"/>
          </mask>
          <g mask="url(#mask_next)">
            <circle cx="90" cy="90" r="90" fill="black"/>
            <path d="M149.508 157.52L69.142 54H54V125.97H66.8136V69.9328L136.643 160.407C141.258 159.718 145.603 158.74 149.508 157.52Z" fill="white"/>
            <rect x="115" y="54" width="13" height="72" fill="white"/>
          </g>
        </svg>
      ),
      bgGlow: 'hover:border-black hover:shadow-[0_0_20px_rgba(0,0,0,0.2)]',
      activeColor: '#000000'
    },
    {
      id: 'nodejs',
      name: 'Node.js',
      category: 'BACKEND RUNTIME',
      subtitle: 'API REST & GraphQL performantes, microservices et logique métier serveur',
      icon: (
        <svg className="w-5 h-5 text-[#5FA04E]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2a1 1 0 0 0-.5.13l-8 4.62A1 1 0 0 0 3 7.62v9.24a1 1 0 0 0 .5.87l8 4.62a1 1 0 0 0 1 0l8-4.62a1 1 0 0 0 .5-.87V7.62a1 1 0 0 0-.5-.87l-8-4.62A1 1 0 0 0 12 2zm-1 4.41v3.25a2.5 2.5 0 0 0 2 0V6.41l5 2.89v5.77l-5 2.89v-3.25a2.5 2.5 0 0 0-2 0v3.25l-5-2.89V9.3z" />
        </svg>
      ),
      bgGlow: 'hover:border-[#5FA04E] hover:shadow-[0_0_20px_rgba(95,160,78,0.25)]',
      activeColor: '#5FA04E'
    },
    {
      id: 'claude',
      name: 'Claude AI',
      category: 'INTELLIGENCE ARTIFICIELLE',
      subtitle: 'IA générative Anthropic, raisonnement algorithmique complexe & assistance dev',
      icon: (
        <div className="w-6 h-6 rounded-full bg-[#D97757] text-white flex items-center justify-center font-serif font-bold text-xs shadow-inner">
          C
        </div>
      ),
      bgGlow: 'hover:border-[#D97757] hover:shadow-[0_0_20px_rgba(217,119,87,0.3)]',
      activeColor: '#D97757'
    },
    {
      id: 'antigravity',
      name: 'Antigravity',
      category: 'AGENTIC AI IDE',
      subtitle: 'Environnement de développement agentique avancé, génération & refactoring IA',
      icon: (
        <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-cyan-500 to-blue-600 text-white flex items-center justify-center shadow-md">
          <Sparkles className="w-3.5 h-3.5 text-white" />
        </div>
      ),
      bgGlow: 'hover:border-cyan-500 hover:shadow-[0_0_20px_rgba(6,182,212,0.35)]',
      activeColor: '#06B6D4'
    },
    {
      id: 'supabase',
      name: 'Supabase',
      category: 'BACKEND & CLOUD',
      subtitle: 'Base de données PostgreSQL temps réel, Authentification & Storage',
      icon: (
        <svg className="w-5 h-5 text-[#3ECF8E]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M13.626 3.064A1.002 1.002 0 0 0 12.11 2.44l-8.5 10.5a1.001 1.001 0 0 0 .78 1.631h6.052l-2.068 6.365a1.002 1.002 0 0 0 1.516.624l8.5-10.5a1.001 1.001 0 0 0-.78-1.631h-6.052l2.068-6.365z" />
        </svg>
      ),
      bgGlow: 'hover:border-[#3ECF8E] hover:shadow-[0_0_20px_rgba(62,207,142,0.25)]',
      activeColor: '#3ECF8E'
    },
    {
      id: 'mysql',
      name: 'MySQL',
      category: 'BASE DE DONNÉES',
      subtitle: 'Modélisation, requêtes SQL complexes et gestion de données relationnelles',
      icon: (
        <svg className="w-5 h-5 text-[#00758F]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 14.5h-2v-2h2v2zm0-4h-2V7h2v5.5z" />
        </svg>
      ),
      bgGlow: 'hover:border-[#00758F] hover:shadow-[0_0_20px_rgba(0,117,143,0.25)]',
      activeColor: '#00758F'
    },
    {
      id: 'vercel',
      name: 'Vercel',
      category: 'HÉBERGEMENT',
      subtitle: 'Déploiements automatisés en continu, CDN global et performances Edge',
      icon: (
        <svg className="w-5 h-5 text-black fill-current" viewBox="0 0 24 24">
          <path d="M12 1L24 22H0L12 1Z" />
        </svg>
      ),
      bgGlow: 'hover:border-black hover:shadow-[0_0_20px_rgba(0,0,0,0.15)]',
      activeColor: '#000000'
    },
    {
      id: 'github',
      name: 'GitHub',
      category: 'CODE SOURCE',
      subtitle: 'Versionning de code, intégration continue CI/CD & collaboration',
      icon: (
        <svg className="w-5 h-5 text-[#181717]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
        </svg>
      ),
      bgGlow: 'hover:border-[#181717] hover:shadow-[0_0_20px_rgba(24,23,23,0.2)]',
      activeColor: '#181717'
    },
    {
      id: 'obs',
      name: 'OBS Studio',
      category: 'STREAMING & VIDÉO',
      subtitle: 'Enregistrement HD, visio-démonstrations et présentation vidéo pour clients',
      icon: (
        <div className="w-6 h-6 rounded-full bg-[#171A21] border border-indigo-400/40 flex items-center justify-center text-indigo-400">
          <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"/>
          </svg>
        </div>
      ),
      bgGlow: 'hover:border-indigo-500 hover:shadow-[0_0_20px_rgba(99,102,241,0.25)]',
      activeColor: '#6366F1'
    }
  ];

  return (
    <section id="technologies" className="py-20 md:py-28 bg-[#FAFBFC] border-b border-gray-200/70 relative overflow-hidden">
      
      {/* Dynamic Animated CSS for Flow Stream */}
      <style>{`
        @keyframes flowStream {
          0% {
            stroke-dashoffset: 120;
          }
          100% {
            stroke-dashoffset: 0;
          }
        }
        .animate-flow-stream {
          stroke-dasharray: 8 12;
          animation: flowStream 1.8s linear infinite;
        }
      `}</style>

      {/* Background Ambient Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[420px] bg-gradient-to-tr from-orange-200/30 via-cyan-100/20 to-transparent blur-3xl pointer-events-none rounded-full" />

      <div className="mx-auto max-w-[1360px] px-4 sm:px-6 md:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-2 rounded-full bg-orange-50 border border-orange-200/80 px-4 py-1 text-xs font-black uppercase tracking-wider text-[#EA580C] shadow-sm mb-3">
            <Layers className="h-3.5 w-3.5 text-[#EA580C]" />
            STACK TECHNIQUE, CREATIVE & IA
          </span>
          <h2 className="font-nunito text-3xl sm:text-4xl md:text-5xl font-black text-brand-dark leading-[1.15] tracking-tight">
            Les technologies que <span className="text-[#EA580C]">j'utilise</span>
          </h2>
          <p className="mt-4 text-gray-500 font-medium text-base sm:text-lg">
            Je maîtrise un ensemble d'outils modernes, créatifs et d'IA avancée pour répondre à tous types de projets web
          </p>
        </div>

        {/* Tree / Network Graph Diagram */}
        <div className="mt-14 md:mt-20 flex flex-col items-center">
          
          {/* Top Main Badge Node */}
          <div className="relative group">
            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-[#EA580C] text-white shadow-lg shadow-orange-500/30 ring-4 ring-orange-100 transition-transform duration-300 group-hover:scale-110 cursor-pointer">
              <Layers className="w-8 h-8" />
            </div>
            
            {/* Small Stem Line beneath top node */}
            <div className="w-0.5 h-6 bg-[#EA580C] mx-auto mt-1 rounded-full shadow-sm" />
          </div>

          {/* SVG Connector Lines Container with Passante Flow Animation */}
          <div className="w-full max-w-[1240px] h-24 sm:h-28 hidden xl:block relative -mt-1">
            <svg className="w-full h-full overflow-visible" preserveAspectRatio="none" viewBox="0 0 1000 100">
              
              {/* Central origin point from top stem: x=500, y=0 */}
              {techItems.map((item, index) => {
                // Calculate target X coordinates for 13 items
                const targetX = 38.46 + index * 76.92;
                const isSelected = activeTech === index;
                
                return (
                  <g key={item.id}>
                    {/* Background static curve */}
                    <path
                      d={`M 500 0 C 500 50, ${targetX} 50, ${targetX} 100`}
                      fill="none"
                      stroke={isSelected ? item.activeColor : '#E2E8F0'}
                      strokeWidth={isSelected ? '2.5' : '1.5'}
                      className="transition-all duration-500"
                    />

                    {/* ALWAYS-ON PASSING FLOW ANIMATION (Flux passante) */}
                    <path
                      d={`M 500 0 C 500 50, ${targetX} 50, ${targetX} 100`}
                      fill="none"
                      stroke={isSelected ? item.activeColor : '#EA580C'}
                      strokeWidth={isSelected ? '3' : '2'}
                      strokeLinecap="round"
                      className="animate-flow-stream opacity-80"
                      style={{
                        filter: isSelected ? `drop-shadow(0 0 6px ${item.activeColor})` : 'drop-shadow(0 0 3px rgba(234,88,12,0.4))'
                      }}
                    />
                  </g>
                );
              })}
            </svg>
          </div>

          {/* Tech Icons Nodes Row (13 items) */}
          <div className="w-full max-w-[1280px] mt-6 xl:mt-0 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-7 xl:grid-cols-13 gap-2.5 sm:gap-3 justify-items-center">
            {techItems.map((item, index) => {
              const isSelected = activeTech === index;
              return (
                <div
                  key={item.id}
                  onMouseEnter={() => setActiveTech(index)}
                  onClick={() => setActiveTech(index)}
                  className="flex flex-col items-center group cursor-pointer w-full"
                >
                  {/* Circular Node Icon Box */}
                  <div
                    className={`w-13 h-13 sm:w-15 sm:h-15 rounded-full bg-white border flex items-center justify-center transition-all duration-300 relative shadow-sm ${
                      isSelected
                        ? 'border-orange-500 scale-110 shadow-lg shadow-orange-500/20 ring-4 ring-orange-50'
                        : 'border-gray-200/90 hover:scale-105 hover:border-gray-300'
                    } ${item.bgGlow}`}
                  >
                    {item.icon}

                    {/* Active pulse ring */}
                    {isSelected && (
                      <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-orange-500"></span>
                      </span>
                    )}
                  </div>

                  {/* Name Label beneath node */}
                  <span className={`mt-2 font-semibold text-[11px] transition-colors text-center truncate max-w-[85px] ${
                    isSelected ? 'text-brand-dark font-bold' : 'text-gray-600 group-hover:text-brand-dark'
                  }`}>
                    {item.name}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Active Tech Description Card */}
          <div className="mt-8 bg-white border border-gray-200/80 rounded-2xl p-5 max-w-lg w-full text-center shadow-sm transition-all duration-300">
            <span className="text-xs font-black uppercase tracking-wider text-orange-600 bg-orange-50 px-3.5 py-1 rounded-full border border-orange-200/60 inline-block mb-2">
              {techItems[activeTech].category} — {techItems[activeTech].name}
            </span>
            <p className="text-sm font-semibold text-gray-800">
              {techItems[activeTech].subtitle}
            </p>
          </div>

        </div>

        {/* Bottom Metrics / Stats Container */}
        <div className="mt-16 md:mt-24 rounded-2xl sm:rounded-3xl border border-gray-200/80 bg-white p-8 sm:p-12 md:p-14 shadow-sm shadow-gray-100/80">
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-100 gap-8 md:gap-0">
            
            {/* Metric 1 */}
            <div className="flex flex-col items-center justify-center text-center md:px-8 py-4 md:py-0 group">
              <div className="font-nunito font-extrabold text-5xl sm:text-6xl md:text-7xl text-[#EA580C] tracking-tight transition-transform duration-300 group-hover:scale-105">
                4+
              </div>
              <p className="mt-3 font-semibold text-gray-600 text-base sm:text-lg">
                Ans d'expérience
              </p>
            </div>

            {/* Metric 2 */}
            <div className="flex flex-col items-center justify-center text-center md:px-8 py-4 md:py-0 group">
              <div className="font-nunito font-extrabold text-5xl sm:text-6xl md:text-7xl text-[#EA580C] tracking-tight transition-transform duration-300 group-hover:scale-105">
                50+
              </div>
              <p className="mt-3 font-semibold text-gray-600 text-base sm:text-lg">
                Projets livrés
              </p>
            </div>

            {/* Metric 3 */}
            <div className="flex flex-col items-center justify-center text-center md:px-8 py-4 md:py-0 group">
              <div className="font-nunito font-extrabold text-5xl sm:text-6xl md:text-7xl text-[#EA580C] tracking-tight transition-transform duration-300 group-hover:scale-105">
                92+
              </div>
              <p className="mt-3 font-semibold text-gray-600 text-base sm:text-lg">
                Clients satisfaits
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
