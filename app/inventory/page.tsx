import { Plus, Filter, Download, Package, AlertTriangle, Truck, Building2, MoreHorizontal } from 'lucide-react';

export default function InventoryPage() {
  return (
    <div className="space-y-6 max-w-[1600px] mx-auto">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Quản lý Kho & Phụ tùng</h1>
          <p className="text-sm text-slate-500 mt-1">Theo dõi vật tư vận tải thời gian thực</p>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center justify-center gap-2 bg-primary text-white px-4 py-2 rounded-lg text-sm font-semibold shadow-lg shadow-primary/20 hover:bg-primary/90 transition-all">
            <Plus size={18} />
            Nhập kho
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
          <p className="text-sm font-medium text-slate-500 mb-2">Tổng giá trị tồn kho</p>
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white">4.280.000.000đ</h3>
          <p className="text-sm text-emerald-500 font-medium mt-2">+4.2% tháng này</p>
        </div>
        <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
          <p className="text-sm font-medium text-slate-500 mb-2">Linh kiện sắp hết</p>
          <h3 className="text-2xl font-bold text-amber-500">14 loại</h3>
          <p className="text-sm text-slate-400 mt-2">Yêu cầu đặt thêm ngay</p>
        </div>
        <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
          <p className="text-sm font-medium text-slate-500 mb-2">Xuất kho trong ngày</p>
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white">28 đơn</h3>
          <p className="text-sm text-slate-400 mt-2">Phục vụ bảo trì 12 xe</p>
        </div>
        <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
          <p className="text-sm font-medium text-slate-500 mb-2">Nhà cung cấp hoạt động</p>
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white">12 đơn vị</h3>
          <p className="text-sm text-slate-400 mt-2">Sẵn sàng cung ứng</p>
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 dark:border-slate-800 pb-px">
        <div className="flex gap-6">
          <button className="pb-3 text-sm font-bold border-b-2 border-primary text-primary dark:text-white">Tất cả phụ tùng</button>
          <button className="pb-3 text-sm font-medium text-slate-500 hover:text-slate-700 dark:hover:text-slate-300 border-b-2 border-transparent">Lốp xe</button>
          <button className="pb-3 text-sm font-medium text-slate-500 hover:text-slate-700 dark:hover:text-slate-300 border-b-2 border-transparent">Dầu nhớt</button>
          <button className="pb-3 text-sm font-medium text-slate-500 hover:text-slate-700 dark:hover:text-slate-300 border-b-2 border-transparent">Bình điện</button>
        </div>
        <div className="flex gap-2 mb-3">
          <button className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 text-sm font-medium hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300">
            <Filter size={16} /> Lọc
          </button>
          <button className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 text-sm font-medium hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300">
            <Download size={16} /> Xuất báo cáo
          </button>
        </div>
      </div>

      <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-slate-50 dark:bg-slate-800/50 border-b border-slate-200 dark:border-slate-800">
                <th className="px-6 py-4 text-xs font-bold uppercase text-slate-500 tracking-wider">Mã SP</th>
                <th className="px-6 py-4 text-xs font-bold uppercase text-slate-500 tracking-wider">Tên phụ tùng</th>
                <th className="px-6 py-4 text-xs font-bold uppercase text-slate-500 tracking-wider">Danh mục</th>
                <th className="px-6 py-4 text-xs font-bold uppercase text-slate-500 tracking-wider text-right">Tồn kho</th>
                <th className="px-6 py-4 text-xs font-bold uppercase text-slate-500 tracking-wider">Trạng thái</th>
                <th className="px-6 py-4 text-xs font-bold uppercase text-slate-500 tracking-wider text-right">Thao tác</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
              <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors">
                <td className="px-6 py-4 font-mono font-bold text-slate-900 dark:text-white text-sm">PT-1002</td>
                <td className="px-6 py-4">
                  <p className="text-sm font-semibold text-slate-900 dark:text-white">Lốp xe Michelin 12R22.5</p>
                  <p className="text-xs text-slate-500">Nhà cung cấp: Michelin VN</p>
                </td>
                <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-400">Lốp xe</td>
                <td className="px-6 py-4 text-sm font-bold text-slate-900 dark:text-white text-right">45 cái</td>
                <td className="px-6 py-4">
                  <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400">
                    Đủ hàng
                  </span>
                </td>
                <td className="px-6 py-4 text-right">
                  <button className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800">
                    <MoreHorizontal size={18} />
                  </button>
                </td>
              </tr>
              <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors">
                <td className="px-6 py-4 font-mono font-bold text-slate-900 dark:text-white text-sm">PT-2055</td>
                <td className="px-6 py-4">
                  <p className="text-sm font-semibold text-slate-900 dark:text-white">Dầu nhớt Castrol CRB 20W-50</p>
                  <p className="text-xs text-slate-500">Nhà cung cấp: Castrol VN</p>
                </td>
                <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-400">Dầu nhớt</td>
                <td className="px-6 py-4 text-sm font-bold text-amber-500 text-right">12 thùng</td>
                <td className="px-6 py-4">
                  <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400">
                    Sắp hết
                  </span>
                </td>
                <td className="px-6 py-4 text-right">
                  <button className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800">
                    <MoreHorizontal size={18} />
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
