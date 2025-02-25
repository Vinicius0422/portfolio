import { useTranslation } from "react-i18next";
import { Container } from "./container";

export const Footer = () => {
    const { t } = useTranslation();

  return (
    <footer className="w-full flex items-center bg-white dark:bg-gray-800 drop-shadow-[0_4px_6px_rgba(0,0,0,0.1)]">
      <Container>
        <div className="flex flex-col lg:flex-row items-center lg:items-start lg:justify-between space-y-4 py-10 text-gray-900 dark:text-gray-100">
          <p className="flex flex-col items-center lg:flex-row lg:items-start">
            Copyright © 2025{" "}
            <b className="text-sky-500 dark:text-emerald-500 mx-1">
              viniciusguedesdev.com
            </b>
            {t('footerContent.rightsReserved')}
          </p>
          <p>Powered by Vinicius</p>
        </div>
      </Container>
    </footer>
  );
};
