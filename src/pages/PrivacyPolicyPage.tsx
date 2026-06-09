import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { siteConfig } from '../data/mockData';

export const PrivacyPolicyPage: React.FC = () => {
  return (
    <div className="bg-surface text-on-background min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 pt-28 pb-20 px-6 md:px-10">
        <div className="max-w-4xl mx-auto">
          <Link to="/" className="inline-flex items-center gap-2 text-primary font-semibold mb-8 hover:underline">
            <span className="material-symbols-outlined text-[18px]">arrow_back</span>
            Voltar ao Início
          </Link>

          <h1 className="text-4xl md:text-5xl font-headline text-primary mb-4">Política de Privacidade</h1>
          <p className="text-on-surface-variant font-medium mb-12">Última atualização: Junho de {siteConfig.year}</p>

          <div className="prose prose-lg max-w-none space-y-8">
            <section className="bg-white p-8 rounded-3xl shadow-premium border border-outline-variant/20">
              <h2 className="text-2xl font-headline text-primary mb-4">1. Informações que Coletamos</h2>
              <p className="text-on-surface-variant font-medium leading-relaxed">
                A Garra Distribuidora coleta informações pessoais fornecidas voluntariamente pelo usuário através do formulário de contato neste site, incluindo: nome do responsável, endereço de e-mail, número de WhatsApp, cidade, CNPJ e nome do estabelecimento comercial. Estes dados são coletados exclusivamente para fins de relacionamento comercial B2B.
              </p>
            </section>

            <section className="bg-white p-8 rounded-3xl shadow-premium border border-outline-variant/20">
              <h2 className="text-2xl font-headline text-primary mb-4">2. Como Utilizamos seus Dados</h2>
              <p className="text-on-surface-variant font-medium leading-relaxed mb-4">Utilizamos os dados coletados para:</p>
              <ul className="space-y-2 text-on-surface-variant font-medium">
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-tertiary text-[18px] mt-1">check</span>
                  Entrar em contato com potenciais parceiros comerciais
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-tertiary text-[18px] mt-1">check</span>
                  Enviar catálogos, tabelas de preço e condições comerciais
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-tertiary text-[18px] mt-1">check</span>
                  Fornecer atendimento comercial personalizado
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-tertiary text-[18px] mt-1">check</span>
                  Análise de perfil para fins de concessão de crédito comercial
                </li>
              </ul>
            </section>

            <section className="bg-white p-8 rounded-3xl shadow-premium border border-outline-variant/20">
              <h2 className="text-2xl font-headline text-primary mb-4">3. Compartilhamento de Dados</h2>
              <p className="text-on-surface-variant font-medium leading-relaxed">
                A Garra Distribuidora não vende, aluga ou compartilha seus dados pessoais com terceiros para fins de marketing. Os dados podem ser compartilhados apenas com a Dori Alimentos (fabricante) para fins de cadastro como revendedor autorizado, quando aplicável e com seu consentimento.
              </p>
            </section>

            <section className="bg-white p-8 rounded-3xl shadow-premium border border-outline-variant/20">
              <h2 className="text-2xl font-headline text-primary mb-4">4. Seus Direitos (LGPD)</h2>
              <p className="text-on-surface-variant font-medium leading-relaxed mb-4">
                Em conformidade com a Lei Geral de Proteção de Dados (Lei nº 13.709/2018), você tem direito a:
              </p>
              <ul className="space-y-2 text-on-surface-variant font-medium">
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-tertiary text-[18px] mt-1">shield</span>
                  Confirmar a existência de tratamento dos seus dados
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-tertiary text-[18px] mt-1">shield</span>
                  Acessar, corrigir ou solicitar a eliminação dos seus dados
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-tertiary text-[18px] mt-1">shield</span>
                  Revogar o consentimento a qualquer momento
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-tertiary text-[18px] mt-1">shield</span>
                  Solicitar a portabilidade dos dados a outro fornecedor
                </li>
              </ul>
            </section>

            <section className="bg-white p-8 rounded-3xl shadow-premium border border-outline-variant/20">
              <h2 className="text-2xl font-headline text-primary mb-4">5. Contato do Encarregado (DPO)</h2>
              <p className="text-on-surface-variant font-medium leading-relaxed">
                Para exercer seus direitos ou esclarecer dúvidas sobre o tratamento de dados, entre em contato com nosso Encarregado de Proteção de Dados pelo telefone {siteConfig.phone} ou visite nossa sede em {siteConfig.location}.
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PrivacyPolicyPage;
