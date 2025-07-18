import { notFound } from 'next/navigation';
import { getTranslations } from 'next-intl/server';
import { Metadata } from 'next';
import { ARTICLES } from '@/shared/data/articles.data';
import { IArticle } from '@/models/IArticle';
import Image from 'next/image';
import Link from 'next/link';

interface ArticlePageProps {
  params: {
    locale: string;
    slug: string;
  };
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const article = ARTICLES.find(a => a.slug === params.slug);
  
  if (!article) {
    return {
      title: 'Article Not Found | 21Tech',
    };
  }

  return {
    title: `${article.title} | 21Tech`,
    description: article.excerpt,
  };
}

export function generateStaticParams() {
  return ARTICLES.map((article) => ({
    slug: article.slug,
  }));
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const article = ARTICLES.find(a => a.slug === params.slug);
  const t = await getTranslations('Blog');
  const tArticles = await getTranslations('Articles');
  
  if (!article) {
    notFound();
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString(params.locale === 'ru' ? 'ru-RU' : 'en-US', {
      year: 'numeric',
      month: 'long', 
      day: 'numeric'
    });
  };

  // Получаем рекомендуемые статьи (исключая текущую)
  const relatedArticles = ARTICLES.filter(a => 
    a.slug !== article.slug && 
    (a.category === article.category || a.tags.some(tag => article.tags.includes(tag)))
  ).slice(0, 3);

  return (
    <main className="min-h-screen bg-white">
      {/* Breadcrumbs */}
      <div className="bg-gray-50 py-4 border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4">
          <nav className="flex items-center space-x-2 text-sm text-gray-600">
            <Link href={`/${params.locale}`} className="hover:text-violet-600 transition-colors">
              Главная
            </Link>
            <span>/</span>
            <Link href={`/${params.locale}/blog`} className="hover:text-violet-600 transition-colors">
              {t('title')}
            </Link>
            <span>/</span>
            <span className="text-black font-medium">{tArticles(article.title)}</span>
          </nav>
        </div>
      </div>

      {/* Article Content */}
      <div className="w-full section-indent px-4 relative">
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

        <article className="max-w-4xl mx-auto relative z-10">
          {/* Article Meta */}
          <div className="mb-8">
            <div className="flex items-center space-x-4 text-sm text-gray-600 mb-6">
              <span className="bg-violet-50 text-violet-600 px-3 py-1 rounded-full border border-violet-200 font-medium">
                {t(`categories.${article.category}`)}
              </span>
              <span>{formatDate(article.publishedAt)}</span>
              <span>•</span>
              <span>{article.readTime} {t('readTime')}</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl font-bold text-black mb-6 leading-tight tracking-tight">
              {tArticles(article.title)}
            </h1>
            
            <p className="text-xl text-gray-500 mb-8 leading-relaxed font-normal">
              {tArticles(article.excerpt)}
            </p>

            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-violet-500 to-purple-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">21T</span>
                </div>
                <div>
                  <div className="font-medium text-black">{article.author}</div>
                  <div className="text-sm text-gray-500">{t('author')}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Article Image */}
          {article.image && (
            <div className="relative h-96 mb-12 rounded-xl overflow-hidden border border-gray-200">
              <Image
                fill
                className="absolute top-0 object-cover w-full h-full"
                src={article.image}
                alt={tArticles(article.title)}
              />
            </div>
          )}

          {/* Article Content */}
          <div className="prose prose-lg max-w-none mb-12">
            <div className="text-gray-700 leading-relaxed space-y-6">
              <p className="text-lg">
                {tArticles(article.content)}
              </p>
              
              {/* Добавим заглушку для полного контента */}
              <div className="space-y-6">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <p>
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <h2 className="text-2xl font-bold text-black mt-8 mb-4">Основные принципы</h2>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                </p>
              </div>
            </div>
          </div>

          {/* Tags */}
          <div className="pt-8 border-t border-gray-200 mb-12">
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-sm font-medium text-gray-600">{t('tags')}:</span>
              {article.tags.map(tag => (
                <span
                  key={tag}
                  className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm hover:bg-violet-50 hover:text-violet-700 transition-colors cursor-pointer border border-gray-200"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        </article>
      </div>

      {/* Related Articles */}
      {relatedArticles.length > 0 && (
        <div className="bg-gray-50 border-t border-gray-200">
          <div className="w-full section-indent px-4">
            <div className="max-w-6xl mx-auto">
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-black mb-4">
                  Похожие статьи
                </h2>
                <div className="w-24 h-1 bg-violet-600 rounded"></div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {relatedArticles.map((relatedArticle: IArticle) => (
                  <Link
                    key={relatedArticle.slug}
                    href={`/${params.locale}/blog/${relatedArticle.slug}`}
                    className="group"
                  >
                    <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-200 border border-gray-200 hover:border-violet-200">
                      {relatedArticle.image && (
                        <div className="relative h-32 mb-4 rounded-lg overflow-hidden">
                          <Image
                            fill
                            className="absolute top-0 object-cover w-full h-full group-hover:scale-105 transition-transform duration-200"
                            src={relatedArticle.image}
                            alt={tArticles(relatedArticle.title)}
                          />
                        </div>
                      )}
                      <h3 className="font-semibold text-black mb-2 line-clamp-2 group-hover:text-violet-600 transition-colors">
                        {tArticles(relatedArticle.title)}
                      </h3>
                      <p className="text-sm text-gray-500 line-clamp-3">
                        {tArticles(relatedArticle.excerpt)}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
