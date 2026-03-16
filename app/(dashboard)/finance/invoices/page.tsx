"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog"
import { Printer, Download, FileText, Share2, Plus } from "lucide-react"

// Mock invoices
const invoices = [
  { id: "INV-2026-001", customer: "Công ty VLXD Số 1", date: "17/03/2026", amount: "15,400,000", status: "Đã xuất", type: "VAT" },
  { id: "DO-2026-088", customer: "Nhà máy Nhựa Chợ Lớn", date: "16/03/2026", amount: "-", status: "Chờ ký", type: "Lệnh Điều Xe" },
  { id: "INV-2026-002", customer: "Tập Đoàn Hòa Phát", date: "15/03/2026", amount: "45,000,000", status: "Bản nháp", type: "VAT" },
]

export default function InvoiceGeneratorPage() {
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const [selectedInvoice, setSelectedInvoice] = useState<any>(null);

  const handlePreview = (invoice: any) => {
    setSelectedInvoice(invoice);
    setIsPreviewOpen(true);
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Chứng từ & Hóa đơn</h2>
          <p className="text-slate-500">Trình tạo hóa đơn VAT, Lệnh điều xe và Phiếu thu chi chuyên nghiệp.</p>
        </div>
        <div className="flex gap-2">
          <Button><Plus className="mr-2 h-4 w-4" /> Tạo Chứng từ Mới</Button>
        </div>
      </div>

      <Card>
        <div className="p-4 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center bg-slate-50 dark:bg-slate-900 rounded-t-xl">
           <div className="flex gap-2">
              <Input placeholder="Tìm mã chứng từ..." className="w-64 bg-white dark:bg-slate-950" />
           </div>
           <div className="flex gap-2">
              <Button variant="outline" size="sm">Tất cả</Button>
              <Button variant="outline" size="sm">Hóa đơn VAT</Button>
              <Button variant="outline" size="sm">Lệnh Điều Xe</Button>
           </div>
        </div>
        <CardContent className="p-0">
          <Table>
            <TableHeader><TableRow><TableHead className="pl-6">Mã CT</TableHead><TableHead>Khách hàng/Đối tác</TableHead><TableHead>Loại</TableHead><TableHead>Ngày lập</TableHead><TableHead>Tổng tiền</TableHead><TableHead>Trạng thái</TableHead><TableHead className="text-right pr-6">Hành động</TableHead></TableRow></TableHeader>
            <TableBody>
              {invoices.map((inv) => (
                <TableRow key={inv.id}>
                  <TableCell className="pl-6 font-medium text-blue-600 cursor-pointer" onClick={() => handlePreview(inv)}>{inv.id}</TableCell>
                  <TableCell className="font-semibold">{inv.customer}</TableCell>
                  <TableCell><span className="bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded text-xs font-medium">{inv.type}</span></TableCell>
                  <TableCell>{inv.date}</TableCell>
                  <TableCell className="font-bold">{inv.amount} đ</TableCell>
                  <TableCell>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${inv.status === 'Đã xuất' ? 'bg-green-100 text-green-700' : inv.status === 'Chờ ký' ? 'bg-amber-100 text-amber-700' : 'bg-slate-100 text-slate-700'}`}>
                      {inv.status}
                    </span>
                  </TableCell>
                  <TableCell className="text-right pr-6">
                    <Button variant="ghost" size="sm" onClick={() => handlePreview(inv)}><FileText className="h-4 w-4 mr-1"/> Xem</Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* DOCUMENT PREVIEW MODAL */}
      {isPreviewOpen && selectedInvoice && (
        <Dialog>
          <DialogContent onClose={() => setIsPreviewOpen(false)} className="max-w-4xl p-0 h-[85vh] flex flex-col overflow-hidden bg-slate-100 dark:bg-slate-950">
            <DialogHeader className="p-4 border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shrink-0">
               <div className="flex justify-between items-center w-full">
                 <DialogTitle className="flex items-center gap-2"><FileText size={20}/> Chi tiết Chứng từ: {selectedInvoice.id}</DialogTitle>
                 <div className="flex gap-2 mr-6">
                    <Button variant="outline" size="sm"><Download className="h-4 w-4 mr-2"/> Tải PDF</Button>
                    <Button variant="outline" size="sm"><Share2 className="h-4 w-4 mr-2"/> Cấp Link</Button>
                    <Button size="sm"><Printer className="h-4 w-4 mr-2"/> In ngay</Button>
                 </div>
               </div>
            </DialogHeader>
            <div className="flex-1 overflow-auto p-4 md:p-8 flex justify-center">
               
               {/* A4 Paper Simulation */}
               <div className="w-full max-w-[794px] min-h-[1123px] bg-white text-black p-12 shadow-2xl relative">
                  
                  {/* Watermark */}
                  {selectedInvoice.status !== 'Đã xuất' && (
                     <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none select-none" style={{ transform: 'rotate(-45deg)' }}>
                       <span className="text-9xl font-black uppercase text-red-500">BẢN NHÁP</span>
                     </div>
                  )}

                  {/* Header */}
                  <div className="flex justify-between items-start border-b-2 border-slate-800 pb-6 mb-8">
                     <div className="flex items-center gap-4">
                        <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center text-white font-black text-2xl">LTP</div>
                        <div>
                           <h1 className="text-xl font-bold uppercase tracking-wider text-blue-900">LogiTrack Pro JSC</h1>
                           <p className="text-sm text-slate-600">Smart Logistics Solutions</p>
                           <p className="text-xs text-slate-500 mt-1">MST: 0101234567 • Phone: 1900.1234</p>
                        </div>
                     </div>
                     <div className="text-right">
                        <h2 className="text-3xl font-black uppercase text-slate-300 tracking-widest">{selectedInvoice.type === 'VAT' ? 'HÓA ĐƠN GTGT' : 'LỆNH ĐIỀU XE'}</h2>
                        <div className="mt-2 text-sm">
                           <p>Số: <strong className="text-blue-600">{selectedInvoice.id}</strong></p>
                           <p>Ngày: {selectedInvoice.date}</p>
                        </div>
                     </div>
                  </div>

                  {/* Customer Info */}
                  <div className="bg-slate-50 p-4 border border-slate-200 rounded mb-8 text-sm">
                     <p className="mb-2"><strong>Đơn vị nhận (Customer):</strong> {selectedInvoice.customer}</p>
                     <p className="mb-2"><strong>Địa chỉ:</strong> Tòa nhà Center Building, Số 1 Nguyễn Trãi, Thanh Xuân, Hà Nội</p>
                     <p><strong>Mã số thuế:</strong> 0109876543</p>
                  </div>

                  {/* Line Items Table */}
                  <table className="w-full text-sm mb-8 border-collapse">
                     <thead>
                        <tr className="bg-slate-800 text-white text-left">
                           <th className="p-3 border border-slate-800 w-12 text-center">STT</th>
                           <th className="p-3 border border-slate-800">Tên hàng hóa, dịch vụ / Lộ trình</th>
                           <th className="p-3 border border-slate-800 w-24 text-center">ĐVT</th>
                           <th className="p-3 border border-slate-800 w-24 text-right">Số lượng</th>
                           <th className="p-3 border border-slate-800 w-32 text-right">Đơn giá</th>
                           <th className="p-3 border border-slate-800 w-32 text-right">Thành tiền</th>
                        </tr>
                     </thead>
                     <tbody>
                        <tr>
                           <td className="p-3 border border-slate-300 text-center">1</td>
                           <td className="p-3 border border-slate-300">Cước vận tải Hà Nội - Hải Phòng (Xe 29C-123.45)</td>
                           <td className="p-3 border border-slate-300 text-center">Chuyến</td>
                           <td className="p-3 border border-slate-300 text-right">1</td>
                           <td className="p-3 border border-slate-300 text-right">5,000,000</td>
                           <td className="p-3 border border-slate-300 text-right">5,000,000</td>
                        </tr>
                        <tr>
                           <td className="p-3 border border-slate-300 text-center">2</td>
                           <td className="p-3 border border-slate-300">Phí chờ bốc dỡ phát sinh (4 giờ x 100k)</td>
                           <td className="p-3 border border-slate-300 text-center">Giờ</td>
                           <td className="p-3 border border-slate-300 text-right">4</td>
                           <td className="p-3 border border-slate-300 text-right">100,000</td>
                           <td className="p-3 border border-slate-300 text-right">400,000</td>
                        </tr>
                        {selectedInvoice.type === 'VAT' && (
                          <tr>
                             <td className="p-3 border border-slate-300 text-center">3</td>
                             <td className="p-3 border border-slate-300">Cước kho bãi tạm lưu</td>
                             <td className="p-3 border border-slate-300 text-center">Ngày</td>
                             <td className="p-3 border border-slate-300 text-right">2</td>
                             <td className="p-3 border border-slate-300 text-right">5,000,000</td>
                             <td className="p-3 border border-slate-300 text-right">10,000,000</td>
                          </tr>
                        )}
                        <tr>
                           <td className="p-3 border border-slate-800 bg-slate-50 text-right font-bold" colSpan={5}>Cộng tiền hàng:</td>
                           <td className="p-3 border border-slate-800 text-right font-bold uppercase">{selectedInvoice.amount === '-' ? '5,400,000' : '15,400,000'}</td>
                        </tr>
                        {selectedInvoice.type === 'VAT' && (
                          <>
                            <tr>
                               <td className="p-3 border border-slate-800 bg-slate-50 text-right font-bold" colSpan={5}>Thuế GTGT (8%):</td>
                               <td className="p-3 border border-slate-800 text-right font-bold uppercase">1,232,000</td>
                            </tr>
                            <tr>
                               <td className="p-3 border border-slate-800 bg-slate-100 text-right font-bold text-blue-900 text-lg" colSpan={5}>TỔNG CỘNG THANH TOÁN:</td>
                               <td className="p-3 border border-slate-800 text-right font-bold text-blue-900 text-lg">16,632,000</td>
                            </tr>
                          </>
                        )}
                     </tbody>
                  </table>

                  {/* Signatures */}
                  <div className="flex justify-between px-12 mt-16 text-sm">
                     <div className="text-center">
                        <p className="font-bold">Người Mua Hàng</p>
                        <p className="text-slate-500 italic mt-1">(Ký, ghi rõ họ tên)</p>
                     </div>
                     <div className="text-center">
                        <p className="font-bold">Người Bán Hàng / Giám Đốc</p>
                        <p className="text-slate-500 italic mt-1">(Ký, đóng dấu, ghi rõ họ tên)</p>
                        {selectedInvoice.status === 'Đã xuất' ? (
                          <div className="mt-8 border-4 border-red-500 text-red-500 font-bold uppercase w-32 h-32 rounded-full flex items-center justify-center -rotate-12 mx-auto mix-blend-multiply opacity-80">
                            Đã<br/>Thu Tiền
                          </div>
                        ) : (
                          <div className="h-32"></div>
                        )}
                     </div>
                  </div>

               </div>
            </div>
          </DialogContent>
        </Dialog>
      )}

    </div>
  )
}
