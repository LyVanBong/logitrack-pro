import { DollarSign, Wallet, TrendingUp, TrendingDown, Receipt, CheckCircle2, XCircle, Clock, FileText, Download } from 'lucide-react';

export default function FinancePage() {
  return (
    <div className="space-y-6 max-w-[1600px] mx-auto">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Tài chính & Kế toán</h1>
          <p className="text-sm text-slate-500 mt-1">Quản lý dòng tiền, duyệt chi phí và báo cáo lãi lỗ</p>
        </div>
        <div className="flex gap-2">
          <button className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 rounded-lg text-sm font-medium hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
            <Download size={16} />
            Xuất báo cáo P&L
          </button>
          <button className="flex items-center justify-center gap-2 bg-primary text-white px-4 py-2 rounded-lg text-sm font-semibold shadow-lg shadow-primary/20 hover:bg-primary/90 transition-all">
            <Plus size={18} />
            Tạo phiếu chi
          </button>
        </div>
      </div>

      {/* Cashflow Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-gradient-to-br from-primary to-blue-800 p-6 rounded-xl text-white shadow-md relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-20">
            <Wallet size={64} />
          </div>
          <p className="text-sm font-medium text-blue-100 mb-2">Tổng số dư khả dụng</p>
          <h3 className="text-3xl font-bold">3.250.000.000đ</h3>
          <div className="mt-4 pt-4 border-t border-white/20 flex justify-between text-sm">
            <span>Tiền mặt: 250M</span>
            <span>Ngân hàng: 3.0B</span>
          </div>
        </div>
        <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
          <div className="flex justify-between items-start">
            <p className="text-sm font-medium text-slate-500 mb-2">Phải thu (Khách hàng)</p>
            <TrendingUp className="text-emerald-500" size={20} />
          </div>
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white">1.250.000.000đ</h3>
          <p className="text-sm text-rose-500 font-medium mt-2">250M đã quá hạn</p>
        </div>
        <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
          <div className="flex justify-between items-start">
            <p className="text-sm font-medium text-slate-500 mb-2">Phải trả (NCC, Ngân hàng)</p>
            <TrendingDown className="text-rose-500" size={20} />
          </div>
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white">850.000.000đ</h3>
          <p className="text-sm text-slate-400 mt-2">Đến hạn trong 7 ngày: 120M</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Expense Approvals (Duyệt chi phí từ tài xế) */}
        <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col">
          <div className="p-5 border-b border-slate-200 dark:border-slate-800 flex justify-between items-center">
            <h3 className="font-bold text-base text-slate-900 dark:text-white flex items-center gap-2">
              <Receipt size={18} className="text-primary" />
              Chờ duyệt chi phí (Từ Lái xe)
            </h3>
            <span className="bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400 text-xs font-bold px-2.5 py-1 rounded-full">
              12 Yêu cầu
            </span>
          </div>
          <div className="flex-1 overflow-y-auto p-0">
            <div className="divide-y divide-slate-100 dark:divide-slate-800">
              {/* Approval Item 1 */}
              <div className="p-5 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <p className="text-sm font-bold text-slate-900 dark:text-white">Đổ dầu - Trạm Petrolimex #12</p>
                    <p className="text-xs text-slate-500 mt-0.5">Chuyến: #LD001 • Xe: 29C-123.45 • TX: Nguyễn Văn A</p>
                  </div>
                  <p className="text-sm font-bold text-rose-500">-4.500.000đ</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex-1 flex items-center gap-2 bg-slate-100 dark:bg-slate-800 p-2 rounded-lg border border-slate-200 dark:border-slate-700">
                    <FileText size={16} className="text-slate-400" />
                    <span className="text-xs text-slate-600 dark:text-slate-400 font-medium">hoadon_dau_1204.jpg</span>
                    <button className="ml-auto text-xs text-primary font-semibold hover:underline">Xem ảnh</button>
                  </div>
                  <div className="flex gap-2 shrink-0">
                    <button className="p-2 rounded-lg bg-emerald-100 text-emerald-600 hover:bg-emerald-200 dark:bg-emerald-900/30 dark:text-emerald-400 dark:hover:bg-emerald-900/50 transition-colors" title="Duyệt">
                      <CheckCircle2 size={18} />
                    </button>
                    <button className="p-2 rounded-lg bg-rose-100 text-rose-600 hover:bg-rose-200 dark:bg-rose-900/30 dark:text-rose-400 dark:hover:bg-rose-900/50 transition-colors" title="Từ chối">
                      <XCircle size={18} />
                    </button>
                  </div>
                </div>
              </div>

              {/* Approval Item 2 */}
              <div className="p-5 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <p className="text-sm font-bold text-slate-900 dark:text-white">Vé trạm thu phí BOT Pháp Vân</p>
                    <p className="text-xs text-slate-500 mt-0.5">Chuyến: #LD001 • Xe: 29C-123.45 • TX: Nguyễn Văn A</p>
                  </div>
                  <p className="text-sm font-bold text-rose-500">-120.000đ</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex-1 flex items-center gap-2 bg-slate-100 dark:bg-slate-800 p-2 rounded-lg border border-slate-200 dark:border-slate-700">
                    <FileText size={16} className="text-slate-400" />
                    <span className="text-xs text-slate-600 dark:text-slate-400 font-medium">ve_bot_phapvan.jpg</span>
                    <button className="ml-auto text-xs text-primary font-semibold hover:underline">Xem ảnh</button>
                  </div>
                  <div className="flex gap-2 shrink-0">
                    <button className="p-2 rounded-lg bg-emerald-100 text-emerald-600 hover:bg-emerald-200 dark:bg-emerald-900/30 dark:text-emerald-400 dark:hover:bg-emerald-900/50 transition-colors" title="Duyệt">
                      <CheckCircle2 size={18} />
                    </button>
                    <button className="p-2 rounded-lg bg-rose-100 text-rose-600 hover:bg-rose-200 dark:bg-rose-900/30 dark:text-rose-400 dark:hover:bg-rose-900/50 transition-colors" title="Từ chối">
                      <XCircle size={18} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="p-4 border-t border-slate-200 dark:border-slate-800 text-center">
            <button className="text-sm font-medium text-primary hover:underline">Xem tất cả yêu cầu</button>
          </div>
        </div>

        {/* Bank Accounts & Cash */}
        <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col">
          <div className="p-5 border-b border-slate-200 dark:border-slate-800 flex justify-between items-center">
            <h3 className="font-bold text-base text-slate-900 dark:text-white flex items-center gap-2">
              <Wallet size={18} className="text-primary" />
              Sổ quỹ & Tài khoản
            </h3>
          </div>
          <div className="p-5 space-y-4">
            <div className="flex items-center justify-between p-4 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 font-bold text-lg">
                  MB
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-900 dark:text-white">MB Bank - Cty Vận Tải</p>
                  <p className="text-xs text-slate-500 font-mono mt-0.5">1900 2000 3000</p>
                </div>
              </div>
              <p className="text-lg font-bold text-slate-900 dark:text-white">2.150.000.000đ</p>
            </div>

            <div className="flex items-center justify-between p-4 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center text-emerald-600 dark:text-emerald-400 font-bold text-lg">
                  VCB
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-900 dark:text-white">Vietcombank - Giao dịch</p>
                  <p className="text-xs text-slate-500 font-mono mt-0.5">0011 0022 0033</p>
                </div>
              </div>
              <p className="text-lg font-bold text-slate-900 dark:text-white">850.000.000đ</p>
            </div>

            <div className="flex items-center justify-between p-4 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center text-amber-600 dark:text-amber-400">
                  <DollarSign size={24} />
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-900 dark:text-white">Quỹ tiền mặt (Cash in hand)</p>
                  <p className="text-xs text-slate-500 mt-0.5">Thủ quỹ: Trần Thị B</p>
                </div>
              </div>
              <p className="text-lg font-bold text-slate-900 dark:text-white">250.000.000đ</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
// Add Plus icon import
import { Plus } from 'lucide-react';
