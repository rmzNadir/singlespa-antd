import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  fallbackLng: 'es_ES',
  lng: 'es_ES',
  resources: {
    en_US: {
      translations: require('./locales/en_US/translations.json'),
    },
    es_ES: {
      translations: require('./locales/es_ES/translations.json'),
    },
  },
  ns: ['translations'],
  defaultNS: 'translations',
});

i18n.languages = ['en_US', 'es_ES'];

export default i18n;
