import { useTranslations } from "next-intl";

export function DesktopNav() {
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
  };

  return (
    <nav className="hidden md:flex flex-1 justify-center">
      <ul className="flex space-x-8 text-gray-700 font-medium">
        {navigation.map((navLink, index) => (
          <li key={navLink.anchor + index}>
            <button
              onClick={() => handleScrollToSection(navLink.anchor)}
              className="hover:text-black transition-colors text-[14px]"
            >
              {navLink.text}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
