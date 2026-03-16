'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { LayoutDashboard, Truck, ClipboardList, Users, Package, Settings, Building2, Wallet, BarChart3, Map, Calendar } from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const navItems = [
  { name: 'Tổng quan', href: '/', icon: LayoutDashboard },
  { name: 'Bản đồ Tracking', href: '/tracking', icon: Map },
  { name: 'Lệnh điều phối', href: '/dispatch', icon: ClipboardList },
  { name: 'Đội xe', href: '/fleet', icon: Truck },
  { name: 'Lịch trình (Gantt)', href: '/fleet/timeline', icon: Calendar },
  { name: 'Tài xế', href: '/drivers', icon: Users },
  { name: 'Khách hàng', href: '/customers', icon: Building2 },
  { name: 'Tài chính', href: '/finance', icon: Wallet },
  { name: 'Kho phụ tùng', href: '/inventory', icon: Package },
  { name: 'Báo cáo KPI', href: '/reports', icon: BarChart3 },
];

export function Sidebar() {
  const pathname = usePathname();
  const [role, setRole] = useState('admin');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const storedRole = localStorage.getItem('userRole');
    if (storedRole) {
      setRole(storedRole);
    }
  }, []);

  const getFilteredNavItems = () => {
    if (role === 'accountant') {
      return navItems.filter(item => ['/', '/finance', '/customers', '/reports', '/settings'].includes(item.href));
    }
    if (role === 'dispatcher') {
      return navItems.filter(item => ['/', '/tracking', '/dispatch', '/fleet', '/fleet/timeline', '/drivers', '/inventory'].includes(item.href));
    }
    return navItems; // admin sees all
  };

  const getUserProfile = () => {
    if (role === 'accountant') return { name: 'Trần Kế Toán', title: 'Kế toán trưởng', img: 'https://i.pravatar.cc/150?img=5' };
    if (role === 'dispatcher') return { name: 'Lê Điều Vận', title: 'Điều vận viên', img: 'https://i.pravatar.cc/150?img=8' };
    return { name: 'Nguyễn Quản Trị', title: 'Administrator', img: 'https://i.pravatar.cc/150?img=11' };
  };

  const filteredNavItems = getFilteredNavItems();
  const userProfile = getUserProfile();

  return (
    <aside className="w-64 border-r border-slate-200/50 dark:border-slate-800/50 bg-white/70 dark:bg-slate-950/70 backdrop-blur-md hidden md:flex flex-col shrink-0 transition-colors z-20">
      <div className="p-6 flex items-center gap-3">
        <div className="bg-primary p-2 rounded-lg text-white">
          <Truck size={24} />
        </div>
        <h1 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">LogiTrack Pro</h1>
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
        <Link href="/profile" className="flex items-center gap-3 p-2 mb-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors cursor-pointer">
          <div className="w-10 h-10 rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden shrink-0">
            {mounted && <img src={userProfile.img} alt={userProfile.name} className="w-full h-full object-cover" />}
          </div>
          <div className="flex-1 overflow-hidden">
            <p className="text-sm font-semibold truncate text-slate-900 dark:text-white">{mounted ? userProfile.name : '...'}</p>
            <p className="text-xs text-slate-500 truncate">{mounted ? userProfile.title : '...'}</p>
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
