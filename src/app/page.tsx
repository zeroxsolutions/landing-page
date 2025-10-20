export default function Home() {
  return (
    <div className="font-sans bg-cream text-ink min-h-dvh">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "ZeroXSolutions làm mảng nào?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Chỉ web và ứng dụng. Không nhận dự án ngoài phạm vi này.",
                },
              },
              {
                "@type": "Question",
                name: "Thời gian triển khai?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Landing 2–4 tuần; ứng dụng tuỳ phạm vi (4–12+ tuần).",
                },
              },
              {
                "@type": "Question",
                name: "Chi phí dự án?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Theo phạm vi/kết quả. Có gói cố định cho landing page.",
                },
              },
              {
                "@type": "Question",
                name: "Bảo trì sau bàn giao?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Có gói bảo trì định kỳ và hỗ trợ theo giờ.",
                },
              },
            ],
          }),
        }}
      />
      {/* Header with logo */}
      <header className="sticky top-0 z-50 border-b border-brown/20 bg-paper/80 backdrop-blur-sm">
        <div className="container mx-auto px-6 sm:px-8 h-14 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="/zerox-mark.svg" alt="ZeroXSolutions" className="h-7 w-auto" />
          </div>
          <nav className="hidden sm:flex items-center gap-6 text-sm">
            <a href="#services" className="hover:opacity-80">Dịch vụ</a>
            <a href="mailto:support@zeroxsolutions.com" className="hover:opacity-80">Liên hệ</a>
          </nav>
        </div>
      </header>

      {/* Top bar */}
      <div className="bg-gold/70 text-ink/90 text-xs sm:text-sm tracking-wide py-2 text-center">
        ZeroXSolutions — Công nghệ gọn nhẹ, hiệu quả, từ 2025
      </div>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none [background:radial-gradient(ellipse_at_top,_rgba(167,129,91,.18),_transparent_60%),radial-gradient(ellipse_at_bottom,_rgba(55,38,25,.18),_transparent_55%)]" />
        <div className="container mx-auto px-6 sm:px-8 py-20 sm:py-28">
          <div className="max-w-3xl">
            <span className="inline-block uppercase tracking-[0.2em] text-[11px] sm:text-xs text-olive/80 mb-3">Zeroxsolutions.com</span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold leading-tight">
              Xây web và ứng dụng theo phong cách tối giản, tối ưu hiệu suất
            </h1>
            <p className="mt-5 text-base sm:text-lg md:text-xl text-ink/80 max-w-2xl">
              Chúng tôi thiết kế và phát triển sản phẩm số bằng Next.js, hạ tầng cloud và các dịch vụ hiện đại, tập trung duy nhất vào hai mảng: web và ứng dụng.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#services" className="inline-flex items-center justify-center rounded-md bg-olive text-cream px-5 py-3 text-sm sm:text-base shadow-[0_2px_0_#2a3a2a] hover:opacity-95 active:translate-y-px">
                Xem dịch vụ
              </a>
              <a href="mailto:support@zeroxsolutions.com" className="inline-flex items-center justify-center rounded-md border border-ink/20 bg-paper/60 backdrop-blur-sm text-ink px-5 py-3 text-sm sm:text-base hover:bg-paper">
                Liên hệ nhanh
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="border-t border-brown/20">
        <div className="container mx-auto px-6 sm:px-8 py-14 sm:py-16">
          <h2 className="text-2xl sm:text-3xl font-semibold">Quy trình hợp tác</h2>
          <ol className="mt-6 grid md:grid-cols-4 gap-6 text-ink/85">
            <li className="rounded-lg bg-paper p-5 border border-brown/20">
              <div className="text-sm uppercase tracking-wide text-olive/80">1. Khám phá</div>
              <p className="mt-2">Hiểu mục tiêu, phạm vi, KPI và ràng buộc. Đề xuất lộ trình.</p>
            </li>
            <li className="rounded-lg bg-paper p-5 border border-brown/20">
              <div className="text-sm uppercase tracking-wide text-olive/80">2. Thiết kế</div>
              <p className="mt-2">Wireframe/UI, kiến trúc Next.js, lựa chọn công nghệ nền tảng.</p>
            </li>
            <li className="rounded-lg bg-paper p-5 border border-brown/20">
              <div className="text-sm uppercase tracking-wide text-olive/80">3. Phát triển</div>
              <p className="mt-2">Lập trình, tích hợp API/CMS, tối ưu hiệu năng và SEO kỹ thuật.</p>
            </li>
            <li className="rounded-lg bg-paper p-5 border border-brown/20">
              <div className="text-sm uppercase tracking-wide text-olive/80">4. Triển khai</div>
              <p className="mt-2">CI/CD, giám sát, bảo trì định kỳ. Tài liệu và bàn giao.</p>
            </li>
          </ol>
        </div>
      </section>

      {/* Tech Stack */}
      <section>
        <div className="container mx-auto px-6 sm:px-8 py-14 sm:py-16">
          <h2 className="text-2xl sm:text-3xl font-semibold">Công nghệ</h2>
          <div className="mt-6 grid md:grid-cols-3 gap-6 text-ink/85">
            <div className="rounded-lg bg-paper p-5 border border-brown/20">
              <h3 className="font-semibold">Frontend</h3>
              <p className="mt-2">Next.js 15, React 19, Tailwind 4, i18n, SEO tối ưu.</p>
            </div>
            <div className="rounded-lg bg-paper p-5 border border-brown/20">
              <h3 className="font-semibold">Hạ tầng</h3>
              <p className="mt-2">Cloudflare/Vercel, CDN, edge functions, caching thông minh.</p>
            </div>
            <div className="rounded-lg bg-paper p-5 border border-brown/20">
              <h3 className="font-semibold">Tích hợp</h3>
              <p className="mt-2">CMS headless, Analytics, Form, Email, OAuth, SSO.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="border-t border-brown/20">
        <div className="container mx-auto px-6 sm:px-8 py-14 sm:py-16">
          <h2 className="text-2xl sm:text-3xl font-semibold">Câu hỏi thường gặp</h2>
          <div className="mt-6 grid md:grid-cols-2 gap-6 text-ink/85">
            <div className="rounded-lg bg-paper p-5 border border-brown/20">
              <h3 className="font-semibold">ZeroXSolutions làm mảng nào?</h3>
              <p className="mt-2">Chỉ web và ứng dụng. Không nhận dự án ngoài phạm vi này.</p>
            </div>
            <div className="rounded-lg bg-paper p-5 border border-brown/20">
              <h3 className="font-semibold">Thời gian triển khai?</h3>
              <p className="mt-2">Landing 2–4 tuần; ứng dụng tuỳ phạm vi (4–12+ tuần).</p>
            </div>
            <div className="rounded-lg bg-paper p-5 border border-brown/20">
              <h3 className="font-semibold">Chi phí dự án?</h3>
              <p className="mt-2">Theo phạm vi/kết quả. Có gói cố định cho landing page.</p>
            </div>
            <div className="rounded-lg bg-paper p-5 border border-brown/20">
              <h3 className="font-semibold">Bảo trì sau bàn giao?</h3>
              <p className="mt-2">Có gói bảo trì định kỳ và hỗ trợ theo giờ.</p>
            </div>
          </div>
        </div>
      </section>
      {/* About */}
      <section className="border-t border-b border-brown/20 bg-paper">
        <div className="container mx-auto px-6 sm:px-8 py-14 sm:py-16">
          <div className="grid md:grid-cols-3 gap-8 items-start">
            <div className="md:col-span-1">
              <h2 className="text-2xl sm:text-3xl font-semibold">Về ZeroXSolutions</h2>
            </div>
            <div className="md:col-span-2 text-ink/85 leading-relaxed">
              Sinh ra từ năm 2025, ZeroXSolutions theo đuổi triết lý tối giản: giải pháp vừa đủ tính năng, dễ vận hành, tôn trọng hiệu năng và trải nghiệm.
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services">
        <div className="container mx-auto px-6 sm:px-8 py-16 sm:py-20">
          <h2 className="text-2xl sm:text-3xl font-semibold">Dịch vụ chủ lực</h2>
          <p className="mt-2 text-ink/70">Chỉ tập trung vào hai mảng: web và ứng dụng.</p>

          <div className="mt-10 grid md:grid-cols-2 gap-6">
            <div className="rounded-lg border border-brown/20 bg-paper p-6 shadow-[0_1px_0_#00000010,0_6px_0_#d7c7b7]">
              <h3 className="text-xl font-semibold">Website hiện đại</h3>
              <p className="mt-2 text-ink/80">Thiết kế và phát triển website Next.js: tốc độ cao, SEO tốt, triển khai linh hoạt trên Cloudflare/Vercel.</p>
              <ul className="mt-4 text-ink/80 list-disc pl-5 space-y-1">
                <li>Landing page, blog, tài liệu</li>
                <li>SSR/SSG, i18n, phân quyền nội dung</li>
                <li>Tích hợp analytics, form, CMS headless</li>
              </ul>
            </div>
            <div className="rounded-lg border border-brown/20 bg-paper p-6 shadow-[0_1px_0_#00000010,0_6px_0_#d7c7b7]">
              <h3 className="text-xl font-semibold">Ứng dụng</h3>
              <p className="mt-2 text-ink/80">Ứng dụng web (PWA) và dashboard nội bộ: UX rõ ràng, quy trình gọn, chất lượng sản phẩm dẫn dắt.</p>
              <ul className="mt-4 text-ink/80 list-disc pl-5 space-y-1">
                <li>PWA, offline-first cơ bản</li>
                <li>Quy trình auth, vai trò, kiểm thử</li>
                <li>Kết nối API, automation nền tảng</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-rust text-cream">
        <div className="container mx-auto px-6 sm:px-8 py-14 sm:py-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-semibold">Bắt đầu cùng ZeroXSolutions</h3>
            <p className="mt-2 text-cream/85">Mô tả ngắn ý tưởng của bạn, chúng tôi sẽ phản hồi trong 24 giờ.</p>
          </div>
          <div className="flex gap-3">
            <a href="mailto:support@zeroxsolutions.com" className="inline-flex items-center justify-center rounded-md bg-cream text-ink px-5 py-3 text-sm sm:text-base shadow-[0_2px_0_#a17854] hover:opacity-95 active:translate-y-px">Gửi email</a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-paper border-t border-brown/20">
        <div className="container mx-auto px-6 sm:px-8 py-8 text-sm text-ink/70 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div>© {new Date().getFullYear()} ZeroXSolutions</div>
          <div className="opacity-80">zeroxsolutions.com</div>
        </div>
      </footer>
    </div>
  );
}
