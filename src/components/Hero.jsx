import React from 'react';
import { ArrowRight, Star, CheckCircle2, Shield, Sparkles, MessageSquare } from 'lucide-react';
import { LinkedInIcon, FacebookIcon, InstagramIcon, GithubIcon } from './SocialIcons';
import { siteData } from '../data/siteData';

export default function Hero({ onOpenDevis, onOpenSandbox }) {
  return (
    <section id="hero" className="relative mx-auto w-full max-w-[1280px] px-4 pt-24 pb-8 md:pt-28 md:px-6">
      
      {/* Massive Rounded Hero Card */}
      <div className="relative mx-auto min-h-[640px] lg:min-h-[720px] w-full overflow-hidden rounded-[32px] md:rounded-[44px] border-[8px] md:border-[12px] border-brand-primary/10 bg-[#12131C] shadow-2xl">
        
        {/* Background Visual Effects & Gradients */}
        <div className="absolute -left-28 -top-28 h-[520px] w-[520px] rounded-full bg-brand-primary/25 blur-[130px] pointer-events-none"></div>
        <div className="absolute right-0 bottom-0 h-[450px] w-[450px] rounded-full bg-blue-600/15 blur-[140px] pointer-events-none"></div>
        
        {/* Subtle grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.07] pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #FFFFFF 1px, transparent 0)`,
            backgroundSize: '36px 36px'
          }}
        ></div>

        {/* Content Layout */}
        <div className="relative z-10 flex flex-col justify-between h-full p-6 sm:p-10 md:p-14 lg:p-16 text-white">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Column: Headlines & CTA */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              
              {/* Profile Pill Badge */}
              <div className="inline-flex items-center gap-2.5 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 backdrop-blur-md w-fit shadow-sm">
                <span className="flex h-2 w-2 rounded-full bg-brand-primary animate-ping"></span>
                <span className="font-montserrat text-xs font-bold uppercase tracking-[2px] text-white">
                  Mathias • Lead Développeur Web & Designer
                </span>
              </div>

              {/* Main Dramatic Heading */}
              <h1 className="mt-7 font-nunito text-4xl sm:text-5xl md:text-6xl lg:text-[4.25rem] font-black leading-[1.08] tracking-tight text-white">
                Créateur <br className="hidden sm:inline" />
                De Solutions <br />
                <span className="bg-gradient-to-r from-blue-400 via-sky-300 to-cyan-200 bg-clip-text text-transparent">
                  Web d'Exception
                </span>
              </h1>

              {/* Subheading */}
              <p className="mt-6 max-w-xl font-montserrat text-base sm:text-lg text-gray-300 leading-relaxed font-normal">
                Sites vitrines immersifs, applications SaaS & landing pages haute conversion — accompagnés de votre <strong className="text-white font-semibold">Espace Client dédié</strong> pour un suivi en temps réel sans égal.
              </p>

              {/* Action Buttons */}
              <div className="mt-9 flex flex-wrap items-center gap-4">
                <button
                  onClick={onOpenDevis}
                  className="btn-magnetic group inline-flex items-center gap-3 rounded-full bg-white px-8 sm:px-10 py-4 sm:py-4.5 font-montserrat font-bold text-brand-dark shadow-xl hover:bg-brand-primary hover:text-white transition-all duration-300"
                >
                  <span>Démarrer votre projet</span>
                  <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1.5 text-brand-primary group-hover:text-white" />
                </button>

                <button
                  onClick={onOpenSandbox}
                  className="inline-flex items-center gap-2.5 rounded-full border border-white/20 bg-white/5 px-6 py-4 font-montserrat text-xs sm:text-sm font-semibold text-white backdrop-blur-md hover:bg-white/15 transition-all"
                >
                  <Shield className="h-4 w-4 text-brand-primary" />
                  <span>Tester l'Espace Client</span>
                </button>
              </div>

              {/* Quick Trust Checks */}
              <div className="mt-8 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-gray-400 font-medium">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                  <span>Contrat clair & échéancier garanti</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                  <span>Zéro surprise de facturation</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                  <span>Livraison clé en main</span>
                </div>
              </div>

            </div>

            {/* Right Column: Mission Card & Verified Client Proof */}
            <div className="lg:col-span-5 flex flex-col gap-6 lg:pl-6">
              
              {/* Mission Statement Box */}
              <div className="relative overflow-hidden rounded-3xl border border-white/15 bg-white/10 p-6 sm:p-7 backdrop-blur-xl shadow-2xl">
                <div className="flex items-center gap-2 font-montserrat text-xs font-bold uppercase tracking-widest text-brand-primary">
                  <span className="h-2 w-2 rounded-full bg-brand-primary animate-pulse"></span>
                  Notre Philosophie
                </div>
                <h3 className="mt-3 font-nunito text-xl sm:text-2xl font-bold leading-snug text-white">
                  Éradiquer le travail amateur et bâtir des outils qui génèrent du résultat.
                </h3>
                <p className="mt-2.5 font-montserrat text-xs sm:text-sm text-gray-300 leading-relaxed">
                  Design ultra-affûté, code performant et transparence absolue à chaque seconde du cycle de création.
                </p>
              </div>

              {/* Client Review Floating Card */}
              <div className="rounded-3xl border border-white/10 bg-white/90 p-5 sm:p-6 text-brand-dark shadow-2xl backdrop-blur-md">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <img 
                      src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80" 
                      alt="Armel D." 
                      className="h-11 w-11 rounded-full object-cover border-2 border-brand-primary"
                    />
                    <div>
                      <div className="font-montserrat text-sm font-bold text-brand-dark">Armel D.</div>
                      <div className="font-montserrat text-[11px] text-gray-500 font-medium">Fondateur • Scale Impact</div>
                    </div>
                  </div>
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-3.5 w-3.5 fill-brand-primary text-brand-primary" />
                    ))}
                  </div>
                </div>

                <p className="mt-3.5 font-montserrat text-xs sm:text-[13px] italic leading-relaxed text-gray-700">
                  « Le portail client change tout : on suit l'avancée sans relancer, les livrables sont impeccables. Notre chiffre d'affaires a explosé dès la première semaine. »
                </p>
                
                <div className="mt-3 pt-3 border-t border-gray-100 flex items-center justify-between text-[11px] text-gray-500 font-medium">
                  <span className="text-emerald-600 font-bold">● Projet livré en 14 jours</span>
                  <span>+180% de conversions</span>
                </div>
              </div>

            </div>

          </div>

          {/* Bottom Bar: Stats Grid & Social Links */}
          <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
            
            {/* Stats Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 w-full md:w-auto">
              {siteData.stats.map((st, i) => (
                <div key={i} className="rounded-2xl border border-white/15 bg-white/5 px-4 py-3 backdrop-blur-md shadow-sm">
                  <div className="flex items-center justify-between">
                    <span className="font-montserrat text-[10px] font-bold text-gray-400 uppercase tracking-wider">{st.label}</span>
                    <span className="h-2 w-2 rounded-full" style={{ backgroundColor: st.color }}></span>
                  </div>
                  <div className="mt-1 font-nunito text-2xl sm:text-3xl font-black text-white">{st.value}</div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              <a
                href={siteData.profile.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition-all hover:bg-brand-primary hover:border-brand-primary hover:scale-110 shadow-lg backdrop-blur-md"
                aria-label="LinkedIn"
              >
                <LinkedInIcon className="h-4.5 w-4.5" />
              </a>
              <a
                href={siteData.profile.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition-all hover:bg-brand-primary hover:border-brand-primary hover:scale-110 shadow-lg backdrop-blur-md"
                aria-label="Instagram"
              >
                <InstagramIcon className="h-4.5 w-4.5" />
              </a>
              <a
                href={siteData.profile.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition-all hover:bg-brand-primary hover:border-brand-primary hover:scale-110 shadow-lg backdrop-blur-md"
                aria-label="Facebook"
              >
                <FacebookIcon className="h-4.5 w-4.5" />
              </a>
              <a
                href={siteData.profile.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-brand-primary bg-brand-primary text-white transition-all hover:bg-brand-primary-hover hover:scale-110 shadow-glow-sm"
                aria-label="WhatsApp Direct"
              >
                <MessageSquare className="h-4.5 w-4.5" />
              </a>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
