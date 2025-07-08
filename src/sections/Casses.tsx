"use client";
import { CasesList } from "@/components/CasesList";
import { ICaseCard } from "@/models/ICaseCard";
import { CASE_CARDS } from "@/shared/data/caseCards.data";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useTranslations } from "use-intl";

export function Cases() {
  const [cases, setCases] = useState<ICaseCard[]>([]);
  const t = useTranslations("Cases");

  useEffect(() => {
    const updateCasesWithTranslations = () => {
      const translatedCases = CASE_CARDS.map((card) => {
        const caseTranslations = t.raw(`casesList.${card.id}`);
        return {
          ...card,
          title: caseTranslations?.title || card.title,
          descr: caseTranslations?.descr || card.descr,
        };
      });
      setCases(translatedCases);
      console.log(translatedCases);
    };

    updateCasesWithTranslations();
  }, [t]);

  return (
    <section id="cases" className="w-full py-20 rounded-3xl my-12 px-4">
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
