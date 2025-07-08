import { ICaseCard } from "@/models/ICaseCard";
import Link from "next/link";
import { useLocale } from "use-intl";

interface CasesItemProps {
  caseCard: ICaseCard;
}

export function CasesItem({ caseCard }: CasesItemProps) {
  const locale = useLocale();

  return (
    <li key={caseCard.title}>
      <article
        style={{ borderColor: "hsla(0,0%,92%,1)" }}
        className="group border bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col h-full w-full relative"
      >
        <div className="relative h-[272px]">
          {caseCard.mainImage && (
            <img
              className="absolute top-0 object-cover w-full h-full rounded-t-2xl"
              src={caseCard.mainImage}
              alt={caseCard.title}
            />
          )}
        </div>
        <div className="p-8 flex flex-col">
          <div className="text-xl font-semibold text-gray-900 mb-[8px]">
            {caseCard.title}
          </div>
          <p className="text-lg text-gray-500">
            {caseCard.descr}{" "}
            <span className="underline">
              <Link href={`/${locale}/case/${caseCard.id}`}>Read more</Link>
            </span>
          </p>
        </div>
      </article>
    </li>
  );
}
