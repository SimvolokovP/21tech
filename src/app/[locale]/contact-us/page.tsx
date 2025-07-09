import Footer from "@/components/Footer";
import { Header } from "@/components/Header";
import { NO_INDEX_PAGE } from "@/constans/ceo.constans";
import { ContactForm } from "@/sections/ContactForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact us",
  ...NO_INDEX_PAGE,
};

export default function Page() {
  return (
    <div>
      <Header />
      <main className="min-h-screen bg-white text-black font-sans">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <ContactForm />
        </div>
      </main>
      <Footer />
    </div>
  );
}
