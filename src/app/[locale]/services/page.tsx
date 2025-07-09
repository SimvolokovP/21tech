import Footer from "@/components/Footer";
import { Header } from "@/components/Header";
import { ContactForm } from "@/sections/ContactForm";
import Services from "@/sections/Services";

export default function Page() {
  return (
    <div>
      <Header />
      <main className="min-h-screen bg-white text-black font-sans">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <Services />
          <ContactForm />
        </div>
      </main>
      <Footer />
    </div>
  );
}
