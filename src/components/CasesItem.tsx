import { ICaseCard } from '@/models/ICaseCard'
import Image from 'next/image'
import Link from 'next/link'
import { useLocale } from 'use-intl'

interface CasesItemProps {
	caseCard: ICaseCard
}

export function CasesItem({ caseCard }: CasesItemProps) {
	const locale = useLocale()

	return (
		<li key={caseCard.title}>
			<article className='group border border-gray-200 bg-white rounded-xl hover:shadow-lg transition-all duration-200 flex flex-col h-full w-full relative overflow-hidden vercel-border'>
				{/* Технологичная сетка внутри карточки */}
				<div className='absolute inset-0 opacity-30 pointer-events-none'>
					<div
						className='absolute inset-0'
						style={{
							backgroundImage: `
                   linear-gradient(rgba(124, 58, 237, 0.02) 1px, transparent 1px),
                   linear-gradient(90deg, rgba(124, 58, 237, 0.02) 1px, transparent 1px)
                 `,
							backgroundSize: '20px 20px',
						}}
					></div>
				</div>

				<div className='relative h-[272px] overflow-hidden z-10'>
					{caseCard.mainImage && (
						<Link href={`/${locale}/case/${caseCard.id}`}>
							<Image
								fill
								className={`${
									caseCard.hoverImage && 'group-hover:opacity-0'
								} absolute top-0 object-cover w-full h-full rounded-t-xl transition-opacity duration-200`}
								src={caseCard.mainImage}
								alt={caseCard.title}
							/>
							{caseCard.hoverImage && (
								<Image
									fill
									className='absolute top-0 object-cover w-full h-full rounded-t-xl opacity-0 group-hover:opacity-100 transition-opacity duration-200'
									src={caseCard.hoverImage}
									alt={`${caseCard.title} - hover view`}
								/>
							)}
						</Link>
					)}
				</div>
				<div className='p-8 flex flex-col relative z-10'>
					<div className='flex items-center justify-between mb-4'>
						<div className='text-lg font-semibold text-black'>
							{caseCard.title}
						</div>
						{/* Vercel-style type badge */}
						<span className='px-3 py-1 text-xs font-medium bg-gray-100 text-gray-600 rounded-full border border-gray-200'>
							{caseCard.type}
						</span>
					</div>
					<p className='text-sm text-gray-500 leading-relaxed mb-4'>
						{caseCard.descr}
					</p>

					{/* Vercel-style читать далее */}
					<div className='mt-auto'>
						<Link
							href={`/${locale}/case/${caseCard.id}`}
							className='inline-flex items-center text-sm font-medium text-violet-600 hover:text-violet-700 transition-colors duration-200'
						>
							Подробнее
							<svg
								width='16'
								height='16'
								viewBox='0 0 16 16'
								fill='none'
								className='ml-1'
							>
								<path
									d='M7 3L12 8L7 13'
									stroke='currentColor'
									strokeWidth='1.5'
									strokeLinecap='round'
									strokeLinejoin='round'
								/>
							</svg>
						</Link>
					</div>
				</div>
			</article>
		</li>
	)
}
