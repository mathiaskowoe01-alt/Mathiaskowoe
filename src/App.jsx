import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProblemSection from './components/ProblemSection';
import TechStackSection from './components/TechStackSection';
import ClientPortalBento from './components/ClientPortalBento';
import ServicesSection from './components/ServicesSection';
import PortfolioSection from './components/PortfolioSection';
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
  const [selectedService, setSelectedService] = useState('landing-page');

  const handleOpenDevis = (serviceId = 'landing-page') => {
    setSelectedService(serviceId);
    setIsDevisModalOpen(true);
  };

  const handleOpenSandbox = () => {
    setIsSandboxModalOpen(true);
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
        <Hero 
          onOpenDevis={() => handleOpenDevis()} 
          onOpenSandbox={handleOpenSandbox} 
        />
        
        <ProblemSection 
          onOpenDevis={() => handleOpenDevis()} 
        />

        <TechStackSection />
        
        <ClientPortalBento 
          onOpenSandbox={handleOpenSandbox} 
        />
        
        <ServicesSection 
          onSelectService={(serviceId) => handleOpenDevis(serviceId)} 
        />
        
        <PortfolioSection 
          onOpenDevis={() => handleOpenDevis()} 
        />
        
        <ProcessSection 
          onOpenDevis={() => handleOpenDevis()} 
        />
        
        <TestimonialsSection />
        
        <FAQSection 
          onOpenDevis={() => handleOpenDevis()} 
        />
      </main>

      {/* Modern Footer */}
      <Footer 
        onOpenDevis={() => handleOpenDevis()} 
        onOpenSandbox={handleOpenSandbox} 
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
