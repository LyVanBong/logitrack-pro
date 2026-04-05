import type {Metadata} from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from 'sonner';
import NextTopLoader from 'nextjs-toploader';
import { MarketingPopup } from '@repo/ui';

const inter = Inter({ subsets: ['latin', 'vietnamese'] });

export const metadata: Metadata = {
  title: 'LogiTrack Pro | Enterprise Transport Management',
  description: 'Hệ thống Quản trị Vận tải và Logistics toàn diện dành cho Doanh nghiệp, tối ưu hóa quy trình điều vận, quản trị đội xe và tài chính.',
  keywords: ['logistics', 'transport', 'erp', 'fleet management', 'điều vận', 'quản lý xe'],
  icons: {
    icon: '/icon.svg',
  },
  robots: {
    index: false,
    follow: false,
    noarchive: true,
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="vi" suppressHydrationWarning>
      <body className={`${inter.className} bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 min-h-screen relative`} suppressHydrationWarning>
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
          template='<div class="fixed inset-0 z-[9999] bg-white/80 dark:bg-slate-950/80 backdrop-blur-sm flex flex-col items-center justify-center transition-all duration-300"><div class="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br from-slate-900 to-blue-900 shadow-xl flex items-center justify-center animate-pulse ring-1 ring-slate-900/10 relative overflow-hidden"><svg class="absolute inset-0 w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg"><defs><pattern id="lg-grid-load" width="6" height="6" patternUnits="userSpaceOnUse"><path d="M 6 0 L 0 0 0 6" fill="none" stroke="currentColor" class="text-white" stroke-width="0.5" /></pattern></defs><rect width="100%" height="100%" fill="url(#lg-grid-load)" /></svg><svg class="relative z-10 w-full h-full" viewBox="0 0 64 48"><text x="32" y="28" fill="white" font-size="12" font-weight="900" font-family="Inter, system-ui, sans-serif" text-anchor="middle" dominant-baseline="middle" letter-spacing="0">LT</text></svg></div><div class="mt-4 text-slate-500 dark:text-slate-400 font-bold tracking-widest text-[10px] uppercase animate-pulse">Đang tải dữ liệu...</div></div><div role="bar" class="hidden"></div>'
          zIndex={1600}
        />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster position="bottom-right" richColors theme="system" />
          <MarketingPopup />
        </ThemeProvider>
      </body>
    </html>
  );
}
