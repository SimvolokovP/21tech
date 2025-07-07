"use client";

import { useTranslations } from "next-intl";

type DesktopNavProps = {
  locale: string;
};

export function DesktopNav({ locale }: DesktopNavProps) {
  const t = useTranslations("Header");

  const navigation = [
    { text: t("navigation.casses"), href: `/${locale}/cases` },
    { text: t("navigation.services"), href: `/${locale}/services` },
    { text: t("navigation.solutions"), href: `/${locale}/solutions` },
    { text: t("navigation.contacts"), href: `/${locale}/contacts` },
  ];

  return (
    <nav className="hidden md:flex flex-1 justify-center">
      <ul className="flex space-x-8 text-gray-700 font-medium">
        {navigation.map((navLink, index) => (
          <li key={navLink.href + index}>
            <a
              href={navLink.href}
              className="hover:text-black transition-colors text-[14px]"
            >
              {navLink.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
