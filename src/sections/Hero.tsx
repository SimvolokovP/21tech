import { getTranslations } from "next-intl/server";

export async function Hero() {
  const t = await getTranslations("Hero");

  return (
    <section className="w-full text-center section-indent relative overflow-hidden">
      {/* Технологичные декоративные элементы */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-gradient-to-br from-violet-400/20 to-purple-400/20 blur-xl pulse-tech"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 rounded-full bg-gradient-to-br from-purple-400/20 to-indigo-400/20 blur-xl pulse-tech" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-gradient-to-br from-violet-300/10 to-purple-300/10 blur-3xl"></div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Технологичный индикатор */}
        <div className="inline-flex items-center gap-2 mb-8 px-6 py-3 rounded-full bg-white/80 backdrop-blur-sm border border-violet-200/50 tech-glow">
          <div className="w-2 h-2 rounded-full bg-violet-500 pulse-tech"></div>
          <span className="text-sm font-medium text-violet-600 uppercase tracking-wider">
            Tech Innovation
          </span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-violet-800 to-purple-800 leading-tight">
          {t("title")}
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
          {t("subtitle")}
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a href={`mailto:21tech@gmail.com`} className="btn">
            {t("cta")}
          </a>
          <button className="btn-secondary">
            Посмотреть работы
          </button>
        </div>

        {/* Технологичные иконки/декорации */}
        <div className="flex justify-center items-center gap-8 mt-16 opacity-60">
          <div className="w-12 h-0.5 bg-gradient-to-r from-transparent via-violet-400 to-transparent"></div>
          <div className="w-2 h-2 rounded-full bg-violet-400"></div>
          <div className="w-12 h-0.5 bg-gradient-to-r from-transparent via-violet-400 to-transparent"></div>
        </div>
      </div>
    </section>
  );
}
