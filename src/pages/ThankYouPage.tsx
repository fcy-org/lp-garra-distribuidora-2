import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { siteConfig } from '../data/mockData';

export const ThankYouPage: React.FC = () => {
  return (
    <div className="bg-surface text-on-background min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 flex items-center justify-center px-6 pt-20">
        <div className="max-w-2xl mx-auto text-center py-20 space-y-8">
          {/* Success icon */}
          <div className="w-28 h-28 bg-tertiary-fixed rounded-full flex items-center justify-center mx-auto shadow-2xl animate-fade-in-up">
            <span className="material-symbols-outlined text-tertiary text-[56px]" style={{ fontVariationSettings: "'FILL' 1" }}>
              check_circle
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-headline text-primary leading-tight">
            Gol de placa! 🎉
          </h1>

          <p className="text-xl text-on-surface-variant font-medium leading-relaxed max-w-lg mx-auto">
            Sua solicitação foi recebida com sucesso. Nossa equipe comercial entrará em contato em até <strong className="text-primary">24 horas úteis</strong> pelo WhatsApp informado.
          </p>

          <div className="bg-primary-fixed/30 p-8 rounded-3xl border border-primary-fixed">
            <h3 className="font-bold text-primary text-lg mb-4">Próximos passos:</h3>
            <ul className="space-y-3 text-left max-w-md mx-auto">
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-tertiary text-[20px] mt-0.5">looks_one</span>
                <span className="text-on-surface font-medium">Análise do seu perfil comercial pela nossa equipe</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-tertiary text-[20px] mt-0.5">looks_two</span>
                <span className="text-on-surface font-medium">Contato pelo WhatsApp com condições personalizadas</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-tertiary text-[20px] mt-0.5">looks_3</span>
                <span className="text-on-surface font-medium">Envio do catálogo completo Dori + tabela de preços</span>
              </li>
            </ul>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <a
              href={`https://wa.me/${siteConfig.whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-tertiary text-on-tertiary px-8 py-4 rounded-full font-bold text-base shadow-xl flex items-center justify-center gap-3 hover:brightness-110 transition-all"
            >
              <span className="material-symbols-outlined">chat</span>
              Falar no WhatsApp
            </a>
            <Link
              to="/"
              className="bg-surface border-2 border-primary text-primary px-8 py-4 rounded-full font-bold text-base flex items-center justify-center gap-3 hover:bg-primary-fixed transition-all"
            >
              <span className="material-symbols-outlined">arrow_back</span>
              Voltar ao Início
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ThankYouPage;
