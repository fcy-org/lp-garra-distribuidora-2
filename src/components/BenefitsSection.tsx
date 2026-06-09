import React from 'react';
import { benefits, benefitsTestimonial } from '../data/mockData';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import garraFuncionario from '../images/Garra funcionário.png';

interface BenefitsSectionProps {
  readonly className?: string;
}

export const BenefitsSection: React.FC<Readonly<BenefitsSectionProps>> = ({ className = '' }) => {
  const sectionRef = useScrollAnimation();

  return (
    <section
      ref={sectionRef as React.RefObject<HTMLElement>}
      id="beneficios"
      className={`py-24 px-6 md:px-10 bg-surface-container-low ${className}`}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        {/* Benefits list */}
        <div className="space-y-10">
          <h2 className="text-4xl md:text-5xl font-headline text-primary leading-tight">
            O que você recebe ao entrar no time Garra
          </h2>
          <div className="space-y-6">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="flex items-start gap-5 p-4 rounded-2xl hover:bg-white transition-colors cursor-default"
              >
                <span className="material-symbols-outlined text-tertiary bg-tertiary-fixed p-2 rounded-lg font-bold">
                  {benefit.icon}
                </span>
                <div>
                  <p className="font-bold text-lg text-on-background">{benefit.title}</p>
                  <p className="text-on-surface-variant font-medium">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonial card */}
        <div className="relative group">
          <div className="absolute -inset-6 bg-tertiary/10 rounded-[3rem] blur-3xl group-hover:bg-tertiary/20 transition-all" />
          <div className="bg-white p-6 rounded-[2.5rem] shadow-2xl border border-outline-variant/20 relative">
            <img
              alt="Consultor Garra"
              className="w-full h-[450px] object-cover rounded-[1.5rem] mb-8 shadow-inner"
              src={garraFuncionario}
            />
            <div className="bg-primary p-6 rounded-2xl text-on-primary shadow-lg">
              <p className="text-base italic font-medium mb-3">{benefitsTestimonial.quote}</p>
              <p className="font-bold text-secondary-container">{benefitsTestimonial.author}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
