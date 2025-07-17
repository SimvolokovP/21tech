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
      <div className="bg-gray-50 py-4">
        <div className="container mx-auto px-4">
          <nav className="flex items-center space-x-2 text-sm text-gray-600">
            <Link href={`/${params.locale}`} className="hover:text-blue-600">
              Главная
            </Link>
            <span>/</span>
            <Link href={`/${params.locale}/blog`} className="hover:text-blue-600">
              {t('title')}
            </Link>
            <span>/</span>
            <span className="text-gray-900">{tArticles(article.title)}</span>
          </nav>
        </div>
      </div>

      {/* Article Header */}
      <article className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Article Meta */}
            <div className="mb-8">
              <div className="flex items-center space-x-4 text-sm text-gray-600 mb-4">
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">
                  {t(`categories.${article.category}`)}
                </span>
                <span>{formatDate(article.publishedAt)}</span>
                <span>•</span>
                <span>{article.readTime} {t('readTime')}</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                {tArticles(article.title)}
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                {tArticles(article.excerpt)}
              </p>

              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">21T</span>
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">{article.author}</div>
                    <div className="text-sm text-gray-600">{t('author')}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Article Image */}
            {article.image && (
              <div className="relative h-96 mb-12 rounded-xl overflow-hidden">
                <Image
                  fill
                  className="absolute top-0 object-cover w-full h-full"
                  src={article.image}
                  alt={tArticles(article.title)}
                />
              </div>
            )}

            {/* Article Content */}
            <div className="prose prose-lg max-w-none">
              <div className="text-gray-800 leading-relaxed space-y-6">
                {/* Здесь будет полный контент статьи */}
                <p className="text-lg">
                  {tArticles(article.content)}
                </p>
                
                {/* Добавим заглушку для полного контента */}
                <div className="space-y-4">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                  <p>
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  </p>
                  <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Основные принципы</h2>
                  <p>
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                  </p>
                </div>
              </div>
            </div>

            {/* Tags */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-sm font-medium text-gray-600">{t('tags')}:</span>
                {article.tags.map(tag => (
                  <span
                    key={tag}
                    className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm hover:bg-gray-200 transition-colors"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* Related Articles */}
      {relatedArticles.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Похожие статьи
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {relatedArticles.map((relatedArticle: IArticle) => (
                  <Link
                    key={relatedArticle.slug}
                    href={`/${params.locale}/blog/${relatedArticle.slug}`}
                    className="group"
                  >
                    <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-200">
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
                      <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">
                        {tArticles(relatedArticle.title)}
                      </h3>
                      <p className="text-sm text-gray-600 line-clamp-3">
                        {tArticles(relatedArticle.excerpt)}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
