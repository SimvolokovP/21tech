import { ICaseCard } from "@/models/ICaseCard";
import { CasesItem } from "./CasesItem";

interface CasesListProps {
  cases: ICaseCard[];
}

export function CasesList({ cases }: CasesListProps) {
  return (
    <ul className="mx-auto grid max-w-5xl grid-cols-1 gap-4 md:grid-cols-2 mb-10">
      {cases.map((card) => (
        <CasesItem caseCard={card} key={card.id} />
      ))}
    </ul>
  );
}
