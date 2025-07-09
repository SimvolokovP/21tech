import Footer from "@/components/Footer";
import { Header } from "@/components/Header";
import { Cases } from "@/sections/Cases";
import { ContactForm } from "@/sections/ContactForm";

export default function Page() {
  return (
    <div>
      <Header />
      <main className="min-h-screen bg-white text-black font-sans">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <Cases />
          <ContactForm />
        </div>
      </main>
      <Footer />
    </div>
  );
}
