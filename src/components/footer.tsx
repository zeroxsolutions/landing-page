import { useTranslations } from "next-intl";
import ZeroxIcon from "@/components/zerox";

export function Footer() {
  const t = useTranslations("Footer");

  return (
    <footer className="border-t border-border/60 bg-card/50">
      <div className="container mx-auto px-6 sm:px-8 py-10">
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
          <div className="flex items-center gap-3">
            <ZeroxIcon className="h-5 w-auto opacity-70" />
            <span className="text-xs text-muted-foreground">
              {t("tagline")}
            </span>
          </div>
          <div className="flex items-center gap-4 text-xs text-muted-foreground">
            <a
              href="mailto:support@zeroxsolutions.com"
              className="transition-colors hover:text-foreground cursor-pointer"
            >
              {t("email")}
            </a>
            <span className="text-border">|</span>
            <span>{t("copyright", { year: new Date().getFullYear() })}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
