import React from 'react';
import { Phone, Mail, MessageSquare, ArrowUpRight } from 'lucide-react';
import { LinkedInIcon, FacebookIcon, InstagramIcon } from './SocialIcons';
import { siteData } from '../data/siteData';

export default function Footer({ onOpenDevis, onOpenSandbox }) {
  return (
    <footer className="relative overflow-hidden bg-white pt-20 border-t border-gray-200">
      <div className="mx-auto max-w-[1240px] px-5 md:px-8">
        
        {/* Main Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-16">
          
          {/* Brand Info (5 cols) */}
          <div className="md:col-span-5 flex flex-col justify-between">
            <div>
              <a href="#hero" className="font-nunito text-2xl font-black tracking-tight text-brand-dark">
                <span>Mathias<span className="text-brand-primary">Dev</span></span>
              </a>

              <p className="mt-4 max-w-sm font-montserrat text-xs sm:text-sm leading-relaxed text-gray-500">
                {siteData.profile.tagline} Création de sites internet, applications web et plateformes digitales avec espace client dédié.
              </p>
            </div>

            {/* Social Links */}
            <div className="mt-6 flex items-center gap-2.5">
              <a
                href={siteData.profile.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-xl bg-gray-100 text-gray-700 transition-all hover:bg-brand-primary hover:text-white"
              >
                <LinkedInIcon className="h-4 w-4" />
              </a>
              <a
                href={siteData.profile.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-xl bg-gray-100 text-gray-700 transition-all hover:bg-brand-primary hover:text-white"
              >
                <InstagramIcon className="h-4 w-4" />
              </a>
              <a
                href={siteData.profile.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-xl bg-gray-100 text-gray-700 transition-all hover:bg-brand-primary hover:text-white"
              >
                <FacebookIcon className="h-4 w-4" />
              </a>
              <a
                href={siteData.profile.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 transition-all hover:bg-emerald-600 hover:text-white"
              >
                <MessageSquare className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick Links (3 cols) */}
          <div className="md:col-span-3">
            <h4 className="font-nunito text-base font-bold text-brand-dark mb-4">Navigation</h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <a href="#hero" className="text-gray-500 hover:text-brand-primary transition-colors">Accueil</a>
              </li>
              <li>
                <a href="#probleme" className="text-gray-500 hover:text-brand-primary transition-colors">Le Problème</a>
              </li>
              <li>
                <a href="#espace-client" className="text-gray-500 hover:text-brand-primary transition-colors">Espace Client Dédié</a>
              </li>
              <li>
                <a href="#services" className="text-gray-500 hover:text-brand-primary transition-colors">Packs & Services</a>
              </li>
              <li>
                <a href="#portfolio" className="text-gray-500 hover:text-brand-primary transition-colors">Portfolio & Études</a>
              </li>
              <li>
                <a href="#faq" className="text-gray-500 hover:text-brand-primary transition-colors">Questions Fréquentes</a>
              </li>
            </ul>
          </div>

          {/* Direct Contact (4 cols) */}
          <div className="md:col-span-4">
            <h4 className="font-nunito text-base font-bold text-brand-dark mb-4">Contact Direct</h4>
            <ul className="space-y-3.5 text-xs sm:text-sm">
              <li>
                <a href={`tel:${siteData.profile.phone.replace(/\s+/g, '')}`} className="flex items-center gap-3 text-gray-600 hover:text-brand-primary transition-colors group">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-50 text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                    <Phone className="h-3.5 w-3.5" />
                  </span>
                  <div>
                    <div className="font-bold text-brand-dark">{siteData.profile.phoneDisplay}</div>
                    <span className="text-[11px] text-emerald-600 font-semibold">● WhatsApp & Appels</span>
                  </div>
                </a>
              </li>
              <li>
                <a href={`tel:${siteData.profile.phoneSecondary.replace(/\s+/g, '')}`} className="flex items-center gap-3 text-gray-600 hover:text-brand-primary transition-colors group">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-orange-50 text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-colors">
                    <Phone className="h-3.5 w-3.5" />
                  </span>
                  <div>
                    <div className="font-bold text-brand-dark">{siteData.profile.phoneSecondary}</div>
                    <span className="text-[11px] text-gray-400 font-medium">Ligne directe secondaire</span>
                  </div>
                </a>
              </li>
              <li>
                <a href={`mailto:${siteData.profile.email}`} className="flex items-center gap-3 text-gray-600 hover:text-brand-primary transition-colors group">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-orange-50 text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-colors">
                    <Mail className="h-3.5 w-3.5" />
                  </span>
                  <span>{siteData.profile.email}</span>
                </a>
              </li>
              <li>
                <a href={siteData.profile.whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-gray-600 hover:text-brand-primary transition-colors group">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-50 text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                    <MessageSquare className="h-3.5 w-3.5" />
                  </span>
                  <span>Discuter sur WhatsApp</span>
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Large Giant Typography Brand Backdrop */}
        <div className="mt-6 overflow-hidden select-none pointer-events-none">
          <p 
            className="whitespace-nowrap bg-gradient-to-b from-brand-primary/20 via-brand-primary/10 to-transparent bg-clip-text text-center font-nunito text-[70px] sm:text-[110px] md:text-[150px] lg:text-[190px] font-black leading-none text-transparent"
            style={{
              WebkitMaskImage: 'linear-gradient(to bottom, black 50%, transparent 100%)',
              maskImage: 'linear-gradient(to bottom, black 50%, transparent 100%)'
            }}
          >
            MATHIAS
          </p>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="py-6 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500 font-montserrat">
          <p>© {new Date().getFullYear()} <strong className="text-brand-dark">Mathias</strong> — Tous droits réservés.</p>
          <div className="flex items-center gap-6">
            <span className="hover:text-brand-primary cursor-pointer">Mentions légales</span>
            <span className="hover:text-brand-primary cursor-pointer">Confidentialité</span>
            <span className="hover:text-brand-primary cursor-pointer">Conditions de prestation</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
