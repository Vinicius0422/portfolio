import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface CardProjectsComponentProps {
  imgPath: string;
  title: string;
  description: string;
  content: string;
  footer: string;
  cardColor: "white" | "dark";
}

export const CardProjectsComponent = ({
  imgPath,
  title,
  description,
  content,
  footer,
  cardColor,
}: CardProjectsComponentProps) => {
  return (
    <>
      <Card
        className={`
            p-0 transition duration-500 hover:scale-105
            ${
              cardColor === "white"
                ? "bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                : "bg-gray-800 dark:bg-white text-gray-100 dark:text-gray-900"
            }
        `}
      >
        <CardHeader className="px-0 gap-6">
          <div>
            <img src={imgPath} alt="Project Logo" className="rounded-t-xl blur-sm hover:blur-none transition duration-300" />
          </div>
          <CardTitle className="px-6 text-xl lg:text-2xl">{title}</CardTitle>
          <CardDescription className="px-6 text-sky-500 dark:text-emerald-500">{description}</CardDescription>
        </CardHeader>
        <CardContent>
          <p>{content}</p>
        </CardContent>
        <CardFooter className="pb-6 text-sm">
          <p>{footer}</p>
        </CardFooter>
      </Card>
    </>
  );
};
