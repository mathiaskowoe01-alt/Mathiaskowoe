import React, { useState, useEffect } from 'react';
import { Sparkles, Menu, X, ArrowUpRight, ShieldCheck, MessageCircle } from 'lucide-react';
import { siteData } from '../data/siteData';

export default function Navbar({ onOpenDevis, onOpenSandbox }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      const sections = ['hero', 'probleme', 'technologies', 'espace-client', 'services', 'portfolio', 'processus', 'faq'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Accueil', href: '#hero', id: 'hero' },
    { name: 'Services', href: '#services', id: 'services' },
    { name: 'Portfolio', href: '#portfolio', id: 'portfolio' },
    { name: 'Processus', href: '#processus', id: 'processus' },
    { name: 'FAQ', href: '#faq', id: 'faq' },
  ];

  return (
    <header className="fixed top-4 left-0 right-0 z-50 px-4 md:px-6 transition-all duration-300">
      <div className={`mx-auto flex max-w-[1240px] items-center justify-between px-5 md:px-7 py-3 transition-all duration-300 rounded-full border ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-[0_10px_30px_rgba(0,0,0,0.08)] border-[#E5E7EB]' 
          : 'bg-white/80 backdrop-blur-sm shadow-[0_4px_20px_rgba(0,0,0,0.04)] border-[#E5E7EB]/80'
      }`}>
        
        {/* Brand Logo */}
        <a href="#hero" className="group flex items-center gap-2 font-nunito text-xl md:text-2xl font-black tracking-tight text-brand-dark">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-dark text-white shadow-sm transition-transform duration-300 group-hover:scale-105">
            <span className="font-extrabold text-brand-primary">M</span>
          </div>
          <span>Mathias<span className="text-brand-primary">Dev</span></span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                className={`relative text-[13px] font-montserrat font-bold uppercase tracking-wider transition-colors duration-200 flex items-center gap-1.5 ${
                  isActive ? 'text-brand-primary' : 'text-brand-dark/80 hover:text-brand-primary'
                }`}
              >
                {link.name}
                {link.badge && (
                  <span className="rounded-full bg-brand-primary/10 px-2 py-0.5 text-[9px] font-extrabold text-brand-primary tracking-normal uppercase animate-pulse">
                    {link.badge}
                  </span>
                )}
                {isActive && (
                  <span className="absolute -bottom-1.5 left-0 h-[2px] w-full bg-brand-primary rounded-full transition-all duration-300"></span>
                )}
              </a>
            );
          })}
        </nav>

        {/* Action CTAs */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={onOpenSandbox}
            className="hidden xl:inline-flex items-center gap-2 rounded-full border border-brand-dark/15 bg-slate-50 px-4 py-2 text-xs font-bold text-brand-dark transition-all hover:bg-slate-100 hover:border-brand-primary/40 active:scale-95"
            title="Tester l'espace client en direct"
          >
            <ShieldCheck className="h-3.5 w-3.5 text-brand-primary" />
            <span>Tester l'Espace Client</span>
          </button>

          <button
            onClick={onOpenDevis}
            className="btn-magnetic inline-flex items-center justify-center gap-2 rounded-full bg-brand-dark px-5 md:px-6 py-2.5 text-xs md:text-sm font-bold text-white shadow-lg transition-all hover:bg-brand-primary hover:shadow-glow-primary active:scale-95"
          >
            <Sparkles className="h-4 w-4 text-brand-primary animate-pulse" />
            <span>Me contacter</span>
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={onOpenDevis}
            className="rounded-full bg-brand-primary px-4 py-2 text-xs font-bold text-white shadow-sm sm:hidden"
          >
            Contact
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Menu Mobile"
            className="flex h-10 w-10 items-center justify-center rounded-2xl bg-brand-dark text-white transition-transform active:scale-90"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden mx-auto mt-2 max-w-[1240px] rounded-3xl border border-gray-200 bg-white/95 p-6 shadow-2xl backdrop-blur-xl animate-in fade-in slide-in-from-top-4 duration-300">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between border-b border-gray-100 pb-3 text-sm font-bold text-brand-dark hover:text-brand-primary"
              >
                <span>{link.name}</span>
                {link.badge ? (
                  <span className="rounded-full bg-brand-primary/10 px-2.5 py-0.5 text-[10px] font-bold text-brand-primary">
                    {link.badge}
                  </span>
                ) : (
                  <ArrowUpRight className="h-4 w-4 text-gray-400" />
                )}
              </a>
            ))}

            <div className="mt-2 flex flex-col gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenSandbox();
                }}
                className="flex items-center justify-center gap-2 rounded-2xl border border-brand-dark/15 bg-slate-50 py-3 text-xs font-bold text-brand-dark"
              >
                <ShieldCheck className="h-4 w-4 text-brand-primary" />
                <span>Tester la Démo Espace Client</span>
              </button>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenDevis();
                }}
                className="flex items-center justify-center gap-2 rounded-2xl bg-brand-primary py-3.5 text-sm font-bold text-white shadow-lg"
              >
                <Sparkles className="h-4 w-4" />
                <span>Me contacter</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
