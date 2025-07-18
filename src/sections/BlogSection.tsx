'use client'

import { ArticleCard } from '@/components/ArticleCard'
import { Link } from '@/i18n/navigation'
import { IArticle } from '@/models/IArticle'
import { ARTICLES } from '@/shared/data/articles.data'
import { useTranslations } from 'next-intl'

export function BlogSection() {
	const t = useTranslations('Blog')

	// Получаем последние 3 статьи
	const latestArticles = ARTICLES.slice(0, 3)

	return (
		<section id='blog' className='w-full section-indent px-4 relative'>
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
					<h2 className='text-4xl md:text-5xl font-bold text-black mb-4 tracking-tight'>
						{t('latest')}
					</h2>
					<p className='text-xl text-gray-500 max-w-2xl mx-auto font-normal'>
						{t('subtitle')}
					</p>
				</div>

				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12'>
					{latestArticles.map((article: IArticle) => (
						<ArticleCard key={article.slug} article={article} />
					))}
				</div>

				<div className='w-full flex justify-center mt-12'>
					<Link href='/blog'>
						<button className='inline-flex items-center justify-center bg-transparent hover:bg-gray-100 text-gray-700 hover:text-black px-6 py-3 rounded-lg text-sm font-medium transition-all duration-200 border border-gray-300'>
							{t('allArticles')}
						</button>
					</Link>
				</div>
			</div>
		</section>
	)
}
