"use client";

import { IArticle } from "@/models/IArticle";
import { useArticleTranslations } from "@/hooks/useArticleTranslations";
import Image from "next/image";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";

interface ArticleCardProps {
  article: IArticle;
}

export function ArticleCard({ article }: ArticleCardProps) {
  const locale = useLocale();
  const t = useTranslations("Blog");
  const { getCategoryTranslation } = useArticleTranslations();

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString(locale === 'ru' ? 'ru-RU' : 'en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <article className="group relative bg-white border border-gray-200 rounded-xl hover:shadow-lg transition-all duration-200 flex flex-col h-full overflow-hidden vercel-border">
      {/* Технологичная сетка внутри карточки */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute inset-0" 
             style={{
               backgroundImage: `
                 linear-gradient(rgba(124, 58, 237, 0.02) 1px, transparent 1px),
                 linear-gradient(90deg, rgba(124, 58, 237, 0.02) 1px, transparent 1px)
               `,
               backgroundSize: '20px 20px'
             }}>
        </div>
      </div>

      {/* Изображение */}
      {article.image && (
        <div className="relative h-48 overflow-hidden z-10">
          <Link href={`/${locale}/blog/${article.slug}`}>
            <Image
              fill
              className="absolute top-0 object-cover w-full h-full group-hover:scale-105 transition-transform duration-200"
              src={article.image}
              alt={article.title}
            />
          </Link>
        </div>
      )}

      {/* Контент */}
      <div className="p-6 flex flex-col flex-grow relative z-10">
        {/* Метаданные */}
        <div className="flex items-center justify-between mb-4">
          <span className="px-3 py-1 text-xs font-medium bg-violet-50 text-violet-600 rounded-full border border-violet-200">
            {getCategoryTranslation(article.category)}
          </span>
          <span className="text-xs text-gray-500">
            {article.readTime} {t("readTime")}
          </span>
        </div>

        {/* Заголовок */}
        <h3 className="text-lg font-semibold text-black leading-tight mb-3 group-hover:text-violet-600 transition-colors duration-200">
          <Link href={`/${locale}/blog/${article.slug}`}>
            {article.title}
          </Link>
        </h3>

        {/* Описание */}
        <p className="text-sm text-gray-600 leading-relaxed mb-4 flex-grow">
          {article.excerpt}
        </p>

        {/* Футер */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <div className="flex items-center text-xs text-gray-500">
            <span className="mr-2">{article.author}</span>
            <span>•</span>
            <span className="ml-2">{formatDate(article.publishedAt)}</span>
          </div>

          {/* Кнопка читать далее */}
          <Link 
            href={`/${locale}/blog/${article.slug}`} 
            className="inline-flex items-center text-sm font-medium text-violet-600 hover:text-violet-700 transition-colors duration-200"
          >
            {t("readMore")}
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="ml-1">
              <path d="M7 3L12 8L7 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </div>
      </div>
    </article>
  );
}
