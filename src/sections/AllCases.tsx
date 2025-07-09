"use client";
import { CasesList } from "@/components/CasesList";
import { FilterCasesTabs, IFilterCaseItem } from "@/components/FilterCasesTabs";
import { useCaseTranslations } from "@/hooks/useCaseTranslations";
import { CaseCardType, ICaseCard } from "@/models/ICaseCard";
import { useEffect, useState } from "react";
import { useTranslations } from "use-intl";

export type caseFilterType = CaseCardType | "all";

const filtersList: IFilterCaseItem[] = [
  { value: "all", label: "All" },
  { value: "tma", label: "Telegram Mini apps" },
  { value: "landing", label: "Landing" },
];

export function AllCases() {
  const [cases, setCases] = useState<ICaseCard[]>([]);
  const [filter, setFilter] = useState<caseFilterType>("all");
  const { updateCasesWithTranslations } = useCaseTranslations();
  const t = useTranslations("AllCases");

  useEffect(() => {
    const translatedCases = updateCasesWithTranslations();
    if (filter === "all") {
      setCases(translatedCases);
    } else {
      setCases(translatedCases.filter((c) => c.type === filter) || null);
    }

    // eslint-disable-next-line
  }, [filter]);

  return (
    <section id="cases" className="w-full rounded-3xl section-indent px-4">
      <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
        {t("title")}
      </h2>
      <p className="text-lg text-gray-500 mb-12 text-center max-w-2xl mx-auto">
        {t("subtitle")}
      </p>
      <FilterCasesTabs onFilterChange={setFilter} filterList={filtersList} acviveTab={filter} />
      <CasesList cases={cases} />
    </section>
  );
}
