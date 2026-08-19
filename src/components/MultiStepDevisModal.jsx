import React, { useState } from 'react';
import { X, ArrowRight, ArrowLeft, CheckCircle2, Sparkles, Send, MessageSquare, ShieldCheck } from 'lucide-react';
import confetti from 'canvas-confetti';
import { siteData } from '../data/siteData';

export default function MultiStepDevisModal({ isOpen, onClose, initialService }) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    serviceType: initialService || 'landing-page',
    goal: 'leads',
    deadline: '15j',
    budget: '300-500k',
    projectState: 'nouveau',
    description: '',
    fullName: '',
    email: '',
    phone: '',
    company: ''
  });

  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleNext = () => {
    if (step < 7) {
      setStep(step + 1);
    } else {
      // Submit
      triggerSubmit();
    }
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  const triggerSubmit = () => {
    setSubmitted(true);
    confetti({
      particleCount: 120,
      spread: 70,
      origin: { y: 0.6 }
    });
  };

  const getWhatsAppMessage = () => {
    const text = `*Nouvelle Demande de Projet — MathiasDev*%0A%0A` +
      `👤 *Nom:* ${formData.fullName || 'Non spécifié'}%0A` +
      `🏢 *Entreprise:* ${formData.company || 'N/A'}%0A` +
      `📧 *Email:* ${formData.email || 'N/A'}%0A` +
      `📱 *Téléphone:* ${formData.phone || 'N/A'}%0A%0A` +
      `📌 *Type de projet:* ${formData.serviceType}%0A` +
      `🎯 *Objectif:* ${formData.goal}%0A` +
      `⏱ *Délai:* ${formData.deadline}%0A` +
      `💰 *Budget:* ${formData.budget}%0A` +
      `📝 *Description:* ${encodeURIComponent(formData.description || 'Projet à cadrer ensemble')}`;
    return `https://wa.me/2290157307677?text=${text}`;
  };

  const resetAndClose = () => {
    setSubmitted(false);
    setStep(1);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/75 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl overflow-hidden rounded-3xl sm:rounded-[32px] bg-white p-5 sm:p-8 md:p-10 shadow-2xl animate-in zoom-in-95 duration-200 max-h-[92vh] overflow-y-auto">
        
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between pb-4 border-b border-gray-100">
          <div className="flex items-center gap-2">
            <span className="flex h-7 w-7 items-center justify-center rounded-xl bg-brand-primary text-white font-black text-xs">
              M
            </span>
            <span className="font-nunito text-lg font-bold text-brand-dark">
              Calculateur de Devis & Brief Express
            </span>
          </div>

          <button
            onClick={resetAndClose}
            className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-100 text-gray-500 hover:bg-gray-200 transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {!submitted ? (
          <div>
            {/* Step Progress Bar */}
            <div className="mt-6 mb-8">
              <div className="flex items-center justify-between text-xs font-bold text-gray-400 mb-2">
                <span>Étape {step} sur 7</span>
                <span className="text-brand-primary font-mono">{Math.round((step / 7) * 100)}%</span>
              </div>
              <div className="h-2 w-full rounded-full bg-gray-100 overflow-hidden">
                <div 
                  className="h-full bg-brand-primary transition-all duration-300 rounded-full"
                  style={{ width: `${(step / 7) * 100}%` }}
                ></div>
              </div>
            </div>

            {/* STEP 1: Type de Projet */}
            {step === 1 && (
              <div className="animate-in fade-in duration-200">
                <h3 className="font-nunito text-2xl font-black text-brand-dark">
                  Quel type de projet souhaitez-vous créer ?
                </h3>
                <p className="mt-1 text-xs text-gray-500">Sélectionnez la formule la plus proche de votre besoin.</p>

                <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {[
                    { id: 'landing-page', title: 'Landing Page Haute Conversion', desc: 'Capture de leads & vente produit', price: 'Dès 250k FCFA' },
                    { id: 'site-vitrine', title: 'Site Vitrine Corporate', desc: 'Autorité & présentation d\'entreprise', price: 'Dès 450k FCFA' },
                    { id: 'web-app', title: 'Application Web & SaaS', desc: 'Plateforme métier sur mesure', price: 'Dès 950k FCFA' },
                    { id: 'refonte', title: 'Refonte & Optimisation Vitesse', desc: 'Modernisation d\'un site existant', price: 'Dès 350k FCFA' },
                  ].map((item) => (
                    <div
                      key={item.id}
                      onClick={() => setFormData({ ...formData, serviceType: item.id })}
                      className={`cursor-pointer rounded-2xl border p-4 transition-all ${
                        formData.serviceType === item.id
                          ? 'border-brand-primary bg-blue-50/50 ring-2 ring-brand-primary/20 shadow-sm'
                          : 'border-gray-200 bg-white hover:border-gray-300'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-nunito font-bold text-sm text-brand-dark">{item.title}</span>
                        <span className="text-[11px] font-mono text-brand-primary font-bold">{item.price}</span>
                      </div>
                      <p className="mt-1.5 text-xs text-gray-500">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* STEP 2: Objectif */}
            {step === 2 && (
              <div className="animate-in fade-in duration-200">
                <h3 className="font-nunito text-2xl font-black text-brand-dark">
                  Quel est votre objectif prioritaire ?
                </h3>
                <p className="mt-1 text-xs text-gray-500">Cela orientera la stratégie d'ergonomie et de copywriting.</p>

                <div className="mt-6 space-y-3">
                  {[
                    { id: 'leads', label: 'Génération massive de prospects (Leads & Devis)' },
                    { id: 'notoriete', label: 'Crédibilité, image de marque et autorité sur mon marché' },
                    { id: 'ventes', label: 'Vente directe de produits ou formations en ligne' },
                    { id: 'metier', label: 'Automatisation d\'un processus interne ou service client' },
                  ].map((obj) => (
                    <div
                      key={obj.id}
                      onClick={() => setFormData({ ...formData, goal: obj.id })}
                      className={`cursor-pointer rounded-2xl border p-4 text-xs sm:text-sm font-semibold transition-all ${
                        formData.goal === obj.id
                          ? 'border-brand-primary bg-blue-50/50 text-brand-primary font-bold ring-2 ring-brand-primary/20'
                          : 'border-gray-200 bg-white text-gray-700 hover:border-gray-300'
                      }`}
                    >
                      {obj.label}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* STEP 3: Délais */}
            {step === 3 && (
              <div className="animate-in fade-in duration-200">
                <h3 className="font-nunito text-2xl font-black text-brand-dark">
                  Sous quel délai souhaitez-vous être en ligne ?
                </h3>
                <p className="mt-1 text-xs text-gray-500">Nous ajustons notre calendrier d'équipe en conséquence.</p>

                <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {[
                    { id: 'urgent', label: '⚡ Urgent (< 10 jours)' },
                    { id: '15j', label: '📅 Sous 15 jours' },
                    { id: '1mois', label: '🕒 Sous 1 mois' },
                    { id: 'flexible', label: '☕ Pas de date fixe (Flexible)' },
                  ].map((dl) => (
                    <div
                      key={dl.id}
                      onClick={() => setFormData({ ...formData, deadline: dl.id })}
                      className={`cursor-pointer rounded-2xl border p-4 text-xs sm:text-sm font-semibold transition-all ${
                        formData.deadline === dl.id
                          ? 'border-brand-primary bg-blue-50/50 text-brand-primary font-bold ring-2 ring-brand-primary/20'
                          : 'border-gray-200 bg-white text-gray-700 hover:border-gray-300'
                      }`}
                    >
                      {dl.label}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* STEP 4: Budget */}
            {step === 4 && (
              <div className="animate-in fade-in duration-200">
                <h3 className="font-nunito text-2xl font-black text-brand-dark">
                  Quelle est votre enveloppe budgétaire indicative ?
                </h3>
                <p className="mt-1 text-xs text-gray-500">Pour calibrer les fonctionnalités et l'architecture adéquates.</p>

                <div className="mt-6 space-y-3">
                  {[
                    { id: '250-500k', label: '250 000 FCFA à 500 000 FCFA (~380€ à 760€)' },
                    { id: '500k-1.5M', label: '500 000 FCFA à 1 500 000 FCFA (~760€ à 2 300€)' },
                    { id: '1.5M+', label: 'Plus de 1 500 000 FCFA (> 2 300€)' },
                    { id: 'non-defini', label: 'À définir selon vos propositions techniques' },
                  ].map((b) => (
                    <div
                      key={b.id}
                      onClick={() => setFormData({ ...formData, budget: b.id })}
                      className={`cursor-pointer rounded-2xl border p-4 text-xs sm:text-sm font-semibold transition-all ${
                        formData.budget === b.id
                          ? 'border-brand-primary bg-blue-50/50 text-brand-primary font-bold ring-2 ring-brand-primary/20'
                          : 'border-gray-200 bg-white text-gray-700 hover:border-gray-300'
                      }`}
                    >
                      {b.label}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* STEP 5: État */}
            {step === 5 && (
              <div className="animate-in fade-in duration-200">
                <h3 className="font-nunito text-2xl font-black text-brand-dark">
                  Quel est l'état actuel de votre projet ?
                </h3>

                <div className="mt-6 space-y-3">
                  {[
                    { id: 'nouveau', label: 'Création à partir de zéro (Nouveau projet)' },
                    { id: 'refonte', label: 'J\'ai déjà un site existant et je souhaite le refondre' },
                    { id: 'maquettes-pretes', label: 'J\'ai déjà mes maquettes (Figma/Adobe XD) prêtes à coder' },
                  ].map((st) => (
                    <div
                      key={st.id}
                      onClick={() => setFormData({ ...formData, projectState: st.id })}
                      className={`cursor-pointer rounded-2xl border p-4 text-xs sm:text-sm font-semibold transition-all ${
                        formData.projectState === st.id
                          ? 'border-brand-primary bg-blue-50/50 text-brand-primary font-bold ring-2 ring-brand-primary/20'
                          : 'border-gray-200 bg-white text-gray-700 hover:border-gray-300'
                      }`}
                    >
                      {st.label}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* STEP 6: Description */}
            {step === 6 && (
              <div className="animate-in fade-in duration-200">
                <h3 className="font-nunito text-2xl font-black text-brand-dark">
                  Décrivez brièvement vos attentes
                </h3>
                <p className="mt-1 text-xs text-gray-500">Quelques phrases sur votre activité ou des liens de sites qui vous inspirent.</p>

                <div className="mt-6">
                  <textarea
                    rows={5}
                    placeholder="Ex: Bonjour Mathias, nous sommes un cabinet de conseil et nous souhaitons un site moderne avec prise de rendez-vous automatique et espace client..."
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    className="w-full rounded-2xl border border-gray-200 bg-gray-50 p-4 text-xs sm:text-sm focus:bg-white focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 outline-none transition-all"
                  ></textarea>
                </div>
              </div>
            )}

            {/* STEP 7: Coordonnées */}
            {step === 7 && (
              <div className="animate-in fade-in duration-200">
                <h3 className="font-nunito text-2xl font-black text-brand-dark">
                  Vos coordonnées professionnelles
                </h3>
                <p className="mt-1 text-xs text-gray-500">Pour vous envoyer l'accès à votre proposition et Espace Client.</p>

                <div className="mt-6 space-y-3.5">
                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1">Nom complet *</label>
                    <input
                      type="text"
                      placeholder="Ex: Mathias"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-2.5 text-xs sm:text-sm focus:bg-white focus:border-brand-primary outline-none"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                      <label className="block text-xs font-bold text-gray-700 mb-1">Email professionnel *</label>
                      <input
                        type="email"
                        placeholder="nom@entreprise.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-2.5 text-xs sm:text-sm focus:bg-white focus:border-brand-primary outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-gray-700 mb-1">Numéro WhatsApp *</label>
                      <input
                        type="tel"
                        placeholder="+229 XX XX XX XX"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-2.5 text-xs sm:text-sm focus:bg-white focus:border-brand-primary outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1">Nom de l'entreprise ou marque</label>
                    <input
                      type="text"
                      placeholder="Ex: Scale Horizon"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-2.5 text-xs sm:text-sm focus:bg-white focus:border-brand-primary outline-none"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="mt-8 pt-6 border-t border-gray-100 flex items-center justify-between">
              {step > 1 ? (
                <button
                  onClick={handleBack}
                  className="inline-flex items-center gap-1.5 rounded-full px-5 py-2.5 text-xs font-bold text-gray-600 hover:bg-gray-100 transition-colors"
                >
                  <ArrowLeft className="h-4 w-4" />
                  <span>Retour</span>
                </button>
              ) : (
                <div></div>
              )}

              <button
                onClick={handleNext}
                className="btn-magnetic inline-flex items-center gap-2 rounded-full bg-brand-primary px-8 py-3 text-xs sm:text-sm font-bold text-white shadow-glow-sm hover:bg-brand-primary-hover"
              >
                <span>{step === 7 ? 'Valider et Transmettre' : 'Continuer'}</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>

          </div>
        ) : (
          /* SUCCESS SUBMITTED SCREEN */
          <div className="py-8 text-center animate-in zoom-in-95 duration-300">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 mb-6 shadow-sm">
              <CheckCircle2 className="h-10 w-10" />
            </div>

            <h3 className="font-nunito text-3xl font-black text-brand-dark">
              Demande enregistrée avec succès !
            </h3>
            
            <p className="mt-3 font-montserrat text-sm text-gray-600 max-w-md mx-auto leading-relaxed">
              Merci <strong>{formData.fullName || 'cher client'}</strong>. Votre brief a été structuré. Vous pouvez synchroniser cet échange directement sur WhatsApp pour une réponse prioritaire.
            </p>

            {/* WhatsApp Direct Relay */}
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={getWhatsAppMessage()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-magnetic inline-flex items-center gap-2.5 rounded-full bg-emerald-600 px-8 py-3.5 text-sm font-bold text-white shadow-lg hover:bg-emerald-700"
              >
                <MessageSquare className="h-4 w-4" />
                <span>Ouvrir dans WhatsApp maintenant</span>
              </a>

              <button
                onClick={resetAndClose}
                className="rounded-full px-6 py-3 text-xs font-bold text-gray-600 hover:bg-gray-100"
              >
                Fermer
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
