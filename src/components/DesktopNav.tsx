import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import { match } from "path-to-regexp";

export function DesktopNav() {
  const t = useTranslations("Header");
  const pathname = usePathname();

  const navigation = [
    { text: t("navigation.services"), href: "/services" },
    { text: t("navigation.cases"), href: "/cases" },
    { text: t("navigation.solutions"), href: "/solutions" },
    { text: t("navigation.blog"), href: "/blog" },
    { text: t("navigation.contacts"), href: "/contact-us" },
  ];

  return (
    <nav className="hidden md:flex flex-1 justify-center">
      <ul className="flex space-x-8 text-gray-600 font-medium">
        {navigation.map((navLink, index) => {
          const matcher = match(`/:locale${navLink.href}`, {
            decode: decodeURIComponent,
          });
          const isActive = matcher(pathname);

          return (
            <li key={index}>
              <Link href={navLink.href}>
                <span
                  className={`${
                    isActive ? "text-black" : ""
                  } hover:text-black transition-colors duration-200 text-sm cursor-pointer`}
                >
                  {navLink.text}
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
