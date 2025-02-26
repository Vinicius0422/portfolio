import { Header } from "./components/header";
import { ThemeLanguageProvider } from "./contexts/theme-language-context";
import { Content } from "./components/content";
import { Footer } from "./components/footer";

function App() {
  return (
    <ThemeLanguageProvider>
      <Header />
      <main>
        <Content />
      </main>
      <Footer />
    </ThemeLanguageProvider>
  );
}

export default App;
