'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LayoutDashboard, Truck, ClipboardList, Users, Package, Settings, Building2, Wallet } from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const navItems = [
  { name: 'Tổng quan', href: '/', icon: LayoutDashboard },
  { name: 'Lệnh điều phối', href: '/dispatch', icon: ClipboardList },
  { name: 'Đội xe', href: '/fleet', icon: Truck },
  { name: 'Tài xế', href: '/drivers', icon: Users },
  { name: 'Khách hàng', href: '/customers', icon: Building2 },
  { name: 'Tài chính', href: '/finance', icon: Wallet },
  { name: 'Kho phụ tùng', href: '/inventory', icon: Package },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 border-r border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hidden md:flex flex-col shrink-0">
      <div className="p-6 flex items-center gap-3">
        <div className="bg-primary p-2 rounded-lg text-white">
          <Truck size={24} />
        </div>
        <h1 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">LogiTrack Pro</h1>
      </div>
      
      <nav className="flex-1 px-4 py-4 space-y-1 overflow-y-auto">
        {navItems.map((item) => {
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
        <div className="flex items-center gap-3 p-2 mb-2">
          <div className="w-10 h-10 rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden shrink-0">
            <img src="https://i.pravatar.cc/150?img=11" alt="Admin" className="w-full h-full object-cover" />
          </div>
          <div className="flex-1 overflow-hidden">
            <p className="text-sm font-semibold truncate text-slate-900 dark:text-white">Nguyễn Quản Trị</p>
            <p className="text-xs text-slate-500 truncate">Administrator</p>
          </div>
        </div>
        <button className="flex items-center gap-3 px-3 py-2 w-full rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-sm font-medium">
          <Settings size={20} />
          Cài đặt
        </button>
      </div>
    </aside>
  );
}
