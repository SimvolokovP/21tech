"use client";

import { useTranslations } from "next-intl";

type DesktopNavProps = {
  locale: string;
};

export function DesktopNav({ locale }: DesktopNavProps) {
  const t = useTranslations("Header");

  const navigation = [
    { text: t("navigation.0"), href: `/${locale}/cases` },
    { text: t("navigation.1"), href: `/${locale}/services` },
    { text: t("navigation.2"), href: `/${locale}/solutions` },
    { text: t("navigation.3"), href: `/${locale}/contacts` },
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
