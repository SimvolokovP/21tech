"use client";
import { CasesList } from "@/components/CasesList";
import { useCaseTranslations } from "@/hooks/useCaseTranslations";
import { ICaseCard } from "@/models/ICaseCard";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useTranslations } from "use-intl";

export function Cases() {
  const [cases, setCases] = useState<ICaseCard[]>([]);
  const { updateCasesWithTranslations } = useCaseTranslations();
  const t = useTranslations("Cases");

  useEffect(() => {
    setCases(updateCasesWithTranslations());
  }, [updateCasesWithTranslations]);

  return (
    <section id="cases" className="w-full rounded-3xl section-indent px-4">
      <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
        {t("title")}
      </h2>
      <p className="text-lg text-gray-500 mb-12 text-center max-w-2xl mx-auto">
        {t("subtitle")}
      </p>
      <CasesList cases={cases} />
      <div className="w-full flex justify-center">
        <Link href={"/"}>
          <button className="btn">{t("moreBtn")}</button>
        </Link>
      </div>
    </section>
  );
}