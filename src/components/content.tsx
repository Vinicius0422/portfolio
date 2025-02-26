import { About } from "./about";
import { Contact } from "./contact";
import { Home } from "./home";
import { Projects } from "./projects";
import { Section } from "./section";
import { Skills } from "./skills";
import { WorkExperiences } from "./work-experiences";

export const Content = () => {
  return (
    <>
      <Section id="home">
        <Home />
      </Section>
      <Section id="about">
        <About />
      </Section>
      <Section id="skills">
        <Skills />
      </Section>
      <Section id="experiences">
        <WorkExperiences />
      </Section>
      <Section id="projects">
        <Projects />
      </Section>
      <Section id="contact">
        <Contact />
      </Section>
    </>
  );
};
