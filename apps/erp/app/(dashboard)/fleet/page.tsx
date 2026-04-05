"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog"
import { Search, Plus, Truck, AlertTriangle, Settings2 } from "lucide-react"
import Link from "next/link"

export default function FleetPage() {
  const [isAddVehicleOpen, setIsAddVehicleOpen] = useState(false);

  const [fleet, setFleet] = useState([
    { id: "29C-123.45", type: "Xe đầu kéo", capacity: "30 Tấn", status: "running", fuelNorm: "35L/100km", nextMaintenance: "12/04/2026", registrationExpiry: "20/03/2026", drivenKm: "245,600" },
    { id: "15C-678.90", type: "Xe đầu kéo", capacity: "30 Tấn", status: "idle", fuelNorm: "34L/100km", nextMaintenance: "05/05/2026", registrationExpiry: "15/08/2026", drivenKm: "128,400" },
    { id: "60C-234.56", type: "Xe tải thùng", capacity: "15 Tấn", status: "running", fuelNorm: "22L/100km", nextMaintenance: "22/03/2026", registrationExpiry: "10/06/2026", drivenKm: "312,050" },
    { id: "51D-456.78", type: "Container Lạnh", capacity: "40 Feet", status: "maintenance", fuelNorm: "40L/100km", nextMaintenance: "16/03/2026", registrationExpiry: "01/11/2026", drivenKm: "450,200" },
    { id: "29H-999.99", type: "Xe tải nhỏ", capacity: "3.5 Tấn", status: "running", fuelNorm: "12L/100km", nextMaintenance: "30/04/2026", registrationExpiry: "25/12/2026", drivenKm: "89,000" },
    { id: "72C-111.22", type: "Rơ moóc sàn", capacity: "32 Tấn", status: "idle", fuelNorm: "N/A", nextMaintenance: "10/05/2026", registrationExpiry: "18/09/2026", drivenKm: "N/A" },
    { id: "34C-555.66", type: "Xe bồn xi măng", capacity: "25 Khối", status: "running", fuelNorm: "38L/100km", nextMaintenance: "01/04/2026", registrationExpiry: "12/07/2026", drivenKm: "185,300" }
  ]);

  const [newId, setNewId] = useState("");
  const [newCapacity, setNewCapacity] = useState("");
  const [newFuelNorm, setNewFuelNorm] = useState("");
  const [newNextMaintenance, setNewNextMaintenance] = useState("");
  const [newRegistrationExpiry, setNewRegistrationExpiry] = useState("");

  const getStatusBadge = (status: string) => {
    switch(status) {
      case 'running': return <Badge variant="success">Đang chạy</Badge>
      case 'idle': return <Badge variant="secondary">Nằm bãi</Badge>
      case 'maintenance': return <Badge variant="warning">Đang sửa chữa</Badge>
      default: return <Badge variant="outline">{status}</Badge>
    }
  }

  const handleCreateVehicle = () => {
    if (!newId || !newCapacity) return;

    const newVehicle = {
      id: newId,
      type: "Tải thùng",
      capacity: newCapacity,
      status: "idle",
      fuelNorm: newFuelNorm || "Đang cập nhật",
      nextMaintenance: newNextMaintenance || "Chưa có",
      registrationExpiry: newRegistrationExpiry || "Chưa có",
      drivenKm: "0"
    };

    setFleet([newVehicle, ...fleet]);
    setIsAddVehicleOpen(false);
    setNewId("");
    setNewCapacity("");
    setNewFuelNorm("");
    setNewNextMaintenance("");
    setNewRegistrationExpiry("");
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Quản lý Đội xe (Fleet)</h2>
          <p className="text-slate-500">Hồ sơ phương tiện, theo dõi định mức và cảnh báo bảo dưỡng.</p>
        </div>
        <Button onClick={() => setIsAddVehicleOpen(true)}>
          <Plus className="mr-2 h-4 w-4" /> Thêm xe mới
        </Button>
      </div>

       <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Danh sách phương tiện</CardTitle>
            <Input placeholder="Tìm biển số..." className="w-64" />
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader><TableRow><TableHead>Biển số</TableHead><TableHead>Loại xe</TableHead><TableHead>Trạng thái</TableHead><TableHead>Số KM đã chạy</TableHead><TableHead>Hạn Đăng kiểm</TableHead></TableRow></TableHeader>
            <TableBody>
              {fleet.map((v) => (
                <TableRow key={v.id}>
                  <TableCell className="font-bold"><Link href={`/fleet/${v.id}`} className="text-blue-600 hover:underline">{v.id}</Link></TableCell>
                  <TableCell>{v.type}</TableCell>
                  <TableCell>{getStatusBadge(v.status)}</TableCell>
                  <TableCell>{v.drivenKm}</TableCell>
                  <TableCell>{v.registrationExpiry}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* ADD VEHICLE MODAL */}
      {isAddVehicleOpen && (
         <Dialog>
           <DialogContent onClose={() => setIsAddVehicleOpen(false)}>
             <DialogHeader><DialogTitle>Thêm Phương Tiện Mới</DialogTitle></DialogHeader>
             <div className="grid gap-4 py-4">
               <div className="grid grid-cols-2 gap-4">
                  <div className="grid gap-2">
                    <label className="text-sm font-medium">Biển Số Xe</label>
                    <Input value={newId} onChange={(e) => setNewId(e.target.value)} placeholder="VD: 29C-123.45" />
                  </div>
                  <div className="grid gap-2">
                    <label className="text-sm font-medium">Tải Trọng</label>
                    <Input value={newCapacity} onChange={(e) => setNewCapacity(e.target.value)} placeholder="VD: 30 Tấn" />
                  </div>
               </div>
               <div className="grid gap-2">
                 <label className="text-sm font-medium">Định Mức Dầu Kế Hoạch</label>
                 <Input value={newFuelNorm} onChange={(e) => setNewFuelNorm(e.target.value)} placeholder="VD: 35L / 100km" />
               </div>
               <div className="grid grid-cols-2 gap-4">
                 <div className="grid gap-2">
                   <label className="text-sm font-medium">Ngày Đăng Kiểm Gần Nhất</label>
                   <Input value={newRegistrationExpiry} onChange={(e) => setNewRegistrationExpiry(e.target.value)} type="date" />
                 </div>
                 <div className="grid gap-2">
                   <label className="text-sm font-medium">Hạn Chót Bảo Hiểm</label>
                   <Input value={newNextMaintenance} onChange={(e) => setNewNextMaintenance(e.target.value)} type="date" />
                 </div>
               </div>
             </div>
             <DialogFooter>
               <Button variant="outline" onClick={() => setIsAddVehicleOpen(false)}>Hủy</Button>
               <Button onClick={handleCreateVehicle}>Lưu Phương Tiện</Button>
             </DialogFooter>
           </DialogContent>
         </Dialog>
      )}
    </div>
  )
}
