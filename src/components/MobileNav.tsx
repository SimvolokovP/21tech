import { Link } from '@/i18n/navigation'
import { useTranslations } from 'next-intl'
import { usePathname } from 'next/navigation'
import { match } from 'path-to-regexp'
import LocaleSwitcherToggle from './LocaleSwithcerToggle'

type MobileNavProps = {
	isOpen: boolean
	onClose: () => void
}

export function MobileNav({ isOpen }: MobileNavProps) {
	const t = useTranslations('Header')
	const pathname = usePathname()

	const navigation = [
		{ text: t('navigation.services'), href: '/services' },
		{ text: t('navigation.cases'), href: '/cases' },
		{ text: t('navigation.solutions'), href: '/solutions' },
		// { text: t('navigation.blog'), href: '/blog' },
		{ text: t('navigation.contacts'), href: '/contact-us' },
	]

	return (
		<div
			className={`fixed top-0 left-0 w-full h-screen bg-white z-40 pt-24 px-5 transition-all duration-300 transform ${
				isOpen ? 'translate-x-0' : 'translate-x-full'
			}`}
		>
			<div className='mb-6'>
				<LocaleSwitcherToggle />
			</div>
			<nav className='flex flex-col space-y-6'>
				{navigation.map((navLink, index) => {
					const matcher = match(`/:locale${navLink.href}`, {
						decode: decodeURIComponent,
					})
					const isActive = matcher(pathname)

					return (
						<Link key={index} href={navLink.href}>
							<span
								className={`${
									isActive ? 'text-black font-medium' : 'text-gray-700'
								} hover:text-black transition-colors text-[14px] cursor-pointer`}
							>
								{navLink.text}
							</span>
						</Link>
					)
				})}
			</nav>
		</div>
	)
}
