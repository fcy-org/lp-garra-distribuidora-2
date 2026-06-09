import React from 'react';
import { opportunityCards } from '../data/mockData';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface OpportunitySectionProps {
  readonly className?: string;
}

export const OpportunitySection: React.FC<Readonly<OpportunitySectionProps>> = ({ className = '' }) => {
  const sectionRef = useScrollAnimation();

  return (
    <section
      ref={sectionRef as React.RefObject<HTMLElement>}
      id="oportunidade"
      className={`py-24 px-6 md:px-10 bg-white relative ${className}`}
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none overflow-hidden">
        <svg className="absolute top-0 left-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="sports-pattern" height="100" patternUnits="userSpaceOnUse" width="100" x="0" y="0">
              <circle cx="20" cy="20" fill="black" r="5" />
              <path d="M60 10 L90 10 L90 40 L60 40 Z" fill="none" stroke="black" strokeDasharray="2,2" strokeWidth="1" />
              <circle cx="75" cy="75" fill="none" r="8" stroke="black" strokeWidth="1" />
            </pattern>
          </defs>
          <rect fill="url(#sports-pattern)" height="100%" width="100%" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto text-center mb-16">
        <div className="inline-block px-4 py-1 bg-tertiary-fixed text-tertiary font-bold text-xs rounded-full mb-4 uppercase tracking-widest">
          Análise de Mercado
        </div>
        <h2 className="text-4xl md:text-5xl font-headline text-primary mb-6">
          A Copa pode aumentar o giro do seu mercado.{' '}
          <br className="hidden md:block" />
          Seu estoque está pronto?
        </h2>
        <div className="w-32 h-1.5 bg-secondary-container mx-auto rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {opportunityCards.map((card) => (
          <div
            key={card.title}
            className="p-8 rounded-3xl bg-surface border border-outline-variant/30 shadow-premium flex flex-col items-center text-center transition-all hover:-translate-y-3 hover:shadow-2xl"
          >
            <div className="w-20 h-20 bg-primary-fixed rounded-full flex items-center justify-center text-primary mb-8 shadow-inner">
              <span className="material-symbols-outlined text-[36px]">{card.icon}</span>
            </div>
            <h3 className="text-xl font-bold text-on-background mb-4">{card.title}</h3>
            <p className="text-sm text-on-surface-variant font-medium leading-relaxed">{card.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OpportunitySection;
