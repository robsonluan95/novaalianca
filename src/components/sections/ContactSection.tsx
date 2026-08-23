'use client';

import React, { useState } from 'react';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { Mail } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { useLanguage } from '@/context/LanguageContext';

export const ContactSection: React.FC = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    mensagem: '',
  });

  const handleWhatsAppSend = (e: React.FormEvent) => {
    e.preventDefault();
    const phone = '5562984444010';
    let text = t.contact.whatsappMessageBase;

    if (formData.nome) {
      text += `\n*${t.contact.whatsappMessageName}:* ${formData.nome}`;
    }
    if (formData.email) {
      text += `\n*${t.contact.whatsappMessageEmail}:* ${formData.email}`;
    }
    if (formData.mensagem) {
      text += `\n*${t.contact.whatsappMessageText}:* ${formData.mensagem}`;
    }

    const url = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  return (
    <section id="contato" className="py-20 bg-bg-light relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title={t.contact.title}
          subtitle={t.contact.subtitle}
        />

        <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-2xl border border-gray-100/90 grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Form Left Side */}
          <div className="lg:col-span-7">
            <h3 className="text-2xl sm:text-3xl font-bold text-brand-dark mb-6">
              {t.contact.sendMessage}
            </h3>

            <form onSubmit={handleWhatsAppSend} className="space-y-5">
              <div>
                <label className="block text-xs font-semibold text-gray-600 mb-1.5">
                  {t.contact.nameLabel}
                </label>
                <input
                  type="text"
                  placeholder={t.contact.namePlaceholder}
                  value={formData.nome}
                  onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all bg-gray-50/50"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-600 mb-1.5">
                  {t.contact.emailLabel}
                </label>
                <input
                  type="email"
                  placeholder={t.contact.emailPlaceholder}
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all bg-gray-50/50"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-600 mb-1.5">
                  {t.contact.messageLabel}
                </label>
                <textarea
                  rows={4}
                  required
                  maxLength={1000}
                  placeholder={t.contact.messagePlaceholder}
                  value={formData.mensagem}
                  onChange={(e) => setFormData({ ...formData, mensagem: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all bg-gray-50/50 resize-none"
                />
                <div className="text-right text-[11px] text-gray-400 mt-1">
                  {formData.mensagem.length}/1000
                </div>
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2.5 bg-[#25D366] hover:bg-[#20bd5a] text-white py-3.5 px-6 rounded-xl font-bold text-base shadow-lg transition-all duration-200 cursor-pointer"
              >
                <FaWhatsapp className="w-5 h-5" />
                <span>{t.contact.submitButton}</span>
              </button>
            </form>
          </div>

          {/* Contact Info Right Side */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6 lg:border-l lg:border-gray-100 lg:pl-10">
            <div>
              <h3 className="text-2xl font-bold text-brand-dark mb-6">
                {t.contact.infoTitle}
              </h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-emerald-50 text-[#25D366] flex items-center justify-center shrink-0">
                    <FaWhatsapp className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-brand-dark">{t.contact.whatsappLabel}</h4>
                    <a
                      href="https://wa.me/5562984444010"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-semibold text-brand-emerald hover:underline"
                    >
                      +55 (62) 98444-4010
                    </a>
                    <p className="text-xs text-gray-400 mt-0.5">{t.contact.responseTime}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-emerald-50 text-brand-dark flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-emerald-800" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-brand-dark">{t.contact.emailLabelInfo}</h4>
                    <a
                      href="mailto:contato@novaaliancaempreendimentos.com.br"
                      className="text-xs md:text-sm text-brand-emerald font-medium hover:underline break-all"
                    >
                      contato@novaaliancaempreendimentos.com.br
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Why choose WhatsApp callout box */}
            <div className="bg-[#f0f3fd] rounded-2xl p-6 border border-indigo-50">
              <h4 className="text-sm font-bold text-brand-dark mb-3">
                {t.contact.whyWhatsappTitle}
              </h4>
              <ul className="space-y-2 text-xs text-gray-600 font-medium">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-dark" />
                  <span>{t.contact.reason1}</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-dark" />
                  <span>{t.contact.reason2}</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-dark" />
                  <span>{t.contact.reason3}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
