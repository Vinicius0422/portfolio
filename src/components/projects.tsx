import { useEffect, useRef, useState } from "react";
import { Container } from "./container";
import { Wrapper } from "./wrapper";
import { CardProjectsComponent } from "./card-projects";

import imgTeste from "../assets/img-teste.jpg";
import { useTranslation } from "react-i18next";

export const Projects = () => {
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
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 place-items-stretch mb-10 animate-once animate-duration-1000 animate-delay-300 animate-ease-linear ${
            isVisible ? "animate-fade-down" : "opacity-0"
          }`}
        >
          <CardProjectsComponent
            imgPath={imgTeste}
            title={t("projectsContent.tripBuilderTitle")}
            description={t("projectsContent.tripBuilderDescription")}
            content={t("projectsContent.tripBuilderContent")}
            footer={t("projectsContent.tripBuilderFooter")}
            cardColor="dark"
          />
          <CardProjectsComponent
            imgPath={imgTeste}
            title={t("projectsContent.rentifyTitle")}
            description={t("projectsContent.rentifyDescription")}
            content={t("projectsContent.rentifyContent")}
            footer={t("projectsContent.rentifyFooter")}
            cardColor="white"
          />
        </div>
      </Wrapper>
    </Container>
  );
};
