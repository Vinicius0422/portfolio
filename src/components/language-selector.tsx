import { useState } from "react";

import { useTranslation } from "react-i18next";

import brasilFlag from '../assets/brasil-flag.svg';
import usaFlag from '../assets/usa-flag.svg';
import spainFlag from '../assets/spain-flag.svg';

export interface LanguageButtonProps {
    language: string;
    flagImg: string;
    alt: string;
}

const languages: LanguageButtonProps[] = [
    { language: 'en', flagImg: usaFlag, alt: 'English' },
    { language: 'es', flagImg: spainFlag, alt: 'Espanol' },
    { language: 'pt', flagImg: brasilFlag, alt: 'Português' },
];

export const LanguageSelector = () => {

    const [selectedLanguage, setSelectedLanguage] = useState<string>('en');

    const { i18n } = useTranslation();

    const changeLanguage = (language: string) => {
      setSelectedLanguage(language);
      i18n.changeLanguage(language);
    };
  
    return (
      <div className="flex gap-4">
        {languages.map(({ language, flagImg, alt }) => (
          <button
            key={language}
            onClick={() => changeLanguage(language)}
            className={`transition-opacity duration-300 ${
                selectedLanguage === language ? 'opacity-100' : 'opacity-50'
            } cursor-pointer`}>
            <img 
                src={flagImg}
                alt={alt}
                width="30"
                className="transition-opacity duration-300"
            />
          </button>
        ))}
      </div>
    );
}
