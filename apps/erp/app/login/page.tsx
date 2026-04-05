"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { ShieldCheck, Calculator, Briefcase, Loader2 } from "lucide-react"

const BrandLogo = ({ className = "w-10 h-10" }: { className?: string }) => (
  <div className={`relative flex items-center justify-center shrink-0 bg-gradient-to-br from-slate-900 to-blue-900 shadow-lg shadow-blue-900/20 overflow-hidden ring-1 ring-slate-900/10 rounded-xl ${className}`}>
    <svg className="absolute inset-0 w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="lg-grid-login" width="6" height="6" patternUnits="userSpaceOnUse">
          <path d="M 6 0 L 0 0 0 6" fill="none" stroke="currentColor" className="text-white" strokeWidth="0.5" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#lg-grid-login)" />
    </svg>
    <svg className="relative z-10 w-full h-full" viewBox="0 0 48 48">
      <text x="24" y="27" fill="white" fontSize="22" fontWeight="900" fontFamily="Inter, system-ui, sans-serif" textAnchor="middle" dominantBaseline="middle" letterSpacing="-1">
        LT
      </text>
    </svg>
  </div>
);

export default function LoginPage() {
  const router = useRouter()
  const [role, setRole] = useState("admin")
  const [loading, setLoading] = useState(false)

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => {
      localStorage.setItem('userRole', role)
      router.push("/")
    }, 800)
  }

  const roleOptions = [
    { id: "admin", name: "Administrator", icon: ShieldCheck, color: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400", border: "border-blue-200 dark:border-blue-800" },
    { id: "accountant", name: "Kế toán", icon: Calculator, color: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400", border: "border-emerald-200 dark:border-emerald-800" },
    { id: "dispatcher", name: "Điều vận", icon: Briefcase, color: "bg-slate-100 text-slate-700 dark:bg-slate-900/30 dark:text-slate-400", border: "border-slate-200 dark:border-slate-800" },
  ]

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-slate-950 p-4 relative overflow-hidden">

      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-900/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-emerald-900/5 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4 pointer-events-none"></div>

      <div className="absolute top-8 left-8 flex items-center gap-3 z-10">
        <BrandLogo className="w-12 h-12" />
        <h1 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">LogiTrack Pro</h1>
      </div>

      <Card className="w-full max-w-md shadow-2xl shadow-blue-900/5 border border-slate-200 dark:border-slate-800 relative z-10 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl">
        <CardHeader className="space-y-2 text-center pb-6">
          <div className="mx-auto mb-4 mt-2">
             <BrandLogo className="w-16 h-16 shadow-xl ring-2 ring-white" />
          </div>
          <CardTitle className="text-2xl font-bold text-slate-900 dark:text-white">Hệ thống Quản trị</CardTitle>
          <CardDescription>Chọn quyền mô phỏng để truy cập TMS.</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleLogin} className="space-y-6">

            <div className="space-y-3">
              <Label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Cấu hình Đăng nhập (Demo):</Label>
              <div className="grid gap-3">
                {roleOptions.map((opt) => (
                  <div
                    key={opt.id}
                    onClick={() => setRole(opt.id)}
                    className={`flex items-center gap-4 p-3 rounded-xl border-2 cursor-pointer transition-all ${
                      role === opt.id
                        ? `${opt.border} bg-white dark:bg-slate-900 shadow-sm`
                        : "border-transparent bg-slate-100/50 dark:bg-slate-800/50 hover:bg-slate-100 dark:hover:bg-slate-800"
                    }`}
                  >
                    <div className={`p-2 rounded-lg ${opt.color}`}>
                      <opt.icon size={20} />
                    </div>
                    <div className="flex-1 font-medium text-slate-700 dark:text-slate-200">{opt.name}</div>
                    <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${role === opt.id ? 'border-primary bg-primary' : 'border-slate-300 dark:border-slate-600'}`}>
                      {role === opt.id && <div className="w-2 h-2 rounded-full bg-white dark:bg-slate-900"></div>}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4 pt-6 border-t border-slate-100 dark:border-slate-800">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-slate-700 font-semibold dark:text-slate-300">Tài khoản (Email)</Label>
                <Input id="email" type="text" placeholder={`${role}@logitrack.io`} className="bg-slate-50/50 dark:bg-slate-950/50 border-slate-200 dark:border-slate-800 focus-visible:ring-primary h-11" />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="password" className="text-slate-700 font-semibold dark:text-slate-300">Mật khẩu</Label>
                  <a href="#" className="text-xs text-primary hover:text-blue-700 hover:underline font-medium transition-colors">Quên mật khẩu?</a>
                </div>
                <Input id="password" type="password" defaultValue="password123" className="bg-slate-50/50 dark:bg-slate-950/50 border-slate-200 dark:border-slate-800 focus-visible:ring-primary h-11" />
              </div>
            </div>

            <Button type="submit" className="w-full h-12 text-base font-bold bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-600/20 rounded-xl transition-all" disabled={loading}>
              {loading ? (
                <>
                  <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                  Đang xác thực hệ thống...
                </>
              ) : (
                "Đăng nhập"
              )}
            </Button>
          </form>
        </CardContent>
        <CardFooter className="flex flex-col gap-4 text-center text-sm text-slate-500 pb-8">
          <p>LogiTrack Pro — Hệ thống Quản lý Vận tải Doanh nghiệp.</p>
        </CardFooter>
      </Card>

    </div>
  )
}
