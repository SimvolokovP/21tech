import Footer from '@/components/Footer'
import { Header } from '@/components/Header'
import { ContactForm } from '@/sections/ContactForm'
import Services from '@/sections/Services'

export default function Page() {
	return (
		<div>
			<Header/>
			<Services/>
			<ContactForm/>
			<Footer/>
		</div>
	)
}