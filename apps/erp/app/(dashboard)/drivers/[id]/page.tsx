"use client"

import { useState } from "react"
import { useParams, useRouter } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft, MapPin, Award, FileText, Banknote } from "lucide-react"

export default function DriverDetailPage() {
  const params = useParams();
  const router = useRouter();
  const id = params?.id as string || "NV001";

  const trips = [
    { id: "TRP-2023-100", date: "20/10/2023", route: "Hà Nội - Hải Phòng", vehicle: "29C-123.45", profit: "3,500,000", status: "completed" },
    { id: "TRP-2023-099", date: "18/10/2023", route: "Hà Nội - Lạng Sơn", vehicle: "29C-123.45", profit: "4,200,000", status: "completed" },
  ];

  const payroll = [
    { month: "10/2023", baseSalary: "8,000,000", totalTrips: 15, commission: "3,500,000", kpiBonus: "500,000", fuelBonus: "1,200,000", deductions: "0", total: "13,200,000", status: "Đã chi trả" },
    { month: "09/2023", baseSalary: "8,000,000", totalTrips: 18, commission: "4,200,000", kpiBonus: "500,000", fuelBonus: "800,000", deductions: "300,000", total: "13,200,000", status: "Đã chi trả" },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Button variant="outline" size="icon" onClick={() => router.back()}>
          <ArrowLeft className="h-4 w-4" />
        </Button>
        <div>
          <div className="flex items-center gap-3">
             <h2 className="text-3xl font-bold tracking-tight">Chi tiết Tải xế: {id}</h2>
             <Badge variant="success" className="text-sm">Đang Chạy Chuyến</Badge>
          </div>
          <p className="text-slate-500">Họ tên: Nguyễn Văn Lái | Hạng Bằng: FC | Ngày cấp: 15/05/2020</p>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-4">
        <Card className="border-l-4 border-l-blue-500">
           <CardHeader className="py-4"><CardTitle className="text-sm font-medium flex items-center gap-2"><MapPin className="w-4 h-4 text-blue-500"/> Tổng Chuyến (Tháng)</CardTitle>
           <div className="text-2xl font-bold">15 <span className="text-sm text-slate-500 font-normal">Chuyến</span></div></CardHeader>
        </Card>
        <Card className="border-l-4 border-l-emerald-500">
           <CardHeader className="py-4"><CardTitle className="text-sm font-medium flex items-center gap-2"><Award className="w-4 h-4 text-emerald-500"/> Xếp Hạng Tiết Kiệm Dầu</CardTitle>
           <div className="text-2xl font-bold">#2 <span className="text-sm text-slate-500 font-normal">/ 25 Lái xe</span></div></CardHeader>
        </Card>
        <Card className="border-l-4 border-l-purple-500">
           <CardHeader className="py-4"><CardTitle className="text-sm font-medium flex items-center gap-2"><Banknote className="w-4 h-4 text-purple-500"/> Lương Tạm Tính (Tháng này)</CardTitle>
           <div className="text-2xl font-bold text-emerald-600">11,500,000 <span className="text-sm text-slate-500 font-normal">VNĐ</span></div></CardHeader>
        </Card>
        <Card className="border-l-4 border-l-orange-500">
           <CardHeader className="py-4"><CardTitle className="text-sm font-medium flex items-center gap-2"><FileText className="w-4 h-4 text-orange-500"/> Hạn Bằng Lái</CardTitle>
           <div className="text-xl font-bold text-orange-600">15/05/2025 <span className="text-xs font-normal"></span></div></CardHeader>
        </Card>
      </div>

      <Tabs defaultValue="payroll" className="space-y-4">
        <TabsList className="bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-1">
          <TabsTrigger value="payroll">Báo Cáo Bảng Lương & KPI</TabsTrigger>
          <TabsTrigger value="trips">Lịch sử Chạy Chuyến</TabsTrigger>
        </TabsList>

        <TabsContent value="payroll">
          <Card>
            <CardHeader><CardTitle>Lịch sử trả lương (Lương cứng + Hoa hồng + KPI)</CardTitle></CardHeader>
            <CardContent>
              <Table>
                <TableHeader><TableRow><TableHead>Kỳ lương</TableHead><TableHead className="text-right">Lương cứng</TableHead><TableHead className="text-center">Số chuyến</TableHead><TableHead className="text-right">Thưởng doanh thu</TableHead><TableHead className="text-right">Tiết kiệm dầu</TableHead><TableHead className="text-right text-red-500">Các khoản trừ</TableHead><TableHead className="text-right font-bold text-indigo-700">Tổng Thực Nhận</TableHead><TableHead>Trạng thái</TableHead></TableRow></TableHeader>
                <TableBody>
                  {payroll.map((p, i) => (
                    <TableRow key={i}>
                      <TableCell className="font-bold">{p.month}</TableCell>
                      <TableCell className="text-right">{p.baseSalary}</TableCell>
                      <TableCell className="text-center">{p.totalTrips}</TableCell>
                      <TableCell className="text-right">{p.commission}</TableCell>
                      <TableCell className="text-right">{p.fuelBonus}</TableCell>
                      <TableCell className="text-right text-red-500">{p.deductions}</TableCell>
                      <TableCell className="text-right font-bold text-indigo-700 text-lg">{p.total}</TableCell>
                      <TableCell><Badge variant="outline" className="border-green-200 text-green-700">{p.status}</Badge></TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="trips">
          <Card>
            <CardHeader><CardTitle>Lịch sử hành trình của Lái xe</CardTitle></CardHeader>
            <CardContent>
              <Table>
                <TableHeader><TableRow><TableHead>Mã Trip</TableHead><TableHead>Ngày chạy</TableHead><TableHead>Tuyển đường</TableHead><TableHead>Xe điều khiển</TableHead><TableHead>Đánh giá Hóa đơn</TableHead></TableRow></TableHeader>
                <TableBody>
                  {trips.map(trip => (
                    <TableRow key={trip.id}>
                      <TableCell className="font-bold text-blue-600">{trip.id}</TableCell>
                      <TableCell>{trip.date}</TableCell>
                      <TableCell>{trip.route}</TableCell>
                      <TableCell>{trip.vehicle}</TableCell>
                      <TableCell><Badge variant="success">Kế toán đã duyệt chứng từ</Badge></TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

      </Tabs>
    </div>
  )
}
