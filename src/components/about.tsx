import { useTranslation } from "react-i18next";
import { Container } from "./container";
import { Wrapper } from "./wrapper";
import useVisibility from "@/hooks/use-visibility";

export const About = () => {
  const { t } = useTranslation();
  const { isVisible, sectionRef } = useVisibility(0.3);

  return (
    <Container>
      <Wrapper>
        <div
          ref={sectionRef}
          className={`text-gray-900 dark:text-gray-100 space-y-8 animate-once animate-duration-1000 animate-delay-300 animate-ease-linear ${
            isVisible ? "animate-fade-up" : "opacity-0"
          }`}
        >
          <h3 className="text-xl md:text-3xl lg:text-4xl font-semibold">
            {t("aboutContent.aboutTitle")}
          </h3>
          <p className="text-justify lg:text-xl">
            {t("aboutContent.aboutText")
              .split("\n\n")
              .map((paragraph, index) => (
                <span key={index} className="block mb-2">
                  {paragraph}
                </span>
              ))}
          </p>
        </div>
      </Wrapper>
    </Container>
  );
};
