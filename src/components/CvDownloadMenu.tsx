import { Download } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const CV_OPTIONS = [
  {
    id: "backend",
    href: "/cv-alfredo-sobrados-gonzalez.pdf",
    fileName: "CV-Alfredo-Sobrados-Gonzalez.pdf",
  },
  {
    id: "aiBackend",
    href: "/cv-alfredo-sobrados-gonzalez-ia.pdf",
    fileName: "CV-Alfredo-Sobrados-Gonzalez-IA.pdf",
  },
  {
    id: "fullStackAi",
    href: "/cv-alfredo-sobrados-gonzalez-software-ia.pdf",
    fileName: "CV-Alfredo-Sobrados-Gonzalez-FullStack-IA.pdf",
  },
] as const;

interface CvDownloadMenuProps {
  /** Ajusta el disparador al estilo de Contacto o al del pie de página. */
  variant?: "contact" | "footer";
}

const CvDownloadMenu = ({ variant = "contact" }: CvDownloadMenuProps) => {
  const { t } = useTranslation();

  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger asChild>
        {variant === "footer" ? (
          <button
            type="button"
            className="inline-flex items-center gap-2 rounded-md border border-slate-700 px-3 py-2 text-sm font-medium text-slate-200 transition-colors hover:border-cyan-400/60 hover:bg-cyan-400/10 hover:text-cyan-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
          >
            {t("cv.trigger")}
            <Download className="h-4 w-4" aria-hidden="true" />
          </button>
        ) : (
          <Button
            type="button"
            variant="outline"
            className="border-slate-300 bg-transparent text-white hover:bg-white hover:text-slate-900"
          >
            {t("cv.trigger")}
            <Download className="ml-2 h-4 w-4" aria-hidden="true" />
          </Button>
        )}
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="center"
        className="w-72 border-slate-700 bg-slate-900 text-slate-200"
      >
        <DropdownMenuLabel className="font-mono text-xs font-semibold uppercase tracking-wider text-slate-400">
          {t("cv.menuLabel")}
        </DropdownMenuLabel>
        <DropdownMenuSeparator className="bg-slate-800" />
        {CV_OPTIONS.map(({ id, href, fileName }) => (
          <DropdownMenuItem key={id} asChild>
            <a
              href={href}
              download={fileName}
              className="cursor-pointer items-start gap-3 py-2 focus:bg-slate-800 focus:text-cyan-300"
            >
              <Download className="mt-0.5 h-4 w-4 shrink-0 text-cyan-400" aria-hidden="true" />
              <span className="flex flex-col gap-0.5">
                <span className="font-medium">{t(`cv.options.${id}.label`)}</span>
                <span className="text-xs leading-snug text-slate-400">
                  {t(`cv.options.${id}.description`)}
                </span>
              </span>
            </a>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default CvDownloadMenu;
