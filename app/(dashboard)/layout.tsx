import { Sidebar } from '@/components/layout/sidebar';
import { Header } from '@/components/layout/header';
import { ChatWidget } from '@/components/features/chat-widget';
import { CommandPalette } from '@/components/layout/command-palette';

export default function DashboardLayout({children}: {children: React.ReactNode}) {
  return (
    <div className="flex h-screen overflow-hidden w-full relative">
      <Sidebar />
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        <Header />
        <main className="flex-1 overflow-y-auto p-4 md:p-6 lg:p-8">
          {children}
        </main>
      </div>
      <ChatWidget />
      <CommandPalette />
    </div>
  );
}
