import { ReactNode } from "react";

interface SectionProps {
  id: string;
  children: ReactNode;
  color: "sky" | "emerald" | "purple" | "light";
}

export const Section = ({ id, children, color }: SectionProps) => {
  return (
    <section
      id={id}
      className={`
            min-h-screen pt-20
            ${color === "sky" ? "bg-sky-500 text-white" : ""}
            ${color === "emerald" ? "bg-emerald-500 text-white" : ""}
            ${color === "purple" ? "bg-purple-500 text-white" : ""}
            ${color === "light" ? "bg-gray-100 text-black" : ""}
            dark:${color === "sky" ? "bg-sky-800 text-white" : ""}
            dark:${color === "emerald" ? "bg-emerald-800 text-white" : ""}
            dark:${color === "purple" ? "bg-purple-800 text-white" : ""}
            dark:${color === "light" ? "bg-gray-900 text-white" : ""}
          `}
    >
      {children}
    </section>
  );
};
