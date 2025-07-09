import { NO_INDEX_PAGE } from "@/constans/ceo.constans";
import { Metadata } from "next";
import CasePage from "./CasePage";
import { Header } from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Case",
  ...NO_INDEX_PAGE,
};

export default function Page() {
  return (
    <div>
      <Header />
      <main className="min-h-screen bg-white text-black font-sans">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <CasePage />
        </div>
      </main>
      <Footer />
    </div>
  );
}
