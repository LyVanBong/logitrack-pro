import { Plus, Filter, MoreVertical, Truck } from 'lucide-react';

export default function FleetPage() {
  return (
    <div className="space-y-8 max-w-[1600px] mx-auto">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">Danh sách phương tiện</h1>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Theo dõi hoạt động thời gian thực của 152 phương tiện</p>
        </div>
        <button className="flex items-center justify-center gap-2 bg-primary text-white px-5 py-2.5 rounded-xl text-sm font-semibold shadow-lg shadow-primary/20 hover:bg-primary/90 transition-all">
          <Plus size={18} />
          Thêm xe mới
        </button>
      </div>

      <div className="flex flex-wrap items-center gap-3">
        <button className="px-5 py-2.5 rounded-xl bg-primary text-white text-sm font-semibold shadow-md">
          Tất cả (152)
        </button>
        <button className="px-5 py-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 text-sm font-medium hover:border-primary transition-all flex items-center gap-2 shadow-sm">
          <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
          Sẵn sàng (84)
        </button>
        <button className="px-5 py-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 text-sm font-medium hover:border-primary transition-all flex items-center gap-2 shadow-sm">
          <span className="w-2 h-2 rounded-full bg-blue-500"></span>
          Đang chạy (42)
        </button>
        <button className="px-5 py-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 text-sm font-medium hover:border-primary transition-all flex items-center gap-2 shadow-sm">
          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          Bảo trì (26)
        </button>
      </div>

      <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-slate-50 dark:bg-slate-800/50 border-b border-slate-200 dark:border-slate-800">
                <th className="px-6 py-4 text-xs font-bold uppercase text-slate-500 tracking-wider">Biển số</th>
                <th className="px-6 py-4 text-xs font-bold uppercase text-slate-500 tracking-wider">Loại xe</th>
                <th className="px-6 py-4 text-xs font-bold uppercase text-slate-500 tracking-wider">Tài xế chính</th>
                <th className="px-6 py-4 text-xs font-bold uppercase text-slate-500 tracking-wider">Tải trọng</th>
                <th className="px-6 py-4 text-xs font-bold uppercase text-slate-500 tracking-wider">Trạng thái</th>
                <th className="px-6 py-4 text-xs font-bold uppercase text-slate-500 tracking-wider text-right">Thao tác</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
              <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors">
                <td className="px-6 py-4">
                  <div className="inline-block bg-slate-100 dark:bg-slate-800 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 font-bold text-sm text-slate-900 dark:text-white">
                    29C-123.45
                  </div>
                </td>
                <td className="px-6 py-4 text-sm font-medium text-slate-700 dark:text-slate-300">Container</td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <img src="https://i.pravatar.cc/150?img=33" alt="Driver" className="w-8 h-8 rounded-full object-cover" />
                    <span className="text-sm font-medium text-slate-900 dark:text-white">Nguyễn Văn An</span>
                  </div>
                </td>
                <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-400">45 Tấn</td>
                <td className="px-6 py-4">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 text-xs font-bold">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                    Sẵn sàng
                  </span>
                </td>
                <td className="px-6 py-4 text-right">
                  <button className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800">
                    <MoreVertical size={18} />
                  </button>
                </td>
              </tr>
              <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors">
                <td className="px-6 py-4">
                  <div className="inline-block bg-slate-100 dark:bg-slate-800 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 font-bold text-sm text-slate-900 dark:text-white">
                    51D-987.65
                  </div>
                </td>
                <td className="px-6 py-4 text-sm font-medium text-slate-700 dark:text-slate-300">Tải 5T</td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <img src="https://i.pravatar.cc/150?img=12" alt="Driver" className="w-8 h-8 rounded-full object-cover" />
                    <span className="text-sm font-medium text-slate-900 dark:text-white">Trần Minh Tâm</span>
                  </div>
                </td>
                <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-400">5 Tấn</td>
                <td className="px-6 py-4">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 text-xs font-bold">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                    Đang chạy
                  </span>
                </td>
                <td className="px-6 py-4 text-right">
                  <button className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800">
                    <MoreVertical size={18} />
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
