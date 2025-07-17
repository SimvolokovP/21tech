"use client";
import { CasesList } from "@/components/CasesList";
import { useCaseTranslations } from "@/hooks/useCaseTranslations";
import { ICaseCard } from "@/models/ICaseCard";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useLocale, useTranslations } from "use-intl";

export function Cases() {
  const [cases, setCases] = useState<ICaseCard[]>([]);
  const { updateCasesWithTranslations } = useCaseTranslations();
  const t = useTranslations("Cases");
  const locale = useLocale();

  useEffect(() => {
    setCases(updateCasesWithTranslations().slice(0, 4));
    // eslint-disable-next-line
  }, []);

  return (
    <section id="cases" className="w-full section-indent px-4 relative">
      {/* Vercel-style фоновая сетка */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute inset-0" 
             style={{
               backgroundImage: `
                 linear-gradient(rgba(124, 58, 237, 0.03) 1px, transparent 1px),
                 linear-gradient(90deg, rgba(124, 58, 237, 0.03) 1px, transparent 1px)
               `,
               backgroundSize: '40px 40px'
             }}>
        </div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Vercel-style заголовок */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-gray-100 border border-gray-200 text-sm font-medium text-gray-700">
            <div className="w-2 h-2 rounded-full bg-violet-500"></div>
            Портфолио
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4 tracking-tight">
            {t("title")}
          </h2>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto font-normal">
            Примеры успешно реализованных проектов для различных индустрий
          </p>
        </div>

        <CasesList cases={cases} />
        
        <div className="w-full flex justify-center mt-12">
          <Link href={`/${locale}/all`}>
            <button className="inline-flex items-center justify-center bg-transparent hover:bg-gray-100 text-gray-700 hover:text-black px-6 py-3 rounded-lg text-sm font-medium transition-all duration-200 border border-gray-300">
              {t("moreBtn")}
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
