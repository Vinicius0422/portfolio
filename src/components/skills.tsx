import { useEffect, useState } from "react";
import { Container } from "./container";
import { Wrapper } from "./wrapper";

import { CardSkillsComponent } from "./card-skills";
import {
  FaAws,
  FaCss3,
  FaDatabase,
  FaDocker,
  FaGit,
  FaHtml5,
  FaJava,
  FaJs,
  FaReact,
} from "react-icons/fa";
import { useTranslation } from "react-i18next";
import {
  SiCypress,
  SiDotnet,
  SiNextdotjs,
  SiRabbitmq,
  SiSpring,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import useVisibility from "@/hooks/use-visibility";

export const Skills = () => {
  const { t, i18n } = useTranslation();
  const [hoveredDescription, setHoveredDescription] = useState(
    t("skillsContent.defaultSkillsDescription")
  );
  const { isVisible, sectionRef } = useVisibility(0.3);

  useEffect(() => {
    const handleLanguageChange = () => {
      setHoveredDescription(t("skillsContent.defaultSkillsDescription"));
    };

    i18n.on("languageChanged", handleLanguageChange);
    return () => {
      i18n.off("languageChanged", handleLanguageChange);
    };
  }, [i18n, t]);

  return (
    <Container>
      <Wrapper>
        <div
          ref={sectionRef}
          className={`text-gray-900 dark:text-gray-100 flex flex-col md:flex-row items-center md:items-start justify-between space-x-4 space-y-8 w-full animate-once animate-duration-1000 animate-delay-300 animate-ease-linear ${
            isVisible ? "animate-fade" : "opacity-0"
          }`}
        >
          <div className="flex flex-col items-start space-y-8 md:max-w-[45%]">
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold">
              Skills
            </h3>

            <p className="text-sky-500 dark:text-emerald-500 text-xl break-words max-w-full">
              {hoveredDescription}
            </p>
          </div>
          <div className="md:max-w-1/2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            <CardSkillsComponent
              content={FaHtml5}
              textDescriptionKey="skillsContent.htmlDescription"
              dateBeginExperience="2021-10-21"
              onHover={setHoveredDescription}
            />
            <CardSkillsComponent
              content={FaCss3}
              textDescriptionKey="skillsContent.cssDescription"
              dateBeginExperience="2021-10-21"
              onHover={setHoveredDescription}
            />
            <CardSkillsComponent
              content={FaJs}
              textDescriptionKey="skillsContent.jsDescription"
              dateBeginExperience="2021-10-21"
              onHover={setHoveredDescription}
            />
            <CardSkillsComponent
              content={FaReact}
              textDescriptionKey="skillsContent.reactDescription"
              dateBeginExperience="2021-10-21"
              onHover={setHoveredDescription}
            />
            <CardSkillsComponent
              content={SiNextdotjs}
              textDescriptionKey="skillsContent.nextDescription"
              dateBeginExperience="2021-10-21"
              onHover={setHoveredDescription}
            />
            <CardSkillsComponent
              content={SiTailwindcss}
              textDescriptionKey="skillsContent.tailwindDescription"
              dateBeginExperience="2021-10-21"
              onHover={setHoveredDescription}
            />
            <CardSkillsComponent
              content={SiTypescript}
              textDescriptionKey="skillsContent.tsDescription"
              dateBeginExperience="2021-10-21"
              onHover={setHoveredDescription}
            />
            <CardSkillsComponent
              content={SiCypress}
              textDescriptionKey="skillsContent.cypressDescription"
              dateBeginExperience="2021-10-21"
              onHover={setHoveredDescription}
            />
            <CardSkillsComponent
              content={FaJava}
              textDescriptionKey="skillsContent.javaDescription"
              dateBeginExperience="2021-10-21"
              onHover={setHoveredDescription}
            />
            <CardSkillsComponent
              content={SiSpring}
              textDescriptionKey="skillsContent.springDescription"
              dateBeginExperience="2021-10-21"
              onHover={setHoveredDescription}
            />
            <CardSkillsComponent
              content={SiDotnet}
              textDescriptionKey="skillsContent.dotnetDescription"
              dateBeginExperience="2025-01-01"
              onHover={setHoveredDescription}
            />
            <CardSkillsComponent
              content={FaDatabase}
              textDescriptionKey="skillsContent.databaseDescription"
              dateBeginExperience="2021-10-21"
              onHover={setHoveredDescription}
            />
            <CardSkillsComponent
              content={SiRabbitmq}
              textDescriptionKey="skillsContent.rabbitmqDescription"
              dateBeginExperience="2021-10-21"
              onHover={setHoveredDescription}
            />
            <CardSkillsComponent
              content={FaGit}
              textDescriptionKey="skillsContent.gitDescription"
              dateBeginExperience="2021-10-21"
              onHover={setHoveredDescription}
            />
            <CardSkillsComponent
              content={FaDocker}
              textDescriptionKey="skillsContent.dockerDescription"
              dateBeginExperience="2021-10-21"
              onHover={setHoveredDescription}
            />
            <CardSkillsComponent
              content={FaAws}
              textDescriptionKey="skillsContent.awsDescription"
              dateBeginExperience="2021-10-21"
              onHover={setHoveredDescription}
            />
          </div>
        </div>
      </Wrapper>
    </Container>
  );
};
