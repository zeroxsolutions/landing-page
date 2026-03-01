"use client";

import { useTranslations } from "next-intl";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { GridPattern } from "@/components/grid-pattern";
import { AnimatedGradientText } from "@/components/ui/animated-gradient-text";
import { WordRotate } from "@/components/ui/word-rotate";
import { ArrowRight, Mail } from "lucide-react";

export function Hero() {
  const t = useTranslations("Hero");

  return (
    <section className="relative overflow-hidden">
      <GridPattern />

      <div className="container relative mx-auto px-6 sm:px-8 pb-16 pt-24 sm:pb-24 sm:pt-32">
        <div className="mx-auto max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] }}
          >
            <Badge
              variant="outline"
              className="mb-6 border-primary/20 bg-primary/5 px-3 py-1 text-xs font-medium text-primary overflow-hidden"
            >
              <WordRotate
                words={[t("rotate.word1"), t("rotate.word2"), t("rotate.word3")]}
                duration={3000}
                className="text-xs font-medium"
                motionProps={{
                  initial: { opacity: 0, y: -12 },
                  animate: { opacity: 1, y: 0 },
                  exit: { opacity: 0, y: 12 },
                  transition: { duration: 0.2, ease: "easeOut" },
                }}
              />
            </Badge>
          </motion.div>

          <motion.h1
            className="text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.1,
              ease: [0.21, 0.47, 0.32, 0.98],
            }}
          >
            {t("heading1")}
            <br />
            <AnimatedGradientText
              colorFrom="var(--primary)"
              colorTo="var(--accent)"
              speed={0.5}
              className="text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
            >
              {t("heading2")}
            </AnimatedGradientText>
          </motion.h1>

          <motion.p
            className="mx-auto mt-6 max-w-xl text-base text-muted-foreground sm:text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: 0.25,
              ease: [0.21, 0.47, 0.32, 0.98],
            }}
          >
            {t("subtext")}
          </motion.p>

          <motion.div
            className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: 0.4,
              ease: [0.21, 0.47, 0.32, 0.98],
            }}
          >
            <Button
              asChild
              size="lg"
              className="w-full rounded-full px-8 sm:w-auto"
            >
              <a href="#services">
                {t("ctaServices")}
                <ArrowRight className="size-4" />
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="w-full rounded-full px-8 sm:w-auto"
            >
              <a href="mailto:support@zeroxsolutions.com">
                <Mail className="size-4" />
                {t("ctaContact")}
              </a>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
