  import { getTranslations } from "next-intl/server";
import {
  Workflow,
  Brain,
  Code2,
  Bot,
  Settings,
  TrendingUp,
} from "lucide-react";


const icons = [
  Workflow,      
  Brain,         
  Code2,          
  Bot,           
  Settings,      
  TrendingUp,    
];

const Services = async () => {
  const t = await getTranslations("Services");

  const itemsObj = t.raw("items") as Record<string, string>;
  const items = Object.keys(itemsObj)
    .sort()
    .map((key) => itemsObj[key]);

  return (
    <section id="services" className="w-full section-indent px-4 relative">
      {/* Фоновая сетка */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute inset-0" 
             style={{
               backgroundImage: `
                 linear-gradient(rgba(124, 58, 237, 0.05) 1px, transparent 1px),
                 linear-gradient(90deg, rgba(124, 58, 237, 0.05) 1px, transparent 1px)
               `,
               backgroundSize: '60px 60px'
             }}>
        </div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Заголовок */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-12 h-0.5 bg-gradient-to-r from-transparent via-violet-500 to-transparent"></div>
            <span className="text-sm font-medium text-violet-600 uppercase tracking-wider px-4 py-2 rounded-full bg-violet-50 border border-violet-200/50">
              {t("title")}
            </span>
            <div className="w-12 h-0.5 bg-gradient-to-r from-transparent via-violet-500 to-transparent"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Технологические решения
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Минималистичный подход к созданию эффективных IT-решений
          </p>
        </div>

        {/* Сетка сервисов */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, idx) => {
            const Icon = icons[idx % icons.length];
            return (
              <div
                key={idx}
                className="group relative bg-white/80 backdrop-blur-sm border border-violet-200/30 rounded-2xl p-8 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-violet-500/10 tech-glow"
              >
                {/* Иконка */}
                <div className="flex flex-col items-center text-center">
                  <div className="mb-8 p-6 rounded-2xl bg-gradient-to-br from-violet-50 to-purple-50 border border-violet-200/50 group-hover:from-violet-500 group-hover:to-purple-500 transition-all duration-300">
                    <Icon size={32} strokeWidth={1.5} className="text-violet-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  
                  {/* Текст */}
                  <h3 className="text-lg font-semibold text-gray-900 leading-tight mb-3">
                    {item}
                  </h3>

                  {/* Технологичный индикатор */}
                  <div className="w-8 h-0.5 bg-gradient-to-r from-violet-500 to-purple-500 opacity-60 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Декоративные элементы */}
                <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-violet-400 opacity-50 group-hover:opacity-100 transition-opacity duration-300 pulse-tech"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
