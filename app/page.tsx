import { DollarSign, Wallet, LayoutGrid, Clock, TrendingUp, TrendingDown, MapPin, AlertTriangle, CheckCircle2 } from 'lucide-react';

export default function Dashboard() {
  return (
    <div className="space-y-8 max-w-[1600px] mx-auto">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">Tổng quan hệ thống</h1>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Theo dõi các chỉ số quan trọng và hoạt động trong ngày</p>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="flex flex-col gap-3 rounded-2xl p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-all">
          <div className="flex justify-between items-start">
            <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">Tổng doanh thu</p>
            <div className="p-2 bg-primary/10 rounded-xl text-primary">
              <DollarSign size={20} />
            </div>
          </div>
          <p className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">2.45B</p>
          <div className="flex items-center gap-1 text-emerald-500 text-sm font-semibold mt-1">
            <TrendingUp size={16} />
            <span>+12.5%</span>
            <span className="text-slate-400 font-normal ml-1">so với tháng trước</span>
          </div>
        </div>
        
        <div className="flex flex-col gap-3 rounded-2xl p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-all">
          <div className="flex justify-between items-start">
            <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">Lợi nhuận ròng</p>
            <div className="p-2 bg-emerald-500/10 rounded-xl text-emerald-500">
              <Wallet size={20} />
            </div>
          </div>
          <p className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">850M</p>
          <div className="flex items-center gap-1 text-emerald-500 text-sm font-semibold mt-1">
            <TrendingUp size={16} />
            <span>+8.2%</span>
            <span className="text-slate-400 font-normal ml-1">biên độ ổn định</span>
          </div>
        </div>

        <div className="flex flex-col gap-3 rounded-2xl p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-all">
          <div className="flex justify-between items-start">
            <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">Hiệu suất đội xe</p>
            <div className="p-2 bg-blue-500/10 rounded-xl text-blue-500">
              <LayoutGrid size={20} />
            </div>
          </div>
          <p className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">45<span className="text-lg text-slate-400 font-medium">/50</span></p>
          <div className="w-full bg-slate-100 dark:bg-slate-800 h-2 rounded-full mt-2 overflow-hidden">
            <div className="bg-blue-500 h-full w-[90%] rounded-full"></div>
          </div>
          <p className="text-slate-400 dark:text-slate-500 text-xs mt-1">90% công suất đang hoạt động</p>
        </div>

        <div className="flex flex-col gap-3 rounded-2xl p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-all">
          <div className="flex justify-between items-start">
            <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">Đơn hàng chờ</p>
            <div className="p-2 bg-orange-500/10 rounded-xl text-orange-500">
              <Clock size={20} />
            </div>
          </div>
          <p className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">12</p>
          <div className="flex items-center gap-1 text-orange-500 text-sm font-semibold mt-1">
            <AlertTriangle size={16} />
            <span>Cần xác nhận ngay</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Active Orders */}
        <div className="lg:col-span-2 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
          <div className="p-6 border-b border-slate-200 dark:border-slate-800 flex justify-between items-center">
            <h3 className="font-bold text-base text-slate-900 dark:text-white">Lệnh điều phối đang thực hiện</h3>
            <button className="text-primary text-sm font-medium hover:underline">Xem tất cả</button>
          </div>
          <div className="p-6 space-y-6">
            <div className="space-y-2">
              <div className="flex justify-between items-center text-sm">
                <span className="font-bold text-slate-900 dark:text-white">#ORD-8829 - Xe 51C-123.45</span>
                <span className="text-primary font-bold">75%</span>
              </div>
              <div className="w-full bg-slate-100 dark:bg-slate-800 h-2 rounded-full overflow-hidden">
                <div className="bg-primary h-full w-[75%] rounded-full"></div>
              </div>
              <p className="text-xs text-slate-500 flex items-center gap-1">
                <MapPin size={14} /> HCM → Đà Nẵng (Dự kiến 14:00)
              </p>
            </div>
            
            <div className="space-y-2">
              <div className="flex justify-between items-center text-sm">
                <span className="font-bold text-slate-900 dark:text-white">#ORD-8830 - Xe 29H-998.22</span>
                <span className="text-orange-500 font-bold">30%</span>
              </div>
              <div className="w-full bg-slate-100 dark:bg-slate-800 h-2 rounded-full overflow-hidden">
                <div className="bg-orange-500 h-full w-[30%] rounded-full"></div>
              </div>
              <p className="text-xs text-slate-500 flex items-center gap-1">
                <MapPin size={14} /> Hải Phòng → Hà Nội
              </p>
            </div>
          </div>
        </div>

        {/* System Alerts */}
        <div className="rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm p-6">
          <h3 className="font-bold text-base mb-6 flex items-center gap-2 text-slate-900 dark:text-white">
            <AlertTriangle className="text-rose-500" size={20} /> Cảnh báo hệ thống
          </h3>
          <div className="space-y-4">
            <div className="flex gap-3 p-3 rounded-lg bg-rose-50 dark:bg-rose-900/10 border border-rose-100 dark:border-rose-900/30">
              <div className="size-8 bg-rose-100 dark:bg-rose-900/30 rounded flex items-center justify-center text-rose-500 shrink-0">
                <AlertTriangle size={16} />
              </div>
              <div>
                <p className="text-sm font-bold text-slate-900 dark:text-rose-100">Bảo trì xe 51C-112.00</p>
                <p className="text-xs text-slate-500 dark:text-rose-200/70 mt-0.5">Quá hạn bảo trì 3 ngày</p>
              </div>
            </div>
            <div className="flex gap-3 p-3 rounded-lg bg-orange-50 dark:bg-orange-900/10 border border-orange-100 dark:border-orange-900/30">
              <div className="size-8 bg-orange-100 dark:bg-orange-900/30 rounded flex items-center justify-center text-orange-500 shrink-0">
                <Clock size={16} />
              </div>
              <div>
                <p className="text-sm font-bold text-slate-900 dark:text-orange-100">BH bắt buộc sắp hết hạn</p>
                <p className="text-xs text-slate-500 dark:text-orange-200/70 mt-0.5">3 xe cần gia hạn trước 20/10</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Transactions */}
      <div className="rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
        <div className="px-6 py-5 border-b border-slate-200 dark:border-slate-800 flex justify-between items-center bg-slate-50/50 dark:bg-slate-800/50">
          <h3 className="font-bold text-base text-slate-900 dark:text-white">Giao dịch & Sự kiện gần đây</h3>
          <select className="text-sm bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg px-3 py-1.5 outline-none text-slate-700 dark:text-slate-300 focus:ring-2 focus:ring-primary/50 transition-all">
            <option>Tất cả trạng thái</option>
            <option>Hoàn thành</option>
            <option>Đang chờ</option>
          </select>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-slate-50 dark:bg-slate-800/30 text-slate-500 dark:text-slate-400 text-xs font-bold uppercase tracking-wider">
                <th className="px-6 py-4">Mã GD / Sự kiện</th>
                <th className="px-6 py-4">Nội dung</th>
                <th className="px-6 py-4">Loại</th>
                <th className="px-6 py-4">Thời gian</th>
                <th className="px-6 py-4 text-right">Giá trị</th>
                <th className="px-6 py-4 text-center">Trạng thái</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
              <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                <td className="px-6 py-4 text-sm font-bold text-slate-900 dark:text-white">#TRX-9920</td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="size-8 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                      <CheckCircle2 size={16} />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-slate-900 dark:text-white">Giao hàng thành công - Đại lý Hải Nam</p>
                      <p className="text-xs text-slate-500">Chuyến #ORD-7711</p>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-300">Vận hành</td>
                <td className="px-6 py-4 text-sm text-slate-500">10:45 AM, Hôm nay</td>
                <td className="px-6 py-4 text-sm font-bold text-emerald-500 text-right">+12.400.000đ</td>
                <td className="px-6 py-4 text-center">
                  <span className="px-2.5 py-1 rounded-full text-[10px] bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 font-bold uppercase">Hoàn tất</span>
                </td>
              </tr>
              <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                <td className="px-6 py-4 text-sm font-bold text-slate-900 dark:text-white">#TRX-9919</td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="size-8 rounded-full bg-rose-100 dark:bg-rose-900/10 flex items-center justify-center text-rose-500 shrink-0">
                      <Wallet size={16} />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-slate-900 dark:text-white">Chi phí nhiên liệu - Trạm xăng PV Oil #4</p>
                      <p className="text-xs text-slate-500">Thanh toán qua ví nội bộ</p>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-300">Tài chính</td>
                <td className="px-6 py-4 text-sm text-slate-500">09:12 AM, Hôm nay</td>
                <td className="px-6 py-4 text-sm font-bold text-rose-500 text-right">-5.200.000đ</td>
                <td className="px-6 py-4 text-center">
                  <span className="px-2.5 py-1 rounded-full text-[10px] bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 font-bold uppercase">Đã trả</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
