"use client";

import { useTranslations } from "next-intl";
import LocaleSwitcherToggle from "./LocaleSwithcerToggle";

type MobileNavProps = {
  isOpen: boolean;
  onClose: () => void;
  locale: string;
};

export function MobileNav({ isOpen, onClose, locale }: MobileNavProps) {
  const t = useTranslations("Header");

  const navigation = [
    { text: t("navigation.casses"), href: `/${locale}/cases` },
    { text: t("navigation.services"), href: `/${locale}/services` },
    { text: t("navigation.solutions"), href: `/${locale}/solutions` },
    { text: t("navigation.contacts"), href: `/${locale}/contacts` },
  ];

  return (
    <div
      className={`fixed top-0 left-0 w-full h-screen bg-white z-40 pt-24 px-5 transition-all duration-300 transform ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <nav className="flex flex-col space-y-6">
        {navigation.map((navLink, index) => (
          <a
            key={navLink.href + index}
            href={navLink.href}
            className="text-2xl font-medium hover:text-black transition-colors"
            onClick={onClose}
          >
            {navLink.text}
          </a>
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
