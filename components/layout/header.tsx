'use client'

import {
  Search,
  Bell,
  Menu,
  Sun,
  Moon,
  AlertTriangle,
  User,
  Settings,
  LogOut,
  Github
} from 'lucide-react'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'

export function Header() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [isNotifOpen, setIsNotifOpen] = useState(false)
  const [role, setRole] = useState('admin')

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true)
    const storedRole = localStorage.getItem('userRole')
    if (storedRole) setRole(storedRole)
  }, [])

  const getUserInitials = () => {
    if (role === 'accountant') return 'KT'
    if (role === 'dispatcher') return 'ĐV'
    return 'AD'
  }

  const getUserName = () => {
    if (role === 'accountant') return 'Trần Kế Toán'
    if (role === 'dispatcher') return 'Lê Điều Vận'
    return 'Nguyễn Quản Trị'
  }

  return (
    <header className='sticky top-0 z-10 flex h-16 shrink-0 items-center justify-between border-b border-slate-200/50 bg-white/70 px-4 backdrop-blur-md transition-colors md:px-8 dark:border-slate-800/50 dark:bg-slate-950/70'>
      <div className='flex flex-1 items-center gap-4'>
        <button className='rounded-lg p-2 text-slate-500 hover:bg-slate-100/50 md:hidden dark:hover:bg-slate-800/50'>
          <Menu size={20} />
        </button>
        <div className='relative hidden w-full max-w-md sm:block'>
          <Search size={18} className='absolute top-1/2 left-3 -translate-y-1/2 text-slate-400' />
          <input
            type='text'
            placeholder='Tìm kiếm đơn hàng, xe, tài xế...'
            className='focus:ring-primary/50 w-full rounded-lg border-none bg-slate-100 py-2 pr-4 pl-10 text-sm text-slate-900 transition-all placeholder:text-slate-500 focus:ring-2 dark:bg-slate-800 dark:text-white'
          />
        </div>
      </div>

      <div className='flex items-center gap-3'>
        <Link
          href='https://github.com/LyVanBong/logitrack-pro'
          target='_blank'
          rel='noreferrer'
          className='flex items-center justify-center rounded-full p-2 text-slate-500 transition-colors hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800'
          aria-label='GitHub Repository'
        >
          <Github size={20} />
        </Link>
        {mounted && (
          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className='rounded-full p-2 text-slate-500 transition-colors hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800'
            aria-label='Toggle theme'
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        )}
        <div className='relative'>
          <button
            onClick={() => setIsNotifOpen(!isNotifOpen)}
            className='relative rounded-full p-2 text-slate-500 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800'
          >
            <Bell size={20} />
            <span className='absolute top-1.5 right-1.5 h-2 w-2 animate-pulse rounded-full border-2 border-white bg-red-500 dark:border-slate-900'></span>
          </button>

          {isNotifOpen && (
            <div className='absolute right-0 z-50 mt-2 w-80 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-lg dark:border-slate-800 dark:bg-slate-900'>
              <div className='flex items-center justify-between border-b border-slate-100 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-900/50'>
                <h3 className='text-sm font-semibold'>Cảnh báo & Thông báo</h3>
                <span className='cursor-pointer text-xs text-blue-600 hover:underline'>
                  Đánh dấu đã đọc
                </span>
              </div>
              <div className='max-h-80 overflow-y-auto'>
                <div className='flex cursor-pointer gap-3 border-b border-slate-100 p-4 transition-colors hover:bg-slate-50 dark:border-slate-800 dark:hover:bg-slate-800/50'>
                  <div className='flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-red-100 text-red-600 dark:bg-red-900/30'>
                    <Bell size={14} />
                  </div>
                  <div>
                    <p className='text-sm font-medium'>Cảnh báo mòn lốp critical</p>
                    <p className='mt-1 text-xs text-slate-500'>
                      Xe 29C-123.45 lốp RL1-Out cần thay gấp (chỉ còn 5,000km).
                    </p>
                    <p className='mt-1 text-[10px] text-slate-400'>10 phút trước</p>
                  </div>
                </div>
                <div className='flex cursor-pointer gap-3 border-b border-slate-100 p-4 transition-colors hover:bg-slate-50 dark:border-slate-800 dark:hover:bg-slate-800/50'>
                  <div className='flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-orange-100 text-orange-600 dark:bg-orange-900/30'>
                    <AlertTriangle size={14} />
                  </div>
                  <div>
                    <p className='text-sm font-medium'>Hạn thanh toán nhà cung cấp</p>
                    <p className='mt-1 text-xs text-slate-500'>
                      Petrolimex (450tr) sắp đến hạn thanh toán vào 05/11.
                    </p>
                    <p className='mt-1 text-[10px] text-slate-400'>2 giờ trước</p>
                  </div>
                </div>
                <div className='flex cursor-pointer gap-3 p-4 transition-colors hover:bg-slate-50 dark:hover:bg-slate-800/50'>
                  <div className='flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-600 dark:bg-blue-900/30'>
                    <Bell size={14} />
                  </div>
                  <div>
                    <p className='text-sm font-medium'>Cần duyệt chứng từ</p>
                    <p className='mt-1 text-xs text-slate-500'>
                      Có 2 chi phí từ Lái xe đang chờ Kế toán duyệt.
                    </p>
                    <p className='mt-1 text-[10px] text-slate-400'>Hôm qua</p>
                  </div>
                </div>
              </div>
              <div className='border-t border-slate-100 bg-slate-50 p-3 text-center dark:border-slate-800 dark:bg-slate-900/50'>
                <span className='cursor-pointer text-sm font-medium text-slate-500 hover:text-slate-900 dark:hover:text-white'>
                  Xem tất cả trung tâm cảnh báo
                </span>
              </div>
            </div>
          )}
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className='bg-primary hover:ring-primary/50 flex h-8 w-8 shrink-0 cursor-pointer items-center justify-center rounded-full text-xs font-bold text-white transition-all hover:ring-2'>
              {mounted ? getUserInitials() : '...'}
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align='end' className='w-56'>
            <DropdownMenuLabel>{mounted ? getUserName() : 'Tài khoản của tôi'}</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem asChild>
                <Link href='/profile' className='flex w-full cursor-pointer items-center'>
                  <User size={16} className='mr-2' />
                  <span>Hồ sơ cá nhân</span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href='/settings' className='flex w-full cursor-pointer items-center'>
                  <Settings size={16} className='mr-2' />
                  <span>Cài đặt hệ thống</span>
                </Link>
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuItem asChild>
              <Link
                href='/login'
                onClick={() => localStorage.removeItem('userRole')}
                className='flex w-full cursor-pointer items-center bg-red-50 text-red-600 focus:bg-red-100 focus:text-red-700 dark:bg-red-950/20 dark:focus:bg-red-950/40'
              >
                <LogOut size={16} className='mr-2' />
                <span>Đăng xuất</span>
              </Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  )
}
