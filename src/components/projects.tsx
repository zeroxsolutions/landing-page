"use client";

import { useTranslations } from "next-intl";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Check, ArrowUpRight, Wallet } from "lucide-react";
import { BlurFade } from "@/components/ui/blur-fade";
import { BorderBeam } from "@/components/ui/border-beam";

export function Projects() {
  const t = useTranslations("Projects");

  return (
    <section id="projects" className="border-t border-border/40">
      <div className="container mx-auto px-6 sm:px-8 py-20 sm:py-28">
        <BlurFade inView className="mx-auto max-w-2xl text-center">
          <Badge
            variant="outline"
            className="mb-4 border-primary/20 bg-primary/5 px-3 py-1 text-xs font-medium text-primary"
          >
            {t("badge")}
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            {t("heading")}
          </h2>
          <p className="mt-3 text-muted-foreground">{t("subtext")}</p>
        </BlurFade>

        <BlurFade delay={0.15} inView className="mx-auto mt-14 max-w-3xl">
          <div className="group relative overflow-hidden rounded-2xl border border-border/40 bg-card/50 backdrop-blur-sm transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5">
            <BorderBeam
              size={100}
              duration={10}
              colorFrom="var(--primary)"
              colorTo="var(--accent)"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/[0.04] via-transparent to-accent/[0.04]" />

            <div className="relative flex flex-col gap-6 p-6 sm:p-8 md:flex-row md:items-start md:gap-8">
              {/* Icon */}
              <div className="flex size-14 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary ring-1 ring-primary/20">
                <Wallet className="size-7" />
              </div>

              {/* Content */}
              <div className="flex-1">
                <div className="flex items-center gap-3">
                  <h3 className="text-2xl font-bold">{t("centify.title")}</h3>
                  <Badge variant="secondary" className="text-[10px] font-medium">
                    Live
                  </Badge>
                </div>

                <p className="mt-2 text-foreground/70 leading-relaxed">
                  {t("centify.description")}
                </p>

                <ul className="mt-5 space-y-2.5">
                  {(["privacy", "sync", "export"] as const).map((key) => (
                    <li
                      key={key}
                      className="flex items-start gap-2.5 text-sm text-foreground/70"
                    >
                      <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                      {t(`centify.features.${key}`)}
                    </li>
                  ))}
                </ul>

                <Button
                  asChild
                  className="mt-6 rounded-full"
                >
                  <a
                    href="https://centify.app"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {t("centify.cta")}
                    <ArrowUpRight className="size-4" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </BlurFade>
      </div>
    </section>
  );
}
