"use client";

import { useTranslations } from "next-intl";
import { Clock, Target, Zap } from "lucide-react";
import { NumberTicker } from "@/components/ui/number-ticker";
import { BlurFade } from "@/components/ui/blur-fade";

export function Stats() {
  const t = useTranslations("Stats");

  return (
    <section className="border-y border-border/60 bg-muted/30">
      <div className="container mx-auto px-6 sm:px-8">
        <div className="grid divide-y divide-border/60 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          <BlurFade delay={0.1} inView className="flex items-center gap-4 py-8 sm:justify-center sm:px-6">
            <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <Clock className="size-5" />
            </div>
            <div>
              <p className="text-sm font-semibold text-foreground">
                {t("responsePrefix")}
                <NumberTicker value={24} className="text-sm font-semibold text-foreground" />
                {t("responseSuffix")}
              </p>
              <p className="text-xs text-muted-foreground">{t("responseDesc")}</p>
            </div>
          </BlurFade>

          <BlurFade delay={0.2} inView className="flex items-center gap-4 py-8 sm:justify-center sm:px-6">
            <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <Target className="size-5" />
            </div>
            <div>
              <p className="text-sm font-semibold text-foreground">
                <NumberTicker value={2} className="text-sm font-semibold text-foreground" />
                {t("focusSuffix")}
              </p>
              <p className="text-xs text-muted-foreground">{t("focusDesc")}</p>
            </div>
          </BlurFade>

          <BlurFade delay={0.3} inView className="flex items-center gap-4 py-8 sm:justify-center sm:px-6">
            <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <Zap className="size-5" />
            </div>
            <div>
              <p className="text-sm font-semibold text-foreground">
                {t("stack")}
              </p>
              <p className="text-xs text-muted-foreground">{t("stackDesc")}</p>
            </div>
          </BlurFade>
        </div>
      </div>
    </section>
  );
}
