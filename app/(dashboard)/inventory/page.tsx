"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog"
import { Settings, Wrench, AlertCircle, PackagePlus, ArrowRightLeft } from "lucide-react"

export default function InventoryPage() {
  const [isAddPartsOpen, setIsAddPartsOpen] = useState(false);
  const [isIssuePartsOpen, setIsIssuePartsOpen] = useState(false);

  const [inventory, setInventory] = useState([
    { id: "T-295/80R22.5", name: "Lốp Michelin X Multi Z", category: "Lốp Xe", quantity: 12, unit: "Quả", cost: "8,500,000", totalVal: "102,000,000", status: "good" },
    { id: "F-OIL-15W40", name: "Dầu máy Castrol 15W-40 (Phuy)", category: "Dầu/Nhớt", quantity: 2, unit: "Phuy 209L", cost: "14,000,000", totalVal: "28,000,000", status: "low" },
    { id: "B-AKK-01", name: "Bình Ắc quy GS 150Ah", category: "Sửa chữa", quantity: 0, unit: "Bình", cost: "3,200,000", totalVal: "-", status: "out" },
    { id: "F-FIL-001", name: "Lọc dầu Thaco Auman", category: "Sửa chữa", quantity: 24, unit: "Cái", cost: "450,000", totalVal: "10,800,000", status: "good" },
    { id: "P-BRK-09", name: "Má phanh trước Chenglong", category: "Phụ tùng thay thế", quantity: 8, unit: "Bộ", cost: "1,200,000", totalVal: "9,600,000", status: "good" },
    { id: "P-LGH-02", name: "Bóng đèn pha H4 24V", category: "Điện - Đèn", quantity: 50, unit: "Bóng", cost: "85,000", totalVal: "4,250,000", status: "good" },
    { id: "T-12R22.5", name: "Lốp Maxxis 12R22.5", category: "Lốp Xe", quantity: 1, unit: "Quả", cost: "6,800,000", totalVal: "6,800,000", status: "low" },
    { id: "F-COOL-01", name: "Nước làm mát Prestone đỏ", category: "Dầu/Nhớt", quantity: 15, unit: "Can 4L", cost: "350,000", totalVal: "5,250,000", status: "good" },
  ]);

  const [addSupplier, setAddSupplier] = useState("");
  const [addItem, setAddItem] = useState("Vật tư MỚI... (Tạo mới)");
  const [addQty, setAddQty] = useState("");
  const [addCost, setAddCost] = useState("");

  const [issueReason, setIssueReason] = useState("Thay Lốp định kỳ");
  const [issueVehicle, setIssueVehicle] = useState("");
  const [issueItem, setIssueItem] = useState("");
  const [issueQty, setIssueQty] = useState("");

  const handleAddSubmit = () => {
    if (!addQty) return;
    const qty = parseInt(addQty) || 0;
    
    // In a real app we'd search and update an existing item or add a new one. 
    // Here we'll just add a new mock item if "Tạo mới" is selected, or pretend updating.
    if (addItem.includes("MỚI")) {
      const newItem = {
        id: `NEW-PART-00${inventory.length + 1}`,
        name: "Phụ tùng mới nhập",
        category: "Khác",
        quantity: qty,
        unit: "Cái",
        cost: addCost || "0",
        totalVal: "Cập nhật...",
        status: "good"
      };
      setInventory([newItem, ...inventory]);
    } else {
      // Very basic mock update
      const updated = inventory.map(item => {
         if (addItem.includes(item.id)) {
            return { ...item, quantity: item.quantity + qty, status: "good" };
         }
         return item;
      });
      setInventory(updated);
    }

    setIsAddPartsOpen(false);
    setAddQty("");
    setAddCost("");
  }

  const handleIssueSubmit = () => {
     if (!issueQty) return;
     const qtyToIssue = parseInt(issueQty) || 0;

     // Basic mock update: subtract quantity
     const updated = inventory.map(item => {
       if (issueItem.includes(item.id) || !issueItem) { // fallback if empty
         const newQty = Math.max(0, item.quantity - qtyToIssue);
         return {
           ...item,
           quantity: newQty,
           status: newQty === 0 ? "out" : newQty < 5 ? "low" : "good"
         };
       }
       return item;
     });

     setInventory(updated);
     setIsIssuePartsOpen(false);
     setIssueQty("");
     setIssueVehicle("");
  }

  const getStatusBadge = (status: string) => {
    switch(status) {
      case 'good': return <Badge variant="success">Đủ Tồn Kho</Badge>
      case 'low': return <Badge variant="warning">Sắp hết hàng</Badge>
      case 'out': return <Badge variant="destructive">Hết hàng</Badge>
      default: return <Badge variant="outline">{status}</Badge>
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Kho Vật Tư (Inventory)</h2>
          <p className="text-slate-500">Quản lý nhập/xuất phụ tùng, lốp, dầu bảo dưỡng.</p>
        </div>
        <div className="flex items-center gap-2">
           <Button variant="outline" className="text-emerald-600 border-emerald-200 bg-emerald-50 dark:bg-emerald-900/20" onClick={() => setIsAddPartsOpen(true)}>
             <PackagePlus className="mr-2 h-4 w-4" /> Nhập Kho
           </Button>
           <Button variant="outline" className="text-red-600 border-red-200 bg-red-50 dark:bg-red-900/20" onClick={() => setIsIssuePartsOpen(true)}>
             <ArrowRightLeft className="mr-2 h-4 w-4" /> Xuất Kho Thay Thế
           </Button>
        </div>
      </div>

       <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Sổ Tồn Kho Vật Tư</CardTitle>
            <Input placeholder="Tìm mã VT, tên phụ tùng..." className="w-64" />
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader><TableRow><TableHead>Mã VT</TableHead><TableHead>Tên Vật Tư / Phụ tùng</TableHead><TableHead>Phân loại</TableHead><TableHead className="text-right">Tồn kho / ĐVT</TableHead><TableHead className="text-right">Đơn giá trị</TableHead><TableHead>Trạng thái</TableHead></TableRow></TableHeader>
            <TableBody>
              {inventory.map((item) => (
                <TableRow key={item.id}>
                  <TableCell className="font-bold text-slate-600 dark:text-slate-400">{item.id}</TableCell>
                  <TableCell className="font-medium">{item.name}</TableCell>
                  <TableCell><Badge variant="secondary" className="font-normal">{item.category}</Badge></TableCell>
                  <TableCell className="text-right font-bold text-lg"><span className={item.quantity === 0 ? "text-red-500" : ""}>{item.quantity}</span> <span className="text-xs font-normal text-slate-500">{item.unit}</span></TableCell>
                  <TableCell className="text-right text-slate-500">{item.cost}</TableCell>
                  <TableCell>{getStatusBadge(item.status)}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* MODALS */}
      {isAddPartsOpen && (
         <Dialog>
           <DialogContent onClose={() => setIsAddPartsOpen(false)}>
             <DialogHeader><DialogTitle>Tạo Phiếu Nhập Kho Mới</DialogTitle></DialogHeader>
             <div className="grid gap-4 py-4">
               <div className="grid gap-2">
                 <label className="text-sm font-medium">Nhà Cung Cấp</label>
                 <Input value={addSupplier} onChange={(e) => setAddSupplier(e.target.value)} placeholder="Đại lý Lốp Casumina Hà Nội..." />
               </div>
               <div className="grid grid-cols-3 gap-4">
                 <div className="col-span-2 grid gap-2">
                   <label className="text-sm font-medium">Chọn Vật Tư</label>
                   <select 
                     value={addItem} onChange={(e) => setAddItem(e.target.value)}
                     className="flex h-10 w-full rounded-md border border-slate-200 bg-transparent px-3 py-2 text-sm dark:border-slate-800"
                   >
                     {inventory.map(item => (
                       <option key={item.id} value={item.id}>{item.id} ({item.name})</option>
                     ))}
                     <option value="Vật tư MỚI... (Tạo mới)">Vật tư MỚI... (Tạo mới)</option>
                   </select>
                 </div>
                 <div className="grid gap-2">
                   <label className="text-sm font-medium">Số lượng nhập</label>
                   <Input value={addQty} onChange={(e) => setAddQty(e.target.value)} type="number" placeholder="1" min="1" />
                 </div>
               </div>
               <div className="grid grid-cols-2 gap-4">
                  <div className="grid gap-2">
                    <label className="text-sm font-medium">Đơn giá thực nhập (VNĐ)</label>
                    <Input value={addCost} onChange={(e) => setAddCost(e.target.value)} placeholder="Vd: 3,200,000" />
                  </div>
                  <div className="grid gap-2">
                    <label className="text-sm font-medium">Tổng Tiền</label>
                    <Input disabled value="0" className="bg-slate-50" />
                  </div>
               </div>
             </div>
             <DialogFooter>
               <Button variant="outline" onClick={() => setIsAddPartsOpen(false)}>Hủy</Button>
               <Button onClick={handleAddSubmit}>Lưu & Ghi Sổ Cái</Button>
             </DialogFooter>
           </DialogContent>
         </Dialog>
      )}

      {isIssuePartsOpen && (
         <Dialog>
           <DialogContent onClose={() => setIsIssuePartsOpen(false)}>
             <DialogHeader><DialogTitle>Tạo Phiếu Xuất Kho (Thay thế Vật Tư)</DialogTitle></DialogHeader>
             <div className="grid gap-4 py-4">
               <div className="grid gap-2">
                 <label className="text-sm font-medium">Lý do / Lệnh điều động</label>
                 <select 
                   value={issueReason} onChange={(e) => setIssueReason(e.target.value)}
                   className="flex h-10 w-full rounded-md border border-slate-200 bg-transparent px-3 py-2 text-sm dark:border-slate-800"
                 >
                    <option value="Thay Lốp định kỳ">Thay Lốp định kỳ (Đến hạn mòn mốc 3mm)</option>
                    <option value="Sửa chữa khẩn cấp">Sửa chữa khẩn cấp dọc đường</option>
                    <option value="Bảo dưỡng định kỳ">Bảo dưỡng định kỳ (Thay dầu/nhớt)</option>
                 </select>
               </div>
               <div className="grid grid-cols-2 gap-4">
                  <div className="grid gap-2">
                     <label className="text-sm font-medium">Xuất cho Đầu Xe / Moóc</label>
                     <Input value={issueVehicle} onChange={(e) => setIssueVehicle(e.target.value)} placeholder="Biển số: VD: 29C-123.45" />
                  </div>
                  <div className="grid gap-2">
                     <label className="text-sm font-medium">Tài xế nhận vật tư</label>
                     <Input placeholder="Nhập tên / Mã NV" />
                  </div>
               </div>
               
               <div className="grid gap-2 p-4 border border-dashed border-red-200 bg-red-50 dark:bg-red-950/20 rounded-lg">
                 <label className="text-sm font-medium text-red-800 dark:text-red-400">Chọn Vật Tư Cần Xuất Kho</label>
                 <div className="flex gap-2">
                   <select 
                     value={issueItem} onChange={(e) => setIssueItem(e.target.value)}
                     className="flex flex-1 h-10 w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm dark:border-slate-800 dark:bg-slate-900"
                   >
                     {inventory.filter(i => i.quantity > 0).map(item => (
                       <option key={item.id} value={item.id}>{item.id} (Tồn: {item.quantity} {item.unit})</option>
                     ))}
                   </select>
                   <Input value={issueQty} onChange={(e) => setIssueQty(e.target.value)} type="number" placeholder="1" min="1" className="w-20 bg-white dark:bg-slate-900" />
                 </div>
               </div>
             </div>
             <DialogFooter>
               <Button variant="outline" onClick={() => setIsIssuePartsOpen(false)}>Hủy</Button>
               <Button onClick={handleIssueSubmit} variant="destructive">LƯU & TRỪ TỒN KHO</Button>
             </DialogFooter>
           </DialogContent>
         </Dialog>
      )}
    </div>
  )
}
