"use client";

import { CASE_CARDS } from "@/shared/data/caseCards.data";
import { useTranslations } from "use-intl";

export function useCaseTranslations() {
  const t = useTranslations("Cases");

  const updateCasesWithTranslations = () => {
    return CASE_CARDS.map((card) => {
      const caseTranslations = t.raw(`casesList.${card.id}`);
      return {
        ...card,
        title: caseTranslations?.title || card.title,
        descr: caseTranslations?.descr || card.descr,
      };
    });
  };

  return { updateCasesWithTranslations };
}