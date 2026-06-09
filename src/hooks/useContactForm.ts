import { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { sendLeadToCrm } from '../services/crmLead';

interface FormData {
  readonly nome: string;
  readonly email: string;
  readonly whatsapp: string;
  readonly cidade: string;
  readonly cnpj: string;
  readonly estabelecimento: string;
}

interface FormErrors {
  readonly nome?: string;
  readonly email?: string;
  readonly whatsapp?: string;
  readonly cidade?: string;
  readonly cnpj?: string;
  readonly estabelecimento?: string;
}

interface UseContactFormReturn {
  readonly formData: FormData;
  readonly errors: FormErrors;
  readonly isSubmitting: boolean;
  readonly handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => void;
  readonly handleSubmit: (e: React.FormEvent) => void;
}

const initialFormData: FormData = {
  nome: '',
  email: '',
  whatsapp: '',
  cidade: '',
  cnpj: '',
  estabelecimento: '',
};

function validateEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function validatePhone(phone: string): boolean {
  const digits = phone.replace(/\D/g, '');
  return digits.length >= 10 && digits.length <= 11;
}

function validateCNPJ(cnpj: string): boolean {
  const digits = cnpj.replace(/\D/g, '');
  return digits.length === 14;
}

function formatPhone(value: string): string {
  const digits = value.replace(/\D/g, '');
  if (digits.length <= 2) return digits.length ? `(${digits}` : '';
  if (digits.length <= 7) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7, 11)}`;
}

function formatCNPJ(value: string): string {
  const digits = value.replace(/\D/g, '');
  if (digits.length <= 2) return digits;
  if (digits.length <= 5) return `${digits.slice(0, 2)}.${digits.slice(2)}`;
  if (digits.length <= 8) return `${digits.slice(0, 2)}.${digits.slice(2, 5)}.${digits.slice(5)}`;
  if (digits.length <= 12) return `${digits.slice(0, 2)}.${digits.slice(2, 5)}.${digits.slice(5, 8)}/${digits.slice(8)}`;
  return `${digits.slice(0, 2)}.${digits.slice(2, 5)}.${digits.slice(5, 8)}/${digits.slice(8, 12)}-${digits.slice(12, 14)}`;
}

export function useContactForm(): UseContactFormReturn {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    let formattedValue = value;

    if (name === 'whatsapp') formattedValue = formatPhone(value);
    if (name === 'cnpj') formattedValue = formatCNPJ(value);

    setFormData(prev => ({ ...prev, [name]: formattedValue }));
    setErrors(prev => ({ ...prev, [name]: undefined }));
  }, []);

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};

    if (!formData.nome.trim()) newErrors.nome = 'Nome é obrigatório';
    if (!formData.email.trim()) newErrors.email = 'E-mail é obrigatório';
    else if (!validateEmail(formData.email)) newErrors.email = 'E-mail inválido';
    if (!formData.whatsapp.trim()) newErrors.whatsapp = 'WhatsApp é obrigatório';
    else if (!validatePhone(formData.whatsapp)) newErrors.whatsapp = 'Telefone inválido';
    if (!formData.cidade.trim()) newErrors.cidade = 'Cidade é obrigatória';
    if (!formData.cnpj.trim()) newErrors.cnpj = 'CNPJ é obrigatório';
    else if (!validateCNPJ(formData.cnpj)) newErrors.cnpj = 'CNPJ inválido';
    if (!formData.estabelecimento.trim()) newErrors.estabelecimento = 'Nome do estabelecimento é obrigatório';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors as FormErrors);
      return;
    }

    setIsSubmitting(true);

    try {
      await sendLeadToCrm({
        phone: formData.whatsapp.replace(/\D/g, ''),
        name: formData.nome,
        email: formData.email,
        document: formData.cnpj.replace(/\D/g, ''),
        city: formData.cidade,
        state: 'PI',
        pipeline_stage: 'Novo Lead',
        consultant: 'Gustavo - Consultor Garra 01',
        observation: formData.estabelecimento,
      });
    } catch (error) {
      console.error('Erro ao enviar lead:', error);
    } finally {
      setIsSubmitting(false);
      navigate('/obrigado');
    }
  }, [formData, navigate]);

  return { formData, errors, isSubmitting, handleChange, handleSubmit };
}
