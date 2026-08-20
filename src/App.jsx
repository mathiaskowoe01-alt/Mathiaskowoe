import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ClientPortalBento from './components/ClientPortalBento';
import ServicesSection from './components/ServicesSection';
import TechStackSection from './components/TechStackSection';
import PortfolioSection from './components/PortfolioSection';
import FullPortfolioView from './components/FullPortfolioView';
import ResourcesSection from './components/ResourcesSection';
import BlogSection from './components/BlogSection';
import FullBlogView from './components/FullBlogView';
import AdminDashboardView from './components/AdminDashboardView';
import ProcessSection from './components/ProcessSection';
import TestimonialsSection from './components/TestimonialsSection';
import FAQSection from './components/FAQSection';
import Footer from './components/Footer';
import MultiStepDevisModal from './components/MultiStepDevisModal';
import ClientSandboxModal from './components/ClientSandboxModal';
import FloatingWidgets from './components/FloatingWidgets';

export default function App() {
  const [isDevisModalOpen, setIsDevisModalOpen] = useState(false);
  const [isSandboxModalOpen, setIsSandboxModalOpen] = useState(false);
  const [isFullPortfolioOpen, setIsFullPortfolioOpen] = useState(false);
  const [isFullBlogOpen, setIsFullBlogOpen] = useState(false);
  const [isAdminDashboardOpen, setIsAdminDashboardOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('landing-page');

  const handleOpenDevis = (serviceId = 'landing-page') => {
    setSelectedService(serviceId);
    setIsDevisModalOpen(true);
  };

  const handleOpenSandbox = () => {
    setIsSandboxModalOpen(true);
  };

  const handleOpenFullPortfolio = () => {
    setIsFullPortfolioOpen(true);
  };

  const handleOpenFullBlog = () => {
    setIsFullBlogOpen(true);
  };

  const handleOpenAdmin = () => {
    setIsAdminDashboardOpen(true);
  };

  return (
    <div className="min-h-screen bg-white text-brand-dark flex flex-col relative selection:bg-brand-primary selection:text-white">
      
      {/* Sticky Pill Header Navigation */}
      <Navbar 
        onOpenDevis={() => handleOpenDevis()} 
        onOpenSandbox={handleOpenSandbox} 
      />

      {/* Main Page Sections */}
      <main className="flex-grow">
        {/* 1. Hero Section */}
        <Hero 
          onOpenDevis={() => handleOpenDevis()} 
          onOpenSandbox={handleOpenSandbox} 
        />
        
        {/* 2. Espace Client */}
        <ClientPortalBento 
          onOpenSandbox={handleOpenSandbox} 
        />
        
        {/* 3. Mes Services */}
        <ServicesSection 
          onSelectService={(serviceId) => handleOpenDevis(serviceId)} 
        />
        
        {/* 4. Technologie */}
        <TechStackSection />
        
        {/* 5. Portfolio */}
        <PortfolioSection 
          onOpenDevis={() => handleOpenDevis()} 
          onOpenFullPortfolio={handleOpenFullPortfolio}
        />

        {/* 6. Ressources Gratuit */}
        <ResourcesSection />

        {/* 7. Blog & Articles */}
        <BlogSection 
          onOpenFullBlog={handleOpenFullBlog}
        />
        
        {/* Processus */}
        <ProcessSection 
          onOpenDevis={() => handleOpenDevis()} 
        />
        
        {/* 8. Témoignages */}
        <TestimonialsSection />
        
        {/* 9. FAQ */}
        <FAQSection 
          onOpenDevis={() => handleOpenDevis()} 
        />
      </main>

      {/* Modern Footer */}
      <Footer 
        onOpenDevis={() => handleOpenDevis()} 
        onOpenSandbox={handleOpenSandbox} 
        onOpenAdmin={handleOpenAdmin}
      />

      {/* Dedicated Admin Cockpit View */}
      <AdminDashboardView
        isOpen={isAdminDashboardOpen}
        onClose={() => setIsAdminDashboardOpen(false)}
      />

      {/* Dedicated Full Portfolio Showcase Page (Mes Réalisations) */}
      <FullPortfolioView
        isOpen={isFullPortfolioOpen}
        onClose={() => setIsFullPortfolioOpen(false)}
        onOpenDevis={() => handleOpenDevis()}
      />

      {/* Dedicated Full Blog Showcase Page (Nos Articles) */}
      <FullBlogView
        isOpen={isFullBlogOpen}
        onClose={() => setIsFullBlogOpen(false)}
        onOpenDevis={() => handleOpenDevis()}
      />

      {/* Interactive 7-Step Devis Funnel Modal */}
      <MultiStepDevisModal
        isOpen={isDevisModalOpen}
        onClose={() => setIsDevisModalOpen(false)}
        initialService={selectedService}
      />

      {/* Real-time Interactive Client Portal Sandbox Playground */}
      <ClientSandboxModal
        isOpen={isSandboxModalOpen}
        onClose={() => setIsSandboxModalOpen(false)}
        onOpenDevis={() => handleOpenDevis()}
      />

      {/* Floating Action Buttons */}
      <FloatingWidgets
        onOpenDevis={() => handleOpenDevis()}
        onOpenSandbox={handleOpenSandbox}
      />

    </div>
  );
}
