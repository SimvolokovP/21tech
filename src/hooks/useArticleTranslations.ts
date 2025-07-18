'use client'

import { ARTICLES } from '@/shared/data/articles.data'
import { useTranslations } from 'next-intl'

export function useArticleTranslations() {
	const t = useTranslations('Articles')
	const blogT = useTranslations('Blog')

	const updateArticlesWithTranslations = () => {
		return ARTICLES.map(article => ({
			...article,
			title: t(article.title) || article.title,
			excerpt: t(article.excerpt) || article.excerpt,
			content: t(article.content) || article.content,
		}))
	}

	const getCategoryTranslation = (category: string) => {
		return blogT(`categories.${category}`) || category
	}

	const getArticleById = (id: string) => {
		const articles = updateArticlesWithTranslations()
		return articles.find(article => article.id === id)
	}

	const getArticleBySlug = (slug: string) => {
		const articles = updateArticlesWithTranslations()
		return articles.find(article => article.slug === slug)
	}

	const getFeaturedArticles = () => {
		return updateArticlesWithTranslations().filter(article => article.featured)
	}

	const getArticlesByCategory = (category: string) => {
		return updateArticlesWithTranslations().filter(
			article => article.category === category
		)
	}

	return {
		updateArticlesWithTranslations,
		getCategoryTranslation,
		getArticleById,
		getArticleBySlug,
		getFeaturedArticles,
		getArticlesByCategory,
	}
}
