"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog"
import { DollarSign, FileText, ArrowUpRight, ArrowDownRight, Printer } from "lucide-react"
import Link from "next/link"

export default function FinancePage() {
  const [activeTab, setActiveTab] = useState('all');
  const [isApproveOpen, setIsApproveOpen] = useState(false);
  const [selectedTxn, setSelectedTxn] = useState<string | null>(null);
  
  const [transactions, setTransactions] = useState([
    { id: "TXN-001", date: "17/03/2026 14:30", desc: "Thanh toán cước VLXD Số 1", category: "Thu Cước", amount: "+ 15,400,000", account: "Vietcombank", status: "completed", type: 'in' },
    { id: "TXN-002", date: "17/03/2026 09:15", desc: "Tài xế A nộp vé cầu đường", category: "Chi Phí Chuyến", amount: "- 850,000", account: "Tiền mặt (Tạm ứng)", status: "pending", type: 'out' },
    { id: "TXN-003", date: "16/03/2026 16:45", desc: "Đổ dầu xe 29C-123.45", category: "Chi Phí Dầu", amount: "- 5,200,000", account: "Petrolimex (Công nợ)", status: "completed", type: 'out' },
    { id: "TXN-004", date: "16/03/2026 10:00", desc: "Thu tiền Co.opmart Đợt 1", category: "Thu Cước", amount: "+ 45,000,000", account: "Techcombank", status: "completed", type: 'in' },
    { id: "TXN-005", date: "15/03/2026 15:20", desc: "Tài xế B nộp phạt tốc độ", category: "Khấu Trừ Lương", amount: "+ 1,500,000", account: "Khấu trừ nội bộ", status: "completed", type: 'in' },
    { id: "TXN-006", date: "15/03/2026 11:30", desc: "Thanh toán lốp Michelin", category: "Chi Vật Phẩm", amount: "- 25,500,000", account: "Vietcombank", status: "completed", type: 'out' },
    { id: "TXN-007", date: "14/03/2026 08:45", desc: "Phí bốc xếp kho Nam Định", category: "Chi Phí Chuyến", amount: "- 1,200,000", account: "Tiền mặt (Tạm ứng)", status: "pending", type: 'out' },
    { id: "TXN-008", date: "14/03/2026 17:10", desc: "Hoàn ứng công tác phí C", category: "Thu Hoàn Ứng", amount: "+ 3,000,000", account: "Tiền mặt", status: "completed", type: 'in' },
  ]);

  const [approveNote, setApproveNote] = useState("");

  const handleOpenApprove = (id: string) => {
    setSelectedTxn(id);
    setIsApproveOpen(true);
  }

  const handleApproveSubmit = () => {
    if (!selectedTxn) return;
    setTransactions(transactions.map(t => 
       t.id === selectedTxn ? { ...t, status: "completed", desc: t.desc + (approveNote ? ` (${approveNote})` : "") } : t
    ));
    setIsApproveOpen(false);
    setSelectedTxn(null);
    setApproveNote("");
  }

  const handleRejectSubmit = () => {
    if (!selectedTxn) return;
    setTransactions(transactions.map(t => 
       t.id === selectedTxn ? { ...t, status: "rejected", desc: t.desc + " (Đã từ chối)" } : t
    ));
    setIsApproveOpen(false);
    setSelectedTxn(null);
    setApproveNote("");
  }

  const getStatusBadge = (status: string) => {
    switch(status) {
      case 'completed': return <Badge variant="success">Đã hạch toán</Badge>
      case 'pending': return <Badge variant="warning">Chờ duyệt</Badge>
      case 'rejected': return <Badge variant="destructive">Từ chối</Badge>
      default: return <Badge variant="outline">{status}</Badge>
    }
  }

  const filteredTransactions = activeTab === 'all' 
    ? transactions 
    : activeTab === 'pending'
      ? transactions.filter(t => t.status === 'pending')
      : transactions.filter(t => t.type === activeTab);

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Kế toán & Tài chính</h2>
          <p className="text-slate-500">Sổ cái, đối soát vé cầu đường/dầu và dòng tiền.</p>
        </div>
        <div className="flex gap-2">
          <Link href="/finance/payables">
            <Button variant="outline" className="border-blue-200 text-blue-600 bg-blue-50 hover:bg-blue-100">
               Quản lý Công nợ Phải trả (Payables)
            </Button>
          </Link>
          <Link href="/finance/invoices">
            <Button variant="default" className="bg-blue-600 hover:bg-blue-700">
               Trình Tạo CT & Hóa Đơn (Invoices)
            </Button>
          </Link>
        </div>
      </div>

       <Card>
        <CardHeader>
          <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4 border-b border-slate-100 dark:border-slate-800 pb-4">
             <div className="flex gap-1 p-1 bg-slate-100 dark:bg-slate-800 rounded-lg">
                <button onClick={() => setActiveTab('all')} className={`px-4 py-1.5 text-sm font-medium rounded-md transition-all ${activeTab === 'all' ? 'bg-white dark:bg-slate-950 shadow-sm text-slate-900 dark:text-white' : 'text-slate-500 hover:text-slate-900 dark:hover:text-white'}`}>Tất cả Lịch sử</button>
                <button onClick={() => setActiveTab('in')} className={`px-4 py-1.5 text-sm font-medium rounded-md transition-all ${activeTab === 'in' ? 'bg-white dark:bg-slate-950 shadow-sm text-slate-900 dark:text-white' : 'text-slate-500 hover:text-slate-900 dark:hover:text-white'}`}>Phiếu Thu</button>
                <button onClick={() => setActiveTab('out')} className={`px-4 py-1.5 text-sm font-medium rounded-md transition-all ${activeTab === 'out' ? 'bg-white dark:bg-slate-950 shadow-sm text-slate-900 dark:text-white' : 'text-slate-500 hover:text-slate-900 dark:hover:text-white'}`}>Phiếu Chi</button>
                <button onClick={() => setActiveTab('pending')} className={`px-4 py-1.5 text-sm font-medium rounded-md transition-all ${activeTab === 'pending' ? 'bg-white dark:bg-slate-950 shadow-sm text-slate-900 dark:text-white' : 'text-slate-500 hover:text-slate-900 dark:hover:text-white'}`}>Chờ đối soát</button>
             </div>
             <div className="flex gap-2">
                <Button variant="outline"><Printer className="h-4 w-4 mr-2"/> Xuất báo cáo</Button>
             </div>
          </div>
        </CardHeader>
        <CardContent className="pt-4">
          <Table>
            <TableHeader><TableRow><TableHead>Ngày Ghi Nhận</TableHead><TableHead>Diễn giải</TableHead><TableHead>Hạng mục</TableHead><TableHead>Số tiền</TableHead><TableHead>Nguồn</TableHead><TableHead>Trạng thái</TableHead><TableHead className="text-right">Tác vụ</TableHead></TableRow></TableHeader>
            <TableBody>
              {filteredTransactions.map((txn) => (
                <TableRow key={txn.id}>
                  <TableCell className="text-sm text-slate-500">{txn.date}</TableCell>
                  <TableCell className="font-medium">{txn.desc}</TableCell>
                  <TableCell><Badge variant="secondary" className="font-normal">{txn.category}</Badge></TableCell>
                  <TableCell className={`font-semibold ${txn.amount.includes('+') ? 'text-green-600 dark:text-green-500' : 'text-slate-900 dark:text-white'}`}>{txn.amount}</TableCell>
                  <TableCell>{txn.account}</TableCell>
                  <TableCell>{getStatusBadge(txn.status)}</TableCell>
                  <TableCell className="text-right">
                     {txn.status === 'pending' && (
                        <Button size="sm" onClick={() => handleOpenApprove(txn.id)}>Duyệt Chi</Button>
                     )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* APPROVE EXPENSE MODAL */}
      {isApproveOpen && (
         <Dialog>
           <DialogContent onClose={() => setIsApproveOpen(false)} className="max-w-2xl">
             <DialogHeader><DialogTitle>Soát xét Chứng Từ {selectedTxn}</DialogTitle></DialogHeader>
             <div className="py-4 flex flex-col md:flex-row gap-6">
                
                {/* Image Placeholder */}
                <div className="w-full md:w-1/2 flex flex-col gap-2">
                   <span className="text-sm font-medium text-slate-500">Hình ảnh đính kèm từ Tài xế</span>
                   <div className="aspect-[3/4] bg-slate-100 dark:bg-slate-800 rounded-lg flex items-center justify-center border-2 border-dashed border-slate-300 dark:border-slate-700">
                      <FileText className="w-12 h-12 text-slate-400" />
                      <span className="absolute mt-16 text-sm text-slate-500 font-medium">Vé thu phí / Hóa đơn bán lẻ</span>
                   </div>
                </div>

                {/* Form fields to cross-check */}
                <div className="w-full md:w-1/2 flex flex-col gap-4">
                  <div className="grid gap-2">
                    <label className="text-sm font-medium">Nhân sự Yêu Cầu</label>
                    <Input value="Tài xế: Lưu Văn A (Xe: 29C-123.45)" disabled className="bg-slate-50 dark:bg-slate-900" />
                  </div>
                  <div className="grid gap-2">
                    <label className="text-sm font-medium">Hạng mục & Số tiền</label>
                    <Input defaultValue="850,000" className="text-lg font-bold text-red-600 dark:text-red-400" />
                    <span className="text-xs text-slate-500">Tài xế nhập: 850,000đ. Hãy kiểm tra ảnh biên lai trước khi duyệt.</span>
                  </div>
                  <div className="grid gap-2">
                    <label className="text-sm font-medium">Ghi chú hạch toán</label>
                    <Input value={approveNote} onChange={(e) => setApproveNote(e.target.value)} placeholder="Nhập lý do chênh lệch hoặc duyệt..." />
                  </div>
                </div>

             </div>
             <DialogFooter className="flex justify-between sm:justify-between w-full">
               <Button variant="destructive" onClick={handleRejectSubmit}>Từ chối thanh toán</Button>
               <div className="flex gap-2">
                 <Button variant="outline" onClick={() => setIsApproveOpen(false)}>Hủy</Button>
                 <Button onClick={handleApproveSubmit} className="bg-emerald-600 hover:bg-emerald-700">DUYỆT CHI & KHẤU TRỪ</Button>
               </div>
             </DialogFooter>
           </DialogContent>
         </Dialog>
      )}
    </div>
  )
}
