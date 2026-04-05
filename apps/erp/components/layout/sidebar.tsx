'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { LayoutDashboard, Truck, ClipboardList, Users, Package, Settings, Building2, Wallet, BarChart3, Map, Calendar, FileWarning, FileCheck } from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const navItems = [
  { name: 'Tổng quan', href: '/', icon: LayoutDashboard },
  { name: 'Bản đồ Tracking', href: '/tracking', icon: Map },
  { name: 'Lệnh điều phối', href: '/dispatch', icon: ClipboardList },
  { name: 'Đối soát chuyến', href: '/dispatch/audit', icon: FileCheck },
  { name: 'Đội xe', href: '/fleet', icon: Truck },
  { name: 'Lịch trình (Gantt)', href: '/fleet/timeline', icon: Calendar },
  { name: 'Giấy tờ xe', href: '/fleet/documents', icon: FileWarning },
  { name: 'Tài xế', href: '/drivers', icon: Users },
  { name: 'Khách hàng', href: '/customers', icon: Building2 },
  { name: 'Tài chính', href: '/finance', icon: Wallet },
  { name: 'Kho phụ tùng', href: '/inventory', icon: Package },
  { name: 'Báo cáo KPI', href: '/reports', icon: BarChart3 },
];

export const getFilteredNavItems = (role: string) => {
  if (role === 'accountant') {
    return navItems.filter(item =>
      ['/', '/finance', '/customers', '/reports', '/dispatch/audit', '/settings'].includes(item.href)
    );
  }
  if (role === 'dispatcher') {
    return navItems.filter(item =>
      ['/', '/tracking', '/dispatch', '/dispatch/audit', '/fleet', '/fleet/timeline', '/fleet/documents', '/drivers', '/inventory'].includes(item.href)
    );
  }
  return navItems; // admin sees all
};

export const getUserProfile = (role: string) => {
  if (role === 'accountant') return { name: 'Trần Kế Toán', title: 'Kế toán trưởng', img: 'https://i.pravatar.cc/150?img=5' };
  if (role === 'dispatcher') return { name: 'Lê Điều Vận', title: 'Điều vận viên', img: 'https://i.pravatar.cc/150?img=8' };
  return { name: 'Nguyễn Quản Trị', title: 'Administrator', img: 'https://i.pravatar.cc/150?img=11' };
};

const BrandLogo = () => (
  <div className="relative flex items-center justify-center shrink-0 w-12 h-12 bg-gradient-to-br from-slate-900 to-blue-900 dark:from-blue-950 dark:to-slate-900 rounded-xl shadow-lg shadow-blue-900/20 overflow-hidden ring-1 ring-slate-900/10 dark:ring-white/10 transition-transform hover:scale-105 duration-300">
    <svg className="absolute inset-0 w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="lg-sidebar-grid" width="6" height="6" patternUnits="userSpaceOnUse">
          <path d="M 6 0 L 0 0 0 6" fill="none" stroke="currentColor" className="text-white" strokeWidth="0.5" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#lg-sidebar-grid)" />
    </svg>
    <svg className="relative z-10 w-full h-full" viewBox="0 0 48 48">
      <text x="24" y="27" fill="white" fontSize="22" fontWeight="900" fontFamily="Inter, system-ui, sans-serif" textAnchor="middle" dominantBaseline="middle" letterSpacing="-1">
        LT
      </text>
    </svg>
  </div>
);

export function Sidebar() {
  const pathname = usePathname();
  const [role, setRole] = useState('admin');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
    const storedRole = localStorage.getItem('userRole');
    if (storedRole) setRole(storedRole);
  }, []);

  const filteredNavItems = getFilteredNavItems(role);
  const userProfile = getUserProfile(role);

  return (
    <aside className="w-64 border-r border-slate-200/50 dark:border-slate-800/50 bg-white/70 dark:bg-slate-950/70 backdrop-blur-md hidden md:flex flex-col shrink-0 transition-colors z-20">
      <div className="p-5 flex items-center gap-3">
        <BrandLogo />
        <div className="flex flex-col">
          <h1 className="text-xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-none mb-1">
            Logi<span className="text-blue-700 dark:text-blue-500">Track</span>
          </h1>
          <span className="text-[10px] uppercase font-bold text-slate-500 dark:text-slate-400 tracking-wider">
            Enterprise TMS
          </span>
        </div>
      </div>

      <nav className="flex-1 px-4 py-4 space-y-1 overflow-y-auto">
        {mounted && filteredNavItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors text-sm font-medium",
                isActive
                  ? "bg-primary/10 text-primary dark:text-white border-l-4 border-primary"
                  : "text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800"
              )}
            >
              <item.icon size={20} className={isActive ? "text-primary dark:text-white" : "text-slate-500"} />
              {item.name}
            </Link>
          );
        })}
      </nav>

      <div className="p-4 border-t border-slate-200 dark:border-slate-800">
              <Link href="/profile" className="flex flex-col items-center gap-3 p-2 mb-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors cursor-pointer w-full">
                <div className="w-16 h-16 rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden shrink-0 shadow-md ring-2 ring-white dark:ring-slate-900 mx-auto mt-2">
                  <Image src={mounted ? getUserProfile(role).img : "https://i.pravatar.cc/150"} alt="User Profile" width={64} height={64} className="w-full h-full object-cover" />
                </div>
                <div className="flex-1 w-full text-center overflow-hidden mb-1">
                  <p className="text-sm font-semibold truncate text-slate-900 dark:text-white">{mounted ? getUserProfile(role).name : '...'}</p>
                  <p className="text-xs text-slate-500 truncate">{mounted ? getUserProfile(role).title : '...'}</p>
                </div>
              </Link>
        {mounted && (role === 'admin' || role === 'accountant') && (
          <Link href="/settings" className="flex items-center gap-3 px-3 py-2 w-full rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-sm font-medium">
            <Settings size={20} />
            Cài đặt
          </Link>
        )}
      </div>
    </aside>
  );
}
