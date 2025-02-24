import { ReactNode } from "react";

interface SectionProps {
  id: string;
  children: ReactNode;
}

export const Section = ({ id, children }: SectionProps) => {
  return (
    <section
      id={id}
      className="
            min-h-screen pt-20
            bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-gray-100"
    >
      {children}
    </section>
  );
};
