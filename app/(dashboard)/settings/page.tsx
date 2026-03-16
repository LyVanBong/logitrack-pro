"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Switch } from "@/components/ui/switch"
import { ShieldCheck, Users, Bell, UserPlus, Key, Settings as SettingsIcon } from "lucide-react"

export default function SettingsPage() {
  const [isAddUserOpen, setIsAddUserOpen] = useState(false);
  const [users, setUsers] = useState([
    { id: "U001", name: "Nguyễn Văn Giám Đốc", email: "director@logitrack.com", role: "Admin", status: "Active" },
    { id: "U002", name: "Trần Thị Kế Toán", email: "accountant@logitrack.com", role: "Kế toán", status: "Active" },
    { id: "U003", name: "Lê Văn Điều Vận", email: "dispatcher@logitrack.com", role: "Điều vận", status: "Active" },
    { id: "U004", name: "Phạm Kho", email: "inventory@logitrack.com", role: "Thủ kho", status: "Inactive" },
  ]);

  const [newName, setNewName] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [newRole, setNewRole] = useState("Điều vận");
  
  const [isSavingUser, setIsSavingUser] = useState(false);
  const [isSavingConfig, setIsSavingConfig] = useState(false);

  const [notifications, setNotifications] = useState({
    expense: true,
    debt: true,
    maintenance: false,
    bank: true
  });

  const handleAddUser = () => {
    if (!newName || !newEmail) return;
    setIsSavingUser(true);
    
    setTimeout(() => {
      const newUser = {
        id: `U00${users.length + 1}`,
        name: newName,
        email: newEmail,
        role: newRole,
        status: "Active"
      };
      setUsers([...users, newUser]);
      setIsSavingUser(false);
      setIsAddUserOpen(false);
      setNewName("");
      setNewEmail("");
    }, 600);
  }

  const handleSaveConfig = () => {
    setIsSavingConfig(true);
    setTimeout(() => {
      setIsSavingConfig(false);
    }, 800);
  }

  const toggleNotif = (key: keyof typeof notifications) => {
    setNotifications(prev => ({ ...prev, [key]: !prev[key] }));
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Cài đặt Hệ thống</h2>
        <p className="text-slate-500">Quản lý tài khoản, phân quyền và cấu hình thông báo.</p>
      </div>

      <Tabs defaultValue="users" className="space-y-4">
        <TabsList>
          <TabsTrigger value="users" className="flex items-center gap-2"><Users className="w-4 h-4"/> Quản lý Người dùng</TabsTrigger>
          <TabsTrigger value="roles" className="flex items-center gap-2"><ShieldCheck className="w-4 h-4"/> Phân quyền (RBAC)</TabsTrigger>
          <TabsTrigger value="notifications" className="flex items-center gap-2"><Bell className="w-4 h-4"/> Thông báo & Cảnh báo</TabsTrigger>
        </TabsList>

        <TabsContent value="users" className="space-y-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>Danh sách Tài khoản</CardTitle>
                <CardDescription>Các tài khoản được phép truy cập vào hệ thống WebApp.</CardDescription>
              </div>
              <Button onClick={() => setIsAddUserOpen(true)}>
                <UserPlus className="w-4 h-4 mr-2" /> Thêm Tài Khoản
              </Button>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow><TableHead>Mã NV</TableHead><TableHead>Họ Tên</TableHead><TableHead>Email</TableHead><TableHead>Vai trò</TableHead><TableHead>Trạng thái</TableHead><TableHead></TableHead></TableRow>
                </TableHeader>
                <TableBody>
                  {users.map(user => (
                    <TableRow key={user.id}>
                      <TableCell className="font-medium text-slate-500">{user.id}</TableCell>
                      <TableCell className="font-semibold">{user.name}</TableCell>
                      <TableCell>{user.email}</TableCell>
                      <TableCell>
                        <Badge variant="outline" className={
                          user.role === 'Admin' ? 'border-purple-200 text-purple-700 bg-purple-50' : 
                          user.role === 'Kế toán' ? 'border-emerald-200 text-emerald-700 bg-emerald-50' :
                          user.role === 'Điều vận' ? 'border-blue-200 text-blue-700 bg-blue-50' : 'border-slate-200 text-slate-700 bg-slate-50'
                        }>{user.role}</Badge>
                      </TableCell>
                      <TableCell>{user.status === 'Active' ? <Badge variant="success">Hoạt động</Badge> : <Badge variant="secondary">Đã khóa</Badge>}</TableCell>
                      <TableCell className="text-right">
                        <Button variant="ghost" size="sm" className="text-slate-500 hover:text-blue-600"><SettingsIcon className="w-4 h-4" /></Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="roles" className="space-y-4">
           <Card>
            <CardHeader>
              <CardTitle>Ma trận Phân Quyền</CardTitle>
              <CardDescription>Thiết lập quyền truy cập cho từng vai trò.</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                     <TableHead className="w-[300px]">Phân hệ / Chức năng</TableHead>
                     <TableHead className="text-center font-bold text-purple-700">Admin</TableHead>
                     <TableHead className="text-center font-bold text-emerald-700">Kế toán</TableHead>
                     <TableHead className="text-center font-bold text-blue-700">Điều vận</TableHead>
                     <TableHead className="text-center font-bold text-slate-700">Thủ kho</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">Xem Dashboard Tổng quan</TableCell>
                    <TableCell className="text-center"><ShieldCheck className="w-5 h-5 mx-auto text-emerald-500"/></TableCell>
                    <TableCell className="text-center text-slate-300">-</TableCell>
                    <TableCell className="text-center text-slate-300">-</TableCell>
                    <TableCell className="text-center text-slate-300">-</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Quản lý Tài chính, Công nợ</TableCell>
                    <TableCell className="text-center"><ShieldCheck className="w-5 h-5 mx-auto text-emerald-500"/></TableCell>
                    <TableCell className="text-center"><ShieldCheck className="w-5 h-5 mx-auto text-emerald-500"/></TableCell>
                    <TableCell className="text-center text-slate-300">-</TableCell>
                    <TableCell className="text-center text-slate-300">-</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Tạo / Sửa Chuyến Đi (Dispatch)</TableCell>
                    <TableCell className="text-center"><ShieldCheck className="w-5 h-5 mx-auto text-emerald-500"/></TableCell>
                    <TableCell className="text-center text-slate-300">-</TableCell>
                    <TableCell className="text-center"><ShieldCheck className="w-5 h-5 mx-auto text-emerald-500"/></TableCell>
                    <TableCell className="text-center text-slate-300">-</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Nhập/Xuất Kho Vật Tư</TableCell>
                    <TableCell className="text-center"><ShieldCheck className="w-5 h-5 mx-auto text-emerald-500"/></TableCell>
                    <TableCell className="text-center"><ShieldCheck className="w-5 h-5 mx-auto text-emerald-500"/></TableCell>
                    <TableCell className="text-center text-slate-300">-</TableCell>
                    <TableCell className="text-center"><ShieldCheck className="w-5 h-5 mx-auto text-emerald-500"/></TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="notifications" className="space-y-4">
          <Card className="max-w-2xl">
            <CardHeader>
              <CardTitle>Cấu hình Gửi Cảnh báo</CardTitle>
              <CardDescription>Hệ thống sẽ gửi tin nhắn qua Zalo/Telegram khi có sự kiện.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between space-x-2">
                <div className="flex flex-col gap-1">
                  <label className="text-sm font-medium leading-none">Chi phí vượt định mức</label>
                  <p className="text-sm text-slate-500">Gửi thông báo khi chi phí chuyến đi cao hơn 10% so với định mức.</p>
                </div>
                <Switch checked={notifications.expense} onCheckedChange={() => toggleNotif('expense')} />
              </div>
              <div className="flex items-center justify-between space-x-2">
                <div className="flex flex-col gap-1">
                  <label className="text-sm font-medium leading-none">Cảnh báo Công nợ</label>
                  <p className="text-sm text-slate-500">Thông báo khi khách hàng nợ quá hạn hoặc vượt hạn mức cho phép.</p>
                </div>
                <Switch checked={notifications.debt} onCheckedChange={() => toggleNotif('debt')} />
              </div>
              <div className="flex items-center justify-between space-x-2">
                <div className="flex flex-col gap-1">
                  <label className="text-sm font-medium leading-none">Nhắc lịch Bảo dưỡng / Đăng kiểm</label>
                  <p className="text-sm text-slate-500">Gửi nhắc nhở trước 15 ngày đối với xe hết hạn giấy tờ.</p>
                </div>
                <Switch checked={notifications.maintenance} onCheckedChange={() => toggleNotif('maintenance')} />
              </div>
              <div className="flex items-center justify-between space-x-2">
                <div className="flex flex-col gap-1">
                  <label className="text-sm font-medium leading-none">Nhắc nợ Ngân hàng</label>
                  <p className="text-sm text-slate-500">Nhắc lịch trả gốc/lãi vay ngân hàng hàng tháng.</p>
                </div>
                <Switch checked={notifications.bank} onCheckedChange={() => toggleNotif('bank')} />
              </div>

              <div className="pt-4 border-t border-slate-200 dark:border-slate-800">
                 <div className="grid gap-2">
                   <label className="text-sm font-medium">Telegram Bot Token</label>
                   <div className="flex gap-2">
                      <Input type="password" defaultValue="123456789:ABCDEFGHIJKLMNOPQRSTUVWXYZ" />
                      <Button variant="secondary">Kiểm tra kết nối</Button>
                   </div>
                 </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button onClick={handleSaveConfig} disabled={isSavingConfig}>
                {isSavingConfig ? "Đang lưu..." : "Lưu Cấu Hình"}
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>

      {isAddUserOpen && (
         <Dialog>
           <DialogContent onClose={() => setIsAddUserOpen(false)}>
             <DialogHeader><DialogTitle>Thêm Tài Khoản Mới</DialogTitle></DialogHeader>
             <div className="grid gap-4 py-4">
               <div className="grid gap-2">
                 <label className="text-sm font-medium">Họ và Tên</label>
                 <Input value={newName} onChange={(e) => setNewName(e.target.value)} placeholder="Nhập tên nhân viên..." />
               </div>
               <div className="grid gap-2">
                 <label className="text-sm font-medium">Email / Tên đăng nhập</label>
                 <Input value={newEmail} onChange={(e) => setNewEmail(e.target.value)} type="email" placeholder="email@company.com" />
               </div>
               <div className="grid gap-2">
                 <label className="text-sm font-medium">Vai trò</label>
                 <select 
                   value={newRole} onChange={(e) => setNewRole(e.target.value)}
                   className="flex h-10 w-full rounded-md border border-slate-200 bg-transparent px-3 py-2 text-sm dark:border-slate-800"
                 >
                    <option value="Điều vận">Điều vận</option>
                    <option value="Kế toán">Kế toán</option>
                    <option value="Thủ kho">Thủ kho</option>
                    <option value="Admin">Admin (Quản trị viên)</option>
                 </select>
               </div>
               <div className="grid gap-2">
                 <label className="text-sm font-medium">Mật khẩu khởi tạo</label>
                 <Input type="password" value="123456" disabled />
                 <p className="text-xs text-slate-500">Mật khẩu mặc định là 123456. Người dùng sẽ đổi khi đăng nhập lần đầu.</p>
               </div>
             </div>
             <DialogFooter>
               <Button variant="outline" onClick={() => setIsAddUserOpen(false)} disabled={isSavingUser}>Hủy</Button>
               <Button onClick={handleAddUser} disabled={isSavingUser}>
                 {isSavingUser ? "Đang tạo..." : "Tạo Tài Khoản"}
               </Button>
             </DialogFooter>
           </DialogContent>
         </Dialog>
      )}

    </div>
  )
}
