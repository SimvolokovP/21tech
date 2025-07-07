import { Header } from "@/components/Header";
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
      {/* <p className="max-w-[590px]">
        {t.rich("description", {
          code: (chunks) => (
            <code className="font-mono text-white">{chunks}</code>
          ),
        })}
      </p> */}

    </div>
  );
}
