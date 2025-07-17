import { getTranslations } from 'next-intl/server';
import { Metadata } from 'next';
import { ArticleCard } from '@/components/ArticleCard';
import { ARTICLES } from '@/shared/data/articles.data';
import { IArticle } from '@/models/IArticle';

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  return {
    title: params.locale === 'ru' ? 'Блог | 21Tech' : 'Blog | 21Tech',
    description: params.locale === 'ru' 
      ? 'Статьи о технологиях, разработке и цифровой трансформации' 
      : 'Articles about technology, development and digital transformation',
  };
}

export default async function BlogPage() {
  const t = await getTranslations('Blog');
  
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 to-white py-16 sm:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              {t('title')}
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              {t('subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {t('featured')}
            </h2>
            <div className="w-24 h-1 bg-blue-600 rounded"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ARTICLES.slice(0, 3).map((article: IArticle) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>
        </div>
      </section>

      {/* Latest Articles */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {t('latest')}
            </h2>
            <div className="w-24 h-1 bg-blue-600 rounded"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ARTICLES.slice(3).map((article: IArticle) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Категории
            </h2>
            <div className="w-24 h-1 bg-blue-600 rounded"></div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {Object.entries(t.raw('categories')).map(([key, value]) => (
              <div
                key={key}
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 border border-gray-100 cursor-pointer hover:border-blue-200"
              >
                <h3 className="font-semibold text-gray-900 text-center">
                  {value as string}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
