import Footer from "@/components/Footer";
import { Header } from "@/components/Header";
import { Cases } from "@/sections/Casses";
import { ContactForm } from "@/sections/ContactForm";
import { Hero } from "@/sections/Hero";
import Services from "@/sections/Services";
import { Locale } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { use } from "react";
// import PageLayout from '@/components/PageLayout';

type Props = {
  params: Promise<{ locale: Locale }>;
};

export default function IndexPage({ params }: Props) {
  const { locale } = use(params);

  // Enable static rendering
  setRequestLocale(locale);

  // const t = useTranslations("MainPage");

  return (
    <div>
      <Header />
      <main className="min-h-screen bg-white text-black font-sans">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <Hero />
          <Services />
          <Cases />
          <ContactForm />
        </div>
      </main>
      <Footer />
    </div>
  );
}
