"use client";

import { useTranslations } from "next-intl";
import LocaleSwitcherToggle from "./LocaleSwithcerToggle";

type MobileNavProps = {
  isOpen: boolean;
  onClose: () => void;
};

export function MobileNav({ isOpen, onClose }: MobileNavProps) {
  const t = useTranslations("Header");

  const navigation = [
    { text: t("navigation.services"), anchor: "services" },
    { text: t("navigation.cases"), anchor: "cases" },
    { text: t("navigation.solutions"), anchor: "solutions" },
    { text: t("navigation.contacts"), anchor: "contacts" },
  ];

  const handleScrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    onClose();
  };

  return (
    <div
      className={`fixed top-0 left-0 w-full h-screen bg-white z-40 pt-24 px-5 transition-all duration-300 transform ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <nav className="flex flex-col space-y-6">
        {navigation.map((navLink, index) => (
          <button
            key={index}
            onClick={() => handleScrollToSection(navLink.anchor)}
            className="hover:text-black transition-colors text-[14px]"
          >
            {navLink.text}
          </button>
        ))}
      </nav>
      <div className="flex gap-[8px]">
        <LocaleSwitcherToggle />
        <a
          href="mailto:hello@21tech.agency"
          className={`bg-black text-white px-5 py-2 rounded-lg font-semibold `}
        >
          {t("link")}
        </a>
      </div>
    </div>
  );
}
