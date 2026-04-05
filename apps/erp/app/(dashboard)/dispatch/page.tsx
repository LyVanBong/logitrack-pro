"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { 
  Table, TableBody, TableCell, TableHead, TableHeader, TableRow 
} from "@/components/ui/table"
import { 
  Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter 
} from "@/components/ui/dialog"
import { Search, Plus, MapPin, Truck, User, Calendar, MoreHorizontal } from "lucide-react"

export default function DispatchPage() {
  const [isCreateTripOpen, setIsCreateTripOpen] = useState(false);
  const [isAssignOpen, setIsAssignOpen] = useState(false);
  const [selectedTrip, setSelectedTrip] = useState<string | null>(null);

  const [trips, setTrips] = useState([
    { id: "TRIP-20260317-01", customer: "Công ty VLXD Số 1", route: "Hà Nội → Hải Phòng", vehicle: "29C-123.45", driver: "Lưu Văn A", status: "in-progress", startTime: "17/03 08:00", type: "Thép cuộn" },
    { id: "TRIP-20260317-02", customer: "Nhà máy Nhựa Chợ Lớn", route: "Hải Phòng → Nam Định", vehicle: "15C-678.90", driver: "Trần Kim B", status: "loading", startTime: "17/03 10:30", type: "Hạt nhựa" },
    { id: "TRIP-20260317-03", customer: "Tập Đoàn Hòa Phát", route: "Hà Nội → Bắc Ninh", vehicle: "---", driver: "---", status: "pending", startTime: "Chờ điều xe", type: "Thép xây dựng" },
    { id: "TRIP-20260317-04", customer: "Siêu thị Co.opmart", route: "Kho Tổng HCM → Q.1", vehicle: "51D-456.78", driver: "Lê Ngọc C", status: "in-progress", startTime: "17/03 06:15", type: "Hàng tiêu dùng Lạnh" },
    { id: "TRIP-20260317-05", customer: "Cảng Cát Lái", route: "Đồng Nai → Cảng Cát Lái", vehicle: "60C-234.56", driver: "Phạm Văn D", status: "completed", startTime: "16/03 22:00", type: "Container Xuất khẩu" },
    { id: "TRIP-20260317-06", customer: "Kho Lạnh Hoàng Việt", route: "Cần Thơ → Tiền Giang", vehicle: "29H-999.99", driver: "Đỗ Thái E", status: "loading", startTime: "17/03 11:45", type: "Hải sản đông lạnh" },
    { id: "TRIP-20260317-07", customer: "Công ty Phân bón Cà Mau", route: "Sóc Trăng → Bạc Liêu", vehicle: "---", driver: "---", status: "pending", startTime: "Chờ điều xe", type: "Phân bón NPK" },
    { id: "TRIP-20260317-08", customer: "Công ty Tôn Hoa Sen", route: "Bình Dương → Vũng Tàu", vehicle: "72C-111.22", driver: "Trần Thế F", status: "completed", startTime: "17/03 05:00", type: "Tôn lạnh" },
  ]);

  // Form states for Create Trip
  const [newTripCustomer, setNewTripCustomer] = useState("Công ty VLXD Số 1");
  const [newTripStart, setNewTripStart] = useState("");
  const [newTripEnd, setNewTripEnd] = useState("");
  const [newTripType, setNewTripType] = useState("");

  // Form states for Assign
  const [assignVehicle, setAssignVehicle] = useState("15C-678.90");
  const [assignDriver, setAssignDriver] = useState("Lê Ngọc C");

  const getStatusBadge = (status: string) => {
    switch(status) {
      case 'in-progress': return <Badge variant="info">Đang di chuyển</Badge>
      case 'loading': return <Badge variant="warning">Đang bốc hàng</Badge>
      case 'completed': return <Badge variant="success">Hoàn thành</Badge>
      case 'pending': return <Badge variant="secondary">Chờ điều xe</Badge>
      default: return <Badge variant="outline">{status}</Badge>
    }
  }

  const handleAssignClick = (tripId: string) => {
    setSelectedTrip(tripId);
    setIsAssignOpen(true);
  }

  const handleCreateTrip = () => {
    if (!newTripStart || !newTripEnd || !newTripType) return;
    
    const newTrip = {
      id: `TRIP-20260317-0${trips.length + 1}`,
      customer: newTripCustomer,
      route: `${newTripStart} → ${newTripEnd}`,
      vehicle: "---",
      driver: "---",
      status: "pending",
      startTime: "Chờ điều xe",
      type: newTripType
    };

    setTrips([newTrip, ...trips]);
    setIsCreateTripOpen(false);
    setNewTripStart("");
    setNewTripEnd("");
    setNewTripType("");
  }

  const handleAssignSubmit = () => {
    if (!selectedTrip) return;
    
    setTrips(trips.map(trip => 
      trip.id === selectedTrip 
        ? { ...trip, vehicle: assignVehicle, driver: assignDriver, status: "loading", startTime: "Vừa gán xe" } 
        : trip
    ));
    
    setIsAssignOpen(false);
    setSelectedTrip(null);
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Lệnh Điều Phối (Dispatch)</h2>
          <p className="text-slate-500 dark:text-slate-400">Quản lý và theo dõi các chuyến hàng trong ngày.</p>
        </div>
        <div className="flex items-center gap-2">
           <Button onClick={() => setIsCreateTripOpen(true)}>
             <Plus className="mr-2 h-4 w-4" /> Tạo Trip mới
           </Button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-4">
        <Card className="col-span-1 border-l-4 border-l-slate-300"><CardHeader className="py-4"><CardTitle className="text-sm font-medium">Chờ Điều Xe</CardTitle><div className="text-2xl font-bold">{trips.filter(t => t.status === 'pending').length}</div></CardHeader></Card>
        <Card className="col-span-1 border-l-4 border-l-yellow-500"><CardHeader className="py-4"><CardTitle className="text-sm font-medium">Đang Bốc Hàng</CardTitle><div className="text-2xl font-bold">{trips.filter(t => t.status === 'loading').length}</div></CardHeader></Card>
        <Card className="col-span-1 border-l-4 border-l-blue-500"><CardHeader className="py-4"><CardTitle className="text-sm font-medium">Đang Di Chuyển</CardTitle><div className="text-2xl font-bold">{trips.filter(t => t.status === 'in-progress').length}</div></CardHeader></Card>
        <Card className="col-span-1 border-l-4 border-l-green-500"><CardHeader className="py-4"><CardTitle className="text-sm font-medium">Đã Giao Hôm Nay</CardTitle><div className="text-2xl font-bold text-green-600">8</div></CardHeader></Card>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Danh sách chuyến hàng (Trips)</CardTitle>
            <div className="flex gap-2">
               <Input placeholder="Tìm kiếm..." className="w-64" />
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader><TableRow><TableHead>Mã Chuyến</TableHead><TableHead>Khách hàng & Hàng hóa</TableHead><TableHead>Tuyến đường</TableHead><TableHead>Xe & Lái xe</TableHead><TableHead>Trạng thái</TableHead><TableHead className="text-right">Hành động</TableHead></TableRow></TableHeader>
            <TableBody>
              {trips.map((trip) => (
                <TableRow key={trip.id}>
                  <TableCell className="font-medium"><div className="flex flex-col"><span>{trip.id}</span></div></TableCell>
                  <TableCell><div className="font-semibold">{trip.customer}</div><div className="text-xs text-slate-500 mt-1">Loại: {trip.type}</div></TableCell>
                  <TableCell><div className="flex items-center gap-2"><MapPin className="h-4 w-4 text-slate-400 shrink-0"/><span className="text-sm">{trip.route}</span></div></TableCell>
                  <TableCell>
                    {trip.vehicle === "---" ? (
                      <Button variant="outline" size="sm" className="h-7 text-xs border-dashed text-primary" onClick={() => handleAssignClick(trip.id)}>
                        + Gán Xe & Tài xế
                      </Button>
                    ) : (
                      <div className="flex flex-col gap-1">
                        <div className="flex items-center gap-1.5 text-sm font-medium"><Truck className="h-3.5 w-3.5 text-slate-500" /> {trip.vehicle}</div>
                        <div className="flex items-center gap-1.5 text-xs text-slate-500"><User className="h-3.5 w-3.5" /> {trip.driver}</div>
                      </div>
                    )}
                  </TableCell>
                  <TableCell>{getStatusBadge(trip.status)}</TableCell>
                  <TableCell className="text-right"><Button variant="ghost" size="icon"><MoreHorizontal className="h-4 w-4" /></Button></TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* MODALS */}
      {isCreateTripOpen && (
         <Dialog>
           <DialogContent onClose={() => setIsCreateTripOpen(false)}>
             <DialogHeader><DialogTitle>Tạo Lệnh Điều Phối Mới</DialogTitle></DialogHeader>
             <div className="grid gap-4 py-4">
               <div className="grid gap-2">
                 <label className="text-sm font-medium">Khách hàng</label>
                 <select 
                    value={newTripCustomer} 
                    onChange={(e) => setNewTripCustomer(e.target.value)}
                    className="flex h-10 w-full rounded-md border border-slate-200 bg-transparent px-3 py-2 text-sm dark:border-slate-800"
                 >
                    <option value="Công ty VLXD Số 1">Công ty VLXD Số 1</option>
                    <option value="Nhà máy Nhựa Chợ Lớn">Nhà máy Nhựa Chợ Lớn</option>
                    <option value="Tập Đoàn Hòa Phát">Tập Đoàn Hòa Phát</option>
                 </select>
               </div>
               <div className="grid grid-cols-2 gap-4">
                 <div className="grid gap-2">
                   <label className="text-sm font-medium">Điểm nhận hàng</label>
                   <Input value={newTripStart} onChange={(e) => setNewTripStart(e.target.value)} placeholder="Ví dụ: Kho Hà Nội" />
                 </div>
                 <div className="grid gap-2">
                   <label className="text-sm font-medium">Điểm trả hàng</label>
                   <Input value={newTripEnd} onChange={(e) => setNewTripEnd(e.target.value)} placeholder="Ví dụ: Cảng Hải Phòng" />
                 </div>
               </div>
               <div className="grid gap-2">
                 <label className="text-sm font-medium">Loại hàng hóa & Khối lượng</label>
                 <Input value={newTripType} onChange={(e) => setNewTripType(e.target.value)} placeholder="Ví dụ: Thép cuộn - 30 Tấn" />
               </div>
             </div>
             <DialogFooter>
               <Button variant="outline" onClick={() => setIsCreateTripOpen(false)}>Hủy</Button>
               <Button onClick={handleCreateTrip}>Lưu Lệnh</Button>
             </DialogFooter>
           </DialogContent>
         </Dialog>
      )}

      {isAssignOpen && (
         <Dialog>
           <DialogContent onClose={() => setIsAssignOpen(false)}>
             <DialogHeader><DialogTitle>Gán Xe & Lái Xe</DialogTitle></DialogHeader>
             <div className="grid gap-4 py-4">
               <div className="text-sm text-slate-500">Đang điều phối cho lệnh: <strong className="text-slate-900 dark:text-white">{selectedTrip}</strong></div>
               <div className="grid gap-2">
                 <label className="text-sm font-medium">Chọn Xe rảnh (Idle)</label>
                 <select 
                    value={assignVehicle}
                    onChange={(e) => setAssignVehicle(e.target.value)}
                    className="flex h-10 w-full rounded-md border border-slate-200 bg-transparent px-3 py-2 text-sm dark:border-slate-800"
                 >
                    <option value="15C-678.90">15C-678.90 (Trống - Hải Phòng)</option>
                    <option value="60C-234.56">60C-234.56 (Trống - KCN Sóng Thần)</option>
                    <option value="29H-999.99">29H-999.99 (Trống - Hà Nội)</option>
                 </select>
               </div>
               <div className="grid gap-2">
                 <label className="text-sm font-medium">Chọn Lái Xe rảnh</label>
                 <select 
                    value={assignDriver}
                    onChange={(e) => setAssignDriver(e.target.value)}
                    className="flex h-10 w-full rounded-md border border-slate-200 bg-transparent px-3 py-2 text-sm dark:border-slate-800"
                 >
                    <option value="Lê Ngọc C">Lê Ngọc C (Đang nghỉ)</option>
                    <option value="Nguyễn Văn D">Nguyễn Văn D (Đang đợi chuyến)</option>
                    <option value="Phạm Thái E">Phạm Thái E (Vừa giao xong)</option>
                 </select>
               </div>
             </div>
             <DialogFooter>
               <Button variant="outline" onClick={() => setIsAssignOpen(false)}>Hủy</Button>
               <Button onClick={handleAssignSubmit}>Xác nhận Gán & Gửi SMS</Button>
             </DialogFooter>
           </DialogContent>
         </Dialog>
      )}
    </div>
  )
}
