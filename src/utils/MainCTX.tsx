import { createContext, useContext, useState, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import esEs from 'antd/lib/locale/es_ES';
import enUS from 'antd/lib/locale/en_US';

const MainCTX = createContext(undefined);

export const useMainCTX = () => {
  return useContext(MainCTX);
};

const MainCTXProvider = ({ children }) => {
  const [locale, setLocale] = useState(esEs);
  const { i18n } = useTranslation();

  const changeLang = useCallback(
    (lang: string) => {
      switch (lang) {
        case 'es_ES':
          i18n.changeLanguage(lang);
          setLocale(esEs);
          break;
        case 'en_US':
          i18n.changeLanguage(lang);
          setLocale(enUS);
          break;
        default:
          i18n.changeLanguage('es_ES');
          setLocale(esEs);
          break;
      }
    },
    [i18n]
  );

  const value = {
    locale,
    changeLang,
  };

  return <MainCTX.Provider value={value}>{children}</MainCTX.Provider>;
};

export default MainCTXProvider;
