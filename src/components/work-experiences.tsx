import { Container } from "./container";
import { Wrapper } from "./wrapper";
import { useTranslation } from "react-i18next";
import useVisibility from "@/hooks/use-visibility";

export const WorkExperiences = () => {
  const { t } = useTranslation();
  const { isVisible, sectionRef } = useVisibility(0.3);

  return (
    <Container>
      <Wrapper>
        <div
          ref={sectionRef}
          className={`text-gray-900 dark:text-gray-100 space-y-8 animate-once animate-duration-1000 animate-delay-300 animate-ease-linear ${
            isVisible ? "animate-fade" : "opacity-0"
          }`}
        >
          <h3 className="text-xl md:text-3xl lg:text-4xl font-semibold">
            {t("experiencesContent.experiencesTitle")}
          </h3>
          <div className="text-justify lg:text-xl">
            {t("experiencesContent.experiencesText")
              .split("\n\n")
              .map((paragraph, index) => (
                <span key={index} className="block mb-4">
                  {paragraph.includes("-") ? (
                    <ul className="list-disc pl-5">
                      {paragraph
                        .split("\n")
                        .map((item, idx) =>
                          item.startsWith("-") ? (
                            <li key={idx}>{item.replace("-", "").trim()}</li>
                          ) : null
                        )}
                    </ul>
                  ) : (
                    <p>{paragraph}</p>
                  )}
                </span>
              ))}
          </div>
        </div>
      </Wrapper>
    </Container>
  );
};
