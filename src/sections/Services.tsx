"use client";

import {
  HiOutlineLightningBolt,
  HiOutlineChip,
  HiOutlinePuzzle,
  HiOutlineChatAlt2,
  HiOutlineCog,
  HiOutlineAdjustments,
} from "react-icons/hi";
import { useTranslations } from "use-intl";

const icons = [
  HiOutlineLightningBolt,
  HiOutlineChip,
  HiOutlinePuzzle,
  HiOutlineChatAlt2,
  HiOutlineCog,
  HiOutlineAdjustments,
];

const bgColors = [
  "bg-blue-50",
  "bg-green-50",
  "bg-purple-50",
  "bg-pink-50",
  "bg-pink-50",
  "bg-gray-100",
];

const iconColors = [
  "text-blue-600",
  "text-green-600",
  "text-purple-600",
  "text-pink-600",
  "text-yellow-600",
  "text-gray-600",
];

const Services = () => {
  const t = useTranslations("Services");

  const itemsObj = t.raw("items") as Record<string, string>;
  const items = Object.keys(itemsObj)
    .sort()
    .map(key => itemsObj[key]);

  // const items = Object.values(t("items"));

  return (
    <section className="w-full py-20  rounded-3xl my-12 px-4">
      <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
        {t("title")}
      </h2>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
        {items.map((item, idx) => {
          const Icon = icons[idx % icons.length];
          return (
            <div
              key={idx}
              className={`group bg-white border rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center ${
                bgColors[idx % bgColors.length]
              }`}
              style={{ borderColor: "hsla(0,0%,92%,1)" }}
            >
              <span
                className={`mb-4 text-4xl ${
                  iconColors[idx % iconColors.length]
                } group-hover:scale-110 transition-transform`}
              >
                <Icon />
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
