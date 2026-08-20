import React, { useState, useMemo } from 'react';
import { Search, X, Mail, Check, Clock, Heart, ArrowUpRight, BookOpen, User, Sparkles, Filter, ChevronLeft, ChevronRight } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function FullBlogView({ isOpen, onClose, onOpenDevis }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Tous les articles');
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [activeArticle, setActiveArticle] = useState(null);
  const [likes, setLikes] = useState({ 1: 14, 2: 19, 3: 22, 4: 8, 5: 31, 6: 12 });
  const [likedArticles, setLikedArticles] = useState([]);

  const articlesData = [
    {
      id: 1,
      title: 'Claude Code & Vibe Coding : La révolution du développement web en 2026',
      excerpt: 'Claude Code n\'est plus un simple assistant, c\'est un environnement de développement autonome. Découvrez comment Lovable, Cursor et Claude Code permettent de créer des applications 10x plus vite.',
      category: 'Tutoriels',
      date: '18 Août 2026',
      readTime: '9 min',
      author: 'Mathias KOWOE',
      image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&auto=format&fit=crop&q=80',
      toc: ['Introduction au Vibe Coding', 'Configuration de Claude Code & CLI', 'Création d\'un SaaS React + Supabase', 'Bonnes pratiques & limites'],
      content: `Le développement web vit sa plus grande transformation depuis l'arrivée du Cloud. Avec le Vibe Coding, les développeurs et fondateurs de projets s'affranchissent du code répétitif pour se concentrer à 100% sur l'architecture, le produit et l'expérience utilisateur.

1. Introduction au Vibe Coding
Le Vibe Coding consiste à décrire avec précision l'intention produit et laisser l'agent d'IA générer, refactoriser et vérifier le code en temps réel.

2. Configuration de Claude Code & CLI
En couplant le terminal Antigravity avec les modèles Claude 3.7 Sonnet, vous bénéficiez d'une exécution autonome capable de lire les fichiers, corriger les lints et déployer sur Vercel.

3. Création d'un SaaS React + Supabase
Exemple concret de création d'une plateforme SaaS avec gestion d'utilisateurs, base PostgreSQL et paiement Mobile Money en moins de 2 heures.

4. Bonnes pratiques & limites
Gardez toujours le contrôle sur l'architecture, validez le build avec 'npm run build' et effectuez des revues de code régulières.`
    },
    {
      id: 2,
      title: 'Comment l\'intelligence artificielle redéfinit la création de sites internet',
      excerpt: 'L\'IA change tout dans le développement web. Découvrez comment les agences modernes l\'utilisent pour offrir des délais réduits et des performances inégalées.',
      category: 'Tutoriels',
      date: '11 Juillet 2026',
      readTime: '8 min',
      author: 'Mathias KOWOE',
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format&fit=crop&q=80',
      toc: ['Le nouveau workflow IA', 'Réduction des coûts & délais', 'Personnalisation poussée'],
      content: `L'intelligence artificielle n'est pas une menace pour les créateurs du web, mais un accélérateur puissant. Les sites web modernes combinent désormais design sur-mesure et puissance algorithmique pour maximiser le chiffre d'affaires.`
    },
    {
      id: 3,
      title: '5 stratégies UI/UX pour doubler le taux de conversion de votre site vitrine',
      excerpt: 'Analyse ergonomique des pièges les plus fréquents sur les sites vitrines et landing pages, et comment les corriger pour transformer vos visiteurs en clients payants.',
      category: 'Conseils business',
      date: '02 Juillet 2026',
      readTime: '6 min',
      author: 'Mathias KOWOE',
      image: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=800&auto=format&fit=crop&q=80',
      toc: ['L\'importance du premier écran', 'Contraste des boutons CTA', 'Preuve sociale immédiate'],
      content: `Votre site web est votre meilleur commercial 24h/24. En optimisant 5 détails clés dans l'interface (boutons d'action, vitesse de chargement, micro-interactions), vous pouvez doubler vos demandes de devis.`
    },
    {
      id: 4,
      title: 'Pourquoi Next.js 14 & Supabase sont le combo ultime pour votre entreprise',
      excerpt: 'Comparatif technique et retour d\'expérience sur l\'utilisation de Next.js App Router et Supabase pour des applications web ultra-rapides et sécurisées.',
      category: 'Actualités',
      date: '25 Juin 2026',
      readTime: '7 min',
      author: 'Mathias KOWOE',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=80',
      toc: ['Server Components & SEO', 'Supabase Auth & Row Level Security', 'Performance Vercel Edge'],
      content: `En 2026, la vitesse de chargement et le SEO sont décisifs. Next.js 14 permet le rendu côté serveur instantané tout en exploitant les bases de données temps réel Supabase.`
    },
    {
      id: 5,
      title: 'Guide complet : Intégrer les paiements Mobile Money (FedaPay / MoMo) sur React',
      excerpt: 'Tutoriel étape par étape pour accepter les paiements par MTN Mobile Money, Moov Money et Wave sur votre boutique e-commerce ou application SaaS.',
      category: 'E-commerce',
      date: '14 Juin 2026',
      readTime: '10 min',
      author: 'Mathias KOWOE',
      image: 'https://images.unsplash.com/photo-1556742049-0a67568d049f?w=800&auto=format&fit=crop&q=80',
      toc: ['Pré-requis FedaPay & API Keys', 'Intégration du SDK Javascript', 'Webhooks & Confirmation de commande'],
      content: `En Afrique, le paiement mobile est incontournable. Ce guide technique vous montre comment intégrer FedaPay et les passerelles MoMo en toute sécurité sur votre application Web.`
    },
    {
      id: 6,
      title: 'Étude de cas : Comment nous avons numérisé le recensement EPF avec 100% de fiabilité',
      excerpt: 'Retour sur les coulisses de conception, l\'architecture technique et l\'optimisation de l\'application web de recensement statistique EPF.',
      category: 'Études de cas',
      date: '01 Juin 2026',
      readTime: '8 min',
      author: 'Mathias KOWOE',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80',
      toc: ['Le besoin client', 'Architecture distribuée', 'Résultats & Métriques'],
      content: `Numériser des milliers d'entrées statistiques quotidiennes exige une résilience maximale. Découvrez les choix d'architecture frontend et backend retenus.`
    }
  ];

  const categories = [
    { name: 'Tous les articles', count: articlesData.length },
    { name: 'Actualités', count: articlesData.filter(a => a.category === 'Actualités').length },
    { name: 'Conseils business', count: articlesData.filter(a => a.category === 'Conseils business').length },
    { name: 'E-commerce', count: articlesData.filter(a => a.category === 'E-commerce').length },
    { name: 'Études de cas', count: articlesData.filter(a => a.category === 'Études de cas').length },
    { name: 'Tutoriels', count: articlesData.filter(a => a.category === 'Tutoriels').length }
  ];

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!newsletterEmail) return;
    confetti({ particleCount: 60, spread: 70, origin: { y: 0.6 } });
    setIsSubscribed(true);
  };

  const toggleLike = (id, e) => {
    e.stopPropagation();
    if (likedArticles.includes(id)) {
      setLikedArticles(prev => prev.filter(aId => aId !== id));
      setLikes(prev => ({ ...prev, [id]: prev[id] - 1 }));
    } else {
      setLikedArticles(prev => [...prev, id]);
      setLikes(prev => ({ ...prev, [id]: prev[id] + 1 }));
      confetti({ particleCount: 35, spread: 50, origin: { y: 0.8 } });
    }
  };

  const filteredArticles = useMemo(() => {
    return articlesData.filter(art => {
      if (selectedCategory !== 'Tous les articles' && art.category !== selectedCategory) {
        return false;
      }
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesTitle = art.title.toLowerCase().includes(q);
        const matchesExcerpt = art.excerpt.toLowerCase().includes(q);
        const matchesCat = art.category.toLowerCase().includes(q);
        if (!matchesTitle && !matchesExcerpt && !matchesCat) return false;
      }
      return true;
    });
  }, [selectedCategory, searchQuery]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-white animate-in fade-in duration-300">
      
      {/* Header Bar */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-gray-200 px-4 md:px-8 py-4">
        <div className="mx-auto max-w-[1240px] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#2563EB] text-white font-bold text-sm">
              M
            </span>
            <span className="font-nunito font-black text-xl text-slate-900">
              Mathias<span className="text-[#2563EB]">Dev</span>
            </span>
          </div>

          <button
            onClick={onClose}
            className="flex items-center gap-2 rounded-full border border-gray-200 bg-gray-50 px-4 py-2 text-xs font-bold text-slate-800 hover:bg-gray-100 transition-all"
          >
            <span>Retour à l'accueil</span>
            <X className="w-4 h-4" />
          </button>
        </div>
      </header>

      {/* Main Container */}
      <div className="mx-auto max-w-[1240px] px-4 sm:px-6 md:px-8 py-10 md:py-16">
        
        {/* Title Header */}
        <div className="mb-10 text-center max-w-2xl mx-auto">
          <span className="rounded-full bg-blue-50 border border-blue-200 px-3.5 py-1 text-xs font-black uppercase tracking-wider text-[#2563EB]">
            BLOG
          </span>
          <h1 className="mt-3 font-nunito text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
            Nos Articles
          </h1>
          <p className="mt-2 text-gray-500 font-medium text-sm sm:text-base">
            Conseils, tutoriels et études de cas pour booster votre présence digitale.
          </p>
        </div>

        {/* Newsletter Banner Component (Matching screenshot) */}
        <div className="mb-12 rounded-3xl bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-800 p-6 sm:p-8 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl relative overflow-hidden">
          <div className="space-y-2 text-center md:text-left">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/15 backdrop-blur-md px-3 py-0.5 text-[10px] font-black uppercase tracking-wider text-blue-100 border border-white/20">
              <Mail className="w-3 h-3" />
              NEWSLETTER
            </span>
            <h2 className="font-nunito text-xl sm:text-2xl font-black">
              Abonnez-vous à la newsletter
            </h2>
            <p className="text-xs sm:text-sm text-blue-100 max-w-md">
              Recevez mes dernières ressources, tutoriels et conseils directement dans votre boîte mail.
            </p>
          </div>

          {!isSubscribed ? (
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row items-center gap-2.5 w-full md:w-auto">
              <input
                type="email"
                required
                placeholder="Votre adresse e-mail"
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                className="w-full sm:w-64 px-4 py-2.5 rounded-xl bg-white text-slate-900 text-xs font-medium focus:outline-none placeholder:text-gray-400 shadow-inner"
              />
              <button
                type="submit"
                className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-slate-900 text-white text-xs font-bold hover:bg-black transition-all flex items-center justify-center gap-2 shadow-md shrink-0"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>S'abonner</span>
              </button>
            </form>
          ) : (
            <div className="flex items-center gap-2 rounded-2xl bg-white/20 backdrop-blur-md px-5 py-3 text-xs font-bold text-white border border-white/30">
              <Check className="w-4 h-4 text-emerald-300" />
              <span>Merci ! Vous êtes abonné à la newsletter.</span>
            </div>
          )}
        </div>

        {/* Content Layout: Left Sidebar + Right Grid */}
        <div className="flex flex-col md:flex-row gap-8 items-start">
          
          {/* Left Sidebar Filters */}
          <aside className="w-full md:w-64 shrink-0 rounded-3xl border border-gray-200/90 bg-[#FAFAFC] p-6 shadow-xs space-y-6">
            
            {/* Search Box */}
            <div>
              <label className="block text-[10px] font-black uppercase tracking-widest text-gray-400 mb-2">
                RECHERCHER
              </label>
              <div className="relative">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Rechercher un article..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full rounded-xl border border-gray-200 bg-white pl-9 pr-3 py-2 text-xs focus:border-[#2563EB] focus:ring-2 focus:ring-blue-100 outline-none transition-all"
                />
              </div>
            </div>

            {/* Categories List */}
            <div>
              <label className="block text-[10px] font-black uppercase tracking-widest text-gray-400 mb-2">
                CATÉGORIES
              </label>
              <div className="space-y-1">
                {categories.map((cat) => {
                  const isSelected = selectedCategory === cat.name;
                  return (
                    <button
                      key={cat.name}
                      onClick={() => setSelectedCategory(cat.name)}
                      className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-bold transition-all ${
                        isSelected
                          ? 'bg-[#2563EB] text-white shadow-sm'
                          : 'text-gray-600 hover:bg-gray-100 hover:text-slate-900'
                      }`}
                    >
                      <span>{cat.name}</span>
                      <span className={`rounded-full px-2 py-0.5 text-[9px] font-extrabold ${
                        isSelected ? 'bg-white/20 text-white' : 'bg-gray-200 text-gray-700'
                      }`}>
                        {cat.count}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

          </aside>

          {/* Right Articles Grid */}
          <main className="flex-1 w-full">
            {filteredArticles.length === 0 ? (
              <div className="rounded-3xl border border-gray-200 bg-[#FAFAFC] p-12 text-center">
                <p className="text-sm font-bold text-gray-500">Aucun article ne correspond à votre recherche.</p>
                <button
                  onClick={() => {
                    setSelectedCategory('Tous les articles');
                    setSearchQuery('');
                  }}
                  className="mt-4 px-4 py-2 rounded-full bg-[#2563EB] text-white font-bold text-xs"
                >
                  Tout effacer
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredArticles.map((art) => {
                  const isLiked = likedArticles.includes(art.id);
                  return (
                    <article
                      key={art.id}
                      onClick={() => setActiveArticle(art)}
                      className="group cursor-pointer rounded-3xl border border-gray-200/90 bg-white overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
                    >
                      {/* Image Banner */}
                      <div className="relative aspect-[16/10] overflow-hidden bg-slate-900">
                        <img
                          src={art.image}
                          alt={art.title}
                          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent"></div>

                        <div className="absolute top-4 left-4">
                          <span className="rounded-full bg-white/90 backdrop-blur-md px-3 py-1 text-[10px] font-extrabold uppercase tracking-wider text-slate-900 shadow-sm">
                            {art.category}
                          </span>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-6 flex flex-col justify-between flex-1">
                        <div>
                          <h3 className="font-nunito text-lg font-bold text-slate-900 group-hover:text-[#2563EB] transition-colors leading-snug">
                            {art.title}
                          </h3>

                          <p className="mt-2.5 text-xs text-gray-500 leading-relaxed line-clamp-3">
                            {art.excerpt}
                          </p>
                        </div>

                        {/* Footer Info Row */}
                        <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500 font-medium">
                          <div className="flex items-center gap-2">
                            <div className="w-5 h-5 rounded-full bg-blue-100 text-[#2563EB] flex items-center justify-center font-bold text-[9px]">
                              MK
                            </div>
                            <span>{art.author}</span>
                          </div>

                          <div className="flex items-center gap-3">
                            <span className="flex items-center gap-1 text-[11px]">
                              <Clock className="w-3 h-3 text-[#2563EB]" />
                              {art.readTime}
                            </span>

                            <button
                              onClick={(e) => toggleLike(art.id, e)}
                              className={`flex items-center gap-1 text-[11px] font-bold px-2 py-0.5 rounded-full border transition-all ${
                                isLiked
                                  ? 'bg-rose-50 text-rose-600 border-rose-200'
                                  : 'bg-gray-50 text-gray-500 border-gray-200 hover:text-rose-500'
                              }`}
                            >
                              <Heart className={`w-3 h-3 ${isLiked ? 'fill-rose-500 text-rose-500' : ''}`} />
                              <span>{likes[art.id] || 0}</span>
                            </button>
                          </div>
                        </div>

                      </div>

                    </article>
                  );
                })}
              </div>
            )}
          </main>

        </div>

      </div>

      {/* Article Detail Reader Modal */}
      {activeArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-3xl overflow-hidden rounded-[32px] bg-white p-6 sm:p-8 shadow-2xl animate-in zoom-in-95 duration-200 max-h-[90vh] overflow-y-auto">
            
            <div className="flex items-center justify-between pb-4 border-b border-gray-100">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#2563EB]">
                  {activeArticle.category} • {activeArticle.readTime} de lecture
                </span>
                <h2 className="font-nunito text-xl sm:text-2xl font-black text-slate-900">
                  {activeArticle.title}
                </h2>
              </div>
              <button
                onClick={() => setActiveArticle(null)}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 shrink-0"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Table of Contents */}
            {activeArticle.toc && (
              <div className="mt-4 p-4 rounded-2xl bg-blue-50/70 border border-blue-100">
                <span className="text-[11px] font-black uppercase tracking-wider text-[#2563EB] mb-2 block">
                  Sommaire de l'article :
                </span>
                <ul className="space-y-1 text-xs font-medium text-slate-700">
                  {activeArticle.toc.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#2563EB]"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="mt-5 rounded-2xl overflow-hidden aspect-[16/9] border border-gray-200">
              <img
                src={activeArticle.image}
                alt={activeArticle.title}
                className="h-full w-full object-cover"
              />
            </div>

            <div className="mt-6 whitespace-pre-line text-xs sm:text-sm text-gray-700 leading-relaxed font-montserrat">
              {activeArticle.content}
            </div>

            <div className="mt-8 pt-6 border-t border-gray-100 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-xs">
                  MK
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900">{activeArticle.author}</div>
                  <div className="text-[10px] text-gray-400">{activeArticle.date}</div>
                </div>
              </div>

              <button
                onClick={() => setActiveArticle(null)}
                className="px-6 py-2.5 rounded-full bg-[#1A1D27] text-white font-bold text-xs hover:bg-black transition-all"
              >
                Fermer l'article
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
