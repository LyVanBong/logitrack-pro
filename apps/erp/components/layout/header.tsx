'use client';

import { Search, Bell, Menu, Sun, Moon, AlertTriangle, User, Settings, LogOut, Globe, Smartphone, X } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Breadcrumbs } from './breadcrumbs';
import { getFilteredNavItems, getUserProfile } from './sidebar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function Header() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isNotifOpen, setIsNotifOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [role, setRole] = useState('admin');
  const pathname = usePathname();

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
    const storedRole = localStorage.getItem('userRole');
    if (storedRole) setRole(storedRole);
  }, []);

  const getUserInitials = () => {
    if (role === 'accountant') return 'KT';
    if (role === 'dispatcher') return 'ĐV';
    return 'AD';
  };

  const getUserName = () => {
    if (role === 'accountant') return 'Trần Kế Toán';
    if (role === 'dispatcher') return 'Lê Điều Vận';
    return 'Nguyễn Quản Trị';
  };

  return (
    <header className="h-16 border-b border-slate-200/50 dark:border-slate-800/50 bg-white/70 dark:bg-slate-950/70 backdrop-blur-md px-4 md:px-8 flex items-center justify-between shrink-0 sticky top-0 z-10 transition-colors">
      <div className="flex items-center gap-4 flex-1 overflow-hidden">
        <button
          onClick={() => setIsMobileMenuOpen(true)}
          className="md:hidden p-2 shrink-0 text-slate-500 hover:bg-slate-100/50 dark:hover:bg-slate-800/50 rounded-lg transition-colors active:scale-95"
        >
          <Menu size={20} />
        </button>
        <Breadcrumbs />
      </div>

      <div className="flex items-center gap-2 sm:gap-3">
        <button
          onClick={() => document.dispatchEvent(new KeyboardEvent('keydown', { key: 'k', metaKey: true }))}
          className="w-[200px] lg:w-[280px] relative hidden sm:flex items-center justify-between pl-10 pr-2 py-2 bg-slate-100 dark:bg-slate-800/50 hover:bg-slate-200 dark:hover:bg-slate-800 border-none rounded-lg text-sm transition-all focus-visible:outline-none cursor-text text-left text-slate-500 dark:text-slate-400"
        >
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
          <span className="truncate">Tìm kiếm...</span>
          <kbd className="hidden lg:inline-flex h-5 items-center gap-1 rounded bg-white dark:bg-slate-900 px-1.5 font-mono text-[10px] font-medium text-slate-500 opacity-100 border border-slate-200 dark:border-slate-700 shadow-sm ml-2 shrink-0">
            <span className="text-xs">⌘</span>K
          </kbd>
        </button>

        <Link
          href={process.env.NEXT_PUBLIC_WEB_URL || "http://localhost:3000"}
          target="_blank"
          className="p-2 text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors hidden sm:block relative group"
        >
          <Globe size={20} />
          <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">Web Tracking</span>
        </Link>

        <Link
          href={process.env.NEXT_PUBLIC_DRIVER_URL || "http://localhost:3002"}
          target="_blank"
          className="p-2 text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors hidden sm:block relative group border-r border-slate-200 dark:border-slate-800 pr-4 mr-1"
        >
          <Smartphone size={20} />
          <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">Driver Portal</span>
        </Link>

        {mounted && (
          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="p-2 text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        )}

        <Link
          href="https://github.com/LyVanBong/logitrack-pro"
          target="_blank"
          className="p-2 text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors hidden sm:block relative mr-1"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-github"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A4.8 4.8 0 0 0 8 18v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
        </Link>

        {/* Notifications */}
        <div className="relative">
          <button
            onClick={() => setIsNotifOpen(!isNotifOpen)}
            className="p-2 text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full relative"
          >
            <Bell size={20} />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white dark:border-slate-900 animate-pulse"></span>
          </button>

          {isNotifOpen && (
            <div className="absolute right-0 mt-2 w-80 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl shadow-lg z-50 overflow-hidden">
               <div className="flex items-center justify-between p-4 border-b border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50">
                  <h3 className="font-semibold text-sm">Cảnh báo & Thông báo</h3>
                  <span className="text-xs text-blue-600 cursor-pointer hover:underline">Đánh dấu đã đọc</span>
               </div>
               <div className="max-h-80 overflow-y-auto">
                  <div className="p-4 border-b border-slate-100 dark:border-slate-800 flex gap-3 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors cursor-pointer">
                     <div className="w-8 h-8 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center shrink-0 text-red-600"><Bell size={14}/></div>
                     <div>
                        <p className="text-sm font-medium">Cảnh báo mòn lốp critical</p>
                        <p className="text-xs text-slate-500 mt-1">Xe 29C-123.45 lốp RL1-Out cần thay gấp (chỉ còn 5,000km).</p>
                        <p className="text-[10px] text-slate-400 mt-1">10 phút trước</p>
                     </div>
                  </div>
                  <div className="p-4 border-b border-slate-100 dark:border-slate-800 flex gap-3 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors cursor-pointer">
                     <div className="w-8 h-8 rounded-full bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center shrink-0 text-orange-600"><AlertTriangle size={14}/></div>
                     <div>
                        <p className="text-sm font-medium">Hạn thanh toán nhà cung cấp</p>
                        <p className="text-xs text-slate-500 mt-1">Petrolimex (450tr) sắp đến hạn thanh toán vào 05/11.</p>
                        <p className="text-[10px] text-slate-400 mt-1">2 giờ trước</p>
                     </div>
                  </div>
                  <div className="p-4 flex gap-3 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors cursor-pointer">
                     <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center shrink-0 text-blue-600"><Bell size={14}/></div>
                     <div>
                        <p className="text-sm font-medium">Cần duyệt chứng từ</p>
                        <p className="text-xs text-slate-500 mt-1">Có 2 chi phí từ Lái xe đang chờ Kế toán duyệt.</p>
                        <p className="text-[10px] text-slate-400 mt-1">Hôm qua</p>
                     </div>
                  </div>
               </div>
               <div className="p-3 text-center border-t border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50">
                  <span className="text-sm font-medium text-slate-500 cursor-pointer hover:text-slate-900 dark:hover:text-white">Xem tất cả trung tâm cảnh báo</span>
               </div>
            </div>
          )}
        </div>

        {/* User Dropdown */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="h-8 w-8 rounded-full bg-primary flex items-center justify-center text-white text-xs font-bold shrink-0 hover:ring-2 hover:ring-primary/50 transition-all cursor-pointer">
              {mounted ? getUserInitials() : '...'}
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56">
            <DropdownMenuLabel>{mounted ? getUserName() : 'Tài khoản của tôi'}</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem asChild>
                <Link href="/profile" className="flex items-center cursor-pointer w-full">
                  <User size={16} className="mr-2" />
                  <span>Hồ sơ cá nhân</span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/settings" className="flex items-center cursor-pointer w-full">
                  <Settings size={16} className="mr-2" />
                  <span>Cài đặt hệ thống</span>
                </Link>
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuItem asChild>
              <Link href="/login" onClick={() => localStorage.removeItem('userRole')} className="flex items-center cursor-pointer w-full text-red-600 focus:text-red-700 bg-red-50 dark:bg-red-950/20 focus:bg-red-100 dark:focus:bg-red-950/40">
                <LogOut size={16} className="mr-2" />
                <span>Đăng xuất</span>
              </Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* Mobile Sidebar Overlay */}
      {mounted && isMobileMenuOpen && createPortal(
        <div
          className="fixed inset-0 z-[100] md:hidden bg-slate-900/60 backdrop-blur-sm transition-opacity"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <div
            className="fixed inset-y-0 left-0 w-[280px] bg-white dark:bg-slate-950 shadow-2xl flex flex-col animate-in slide-in-from-left duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-4 flex items-center justify-between border-b border-slate-200 dark:border-slate-800">
              <div className="flex items-center gap-3">
                 <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-slate-900 to-blue-900 dark:from-blue-950 dark:to-slate-900 rounded-lg shadow-lg">
                    <svg className="w-full h-full" viewBox="0 0 48 48">
                      <text x="24" y="27" fill="white" fontSize="22" fontWeight="900" fontFamily="Inter, system-ui, sans-serif" textAnchor="middle" dominantBaseline="middle" letterSpacing="-1">
                        LT
                      </text>
                    </svg>
                 </div>
                 <div>
                    <h2 className="text-lg font-bold text-slate-900 dark:text-white leading-tight">LT Pro</h2>
                 </div>
              </div>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-8 h-8 flex items-center justify-center rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 hover:bg-slate-200 transition-colors"
              >
                <X size={18} />
              </button>
            </div>

            <nav className="flex-1 px-4 py-4 space-y-1 overflow-y-auto">
              {mounted && getFilteredNavItems(role).map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={
                      `flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors text-sm font-medium ${
                        isActive
                          ? "bg-primary/10 text-primary dark:text-white border-l-4 border-primary"
                          : "text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800"
                      }`
                    }
                  >
                    <item.icon size={20} className={isActive ? "text-primary dark:text-white" : "text-slate-500"} />
                    {item.name}
                  </Link>
                );
              })}
            </nav>

            <div className="p-4 border-t border-slate-200 dark:border-slate-800">
              <Link href="/profile" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-3 p-2 mb-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors cursor-pointer">
                <div className="w-10 h-10 rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden shrink-0">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  {mounted && <img src={getUserProfile(role).img} alt={getUserProfile(role).name} className="w-full h-full object-cover" />}
                </div>
                <div className="flex-1 overflow-hidden">
                  <p className="text-sm font-semibold truncate text-slate-900 dark:text-white">{mounted ? getUserProfile(role).name : '...'}</p>
                  <p className="text-xs text-slate-500 truncate">{mounted ? getUserProfile(role).title : '...'}</p>
                </div>
              </Link>
              {mounted && (role === 'admin' || role === 'accountant') && (
                <Link href="/settings" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-3 px-3 py-2 w-full rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-sm font-medium">
                  <Settings size={20} />
                  Cài đặt
                </Link>
              )}
            </div>
          </div>
        </div>,
        document.body
      )}
    </header>
  );
}
