import { setRequestLocale } from "next-intl/server";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { TechMarquee } from "@/components/tech-marquee";
import { Stats } from "@/components/stats";
import { Services } from "@/components/services";
import { Projects } from "@/components/projects";
import { CTASection } from "@/components/cta-section";
import { Footer } from "@/components/footer";

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <main
      id="top"
      className="font-sans bg-background text-foreground min-h-dvh"
    >
      <Header />
      <Hero />
      <TechMarquee />
      <Stats />
      <Services />
      <Projects />
      <CTASection />
      <Footer />
    </main>
  );
}
