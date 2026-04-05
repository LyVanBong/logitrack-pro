"use client"

import { useState } from "react"
import { useParams, useRouter } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft, MapPin, Fuel, Wrench, FileText, TrendingUp } from "lucide-react"

export default function VehicleDetailPage() {
  const params = useParams();
  const router = useRouter();
  const id = params?.id as string || "29C-123.45";

  const trips = [
    { id: "TRP-2023-100", date: "20/10/2023", route: "Hà Nội - Hải Phòng", driver: "Nguyễn Văn A", profit: "3,500,000", status: "completed" },
    { id: "TRP-2023-099", date: "18/10/2023", route: "Hà Nội - Lạng Sơn", driver: "Nguyễn Văn A", profit: "4,200,000", status: "completed" },
    { id: "TRP-2023-095", date: "15/10/2023", route: "Hà Nội - Bắc Ninh", driver: "Trần Văn B", profit: "1,800,000", status: "completed" },
  ];

  const maintenance = [
    { date: "10/10/2023", type: "Thay dầu định kỳ", cost: "2,500,000", place: "Gara Cường Phát", nextKm: "120,000" },
    { date: "15/08/2023", type: "Thay 2 lốp trước", cost: "15,000,000", place: "Đại lý lốp Michelin", nextKm: "200,000" },
    { date: "01/05/2023", type: "Bảo dưỡng 10 vạn", cost: "8,200,000", place: "Gara Hino 3S", nextKm: "150,000" },
  ];

  const fuelLogs = [
    { date: "20/10/2023", route: "HN-HP", liters: 150, cost: "3,150,000", tripKm: 220, limit: 145 },
    { date: "18/10/2023", route: "HN-LS", liters: 200, cost: "4,200,000", tripKm: 310, limit: 195 },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Button variant="outline" size="icon" onClick={() => router.back()}>
          <ArrowLeft className="h-4 w-4" />
        </Button>
        <div>
          <div className="flex items-center gap-3">
             <h2 className="text-3xl font-bold tracking-tight">Chi tiết xe: {id}</h2>
             <Badge variant="success" className="text-sm">Đang vận hành</Badge>
          </div>
          <p className="text-slate-500">Đầu kéo Hino 500 - Trọng tải 30 tấn - Số khung: NJK12345</p>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-4">
        <Card>
           <CardHeader className="py-4"><CardTitle className="text-sm font-medium flex items-center gap-2"><MapPin className="w-4 h-4 text-blue-500"/> Tổng Số Km</CardTitle>
           <div className="text-2xl font-bold">115,240 <span className="text-sm text-slate-500 font-normal">km</span></div></CardHeader>
        </Card>
        <Card>
           <CardHeader className="py-4"><CardTitle className="text-sm font-medium flex items-center gap-2"><Fuel className="w-4 h-4 text-emerald-500"/> Định Mức Dầu</CardTitle>
           <div className="text-2xl font-bold">32.5 <span className="text-sm text-slate-500 font-normal">Lít/100km</span></div></CardHeader>
        </Card>
        <Card>
           <CardHeader className="py-4"><CardTitle className="text-sm font-medium flex items-center gap-2"><TrendingUp className="w-4 h-4 text-purple-500"/> Lãi Ròng (Tháng này)</CardTitle>
           <div className="text-2xl font-bold text-emerald-600">45,000,000 <span className="text-sm text-slate-500 font-normal">VNĐ</span></div></CardHeader>
        </Card>
        <Card className="border-l-4 border-l-orange-500">
           <CardHeader className="py-4"><CardTitle className="text-sm font-medium flex items-center gap-2"><FileText className="w-4 h-4 text-orange-500"/> Hạn Đăng Kiểm</CardTitle>
           <div className="text-xl font-bold text-orange-600">15/12/2023 <span className="text-xs font-normal">(Còn 45 ngày)</span></div></CardHeader>
        </Card>
      </div>

      <Tabs defaultValue="trips" className="space-y-4">
        <TabsList className="bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-1">
          <TabsTrigger value="trips">Lịch sử Chuyến & Doanh thu</TabsTrigger>
          <TabsTrigger value="fuel">Nhật ký Đổ dầu (Fuel log)</TabsTrigger>
          <TabsTrigger value="maintenance">Bảo dưỡng & Sửa chữa</TabsTrigger>
        </TabsList>

        <TabsContent value="trips">
          <Card>
            <CardHeader><CardTitle>Lịch sử vận hành</CardTitle><CardDescription>Danh sách các chuyến hàng xe này đã thực hiện.</CardDescription></CardHeader>
            <CardContent>
              <Table>
                <TableHeader><TableRow><TableHead>Mã Trip</TableHead><TableHead>Ngày chạy</TableHead><TableHead>Tuyển đường</TableHead><TableHead>Tài xế</TableHead><TableHead className="text-right">Lãi gộp chuyến</TableHead><TableHead>Trạng thái</TableHead></TableRow></TableHeader>
                <TableBody>
                  {trips.map(trip => (
                    <TableRow key={trip.id}>
                      <TableCell className="font-bold text-blue-600">{trip.id}</TableCell>
                      <TableCell>{trip.date}</TableCell>
                      <TableCell>{trip.route}</TableCell>
                      <TableCell>{trip.driver}</TableCell>
                      <TableCell className="text-right font-semibold text-emerald-600">{trip.profit}</TableCell>
                      <TableCell><Badge variant="success">Hoàn thành</Badge></TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="fuel">
          <Card>
            <CardHeader><CardTitle>Nhật ký đổ nhiên liệu / Đối soát định mức</CardTitle></CardHeader>
            <CardContent>
              <Table>
                <TableHeader><TableRow><TableHead>Ngày đổ</TableHead><TableHead>Thuộc tuyến</TableHead><TableHead className="text-right">Đổ thực tế (Lít)</TableHead><TableHead className="text-right">Định mức tuyến (Lít)</TableHead><TableHead className="text-right">Chi phí (VNĐ)</TableHead><TableHead>Đánh giá KPI</TableHead></TableRow></TableHeader>
                <TableBody>
                  {fuelLogs.map((log, i) => {
                     const isOver = log.liters > log.limit;
                     return (
                        <TableRow key={i}>
                          <TableCell>{log.date}</TableCell>
                          <TableCell>{log.route} ({log.tripKm}km)</TableCell>
                          <TableCell className="text-right font-bold">{log.liters}</TableCell>
                          <TableCell className="text-right text-slate-500">{log.limit}</TableCell>
                          <TableCell className="text-right">{log.cost}</TableCell>
                          <TableCell>
                            {isOver 
                              ? <Badge variant="destructive">Vượt ĐM ({log.liters - log.limit}L)</Badge> 
                              : <Badge variant="success">Tiết kiệm ({log.limit - log.liters}L)</Badge>}
                          </TableCell>
                        </TableRow>
                     )
                  })}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="maintenance">
          <Card>
            <CardHeader><CardTitle>Lịch sử Hỏng hóc & Bảo dưỡng</CardTitle></CardHeader>
            <CardContent>
               <Table>
                <TableHeader><TableRow><TableHead>Ngày xử lý</TableHead><TableHead>Hạng mục / Lý do</TableHead><TableHead>Gara / Đại lý</TableHead><TableHead className="text-right">Chi phí sữa chữa (VNĐ)</TableHead><TableHead>Nhắc mốc tiếp theo</TableHead></TableRow></TableHeader>
                <TableBody>
                  {maintenance.map((m, i) => (
                    <TableRow key={i}>
                      <TableCell>{m.date}</TableCell>
                      <TableCell className="font-semibold">{m.type}</TableCell>
                      <TableCell>{m.place}</TableCell>
                      <TableCell className="text-right font-mono text-slate-600">{m.cost}</TableCell>
                      <TableCell><Badge variant="outline">{m.nextKm} km</Badge></TableCell>
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
