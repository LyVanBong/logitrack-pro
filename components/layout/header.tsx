'use client';

import { Search, Bell, Menu, Sun, Moon, AlertTriangle, User, Settings, LogOut } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import Link from 'next/link';
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
  const [role, setRole] = useState('admin');

  useEffect(() => {
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
      <div className="flex items-center gap-4 flex-1">
        <button className="md:hidden p-2 text-slate-500 hover:bg-slate-100/50 dark:hover:bg-slate-800/50 rounded-lg">
          <Menu size={20} />
        </button>
        <div className="max-w-md w-full relative hidden sm:block">
          <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
          <input 
            type="text" 
            placeholder="Tìm kiếm đơn hàng, xe, tài xế..." 
            className="w-full pl-10 pr-4 py-2 bg-slate-100 dark:bg-slate-800 border-none rounded-lg text-sm focus:ring-2 focus:ring-primary/50 transition-all text-slate-900 dark:text-white placeholder:text-slate-500"
          />
        </div>
      </div>
      
      <div className="flex items-center gap-3">
        {mounted && (
          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="p-2 text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        )}
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
    </header>
  );
}
