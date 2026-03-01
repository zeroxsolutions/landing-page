"use client";

import { useTranslations } from "next-intl";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Globe, Smartphone, Check } from "lucide-react";
import { BlurFade } from "@/components/ui/blur-fade";
import { BorderBeam } from "@/components/ui/border-beam";

export function Services() {
  const t = useTranslations("Services");

  return (
    <section id="services">
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

        <div className="mx-auto mt-14 grid max-w-4xl gap-6 md:grid-cols-2">
          <BlurFade delay={0.15} inView>
            <Card className="group relative h-full overflow-hidden border-border/40 bg-card/50 backdrop-blur-sm transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5">
              <BorderBeam
                size={80}
                duration={8}
                colorFrom="var(--primary)"
                colorTo="var(--accent)"
                className="opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/[0.07] via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <CardHeader>
                <div className="mb-3 flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/20">
                  <Globe className="size-5" />
                </div>
                <CardTitle className="text-xl">{t("web.title")}</CardTitle>
                <CardDescription className="text-foreground/70">
                  {t("web.description")}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2.5">
                  {(["landing", "ssr", "integration"] as const).map((key) => (
                    <li
                      key={key}
                      className="flex items-start gap-2.5 text-sm text-foreground/70"
                    >
                      <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                      {t(`web.features.${key}`)}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </BlurFade>

          <BlurFade delay={0.25} inView>
            <Card className="group relative h-full overflow-hidden border-border/40 bg-card/50 backdrop-blur-sm transition-all duration-300 hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5">
              <BorderBeam
                size={80}
                duration={8}
                colorFrom="var(--accent)"
                colorTo="var(--primary)"
                className="opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-accent/[0.07] via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <CardHeader>
                <div className="mb-3 flex size-11 items-center justify-center rounded-xl bg-accent/15 text-accent-foreground ring-1 ring-accent/20">
                  <Smartphone className="size-5" />
                </div>
                <CardTitle className="text-xl">{t("app.title")}</CardTitle>
                <CardDescription className="text-foreground/70">
                  {t("app.description")}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2.5">
                  {(["pwa", "auth", "api"] as const).map((key) => (
                    <li
                      key={key}
                      className="flex items-start gap-2.5 text-sm text-foreground/70"
                    >
                      <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                      {t(`app.features.${key}`)}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </BlurFade>
        </div>
      </div>
    </section>
  );
}
