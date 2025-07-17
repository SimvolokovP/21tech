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

const bgColors = [
  "bg-blue-50",     
  "bg-purple-50",   
  "bg-emerald-50",   
  "bg-orange-50",    
  "bg-indigo-50",    
  "bg-rose-50",      
];

const iconColors = [
  "text-blue-600",     
  "text-purple-600",  
  "text-emerald-600",  
  "text-orange-600",   
  "text-indigo-600",   
  "text-rose-600",    
];

const Services = async () => {
  const t = await getTranslations("Services");

  const itemsObj = t.raw("items") as Record<string, string>;
  const items = Object.keys(itemsObj)
    .sort()
    .map((key) => itemsObj[key]);

  // const items = Object.values(t("items"));

  return (
    <section id="services" className="w-full rounded-3xl section-indent px-4">
      <h2 className="text-3xl font-bold text-gray-900 mb-6 md:mb-12 text-center">
        {t("title")}
      </h2>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
        {items.map((item, idx) => {
          const Icon = icons[idx % icons.length];
          return (
            <div
              key={idx}
              className={`group bg-white border rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center ${
                bgColors[idx % bgColors.length]
              }`}
              style={{ 
                borderColor: "rgba(0,0,0,0.08)",
                background: `linear-gradient(135deg, white 60%, ${bgColors[idx % bgColors.length].includes('blue') ? '#eff6ff' : 
                  bgColors[idx % bgColors.length].includes('purple') ? '#faf5ff' :
                  bgColors[idx % bgColors.length].includes('emerald') ? '#ecfdf5' :
                  bgColors[idx % bgColors.length].includes('orange') ? '#fff7ed' :
                  bgColors[idx % bgColors.length].includes('indigo') ? '#eef2ff' : '#fff1f2'} 100%)`
              }}
            >
              <span
                className={`mb-6 p-3 rounded-xl ${
                  bgColors[idx % bgColors.length]
                } ${
                  iconColors[idx % iconColors.length]
                } group-hover:scale-110 transition-transform duration-300`}
              >
                <Icon size={32} strokeWidth={1.5} />
              </span>
              <span className="text-lg font-semibold text-gray-900">
                {item}
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
