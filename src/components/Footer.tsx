'use client'

import { useTranslations } from 'use-intl'

const Footer = () => {
	const t = useTranslations('Contacts')

	return (
		<footer className='w-full py-12 border-t border-gray-200 mt-12 bg-gray-50 relative overflow-hidden'>
			{/* Технологичная сетка для Footer */}
			<div className='absolute inset-0 opacity-10 pointer-events-none'>
				<div
					className='absolute inset-0'
					style={{
						backgroundImage: `
                 linear-gradient(rgba(124, 58, 237, 0.05) 1px, transparent 1px),
                 linear-gradient(90deg, rgba(124, 58, 237, 0.05) 1px, transparent 1px)
               `,
						backgroundSize: '40px 40px',
					}}
				></div>
			</div>

			<div className='flex flex-col md:flex-row justify-between items-center container relative z-10'>
				<div className='text-gray-500 mb-6 flex w-full justify-start md:mb-0 text-sm'>
					&copy; 2025 21scale
				</div>
				<div className='flex space-x-6 flex-wrap'>
					<a
						href={`mailto:${t('email')}`}
						className='text-gray-600 hover:text-black transition-colors duration-200 flex items-center group text-sm'
					>
						<div className='p-2 rounded-lg bg-white border border-gray-200 mr-3 group-hover:border-violet-200 transition-all duration-200'>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								className='h-4 w-4 text-gray-600 group-hover:text-violet-600 transition-colors duration-200'
								viewBox='0 0 20 20'
								fill='currentColor'
							>
								<path d='M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z' />
								<path d='M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z' />
							</svg>
						</div>
						<span className='font-medium'>{t('email')}</span>
					</a>
					<a
						href='https://t.me/twentyone_scale'
						className='text-gray-600 hover:text-black transition-colors duration-200 flex items-center group text-sm'
					>
						<div className='p-2 rounded-lg bg-white border border-gray-200 mr-3 group-hover:border-violet-200 transition-all duration-200'>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								className='h-4 w-4 text-gray-600 group-hover:text-violet-600 transition-colors duration-200'
								viewBox='0 0 24 24'
								fill='currentColor'
							>
								<path d='M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.14.141-.259.259-.374.261l.213-3.053 5.56-5.022c.24-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.64-.203-.658-.64.136-.954l11.566-4.458c.538-.196 1.006.128.832.941z' />
							</svg>
						</div>
						<span className='font-medium'>{t('telegram')}</span>
					</a>
				</div>
			</div>
		</footer>
	)
}

export default Footer
