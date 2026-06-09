import React, { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { piauiCities } from '../data/mockData';
import { sendLeadToCrm } from '../services/crmLead';

interface RepFormData {
  readonly nome: string;
  readonly email: string;
  readonly whatsapp: string;
  readonly cidade: string;
  readonly experiencia: string;
  readonly motivacao: string;
}

export const RepresentativePage: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<RepFormData>({
    nome: '', email: '', whatsapp: '', cidade: '', experiencia: '', motivacao: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  }, []);

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      await sendLeadToCrm({
        phone: formData.whatsapp.replace(/\D/g, ''),
        name: formData.nome,
        email: formData.email,
        city: formData.cidade,
        state: 'PI',
        pipeline_stage: 'Candidato a Representante',
      });
    } catch (error) {
      console.error('Erro ao enviar lead:', error);
    } finally {
      setIsSubmitting(false);
      navigate('/obrigado');
    }
  }, [formData, navigate]);

  const advantages = [
    { icon: 'trending_up', title: 'Comissões Competitivas', desc: 'Ganhos proporcionais ao volume de vendas na sua região.' },
    { icon: 'workspace_premium', title: 'Portfólio Premium', desc: 'Represente marcas líderes como Dori Alimentos no Piauí.' },
    { icon: 'support_agent', title: 'Suporte Completo', desc: 'Treinamento, material de apoio e acompanhamento da gestão.' },
    { icon: 'map', title: 'Território Exclusivo', desc: 'Região de atuação definida sem concorrência interna.' },
  ];

  return (
    <div className="bg-surface text-on-background min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 pt-28 pb-20">
        {/* Hero */}
        <section className="stadium-gradient px-6 md:px-10 py-20 relative overflow-hidden">
          <div className="max-w-7xl mx-auto relative z-10 text-center text-on-primary">
            <div className="inline-flex items-center gap-2 bg-secondary-container text-on-secondary-container px-5 py-2 rounded-full shadow-xl font-bold text-xs uppercase tracking-widest mb-6">
              <span className="material-symbols-outlined text-[18px]">handshake</span>
              Oportunidade de Carreira
            </div>
            <h1 className="text-4xl md:text-6xl font-headline leading-tight mb-6">
              Seja um Representante<br />Garra Distribuidora
            </h1>
            <p className="text-lg text-primary-fixed-dim font-medium max-w-2xl mx-auto">
              Junte-se à nossa rede de representantes comerciais e leve as melhores marcas de alimentos ao varejo do Piauí.
            </p>
          </div>
        </section>

        {/* Advantages */}
        <section className="py-20 px-6 md:px-10">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-headline text-primary text-center mb-16">
              Por que representar a Garra?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {advantages.map((adv) => (
                <div key={adv.title} className="p-8 rounded-3xl bg-white border border-outline-variant/30 shadow-premium text-center hover:-translate-y-2 transition-all">
                  <div className="w-16 h-16 bg-primary-fixed rounded-full flex items-center justify-center text-primary mx-auto mb-6">
                    <span className="material-symbols-outlined text-[32px]">{adv.icon}</span>
                  </div>
                  <h3 className="text-lg font-bold text-on-background mb-3">{adv.title}</h3>
                  <p className="text-sm text-on-surface-variant font-medium">{adv.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Application Form */}
        <section className="py-20 px-6 md:px-10 bg-surface-container-low">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-headline text-primary mb-4">Candidate-se Agora</h2>
              <p className="text-on-surface-variant font-medium">Preencha o formulário e nossa equipe entrará em contato.</p>
            </div>

            <form onSubmit={handleSubmit} className="bg-white p-8 md:p-12 rounded-3xl shadow-2xl border border-outline-variant/20 space-y-6">
              <div>
                <label className="block font-bold text-sm mb-2 text-on-surface">Nome Completo</label>
                <input name="nome" value={formData.nome} onChange={handleChange} required
                  className="w-full px-5 py-4 rounded-xl border border-outline-variant focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                  placeholder="Seu nome completo" type="text" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block font-bold text-sm mb-2 text-on-surface">E-mail</label>
                  <input name="email" value={formData.email} onChange={handleChange} required
                    className="w-full px-5 py-4 rounded-xl border border-outline-variant focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                    placeholder="seu@email.com" type="email" />
                </div>
                <div>
                  <label className="block font-bold text-sm mb-2 text-on-surface">WhatsApp</label>
                  <input name="whatsapp" value={formData.whatsapp} onChange={handleChange} required
                    className="w-full px-5 py-4 rounded-xl border border-outline-variant focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                    placeholder="(86) 00000-0000" type="tel" />
                </div>
              </div>

              <div>
                <label className="block font-bold text-sm mb-2 text-on-surface">Cidade / Região de Atuação</label>
                <select name="cidade" value={formData.cidade} onChange={handleChange} required
                  className="w-full px-5 py-4 rounded-xl border border-outline-variant focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-white">
                  <option value="" disabled>Selecione uma cidade no PI</option>
                  {piauiCities.map(city => (
                    <option key={city} value={city}>{city}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block font-bold text-sm mb-2 text-on-surface">Experiência com Vendas</label>
                <select name="experiencia" value={formData.experiencia} onChange={handleChange} required
                  className="w-full px-5 py-4 rounded-xl border border-outline-variant focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-white">
                  <option value="">Selecione...</option>
                  <option value="nenhuma">Sem experiência prévia</option>
                  <option value="1-2">1 a 2 anos</option>
                  <option value="3-5">3 a 5 anos</option>
                  <option value="5+">Mais de 5 anos</option>
                </select>
              </div>

              <div>
                <label className="block font-bold text-sm mb-2 text-on-surface">Por que quer ser Representante Garra?</label>
                <textarea name="motivacao" value={formData.motivacao} onChange={handleChange} rows={4}
                  className="w-full px-5 py-4 rounded-xl border border-outline-variant focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none"
                  placeholder="Conte um pouco sobre você e sua motivação..." />
              </div>

              <button type="submit" disabled={isSubmitting}
                className="w-full bg-primary text-on-primary py-5 rounded-xl font-bold text-lg shadow-xl flex items-center justify-center gap-3 hover:bg-primary-container transition-all active:scale-[0.98] disabled:opacity-50">
                {isSubmitting ? (
                  <>
                    <span className="material-symbols-outlined animate-spin">progress_activity</span>
                    ENVIANDO...
                  </>
                ) : (
                  <>
                    ENVIAR CANDIDATURA
                    <span className="material-symbols-outlined">send</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default RepresentativePage;
