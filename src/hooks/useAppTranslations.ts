"use client";

export type AppTranslations = {
  Error: {
    description: string;
    title: string;
  };
  MainPage: {
    description: string;
    title: string;
  };
  LocaleLayout: {
    title: string;
  };
  LocaleSwitcher: {
    label: string;
    locale: string;
  };
  Manifest: {
    name: string;
  };
  Navigation: {
    home: string;
    pathnames: string;
  };
  Header: {
    navigation: string[];
    link: string;
  };
  Hero: {
    title: string;
    subtitle: string;
    cta: string;
  };
  Services: {
    title: string;
    items: {
      [key: string]: string;
    };
  };
  Contacts: {
    email: string;
    telegram: string;
  };
  ContactsForm: {
    title: string;
    subtitle: string;
    or: string;
    button: string;
    telegram: string;
    policy: string;
    placeholder_email: string;
    placeholder_name: string;
    placeholder_phone: string;
    placeholder_message: string;
    agree: string;
    privacyPolicy: string;
  };
};

import { useTranslations as useNextIntlTranslations } from "next-intl";

export function useAppTranslations<K extends keyof AppTranslations>(
  namespace: K
) {
  const t = useNextIntlTranslations(namespace);
  return t as unknown as {
    <T extends keyof AppTranslations[K]>(key: T): AppTranslations[K][T];
    raw<T extends keyof AppTranslations[K]>(key: T): AppTranslations[K][T];
  };
}
