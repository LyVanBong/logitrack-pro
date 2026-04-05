import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import NextTopLoader from 'nextjs-toploader';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | LT Logistics",
    default: "LT Logistics | Tra cứu Vận đơn Toàn cầu",
  },
  description: "Nền tảng vận tải thông minh LT Logistics. Tra cứu lộ trình, định vị kiện hàng và theo dõi chuỗi cung ứng theo thời gian thực.",
  keywords: ["LT", "LT Logistics", "tra cứu vận đơn", "vận tải", "tracking", "chuỗi cung ứng", "giao nhận"],
  openGraph: {
    title: "LT Logistics | Global Tracking",
    description: "Nền tảng vận tải thông minh LT Logistics. Tra cứu lộ trình, định vị kiện hàng theo thời gian thực.",
    url: "https://tracking.ttlogistics.com.vn",
    siteName: "LT Logistics",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "LT Logistics Global Tracking",
      },
    ],
    locale: "vi_VN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "LT Logistics | Tra cứu Vận đơn",
    description: "Tra cứu lộ trình và định vị kiện hàng thời gian thực.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <NextTopLoader
          color="#f97316"
          initialPosition={0.08}
          crawlSpeed={200}
          height={3}
          crawl={true}
          showSpinner={false}
          easing="ease"
          speed={200}
          shadow="none"
          template='<div class="fixed inset-0 z-[9999] bg-white/80 dark:bg-slate-950/80 backdrop-blur-sm flex flex-col items-center justify-center transition-all duration-300"><div class="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br from-slate-900 to-blue-900 shadow-xl flex items-center justify-center animate-pulse ring-1 ring-slate-900/10 relative overflow-hidden"><svg class="absolute inset-0 w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg"><defs><pattern id="tt-grid-load" width="6" height="6" patternUnits="userSpaceOnUse"><path d="M 6 0 L 0 0 0 6" fill="none" stroke="currentColor" class="text-white" stroke-width="0.5" /></pattern></defs><rect width="100%" height="100%" fill="url(#tt-grid-load)" /></svg><svg class="relative z-10 w-full h-full" viewBox="0 0 48 48"><text x="24" y="27" fill="white" font-size="22" font-weight="900" font-family="Inter, system-ui, sans-serif" text-anchor="middle" dominant-baseline="middle" letter-spacing="-1">LT</text></svg></div><div class="mt-4 text-slate-500 dark:text-slate-400 font-bold tracking-widest text-[10px] uppercase animate-pulse">Đang tải dữ liệu...</div></div><div role="bar" class="hidden"></div>'
          zIndex={1600}
        />
        {/* =======================
            HEADER (Navbar)
            ======================= */}
        <header className="w-full bg-white border-b border-slate-100 sticky top-0 z-50">
           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
              
              {/* Logo */}
              <div className="flex items-center gap-3 shrink-0 hover:opacity-80 transition-opacity">
                 <div className="relative flex items-center justify-center shrink-0 w-10 h-10 bg-gradient-to-br from-slate-900 to-blue-900 rounded-xl shadow-lg shadow-blue-900/10 overflow-hidden ring-1 ring-slate-900/5">
                    <svg className="absolute inset-0 w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
                      <defs>
                        <pattern id="tt-grid-header" width="6" height="6" patternUnits="userSpaceOnUse">
                          <path d="M 6 0 L 0 0 0 6" fill="none" stroke="currentColor" className="text-white" strokeWidth="0.5" />
                        </pattern>
                      </defs>
                      <rect width="100%" height="100%" fill="url(#tt-grid-header)" />
                    </svg>
                    <svg className="relative z-10 w-full h-full" viewBox="0 0 48 48">
                      <text x="24" y="27" fill="white" fontSize="22" fontWeight="900" fontFamily="Inter, system-ui, sans-serif" textAnchor="middle" dominantBaseline="middle" letterSpacing="-1">
                        LT
                      </text>
                    </svg>
                 </div>
                 <Link href="/" className="text-[22px] font-black tracking-tighter text-slate-900">
                   LT <span className="text-slate-500 font-bold tracking-tight">LOGISTICS</span>
                 </Link>
              </div>

              {/* Central Links (Desktop) */}
              <nav className="hidden md:flex items-center gap-10">
                 <Link href="/" className="text-[14px] font-bold text-emerald-600 relative after:content-[''] after:absolute after:bottom-[-6px] after:left-0 after:w-full after:h-0.5 after:bg-emerald-500">
                   Tra cứu
                 </Link>
                 <Link href="#" className="text-[14px] font-medium text-slate-500 hover:text-slate-800 transition-colors">
                   Mạng lưới toàn cầu
                 </Link>
                 <Link href="#" className="text-[14px] font-medium text-slate-500 hover:text-slate-800 transition-colors">
                   Liên hệ
                 </Link>
              </nav>

              {/* Right CTA */}
              <div className="flex items-center shrink-0">
                 <button className="bg-slate-950 hover:bg-slate-800 text-white text-[13px] font-semibold px-6 py-2.5 rounded-lg transition-transform focus:scale-95">
                   Hỗ trợ
                 </button>
              </div>
           </div>
        </header>

        {/* =======================
            MAIN CONTENT
            ======================= */}
        <main className="flex-1 w-full flex flex-col items-center">
          {children}
        </main>

        {/* =======================
            FOOTER
            ======================= */}
        <footer className="w-full bg-[#f8fafc] border-t border-slate-100 mt-20 pb-16 pt-24">
           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row justify-between gap-12 lg:gap-8">
              
              <div className="flex flex-col gap-5 max-w-sm">
                 <div className="flex items-center gap-3">
                    <div className="relative flex items-center justify-center shrink-0 w-10 h-10 bg-gradient-to-br from-slate-900 to-blue-900 rounded-xl shadow-lg shadow-blue-900/10 overflow-hidden ring-1 ring-slate-900/5">
                       <svg className="absolute inset-0 w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
                         <defs>
                           <pattern id="tt-grid-footer" width="6" height="6" patternUnits="userSpaceOnUse">
                             <path d="M 6 0 L 0 0 0 6" fill="none" stroke="currentColor" className="text-white" strokeWidth="0.5" />
                           </pattern>
                         </defs>
                         <rect width="100%" height="100%" fill="url(#tt-grid-footer)" />
                       </svg>
                         <svg className="relative z-10 w-full h-full" viewBox="0 0 48 48">
                           <text x="24" y="27" fill="white" fontSize="22" fontWeight="900" fontFamily="Inter, system-ui, sans-serif" textAnchor="middle" dominantBaseline="middle" letterSpacing="-1">
                             LT
                           </text>
                         </svg>
                    </div>
                    <div className="text-[20px] font-black tracking-tighter text-slate-900 leading-none">
                      LT <span className="text-slate-500 font-bold tracking-tight">LOGISTICS</span>
                    </div>
                 </div>
                 <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-widest leading-relaxed">
                   Kiến tạo tương lai chuỗi cung ứng toàn<br/>cầu với sự chính xác và tận tâm
                 </p>
              </div>

              <div className="flex gap-16 md:gap-24">
                 <div className="flex flex-col gap-5">
                    <h4 className="text-[11px] font-bold text-slate-800 uppercase tracking-widest">Công ty</h4>
                    <Link href="#" className="text-[12px] font-semibold text-slate-600 hover:text-slate-700 uppercase tracking-wider">Tuyển dụng</Link>
                    <Link href="#" className="text-[12px] font-semibold text-slate-600 hover:text-slate-700 uppercase tracking-wider">Báo cáo phát triển bền vững</Link>
                 </div>
                 <div className="flex flex-col gap-5">
                    <h4 className="text-[11px] font-bold text-slate-800 uppercase tracking-widest">Pháp lý</h4>
                    <Link href="#" className="text-[12px] font-semibold text-slate-600 hover:text-slate-700 uppercase tracking-wider">Chính sách bảo mật</Link>
                    <Link href="#" className="text-[12px] font-semibold text-slate-600 hover:text-slate-700 uppercase tracking-wider">Điều khoản dịch vụ</Link>
                 </div>
              </div>

              <div className="flex flex-col lg:items-end text-left lg:text-right max-w-xs">
                 <p className="text-[11px] font-semibold text-slate-600 uppercase tracking-widest leading-loose mb-2 mt-auto">
                   Kiến tạo tương lai chuỗi cung ứng toàn cầu<br/>với sự chính xác và tận tâm
                 </p>
                 <p className="text-[11px] font-bold text-emerald-600 uppercase tracking-widest">
                   Chính xác trong từng chuyển động.
                 </p>
              </div>

           </div>
        </footer>
      </body>
    </html>
  );
}
