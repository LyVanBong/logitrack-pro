import type {Metadata} from 'next';
import { Inter } from 'next/font/google';
import './globals.css'; // Global styles
import { Sidebar } from '@/components/sidebar';
import { Header } from '@/components/header';
import { ThemeProvider } from '@/components/theme-provider';

const inter = Inter({ subsets: ['latin', 'vietnamese'] });

export const metadata: Metadata = {
  title: 'Vận Tải Pro - Hệ thống quản lý',
  description: 'Hệ thống quản lý vận tải toàn diện',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="vi" suppressHydrationWarning>
      <body className={`${inter.className} bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 min-h-screen flex overflow-hidden`} suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Sidebar />
          <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
            <Header />
            <main className="flex-1 overflow-y-auto p-4 md:p-6 lg:p-8">
              {children}
            </main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
