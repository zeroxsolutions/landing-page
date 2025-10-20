import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div id="top" className="font-sans bg-cream text-ink min-h-dvh">
      {/* Header with logo */}
      <header className="sticky top-0 z-50 border-b border-brown/20 bg-paper/80 backdrop-blur-sm">
        <div className="container mx-auto px-6 sm:px-8 h-14 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link href="/#top" aria-label="ZeroXSolutions home">
              <Image src="/zerox-mark.svg" alt="ZeroXSolutions" width={112} height={28} priority className="h-7 w-auto" />
            </Link>
          </div>
          <nav className="hidden sm:flex items-center gap-6 text-sm">
            <a href="#services" className="hover:opacity-80">Dịch vụ</a>
            <a href="mailto:support@zeroxsolutions.com" className="hover:opacity-80">Liên hệ</a>
          </nav>
        </div>
      </header>

      {/* Minimal Top bar */}
      <div className="bg-gold/70 text-ink/90 text-xs sm:text-sm tracking-wide py-2 text-center">
        ZeroXSolutions — Web & Ứng dụng tối giản
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
              Startup nhỏ tập trung vào hai mảng: web và ứng dụng. Giải pháp gọn nhẹ, đủ dùng, hiệu quả.
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

      {/* Removed detailed process section for brevity */}

      {/* Removed tech stack grid for simplicity */}

      {/* Removed FAQs section */}
      {/* Removed About section */}

      {/* Services */}
      <section id="services">
        <div className="container mx-auto px-6 sm:px-8 py-16 sm:py-20">
          <h2 className="text-2xl sm:text-3xl font-semibold">Dịch vụ chủ lực</h2>
          <p className="mt-2 text-ink/70">Chỉ tập trung: web và ứng dụng.</p>

          <div className="mt-10 grid md:grid-cols-2 gap-6">
            <div className="rounded-lg border border-brown/20 bg-paper p-6 shadow-[0_1px_0_#00000010,0_6px_0_#d7c7b7]">
              <h3 className="text-xl font-semibold">Website hiện đại</h3>
              <p className="mt-2 text-ink/80">Thiết kế và phát triển website Next.js. Tốc độ cao, SEO tốt, triển khai linh hoạt.</p>
              <ul className="mt-4 text-ink/80 list-disc pl-5 space-y-1">
                <li>Landing page, blog, tài liệu</li>
                <li>SSR/SSG, i18n, phân quyền nội dung</li>
                <li>Tích hợp analytics, form, CMS headless</li>
              </ul>
            </div>
            <div className="rounded-lg border border-brown/20 bg-paper p-6 shadow-[0_1px_0_#00000010,0_6px_0_#d7c7b7]">
              <h3 className="text-xl font-semibold">Ứng dụng</h3>
              <p className="mt-2 text-ink/80">Ứng dụng web (PWA) và dashboard nội bộ. UX rõ ràng, quy trình gọn.</p>
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
            <p className="mt-2 text-cream/85">Mô tả ngắn ý tưởng của bạn; phản hồi trong 24 giờ.</p>
          </div>
          <div className="flex gap-3">
            <a href="mailto:support@zeroxsolutions.com" className="inline-flex items-center justify-center rounded-md bg-cream text-ink px-5 py-3 text-sm sm:text-base shadow-[0_2px_0_#a17854] hover:opacity-95 active:translate-y-px">Gửi email</a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-paper border-t border-brown/20">
        <div className="container mx-auto px-6 sm:px-8 py-8 text-sm text-ink/70 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div>© 2025 ZeroXSolutions</div>
          <div className="opacity-80">zeroxsolutions.com</div>
        </div>
      </footer>
    </div>
  );
}
