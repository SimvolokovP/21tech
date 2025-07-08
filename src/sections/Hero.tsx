import { getTranslations } from "next-intl/server";

export async function Hero() {
  const t = await getTranslations("Hero");

  return (
    <section className="w-full text-center section-indent after:block after:w-full">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-black to-gray-700">
          {t("title")}
        </h1>
        <p className="text-xl md:text-2xl text-gray-500 mb-10 max-w-2xl mx-auto">
          {t("subtitle")}
        </p>
        <a href={`mailto:21tech@gmail.com`} className="btn">
          {t("cta")}
        </a>
      </div>
    </section>
  );
}
