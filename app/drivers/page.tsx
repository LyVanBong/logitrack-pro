import { Plus, Phone, MoreVertical } from 'lucide-react';

export default function DriversPage() {
  return (
    <div className="space-y-8 max-w-[1600px] mx-auto">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">Danh sách Tài xế</h1>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Quản lý hồ sơ và trạng thái của 24 tài xế</p>
        </div>
        <button className="flex items-center justify-center gap-2 bg-primary text-white px-5 py-2.5 rounded-xl text-sm font-semibold shadow-lg shadow-primary/20 hover:bg-primary/90 transition-all">
          <Plus size={18} />
          Thêm tài xế mới
        </button>
      </div>

      <div className="flex flex-wrap items-center gap-6 border-b border-slate-200 dark:border-slate-800 pb-px">
        <button className="pb-3 text-sm font-bold border-b-2 border-primary text-primary dark:text-white">Tất cả (24)</button>
        <button className="pb-3 text-sm font-medium text-slate-500 hover:text-slate-700 dark:hover:text-slate-300 border-b-2 border-transparent">Đang chạy (12)</button>
        <button className="pb-3 text-sm font-medium text-slate-500 hover:text-slate-700 dark:hover:text-slate-300 border-b-2 border-transparent">Sẵn sàng (8)</button>
        <button className="pb-3 text-sm font-medium text-slate-500 hover:text-slate-700 dark:hover:text-slate-300 border-b-2 border-transparent">Nghỉ phép (4)</button>
      </div>

      <div className="space-y-4">
        {/* Driver Card 1 */}
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 flex flex-col md:flex-row md:items-center gap-6 hover:shadow-md transition-all">
          <div className="relative shrink-0">
            <img src="https://i.pravatar.cc/150?img=33" alt="Driver" className="w-16 h-16 rounded-full object-cover border-2 border-slate-100 dark:border-slate-800" />
            <div className="absolute bottom-0 right-0 w-4 h-4 bg-emerald-500 border-2 border-white dark:border-slate-900 rounded-full"></div>
          </div>
          
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-center">
            <div>
              <h3 className="font-bold text-lg text-slate-900 dark:text-white">Nguyễn Văn An</h3>
              <p className="text-sm text-slate-500">ID: TX-202401</p>
            </div>
            <div>
              <p className="text-xs text-slate-500 uppercase font-bold mb-1">Hạng bằng</p>
              <span className="px-2.5 py-1 bg-slate-100 dark:bg-slate-800 rounded-md text-xs font-bold border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300">Hạng C</span>
            </div>
            <div>
              <p className="text-xs text-slate-500 uppercase font-bold mb-1">Phương tiện</p>
              <p className="text-sm font-medium text-slate-900 dark:text-white">29C-123.45</p>
            </div>
            <div>
              <p className="text-xs text-slate-500 dark:text-slate-400 uppercase font-bold tracking-wider mb-1.5">Trạng thái</p>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                Đang chạy
              </span>
            </div>
          </div>

          <div className="flex items-center gap-4 md:border-l border-slate-200 dark:border-slate-800 md:pl-6 pt-4 md:pt-0 border-t md:border-t-0 mt-4 md:mt-0">
            <div className="text-right hidden sm:block">
              <p className="text-sm font-medium text-slate-900 dark:text-white">0901 234 567</p>
              <p className="text-xs text-slate-500 dark:text-slate-400">Hà Nội, Việt Nam</p>
            </div>
            <div className="flex gap-2 ml-auto md:ml-0">
              <button className="p-2.5 text-slate-500 hover:text-primary hover:bg-primary/10 rounded-xl transition-colors bg-slate-100 dark:bg-slate-800">
                <Phone size={18} />
              </button>
              <button className="p-2.5 text-slate-500 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl transition-colors">
                <MoreVertical size={18} />
              </button>
            </div>
          </div>
        </div>

        {/* Driver Card 2 */}
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 flex flex-col md:flex-row md:items-center gap-6 hover:shadow-md transition-all">
          <div className="relative shrink-0">
            <img src="https://i.pravatar.cc/150?img=12" alt="Driver" className="w-16 h-16 rounded-full object-cover border-2 border-slate-100 dark:border-slate-800" />
            <div className="absolute bottom-0 right-0 w-4 h-4 bg-blue-500 border-2 border-white dark:border-slate-900 rounded-full"></div>
          </div>
          
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-center">
            <div>
              <h3 className="font-bold text-lg text-slate-900 dark:text-white">Trần Văn Bình</h3>
              <p className="text-sm text-slate-500">ID: TX-202405</p>
            </div>
            <div>
              <p className="text-xs text-slate-500 uppercase font-bold mb-1">Hạng bằng</p>
              <span className="px-2.5 py-1 bg-slate-100 dark:bg-slate-800 rounded-md text-xs font-bold border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300">Hạng D</span>
            </div>
            <div>
              <p className="text-xs text-slate-500 uppercase font-bold mb-1">Phương tiện</p>
              <p className="text-sm font-medium text-slate-900 dark:text-white">51D-678.90</p>
            </div>
            <div>
              <p className="text-xs text-slate-500 dark:text-slate-400 uppercase font-bold tracking-wider mb-1.5">Trạng thái</p>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                Sẵn sàng
              </span>
            </div>
          </div>

          <div className="flex items-center gap-4 md:border-l border-slate-200 dark:border-slate-800 md:pl-6 pt-4 md:pt-0 border-t md:border-t-0 mt-4 md:mt-0">
            <div className="text-right hidden sm:block">
              <p className="text-sm font-medium text-slate-900 dark:text-white">0908 765 432</p>
              <p className="text-xs text-slate-500 dark:text-slate-400">TP. Hồ Chí Minh</p>
            </div>
            <div className="flex gap-2 ml-auto md:ml-0">
              <button className="p-2.5 text-slate-500 hover:text-primary hover:bg-primary/10 rounded-xl transition-colors bg-slate-100 dark:bg-slate-800">
                <Phone size={18} />
              </button>
              <button className="p-2.5 text-slate-500 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl transition-colors">
                <MoreVertical size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
