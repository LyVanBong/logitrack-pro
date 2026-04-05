import Link from 'next/link'
import { Home, AlertTriangle } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50 dark:bg-slate-950 text-center p-8">
      <div className="relative mb-8">
        <div className="text-[120px] font-black text-slate-100 dark:text-slate-900 leading-none select-none">404</div>
        <div className="absolute inset-0 flex items-center justify-center">
          <AlertTriangle className="h-16 w-16 text-tt-warning" />
        </div>
      </div>

      <h1 className="text-3xl font-bold text-tt-primary dark:text-slate-100 mb-3">Trang không tồn tại</h1>
      <p className="text-slate-500 dark:text-slate-400 max-w-md mb-8">
        Trang bạn đang tìm kiếm không tồn tại hoặc đã bị di chuyển. Vui lòng kiểm tra lại đường dẫn.
      </p>

      <Link
        href="/"
        className="inline-flex items-center gap-2 px-6 py-3 bg-tt-primary hover:bg-tt-primary-hover text-white font-semibold rounded-xl shadow-lg shadow-slate-900/10 transition-colors"
      >
        <Home size={18} />
        Về Trang Chủ
      </Link>
    </div>
  )
}
