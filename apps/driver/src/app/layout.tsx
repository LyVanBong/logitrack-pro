import type { Metadata, Viewport } from "next";
import { Public_Sans } from "next/font/google";
import "./globals.css";
import NextTopLoader from 'nextjs-toploader';
import { NetworkStatus } from '@/components/network-status';

const publicSans = Public_Sans({ subsets: ["latin", "vietnamese"] });

export const metadata: Metadata = {
  title: "LT Driver Portal",
  description: "Ứng dụng vận hành dành cho Tài xế LT Logistics",
  manifest: "/manifest.json", 
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "LT Driver",
    startupImage: [
      {
        url: "/icon.svg",
        media: "(device-width: 390px) and (device-height: 844px) and (-webkit-device-pixel-ratio: 3)",
      },
      {
        url: "/icon.svg",
        media: "(device-width: 430px) and (device-height: 932px) and (-webkit-device-pixel-ratio: 3)",
      }
    ],
  },
};

// Vô hiệu hóa tính năng zoom trên điện thoại để trải nghiệm giống App Native
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body className={`${publicSans.className} antialiased bg-tt-surface text-tt-on-surface selection:bg-tt-primary-container/30`}>
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
        <NetworkStatus />
        {children}
      </body>
    </html>
  );
}
