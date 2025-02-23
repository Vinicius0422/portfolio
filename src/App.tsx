import { Header } from "./components/header";
import { ThemeLanguageProvider } from "./contexts/theme-language-context";
import { Content } from "./components/content";

function App() {
  return (
    <ThemeLanguageProvider>
      <Header />
      <main>
        <Content />
      </main>
    </ThemeLanguageProvider>
  );
}

export default App;
