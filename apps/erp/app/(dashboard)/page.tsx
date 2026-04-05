import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Truck, AlertTriangle, CheckCircle2, DollarSign, TrendingUp, Users } from "lucide-react"

export default function Dashboard() {
  return (
    <div className="flex flex-col gap-6 md:p-4">
      <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-tt-primary dark:text-slate-100">Tổng quan hệ thống</h2>
          <p className="text-slate-500 dark:text-slate-400">
            Theo dõi tình trạng hoạt động của đội xe và doanh thu hôm nay.
          </p>
        </div>
        <div className="flex gap-3">
          <a href="https://github.com/LyVanBong/logitrack-pro" target="_blank" rel="noreferrer noopener" className="flex items-center gap-2 rounded-lg bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-900 transition-colors hover:bg-slate-200 dark:bg-slate-800 dark:text-white dark:hover:bg-slate-700">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-github"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A4.8 4.8 0 0 0 8 18v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
            Mã nguồn GitHub
          </a>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Doanh thu trong ngày</CardTitle>
            <DollarSign className="h-4 w-4 text-slate-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-tt-primary dark:text-white">125,500,000 ₫</div>
            <p className="mt-1 flex items-center gap-1 text-xs text-slate-500">
              <TrendingUp className="h-4 w-4 text-tt-success" />
              <span className="font-medium text-tt-success">+15.5%</span> so với hôm qua
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Đội xe đang chạy</CardTitle>
            <Truck className="h-4 w-4 text-tt-secondary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-tt-primary dark:text-white">22 / 28</div>
            <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-slate-100 dark:bg-slate-800">
              <div className="h-full bg-tt-secondary" style={{ width: '78%' }} />
            </div>
            <p className="mt-2 text-xs text-slate-500">78% năng suất</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Chuyến hoàn thành</CardTitle>
            <CheckCircle2 className="h-4 w-4 text-tt-success" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-tt-primary dark:text-white">35</div>
            <p className="mt-1 flex items-center gap-1 text-xs text-slate-500">
              <span className="font-medium text-slate-900 dark:text-slate-100">8</span> chuyến đang giao
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Cảnh báo hệ thống</CardTitle>
            <AlertTriangle className="h-4 w-4 text-tt-warning" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-tt-danger">3</div>
            <p className="mt-1 flex gap-2 text-xs text-slate-500">
               <span>2 đến hạn Đăng kiểm</span>
               <span>1 Quá hạn nợ</span>
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        {/* Main Chart Area */}
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>Biểu đồ Doanh thu (7 ngày)</CardTitle>
          </CardHeader>
          <CardContent className="pl-2">
             <div className="relative mt-4 h-[300px] w-full pb-6 pl-12">
                {/* Y-Axis Grid Lines & Labels */}
                <div className="absolute bottom-6 left-12 flex flex-col justify-between border-b border-l border-slate-200 inset-0 dark:border-slate-800">
                  {[150, 100, 50, 0].map((val, i) => (
                    <div key={i} className="relative h-0 w-full border-t border-slate-100 dark:border-slate-800/50">
                      <span className="absolute -left-12 -top-2.5 w-10 pr-2 text-right text-xs text-slate-400">
                        {val > 0 ? `${val}tr` : '0'}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Bars & X-Axis */}
                <div className="absolute bottom-6 left-12 z-10 flex items-end justify-between gap-2 px-2 inset-0">
                  {[
                    { percent: 30.0, label: "T2", value: "45,000,000đ" },
                    { percent: 57.0, label: "T3", value: "85,500,000đ" },
                    { percent: 37.4, label: "T4", value: "56,200,000đ" },
                    { percent: 73.3, label: "T5", value: "110,000,000đ" },
                    { percent: 47.2, label: "T6", value: "70,800,000đ" },
                    { percent: 83.6, label: "T7", value: "125,500,000đ" },
                    { percent: 63.3, label: "CN", value: "95,000,000đ" }
                  ].map((item, i) => (
                    <div key={i} className="group relative flex h-full w-full cursor-pointer items-end justify-center">
                      <div
                        className="w-4/5 rounded-t-lg bg-tt-primary/30 transition-all duration-300 group-hover:bg-tt-primary"
                        style={{ height: `${item.percent}%` }}
                      />
                      <div className="absolute -top-10 z-20 block whitespace-nowrap rounded-md bg-slate-900 px-3 py-1.5 text-xs font-bold text-white opacity-0 shadow-lg pointer-events-none transition-opacity duration-200 group-hover:opacity-100 dark:bg-slate-50 dark:text-slate-900">
                         {item.value}
                         <div className="absolute -bottom-1 left-1/2 h-2 w-2 -translate-x-1/2 rotate-45 bg-slate-900 dark:bg-slate-50"></div>
                      </div>
                      <div className="absolute -bottom-6 text-xs font-semibold text-slate-500 transition-colors group-hover:text-tt-primary">
                        {item.label}
                      </div>
                    </div>
                  ))}
                </div>
             </div>
          </CardContent>
        </Card>

        {/* Fleet Status Summary */}
        <Card className="col-span-3">
          <CardHeader>
            <CardTitle>Trạng thái Đội xe</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex justify-center py-4">
               <div className="relative flex h-40 w-40 items-center justify-center rounded-full border-[16px] border-slate-100 dark:border-slate-800">
                  <div className="absolute inset-0 -rotate-45 rounded-full border-[16px] border-b-transparent border-l-transparent border-r-tt-secondary border-t-tt-secondary" />
                  <div className="absolute inset-0 rotate-[135deg] rounded-full border-[16px] border-b-transparent border-l-transparent border-r-transparent border-t-tt-warning" />

                  <div className="text-center">
                    <span className="text-3xl font-bold text-tt-primary dark:text-white">25</span>
                    <span className="block text-xs text-slate-500">Tổng xe</span>
                  </div>
               </div>
            </div>

            <div className="mt-6 space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-tt-secondary" />
                  <span className="text-sm font-medium">Đang chạy</span>
                </div>
                <span className="text-sm font-bold text-tt-primary dark:text-white">18 (72%)</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-tt-warning" />
                  <span className="text-sm font-medium">Nằm bãi / Đang sửa</span>
                </div>
                <span className="text-sm font-bold text-tt-primary dark:text-white">7 (28%)</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-2">
        {/* KPI Leaderboard */}
        <Card>
          <CardHeader>
            <CardTitle>Top Tài Xế Tiết Kiệm Dầu</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { name: "Lưu Văn A", km: "4,200", saved: "45" },
                { name: "Lê Ngọc C", km: "4,100", saved: "38" },
                { name: "Trần Kim B", km: "3,800", saved: "32" },
                { name: "Ngô Văn G", km: "3,500", saved: "28" },
                { name: "Trần Thế F", km: "3,200", saved: "15" },
              ].map((driver, i) => (
                <div key={i} className="flex items-center justify-between rounded-lg p-2 transition-colors hover:bg-slate-50 dark:hover:bg-slate-900/50">
                  <div className="flex items-center gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-tt-primary/10 text-xs font-bold text-tt-primary dark:bg-tt-primary/20 dark:text-blue-300">
                      #{i+1}
                    </div>
                    <div>
                      <p className="text-sm font-medium">{driver.name}</p>
                      <p className="text-xs text-slate-500">{driver.km} km tháng này</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-bold text-tt-success">-{driver.saved}L</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Recent Alerts */}
        <Card>
          <CardHeader>
             <CardTitle className="flex items-center gap-2 text-tt-danger">
               <AlertTriangle className="h-5 w-5"/>
               Cần xử lý ngay
             </CardTitle>
          </CardHeader>
          <CardContent>
             <div className="space-y-4">
                <div className="flex gap-3 border-l-2 border-tt-danger pl-3">
                   <div className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-tt-danger"/>
                   <div>
                     <p className="text-sm font-medium">Xe 29C-123.45 sắp hết hạn đăng kiểm</p>
                     <p className="text-xs text-slate-500">Còn 2 ngày - Hạn: 20/03/2026</p>
                   </div>
                </div>
                <div className="flex gap-3 border-l-2 border-tt-warning pl-3">
                   <div className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-tt-warning"/>
                   <div>
                     <p className="text-sm font-medium">Khoản chi sửa chữa vượt định mức 15%</p>
                     <p className="text-xs text-slate-500">Trip #1024 - Xe 29C-456.78 - Chờ duyệt Admin</p>
                   </div>
                </div>
                <div className="flex gap-3 border-l-2 border-tt-warning pl-3">
                   <div className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-tt-warning"/>
                   <div>
                     <p className="text-sm font-medium">Công ty TNHH Logistics XYZ nợ quá hạn</p>
                     <p className="text-xs text-slate-500">Số tiền: 45,000,000đ - Quá hạn 5 ngày</p>
                   </div>
                </div>
             </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
