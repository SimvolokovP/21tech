import { Link } from '@/i18n/navigation'
import { useTranslations } from 'next-intl'

export function DesktopNav() {
	const t = useTranslations('Header')

	const navigation = [
		{ text: t('navigation.services'), href: '/services' },
		{ text: t('navigation.cases'), href: '/cases' },
		{ text: t('navigation.solutions'), href: '/solutions' },
		{ text: t('navigation.contacts'), href: '/contact-us' },
	]

	return (
		<nav className='hidden md:flex flex-1 justify-center'>
			<ul className='flex space-x-8 text-gray-700 font-medium'>
				{navigation.map((navLink, index) => (
					<Link key={index} href={`/${navLink.href}`}>
						<li>
							<span className='hover:text-black transition-colors text-[14px] cursor-pointer'>
								{navLink.text}
							</span>
						</li>
					</Link>
				))}
			</ul>
		</nav>
	)
}
