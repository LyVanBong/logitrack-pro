import { Plus, Filter, MoreVertical, MapPin } from 'lucide-react';

export default function DispatchPage() {
  return (
    <div className="space-y-8 max-w-[1600px] mx-auto">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">Danh sách Lệnh điều phối</h1>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Quản lý và theo dõi các chuyến hàng</p>
        </div>
        <button className="flex items-center justify-center gap-2 bg-primary text-white px-5 py-2.5 rounded-xl text-sm font-semibold shadow-lg shadow-primary/20 hover:bg-primary/90 transition-all">
          <Plus size={18} />
          Tạo lệnh mới
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-all">
          <p className="text-xs text-slate-500 dark:text-slate-400 uppercase font-bold tracking-wider mb-2">Mới tạo</p>
          <p className="text-3xl font-bold tracking-tight text-blue-500">12</p>
        </div>
        <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-all">
          <p className="text-xs text-slate-500 dark:text-slate-400 uppercase font-bold tracking-wider mb-2">Đang đi</p>
          <p className="text-3xl font-bold tracking-tight text-amber-500">08</p>
        </div>
        <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-all">
          <p className="text-xs text-slate-500 dark:text-slate-400 uppercase font-bold tracking-wider mb-2">Hoàn thành</p>
          <p className="text-3xl font-bold tracking-tight text-emerald-500">45</p>
        </div>
        <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-all">
          <p className="text-xs text-slate-500 dark:text-slate-400 uppercase font-bold tracking-wider mb-2">Đã hủy</p>
          <p className="text-3xl font-bold tracking-tight text-slate-400">03</p>
        </div>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap items-center gap-3">
        <select className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-2.5 text-sm font-medium text-slate-700 dark:text-slate-300 outline-none focus:ring-2 focus:ring-primary/50 transition-all shadow-sm">
          <option>Tất cả trạng thái</option>
          <option>Mới tạo</option>
          <option>Đang di chuyển</option>
        </select>
        <select className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-2.5 text-sm font-medium text-slate-700 dark:text-slate-300 outline-none focus:ring-2 focus:ring-primary/50 transition-all shadow-sm">
          <option>Hôm nay</option>
          <option>7 ngày qua</option>
        </select>
        <button className="flex items-center gap-2 px-4 py-2.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 rounded-xl text-sm font-medium hover:bg-slate-50 dark:hover:bg-slate-800 transition-all shadow-sm">
          <Filter size={16} />
          Lọc nâng cao
        </button>
      </div>

      {/* Table */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-slate-50 dark:bg-slate-800/50 border-b border-slate-200 dark:border-slate-800">
                <th className="px-6 py-4 text-xs font-bold uppercase text-slate-500 tracking-wider">Mã lệnh</th>
                <th className="px-6 py-4 text-xs font-bold uppercase text-slate-500 tracking-wider">Tài xế</th>
                <th className="px-6 py-4 text-xs font-bold uppercase text-slate-500 tracking-wider">Khách hàng</th>
                <th className="px-6 py-4 text-xs font-bold uppercase text-slate-500 tracking-wider">Lộ trình</th>
                <th className="px-6 py-4 text-xs font-bold uppercase text-slate-500 tracking-wider">Trạng thái</th>
                <th className="px-6 py-4 text-xs font-bold uppercase text-slate-500 tracking-wider text-right">Thao tác</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
              <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors">
                <td className="px-6 py-4 font-mono font-bold text-primary dark:text-blue-400">#LD001</td>
                <td className="px-6 py-4">
                  <p className="text-sm font-semibold text-slate-900 dark:text-white">Nguyễn Văn A</p>
                  <p className="text-xs text-slate-500">29C-123.45</p>
                </td>
                <td className="px-6 py-4">
                  <p className="text-sm font-medium text-slate-900 dark:text-white">Công ty Logistics X</p>
                  <p className="text-xs text-slate-500">KCN Thăng Long</p>
                </td>
                <td className="px-6 py-4">
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-slate-400"></span>
                      <span className="text-xs text-slate-600 dark:text-slate-400">Hà Nội</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-primary"></span>
                      <span className="text-xs font-medium text-slate-900 dark:text-white">Hải Phòng</span>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400">
                    Mới tạo
                  </span>
                </td>
                <td className="px-6 py-4 text-right">
                  <button className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800">
                    <MoreVertical size={18} />
                  </button>
                </td>
              </tr>
              <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors">
                <td className="px-6 py-4 font-mono font-bold text-primary dark:text-blue-400">#LD002</td>
                <td className="px-6 py-4">
                  <p className="text-sm font-semibold text-slate-900 dark:text-white">Trần Văn B</p>
                  <p className="text-xs text-slate-500">51D-987.65</p>
                </td>
                <td className="px-6 py-4">
                  <p className="text-sm font-medium text-slate-900 dark:text-white">Kho vận Y</p>
                  <p className="text-xs text-slate-500">Quận 7, TP.HCM</p>
                </td>
                <td className="px-6 py-4">
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-slate-400"></span>
                      <span className="text-xs text-slate-600 dark:text-slate-400">TP.HCM</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-primary"></span>
                      <span className="text-xs font-medium text-slate-900 dark:text-white">Bình Dương</span>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400">
                    Đang di chuyển
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
