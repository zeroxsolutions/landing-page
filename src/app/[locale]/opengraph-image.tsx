import { ImageResponse } from "next/og";
import { routing } from "@/i18n/routing";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const content: Record<string, { title: string; subtitle: string }> = {
  vi: {
    title: "ZeroXSolutions",
    subtitle: "Web & Ứng dụng tối giản",
  },
  en: {
    title: "ZeroXSolutions",
    subtitle: "Minimalist Web & Apps",
  },
};

export default async function OGImage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const { title, subtitle } = content[locale] ?? content.vi;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #f5efe6 0%, #f2eadf 50%, #e8ddd0 100%)",
          position: "relative",
        }}
      >
        {/* Dot grid pattern */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            flexWrap: "wrap",
            opacity: 0.06,
          }}
        >
          {Array.from({ length: 600 }).map((_, i) => (
            <div
              key={i}
              style={{
                width: 40,
                height: 40,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  width: 3,
                  height: 3,
                  borderRadius: "50%",
                  background: "#2b2118",
                }}
              />
            </div>
          ))}
        </div>

        {/* Gradient orbs */}
        <div
          style={{
            position: "absolute",
            top: -80,
            left: 200,
            width: 400,
            height: 400,
            borderRadius: "50%",
            background: "rgba(62, 95, 67, 0.12)",
            filter: "blur(80px)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -60,
            right: 150,
            width: 350,
            height: 300,
            borderRadius: "50%",
            background: "rgba(216, 178, 105, 0.15)",
            filter: "blur(80px)",
          }}
        />

        {/* Content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 20,
            position: "relative",
          }}
        >
          {/* ZeroxIcon */}
          <svg
            width="72"
            height="72"
            viewBox="0 0 48 48"
            fill="none"
          >
            <rect width="48" height="48" rx="8" fill="#FACC15" />
            <path
              d="M14.864 32.952C14.5013 32.952 14.32 32.7493 14.32 32.344C14.32 32.28 14.3413 32.1627 14.384 31.992C14.8747 30.0933 15.728 28.3013 16.944 26.616C18.1813 24.9307 19.632 23.32 21.296 21.784C22.96 20.248 24.72 18.7333 26.576 17.24C28.4533 15.7467 30.2773 14.2427 32.048 12.728C31.7707 12.8133 31.4613 12.888 31.12 12.952C30.8 13.016 30.448 13.0907 30.064 13.176C29.808 13.2187 29.3707 13.2827 28.752 13.368C28.1333 13.4533 27.408 13.528 26.576 13.592C25.744 13.656 24.88 13.688 23.984 13.688C22.9387 13.688 21.904 13.624 20.88 13.496C19.8773 13.3467 19.024 13.1013 18.32 12.76C17.616 12.3973 17.1787 11.9067 17.008 11.288C16.9867 11.2027 16.9653 11.128 16.944 11.064C16.944 11 16.944 10.9253 16.944 10.84C16.944 10.328 17.136 9.89067 17.52 9.528C17.904 9.16533 18.2133 8.96267 18.448 8.92C18.5547 8.89867 18.64 8.888 18.704 8.888C18.768 8.86667 18.832 8.856 18.896 8.856C19.088 8.856 19.1413 8.94133 19.056 9.112C18.9707 9.26133 18.7467 9.51733 18.384 9.88C17.9787 10.2853 17.776 10.648 17.776 10.968C17.776 11.3093 18.0107 11.5867 18.48 11.8C18.9493 12.0133 19.5787 12.1733 20.368 12.28C21.1573 12.3653 22.032 12.408 22.992 12.408C24.016 12.408 25.0613 12.3653 26.128 12.28C27.216 12.1947 28.2613 12.088 29.264 11.96C30.2667 11.832 31.1413 11.6933 31.888 11.544C32.6347 11.3733 33.1787 11.2133 33.52 11.064C33.7333 10.9573 33.968 11.0427 34.224 11.32C34.48 11.5973 34.608 11.9387 34.608 12.344C34.608 12.5573 34.544 12.792 34.416 13.048C34.288 13.2827 34.0533 13.496 33.712 13.688C32.496 14.4133 31.1947 15.2027 29.808 16.056C28.4213 16.9093 27.0347 17.8587 25.648 18.904C24.2613 19.9493 22.9387 21.112 21.68 22.392C20.4213 23.6507 19.3013 25.0587 18.32 26.616C17.3387 28.152 16.5707 29.848 16.016 31.704C16.6347 31.32 17.4453 30.8827 18.448 30.392C19.4507 29.9013 20.5387 29.432 21.712 28.984C22.9067 28.5147 24.112 28.1307 25.328 27.832C26.544 27.5333 27.6747 27.384 28.72 27.384C29.872 27.384 30.7147 27.5333 31.248 27.832C31.8027 28.1093 32.1653 28.4507 32.336 28.856C32.5067 29.2613 32.592 29.6667 32.592 30.072C32.592 30.1787 32.5813 30.2853 32.56 30.392C32.56 30.4987 32.56 30.6053 32.56 30.712C32.5387 31.0533 32.4107 31.3413 32.176 31.576C31.9413 31.8107 31.7387 31.928 31.568 31.928C31.4827 31.928 31.44 31.8747 31.44 31.768C31.44 31.6613 31.4933 31.512 31.6 31.32C31.792 31 31.888 30.712 31.888 30.456C31.888 30.008 31.6107 29.688 31.056 29.496C30.5013 29.304 29.7653 29.208 28.848 29.208C27.9093 29.208 26.8533 29.2933 25.68 29.464C24.5067 29.6347 23.312 29.88 22.096 30.2C20.88 30.4987 19.728 30.8293 18.64 31.192C17.552 31.576 16.6347 31.9813 15.888 32.408C15.568 32.7707 15.2267 32.952 14.864 32.952Z"
              fill="#0C0A09"
            />
          </svg>

          <div
            style={{
              fontSize: 64,
              fontWeight: 700,
              color: "#2b2118",
              letterSpacing: -2,
              lineHeight: 1,
            }}
          >
            {title}
          </div>

          <div
            style={{
              fontSize: 28,
              color: "#4a3a2a",
              fontWeight: 400,
              opacity: 0.8,
            }}
          >
            {subtitle}
          </div>

          {/* Accent bar */}
          <div
            style={{
              marginTop: 16,
              width: 80,
              height: 4,
              borderRadius: 2,
              background: "linear-gradient(90deg, #3e5f43, #d8b269)",
            }}
          />
        </div>

        {/* URL */}
        <div
          style={{
            position: "absolute",
            bottom: 40,
            fontSize: 18,
            color: "#4a3a2a",
            opacity: 0.5,
            letterSpacing: 1,
          }}
        >
          zeroxsolutions.com
        </div>
      </div>
    ),
    { ...size }
  );
}
