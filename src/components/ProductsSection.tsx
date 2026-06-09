import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import candyCategories from '../images/candy-categories.png';

interface ProductsSectionProps {
  readonly className?: string;
}

export const ProductsSection: React.FC<Readonly<ProductsSectionProps>> = ({ className = '' }) => {
  const sectionRef = useScrollAnimation();

  return (
    <section
      ref={sectionRef as React.RefObject<HTMLElement>}
      id="produtos"
      className={`py-24 px-6 md:px-10 bg-white overflow-hidden ${className}`}
    >
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-headline text-primary mb-4">
          Goleada de Variedade Dori
        </h2>
        <p className="text-lg text-on-surface-variant font-medium max-w-2xl mx-auto">
          Categorias selecionadas para transformar seu PDV em um campo de vendas.
        </p>
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="rounded-[2rem] overflow-hidden shadow-2xl border border-outline-variant/20 bg-surface p-3 md:p-4">
          <img
            src={candyCategories}
            alt="Categorias de produtos Dori"
            className="w-full h-auto object-cover rounded-[1.5rem]"
          />
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
