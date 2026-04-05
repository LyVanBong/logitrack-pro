import Link from "next/link";
import { NavigationOff, Route } from "lucide-react";

export default function DriverNotFound() {
  return (
    <div className="flex-1 min-h-screen bg-tt-surface flex flex-col justify-center px-4 py-8">
      
      {/* Cấu trúc Big Action Card */}
      <div className="bg-tt-on-surface rounded-[24px] p-6 text-tt-surface relative overflow-hidden shadow-2xl">
        <div className="absolute top-0 right-0 p-8 opacity-10">
          <NavigationOff size={120} strokeWidth={1} />
        </div>

        <div className="relative z-10 w-16 h-16 bg-red-500/20 text-red-400 rounded-full flex items-center justify-center mb-6 ring-8 ring-red-500/10">
          <NavigationOff size={32} />
        </div>

        <h1 className="text-3xl font-black tracking-tight mb-2">Lạc lộ trình?</h1>
        <p className="text-tt-surface/70 font-medium text-base leading-relaxed max-w-xs mb-8">
          Chặng (404) này không có trong hệ thống hoặc bị mất sóng 4G. Lái xe vui lòng giữ an toàn và trở lại màn hình chính.
        </p>

        <Link
          href="/"
          className="flex items-center justify-center gap-3 w-full bg-tt-primary text-white text-lg font-bold py-5 px-6 rounded-2xl active:scale-[0.98] transition-transform shadow-lg shadow-tt-primary/30 group"
        >
          <Route className="group-hover:animate-pulse" size={24} /> 
          Về chặng đang xử lý
        </Link>
      </div>

    </div>
  );
}
