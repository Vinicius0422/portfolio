import { useTranslation } from "react-i18next";
import { Container } from "./container";
import { Wrapper } from "./wrapper";

export const About = () => {
  const { t } = useTranslation();

  return (
    <Container>
      <Wrapper>
        <div className="text-gray-900 dark:text-gray-100 space-y-8">
          <h3 className="text-xl md:text-3xl lg:text-4xl font-semibold">
            {t("aboutContent.aboutTitle")}
          </h3>
          <p className="text-justify">
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
