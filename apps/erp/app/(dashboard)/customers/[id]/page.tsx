"use client"

import { useParams, useRouter } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft, MapPin, Building2, Phone, Briefcase, FileClock } from "lucide-react"

export default function CustomerDetailPage() {
  const params = useParams();
  const router = useRouter();
  const id = params?.id as string || "KH001";

  const trips = [
    { id: "TRP-2023-100", date: "20/10/2023", route: "Bắc Ninh - Samsung HQ", items: "Linh kiện điện tử", amount: "12,500,000", status: "completed" },
    { id: "TRP-2023-099", date: "18/10/2023", route: "Bắc Ninh - Cảng Đình Vũ", items: "Máy gia công", amount: "8,200,000", status: "completed" },
  ];

  const debtLog = [
    { date: "01/10/2023", type: "Nợ đầu kỳ", description: "Dư nợ tháng 09/2023", amount: "45,000,000", balance: "45,000,000" },
    { date: "18/10/2023", type: "Phát sinh (+)", description: "Cước vận tải (TRP-2023-099)", amount: "8,200,000", balance: "53,200,000" },
    { date: "20/10/2023", type: "Phát sinh (+)", description: "Cước vận tải (TRP-2023-100)", amount: "12,500,000", balance: "65,700,000" },
    { date: "22/10/2023", type: "Thanh toán (-)", description: "Khách CK qua Vietcombank", amount: "-45,000,000", balance: "20,700,000" },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Button variant="outline" size="icon" onClick={() => router.back()}>
          <ArrowLeft className="h-4 w-4" />
        </Button>
        <div>
          <div className="flex items-center gap-3">
             <h2 className="text-3xl font-bold tracking-tight">Chi tiết Đối tác ({id})</h2>
             <Badge variant="success" className="text-sm">Đang Giao Dịch</Badge>
          </div>
          <p className="text-slate-500 font-medium">Công ty TNHH Vận tải & Logistics LogiTrack Pro</p>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-4">
        <Card className="border-l-4 border-l-slate-400">
           <CardHeader className="py-4"><CardTitle className="text-sm font-medium flex items-center gap-2"><Building2 className="w-4 h-4 text-slate-500"/> Người Đại Diện</CardTitle>
           <div className="text-lg font-bold">Mr. Hoàng <span className="block text-sm text-slate-500 font-normal">0988.123.456</span></div></CardHeader>
        </Card>
        <Card className="border-l-4 border-l-blue-500">
           <CardHeader className="py-4"><CardTitle className="text-sm font-medium flex items-center gap-2"><Briefcase className="w-4 h-4 text-blue-500"/> Số Lượng Chuyến (Năm)</CardTitle>
           <div className="text-2xl font-bold">45 <span className="text-sm text-slate-500 font-normal">Chuyến</span></div></CardHeader>
        </Card>
        <Card className="border-l-4 border-l-orange-500">
           <CardHeader className="py-4"><CardTitle className="text-sm font-medium flex items-center gap-2"><FileClock className="w-4 h-4 text-orange-500"/> Chu kỳ Thanh Toán</CardTitle>
           <div className="text-xl font-bold text-orange-600">Công Nợ 30 Ngày</div></CardHeader>
        </Card>
        <Card className="border-l-4 border-l-destructive">
           <CardHeader className="py-4"><CardTitle className="text-sm font-medium flex items-center gap-2">Dư Nợ Hiện Tại (Cuối Kỳ)</CardTitle>
           <div className="text-2xl font-bold text-destructive">20,700,000 <span className="text-sm text-slate-500 font-normal">VNĐ</span></div></CardHeader>
        </Card>
      </div>

      <Tabs defaultValue="debt" className="space-y-4">
        <TabsList className="bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-1">
          <TabsTrigger value="debt">Chi tiết Sổ Công Nợ</TabsTrigger>
          <TabsTrigger value="trips">Lịch sử Chuyến Vận Tải</TabsTrigger>
        </TabsList>

        <TabsContent value="debt">
          <Card>
            <CardHeader><CardTitle>Sổ Liên Lạc Công Nợ (Receivables)</CardTitle><CardDescription>Theo dõi chi tiết các khoản phát sinh và thanh toán của khách hàng.</CardDescription></CardHeader>
            <CardContent>
              <Table>
                <TableHeader><TableRow><TableHead>Ngày hạch toán</TableHead><TableHead>Loại phát sinh</TableHead><TableHead>Diễn giải</TableHead><TableHead className="text-right">Số tiền (VNĐ)</TableHead><TableHead className="text-right font-bold text-indigo-700">Dư Nợ Lũy Kế</TableHead></TableRow></TableHeader>
                <TableBody>
                  {debtLog.map((log, i) => (
                    <TableRow key={i}>
                      <TableCell className="font-medium text-slate-500">{log.date}</TableCell>
                      <TableCell>
                         <Badge variant="outline" className={
                           log.type.includes('Nợ') ? 'border-slate-300 text-slate-600' :
                           log.type.includes('+') ? 'border-red-200 text-red-600 bg-red-50' : 'border-green-200 text-green-600 bg-green-50'
                         }>{log.type}</Badge>
                      </TableCell>
                      <TableCell>{log.description}</TableCell>
                      <TableCell className={`text-right ${log.type.includes('-') ? 'text-green-600 font-medium' : log.type.includes('+') ? 'text-red-500 font-medium' : ''}`}>{log.amount}</TableCell>
                      <TableCell className="text-right font-bold text-indigo-700">{log.balance}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="trips">
          <Card>
            <CardHeader><CardTitle>Lịch sử Dịch vụ / Vận đơn</CardTitle></CardHeader>
            <CardContent>
              <Table>
                <TableHeader><TableRow><TableHead>Mã Trip / Vận Đơn</TableHead><TableHead>Ngày chạy</TableHead><TableHead>Tuyển đường</TableHead><TableHead>Hàng Hóa</TableHead><TableHead className="text-right">Thành Tiền (Cước)</TableHead><TableHead>Trạng thái</TableHead></TableRow></TableHeader>
                <TableBody>
                  {trips.map(trip => (
                    <TableRow key={trip.id}>
                      <TableCell className="font-bold text-blue-600">{trip.id}</TableCell>
                      <TableCell>{trip.date}</TableCell>
                      <TableCell>{trip.route}</TableCell>
                      <TableCell>{trip.items}</TableCell>
                       <TableCell className="text-right font-mono">{trip.amount}</TableCell>
                      <TableCell><Badge variant="outline" className="text-slate-500">Đã xuất Hóa đơn</Badge></TableCell>
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
