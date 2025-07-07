"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import LocaleSwitcherToggle from "./LocaleSwithcerToggle";

export function Header() {
  const [isVisible, setIsVisible] = useState<boolean>(true);
  const [lastScrollY, setLastScrollY] = useState<number>(0);
  const [scrollDirection, setScrollDirection] = useState<"up" | "down">("up");

  const locale = useLocale();
  const t = useTranslations("Header");

  const navigation = [
    { text: t("navigation.0"), href: `/${locale}/cases` },
    { text: t("navigation.1"), href: `/${locale}/services` },
    { text: t("navigation.2"), href: `/${locale}/solutions` },
    { text: t("navigation.3"), href: `/${locale}/contacts` },
  ];

  const controlHeader = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY && scrollDirection !== "down") {
      setScrollDirection("down");
      setIsVisible(false);
    } else if (currentScrollY < lastScrollY && scrollDirection !== "up") {
      setScrollDirection("up");
      setIsVisible(true);
    }

    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlHeader);
    return () => window.removeEventListener("scroll", controlHeader);
  }, [lastScrollY, scrollDirection]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 w-full flex items-center justify-between bg-white backdrop-blur-sm p-[20px] z-50 transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="container flex items-center justify-between">
        <div className="flex items-center grow basis-0">
          <div className="rounded-lg flex items-center justify-center overflow-hidden">
            <a href={`/${locale}`}>
              <Image
                priority
                src="/1.png"
                alt="21tech logo"
                width={60}
                height={60}
                className="object-contain rounded-xl inline-block"
              />
            </a>
          </div>
        </div>

        <nav className="flex-1 flex justify-center">
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

        <div className="flex items-center gap-[8px] grow basis-0 justify-end text-right">
          <LocaleSwitcherToggle />
          <a
            href="mailto:hello@21tech.agency"
            className="bg-black text-white px-5 py-2 rounded-lg font-semibold"
          >
            {t("link")}
          </a>
        </div>
      </div>
    </header>
  );
}
