import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "ZeroXSolutions — Crafting modern tech from 2025",
    template: "%s | ZeroXSolutions",
  },
  description:
    "ZeroXSolutions là brand công nghệ nhỏ (từ 2025) xây giải pháp web, cloud và AI gọn nhẹ, hiệu quả.",
  keywords: [
    "ZeroXSolutions",
    "công nghệ",
    "web development",
    "cloud",
    "AI",
    "Next.js",
  ],
  applicationName: "ZeroXSolutions",
  metadataBase: new URL("https://zeroxsolutions.com"),
  openGraph: {
    title: "ZeroXSolutions — Crafting modern tech from 2025",
    description:
      "ZeroXSolutions là brand công nghệ nhỏ (từ 2025) xây giải pháp web, cloud và AI gọn nhẹ, hiệu quả.",
    type: "website",
    url: "https://zeroxsolutions.com",
    siteName: "ZeroXSolutions",
  },
  twitter: {
    card: "summary_large_image",
    title: "ZeroXSolutions — Crafting modern tech from 2025",
    description:
      "ZeroXSolutions là brand công nghệ nhỏ (từ 2025) xây giải pháp web, cloud và AI gọn nhẹ, hiệu quả.",
  },
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    shortcut: ["/icon.svg"],
    apple: [{ url: "/icon.svg" }],
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
    canonical: "https://zeroxsolutions.com/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "ZeroXSolutions",
              url: "https://zeroxsolutions.com/",
              logo: "https://zeroxsolutions.com/icon.svg",
              sameAs: [],
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
      <body
        className={`${roboto.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
