import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Truck, AlertTriangle, CheckCircle2, DollarSign, TrendingUp, TrendingDown, Users, Package } from "lucide-react"

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Tổng quan hệ thống</h2>
          <p className="text-slate-500 dark:text-slate-400">
            Theo dõi tình trạng hoạt động của đội xe và doanh thu hôm nay.
          </p>
        </div>
        <div className="flex items-center gap-2">
          {/* Quick Actions can go here in the future */}
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Doanh thu trong ngày
            </CardTitle>
            <DollarSign className="h-4 w-4 text-slate-500 dark:text-slate-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">125,500,000 ₫</div>
            <p className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1 mt-1">
              <TrendingUp className="h-4 w-4 text-green-500" />
              <span className="text-green-500 font-medium">+15.5%</span> so với hôm qua
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Đội xe đang chạy
            </CardTitle>
            <Truck className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">22 / 28</div>
            <div className="mt-2 h-2 w-full bg-slate-100 rounded-full overflow-hidden dark:bg-slate-800">
              <div className="h-full bg-primary" style={{ width: '78%' }} />
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-2">
              78% năng suất
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Chuyến hoàn thành
            </CardTitle>
            <CheckCircle2 className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">35</div>
            <p className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1 mt-1">
              <span className="text-slate-900 dark:text-slate-100 font-medium">8</span> chuyến đang giao
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Cảnh báo hệ thống
            </CardTitle>
            <AlertTriangle className="h-4 w-4 text-amber-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-amber-600 dark:text-amber-500">3</div>
            <p className="text-xs text-slate-500 flex gap-2 mt-1">
               <span>2 đến hạn Đăng kiểm</span>
               <span>1 Quá hạn nợ</span>
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        {/* Main Chart Area (Placeholder for actual charting library like Recharts) */}
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>Biểu đồ Doanh thu (7 ngày)</CardTitle>
          </CardHeader>
          <CardContent className="pl-2">
             <div className="relative h-[300px] w-full mt-4 pl-12 pb-6">
                {/* Y-Axis (Cột tung) Grid Lines & Labels */}
                <div className="absolute inset-0 left-12 bottom-6 flex flex-col justify-between border-b border-l border-slate-200 dark:border-slate-800">
                  {[150, 100, 50, 0].map((val, i) => (
                    <div key={i} className="relative w-full border-t border-slate-100 dark:border-slate-800/50 h-0">
                      <span className="absolute -left-12 -top-2.5 text-xs text-slate-400 w-10 text-right pr-2">
                        {val > 0 ? `${val}tr` : '0'}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Bars & X-Axis (Cột hoành) */}
                <div className="absolute inset-0 left-12 bottom-6 flex items-end justify-between px-2 gap-2 z-10">
                  {[
                    { percent: 30.0, label: "T2", value: "45,000,000đ" },
                    { percent: 57.0, label: "T3", value: "85,500,000đ" },
                    { percent: 37.4, label: "T4", value: "56,200,000đ" },
                    { percent: 73.3, label: "T5", value: "110,000,000đ" },
                    { percent: 47.2, label: "T6", value: "70,800,000đ" },
                    { percent: 83.6, label: "T7", value: "125,500,000đ" },
                    { percent: 63.3, label: "CN", value: "95,000,000đ" }
                  ].map((item, i) => (
                    <div key={i} className="w-full h-full flex justify-center items-end group relative cursor-pointer">
                      {/* Bar */}
                      <div 
                        className="w-4/5 bg-primary/30 group-hover:bg-primary transition-all duration-300 rounded-t-lg" 
                        style={{ height: `${item.percent}%` }}
                      />
                      
                      {/* Tooltip on Hover */}
                      <div className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-slate-900 text-white text-xs font-bold rounded-md py-1.5 px-3 block -top-10 whitespace-nowrap z-20 pointer-events-none shadow-lg dark:bg-slate-50 dark:text-slate-900">
                         {item.value}
                         {/* Arrow indicator for tooltip */}
                         <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-slate-900 dark:bg-slate-50 rotate-45"></div>
                      </div>
                      
                      {/* X-Axis Label */}
                      <div className="absolute -bottom-6 text-xs font-semibold text-slate-500 group-hover:text-primary transition-colors">
                        {item.label}
                      </div>
                    </div>
                  ))}
                </div>
             </div>
          </CardContent>
        </Card>

        {/* Fleet Status Summary / Donut Chart alternative */}
        <Card className="col-span-3">
          <CardHeader>
            <CardTitle>Trạng thái Đội xe</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex justify-center py-4">
               {/* CSS Only Donut Chart Approximation */}
               <div className="relative w-40 h-40 rounded-full border-[16px] border-slate-100 dark:border-slate-800 flex items-center justify-center">
                  <div className="absolute inset-0 rounded-full border-[16px] border-t-primary border-r-primary border-b-transparent border-l-transparent -rotate-45" />
                  <div className="absolute inset-0 rounded-full border-[16px] border-t-amber-500 border-r-transparent border-b-transparent border-l-transparent rotate-[135deg]" />
                  
                  <div className="text-center">
                    <span className="text-3xl font-bold">25</span>
                    <span className="block text-xs text-slate-500">Tổng xe</span>
                  </div>
               </div>
            </div>
            
            <div className="space-y-3 mt-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-primary" />
                  <span className="text-sm font-medium">Đang chạy</span>
                </div>
                <span className="text-sm font-bold">18 (72%)</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-amber-500" />
                  <span className="text-sm font-medium">Nằm bãi / Đang sửa</span>
                </div>
                <span className="text-sm font-bold">7 (28%)</span>
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
                <div key={i} className="flex items-center justify-between p-2 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-900/50 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-xs">
                      #{i+1}
                    </div>
                    <div>
                      <p className="text-sm font-medium">{driver.name}</p>
                      <p className="text-xs text-slate-500">{driver.km} km tháng này</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-bold text-green-500">-{driver.saved}L</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Recent Alerts */}
        <Card>
          <CardHeader>
             <CardTitle className="flex items-center gap-2 text-rose-600 dark:text-rose-500">
               <AlertTriangle className="w-5 h-5"/>
               Cần xử lý ngay
             </CardTitle>
          </CardHeader>
          <CardContent>
             <div className="space-y-4">
                <div className="flex gap-3 border-l-2 border-rose-500 pl-3">
                   <div className="w-2 h-2 mt-1.5 rounded-full bg-rose-500 shrink-0"/>
                   <div>
                     <p className="text-sm font-medium">Xe 29C-123.45 sắp hết hạn đăng kiểm</p>
                     <p className="text-xs text-slate-500">Còn 2 ngày - Hạn: 20/03/2026</p>
                   </div>
                </div>
                <div className="flex gap-3 border-l-2 border-amber-500 pl-3">
                   <div className="w-2 h-2 mt-1.5 rounded-full bg-amber-500 shrink-0"/>
                   <div>
                     <p className="text-sm font-medium">Khoản chi sửa chữa vượt định mức 15%</p>
                     <p className="text-xs text-slate-500">Trip #1024 - Xe 29C-456.78 - Chờ duyệt Admin</p>
                   </div>
                </div>
                 <div className="flex gap-3 border-l-2 border-amber-500 pl-3">
                   <div className="w-2 h-2 mt-1.5 rounded-full bg-amber-500 shrink-0"/>
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
