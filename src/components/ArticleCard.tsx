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
  const tArticles = useTranslations("Articles");
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
    <article className="group border border-gray-200 bg-white rounded-xl hover:shadow-lg transition-all duration-200 flex flex-col h-full w-full relative overflow-hidden vercel-border">
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
      <div className="relative h-[272px] overflow-hidden z-10">
        {article.image ? (
          <Link href={`/${locale}/blog/${article.slug}`}>
            <Image
              fill
              className="absolute top-0 object-cover w-full h-full rounded-t-xl group-hover:scale-105 transition-transform duration-200"
              src={article.image}
              alt={tArticles(article.title)}
            />
          </Link>
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center rounded-t-xl">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" className="text-gray-400">
              <path d="M19 3H5C3.89 3 3 3.89 3 5V19C3 20.11 3.89 21 5 21H19C20.11 21 21 20.11 21 19V5C21 3.89 20.11 3 19 3ZM19 19H5V5H19V19Z" fill="currentColor"/>
              <path d="M13.96 12.17L11.06 15.96L9 13.44L5.5 18H18.5L13.96 12.17Z" fill="currentColor"/>
            </svg>
          </div>
        )}
      </div>

      {/* Контент */}
      <div className="p-8 flex flex-col relative z-10">
        <div className="flex items-center justify-between mb-4">
          <div className="text-lg font-semibold text-black line-clamp-2">
            <Link href={`/${locale}/blog/${article.slug}`} className="group-hover:text-violet-600 transition-colors duration-200">
              {tArticles(article.title)}
            </Link>
          </div>
          {/* Категория */}
          <span className="px-3 py-1 text-xs font-medium bg-gray-100 text-gray-600 rounded-full border border-gray-200 whitespace-nowrap ml-4">
            {getCategoryTranslation(article.category)}
          </span>
        </div>

        <p className="text-sm text-gray-500 leading-relaxed mb-4 line-clamp-3">
          {tArticles(article.excerpt)}
        </p>

        {/* Мета-информация */}
        <div className="flex items-center text-xs text-gray-400 mb-4 gap-4">
          <span>{formatDate(article.publishedAt)}</span>
          <span>•</span>
          <span>{article.readTime} {t('readTime')}</span>
        </div>

        {/* Теги */}
        <div className="flex flex-wrap gap-2 mb-4">
          {article.tags.slice(0, 3).map(tag => (
            <span
              key={tag}
              className="px-2 py-1 text-xs bg-violet-50 text-violet-700 rounded border border-violet-100"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Читать далее */}
        <div className="mt-auto">
          <Link 
            href={`/${locale}/blog/${article.slug}`} 
            className="inline-flex items-center text-sm font-medium text-violet-600 hover:text-violet-700 transition-colors duration-200"
          >
            {t('readMore')}
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="ml-1">
              <path d="M7 3L12 8L7 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </div>
      </div>
    </article>
  );
}
