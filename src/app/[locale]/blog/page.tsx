import { ArticleCard } from '@/components/ArticleCard'
import { IArticle } from '@/models/IArticle'
import { ARTICLES } from '@/shared/data/articles.data'
import { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'

export async function generateMetadata({
	params,
}: {
	params: { locale: string }
}): Promise<Metadata> {
	return {
		title: params.locale === 'ru' ? 'Блог | 21scale' : 'Blog | 21scale',
		description:
			params.locale === 'ru'
				? 'Статьи о технологиях, разработке и цифровой трансформации'
				: 'Articles about technology, development and digital transformation',
	}
}

export default async function BlogPage() {
	const t = await getTranslations('Blog')

	return (
		<main className='min-h-screen bg-white'>
			<div className='w-full section-indent px-4 relative'>
				{/* Vercel-style фоновая сетка */}
				<div className='absolute inset-0 opacity-20 pointer-events-none'>
					<div
						className='absolute inset-0'
						style={{
							backgroundImage: `
                   linear-gradient(rgba(124, 58, 237, 0.03) 1px, transparent 1px),
                   linear-gradient(90deg, rgba(124, 58, 237, 0.03) 1px, transparent 1px)
                 `,
							backgroundSize: '40px 40px',
						}}
					></div>
				</div>

				<div className='max-w-6xl mx-auto relative z-10'>
					{/* Vercel-style заголовок */}
					<div className='text-center mb-20'>
						<div className='inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-gray-100 border border-gray-200 text-sm font-medium text-gray-700'>
							<div className='w-2 h-2 rounded-full bg-violet-500'></div>
							{t('title')}
						</div>
						<h1 className='text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-4 tracking-tight'>
							{t('title')}
						</h1>
						<p className='text-xl text-gray-500 max-w-2xl mx-auto font-normal'>
							{t('subtitle')}
						</p>
					</div>

					{/* Рекомендуемые статьи */}
					<div className='mb-20'>
						<div className='mb-12'>
							<h2 className='text-3xl font-bold text-black mb-4'>
								{t('featured')}
							</h2>
							<div className='w-24 h-1 bg-violet-600 rounded'></div>
						</div>

						<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
							{ARTICLES.slice(0, 3).map((article: IArticle) => (
								<ArticleCard key={article.slug} article={article} />
							))}
						</div>
					</div>

					{/* Все статьи */}
					<div className='mb-20'>
						<div className='mb-12'>
							<h2 className='text-3xl font-bold text-black mb-4'>
								{t('allArticles')}
							</h2>
							<div className='w-24 h-1 bg-violet-600 rounded'></div>
						</div>

						<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
							{ARTICLES.slice(3).map((article: IArticle) => (
								<ArticleCard key={article.slug} article={article} />
							))}
						</div>
					</div>

					{/* Категории */}
					<div className='mb-20'>
						<div className='mb-12'>
							<h2 className='text-3xl font-bold text-black mb-4'>Категории</h2>
							<div className='w-24 h-1 bg-violet-600 rounded'></div>
						</div>

						<div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4'>
							{Object.entries(t.raw('categories')).map(([key, value]) => (
								<div
									key={key}
									className='bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 border border-gray-200 cursor-pointer hover:border-violet-200 group'
								>
									<h3 className='font-semibold text-black text-center group-hover:text-violet-600 transition-colors duration-200'>
										{value as string}
									</h3>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</main>
	)
}
