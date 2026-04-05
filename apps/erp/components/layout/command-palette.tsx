"use client"

import * as React from "react"
import { useRouter } from "next/navigation"
import { Command } from "cmdk"
import { 
  Calendar, 
  CreditCard, 
  Settings, 
  User,
  Truck,
  Users,
  Search,
  FileText,
  MapPin,
  FileCheck,
  FileWarning
} from "lucide-react"

export function CommandPalette() {
  const router = useRouter()
  const [open, setOpen] = React.useState(false)

  // Toggle the menu when ⌘K is pressed
  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((open) => !open)
      }
    }

    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
  }, [])

  const runCommand = React.useCallback((command: () => unknown) => {
    setOpen(false)
    command()
  }, [])

  if (!open) return null

  return (
    <>
      <div 
        className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm transition-all"
        onClick={() => setOpen(false)}
      />
      <div className="fixed left-[50%] top-[50%] z-50 w-full max-w-lg translate-x-[-50%] translate-y-[-50%] p-4 sm:p-0">
        <Command 
          className="flex h-full w-full flex-col overflow-hidden rounded-xl bg-white dark:bg-slate-900 shadow-2xl border border-slate-200 dark:border-slate-800"
          loop
        >
          <div className="flex items-center border-b border-slate-200 dark:border-slate-800 px-3">
            <Search className="mr-2 h-5 w-5 shrink-0 opacity-50" />
            <Command.Input 
              className="flex h-12 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-slate-500 disabled:cursor-not-allowed disabled:opacity-50 dark:text-white"
              placeholder="Gõ lệnh hoặc tìm kiếm (ví dụ: 'tạo đơn', 'xe')..." 
            />
          </div>

          <Command.List className="max-h-[300px] overflow-y-auto overflow-x-hidden p-2">
            <Command.Empty className="py-6 text-center text-sm text-slate-500">
              Không tìm thấy kết quả phù hợp.
            </Command.Empty>

            <Command.Group heading="Gợi ý" className="p-2 text-xs font-medium text-slate-500 dark:text-slate-400 [&_[cmdk-item]]:flex [&_[cmdk-item]]:cursor-pointer [&_[cmdk-item]]:items-center [&_[cmdk-item]]:rounded-md [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-2 [&_[cmdk-item]]:text-sm [&_[cmdk-item]]:text-slate-900 dark:[&_[cmdk-item]]:text-slate-100 hover:[&_[cmdk-item]]:bg-slate-100 dark:hover:[&_[cmdk-item]]:bg-slate-800">
              <Command.Item onSelect={() => runCommand(() => router.push("/tracking"))}>
                <MapPin className="mr-2 h-4 w-4" />
                <span>Bản đồ hành trình (Live)</span>
              </Command.Item>
              <Command.Item onSelect={() => runCommand(() => router.push("/fleet/timeline"))}>
                <Calendar className="mr-2 h-4 w-4" />
                <span>Sơ đồ Gantt lịch chạy xe</span>
              </Command.Item>
              <Command.Item onSelect={() => runCommand(() => router.push("/dispatch/audit"))}>
                <FileCheck className="mr-2 h-4 w-4" />
                <span>Cộng Hành / Đối Soát chuyến</span>
              </Command.Item>
              <Command.Item onSelect={() => runCommand(() => router.push("/fleet/documents"))}>
                <FileWarning className="mr-2 h-4 w-4" />
                <span>Cảnh Báo Giấy Tờ Đội Xe</span>
              </Command.Item>
              <Command.Item onSelect={() => runCommand(() => router.push("/finance/invoices"))}>
                <FileText className="mr-2 h-4 w-4" />
                <span>Tạo hóa đơn & Lệnh điều xe</span>
              </Command.Item>
            </Command.Group>

            <Command.Separator className="h-px bg-slate-200 dark:bg-slate-800" />

            <Command.Group heading="Quản lý" className="p-2 text-xs font-medium text-slate-500 dark:text-slate-400 [&_[cmdk-item]]:flex [&_[cmdk-item]]:cursor-pointer [&_[cmdk-item]]:items-center [&_[cmdk-item]]:rounded-md [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-2 [&_[cmdk-item]]:text-sm [&_[cmdk-item]]:text-slate-900 dark:[&_[cmdk-item]]:text-slate-100 hover:[&_[cmdk-item]]:bg-slate-100 dark:hover:[&_[cmdk-item]]:bg-slate-800">
              <Command.Item onSelect={() => runCommand(() => router.push("/fleet"))}>
                <Truck className="mr-2 h-4 w-4" />
                <span>Hồ sơ Đầu Kéo / Moóc</span>
              </Command.Item>
              <Command.Item onSelect={() => runCommand(() => router.push("/drivers/payroll"))}>
                <CreditCard className="mr-2 h-4 w-4" />
                <span>Bảng Lương Tài Xế</span>
              </Command.Item>
              <Command.Item onSelect={() => runCommand(() => router.push("/customers"))}>
                <Users className="mr-2 h-4 w-4" />
                <span>Danh bạ Khách Hàng</span>
              </Command.Item>
            </Command.Group>

            <Command.Separator className="h-px bg-slate-200 dark:bg-slate-800" />

            <Command.Group heading="Hệ thống" className="p-2 text-xs font-medium text-slate-500 dark:text-slate-400 [&_[cmdk-item]]:flex [&_[cmdk-item]]:cursor-pointer [&_[cmdk-item]]:items-center [&_[cmdk-item]]:rounded-md [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-2 [&_[cmdk-item]]:text-sm [&_[cmdk-item]]:text-slate-900 dark:[&_[cmdk-item]]:text-slate-100 hover:[&_[cmdk-item]]:bg-slate-100 dark:hover:[&_[cmdk-item]]:bg-slate-800">
              <Command.Item onSelect={() => runCommand(() => router.push("/profile"))}>
                <User className="mr-2 h-4 w-4" />
                <span>Hồ sơ cá nhân</span>
              </Command.Item>
              <Command.Item onSelect={() => runCommand(() => router.push("/settings"))}>
                <Settings className="mr-2 h-4 w-4" />
                <span>Cài đặt & Phân quyền</span>
              </Command.Item>
            </Command.Group>
          </Command.List>
        </Command>
      </div>
    </>
  )
}
