"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { Truck, Camera, Banknote, User } from "lucide-react";
import { SosButton } from "../../components/sos-button";

export default function PortalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const navLinks = [
    { label: "Chuyến Đi", href: "/", icon: <Truck className="w-6 h-6 mb-1" /> },
    { label: "Chứng Từ", href: "/documents", icon: <Camera className="w-6 h-6 mb-1" /> },
    { label: "Tạm Ứng", href: "/expenses", icon: <Banknote className="w-6 h-6 mb-1" /> },
    { label: "Cá Nhân", href: "/profile", icon: <User className="w-6 h-6 mb-1" /> }
  ];

  return (
    <div className="flex h-[100dvh] w-full overflow-hidden bg-tt-surface-low">
      {/* 
        DESKTOP SIDEBAR MENU
        Sử dụng Stitch Component: surface_container_highest, không viền, text on_surface
      */}
      <aside className="hidden h-full w-[280px] bg-tt-surface-highest text-tt-on-surface sm:flex flex-col shrink-0 shadow-[4px_0_32px_rgba(20,27,43,0.04)] relative z-20">
        <div className="h-24 flex items-center px-6 shrink-0">
          {/* Logo LT Corporate Minimalist */}
          <div className="text-xl font-black tracking-tight flex items-center gap-2">
            <span className="bg-tt-primary text-tt-on-primary w-10 h-10 rounded-xl shrink-0 flex items-center justify-center shadow-[0_8px_16px_rgba(0,105,72,0.25)]">
              LT
            </span>
            LOGISTICS
            <span className="text-[10px] px-2 py-0.5 mt-0.5 rounded-full bg-tt-surface text-tt-on-surface-variant font-bold ml-1 tracking-widest uppercase">
              Driver
            </span>
          </div>
        </div>

        <nav className="flex-1 py-4 px-4 space-y-3 overflow-y-auto no-scrollbar">
          {navLinks.map((link) => {
            const isActive = pathname === link.href || (link.href !== "/" && pathname?.startsWith(link.href));
            return (
              <Link 
                key={link.href}
                href={link.href}
                className={`flex items-center gap-4 px-5 py-4 rounded-2xl font-bold transition-all ${
                  isActive 
                    ? "bg-tt-primary text-tt-on-primary shadow-[0_12px_24px_rgba(0,105,72,0.25)]" 
                    : "text-tt-on-surface-variant hover:text-tt-on-surface hover:bg-tt-surface-lowest active:bg-tt-surface"
                }`}
              >
                {link.icon}
                <span className="text-[16px] tracking-wide">{link.label}</span>
              </Link>
            );
          })}
        </nav>
      </aside>

      {/* MAIN CANVAS AREA: Không padding cố định trên màn hình Desktop */}
      <main className="flex-1 h-full overflow-y-auto w-full relative pb-[90px] sm:pb-0 scroll-smooth">
        <div className="mx-auto w-full max-w-lg sm:max-w-none sm:p-8 min-h-full">
          {children}
        </div>
      </main>

      {/* MOBILE BOTTOM NAVIGATION BAR */}
      <nav className="sm:hidden fixed bottom-0 left-0 w-full h-[90px] bg-tt-surface-lowest shadow-[0_-10px_40px_rgba(20,27,43,0.06)] flex items-center justify-around px-2 pb-6 z-50">
        {navLinks.map((link) => {
          const isActive = pathname === link.href || (link.href !== "/" && pathname?.startsWith(link.href));
          return (
            <Link 
              key={link.href}
              href={link.href}
              className={`flex flex-col items-center justify-center w-full h-full pt-4 transition-colors ${
                isActive ? "text-tt-primary" : "text-tt-on-surface-variant active:text-tt-on-surface"
              }`}
            >
              <div className={`transition-transform duration-300 ${isActive ? "scale-110" : "scale-100"}`}>
                {link.icon}
              </div>
              <span className={`text-[11px] mt-1 tracking-wide ${isActive ? "font-black" : "font-semibold"}`}>
                {link.label}
              </span>
            </Link>
          );
        })}
      </nav>

      {/* SOS EMERGENCY BUTTON */}
      <SosButton />
    </div>
  );
}
