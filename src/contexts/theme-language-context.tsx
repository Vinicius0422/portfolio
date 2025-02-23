import React, { createContext, useContext, useEffect, useState } from 'react';

import { useTranslation } from 'react-i18next';

interface ThemeLanguageContextType {
  theme: string;
  language: string;
  toggleTheme: () => void;
  changeLanguage: (newLanguage: string) => void;
}

const defaultContextValue: ThemeLanguageContextType = {
  theme: 'light',
  language: 'en',
  toggleTheme: () => {},
  changeLanguage: () => {}
};

const ThemeLanguageContext = createContext<ThemeLanguageContextType>(defaultContextValue);

export const ThemeLanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const { i18n } = useTranslation();

  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');
  const [language, setLanguage] = useState(localStorage.getItem('language') || 'en');

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    i18n.changeLanguage(language); // Atualiza o idioma no i18n ao mudar o estado
    localStorage.setItem('language', language);
  }, [language, i18n]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  const changeLanguage = (newLanguage: string) => {
    setLanguage(newLanguage);
  };

  return (
    <ThemeLanguageContext.Provider value={{ theme, toggleTheme, language, changeLanguage }}>
      {children}
    </ThemeLanguageContext.Provider>
  );
};

export const useThemeLanguage = () => {
  return useContext(ThemeLanguageContext);
};
