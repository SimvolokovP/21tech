"use client";
import { useCaseTranslations } from "@/hooks/useCaseTranslations";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { ICaseCard } from "@/models/ICaseCard";

export default function CasePage() {
  const params = useParams();
  const [caseData, setCaseData] = useState<ICaseCard | null>(null);
  const { updateCasesWithTranslations } = useCaseTranslations();

  useEffect(() => {
    if (!params?.id) return;
    
    const translatedCases = updateCasesWithTranslations();
    setCaseData(translatedCases.find(c => c.id.toString() === params.id) || null);
  }, [params?.id, updateCasesWithTranslations]);

  if (!caseData) return <div>Loading...</div>;

  return (
    <div>
      <h1>{caseData.title}</h1>
      <p>{caseData.descr}</p>
    </div>
  );
}