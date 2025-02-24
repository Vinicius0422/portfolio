import { useTranslation } from "react-i18next";
import { Container } from "./container";
import { Wrapper } from "./wrapper";
import { useEffect, useRef, useState } from "react";

export const About = () => {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <Container>
      <Wrapper>
        <div
          ref={sectionRef}
          className={`text-gray-900 dark:text-gray-100 space-y-8 animate-once animate-duration-[2000ms] animate-delay-300 animate-ease-linear ${
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
