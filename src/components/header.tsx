"use client";

import { useTranslations } from "next-intl";
import ZeroxIcon from "@/components/zerox";
import { Link } from "@/i18n/navigation";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { LanguageSwitcher } from "./language-switcher";
import { ThemeToggle } from "./theme-toggle";
import { Mail } from "lucide-react";

export function Header() {
  const t = useTranslations("Header");

  return (
    <motion.header
      className="sticky top-0 z-50 w-full"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] }}
    >
      <div className="mx-auto max-w-5xl px-4 pt-3">
        <nav aria-label="Main navigation" className="flex items-center justify-between rounded-full border border-border/60 bg-card/70 px-5 py-2.5 shadow-sm backdrop-blur-md">
          <Link href="/#top" aria-label="ZeroXSolutions home">
            <ZeroxIcon className="h-7 w-auto" />
          </Link>

          <div className="flex items-center gap-1">
            <a
              href="#services"
              className="hidden rounded-full px-3 py-1.5 text-sm text-foreground/80 transition-colors hover:bg-muted hover:text-foreground sm:inline-block cursor-pointer"
            >
              {t("services")}
            </a>
            <a
              href="#projects"
              className="hidden rounded-full px-3 py-1.5 text-sm text-foreground/80 transition-colors hover:bg-muted hover:text-foreground sm:inline-block cursor-pointer"
            >
              {t("projects")}
            </a>
            <LanguageSwitcher />
            <ThemeToggle />
            <Button asChild size="sm" className="ml-1 rounded-full">
              <a href="mailto:support@zeroxsolutions.com" aria-label="Contact us by email">
                <Mail className="size-3.5" />
              </a>
            </Button>
          </div>
        </nav>
      </div>
    </motion.header>
  );
}
