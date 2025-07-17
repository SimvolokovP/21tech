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
                  className={`relative ${
                    isActive ? "text-violet-600" : ""
                  } hover:text-violet-600 transition-all duration-300 text-[14px] cursor-pointer group`}
                >
                  {navLink.text}
                  <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-violet-600 to-purple-600 transition-all duration-300 group-hover:w-full ${isActive ? 'w-full' : ''}`}></span>
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
