"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog"
import { Plus, Mail, Phone, MapPin, Building2, MoreHorizontal } from "lucide-react"
import { EmptyState } from "@/components/ui/empty-state"
import Link from "next/link"

export default function CustomersPage() {
  const [isAddCustomerOpen, setIsAddCustomerOpen] = useState(false);

  const [customers, setCustomers] = useState([
    { id: "CUST-001", name: "Công ty VLXD Số 1", type: "Doanh nghiệp", contact: "Nguyễn Hải Y", phone: "0901.111.222", totalTrips: 45, balance: "25,000,000", limit: "100,000,000", status: "active" },
    { id: "CUST-002", name: "Nhà máy Nhựa Chợ Lớn", type: "Doanh nghiệp", contact: "Trần Văn Z", phone: "0988.333.444", totalTrips: 128, balance: "150,000,000", limit: "100,000,000", status: "warning" },
    { id: "CUST-003", name: "Tập Đoàn Đầu Tư Hòa Phát", type: "Tập đoàn", contact: "Lê Minh Tuấn", phone: "0912.456.789", totalTrips: 450, balance: "0", limit: "5,000,000,000", status: "active" },
    { id: "CUST-004", name: "Siêu thị Co.opmart", type: "Chuỗi bán lẻ", contact: "Phạm Thu Hà", phone: "0934.567.890", totalTrips: 82, balance: "45,500,000", limit: "200,000,000", status: "active" },
    { id: "CUST-005", name: "Cảng Cát Lái", type: "Cơ quan cảng", contact: "Đinh Quang Trí", phone: "0977.123.456", totalTrips: 215, balance: "320,000,000", limit: "500,000,000", status: "active" },
    { id: "CUST-006", name: "Công ty Phân bón Cà Mau", type: "Doanh nghiệp", contact: "Lý Thị Trinh", phone: "0989.999.888", totalTrips: 12, balance: "80,000,000", limit: "50,000,000", status: "warning" },
    { id: "CUST-007", name: "Kho Lạnh Hoàng Việt", type: "Kho bãi", contact: "Vũ Đình Kiên", phone: "0902.334.455", totalTrips: 67, balance: "5,000,000", limit: "150,000,000", status: "active" }
  ]);

  const [newName, setNewName] = useState("");
  const [newTaxCode, setNewTaxCode] = useState("");
  const [newLimit, setNewLimit] = useState("");
  const [newContact, setNewContact] = useState("");
  const [newPhone, setNewPhone] = useState("");
  const [newAddress, setNewAddress] = useState("");

  const handleCreateCustomer = () => {
    if (!newName) return;

    const limitStr = newLimit ? Number(newLimit).toLocaleString('en-US') : "0";

    const newCustomer = {
      id: `CUST-00${customers.length + 1}`,
      name: newName,
      type: "Doanh nghiệp", // Defaulting for simplicity
      contact: newContact || "Chưa có",
      phone: newPhone || "Chưa có",
      totalTrips: 0,
      balance: "0",
      limit: limitStr,
      status: "active"
    };

    setCustomers([newCustomer, ...customers]);
    setIsAddCustomerOpen(false);
    setNewName("");
    setNewTaxCode("");
    setNewLimit("");
    setNewContact("");
    setNewPhone("");
    setNewAddress("");
  }

  const getStatusBadge = (status: string) => {
    switch(status) {
      case 'active': return <Badge variant="success">Hoạt động</Badge>
      case 'warning': return <Badge variant="destructive">Vượt quá công nợ</Badge>
      default: return <Badge variant="outline">{status}</Badge>
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Khách Hàng (CRM)</h2>
          <p className="text-slate-500">Quản lý đối tác, thông tin liên lạc và cảnh báo công nợ.</p>
        </div>
        <Button onClick={() => setIsAddCustomerOpen(true)}>
          <Plus className="mr-2 h-4 w-4" /> Thêm khách hàng
        </Button>
      </div>

       <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Danh bạ Khách hàng</CardTitle>
            <Input placeholder="Tìm tên, MST, SĐT..." className="w-64" />
          </div>
        </CardHeader>
        <CardContent>
          {customers.length === 0 ? (
            <EmptyState 
              title="Chưa có khách hàng nào"
              description="Hệ thống chưa ghi nhận dữ liệu đối tác. Hãy bấm thêm mới để tạo hồ sơ khách hàng đầu tiên trong CRM."
              actionLabel="Tạo khách hàng mới"
              onAction={() => setIsAddCustomerOpen(true)}
            />
          ) : (
            <Table>
              <TableHeader><TableRow><TableHead>Mã KH</TableHead><TableHead>Tên Khách Hàng</TableHead><TableHead>Liên hệ</TableHead><TableHead className="text-right">Dư nợ hiện tại</TableHead><TableHead>Trạng thái</TableHead></TableRow></TableHeader>
              <TableBody>
                {customers.map((cust) => (
                  <TableRow key={cust.id}>
                    <TableCell className="font-medium"><Link href={`/customers/${cust.id}`} className="text-blue-600 hover:underline">{cust.id}</Link></TableCell>
                    <TableCell><div className="font-semibold flex items-center gap-2"><Building2 className="w-4 h-4 text-slate-400"/> {cust.name}</div><div className="text-xs text-slate-500">{cust.type} • Tổng chuyến: {cust.totalTrips}</div></TableCell>
                    <TableCell><div className="flex flex-col gap-1 text-sm"><div className="flex items-center gap-1.5"><UserCircleIcon className="w-3.5 h-3.5"/> {cust.contact}</div><div className="flex items-center gap-1.5"><Phone className="w-3.5 h-3.5"/> {cust.phone}</div></div></TableCell>
                    <TableCell className="text-right font-medium text-red-600 dark:text-red-400"><div className="tabular-nums space-x-1"><span>{cust.balance}</span> <span className="text-slate-500 text-xs font-normal">/ {cust.limit} vnđ</span></div></TableCell>
                    <TableCell>{getStatusBadge(cust.status)}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          )}
        </CardContent>
      </Card>

      {/* ADD CUSTOMER MODAL */}
      {isAddCustomerOpen && (
         <Dialog>
           <DialogContent onClose={() => setIsAddCustomerOpen(false)}>
             <DialogHeader><DialogTitle>Tạo Khách Hàng Mới</DialogTitle></DialogHeader>
             <div className="grid gap-4 py-4">
               <div className="grid gap-2">
                 <label className="text-sm font-medium">Tên Doanh Nghiệp / Cửa hàng</label>
                 <Input value={newName} onChange={(e) => setNewName(e.target.value)} placeholder="Công ty TNHH Vận Tải ABC" />
               </div>
               <div className="grid grid-cols-2 gap-4">
                  <div className="grid gap-2">
                    <label className="text-sm font-medium">Mã Số Thuế</label>
                    <Input value={newTaxCode} onChange={(e) => setNewTaxCode(e.target.value)} placeholder="0101XXXXXX" />
                  </div>
                  <div className="grid gap-2">
                    <label className="text-sm font-medium">Cấp Hạn Mức Công Nợ</label>
                    <Input value={newLimit} onChange={(e) => setNewLimit(e.target.value)} placeholder="500000000" type="number" />
                  </div>
               </div>
               <div className="grid grid-cols-2 gap-4">
                  <div className="grid gap-2">
                    <label className="text-sm font-medium">Người Liên Hệ Nhanh</label>
                    <Input value={newContact} onChange={(e) => setNewContact(e.target.value)} placeholder="Anh X, Chị Y" />
                  </div>
                  <div className="grid gap-2">
                    <label className="text-sm font-medium">SĐT Cán Bộ Điều Phối KH</label>
                    <Input value={newPhone} onChange={(e) => setNewPhone(e.target.value)} placeholder="09xxxxxxx" />
                  </div>
               </div>
               <div className="grid gap-2">
                 <label className="text-sm font-medium">Địa Chỉ Lấy Hóa Đơn</label>
                 <Input value={newAddress} onChange={(e) => setNewAddress(e.target.value)} placeholder="Số 1, Đường 2, Phường 3..." />
               </div>
             </div>
             <DialogFooter>
               <Button variant="outline" onClick={() => setIsAddCustomerOpen(false)}>Hủy</Button>
               <Button onClick={handleCreateCustomer}>Lưu Hồ Sơ</Button>
             </DialogFooter>
           </DialogContent>
         </Dialog>
      )}
    </div>
  )
}

function UserCircleIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="10" r="3" />
      <path d="M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662" />
    </svg>
  )
}
