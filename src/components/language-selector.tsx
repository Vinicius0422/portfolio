import { memo } from 'react';

import { useThemeLanguage } from "@/contexts/theme-language-context";

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

export const LanguageSelector = memo(() => {

    const { language, changeLanguage } = useThemeLanguage();
  
    return (
      <div className="flex gap-4">
        {languages.map(({ language: lng, flagImg, alt }) => (
          <button
            key={lng}
            onClick={() => changeLanguage(lng)}
            className={`transition-opacity duration-300 ${
              language === lng ? 'opacity-100' : 'opacity-50'
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
})
