"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog"
import { Search, Download, DollarSign, Calculator, CheckCircle2, TrendingUp, Filter } from "lucide-react"

// Mock payroll data
const payrollData = [
  { id: "D-001", name: "Lưu Văn A", baseSalary: 8000000, trips: 15, tripBonus: 4500000, kpiBonus: 1000000, deductions: 250000, total: 13250000, status: "Chờ duyệt" },
  { id: "D-002", name: "Trần Kim B", baseSalary: 8500000, trips: 18, tripBonus: 5400000, kpiBonus: 1500000, deductions: 0, total: 15400000, status: "Đã duyệt" },
  { id: "D-003", name: "Nguyễn Văn D", baseSalary: 8000000, trips: 12, tripBonus: 3600000, kpiBonus: 500000, deductions: 500000, total: 11600000, status: "Chờ duyệt" },
  { id: "D-004", name: "Phạm Văn C", baseSalary: 7500000, trips: 22, tripBonus: 4400000, kpiBonus: 800000, deductions: 100000, total: 12600000, status: "Chờ duyệt" },
  { id: "D-005", name: "Lê Ngọc C", baseSalary: 9000000, trips: 10, tripBonus: 4000000, kpiBonus: 1200000, deductions: 0, total: 14200000, status: "Đã duyệt" },
]

