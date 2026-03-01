import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { ThemeProvider } from "next-themes";
import { routing } from "@/i18n/routing";
import "../globals.css";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin", "vietnamese"],
  weight: ["300", "400", "500", "700"],
  display: "swap",
});

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Metadata" });

  const base = "https://zeroxsolutions.com";
  const canonicalUrl =
    locale === routing.defaultLocale ? base : `${base}/${locale}`;

  return {
    title: {
      default: t("title"),
      template: "%s | ZeroXSolutions",
    },
    description: t("description"),
    keywords: t("keywords")
      .split(",")
      .map((k: string) => k.trim()),
    applicationName: "ZeroXSolutions",
    metadataBase: new URL(base),
    openGraph: {
      title: t("ogTitle"),
      description: t("ogDescription"),
      type: "website",
      url: canonicalUrl,
      siteName: "ZeroXSolutions",
    },
    twitter: {
      card: "summary_large_image",
      title: t("ogTitle"),
      description: t("ogDescription"),
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    alternates: {
      canonical: canonicalUrl,
      languages: {
        vi: `${base}/vi`,
        en: `${base}/en`,
        "x-default": base,
      },
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);

  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "ZeroXSolutions",
              description:
                "Minimalist web & app solutions. Lightweight, effective.",
              url: "https://zeroxsolutions.com/",
              logo: "https://zeroxsolutions.com/icon.png",
              contactPoint: [
                {
                  "@type": "ContactPoint",
                  email: "support@zeroxsolutions.com",
                  contactType: "customer support",
                  availableLanguage: ["vi", "en"],
                },
              ],
              foundingDate: "2025",
            }),
          }}
        />
      </head>
      <body className={`${roboto.variable} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <NextIntlClientProvider>{children}</NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
