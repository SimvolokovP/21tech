'use client'

import { useLocale } from 'next-intl'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { BurgerButton } from './BurgerButton'
import { DesktopNav } from './DesktopNav'
import LocaleSwitcherToggle from './LocaleSwithcerToggle'
import { MobileNav } from './MobileNav'

export function Header() {
	const [isVisible, setIsVisible] = useState(true)
	const [lastScrollY, setLastScrollY] = useState(0)
	const [scrollDirection, setScrollDirection] = useState<'up' | 'down'>('up')
	const [isMenuOpen, setIsMenuOpen] = useState(false)
	const locale = useLocale()

	useEffect(() => {
		const controlHeader = () => {
			const currentScrollY = window.scrollY

			if (currentScrollY > lastScrollY && scrollDirection !== 'down') {
				setScrollDirection('down')
				setIsVisible(false)
				setIsMenuOpen(false)
			} else if (currentScrollY < lastScrollY && scrollDirection !== 'up') {
				setScrollDirection('up')
				setIsVisible(true)
			}

			setLastScrollY(currentScrollY)
		}
		window.addEventListener('scroll', controlHeader)
		return () => window.removeEventListener('scroll', controlHeader)
	}, [lastScrollY, scrollDirection])

	return (
		<>
			<header
				className={`fixed top-0 left-0 right-0 w-full flex items-center justify-between bg-white/80 backdrop-blur-md border-b border-gray-200 p-[8px] z-50 transition-all duration-300 md:p-[20px] vercel-shadow ${
					isVisible ? 'translate-y-0' : '-translate-y-full'
				}`}
			>
				<div className='container flex items-center justify-between'>
					<div className='flex items-center grow basis-0'>
						<div className='rounded-lg flex items-center justify-center overflow-hidden hover:opacity-80 transition-opacity duration-200'>
							<Link href={`/${locale}`}>
								<Image
									priority
									src='/logo.png'
									alt='21tech logo'
									width={40}
									height={40}
									className='object-contain rounded-lg inline-block'
								/>
							</Link>
						</div>
					</div>

					<DesktopNav />

					<div className='flex items-center gap-[8px] grow basis-0 justify-end text-right'>
						<div className='hidden md:flex gap-[8px]'>
							<LocaleSwitcherToggle />
						</div>
						<BurgerButton
							isOpen={isMenuOpen}
							onClick={() => setIsMenuOpen(!isMenuOpen)}
						/>
					</div>
				</div>
			</header>
			<MobileNav isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
		</>
	)
}
