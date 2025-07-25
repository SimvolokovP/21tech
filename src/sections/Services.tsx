import { Bot, Brain, Code2, Settings, TrendingUp, Workflow } from 'lucide-react'
import { getTranslations } from 'next-intl/server'

const icons = [Workflow, Brain, Code2, Bot, Settings, TrendingUp]

const Services = async () => {
	const t = await getTranslations('Services')

	const itemsObj = t.raw('items') as Record<string, string>
	const items = Object.keys(itemsObj)
		.sort()
		.map(key => itemsObj[key])

	return (
		<section id='services' className='w-full section-indent px-4 relative'>
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
            {t('title')}
					</h2>
					{/* <p className='text-xl text-gray-500 max-w-2xl mx-auto font-normal'>
						Минималистичный подход к созданию эффективных IT-решений
					</p> */}
				</div>

				{/* Vercel-style сетка сервисов */}
				<div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3'>
					{items.map((item, idx) => {
						const Icon = icons[idx % icons.length]
						return (
							<div
								key={idx}
								className='group relative bg-white border border-gray-200 rounded-xl p-8 transition-all duration-200 hover:shadow-lg vercel-border overflow-hidden'
							>
								{/* Дополнительная сетка внутри карточки */}
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

								{/* Иконка */}
								<div className='flex flex-col items-start text-left relative z-10'>
									<div className='mb-6 p-4 rounded-lg bg-gray-50 border border-gray-200 group-hover:bg-violet-50 group-hover:border-violet-200 transition-all duration-200'>
										<Icon
											size={24}
											strokeWidth={1.5}
											className='text-gray-700 group-hover:text-violet-600 transition-colors duration-200'
										/>
									</div>

									{/* Текст */}
									<h3 className='text-lg font-semibold text-black leading-tight mb-2'>
										{item}
									</h3>

									{/* Vercel-style стрелка */}
									<div className='mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200'>
										<svg
											width='16'
											height='16'
											viewBox='0 0 16 16'
											fill='none'
											className='text-violet-600'
										>
											<path
												d='M7 3L12 8L7 13'
												stroke='currentColor'
												strokeWidth='1.5'
												strokeLinecap='round'
												strokeLinejoin='round'
											/>
										</svg>
									</div>
								</div>
							</div>
						)
					})}
				</div>
			</div>
		</section>
	)
}

export default Services
