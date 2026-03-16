"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog"
import { Search, Plus, UserCircle, Phone, DollarSign } from "lucide-react"
import Link from "next/link"

export default function DriversPage() {
  const [isAddDriverOpen, setIsAddDriverOpen] = useState(false);

  const [drivers, setDrivers] = useState([
    { id: "DRV-001", name: "Lưu Văn A", phone: "0901.234.567", licenseClass: "FC", currentVehicle: "29C-123.45", rating: 4.8 },
    { id: "DRV-002", name: "Trần Kim B", phone: "0988.765.432", licenseClass: "FC", currentVehicle: "15C-678.90", rating: 4.5 },
    { id: "DRV-003", name: "Lê Ngọc C", phone: "0912.333.444", licenseClass: "C", currentVehicle: "51D-456.78", rating: 4.9 },
    { id: "DRV-004", name: "Phạm Văn D", phone: "0966.555.666", licenseClass: "FC", currentVehicle: "60C-234.56", rating: 4.2 },
    { id: "DRV-005", name: "Đỗ Thái E", phone: "0933.111.222", licenseClass: "C", currentVehicle: "29H-999.99", rating: 4.7 },
    { id: "DRV-006", name: "Trần Thế F", phone: "0944.888.999", licenseClass: "FC", currentVehicle: "72C-111.22", rating: 4.6 },
    { id: "DRV-007", name: "Ngô Văn G", phone: "0909.123.123", licenseClass: "FC", currentVehicle: "34C-555.66", rating: 5.0 },
    { id: "DRV-008", name: "Vũ Minh H", phone: "0987.654.321", licenseClass: "B2", currentVehicle: "Chưa phân xe", rating: 4.0 },
  ]);

  const [newName, setNewName] = useState("");
  const [newPhone, setNewPhone] = useState("");
  const [newLicense, setNewLicense] = useState("Thẻ C");

  const handleCreateDriver = () => {
    if (!newName || !newPhone) return;

    const newDriver = {
      id: `DRV-00${drivers.length + 1}`,
      name: newName,
      phone: newPhone,
      licenseClass: newLicense,
      currentVehicle: "---",
      rating: 5.0
    };

    setDrivers([newDriver, ...drivers]);
    setIsAddDriverOpen(false);
    setNewName("");
    setNewPhone("");
    setNewLicense("Thẻ C");
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Hồ sơ Lái xe (Drivers)</h2>
          <p className="text-slate-500">Quản lý thông tin tài xế, bằng lái và đánh giá hiệu suất.</p>
        </div>
        <div className="flex gap-2">
          <Link href="/drivers/payroll">
            <Button variant="outline" className="border-emerald-200 text-emerald-700 bg-emerald-50 hover:bg-emerald-100">
              Bảng Lương (Payroll)
            </Button>
          </Link>
          <Button onClick={() => setIsAddDriverOpen(true)}>
            <Plus className="mr-2 h-4 w-4" /> Thêm tài xế
          </Button>
        </div>
      </div>

       <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Danh sách nhân sự Lái xe</CardTitle>
            <Input placeholder="Tìm tên, SĐT..." className="w-64" />
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader><TableRow><TableHead>Mã NV</TableHead><TableHead>Tên Tài Xế</TableHead><TableHead>Liên hệ</TableHead><TableHead>Hạng Bằng</TableHead><TableHead>Đánh giá KPI</TableHead></TableRow></TableHeader>
            <TableBody>
              {drivers.map((drv) => (
                <TableRow key={drv.id}>
                  <TableCell className="font-medium"><Link href={`/drivers/${drv.id}`} className="text-blue-600 hover:underline">{drv.id}</Link></TableCell>
                  <TableCell><div className="font-semibold">{drv.name}</div><div className="text-xs text-slate-500">Xe: {drv.currentVehicle}</div></TableCell>
                  <TableCell><div className="flex items-center gap-1.5"><Phone className="h-3.5 w-3.5"/>{drv.phone}</div></TableCell>
                  <TableCell><Badge variant="outline">{drv.licenseClass}</Badge></TableCell>
                  <TableCell>⭐ {drv.rating}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* ADD DRIVER MODAL */}
      {isAddDriverOpen && (
         <Dialog>
           <DialogContent onClose={() => setIsAddDriverOpen(false)}>
             <DialogHeader><DialogTitle>Tạo Hồ Sơ Tài Xế Mới</DialogTitle></DialogHeader>
             <div className="grid gap-4 py-4">
               <div className="grid grid-cols-2 gap-4">
                  <div className="grid gap-2">
                    <label className="text-sm font-medium">Họ & Tên</label>
                    <Input value={newName} onChange={(e) => setNewName(e.target.value)} placeholder="Nguyễn Văn X" />
                  </div>
                  <div className="grid gap-2">
                    <label className="text-sm font-medium">Số Điện Thoại</label>
                    <Input value={newPhone} onChange={(e) => setNewPhone(e.target.value)} placeholder="09xxxxxxx" />
                  </div>
               </div>
               <div className="grid grid-cols-2 gap-4">
                  <div className="grid gap-2">
                    <label className="text-sm font-medium">Hạng Bằng Lái</label>
                    <select 
                      value={newLicense}
                      onChange={(e) => setNewLicense(e.target.value)}
                      className="flex h-10 w-full rounded-md border border-slate-200 bg-transparent px-3 py-2 text-sm dark:border-slate-800"
                    >
                      <option value="Thẻ B2">Thẻ B2</option>
                      <option value="Thẻ C">Thẻ C</option>
                      <option value="Thẻ FC">Thẻ FC</option>
                    </select>
                  </div>
                  <div className="grid gap-2">
                    <label className="text-sm font-medium">Ngày hết hạn bằng</label>
                    <Input type="date" />
                  </div>
               </div>
               <div className="grid gap-2">
                 <label className="text-sm font-medium">Lương Cứng Theo Tháng</label>
                 <Input type="number" placeholder="Ví dụ: 8,000,000" />
               </div>
             </div>
             <DialogFooter>
               <Button variant="outline" onClick={() => setIsAddDriverOpen(false)}>Hủy</Button>
               <Button onClick={handleCreateDriver}>Lưu Hồ Sơ</Button>
             </DialogFooter>
           </DialogContent>
         </Dialog>
      )}
    </div>
  )
}
