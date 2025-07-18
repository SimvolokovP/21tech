import { getTranslations } from 'next-intl/server'

export async function Hero() {
	const t = await getTranslations('Hero')

	return (
		<section className='w-full text-center section-indent relative overflow-hidden'>
			{/* Vercel-style фиолетовые блики */}
			<div className='absolute inset-0 overflow-hidden pointer-events-none'>
				<div className='absolute top-20 left-10 w-32 h-32 rounded-full bg-gradient-to-br from-violet-400/10 to-purple-400/5 blur-2xl'></div>
				<div className='absolute bottom-20 right-10 w-40 h-40 rounded-full bg-gradient-to-br from-purple-400/8 to-indigo-400/4 blur-3xl'></div>
				<div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-gradient-to-br from-violet-300/6 to-purple-300/3 blur-3xl'></div>
			</div>

			<div className='max-w-4xl mx-auto relative z-10'>
				{/* Vercel-style badge */}
				{/* <div className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full bg-gray-100 border border-gray-200 text-sm font-medium text-gray-700">
          <div className="w-2 h-2 rounded-full bg-violet-500"></div>
          Tech Innovation
        </div> */}

				{/* Vercel-style заголовок */}
				<h1 className='text-5xl md:text-7xl font-bold mb-8 text-black leading-tight tracking-tight'>
					{t('title')}
				</h1>

				{/* Vercel-style подзаголовок */}
				<p className='text-xl md:text-2xl text-gray-500 mb-12 max-w-3xl mx-auto leading-relaxed font-normal'>
					{t('subtitle')}
				</p>

				{/* Vercel-style кнопки */}
				<div className='flex flex-col sm:flex-row gap-4 justify-center items-center'>
					<a
						href={`mailto:21scale@gmail.com`}
						className='inline-flex items-center justify-center bg-violet-600 hover:bg-violet-700 text-white px-6 py-3 rounded-lg text-sm font-medium transition-all duration-200 border border-transparent'
					>
						{t('cta')}
					</a>
					<button className='inline-flex items-center justify-center bg-transparent hover:bg-gray-100 text-gray-700 hover:text-black px-6 py-3 rounded-lg text-sm font-medium transition-all duration-200 border border-gray-300'>
						{t('cta2')}
					</button>
				</div>

				
				{/* <div className='flex justify-center items-center gap-2 mt-16 opacity-40'>
					<div className='w-1 h-1 rounded-full bg-gray-400'></div>
					<div className='w-1 h-1 rounded-full bg-violet-500'></div>
					<div className='w-1 h-1 rounded-full bg-gray-400'></div>
				</div>  */}
			</div>
		</section>
	)
}
