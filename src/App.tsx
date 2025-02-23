
import { useTranslation } from 'react-i18next';
import { Header } from './components/header';
import { Container } from './components/container';
import { ThemeLanguageProvider } from './contexts/theme-language-context';

function App() {

  const { t } = useTranslation();

  return (
    <ThemeLanguageProvider>
      <Header />
      <Container>
        <main>
          <section id='home' className='min-h-screen pt-20'>
            <h1>{t('header.home')}</h1>
            <p>{t('header.about')}</p>
            <h2>HOME</h2>
          </section>
          <section id='about' className='min-h-screen pt-20'>
            <h1>{t('header.home')}</h1>
            <p>{t('header.about')}</p>
            <h2>ABOUT ME</h2>
          </section>
          <section id='skills' className='min-h-screen pt-20'>
            <h1>{t('header.home')}</h1>
            <p>{t('header.about')}</p>
            <h2>SKILLS</h2>
          </section>
        </main>
      </Container>
    </ThemeLanguageProvider>
  )
}

export default App
