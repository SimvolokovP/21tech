import { Header } from '@/components/Header'
import { Cases } from '@/sections/Casses'
import { ContactForm } from '@/sections/ContactForm'

export default function Page() {
	return (
		<div>
			<Header/>
			<Cases/>
			<ContactForm/>
		</div>
	)
}