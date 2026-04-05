"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { TrendingUp, TrendingDown, DollarSign, Fuel, NavigationOff, Clock } from "lucide-react"

export default function ReportsPage() {
  const pnlData = [
    { id: "29C-123.45", revenue: "120,500,000", fuelCost: "42,000,000", maintenance: "5,000,000", tolls: "12,000,000", driverPay: "15,000,000", netProfit: "46,500,000", margin: "38%" },
    { id: "29C-678.90", revenue: "95,000,000", fuelCost: "38,000,000", maintenance: "12,000,000", tolls: "9,500,000", driverPay: "12,000,000", netProfit: "23,500,000", margin: "24%" },
    { id: "30F-111.22", revenue: "150,000,000", fuelCost: "55,000,000", maintenance: "0", tolls: "18,000,000", driverPay: "18,500,000", netProfit: "58,500,000", margin: "39%" },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Trung tâm Báo cáo (KBI & P&L)</h2>
          <p className="text-slate-500">Báo cáo Lãi/Lỗ hoạt động và các chỉ số đo lường hiệu quả vận hành.</p>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-4">
        <Card className="border-l-4 border-l-emerald-500">
           <CardHeader className="py-4"><CardTitle className="text-sm font-medium flex items-center gap-2"><DollarSign className="w-4 h-4 text-emerald-500"/> Tổng Lãi Gộp (Tháng)</CardTitle>
           <div className="text-2xl font-bold text-emerald-600">325,400,000 <span className="text-sm text-slate-500 font-normal">VNĐ</span></div>
           <p className="text-xs text-emerald-600 flex items-center mt-1"><TrendingUp className="w-3 h-3 mr-1"/> +12% so với tháng trước</p>
           </CardHeader>
        </Card>
        <Card className="border-l-4 border-l-blue-500">
           <CardHeader className="py-4"><CardTitle className="text-sm font-medium flex items-center gap-2"><Fuel className="w-4 h-4 text-blue-500"/> Tỷ lệ Tiết Kiệm Dầu</CardTitle>
           <div className="text-2xl font-bold">2.5%</div>
           <p className="text-xs text-emerald-600 flex items-center mt-1"><TrendingUp className="w-3 h-3 mr-1"/> (Tiết kiệm được ~ 850 Lít)</p>
           </CardHeader>
        </Card>
        <Card className="border-l-4 border-l-orange-500">
           <CardHeader className="py-4"><CardTitle className="text-sm font-medium flex items-center gap-2"><NavigationOff className="w-4 h-4 text-orange-500"/> Tỷ lệ Rỗng (Empty Miles)</CardTitle>
           <div className="text-2xl font-bold">18.5%</div>
           <p className="text-xs text-rose-500 flex items-center mt-1"><TrendingDown className="w-3 h-3 mr-1"/> Tăng 2% so với tuần trước</p>
           </CardHeader>
        </Card>
        <Card className="border-l-4 border-l-purple-500">
           <CardHeader className="py-4"><CardTitle className="text-sm font-medium flex items-center gap-2"><Clock className="w-4 h-4 text-purple-500"/> Giao Hàng Đúng Hạn</CardTitle>
           <div className="text-2xl font-bold">96.8%</div>
           <p className="text-xs text-emerald-600 flex items-center mt-1"><TrendingUp className="w-3 h-3 mr-1"/> Đạt chỉ tiêu SLA</p>
           </CardHeader>
        </Card>
      </div>

      <Tabs defaultValue="pnl" className="space-y-4">
        <TabsList>
          <TabsTrigger value="pnl">Báo cáo Lãi/Lỗ Đầu Xe (P&L)</TabsTrigger>
          <TabsTrigger value="charts">Biểu đồ Phân tích</TabsTrigger>
        </TabsList>

        <TabsContent value="pnl">
          <Card>
            <CardHeader><CardTitle>Bảng Kê Chi Tiết Hiệu Quả Đầu Xe (Tháng 10/2023)</CardTitle></CardHeader>
            <CardContent>
              <Table>
                <TableHeader><TableRow>
                  <TableHead>Biển Số (Đầu Xe)</TableHead>
                  <TableHead className="text-right">Tổng Doanh Thu</TableHead>
                  <TableHead className="text-right text-rose-600">Phí Nhiên Liệu (-)</TableHead>
                  <TableHead className="text-right text-rose-600">Cầu Đường (-)</TableHead>
                  <TableHead className="text-right text-rose-600">Sửa Chữa (-)</TableHead>
                  <TableHead className="text-right text-rose-600">Lương Tài Xế (-)</TableHead>
                  <TableHead className="text-right font-bold text-emerald-700 bg-emerald-50 dark:bg-emerald-950/20">Lãi Ròng Còn Lại</TableHead>
                  <TableHead className="text-center">Biên Lợi Nhuận</TableHead>
                </TableRow></TableHeader>
                <TableBody>
                  {pnlData.map((row, i) => (
                    <TableRow key={i}>
                      <TableCell className="font-bold text-blue-600">{row.id}</TableCell>
                      <TableCell className="text-right font-semibold">{row.revenue}</TableCell>
                      <TableCell className="text-right text-rose-600">{row.fuelCost}</TableCell>
                      <TableCell className="text-right text-rose-600">{row.tolls}</TableCell>
                      <TableCell className="text-right text-rose-600">{row.maintenance}</TableCell>
                      <TableCell className="text-right text-rose-600">{row.driverPay}</TableCell>
                      <TableCell className="text-right font-bold text-emerald-600 bg-emerald-50/50 dark:bg-emerald-950/10 text-lg">{row.netProfit}</TableCell>
                      <TableCell className="text-center">
                         <Badge variant="outline" className={parseFloat(row.margin) > 30 ? 'border-emerald-200 text-emerald-700 bg-emerald-50' : 'border-orange-200 text-orange-700 bg-orange-50'}>
                            {row.margin}
                         </Badge>
                      </TableCell>
                    </TableRow>
                  ))}
                  {/* Total Row */}
                  <TableRow className="bg-slate-100 dark:bg-slate-900 border-t-2 border-slate-300 dark:border-slate-700">
                    <TableCell className="font-bold uppercase">Tổng Cộng</TableCell>
                    <TableCell className="text-right font-bold">365,500,000</TableCell>
                    <TableCell className="text-right font-bold text-rose-700">135,000,000</TableCell>
                    <TableCell className="text-right font-bold text-rose-700">39,500,000</TableCell>
                    <TableCell className="text-right font-bold text-rose-700">17,000,000</TableCell>
                    <TableCell className="text-right font-bold text-rose-700">45,500,000</TableCell>
                    <TableCell className="text-right font-bold text-emerald-700 text-xl">128,500,000</TableCell>
                    <TableCell className="text-center font-bold">35.1%</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="charts">
          <Card>
            <CardHeader><CardTitle>Biểu đồ Trực quan hóa</CardTitle></CardHeader>
            <CardContent>
               <div className="flex h-64 items-center justify-center border-2 border-dashed border-slate-200 dark:border-slate-800 rounded-lg bg-slate-50 dark:bg-slate-900/50">
                  <p className="text-slate-500 flex flex-col items-center">
                     <TrendingUp className="w-8 h-8 mb-2 text-slate-400" />
                     Khu vực tích hợp Biểu đồ (Recharts/Chart.js) hiển thị xu hướng Lợi nhuận và Dòng tiền
                  </p>
               </div>
            </CardContent>
          </Card>
        </TabsContent>

      </Tabs>
    </div>
  )
}
