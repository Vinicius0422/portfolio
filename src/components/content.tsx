import { About } from "./about";
import { Home } from "./home";
import { Section } from "./section";

export const Content = () => {
  return (
    <>
      <Section id="home" color="light">
        <Home />
      </Section>
      <Section id="about" color="light">
        <About />
      </Section>
    </>
  );
};
