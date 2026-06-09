import React from 'react';
import { Navbar } from '../components/Navbar';
import { HeroSection } from '../components/HeroSection';
import { OpportunitySection } from '../components/OpportunitySection';
import { BenefitsSection } from '../components/BenefitsSection';
import { ProductsSection } from '../components/ProductsSection';
import { CommercialOfferSection } from '../components/CommercialOfferSection';
import { UrgencySection } from '../components/UrgencySection';
import { Footer } from '../components/Footer';

export const LandingPage: React.FC = () => {
  return (
    <div className="bg-surface text-on-background soccer-pattern">
      <Navbar />
      <HeroSection />
      <div className="grass-divider" />
      <OpportunitySection />
      <BenefitsSection />
      <ProductsSection />
      <CommercialOfferSection />
      <UrgencySection />
      <Footer />
    </div>
  );
};

export default LandingPage;