export default function PayrollDashboard() {
  const [data, setData] = useState(payrollData);
  const [isConfirmOpen, setIsConfirmOpen] = useState(false);

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat('vi-VN').format(val);
  }

  const approveAll = () => {
    setData(data.map(d => ({ ...d, status: "Đã duyệt" })));
    setIsConfirmOpen(false);
  }

  const approveSingle = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setData(data.map(d => d.id === id ? { ...d, status: "Đã chi trả" } : d));
  }

  const totalPayroll = data.reduce((acc, curr) => acc + curr.total, 0);
  const pendingCount = data.filter(d => d.status === "Chờ duyệt").length;

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Master Payroll Dashboard</h2>
          <p className="text-slate-500">Bảng lương tổng hợp Tài xế: Lương cứng, Hoa hồng chuyến và Thưởng phạt KPI.</p>
        </div>
        <div className="flex gap-2">
           <Button variant="outline"><Download className="mr-2 h-4 w-4" /> Xuất Excel</Button>
           <Button className="bg-emerald-600 hover:bg-emerald-700" onClick={() => setIsConfirmOpen(true)} disabled={pendingCount === 0}>
             <CheckCircle2 className="mr-2 h-4 w-4" /> Chốt Lương Tháng 03/2026 ({pendingCount})
           </Button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-4">
        <Card className="col-span-1 border-l-4 border-l-blue-500"><CardHeader className="py-4"><CardTitle className="text-sm font-medium">Tổng Quỹ Lương Mùa Này</CardTitle><div className="text-2xl font-bold">{formatCurrency(totalPayroll)}đ</div></CardHeader></Card>
        <Card className="col-span-1 border-l-4 border-l-green-500"><CardHeader className="py-4"><CardTitle className="text-sm font-medium">Lương & Chuyến (Trung Bình)</CardTitle><div className="text-2xl font-bold">{formatCurrency(Math.floor(totalPayroll / data.length))}đ</div></CardHeader></Card>
        <Card className="col-span-1 border-l-4 border-l-amber-500"><CardHeader className="py-4"><CardTitle className="text-sm font-medium">Tổng Khoản Phạt / Khấu trừ</CardTitle><div className="text-2xl font-bold text-red-500">{formatCurrency(data.reduce((a,c) => a + c.deductions, 0))}đ</div></CardHeader></Card>
        <Card className="col-span-1 border-l-4 border-l-purple-500"><CardHeader className="py-4"><CardTitle className="text-sm font-medium">Tổng Thưởng Tiết kiệm nhiên liệu</CardTitle><div className="text-2xl font-bold text-green-600">{formatCurrency(data.reduce((a,c) => a + c.kpiBonus, 0))}đ</div></CardHeader></Card>
      </div>

      <Card>
        <div className="p-4 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center bg-slate-50 dark:bg-slate-900 rounded-t-xl">
           <div className="flex gap-2">
              <Input placeholder="Tìm tên tài xế, mã NV..." className="w-64 bg-white dark:bg-slate-950" />
           </div>
           <div className="flex gap-2">
              <Button variant="outline" size="sm"><Filter className="mr-2 h-4 w-4"/> Bộ lọc</Button>
           </div>
        </div>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow className="bg-slate-50 dark:bg-slate-900/50">
                <TableHead className="pl-6">Mã NV</TableHead>
                <TableHead>Tên Tài xế</TableHead>
                <TableHead className="text-right">Lương Tối Thiểu</TableHead>
                <TableHead className="text-right">Số chuyến</TableHead>
                <TableHead className="text-right">Hoa hồng / Khoán</TableHead>
                <TableHead className="text-right">Thưởng KPI</TableHead>
                <TableHead className="text-right text-red-500">Vi phạm/Khấu trừ</TableHead>
                <TableHead className="text-right font-bold text-blue-700 dark:text-blue-400">Thực Nhận</TableHead>
                <TableHead className="text-center">Trạng thái</TableHead>
                <TableHead className="text-right pr-6">Tác vụ</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {data.map((row) => (
                <TableRow key={row.id}>
                  <TableCell className="pl-6 font-medium text-slate-500">{row.id}</TableCell>
                  <TableCell className="font-semibold">{row.name}</TableCell>
                  <TableCell className="text-right">{formatCurrency(row.baseSalary)}</TableCell>
                  <TableCell className="text-right font-medium">{row.trips}</TableCell>
                  <TableCell className="text-right text-emerald-600">+{formatCurrency(row.tripBonus)}</TableCell>
                  <TableCell className="text-right text-purple-600">+{formatCurrency(row.kpiBonus)}</TableCell>
                  <TableCell className="text-right text-red-500">{row.deductions > 0 ? `-${formatCurrency(row.deductions)}` : '-'}</TableCell>
                  <TableCell className="text-right font-bold text-lg text-blue-700 dark:text-blue-400">{formatCurrency(row.total)} đ</TableCell>
                  <TableCell className="text-center">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${row.status === 'Đã chi trả' ? 'bg-green-100 text-green-700' : row.status === 'Đã duyệt' ? 'bg-blue-100 text-blue-700' : 'bg-amber-100 text-amber-700'}`}>
                      {row.status}
                    </span>
                  </TableCell>
                  <TableCell className="text-right pr-6">
                    {row.status === 'Đã duyệt' && (
                       <Button size="sm" variant="outline" className="border-green-200 text-green-700 hover:bg-green-50" onClick={(e) => approveSingle(row.id, e)}>Chi trả</Button>
                    )}
                    {row.status === 'Chờ duyệt' && (
                       <span className="text-xs text-slate-400">Chờ chốt</span>
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* CONFIRM MODAL */}
      {isConfirmOpen && (
        <Dialog>
          <DialogContent onClose={() => setIsConfirmOpen(false)}>
            <DialogHeader><DialogTitle>Chốt Lương Toàn Bộ Tài Xế</DialogTitle></DialogHeader>
            <div className="py-4">
              <div className="p-4 bg-amber-50 text-amber-900 dark:bg-amber-950/50 dark:text-amber-200 rounded-lg text-sm mb-4">
                 Bạn đang thực hiện chốt <strong>{pendingCount}</strong> bảng lương đang ở trạng thái [Chờ duyệt]. Sau khi chốt, Kế toán sẽ không thể điều chỉnh các khoản thưởng/phạt của tháng này nữa.
              </div>
              <div className="flex justify-between items-center py-2 border-b border-slate-100 dark:border-slate-800">
                <span className="text-slate-500">Kỳ lương:</span>
                <span className="font-semibold">Tháng 03/2026</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-slate-100 dark:border-slate-800">
                <span className="text-slate-500">Số lượng nhân sự:</span>
                <span className="font-semibold">{pendingCount} tài xế</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-slate-100 dark:border-slate-800">
                <span className="text-slate-500">Tổng quỹ giải ngân:</span>
                <span className="font-bold text-lg text-blue-600">{formatCurrency(data.filter(d => d.status === 'Chờ duyệt').reduce((a,c) => a + c.total, 0))} đ</span>
              </div>
            </div>
            <DialogFooter>
               <Button variant="outline" onClick={() => setIsConfirmOpen(false)}>Hủy bỏ</Button>
               <Button className="bg-emerald-600 hover:bg-emerald-700" onClick={approveAll}>Xác nhận Chốt Lương</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      )}

    </div>
  )
}
