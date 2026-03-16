"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { UserCircle, ShieldCheck, Mail, Phone, MapPin, KeyRound, Save } from "lucide-react"

export default function ProfilePage() {
  const [isEditing, setIsEditing] = useState(false)
  
  const [profile, setProfile] = useState({
    id: "U001",
    name: "Nguyễn Quản Trị",
    role: "Administrator",
    department: "Ban Giám Đốc",
    email: "admin@logitrack.com",
    phone: "0901.234.567",
    address: "Tòa nhà AB, Quận 1, TPHCM",
    joinDate: "01/01/2024",
    status: "Active",
    img: "https://i.pravatar.cc/250?img=11"
  })

  useEffect(() => {
    const role = localStorage.getItem('userRole');
    if (role === 'accountant') {
      setProfile(prev => ({
        ...prev,
        id: "KT042",
        name: "Trần Kế Toán",
        role: "Kế toán trưởng",
        department: "Phòng Kế toán",
        email: "ketoan@logitrack.com",
        img: "https://i.pravatar.cc/250?img=5"
      }));
    } else if (role === 'dispatcher') {
      setProfile(prev => ({
        ...prev,
        id: "DV088",
        name: "Lê Điều Vận",
        role: "Trưởng nhóm Điều vận",
        department: "Phòng Điều vận",
        email: "dieuvan@logitrack.com",
        img: "https://i.pravatar.cc/250?img=8"
      }));
    }
  }, []);

  const [editForm, setEditForm] = useState(profile)

  useEffect(() => {
    setEditForm(profile)
  }, [profile])

  const handleSave = () => {
    setProfile(editForm)
    setIsEditing(false)
  }

  return (
    <div className="space-y-6 max-w-5xl mx-auto">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Thông tin Cá nhân</h2>
        <p className="text-slate-500">Quản lý hồ sơ, bảo mật và các thiết lập tài khoản của bạn.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Left Column - Profile Card */}
        <div className="md:col-span-1 space-y-6">
          <Card className="overflow-hidden">
            <div className="h-24 bg-gradient-to-r from-primary/80 to-primary"></div>
            <CardContent className="relative pt-0 px-6 pb-6 text-center">
              <div className="w-24 h-24 mx-auto -mt-12 mb-4 rounded-full border-4 border-white dark:border-slate-900 bg-white dark:bg-slate-800 overflow-hidden shadow-lg">
                <img src={profile.img} alt="Profile" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-xl font-bold">{profile.name}</h3>
              <p className="text-sm text-slate-500 mb-4">{profile.department}</p>
              
              <div className="flex justify-center mb-6">
                <Badge variant="outline" className="border-purple-200 text-purple-700 bg-purple-50 dark:bg-purple-900/30 dark:text-purple-400 dark:border-purple-800 flex items-center gap-1.5 px-3 py-1">
                  <ShieldCheck size={14} /> {profile.role}
                </Badge>
              </div>

              <div className="space-y-3 text-sm text-left border-t border-slate-100 dark:border-slate-800 pt-6">
                <div className="flex items-center gap-3 text-slate-600 dark:text-slate-400">
                  <Mail size={16} /> <span>{profile.email}</span>
                </div>
                <div className="flex items-center gap-3 text-slate-600 dark:text-slate-400">
                  <Phone size={16} /> <span>{profile.phone}</span>
                </div>
                <div className="flex items-center gap-3 text-slate-600 dark:text-slate-400">
                  <MapPin size={16} /> <span>{profile.address}</span>
                </div>
                <div className="flex items-center gap-3 text-slate-600 dark:text-slate-400">
                  <UserCircle size={16} /> <span>Ngày tham gia: {profile.joinDate}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Right Column - Forms */}
        <div className="md:col-span-2 space-y-6">
          <Card>
            <CardHeader className="flex flex-row flex-wrap items-center justify-between">
              <div>
                <CardTitle>Chi tiết Hồ sơ</CardTitle>
                <CardDescription>Cập nhật thông tin liên lạc của bạn.</CardDescription>
              </div>
              {!isEditing ? (
                <Button variant="outline" onClick={() => setIsEditing(true)}>Chỉnh sửa thông tin</Button>
              ) : (
                <div className="flex gap-2">
                  <Button variant="ghost" onClick={() => { setIsEditing(false); setEditForm(profile); }}>Hủy</Button>
                  <Button onClick={handleSave} className="gap-2"><Save size={16} /> Lưu thay đổi</Button>
                </div>
              )}
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label>Mã Nhân Viên</Label>
                  <Input value={profile.id} disabled className="bg-slate-50 dark:bg-slate-900" />
                </div>
                <div className="space-y-2">
                  <Label>Họ và Tên</Label>
                  <Input 
                    value={editForm.name} 
                    disabled={!isEditing} 
                    onChange={e => setEditForm({...editForm, name: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <Label>Số Điện Thoại</Label>
                  <Input 
                    value={editForm.phone} 
                    disabled={!isEditing} 
                    onChange={e => setEditForm({...editForm, phone: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <Label>Email</Label>
                  <Input 
                    value={editForm.email} 
                    disabled={!isEditing} 
                    onChange={e => setEditForm({...editForm, email: e.target.value})}
                  />
                </div>
                <div className="space-y-2 sm:col-span-2">
                  <Label>Địa chỉ hiện tại</Label>
                  <Input 
                    value={editForm.address} 
                    disabled={!isEditing} 
                    onChange={e => setEditForm({...editForm, address: e.target.value})}
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2"><KeyRound size={20} className="text-slate-500" /> Đổi mật khẩu</CardTitle>
              <CardDescription>Cập nhật mật khẩu để bảo vệ tài khoản của bạn.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 max-w-sm">
                <div className="space-y-2">
                  <Label>Mật khẩu hiện tại</Label>
                  <Input type="password" placeholder="••••••••" />
                </div>
                <div className="space-y-2">
                  <Label>Mật khẩu mới</Label>
                  <Input type="password" placeholder="••••••••" />
                </div>
                <div className="space-y-2">
                  <Label>Xác nhận mật khẩu mới</Label>
                  <Input type="password" placeholder="••••••••" />
                </div>
                <Button className="mt-2">Cập nhật Mật khẩu</Button>
              </div>
            </CardContent>
          </Card>

        </div>
      </div>
    </div>
  )
}
