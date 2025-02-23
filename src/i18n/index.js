import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Traduções em formato JSON
import en from './locales/en.json';
import pt from './locales/pt.json';
import es from './locales/es.json';

// Inicializando i18next com a configuração correta
i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      pt: { translation: pt },
      es: { translation: es },
    },
    lng: 'en', // Define o idioma padrão
    fallbackLng: 'en', // Caso o idioma não esteja disponível
    interpolation: { escapeValue: false }, // Previne ataques de XSS
  });

export default i18n;
