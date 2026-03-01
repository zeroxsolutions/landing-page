"use client";

import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { BlurFade } from "@/components/ui/blur-fade";

export function CTASection() {
  const t = useTranslations("CTA");

  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary via-primary to-primary/90" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(255,255,255,0.12),_transparent_50%)]" />
      {/* Subtle grid overlay */}
      <svg aria-hidden="true" className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.04]">
        <defs>
          <pattern
            id="cta-grid"
            x="0"
            y="0"
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
          >
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#cta-grid)" />
      </svg>

      <div className="relative container mx-auto px-6 sm:px-8 py-20 sm:py-24">
        <BlurFade inView className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl">
            {t("heading")}
          </h2>
          <p className="mt-4 text-primary-foreground/80 sm:text-lg">
            {t("subtext")}
          </p>
          <Button
            asChild
            size="lg"
            variant="secondary"
            className="mt-8 rounded-full bg-background px-8 text-foreground hover:bg-background/90"
          >
            <a href="mailto:support@zeroxsolutions.com">
              {t("button")}
              <ArrowRight className="size-4" />
            </a>
          </Button>
        </BlurFade>
      </div>
    </section>
  );
}
