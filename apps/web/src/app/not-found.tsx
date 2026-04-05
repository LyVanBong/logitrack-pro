import Link from "next/link";
import { Search } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex-1 w-full flex flex-col items-center justify-center py-24 px-4 bg-slate-50/50">
      <div className="w-full max-w-xl text-center space-y-6">
        <div className="relative inline-block">
          <div className="text-[120px] font-black tracking-tighter text-slate-900 leading-none">
            404
          </div>
          <div className="absolute inset-0 bg-gradient-to-tr from-slate-900/10 to-transparent bg-clip-text text-transparent opacity-50">
            404
          </div>
        </div>
        
        <h2 className="text-2xl font-bold tracking-tight text-slate-800">
          Lạc mất kiện hàng này rồi!
        </h2>
        
        <p className="text-sm font-medium text-slate-500 max-w-md mx-auto leading-relaxed">
          Chúng tôi không thể định vị được địa chỉ bạn đang truy cập. Hãy thử nhập lại mã vận đơn khác hoặc quay về trang chủ.
        </p>

        <div className="mt-8 mx-auto max-w-md bg-white p-2 border border-slate-200 shadow-sm rounded-xl flex items-center transition-all focus-within:ring-2 focus-within:ring-emerald-500/50">
          <Search size={20} className="text-slate-400 ml-3 shrink-0" />
          <input
            type="text"
            placeholder="Nhập mã vận đơn (VD: TT12345678)..."
            className="flex-1 bg-transparent border-none focus:ring-0 text-sm py-3 px-3 placeholder:text-slate-400 font-medium tracking-wide outline-none text-slate-900 uppercase"
          />
          <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-2.5 rounded-lg text-sm font-bold tracking-wide transition-colors">
            ĐỊNH VỊ
          </button>
        </div>

        <div className="mt-8 pt-6">
          <Link
            href="/"
            className="text-sm font-bold text-slate-500 hover:text-slate-900 transition-colors uppercase tracking-widest relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 hover:after:w-full after:h-[2px] after:bg-slate-900 after:transition-all"
          >
            Quay lại bến đỗ (Trang Chủ)
          </Link>
        </div>
      </div>
    </div>
  );
}
