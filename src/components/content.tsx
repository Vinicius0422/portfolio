import { About } from "./about";
import { Home } from "./home";
import { Section } from "./section";
import { WorkExperiences } from "./work-experiences";

export const Content = () => {
  return (
    <>
      <Section id="home" color="light">
        <Home />
      </Section>
      <Section id="about" color="light">
        <About />
      </Section>
      <Section id="skills" color="light">
        <p>SKILLS</p>
      </Section>
      <Section id="experiences" color="light">
        <WorkExperiences />
      </Section>
    </>
  );
};
