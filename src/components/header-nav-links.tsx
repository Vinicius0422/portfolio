import { memo, useEffect, useState } from "react";

import { useTranslation } from "react-i18next";

const menusLinks = [
  { id: "#home", link: "header.home" },
  { id: "#about", link: "header.about" },
  { id: "#skills", link: "header.skills" },
  { id: "#experiences", link: "header.experiences"},
  { id: "#projects", link: "header.projects" },
  { id: "#contact", link: "header.contact" },
];

export const HeaderNavLinks = memo(() => {
  const { t } = useTranslation();
  const [activeLink, setActiveLink] = useState("#home");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveLink(`#${entry.target.id}`);
          }
        });
      },
      {
        root: null,
        rootMargin: "-50px 0px -50px 0px",
        threshold: 0.5,
      }
    );

    menusLinks.forEach((menu) => {
      const section = document.getElementById(menu.id.substring(1));
      if (section) observer.observe(section);
    });

    return () => {
      menusLinks.forEach((menu) => {
        const section = document.getElementById(menu.id.substring(1));
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  return (
    <ul className="flex flex-col lg:flex-row justify-center items-center gap-8">
      {menusLinks.map((link) => (
        <li
          key={link.id}
          className="font-semibold text-gray-900 dark:text-gray-100 relative group"
        >
          <a
            href={link.id}
            className={`relative after:content-[''] after:absolute after:left-0 after:bottom-[-3px] after:w-full after:h-[3px] 
                            after:bg-sky-600 dark:after:bg-emerald-400 after:scale-x-0 after:origin-right 
                            after:transition-transform after:duration-500 group-hover:after:scale-x-100 group-hover:after:origin-left
                            ${
                              activeLink === link.id
                                ? "after:scale-x-100"
                                : "after:scale-x-0"
                            }`}
          >
            {t(link.link)}
          </a>
        </li>
      ))}
    </ul>
  );
});
