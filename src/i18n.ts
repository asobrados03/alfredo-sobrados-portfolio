import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

import enCommon from "@/locales/en/common.json";
import enProjects from "@/locales/en/projects.json";
import esCommon from "@/locales/es/common.json";
import esProjects from "@/locales/es/projects.json";

export const defaultNS = "common" as const;

export const resources = {
  es: {
    common: esCommon,
    projects: esProjects,
  },
  en: {
    common: enCommon,
    projects: enProjects,
  },
} as const;

void i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    defaultNS,
    fallbackLng: "es",
    supportedLngs: ["es", "en"],
    load: "languageOnly",
    detection: {
      order: ["localStorage", "navigator"],
      caches: ["localStorage"],
      lookupLocalStorage: "portfolio-language",
    },
    interpolation: {
      escapeValue: false,
    },
    returnNull: false,
  });

declare module "i18next" {
  interface CustomTypeOptions {
    defaultNS: "common";
    resources: (typeof resources)["es"];
    returnNull: false;
    strictKeyChecks: true;
  }
}

export default i18n;
