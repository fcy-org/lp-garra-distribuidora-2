import React from 'react';
import { heroBadges, piauiCities } from '../data/mockData';
import logoDori from '../images/Logo_Dori.png';
import { useContactForm } from '../hooks/useContactForm';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface HeroSectionProps {
  readonly className?: string;
}

export const HeroSection: React.FC<Readonly<HeroSectionProps>> = ({ className = '' }) => {
  const sectionRef = useScrollAnimation();
  const { formData, errors, isSubmitting, handleChange, handleSubmit } = useContactForm();

  return (
    <section
      ref={sectionRef as React.RefObject<HTMLElement>}
      className={`pt-32 pb-20 px-6 md:px-10 stadium-gradient overflow-hidden ${className}`}
    >
      {/* Background decorations */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[1px] h-full bg-white/10" />
        <div className="absolute top-0 right-1/4 w-[1px] h-full bg-white/10" />
        <div className="absolute top-0 left-1/2 w-96 h-96 bg-primary-fixed-dim/20 blur-[120px] -translate-x-1/2" />
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none flex items-center justify-center">
          <svg className="w-full h-full max-w-4xl" viewBox="0 0 100 60" xmlns="http://www.w3.org/2000/svg">
            <rect fill="none" height="50" stroke="white" strokeWidth="0.5" width="90" x="5" y="5" />
            <line stroke="white" strokeWidth="0.5" x1="50" x2="50" y1="5" y2="55" />
            <circle cx="50" cy="30" fill="none" r="8" stroke="white" strokeWidth="0.5" />
            <rect fill="none" height="30" stroke="white" strokeWidth="0.5" width="12" x="5" y="15" />
            <rect fill="none" height="30" stroke="white" strokeWidth="0.5" width="12" x="83" y="15" />
          </svg>
        </div>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        {/* Hero Content */}
        <div className="space-y-8 text-on-primary">
          <div className="inline-flex items-center gap-3 bg-secondary-container text-on-secondary-container px-5 py-2 rounded-full shadow-xl border border-white/20">
            <span className="material-symbols-outlined text-[20px] animate-bounce">sports_soccer</span>
            <span className="font-bold text-xs uppercase tracking-widest">ESCALAÇÃO CAMPEÃ DA COPA 2026</span>
          </div>

          <h1 className="text-5xl md:text-6xl font-headline leading-[1.1] tracking-tight">
            Venda mais durante a copa com produtos{' '}
            <img src={logoDori} alt="Dori" className="inline-block h-[1.2em] w-auto align-middle -mt-2" />{' '}
            de alto giro
          </h1>

          <p className="text-lg text-primary-fixed-dim max-w-xl font-medium leading-relaxed">
            Receba catálogo completo, condições comerciais exclusivas para o Piauí e atendimento especializado da Garra Distribuidora para abastecer seu checkout.
          </p>

          {/* Badge Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {heroBadges.map((badge) => (
              <div
                key={badge.label}
                className="flex flex-col items-center p-4 bg-white/10 rounded-2xl border border-white/10 backdrop-blur-sm group hover:bg-white/20 transition-all"
              >
                <span className="material-symbols-outlined mb-3 text-secondary-container group-hover:scale-110 transition-transform">
                  {badge.icon}
                </span>
                <span className="font-bold text-[11px] text-center uppercase tracking-tighter">{badge.label}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-5 pt-4">
            <a
              href="#contato"
              className="bg-surface text-primary px-10 py-5 rounded-full font-bold text-base shadow-2xl flex items-center justify-center gap-3 hover:bg-primary-fixed transition-all group"
            >
              ABRIR CONTA E PEDIR CATÁLOGO
              <span className="material-symbols-outlined group-hover:translate-x-2 transition-transform">arrow_forward</span>
            </a>
          </div>

          <p className="text-sm font-medium opacity-70 flex items-center gap-2">
            <span className="w-2 h-2 bg-tertiary-fixed rounded-full animate-pulse" />
            Atendimento exclusivo para CNPJ no Piauí
          </p>
        </div>

        {/* Hero Form */}
        <div className="glass-card p-8 rounded-[2rem] shadow-2xl border border-white/30" id="contato">
          <div className="mb-8 text-center">
            <h2 className="text-3xl font-headline text-primary mb-2">Entrar em Campo</h2>
            <p className="text-on-surface-variant font-medium">Preencha os dados para receber nossas condições.</p>
          </div>

          <form className="space-y-5" onSubmit={handleSubmit}>
            <div>
              <label className="block font-bold text-sm mb-2 text-on-surface">Nome do Responsável</label>
              <input
                name="nome"
                value={formData.nome}
                onChange={handleChange}
                className={`w-full px-5 py-4 rounded-xl border ${errors.nome ? 'border-error' : 'border-outline-variant'} focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all`}
                placeholder="Seu nome"
                type="text"
              />
              {errors.nome && <p className="text-error text-xs mt-1 font-medium">{errors.nome}</p>}
            </div>

            <div>
              <label className="block font-bold text-sm mb-2 text-on-surface">E-mail</label>
              <input
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-5 py-4 rounded-xl border ${errors.email ? 'border-error' : 'border-outline-variant'} focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all`}
                placeholder="seu@email.com"
                type="email"
              />
              {errors.email && <p className="text-error text-xs mt-1 font-medium">{errors.email}</p>}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block font-bold text-sm mb-2 text-on-surface">WhatsApp</label>
                <input
                  name="whatsapp"
                  value={formData.whatsapp}
                  onChange={handleChange}
                  className={`w-full px-5 py-4 rounded-xl border ${errors.whatsapp ? 'border-error' : 'border-outline-variant'} focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all`}
                  placeholder="(86) 00000-0000"
                  type="tel"
                />
                {errors.whatsapp && <p className="text-error text-xs mt-1 font-medium">{errors.whatsapp}</p>}
              </div>
              <div>
                <label className="block font-bold text-sm mb-2 text-on-surface">Cidade</label>
                <select
                  name="cidade"
                  value={formData.cidade}
                  onChange={handleChange}
                  className={`w-full px-5 py-4 rounded-xl border ${errors.cidade ? 'border-error' : 'border-outline-variant'} focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-white`}
                >
                  <option value="" disabled>Selecione uma cidade no PI</option>
                  {piauiCities.map((city) => (
                    <option key={city} value={city}>{city}</option>
                  ))}
                </select>
                {errors.cidade && <p className="text-error text-xs mt-1 font-medium">{errors.cidade}</p>}
              </div>
            </div>

            <div>
              <label className="block font-bold text-sm mb-2 text-on-surface">CNPJ</label>
              <input
                name="cnpj"
                value={formData.cnpj}
                onChange={handleChange}
                className={`w-full px-5 py-4 rounded-xl border ${errors.cnpj ? 'border-error' : 'border-outline-variant'} focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all`}
                placeholder="00.000.000/0000-00"
                type="text"
              />
              {errors.cnpj && <p className="text-error text-xs mt-1 font-medium">{errors.cnpj}</p>}
            </div>

            <div>
              <label className="block font-bold text-sm mb-2 text-on-surface">Nome do Estabelecimento</label>
              <input
                name="estabelecimento"
                value={formData.estabelecimento}
                onChange={handleChange}
                className={`w-full px-5 py-4 rounded-xl border ${errors.estabelecimento ? 'border-error' : 'border-outline-variant'} focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all`}
                placeholder="Ex: Supermercado Central"
                type="text"
              />
              {errors.estabelecimento && <p className="text-error text-xs mt-1 font-medium">{errors.estabelecimento}</p>}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-tertiary text-white py-5 rounded-xl font-bold text-lg shadow-xl flex items-center justify-center gap-3 hover:brightness-110 active:scale-[0.98] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <span className="material-symbols-outlined animate-spin">progress_activity</span>
                  ENVIANDO...
                </>
              ) : (
                <>
                  SOLICITAR ACESSO AGORA
                  <span className="material-symbols-outlined">send</span>
                </>
              )}
            </button>
            <p className="text-center text-[11px] text-on-surface-variant italic font-medium">
              Análise rápida em até 24h úteis.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
