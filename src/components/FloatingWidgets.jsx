import React from 'react';
import { MessageSquare, Sparkles, ShieldCheck } from 'lucide-react';
import { siteData } from '../data/siteData';

export default function FloatingWidgets({ onOpenDevis, onOpenSandbox }) {
  return (
    <>
      {/* Floating Bottom Right WhatsApp */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3">
        <a
          href={siteData.profile.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Contacter sur WhatsApp"
          className="btn-magnetic group relative flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500 text-white shadow-2xl hover:bg-emerald-600 hover:scale-110 active:scale-95 transition-all"
        >
          <MessageSquare className="h-6 w-6" />
          
          {/* Notification Pulse Dot */}
          <span className="absolute -top-1 -right-1 flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-400 text-[9px] font-bold text-white items-center justify-center">1</span>
          </span>

          {/* Hover Tooltip */}
          <span className="absolute right-16 rounded-xl bg-brand-dark px-3 py-1.5 text-xs font-bold text-white shadow-xl opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity whitespace-nowrap">
            Discuter sur WhatsApp ⚡
          </span>
        </a>
      </div>

      {/* Floating Bottom Left Quick Actions */}
      <div className="fixed bottom-6 left-6 z-40 hidden sm:flex items-center gap-2">
        <button
          onClick={onOpenSandbox}
          className="flex items-center gap-2 rounded-full border border-gray-200 bg-white/90 px-4 py-2.5 text-xs font-bold text-brand-dark shadow-lg backdrop-blur-md hover:bg-white hover:border-brand-primary/40 active:scale-95 transition-all"
        >
          <ShieldCheck className="h-4 w-4 text-brand-primary" />
          <span>Démo Espace Client</span>
        </button>
      </div>
    </>
  );
}
