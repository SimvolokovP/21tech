"use client";

import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { useParams } from "next/navigation";
import { useTransition } from "react";

export default function LocaleSwitcherToggle() {
  const t = useTranslations("LocaleSwitcher");
  const locale = useLocale();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();
  const params = useParams();

  const switchLocale = (nextLocale: string) => {
    startTransition(() => {
      router.replace(
        // @ts-expect-error -- TypeScript will validate that only known `params`
        // are used in combination with a given `pathname`. Since the two will
        // always match for the current route, we can skip runtime checks.
        { pathname, params },
        { locale: nextLocale }
      );
    });
  };

  return (
    <div className="flex gap-2 items-center">
      {["ru", "en"].map((lang) => (
        <button
          key={lang}
          className={`px-3 py-1 rounded-md text-sm font-medium transition-colors bg-black text-white ${
            locale === lang
              ? "cursor-not-allowed opacity-50"
              : "bg-primary cursor-pointer"
          } ${isPending ? "opacity-50 cursor-not-allowed" : ""}`}
          disabled={isPending}
          onClick={() => switchLocale(lang)}
          aria-label={t("locale", { locale: lang })}
        >
          {lang.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
