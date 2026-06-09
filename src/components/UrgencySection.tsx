import React from 'react';
import { urgencyStats } from '../data/mockData';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface UrgencySectionProps {
  readonly className?: string;
}

export const UrgencySection: React.FC<Readonly<UrgencySectionProps>> = ({ className = '' }) => {
  const sectionRef = useScrollAnimation();

  return (
    <section
      ref={sectionRef as React.RefObject<HTMLElement>}
      className={`py-20 px-6 md:px-10 bg-error text-on-error relative overflow-hidden ${className}`}
    >
      {/* Large soccer ball background */}
      <div className="absolute -right-20 top-1/2 -translate-y-1/2 opacity-10 pointer-events-none">
        <span className="material-symbols-outlined text-[400px]" style={{ fontVariationSettings: "'FILL' 1" }}>
          sports_soccer
        </span>
      </div>

      <div className="max-w-7xl mx-auto relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="text-center md:text-left space-y-6">
          <div className="inline-flex items-center gap-2 bg-white/20 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest">
            <span className="w-2 h-2 bg-secondary-container rounded-full animate-ping" />
            Início do Campeonato se Aproxima
          </div>

          <h2 className="text-4xl md:text-5xl font-headline leading-tight">
            A Copa não espera seu <br />estoque se preparar
          </h2>

          <ul className="space-y-3 font-medium">
            {urgencyStats.map((stat) => (
              <li key={stat.text} className="flex items-center gap-3 justify-center md:justify-start">
                <span className="material-symbols-outlined text-secondary-container">{stat.icon}</span>
                <span>{stat.text}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col items-center gap-4">
          <a
            href="#contato"
            className="bg-secondary-container text-on-secondary-container px-12 py-6 rounded-full font-bold text-xl shadow-2xl hover:bg-secondary-fixed transition-all flex items-center gap-4 active:scale-95 group"
          >
            EU QUERO O CATÁLOGO AGORA
            <span className="material-symbols-outlined group-hover:rotate-45 transition-transform">bolt</span>
          </a>
          <p className="text-xs font-bold opacity-80 uppercase tracking-tighter">
            Oferta válida para novos parceiros no PI
          </p>
        </div>
      </div>
    </section>
  );
};

export default UrgencySection;
