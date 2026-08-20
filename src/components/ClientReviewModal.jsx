import React, { useState } from 'react';
import { Star, X, CheckCircle2, MessageSquarePlus, Sparkles, Send } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function ClientReviewModal({ isOpen, onClose, onAddTestimonial }) {
  const [rating, setRating] = useState(5);
  const [hoverRating, setHoverRating] = useState(0);
  const [clientName, setClientName] = useState('');
  const [clientRole, setClientRole] = useState('');
  const [projectType, setProjectType] = useState('Site Vitrine');
  const [quote, setQuote] = useState('');
  const [resultMetric, setResultMetric] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!clientName || !quote) return;

    // Trigger confetti celebration
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 }
    });

    const newReview = {
      name: clientName,
      role: clientRole || 'Client Satisfait',
      project: projectType,
      quote: quote,
      rating: rating,
      avatar: `https://ui-avatars.com/api/?name=${encodeURIComponent(clientName)}&background=2563EB&color=fff&bold=true`
    };

    if (onAddTestimonial) {
      onAddTestimonial(newReview);
    }

    setIsSubmitted(true);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setClientName('');
    setClientRole('');
    setQuote('');
    setResultMetric('');
    setRating(5);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg overflow-hidden rounded-[32px] bg-white p-6 sm:p-8 shadow-2xl animate-in zoom-in-95 duration-200">
        
        {/* Header Close Button */}
        <button
          onClick={handleReset}
          className="absolute top-5 right-5 flex h-9 w-9 items-center justify-center rounded-full bg-gray-100 text-gray-500 hover:bg-gray-200 transition-colors"
        >
          <X className="h-5 w-5" />
        </button>

        {!isSubmitted ? (
          <div>
            {/* Modal Title */}
            <div className="mb-6">
              <span className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-[#2563EB] bg-blue-50 px-3 py-1 rounded-full border border-blue-100 mb-2">
                <Sparkles className="w-3.5 h-3.5" />
                VOTRE AVIS COMPTE
              </span>
              <h3 className="font-nunito text-2xl sm:text-3xl font-black text-slate-900">
                Laisser un retour d'expérience
              </h3>
              <p className="mt-1 text-xs sm:text-sm text-gray-500">
                Partagez votre avis sur notre collaboration et les résultats de votre projet.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Star Rating Picker */}
              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
                  Votre note globale :
                </label>
                <div className="flex items-center gap-2 p-3 rounded-2xl bg-slate-50 border border-gray-100 justify-center">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      type="button"
                      key={star}
                      onMouseEnter={() => setHoverRating(star)}
                      onMouseLeave={() => setHoverRating(0)}
                      onClick={() => setRating(star)}
                      className="p-1 transition-transform hover:scale-125 focus:outline-none"
                    >
                      <Star
                        className={`h-7 w-7 transition-colors ${
                          (hoverRating || rating) >= star
                            ? 'fill-amber-400 text-amber-400 drop-shadow-sm'
                            : 'text-gray-300'
                        }`}
                      />
                    </button>
                  ))}
                  <span className="ml-2 font-nunito font-extrabold text-sm text-slate-800">
                    {hoverRating || rating}/5
                  </span>
                </div>
              </div>

              {/* Name & Role */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                    Votre nom *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="ex: Jean Dupont"
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-xs sm:text-sm focus:border-[#2563EB] focus:ring-2 focus:ring-blue-100 outline-none transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                    Entreprise / Poste
                  </label>
                  <input
                    type="text"
                    placeholder="ex: CEO • Startup Alpha"
                    value={clientRole}
                    onChange={(e) => setClientRole(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-xs sm:text-sm focus:border-[#2563EB] focus:ring-2 focus:ring-blue-100 outline-none transition-all"
                  />
                </div>
              </div>

              {/* Project Type */}
              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                  Type de projet réalisé
                </label>
                <select
                  value={projectType}
                  onChange={(e) => setProjectType(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-xs sm:text-sm focus:border-[#2563EB] focus:ring-2 focus:ring-blue-100 outline-none transition-all bg-white"
                >
                  <option value="Site Vitrine">Site Vitrine</option>
                  <option value="Boutique E-commerce">Boutique E-commerce</option>
                  <option value="Plateforme LMS (e-Learning)">Plateforme LMS (e-Learning)</option>
                  <option value="Application SaaS / Web App">Application SaaS / Web App</option>
                  <option value="Montage Vidéo & Shorts">Montage Vidéo & Shorts</option>
                  <option value="Design UI/UX & Branding">Design UI/UX & Branding</option>
                  <option value="Autre Service Sur-Mesure">Autre Service Sur-Mesure</option>
                </select>
              </div>

              {/* Review Text */}
              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                  Votre commentaire / témoignage *
                </label>
                <textarea
                  required
                  rows={3}
                  placeholder="Partagez vos impressions sur la qualité du travail, la réactivité et les résultats..."
                  value={quote}
                  onChange={(e) => setQuote(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-xs sm:text-sm focus:border-[#2563EB] focus:ring-2 focus:ring-blue-100 outline-none transition-all resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-[#2563EB] text-white font-nunito font-bold text-sm shadow-lg shadow-blue-500/25 hover:bg-[#1D4ED8] transition-all flex items-center justify-center gap-2 mt-2"
              >
                <Send className="w-4 h-4" />
                <span>Soumettre mon retour d'expérience</span>
              </button>

            </form>
          </div>
        ) : (
          <div className="py-8 text-center space-y-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 mx-auto animate-bounce">
              <CheckCircle2 className="h-10 w-10" />
            </div>

            <h3 className="font-nunito text-2xl font-black text-slate-900">
              Merci infiniment pour votre avis !
            </h3>

            <p className="text-xs sm:text-sm text-gray-600 max-w-sm mx-auto leading-relaxed">
              Votre retour d'expérience a été enregistré et ajouté avec succès à la liste des avis clients du site.
            </p>

            <button
              onClick={handleReset}
              className="mt-4 px-8 py-3 rounded-full bg-[#1A1D27] text-white font-bold text-xs hover:bg-black transition-all"
            >
              Fermer la fenêtre
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
