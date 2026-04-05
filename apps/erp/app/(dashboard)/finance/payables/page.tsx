"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog"
import { ArrowDownRight, ArrowUpRight, HandCoins, Building2, CreditCard, Wallet, Landmark } from "lucide-react"

export default function PayablesPage() {
  const [isPayOpen, setIsPayOpen] = useState(false);
  const [payTarget, setPayTarget] = useState("");

  const bankDebts = [
    { id: "HDV-01", bank: "Vietcombank", purpose: "Vay mua 5 xe Hino", total: "15,000,000,000", remaining: "8,500,000,000", nextPayment: "15/11/2023", nextAmount: "125,000,000", status: "active" },
    { id: "HDV-02", bank: "MBBank", purpose: "Vay lưu động", total: "2,000,000,000", remaining: "500,000,000", nextPayment: "20/11/2023", nextAmount: "55,000,000", status: "active" },
  ];

  const vendorDebts = [
    { id: "NCC-01", vendor: "Petrolimex CN Hà Nội", type: "Nhiên liệu (Dầu)", totalDebt: "450,000,000", due: "05/11/2023", status: "warning" },
    { id: "NCC-02", vendor: "Đại lý Lốp Michelin", type: "Phụ tùng", totalDebt: "85,000,000", due: "15/11/2023", status: "good" },
    { id: "NCC-03", vendor: "Gara Hino 3S", type: "Sửa chữa", totalDebt: "112,000,000", due: "25/10/2023", status: "overdue" },
  ];

  const cashFlow = [
    { account: "Tiền mặt (Quỹ Công ty)", type: "Cash", balance: "150,000,000", no: "-" },
    { account: "Vietcombank - TKTT", type: "Bank", balance: "1,250,500,000", no: "0451000123456" },
    { account: "MBBank - TK Thu Hộ", type: "Bank", balance: "320,000,000", no: "888899991234" },
  ];

  const handlePayClick = (vendor: string) => {
    setPayTarget(vendor);
    setIsPayOpen(true);
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Quản lý Dòng tiền & Công Nợ Phải Trả</h2>
          <p className="text-slate-500">Theo dõi Nợ Ngân hàng, Nợ Nhà cung cấp và quản lý các quỹ tiền mặt/ngân hàng.</p>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <Card className="border-l-4 border-l-emerald-500 bg-emerald-50/50 dark:bg-emerald-950/10">
           <CardHeader className="py-4"><CardTitle className="text-sm font-medium flex items-center gap-2"><Wallet className="w-4 h-4 text-emerald-600"/> Tổng Tiền Có Sẵn (Cash & Bank)</CardTitle>
           <div className="text-2xl font-bold text-emerald-700">1,720,500,000 VNĐ</div></CardHeader>
        </Card>
        <Card className="border-l-4 border-l-orange-500 bg-orange-50/50 dark:bg-orange-950/10">
           <CardHeader className="py-4"><CardTitle className="text-sm font-medium flex items-center gap-2"><CreditCard className="w-4 h-4 text-orange-600"/> Tổng Nợ Nhà Cung Cấp</CardTitle>
           <div className="text-2xl font-bold text-orange-700">647,000,000 VNĐ</div></CardHeader>
        </Card>
        <Card className="border-l-4 border-l-purple-500 bg-purple-50/50 dark:bg-purple-950/10">
           <CardHeader className="py-4"><CardTitle className="text-sm font-medium flex items-center gap-2"><Landmark className="w-4 h-4 text-purple-600"/> Số Cần Trả Ngân Hàng (Kỳ tới)</CardTitle>
           <div className="text-2xl font-bold text-purple-700">180,000,000 VNĐ</div></CardHeader>
        </Card>
      </div>

      <Tabs defaultValue="vendors" className="space-y-4">
        <TabsList>
          <TabsTrigger value="vendors" className="flex items-center gap-2"><Building2 className="w-4 h-4"/> Nợ Nhà Cung Cấp</TabsTrigger>
          <TabsTrigger value="banks" className="flex items-center gap-2"><Landmark className="w-4 h-4"/> Nợ Vay Ngân Hàng</TabsTrigger>
          <TabsTrigger value="cashflow" className="flex items-center gap-2"><Wallet className="w-4 h-4"/> Quỹ Tiền Mặt & Số Dư</TabsTrigger>
        </TabsList>

        <TabsContent value="vendors">
          <Card>
            <CardHeader><CardTitle>Sổ theo dõi Nợ Nhà Cung Cấp (Payables)</CardTitle><CardDescription>Danh sách các khoản nợ tiền dầu, phụ tùng, sửa chữa cần thanh toán.</CardDescription></CardHeader>
            <CardContent>
              <Table>
                <TableHeader><TableRow><TableHead>Mã NCC</TableHead><TableHead>Trường/Đơn vị</TableHead><TableHead>Hạng mục</TableHead><TableHead className="text-right">Dư Nợ Hiện Tại (VNĐ)</TableHead><TableHead>Hạn thanh toán</TableHead><TableHead>Trạng thái</TableHead><TableHead></TableHead></TableRow></TableHeader>
                <TableBody>
                  {vendorDebts.map(v => (
                    <TableRow key={v.id}>
                      <TableCell className="font-bold text-slate-500">{v.id}</TableCell>
                      <TableCell className="font-semibold">{v.vendor}</TableCell>
                      <TableCell>{v.type}</TableCell>
                      <TableCell className="text-right font-mono font-bold text-rose-600 text-lg">{v.totalDebt}</TableCell>
                      <TableCell>{v.due}</TableCell>
                      <TableCell>
                         {v.status === 'overdue' ? <Badge variant="destructive">Quá hạn</Badge> : 
                          v.status === 'warning' ? <Badge variant="warning">Sắp đến hạn</Badge> : 
                          <Badge variant="outline" className="border-emerald-200 text-emerald-600">Trong hạn</Badge>}
                      </TableCell>
                      <TableCell className="text-right">
                        <Button size="sm" variant="outline" onClick={() => handlePayClick(v.vendor)}>Ủy nhiệm chi / Làm lệnh</Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="banks">
          <Card>
            <CardHeader><CardTitle>Lịch trình trả Nợ Vay Ngân Hàng</CardTitle><CardDescription>Lịch trả nợ Gốc + Lãi tự động giảm dần, cảnh báo trước kỳ.</CardDescription></CardHeader>
            <CardContent>
              <Table>
                <TableHeader><TableRow><TableHead>Hợp đồng</TableHead><TableHead>Ngân hàng</TableHead><TableHead>Mục đích vay</TableHead><TableHead className="text-right">Dư Nợ Gốc Hiện Tại</TableHead><TableHead className="bg-purple-50 dark:bg-purple-900/10">Ngày trả kỳ tới</TableHead><TableHead className="bg-purple-50 dark:bg-purple-900/10 text-right font-bold text-purple-700">Số Tiền (Gốc+Lãi)</TableHead><TableHead></TableHead></TableRow></TableHeader>
                <TableBody>
                  {bankDebts.map(b => (
                    <TableRow key={b.id}>
                      <TableCell className="font-bold text-slate-500">{b.id}</TableCell>
                      <TableCell className="font-semibold text-blue-700">{b.bank}</TableCell>
                      <TableCell>{b.purpose}</TableCell>
                      <TableCell className="text-right font-mono">{b.remaining}</TableCell>
                      <TableCell className="bg-purple-50/50 dark:bg-purple-900/5 font-medium">{b.nextPayment}</TableCell>
                      <TableCell className="bg-purple-50/50 dark:bg-purple-900/5 text-right font-bold text-purple-700 text-lg">{b.nextAmount}</TableCell>
                      <TableCell className="text-right">
                        <Button size="sm" variant="outline" onClick={() => handlePayClick(`${b.bank} - HĐ ${b.id}`)}>Tạo lệnh chuyển</Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="cashflow">
          <Card>
            <CardHeader><CardTitle>Số dư Đầu Công Ty (Quỹ & Bank)</CardTitle></CardHeader>
            <CardContent>
              <Table>
                <TableHeader><TableRow><TableHead>Tên Tài Khoản / Quỹ</TableHead><TableHead>Loại</TableHead><TableHead>Số Tài Khoản</TableHead><TableHead className="text-right">Số Dư Khả Dụng (VNĐ)</TableHead></TableRow></TableHeader>
                <TableBody>
                  {cashFlow.map((c, i) => (
                    <TableRow key={i}>
                      <TableCell className="font-bold">{c.account}</TableCell>
                      <TableCell>
                         <Badge variant="outline" className={c.type === 'Cash' ? 'border-emerald-200 text-emerald-600 bg-emerald-50' : 'border-blue-200 text-blue-600 bg-blue-50'}>{c.type}</Badge>
                      </TableCell>
                      <TableCell className="font-mono text-slate-500">{c.no}</TableCell>
                      <TableCell className="text-right font-bold text-emerald-600 text-lg">{c.balance}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

      </Tabs>

      {/* PAYMENT MODAL */}
      {isPayOpen && (
         <Dialog>
           <DialogContent onClose={() => setIsPayOpen(false)}>
             <DialogHeader><DialogTitle>Tạo Lệnh Duyệt Chi / Ủy Nhiệm Chi</DialogTitle></DialogHeader>
             <div className="grid gap-4 py-4">
               <div className="grid gap-2">
                 <label className="text-sm font-medium">Đối tượng nhận tiền (Chủ nợ)</label>
                 <Input value={payTarget} disabled className="bg-slate-50 font-bold" />
               </div>
               <div className="grid gap-2">
                 <label className="text-sm font-medium">Tài khoản chi tiền (Nguồn quỹ)</label>
                 <select className="flex h-10 w-full rounded-md border border-slate-200 bg-transparent px-3 py-2 text-sm dark:border-slate-800">
                    <option>Vietcombank - TKTT (Dư: 1,250,500,000)</option>
                    <option>Tiền mặt (Quỹ Công ty) (Dư: 150,000,000)</option>
                 </select>
               </div>
               <div className="grid gap-2">
                 <label className="text-sm font-medium">Số tiền thanh toán (VNĐ)</label>
                 <Input type="text" placeholder="10,000,000" />
               </div>
               <div className="grid gap-2">
                 <label className="text-sm font-medium">Nội dung chuyển khoản / Lý do chi</label>
                 <Input placeholder="Thanh toán nợ tiền dầu tháng 10..." />
               </div>
             </div>
             <DialogFooter>
               <Button variant="outline" onClick={() => setIsPayOpen(false)}>Hủy</Button>
               <Button onClick={() => setIsPayOpen(false)} className="bg-emerald-600 hover:bg-emerald-700 text-white">Xác nhận Tạo Lệnh Chi</Button>
             </DialogFooter>
           </DialogContent>
         </Dialog>
      )}

    </div>
  )
}
