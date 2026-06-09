import React from 'react';
import { commercialOffers } from '../data/mockData';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface CommercialOfferSectionProps {
  readonly className?: string;
}

export const CommercialOfferSection: React.FC<Readonly<CommercialOfferSectionProps>> = ({ className = '' }) => {
  const sectionRef = useScrollAnimation();

  return (
    <section
      ref={sectionRef as React.RefObject<HTMLElement>}
      className={`py-24 px-6 md:px-10 bg-primary text-on-primary ${className}`}
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-headline text-center mb-16 leading-tight">
          Comprar da Garra é jogo ganho{' '}
          <br className="hidden md:block" />
          para empresas no Piauí
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {commercialOffers.map((offer) => (
            <div
              key={offer.title}
              className="bg-white/5 backdrop-blur-md p-10 rounded-3xl border border-white/10 shadow-2xl group hover:bg-white transition-all duration-500"
            >
              <span className="material-symbols-outlined text-secondary-container text-[48px] mb-6 block group-hover:scale-110 transition-transform">
                {offer.icon}
              </span>
              <h3 className="text-2xl font-bold mb-4 group-hover:text-primary">{offer.title}</h3>
              <p className="text-sm font-medium text-white/70 group-hover:text-on-surface-variant">
                {offer.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CommercialOfferSection;
