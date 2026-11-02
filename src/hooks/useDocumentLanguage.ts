import { useEffect } from "react";
import { useTranslation } from "react-i18next";

const setMetaContent = (selector: string, content: string) => {
  document.querySelector<HTMLMetaElement>(selector)?.setAttribute("content", content);
};

export const useDocumentLanguage = () => {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const language = i18n.resolvedLanguage === "en" ? "en" : "es";

    document.documentElement.lang = language;
    document.title = t("meta.title");

    setMetaContent('meta[name="description"]', t("meta.description"));
    setMetaContent('meta[property="og:title"]', t("meta.ogTitle"));
    setMetaContent('meta[property="og:description"]', t("meta.ogDescription"));
    setMetaContent('meta[property="og:image:alt"]', t("meta.ogImageAlt"));
    setMetaContent('meta[property="og:locale"]', language === "en" ? "en_US" : "es_ES");
    setMetaContent('meta[name="twitter:title"]', t("meta.twitterTitle"));
    setMetaContent('meta[name="twitter:description"]', t("meta.twitterDescription"));
    setMetaContent('meta[name="twitter:image:alt"]', t("meta.twitterImageAlt"));
  }, [i18n.resolvedLanguage, t]);
};
