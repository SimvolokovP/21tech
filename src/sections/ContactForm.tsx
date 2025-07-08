"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  ContactFormValues,
  getContactFormSchema,
} from "@/lib/contact-form.schema";
import { useTranslations } from "use-intl";

export function ContactForm() {
  const t = useTranslations("ContactsForm");

  const schema = getContactFormSchema(t);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    watch,
  } = useForm<ContactFormValues>({
    resolver: zodResolver(schema),
    mode: "onChange",
  });

  const agree = watch("agree");

  //   const onSubmit = (data: ContactFormValues) => {
  //     const subject = encodeURIComponent("Новый проект с сайта 21tech");
  //     const body = encodeURIComponent(
  //       `Имя: ${data.name}\nEmail: ${data.email}\nТелефон: ${data.phone || "—"}\n\n${data.message}`
  //     );
  //     window.location.href = `mailto:${"EMAIL"}?subject=${subject}&body=${body}`;
  //   };

  const onSubmit = (data: ContactFormValues) => {
    console.log("Отправка данных:", data);
  };

  return (
    <section className="w-full section-indent px-4" id="contacts">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-12">
        {/* Left column */}
        <div className="flex-1">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            {t("title") || "Давайте обсудим ваш проект"}
          </h2>
          <p className="text-lg text-gray-500 mb-8">
            {t("subtitle") ||
              "Оставьте свои контакты и мы свяжемся с вами в течение дня."}
          </p>
          <p className="text-gray-500 mb-4">
            {t("or") || "Или напишите нам сами:"}
          </p>
          <a
            href={`https://t.me/$"".replace("@", "")}`}
            className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 rounded-lg text-gray-900 hover:bg-gray-100 transition"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t("telegram") || "Связаться с нами в Telegram"}
          </a>
        </div>

        {/* Right column (форма) */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex-1 bg-white shadow-md rounded-lg p-4 md:p-6 flex flex-col gap-4"
        >
          <div>
            <input
              type="email"
              placeholder={t("placeholders.email") || "Электронная почта"}
              className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-900 w-full"
              {...register("email")}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          <div>
            <input
              type="text"
              placeholder={t("placeholders.name") || "Ваше имя"}
              className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-900 w-full"
              {...register("name")}
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
            )}
          </div>

          <div>
            <input
              type="tel"
              placeholder={t("placeholders.phone") || "Телефон"}
              className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-900 w-full"
              {...register("phone")}
            />
          </div>

          <div>
            <textarea
              placeholder={
                t("placeholders.message") || "Расскажите о вашей задаче"
              }
              rows={4}
              className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-900 resize-none w-full"
              {...register("message")}
            />
            {errors.message && (
              <p className="text-red-500 text-sm mt-1">
                {errors.message.message}
              </p>
            )}
          </div>

          <div>
            <label className="flex items-center gap-2 text-gray-500 text-xs md:text-sm">
              <input
                type="checkbox"
                {...register("agree")}
                className="accent-gray-900"
              />
              {t("agree")}
              <span>
                {/* {t("policy") || "Я согласен с "} */}
                <a
                  href="/privacy"
                  className="underline text-gray-900 hover:text-gray-700"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t("policy") || "политикой конфиденциальности"}
                </a>
              </span>
            </label>
            {errors.agree && (
              <p className="text-red-500 text-sm mt-1">
                {errors.agree.message}
              </p>
            )}
          </div>

          <button type="submit" disabled={!isValid || !agree} className="btn text-sm md:text-base">
            {t("title") || "Давайте обсудим ваш проект"}
          </button>
        </form>
      </div>
    </section>
  );
}
