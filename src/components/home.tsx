import { Container } from "./container";
import { useTranslation } from "react-i18next";

import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

import imgHome from "../assets/img-home.png";
import { Wrapper } from "./wrapper";

export const Home = () => {
  const { t } = useTranslation();

  return (
    <Container>
      <Wrapper>
        <div className="flex flex-col text-gray-900 dark:text-gray-100 gap-10 animate-fade-right animate-duration-1000 animate-delay-300 animate-ease-linear">
          <div className="space-y-2 lg:space-y-4 text-center lg:text-start">
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold">
              {t("homeContent.welcome")}
            </h3>
            <h2 className="text-3xl md:text-4xl lg:text-6xl font-extrabold animate-pulse animate-duration-1500 animate-ease-linear">
              {t("homeContent.apresentation")}
            </h2>
            <h1 className="lg:text-2xl font-bold">
              {t("homeContent.occupation")}
            </h1>
          </div>
          <div className="flex items-center justify-center gap-10">
            <a
              href="https://www.linkedin.com/in/vinicius-vgdc042201"
              target="_blank"
              className="hover:text-sky-700 dark:hover:text-emerald-700 transition-colors duration-500 ease-in-out"
            >
              <FaLinkedin
                aria-label="Linkedin logo"
                size={40}
                className="animate-bounce animate-infinite animate-duration-1500 animate-delay-300 animate-ease-linear"
              />
            </a>
            <a
              href="https://github.com/Vinicius0422"
              target="_blank"
              className="hover:text-sky-700 dark:hover:text-emerald-700 transition-colors duration-500 ease-in-out"
            >
              <FaGithubSquare
                aria-label="GitHub logo"
                size={40}
                className="animate-bounce animate-infinite animate-duration-1500 animate-delay-300 animate-ease-linear"
              />
            </a>
            <a
              href="mailto:viniciusguedes.dev22@gmail.com"
              target="_blank"
              className="hover:text-sky-700 dark:hover:text-emerald-700 transition-colors duration-500 ease-in-out"
            >
              <SiGmail
                aria-label="Gmail logo"
                size={40}
                className="animate-bounce animate-infinite animate-duration-1500 animate-delay-300 animate-ease-linear"
              />
            </a>
          </div>
        </div>
        <div className="flex-shrink-0 w-10/12 md:w-1/2 animate-fade-left animate-duration-1000 animate-delay-300 animate-ease-linear">
          <img
            src={imgHome}
            className="object-cover w-full h-full animate-wiggle animate-infinite animate-duration-[2000ms] animate-delay-300 animate-ease-linear"
          />
        </div>
      </Wrapper>
    </Container>
  );
};
