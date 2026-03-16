'use client';

import { Search, Bell, Menu, Sun, Moon } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export function Header() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <header className="h-16 border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-4 md:px-8 flex items-center justify-between shrink-0 sticky top-0 z-10">
      <div className="flex items-center gap-4 flex-1">
        <button className="md:hidden p-2 text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg">
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
        <button className="p-2 text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full relative">
          <Bell size={20} />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white dark:border-slate-900"></span>
        </button>
        <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center text-white text-xs font-bold shrink-0">
          AD
        </div>
      </div>
    </header>
  );
}
