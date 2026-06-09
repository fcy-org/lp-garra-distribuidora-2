import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { siteConfig } from '../data/mockData';

export const TermsPage: React.FC = () => {
  return (
    <div className="bg-surface text-on-background min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 pt-28 pb-20 px-6 md:px-10">
        <div className="max-w-4xl mx-auto">
          <Link to="/" className="inline-flex items-center gap-2 text-primary font-semibold mb-8 hover:underline">
            <span className="material-symbols-outlined text-[18px]">arrow_back</span>
            Voltar ao Início
          </Link>

          <h1 className="text-4xl md:text-5xl font-headline text-primary mb-4">Termos de Parceria</h1>
          <p className="text-on-surface-variant font-medium mb-12">Condições comerciais para parceiros B2B da Garra Distribuidora</p>

          <div className="space-y-8">
            <section className="bg-white p-8 rounded-3xl shadow-premium border border-outline-variant/20">
              <h2 className="text-2xl font-headline text-primary mb-4">1. Requisitos para Parceria</h2>
              <p className="text-on-surface-variant font-medium leading-relaxed mb-4">
                Para se tornar parceiro comercial da Garra Distribuidora, o interessado deve:
              </p>
              <ul className="space-y-2 text-on-surface-variant font-medium">
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-primary text-[18px] mt-1">business</span>
                  Possuir CNPJ ativo e regular junto à Receita Federal
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-primary text-[18px] mt-1">location_on</span>
                  Atuar no estado do Piauí com estabelecimento fixo
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-primary text-[18px] mt-1">store</span>
                  Operar no segmento de varejo alimentício, conveniência ou similar
                </li>
              </ul>
            </section>

            <section className="bg-white p-8 rounded-3xl shadow-premium border border-outline-variant/20">
              <h2 className="text-2xl font-headline text-primary mb-4">2. Condições Comerciais</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-primary-fixed/20 p-6 rounded-2xl">
                  <h3 className="font-bold text-primary mb-2">Pedido Mínimo</h3>
                  <p className="text-on-surface-variant font-medium">A partir de R$ 200,00 por pedido, variável conforme a linha de produtos.</p>
                </div>
                <div className="bg-primary-fixed/20 p-6 rounded-2xl">
                  <h3 className="font-bold text-primary mb-2">Formas de Pagamento</h3>
                  <p className="text-on-surface-variant font-medium">Boleto bancário, PIX ou acordo de crédito após análise cadastral.</p>
                </div>
                <div className="bg-primary-fixed/20 p-6 rounded-2xl">
                  <h3 className="font-bold text-primary mb-2">Prazo de Entrega</h3>
                  <p className="text-on-surface-variant font-medium">Capital: 24h a 48h. Interior do Piauí: 48h a 72h úteis.</p>
                </div>
                <div className="bg-primary-fixed/20 p-6 rounded-2xl">
                  <h3 className="font-bold text-primary mb-2">Frete</h3>
                  <p className="text-on-surface-variant font-medium">Condições de frete negociáveis conforme volume e frequência de pedidos.</p>
                </div>
              </div>
            </section>

            <section className="bg-white p-8 rounded-3xl shadow-premium border border-outline-variant/20">
              <h2 className="text-2xl font-headline text-primary mb-4">3. Política de Trocas e Devoluções</h2>
              <p className="text-on-surface-variant font-medium leading-relaxed">
                Produtos com defeito de fabricação ou avaria no transporte serão trocados sem custo adicional, mediante comunicação em até 48 horas após o recebimento. Devoluções por motivos comerciais seguem as diretrizes do código de defesa do consumidor e políticas da Dori Alimentos.
              </p>
            </section>

            <section className="bg-white p-8 rounded-3xl shadow-premium border border-outline-variant/20">
              <h2 className="text-2xl font-headline text-primary mb-4">4. Suporte Comercial</h2>
              <p className="text-on-surface-variant font-medium leading-relaxed">
                Todo parceiro conta com um consultor comercial dedicado, acessível via WhatsApp para suporte em pedidos, sugestão de mix de produtos e acompanhamento de entregas. Atendimento de segunda a sexta, das 8h às 18h. Central de Vendas: {siteConfig.phone}.
              </p>
            </section>

            <section className="bg-primary p-8 rounded-3xl text-on-primary">
              <h2 className="text-2xl font-headline mb-4">Pronto para fazer parte do time?</h2>
              <p className="font-medium opacity-90 mb-6">
                Cadastre-se na nossa landing page e receba o catálogo completo com condições exclusivas.
              </p>
              <Link
                to="/"
                className="inline-flex items-center gap-3 bg-secondary-container text-on-secondary-container px-8 py-4 rounded-full font-bold shadow-xl hover:bg-secondary-fixed transition-all"
              >
                Solicitar Catálogo
                <span className="material-symbols-outlined">arrow_forward</span>
              </Link>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default TermsPage;
