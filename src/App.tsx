
import { LanguageSelector } from './components/language-selector';
import { useTranslation } from 'react-i18next';

function App() {

  const { t } = useTranslation();

  return (
    <>
      <p>Hello</p>

      <LanguageSelector />

      <h1>{t('header.home')}</h1>
      <p>{t('header.about')}</p>
    </>
  )
}

export default App
