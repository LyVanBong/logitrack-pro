"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Truck, ShieldCheck, Calculator, Briefcase, Loader2 } from "lucide-react"

export default function LoginPage() {
  const router = useRouter()
  const [role, setRole] = useState("admin")
  const [loading, setLoading] = useState(false)

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    
    // Simulate API delay
    setTimeout(() => {
      // Save simulated role
      localStorage.setItem('userRole', role)
      router.push("/")
    }, 800)
  }

  const roleOptions = [
    { id: "admin", name: "Administrator", icon: ShieldCheck, color: "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400", border: "border-purple-200 dark:border-purple-800" },
    { id: "accountant", name: "Kế toán", icon: Calculator, color: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400", border: "border-emerald-200 dark:border-emerald-800" },
    { id: "dispatcher", name: "Điều vận", icon: Briefcase, color: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400", border: "border-blue-200 dark:border-blue-800" },
  ]

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-slate-950 p-4">
      <div className="absolute top-8 left-8 flex items-center gap-3">
        <div className="bg-primary p-2 rounded-lg text-white">
          <Truck size={24} />
        </div>
        <h1 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">LogiTrack Pro</h1>
      </div>

      <Card className="w-full max-w-md shadow-xl border-slate-200 dark:border-slate-800">
        <CardHeader className="space-y-2 text-center pb-6">
          <CardTitle className="text-2xl font-bold">Đăng nhập Hệ thống</CardTitle>
          <CardDescription>Chọn quyền mô phỏng để đăng nhập vào WebApp.</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleLogin} className="space-y-6">
            
            <div className="space-y-3">
              <Label className="text-sm font-semibold">Chọn luồng đăng nhập mô phỏng:</Label>
              <div className="grid gap-3">
                {roleOptions.map((opt) => (
                  <div 
                    key={opt.id}
                    onClick={() => setRole(opt.id)}
                    className={`flex items-center gap-4 p-3 rounded-lg border-2 cursor-pointer transition-all ${
                      role === opt.id 
                        ? `${opt.border} bg-slate-50 dark:bg-slate-900` 
                        : "border-transparent bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700"
                    }`}
                  >
                    <div className={`p-2 rounded-md ${opt.color}`}>
                      <opt.icon size={20} />
                    </div>
                    <div className="flex-1 font-medium">{opt.name}</div>
                    <div className={`w-4 h-4 rounded-full border-2 ${role === opt.id ? 'border-primary bg-primary' : 'border-slate-300 dark:border-slate-600'}`}>
                      {role === opt.id && <div className="w-full h-full rounded-full border-2 border-white dark:border-slate-900"></div>}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4 pt-4 border-t border-slate-100 dark:border-slate-800">
              <div className="space-y-2">
                <Label htmlFor="email">Email / Tên đăng nhập</Label>
                <Input id="email" type="text" placeholder={`${role}@logitrack.com`} className="bg-slate-50 dark:bg-slate-900" />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="password">Mật khẩu</Label>
                  <a href="#" className="text-xs text-primary hover:underline font-medium">Quên mật khẩu?</a>
                </div>
                <Input id="password" type="password" defaultValue="password123" className="bg-slate-50 dark:bg-slate-900" />
              </div>
            </div>

            <Button type="submit" className="w-full h-11 text-base font-medium transition-all" disabled={loading}>
              {loading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Đang xác thực bảo mật...
                </>
              ) : (
                "Đăng nhập hệ thống"
              )}
            </Button>
          </form>
        </CardContent>
        <CardFooter className="flex flex-col gap-4 text-center text-sm text-slate-500">
          <p>Hệ thống nội bộ. Vui lòng không chia sẻ tài khoản.</p>
        </CardFooter>
      </Card>
      
      {/* Background decoration elements */}
      <div className="fixed bottom-0 right-0 p-8 text-slate-200 dark:text-slate-800 -z-10">
        <Truck size={400} className="opacity-10 dark:opacity-5 translate-x-12 translate-y-12" />
      </div>
    </div>
  )
}
