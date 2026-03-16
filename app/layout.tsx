import type {Metadata} from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';

const inter = Inter({ subsets: ['latin', 'vietnamese'] });

export const metadata: Metadata = {
  title: 'LogiTrack Pro | Enterprise Transport Management',
  description: 'Hệ thống Quản trị Vận tải và Logistics toàn diện dành cho Doanh nghiệp, tối ưu hóa quy trình điều vận, quản trị đội xe và tài chính.',
  keywords: ['logistics', 'transport', 'erp', 'fleet management', 'điều vận', 'quản lý xe'],
  icons: {
    icon: '/icon.svg',
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="vi" suppressHydrationWarning>
      <body className={`${inter.className} bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 min-h-screen relative`} suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
