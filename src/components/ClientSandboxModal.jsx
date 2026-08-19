import React, { useState } from 'react';
import { 
  X, 
  Activity, 
  MessageSquare, 
  FileText, 
  CheckCircle2, 
  Sparkles, 
  Send, 
  PenTool, 
  ShieldCheck, 
  Layers, 
  Download, 
  Eye,
  Clock
} from 'lucide-react';
import confetti from 'canvas-confetti';

export default function ClientSandboxModal({ isOpen, onClose, onOpenDevis }) {
  const [activeTab, setActiveTab] = useState('timeline');
  const [contractSigned, setContractSigned] = useState(false);
  const [milestones, setMilestones] = useState([
    { id: 1, name: "1. Brief & Cahier des charges", status: "Terminé", progress: 100, date: "12 Août" },
    { id: 2, name: "2. Maquettes UI/UX V1 & V2", status: "Terminé", progress: 100, date: "15 Août" },
    { id: 3, name: "3. Développement Frontend & API", status: "En cours", progress: 75, date: "En cours" },
    { id: 4, name: "4. Tests QA & Mise en production", status: "À venir", progress: 0, date: "22 Août" },
  ]);

  const [chatMessages, setChatMessages] = useState([
    { sender: 'Mathias', text: 'Bonjour ! La maquette de votre page d\'accueil est prête sur votre staging.', time: '10:30' },
    { sender: 'Vous (Client)', text: 'Super Mathias ! J\'ai adoré les animations et la fluidité.', time: '10:45' },
    { sender: 'Mathias', text: 'Parfait, nous attaquons l\'intégration du tunnel de commande.', time: '11:00' },
  ]);

  const [newInput, setNewInput] = useState('');

  if (!isOpen) return null;

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!newInput.trim()) return;
    const msg = { sender: 'Vous (Client)', text: newInput, time: 'À l\'instant' };
    setChatMessages([...chatMessages, msg]);
    setNewInput('');

    setTimeout(() => {
      setChatMessages(prev => [
        ...prev,
        { sender: 'Mathias', text: 'Bien reçu ! C\'est pris en compte dans le sprint actuel.', time: 'À l\'instant' }
      ]);
    }, 900);
  };

  const handleSignContract = () => {
    setContractSigned(true);
    confetti({
      particleCount: 80,
      spread: 60,
      origin: { y: 0.7 }
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl overflow-hidden rounded-[32px] bg-[#0F111A] text-white p-5 sm:p-8 shadow-2xl border border-white/15 animate-in zoom-in-95 duration-200 max-h-[95vh] flex flex-col">
        
        {/* Top Header */}
        <div className="flex items-center justify-between pb-4 border-b border-white/10 shrink-0">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-primary text-white font-black text-sm">
              K
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-nunito text-lg font-bold">Bac à Sable — Espace Client Dédié</span>
                <span className="rounded-full bg-emerald-500/20 px-2 py-0.5 text-[10px] font-bold text-emerald-400 border border-emerald-500/30">
                  Simulation Interactive
                </span>
              </div>
              <p className="text-[11px] text-gray-400 font-montserrat">Projet démo : Scale Horizon Web App • ID #MAT-8492</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-gray-300 hover:bg-white/20 transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="mt-4 flex items-center gap-2 border-b border-white/10 pb-3 overflow-x-auto hide-scrollbar shrink-0">
          {[
            { id: 'timeline', label: '📊 Timeline & Jalons', icon: Activity },
            { id: 'chat', label: '💬 Messages & Feedback', icon: MessageSquare },
            { id: 'contract', label: '✍️ Contrat & Documents', icon: FileText },
            { id: 'staging', label: '🚀 Preview Staging', icon: Layers },
          ].map((t) => (
            <button
              key={t.id}
              onClick={() => setActiveTab(t.id)}
              className={`flex items-center gap-2 rounded-xl px-4 py-2 text-xs font-bold transition-all shrink-0 ${
                activeTab === t.id
                  ? 'bg-brand-primary text-white shadow-glow-sm'
                  : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white'
              }`}
            >
              <span>{t.label}</span>
            </button>
          ))}
        </div>

        {/* Dynamic Sandbox Body */}
        <div className="my-5 flex-1 overflow-y-auto pr-1">
          
          {/* TAB 1: TIMELINE */}
          {activeTab === 'timeline' && (
            <div className="space-y-6 animate-in fade-in duration-200">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">AVANCEMENT GLOBAL</span>
                  <div className="mt-1 text-3xl font-black text-emerald-400 font-nunito">78%</div>
                  <div className="mt-2 h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-emerald-400 rounded-full w-[78%]"></div>
                  </div>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">LIVRAISON PRÉVUE</span>
                  <div className="mt-1 text-2xl font-black text-white font-nunito">22 Août 2026</div>
                  <span className="text-[11px] text-emerald-400 font-bold">● Respect du calendrier</span>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">RESPONSABLE PROJET</span>
                  <div className="mt-1 text-sm font-bold text-white">Mathias</div>
                  <span className="text-[11px] text-brand-primary">Lead Architect</span>
                </div>
              </div>

              {/* Milestones list */}
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <h4 className="font-nunito font-bold text-base mb-4 text-white">Jalons & Validations du projet</h4>
                <div className="space-y-3">
                  {milestones.map((m) => (
                    <div key={m.id} className="flex items-center justify-between p-3.5 rounded-xl bg-white/5 border border-white/5 text-xs">
                      <div className="flex items-center gap-3">
                        <div className={`h-3 w-3 rounded-full ${
                          m.status === 'Terminé' ? 'bg-emerald-400' : m.status === 'En cours' ? 'bg-brand-primary animate-pulse' : 'bg-gray-600'
                        }`}></div>
                        <span className="font-bold text-white">{m.name}</span>
                      </div>
                      <div className="flex items-center gap-4">
                        <span className="font-mono text-gray-400">{m.date}</span>
                        <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold ${
                          m.status === 'Terminé' 
                            ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30' 
                            : m.status === 'En cours' 
                            ? 'bg-blue-500/20 text-blue-300 border border-blue-500/30' 
                            : 'bg-gray-700 text-gray-400'
                        }`}>
                          {m.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: CHAT */}
          {activeTab === 'chat' && (
            <div className="flex flex-col h-[350px] rounded-2xl border border-white/10 bg-white/5 p-4 animate-in fade-in duration-200">
              <div className="flex-1 overflow-y-auto space-y-3 pr-2">
                {chatMessages.map((msg, i) => (
                  <div 
                    key={i} 
                    className={`flex flex-col ${msg.sender.includes('Vous') ? 'items-end' : 'items-start'}`}
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-[10px] font-bold text-gray-400">{msg.sender}</span>
                      <span className="text-[9px] text-gray-500">{msg.time}</span>
                    </div>
                    <div className={`rounded-2xl px-4 py-2.5 text-xs max-w-[80%] leading-relaxed ${
                      msg.sender.includes('Vous') 
                        ? 'bg-brand-primary text-white' 
                        : 'bg-white/15 text-gray-200'
                    }`}>
                      {msg.text}
                    </div>
                  </div>
                ))}
              </div>

              {/* Chat Input */}
              <form onSubmit={handleSendMessage} className="mt-3 pt-3 border-t border-white/10 flex gap-2">
                <input
                  type="text"
                  placeholder="Tapez un message de test pour Mathias..."
                  value={newInput}
                  onChange={(e) => setNewInput(e.target.value)}
                  className="flex-1 rounded-xl bg-white/10 border border-white/15 px-4 py-2 text-xs text-white focus:outline-none focus:border-brand-primary"
                />
                <button
                  type="submit"
                  className="flex items-center gap-1.5 rounded-xl bg-brand-primary px-4 py-2 text-xs font-bold text-white hover:bg-brand-primary-hover transition-colors"
                >
                  <Send className="h-3.5 w-3.5" />
                  <span>Envoyer</span>
                </button>
              </form>
            </div>
          )}

          {/* TAB 3: CONTRACT */}
          {activeTab === 'contract' && (
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 space-y-6 animate-in fade-in duration-200">
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <div>
                  <h4 className="font-nunito font-bold text-lg text-white">Contrat de Prestation Numérique</h4>
                  <p className="text-xs text-gray-400">Réf : CT-2026-MAT-0042 • Validité juridique internationale</p>
                </div>

                {contractSigned ? (
                  <span className="flex items-center gap-1.5 rounded-full bg-emerald-500/20 border border-emerald-500/40 px-3 py-1 text-xs font-bold text-emerald-400">
                    <ShieldCheck className="h-4 w-4" />
                    Signé Électroniquement
                  </span>
                ) : (
                  <span className="rounded-full bg-amber-500/20 border border-amber-500/40 px-3 py-1 text-xs font-bold text-amber-400">
                    En attente de signature
                  </span>
                )}
              </div>

              <div className="p-4 rounded-xl bg-black/40 border border-white/10 text-xs text-gray-300 font-mono leading-relaxed space-y-2">
                <p><strong>Article 1 :</strong> Mathias s'engage à livrer l'application conforme aux spécifications validées.</p>
                <p><strong>Article 2 :</strong> Propriété intellectuelle et code source transférés à 100% au Client.</p>
                <p><strong>Article 3 :</strong> Garantie de maintenance et correction de bugs incluse pendant 60 jours.</p>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                <button
                  onClick={handleSignContract}
                  disabled={contractSigned}
                  className={`btn-magnetic flex items-center gap-2 rounded-full px-6 py-3 text-xs font-bold transition-all ${
                    contractSigned 
                      ? 'bg-emerald-600/50 text-white cursor-not-allowed' 
                      : 'bg-brand-primary text-white hover:bg-brand-primary-hover shadow-glow-sm'
                  }`}
                >
                  <PenTool className="h-4 w-4" />
                  <span>{contractSigned ? '✓ Contrat validé avec succès' : 'Signer électroniquement le contrat (Démo)'}</span>
                </button>

                <div className="flex items-center gap-2 text-xs text-gray-400">
                  <Download className="h-4 w-4" />
                  <span>Télécharger le PDF certifié</span>
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: STAGING PREVIEW */}
          {activeTab === 'staging' && (
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 animate-in fade-in duration-200">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h4 className="font-nunito font-bold text-base text-white">Environnement de Pré-production</h4>
                  <p className="text-xs text-gray-400">Accès exclusif réservé au client pour tester en conditions réelles.</p>
                </div>
                <span className="rounded-lg bg-emerald-500/20 px-3 py-1 text-xs font-bold text-emerald-400 border border-emerald-500/30">
                  ● Staging Actif
                </span>
              </div>

              <div className="rounded-xl border border-white/10 bg-black/60 p-5 text-center space-y-4">
                <div className="text-xs font-mono text-gray-300">
                  URL privée : <span className="text-brand-primary underline">https://client-scale-horizon.mathias-staging.app</span>
                </div>
                <p className="text-xs text-gray-400 max-w-md mx-auto">
                  Votre équipe peut naviguer sur mobile et PC, simuler des commandes et tester tous les flux avant que le public n'y ait accès.
                </p>
              </div>
            </div>
          )}

        </div>

        {/* Modal Bottom Bar */}
        <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 shrink-0">
          <p className="text-xs text-gray-400">
            Convaincu par l'expérience ? Créez votre propre portail de projet.
          </p>

          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="rounded-full px-5 py-2.5 text-xs font-bold text-gray-400 hover:text-white"
            >
              Fermer la démo
            </button>

            <button
              onClick={() => {
                onClose();
                onOpenDevis();
              }}
              className="btn-magnetic rounded-full bg-brand-primary px-6 py-2.5 text-xs font-bold text-white shadow-glow-sm hover:bg-brand-primary-hover"
            >
              Lancer mon projet avec Espace Client
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
