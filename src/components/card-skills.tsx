import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import React from "react";
import { useTranslation } from "react-i18next";
import { IconType } from "react-icons/lib";

interface CardComponentProps {
  textHeader?: string;
  textDescriptionKey: string;
  content: IconType;
  footer?: string;
  dateBeginExperience: string;
  onHover: (description: string) => void;
}

export const CardSkillsComponent = ({
  textDescriptionKey,
  content,
  dateBeginExperience,
  onHover,
}: CardComponentProps) => {
  const { t } = useTranslation();

  const calculateExperience = () => {
    if (!dateBeginExperience) {
      return "";
    }
    const startDate = new Date(dateBeginExperience);
    const currentDate = new Date();

    const diffInMilliseconds = currentDate.getTime() - startDate.getTime();
    const diffInMonths = diffInMilliseconds / (1000 * 60 * 60 * 24 * 30.44);

    return Math.floor(diffInMonths);
  };

  return (
    <>
      <Card
        className="bg-white dark:bg-gray-800 p-10 flex items-center justify-center border-solid transition-all duration-1000 hover:border-2 hover:border-sky-500 dark:hover:border-emerald-500  hover:text-sky-500 hover:dark:text-emerald-500"
        onMouseEnter={() =>
          onHover(
            t(textDescriptionKey) +
              "\n\n" +
              t('skillsContent.experienceTimeText') +
              ": " +
              calculateExperience() +
              " " +
              t('skillsContent.monthText') 
          )
        }
        onMouseLeave={() =>
          onHover(t("skillsContent.defaultSkillsDescription"))
        }
      >
        <CardContent>
          <span className="flex items-center justify-center text-5xl animate-shake animate-infinite animate-duration-[2000ms] animate-delay-300 animate-ease-linear">
            {React.createElement(content)}
          </span>
        </CardContent>
      </Card>
    </>
  );
};
