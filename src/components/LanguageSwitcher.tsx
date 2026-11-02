import { Languages } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const LanguageSwitcher = () => {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.resolvedLanguage === "en" ? "en" : "es";

  const changeLanguage = (language: string) => {
    void i18n.changeLanguage(language);
  };

  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger asChild>
        <Button
          type="button"
          variant="ghost"
          size="sm"
          className="min-h-10 gap-1.5 px-2 text-slate-300 hover:bg-slate-800/60 hover:text-cyan-400 focus-visible:ring-cyan-400 focus-visible:ring-offset-[#0B0F17]"
          aria-label={t("language.label")}
        >
          <Languages className="h-4 w-4" aria-hidden="true" />
          <span aria-hidden="true" className="font-mono text-xs font-semibold uppercase tracking-wide">
            {currentLanguage === "en" ? t("language.enShort") : t("language.esShort")}
          </span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-44 border-slate-700 bg-slate-900 text-slate-100">
        <DropdownMenuLabel className="text-xs font-semibold uppercase tracking-wider text-slate-500">
          {t("language.menuLabel")}
        </DropdownMenuLabel>
        <DropdownMenuRadioGroup value={currentLanguage} onValueChange={changeLanguage}>
          <DropdownMenuRadioItem value="es" className="cursor-pointer focus:bg-slate-800 focus:text-cyan-300">
            {t("language.es")}
            <span className="ml-auto font-mono text-xs text-slate-500" aria-hidden="true">
              {t("language.esShort")}
            </span>
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="en" className="cursor-pointer focus:bg-slate-800 focus:text-cyan-300">
            {t("language.en")}
            <span className="ml-auto font-mono text-xs text-slate-500" aria-hidden="true">
              {t("language.enShort")}
            </span>
          </DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageSwitcher;
