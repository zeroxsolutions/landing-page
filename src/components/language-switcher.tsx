"use client";

import { useLocale } from "next-intl";
import { useRouter, usePathname } from "@/i18n/navigation";
import { Button } from "@/components/ui/button";

export function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const nextLocale = locale === "vi" ? "en" : "vi";
  const label = locale === "vi" ? "EN" : "VI";

  function handleSwitch() {
    router.replace(pathname, { locale: nextLocale });
  }

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={handleSwitch}
      aria-label={locale === "vi" ? "Switch to English" : "Chuyển sang tiếng Việt"}
      className="text-xs font-medium cursor-pointer"
    >
      {label}
    </Button>
  );
}
