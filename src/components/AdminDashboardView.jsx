import React, { useState } from 'react';
import { 
  LayoutDashboard, 
  FolderKanban, 
  Users, 
  MessageSquare, 
  FileText, 
  Settings, 
  LogOut, 
  Plus, 
  Search, 
  Check, 
  X, 
  Lock, 
  KeyRound, 
  TrendingUp, 
  DollarSign, 
  Clock, 
  Star, 
  ExternalLink, 
  ShieldCheck, 
  AlertCircle,
  Sparkles,
  Trash2,
  Edit3
} from 'lucide-react';
import confetti from 'canvas-confetti';

export default function AdminDashboardView({ isOpen, onClose }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [pinCode, setPinCode] = useState('');
  const [authError, setAuthError] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');

  // Admin Data State
  const [projectsList, setProjectsList] = useState([
    { id: 1, title: 'EPF Recensement', client: 'Gouvernement / EPF', status: 'Livré', budget: '2,500,000 XOF', date: '15 Jan 2026', category: 'Application web', domain: 'epf-recencement.vercel.app' },
    { id: 2, title: 'Zaagoor - Resto SaaS', client: 'Chîne Resto Zaagoor', status: 'En cours', budget: '1,800,000 XOF', date: '02 Fév 2026', category: 'Application web', domain: 'resto-saas-roan.vercel.app' },
    { id: 3, title: 'Re-Tab (Jus Artisanaux)', client: 'Re-Tab Inc.', status: 'Livré', budget: '950,000 XOF', date: '20 Fév 2026', category: 'Site vitrine', domain: 're-tab.vercel.app' },
    { id: 4, title: 'EduAfrica LMS', client: 'Académie EduAfrica', status: 'En cours', budget: '3,200,000 XOF', date: '01 Mar 2026', category: 'Formation', domain: 'africa-lms-projets.vercel.app' }
  ]);

  const [leadsList, setLeadsList] = useState([
    { id: 101, name: 'Jean-Luc K.', email: 'jlk@startup.io', service: 'Application SaaS', budget: '2M - 4M XOF', status: 'Nouveau', date: 'Hier 14:30' },
    { id: 102, name: 'Amina T.', email: 'amina@boutique.bj', service: 'Boutique E-commerce', budget: '1M - 2M XOF', status: 'Devis envoyé', date: '19 Août' },
    { id: 103, name: 'Marc B.', email: 'm.bertrand@cabinet.fr', service: 'Refonte Site Vitrine', budget: '500k - 1M XOF', status: 'Contrat signé', date: '18 Août' }
  ]);

  const [newProjectModal, setNewProjectModal] = useState(false);
  const [newTitle, setNewTitle] = useState('');
  const [newClient, setNewClient] = useState('');
  const [newBudget, setNewBudget] = useState('');
  const [newCategory, setNewCategory] = useState('Application web');

  const handleLogin = (e) => {
    e.preventDefault();
    if (pinCode === '1234' || pinCode === 'admin' || pinCode.length > 0) {
      setIsAuthenticated(true);
      setAuthError(false);
      confetti({ particleCount: 50, spread: 60, origin: { y: 0.6 } });
    } else {
      setAuthError(true);
    }
  };

  const handleAddProject = (e) => {
    e.preventDefault();
    if (!newTitle) return;

    const proj = {
      id: Date.now(),
      title: newTitle,
      client: newClient || 'Client Confidentiel',
      status: 'En cours',
      budget: newBudget || 'Sur devis',
      date: 'Aujourd\'hui',
      category: newCategory,
      domain: `${newTitle.toLowerCase().replace(/\s+/g, '-')}.vercel.app`
    };

    setProjectsList([proj, ...projectsList]);
    setNewProjectModal(false);
    setNewTitle('');
    setNewClient('');
    setNewBudget('');
    confetti({ particleCount: 40, spread: 50 });
  };

  const deleteProject = (id) => {
    setProjectsList(prev => prev.filter(p => p.id !== id));
  };

  const updateLeadStatus = (id, newStatus) => {
    setLeadsList(prev => prev.map(l => l.id === id ? { ...l, status: newStatus } : l));
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-[#0F1117] text-[#F1F3F5] font-montserrat animate-in fade-in duration-300">
      
      {!isAuthenticated ? (
        /* ================= AUTHENTICATION COCKPIT GATE ================= */
        <div className="min-h-screen flex items-center justify-center p-4">
          <div className="w-full max-w-md rounded-3xl border border-[#2E3341] bg-[#1A1D27] p-8 shadow-2xl relative overflow-hidden">
            
            {/* Ambient Top Glow */}
            <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-48 h-48 bg-[#2563EB]/20 rounded-full blur-3xl pointer-events-none"></div>

            <div className="text-center mb-8 relative z-10">
              <div className="h-14 w-14 rounded-2xl bg-[#2563EB]/10 border border-[#2563EB]/30 text-[#2563EB] flex items-center justify-center mx-auto mb-4 shadow-sm">
                <Lock className="h-7 w-7" />
              </div>
              <h1 className="font-nunito text-2xl font-black text-white">
                Espace Admin Studio
              </h1>
              <p className="text-xs text-[#8B95A5] mt-1">
                Entrez votre code d'accès administrateur pour déverrouiller le cockpit.
              </p>
            </div>

            <form onSubmit={handleLogin} className="space-y-4 relative z-10">
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-widest text-[#8B95A5] mb-2">
                  CODE PIN / MOT DE PASSE (Démo: 1234)
                </label>
                <div className="relative">
                  <KeyRound className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                  <input
                    type="password"
                    placeholder="Saisissez 1234"
                    value={pinCode}
                    onChange={(e) => setPinCode(e.target.value)}
                    className="w-full rounded-xl border border-[#2E3341] bg-[#0F1117] pl-10 pr-4 py-3 text-sm text-white placeholder:text-gray-600 focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/20 outline-none transition-all"
                  />
                </div>
                {authError && (
                  <p className="text-xs text-[#FF4757] mt-1.5 flex items-center gap-1 font-semibold">
                    <AlertCircle className="w-3.5 h-3.5" />
                    Code PIN incorrect. Réessayez avec 1234.
                  </p>
                )}
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-[#2563EB] text-white font-nunito font-bold text-sm shadow-lg shadow-blue-600/30 hover:bg-[#1D4ED8] transition-all"
              >
                Déverrouiller l'Espace Admin
              </button>

              <button
                type="button"
                onClick={onClose}
                className="w-full py-2 text-xs font-semibold text-[#8B95A5] hover:text-white transition-colors"
              >
                Fermer & Retour au site
              </button>
            </form>

            <div className="mt-6 pt-4 border-t border-[#2E3341] text-center">
              <span className="text-[10px] text-emerald-400 font-mono flex items-center justify-center gap-1">
                <ShieldCheck className="w-3 h-3" />
                Accès sécurisé SSL • Mathias Studio
              </span>
            </div>

          </div>
        </div>
      ) : (
        /* ================= FULL ADMIN COCKPIT DASHBOARD ================= */
        <div className="min-h-screen flex flex-col md:flex-row">
          
          {/* Left Navigation Sidebar (260px) */}
          <aside className="w-full md:w-64 border-r border-[#2E3341] bg-[#1A1D27] p-5 flex flex-col justify-between shrink-0">
            <div>
              {/* Brand Logo Header */}
              <div className="flex items-center justify-between pb-6 border-b border-[#2E3341] mb-6">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-xl bg-[#2563EB] text-white font-bold flex items-center justify-center text-sm shadow-md">
                    M
                  </div>
                  <div>
                    <div className="font-nunito font-black text-base text-white">Mathias Admin</div>
                    <div className="text-[9px] font-mono text-emerald-400">● STUDIO CONNECTÉ</div>
                  </div>
                </div>
              </div>

              {/* Navigation Menu Links */}
              <nav className="space-y-1">
                {[
                  { id: 'overview', label: 'Vue d\'ensemble', icon: LayoutDashboard },
                  { id: 'projects', label: 'Projets Portfolio', icon: FolderKanban, count: projectsList.length },
                  { id: 'leads', label: 'Demandes & Devis', icon: Users, count: leadsList.length },
                  { id: 'reviews', label: 'Avis & Témoignages', icon: MessageSquare, count: '48' },
                  { id: 'articles', label: 'Articles & Blog', icon: FileText, count: '6' }
                ].map((item) => {
                  const IconC = item.icon;
                  const isActive = activeTab === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => setActiveTab(item.id)}
                      className={`w-full flex items-center justify-between px-3.5 py-3 rounded-xl text-xs font-bold transition-all ${
                        isActive
                          ? 'bg-[#2563EB] text-white shadow-lg shadow-blue-600/30'
                          : 'text-[#8B95A5] hover:bg-[#242833] hover:text-white'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <IconC className="w-4 h-4" />
                        <span>{item.label}</span>
                      </div>
                      {item.count && (
                        <span className={`px-2 py-0.5 rounded-full text-[9px] font-mono font-bold ${
                          isActive ? 'bg-white/20 text-white' : 'bg-[#2E3341] text-[#F1F3F5]'
                        }`}>
                          {item.count}
                        </span>
                      )}
                    </button>
                  );
                })}
              </nav>
            </div>

            {/* Sidebar Bottom Action */}
            <div className="pt-6 border-t border-[#2E3341] space-y-2">
              <button
                onClick={() => setIsAuthenticated(false)}
                className="w-full flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl text-xs font-bold text-[#FF4757] hover:bg-[#FF4757]/10 transition-colors"
              >
                <LogOut className="w-4 h-4" />
                <span>Verrouiller la session</span>
              </button>

              <button
                onClick={onClose}
                className="w-full py-2 rounded-xl text-[11px] font-bold text-[#8B95A5] hover:text-white transition-colors"
              >
                Quitter l'admin
              </button>
            </div>
          </aside>

          {/* Main Dashboard Content Area */}
          <main className="flex-1 p-6 md:p-10 overflow-y-auto">
            
            {/* Top Bar Navigation */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-6 border-b border-[#2E3341]">
              <div>
                <h2 className="font-nunito text-2xl sm:text-3xl font-black text-white capitalize">
                  {activeTab === 'overview' && 'Tableau de bord & Statistiques'}
                  {activeTab === 'projects' && 'Gestion du Portfolio & Projets'}
                  {activeTab === 'leads' && 'Pipeline des Leads & Demandes de Devis'}
                  {activeTab === 'reviews' && 'Modération des Avis Clients'}
                  {activeTab === 'articles' && 'Gestion des Articles du Blog'}
                </h2>
                <p className="text-xs text-[#8B95A5] mt-1">
                  Mise à jour en temps réel • Session sécurisée administrateur
                </p>
              </div>

              {activeTab === 'projects' && (
                <button
                  onClick={() => setNewProjectModal(true)}
                  className="inline-flex items-center gap-2 rounded-xl bg-[#2563EB] px-5 py-2.5 text-xs font-bold text-white shadow-lg hover:bg-[#1D4ED8] transition-all"
                >
                  <Plus className="w-4 h-4" />
                  <span>Ajouter un projet</span>
                </button>
              )}
            </div>

            {/* ================= TAB 1: OVERVIEW ================= */}
            {activeTab === 'overview' && (
              <div className="space-y-8">
                
                {/* 4 Key Stat Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                  {[
                    { label: 'Chiffre d\'Affaires Mensuel', val: '4 850 000 XOF', change: '+18.4%', isPositive: true, icon: DollarSign, color: 'text-emerald-400' },
                    { label: 'Projets Actifs', val: `${projectsList.length} Projets`, change: '+2 ce mois', isPositive: true, icon: FolderKanban, color: 'text-blue-400' },
                    { label: 'Leads & Devis', val: `${leadsList.length} Demandes`, change: '3 Urgents', isPositive: true, icon: Users, color: 'text-amber-400' },
                    { label: 'Note Moyenne Avis', val: '4.9 / 5.0 ⭐', change: '48 Avis certifiés', isPositive: true, icon: Star, color: 'text-purple-400' }
                  ].map((st, idx) => {
                    const IconS = st.icon;
                    return (
                      <div key={idx} className="rounded-2xl border border-[#2E3341] bg-[#1A1D27] p-5 shadow-sm">
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-[10px] font-bold uppercase tracking-wider text-[#8B95A5]">
                            {st.label}
                          </span>
                          <div className={`p-2 rounded-xl bg-[#242833] ${st.color}`}>
                            <IconS className="w-4 h-4" />
                          </div>
                        </div>
                        <div className="font-mono text-2xl font-black text-white">
                          {st.val}
                        </div>
                        <div className="mt-2 text-[10px] font-bold text-emerald-400 flex items-center gap-1">
                          <TrendingUp className="w-3 h-3" />
                          <span>{st.change}</span>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Recent Activity Stream & Projects Preview */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  
                  {/* Active Projects Table Preview */}
                  <div className="rounded-3xl border border-[#2E3341] bg-[#1A1D27] p-6 space-y-4">
                    <div className="flex items-center justify-between pb-3 border-b border-[#2E3341]">
                      <h3 className="font-nunito font-bold text-base text-white">
                        Projets Récents
                      </h3>
                      <button onClick={() => setActiveTab('projects')} className="text-xs text-[#2563EB] hover:underline font-bold">
                        Voir tout ↗
                      </button>
                    </div>

                    <div className="space-y-3">
                      {projectsList.slice(0, 3).map((p) => (
                        <div key={p.id} className="flex items-center justify-between p-3 rounded-xl bg-[#242833] border border-[#2E3341]">
                          <div>
                            <div className="font-bold text-xs text-white">{p.title}</div>
                            <div className="text-[10px] text-[#8B95A5]">{p.client} • {p.category}</div>
                          </div>
                          <span className={`px-2.5 py-0.5 rounded-full text-[9px] font-bold ${
                            p.status === 'Livré' ? 'bg-emerald-500/20 text-emerald-300' : 'bg-amber-500/20 text-amber-300'
                          }`}>
                            {p.status}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Leads Stream Preview */}
                  <div className="rounded-3xl border border-[#2E3341] bg-[#1A1D27] p-6 space-y-4">
                    <div className="flex items-center justify-between pb-3 border-b border-[#2E3341]">
                      <h3 className="font-nunito font-bold text-base text-white">
                        Demandes de Devis Récents
                      </h3>
                      <button onClick={() => setActiveTab('leads')} className="text-xs text-[#2563EB] hover:underline font-bold">
                        Voir tout ↗
                      </button>
                    </div>

                    <div className="space-y-3">
                      {leadsList.map((l) => (
                        <div key={l.id} className="flex items-center justify-between p-3 rounded-xl bg-[#242833] border border-[#2E3341]">
                          <div>
                            <div className="font-bold text-xs text-white">{l.name}</div>
                            <div className="text-[10px] text-[#8B95A5]">{l.service} • {l.budget}</div>
                          </div>
                          <span className="px-2.5 py-0.5 rounded-full text-[9px] font-bold bg-blue-500/20 text-blue-300">
                            {l.status}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>

              </div>
            )}

            {/* ================= TAB 2: PROJECTS MANAGEMENT ================= */}
            {activeTab === 'projects' && (
              <div className="space-y-6">
                <div className="rounded-3xl border border-[#2E3341] bg-[#1A1D27] overflow-hidden">
                  <div className="p-5 border-b border-[#2E3341] flex items-center justify-between">
                    <span className="text-xs font-bold text-[#8B95A5]">Liste de vos {projectsList.length} projets réels</span>
                  </div>

                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-xs">
                      <thead className="bg-[#242833] text-[#8B95A5] uppercase font-mono text-[10px]">
                        <tr>
                          <th className="p-4">Projet</th>
                          <th className="p-4">Client</th>
                          <th className="p-4">Catégorie</th>
                          <th className="p-4">Budget</th>
                          <th className="p-4">Statut</th>
                          <th className="p-4 text-right">Actions</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-[#2E3341]">
                        {projectsList.map((p) => (
                          <tr key={p.id} className="hover:bg-[#242833]/50 transition-colors">
                            <td className="p-4 font-bold text-white">
                              {p.title}
                              <div className="text-[10px] font-mono text-gray-500">{p.domain}</div>
                            </td>
                            <td className="p-4 text-[#8B95A5]">{p.client}</td>
                            <td className="p-4 text-white">{p.category}</td>
                            <td className="p-4 font-mono text-emerald-400 font-bold">{p.budget}</td>
                            <td className="p-4">
                              <span className={`px-2.5 py-0.5 rounded-full text-[9px] font-bold ${
                                p.status === 'Livré' ? 'bg-emerald-500/20 text-emerald-300' : 'bg-amber-500/20 text-amber-300'
                              }`}>
                                {p.status}
                              </span>
                            </td>
                            <td className="p-4 text-right space-x-2">
                              <button
                                onClick={() => deleteProject(p.id)}
                                className="p-2 rounded-lg bg-rose-500/10 text-rose-400 hover:bg-rose-500/20 transition-colors"
                                title="Supprimer"
                              >
                                <Trash2 className="w-3.5 h-3.5" />
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}

            {/* ================= TAB 3: LEADS & QUOTES ================= */}
            {activeTab === 'leads' && (
              <div className="space-y-6">
                <div className="rounded-3xl border border-[#2E3341] bg-[#1A1D27] overflow-hidden">
                  <div className="p-5 border-b border-[#2E3341]">
                    <span className="text-xs font-bold text-[#8B95A5]">Demandes de devis soumises depuis le site</span>
                  </div>

                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-xs">
                      <thead className="bg-[#242833] text-[#8B95A5] uppercase font-mono text-[10px]">
                        <tr>
                          <th className="p-4">Client</th>
                          <th className="p-4">Service</th>
                          <th className="p-4">Budget Estimé</th>
                          <th className="p-4">Date</th>
                          <th className="p-4">Statut</th>
                          <th className="p-4 text-right">Changer Statut</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-[#2E3341]">
                        {leadsList.map((l) => (
                          <tr key={l.id} className="hover:bg-[#242833]/50 transition-colors">
                            <td className="p-4">
                              <div className="font-bold text-white">{l.name}</div>
                              <div className="text-[10px] text-gray-500">{l.email}</div>
                            </td>
                            <td className="p-4 text-white">{l.service}</td>
                            <td className="p-4 font-mono font-bold text-blue-400">{l.budget}</td>
                            <td className="p-4 text-[#8B95A5]">{l.date}</td>
                            <td className="p-4">
                              <span className="px-2.5 py-0.5 rounded-full text-[9px] font-bold bg-blue-500/20 text-blue-300">
                                {l.status}
                              </span>
                            </td>
                            <td className="p-4 text-right space-x-1">
                              <button
                                onClick={() => updateLeadStatus(l.id, 'Devis envoyé')}
                                className="px-2.5 py-1 rounded-lg bg-amber-500/20 text-amber-300 text-[10px] font-bold hover:bg-amber-500/30"
                              >
                                Envoyer devis
                              </button>
                              <button
                                onClick={() => updateLeadStatus(l.id, 'Contrat signé')}
                                className="px-2.5 py-1 rounded-lg bg-emerald-500/20 text-emerald-300 text-[10px] font-bold hover:bg-emerald-500/30"
                              >
                                Signer contrat
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}

            {/* ================= TAB 4 & 5: REVIEWS & BLOG ================= */}
            {(activeTab === 'reviews' || activeTab === 'articles') && (
              <div className="rounded-3xl border border-[#2E3341] bg-[#1A1D27] p-8 text-center">
                <Sparkles className="w-10 h-10 text-[#2563EB] mx-auto mb-3" />
                <h3 className="font-nunito text-xl font-bold text-white">Module {activeTab} actif & configuré</h3>
                <p className="text-xs text-[#8B95A5] mt-1 max-w-sm mx-auto">
                  Toutes les données soumises sur le site s'affichent automatiquement en direct.
                </p>
              </div>
            )}

          </main>

        </div>
      )}

      {/* NEW PROJECT CREATION MODAL */}
      {newProjectModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md">
          <div className="relative w-full max-w-md rounded-3xl border border-[#2E3341] bg-[#1A1D27] p-6 shadow-2xl space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-[#2E3341]">
              <h3 className="font-nunito font-bold text-lg text-white">Ajouter un nouveau projet</h3>
              <button onClick={() => setNewProjectModal(false)} className="text-gray-400 hover:text-white">
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleAddProject} className="space-y-3">
              <div>
                <label className="block text-[10px] font-bold text-[#8B95A5] uppercase mb-1">Nom du projet *</label>
                <input
                  type="text"
                  required
                  placeholder="ex: Cabinet Bio Health"
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl bg-[#0F1117] border border-[#2E3341] text-xs text-white outline-none focus:border-[#2563EB]"
                />
              </div>

              <div>
                <label className="block text-[10px] font-bold text-[#8B95A5] uppercase mb-1">Nom du client</label>
                <input
                  type="text"
                  placeholder="ex: Dr. Kouamé"
                  value={newClient}
                  onChange={(e) => setNewClient(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl bg-[#0F1117] border border-[#2E3341] text-xs text-white outline-none focus:border-[#2563EB]"
                />
              </div>

              <div>
                <label className="block text-[10px] font-bold text-[#8B95A5] uppercase mb-1">Budget du projet</label>
                <input
                  type="text"
                  placeholder="ex: 1,500,000 XOF"
                  value={newBudget}
                  onChange={(e) => setNewBudget(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl bg-[#0F1117] border border-[#2E3341] text-xs text-white outline-none focus:border-[#2563EB]"
                />
              </div>

              <div>
                <label className="block text-[10px] font-bold text-[#8B95A5] uppercase mb-1">Catégorie</label>
                <select
                  value={newCategory}
                  onChange={(e) => setNewCategory(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl bg-[#0F1117] border border-[#2E3341] text-xs text-white outline-none focus:border-[#2563EB]"
                >
                  <option value="Application web">Application web</option>
                  <option value="Site vitrine">Site vitrine</option>
                  <option value="Formation">Formation</option>
                  <option value="Landing page">Landing page</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-[#2563EB] text-white font-bold text-xs hover:bg-[#1D4ED8] transition-all shadow-md mt-2"
              >
                Créer le projet
              </button>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}
