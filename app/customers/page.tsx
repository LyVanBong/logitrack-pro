import { Plus, Filter, MoreVertical, Building2, Phone, Mail, AlertCircle, CheckCircle2 } from 'lucide-react';

export default function CustomersPage() {
  return (
    <div className="space-y-6 max-w-[1600px] mx-auto">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Khách hàng & Đối tác</h1>
          <p className="text-sm text-slate-500 mt-1">Quản lý hồ sơ, hợp đồng và công nợ khách hàng</p>
        </div>
        <button className="flex items-center justify-center gap-2 bg-primary text-white px-4 py-2 rounded-lg text-sm font-semibold shadow-lg shadow-primary/20 hover:bg-primary/90 transition-all">
          <Plus size={18} />
          Thêm khách hàng
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
          <p className="text-sm font-medium text-slate-500 mb-2">Tổng số khách hàng</p>
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white">124</h3>
          <p className="text-sm text-emerald-500 font-medium mt-2">+5 khách hàng mới tháng này</p>
        </div>
        <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
          <p className="text-sm font-medium text-slate-500 mb-2">Tổng công nợ phải thu</p>
          <h3 className="text-2xl font-bold text-blue-500">1.250.000.000đ</h3>
          <p className="text-sm text-slate-400 mt-2">Từ 28 khách hàng</p>
        </div>
        <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
          <p className="text-sm font-medium text-slate-500 mb-2">Cảnh báo nợ quá hạn</p>
          <h3 className="text-2xl font-bold text-rose-500">3 Khách hàng</h3>
          <p className="text-sm text-rose-500/80 mt-2 flex items-center gap-1">
            <AlertCircle size={14} /> Cần thu hồi ngay
          </p>
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-3">
        <select className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg px-4 py-2 text-sm text-slate-700 dark:text-slate-300 outline-none">
          <option>Tất cả trạng thái</option>
          <option>Đang hoạt động</option>
          <option>Ngừng giao dịch</option>
        </select>
        <select className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg px-4 py-2 text-sm text-slate-700 dark:text-slate-300 outline-none">
          <option>Sắp xếp theo: Công nợ giảm dần</option>
          <option>Sắp xếp theo: Tên A-Z</option>
        </select>
        <button className="flex items-center gap-2 px-4 py-2 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-lg text-sm font-medium hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
          <Filter size={16} />
          Lọc nâng cao
        </button>
      </div>

      <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-slate-50 dark:bg-slate-800/50 border-b border-slate-200 dark:border-slate-800">
                <th className="px-6 py-4 text-xs font-bold uppercase text-slate-500 tracking-wider">Khách hàng</th>
                <th className="px-6 py-4 text-xs font-bold uppercase text-slate-500 tracking-wider">Liên hệ</th>
                <th className="px-6 py-4 text-xs font-bold uppercase text-slate-500 tracking-wider text-right">Công nợ hiện tại</th>
                <th className="px-6 py-4 text-xs font-bold uppercase text-slate-500 tracking-wider text-right">Hạn mức tín dụng</th>
                <th className="px-6 py-4 text-xs font-bold uppercase text-slate-500 tracking-wider">Trạng thái</th>
                <th className="px-6 py-4 text-xs font-bold uppercase text-slate-500 tracking-wider text-right">Thao tác</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
              <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="size-10 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 shrink-0">
                      <Building2 size={20} />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-slate-900 dark:text-white">Công ty Cổ phần Logistics X</p>
                      <p className="text-xs text-slate-500">Mã: KH-001</p>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="space-y-1">
                    <p className="text-xs text-slate-600 dark:text-slate-400 flex items-center gap-1.5">
                      <Phone size={12} /> 0901 234 567
                    </p>
                    <p className="text-xs text-slate-600 dark:text-slate-400 flex items-center gap-1.5">
                      <Mail size={12} /> contact@logisticsx.vn
                    </p>
                  </div>
                </td>
                <td className="px-6 py-4 text-right">
                  <p className="text-sm font-bold text-slate-900 dark:text-white">450.000.000đ</p>
                  <p className="text-xs text-slate-500">Chu kỳ: 30 ngày</p>
                </td>
                <td className="px-6 py-4 text-right">
                  <p className="text-sm font-medium text-slate-600 dark:text-slate-400">1.000.000.000đ</p>
                  <div className="w-full bg-slate-100 dark:bg-slate-800 h-1.5 rounded-full mt-1.5 overflow-hidden flex justify-end">
                    <div className="bg-blue-500 h-full w-[45%] rounded-full"></div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400">
                    <CheckCircle2 size={12} /> An toàn
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
                  <div className="flex items-center gap-3">
                    <div className="size-10 rounded-lg bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center text-orange-600 dark:text-orange-400 shrink-0">
                      <Building2 size={20} />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-slate-900 dark:text-white">Tập đoàn Sản xuất Y</p>
                      <p className="text-xs text-slate-500">Mã: KH-042</p>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="space-y-1">
                    <p className="text-xs text-slate-600 dark:text-slate-400 flex items-center gap-1.5">
                      <Phone size={12} /> 0988 765 432
                    </p>
                    <p className="text-xs text-slate-600 dark:text-slate-400 flex items-center gap-1.5">
                      <Mail size={12} /> account@groupy.com
                    </p>
                  </div>
                </td>
                <td className="px-6 py-4 text-right">
                  <p className="text-sm font-bold text-rose-500">850.000.000đ</p>
                  <p className="text-xs text-rose-500/80">Quá hạn 5 ngày</p>
                </td>
                <td className="px-6 py-4 text-right">
                  <p className="text-sm font-medium text-slate-600 dark:text-slate-400">800.000.000đ</p>
                  <div className="w-full bg-slate-100 dark:bg-slate-800 h-1.5 rounded-full mt-1.5 overflow-hidden flex justify-end">
                    <div className="bg-rose-500 h-full w-full rounded-full"></div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium bg-rose-100 text-rose-800 dark:bg-rose-900/30 dark:text-rose-400">
                    <AlertCircle size={12} /> Vượt hạn mức
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
