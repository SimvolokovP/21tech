"use client";

import { useState, useEffect } from "react";
import { useLocale } from "next-intl";
import { BurgerButton } from "./BurgerButton";
import Link from "next/link";
import Image from "next/image";
import LocaleSwitcherToggle from "./LocaleSwithcerToggle";
import { MobileNav } from "./MobileNav";
import { DesktopNav } from "./DesktopNav";

export function Header() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [scrollDirection, setScrollDirection] = useState<"up" | "down">("up");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const locale = useLocale();

  const controlHeader = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY && scrollDirection !== "down") {
      setScrollDirection("down");
      setIsVisible(false);
      setIsMenuOpen(false);
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
    <>
      <header
        className={`fixed border-b border-gray-200 top-0 left-0 right-0 w-full flex items-center justify-between bg-white backdrop-blur-sm p-[8px] z-50 transition-transform duration-300 md:p-[20px] ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="container flex items-center justify-between">
          <div className="flex items-center grow basis-0">
            <div className="rounded-lg flex items-center justify-center overflow-hidden">
              <Link href={`/${locale}`}>
                <Image
                  priority
                  src="/1.png"
                  alt="21tech logo"
                  width={60}
                  height={60}
                  className="object-contain rounded-xl inline-block"
                />
              </Link>
            </div>
          </div>

          <DesktopNav />

          <div className="flex items-center gap-[8px] grow basis-0 justify-end text-right">
            <div className="hidden md:flex gap-[8px]">
              <LocaleSwitcherToggle />
            </div>
            <BurgerButton
              isOpen={isMenuOpen}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            />
          </div>
        </div>
      </header>
      <MobileNav isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
}
