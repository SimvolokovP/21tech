import { ICaseCard } from "@/models/ICaseCard";
import Image from "next/image";
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
        <div className="relative h-[272px] overflow-hidden">
          {caseCard.mainImage && (
            <Link href={`/${locale}/case/${caseCard.id}`}>
              <Image
                fill
                className={`${
                  caseCard.hoverImage && "group-hover:opacity-0"
                } absolute top-0 object-cover w-full h-full rounded-t-2xl transition-opacity duration-300`}
                src={caseCard.mainImage}
                alt={caseCard.title}
              />
              {caseCard.hoverImage && (
                <Image
                  fill
                  className="absolute top-0 object-cover w-full h-full rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  src={caseCard.hoverImage}
                  alt={`${caseCard.title} - hover view`}
                />
              )}
            </Link>
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
