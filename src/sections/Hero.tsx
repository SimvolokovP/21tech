import { getTranslations } from "next-intl/server";

export async function Hero() {
  const t = await getTranslations("Hero");

  return (
    <section className="w-full text-center section-indent relative">
      <div className="max-w-4xl mx-auto">
        {/* Vercel-style badge */}
        <div className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full bg-gray-100 border border-gray-200 text-sm font-medium text-gray-700">
          <div className="w-2 h-2 rounded-full bg-violet-500"></div>
          Tech Innovation
        </div>

        {/* Vercel-style заголовок */}
        <h1 className="text-5xl md:text-7xl font-bold mb-8 text-black leading-tight tracking-tight">
          {t("title")}
        </h1>
        
        {/* Vercel-style подзаголовок */}
        <p className="text-xl md:text-2xl text-gray-500 mb-12 max-w-3xl mx-auto leading-relaxed font-normal">
          {t("subtitle")}
        </p>
        
        {/* Vercel-style кнопки */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a href={`mailto:21tech@gmail.com`} className="inline-flex items-center justify-center bg-violet-600 hover:bg-violet-700 text-white px-6 py-3 rounded-lg text-sm font-medium transition-all duration-200 border border-transparent">
            {t("cta")}
          </a>
          <button className="inline-flex items-center justify-center bg-transparent hover:bg-gray-100 text-gray-700 hover:text-black px-6 py-3 rounded-lg text-sm font-medium transition-all duration-200 border border-gray-300">
            Посмотреть работы
          </button>
        </div>

        {/* Vercel-style декор */}
        <div className="flex justify-center items-center gap-2 mt-16 opacity-40">
          <div className="w-1 h-1 rounded-full bg-gray-400"></div>
          <div className="w-1 h-1 rounded-full bg-violet-500"></div>
          <div className="w-1 h-1 rounded-full bg-gray-400"></div>
        </div>
      </div>
    </section>
  );
}
