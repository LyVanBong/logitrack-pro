"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { MapPin, Navigation, Clock, Receipt, UploadCloud, CheckCircle2, ChevronRight, User } from "lucide-react"

export default function DriverAppPage() {
  const [tripState, setTripState] = useState<'pending' | 'in-progress' | 'completed'>('pending');
  const [showReceiptModal, setShowReceiptModal] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 flex flex-col w-full max-w-md mx-auto relative shadow-2xl overflow-hidden">
      {/* Driver Mobile Header */}
      <header className="bg-primary text-white p-6 pb-12 rounded-b-[2.5rem]">
         <div className="flex items-center justify-between">
            <div>
               <p className="text-primary-foreground/80 text-sm">Xin chào,</p>
               <h1 className="text-2xl font-bold">Lưu Văn A</h1>
               <div className="flex items-center gap-2 mt-2">
                 <Badge variant="secondary" className="bg-white/20 text-white border-0 hover:bg-white/30 text-xs">FC</Badge>
                 <span className="text-sm">Xe 29C-123.45</span>
               </div>
            </div>
            <div className="w-12 h-12 rounded-full border-2 border-white/50 overflow-hidden bg-white/20 flex items-center justify-center">
               <User className="text-white" />
            </div>
         </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 px-4 -mt-6 z-10 space-y-4 pb-24">
         
         {/* Current/Assigned Trip */}
         <Card className="border-0 shadow-lg shadow-slate-200/50 dark:shadow-black/50 overflow-hidden">
            <div className="bg-slate-900 dark:bg-slate-800 text-white p-3 px-4 flex justify-between items-center">
              <span className="text-sm font-semibold flex items-center gap-2">
                 <Navigation className="w-4 h-4 text-emerald-400" /> Chuyến hiện tại
              </span>
              <span className="text-xs text-slate-400">TRIP-20260317-01</span>
            </div>
            <CardContent className="p-4 py-5">
              <div className="space-y-4">
                 <div className="flex gap-4 items-start">
                    <div className="flex flex-col items-center gap-1 mt-1 shrink-0">
                       <div className="w-3 h-3 rounded-full bg-primary" />
                       <div className="w-1 h-8 rounded-full bg-slate-200 dark:bg-slate-700" />
                       <div className="w-3 h-3 rounded-full bg-emerald-500" />
                    </div>
                    <div className="flex-1 space-y-3">
                       <div>
                         <p className="text-xs text-slate-500">Điểm nhận hàng</p>
                         <p className="font-semibold text-sm">Kho Cty Hòa Phát (Hà Nội)</p>
                       </div>
                       <div>
                         <p className="text-xs text-slate-500">Nơi trả hàng</p>
                         <p className="font-semibold text-sm">Cảng Đình Vũ (Hải Phòng)</p>
                       </div>
                    </div>
                 </div>
                 
                 <div className="pt-2 flex justify-between items-center text-sm border-t border-slate-100 dark:border-slate-800">
                    <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
                      <Clock className="w-4 h-4" /> 17/03 - 08:00
                    </div>
                    <div>Thép cuộn, 30 Tấn</div>
                 </div>

                 <div className="pt-2">
                    {tripState === 'pending' && (
                       <Button className="w-full h-12 text-lg font-bold shadow-md shadow-primary/30" onClick={() => setTripState('in-progress')}>
                           BẮT ĐẦU CHUYẾN (CHECK-IN) 
                       </Button>
                    )}
                    {tripState === 'in-progress' && (
                       <div className="flex gap-2">
                          <Button variant="outline" className="flex-1 h-12 bg-white dark:bg-slate-900 border-emerald-500/30 text-emerald-600 hover:text-emerald-700 hover:bg-emerald-50" onClick={() => setShowReceiptModal(true)}>
                              <Receipt className="w-5 h-5 mr-2"/> BÁO CHI PHÍ
                          </Button>
                          <Button className="flex-1 h-12 bg-emerald-600 hover:bg-emerald-700 font-bold" onClick={() => setTripState('completed')}>
                              HOÀN THÀNH
                          </Button>
                       </div>
                    )}
                    {tripState === 'completed' && (
                       <div className="flex items-center justify-center gap-2 h-12 text-emerald-600 dark:text-emerald-500 font-bold bg-emerald-50 dark:bg-emerald-950/30 rounded-md">
                           <CheckCircle2 className="w-5 h-5" /> CHUYẾN ĐÃ HOÀN THÀNH
                       </div>
                    )}
                 </div>
              </div>
            </CardContent>
         </Card>

         {/* History & Upcoming */}
         <div className="pt-2 space-y-3">
            <h3 className="font-bold text-slate-800 dark:text-slate-200 px-1">Tác vụ khác</h3>
            
            <div className="bg-white dark:bg-slate-900 rounded-xl p-4 flex items-center justify-between shadow-sm border border-slate-100 dark:border-slate-800" onClick={() => setShowReceiptModal(true)}>
               <div className="flex items-center gap-3">
                 <div className="p-2.5 bg-blue-50 dark:bg-blue-900/30 rounded-lg text-blue-600 dark:text-blue-400">
                    <UploadCloud className="w-5 h-5" />
                 </div>
                 <div>
                    <h4 className="font-semibold text-sm">Nộp biên lai / Hóa đơn</h4>
                    <p className="text-xs text-slate-500">Gửi ảnh vé cầu đường, dầu, POD</p>
                 </div>
               </div>
               <ChevronRight className="w-5 h-5 text-slate-400" />
            </div>

             <div className="bg-white dark:bg-slate-900 rounded-xl p-4 flex items-center justify-between shadow-sm border border-slate-100 dark:border-slate-800 opacity-60">
               <div className="flex items-center gap-3">
                 <div className="p-2.5 bg-slate-50 dark:bg-slate-800 rounded-lg text-slate-600 dark:text-slate-400">
                    <Clock className="w-5 h-5" />
                 </div>
                 <div>
                    <h4 className="font-semibold text-sm">Lịch sử chuyến đi</h4>
                    <p className="text-xs text-slate-500">Xem tháng này (12 chuyến)</p>
                 </div>
               </div>
               <ChevronRight className="w-5 h-5 text-slate-400" />
            </div>
         </div>
      </main>

      {/* Camera/Upload Modal */}
      {showReceiptModal && (
        <div className="fixed inset-0 z-50 bg-black/80 flex flex-col justify-end">
           <div className="bg-white dark:bg-slate-950 rounded-t-3xl w-full max-w-md mx-auto p-6 animate-in slide-in-from-bottom-full duration-200">
              <div className="flex justify-between items-center mb-6">
                 <h2 className="text-lg font-bold">Nộp Hình Ảnh Chứng Từ</h2>
                 <Button variant="ghost" size="icon" className="rounded-full w-8 h-8" onClick={() => setShowReceiptModal(false)}>✕</Button>
              </div>
              
              <div className="space-y-4">
                 <div className="grid grid-cols-2 gap-3">
                   <Button variant="outline" className="h-24 flex flex-col items-center justify-center gap-2 border-dashed">
                      <span className="text-2xl">⛽</span>
                      <span className="text-xs font-semibold">Đổ Dầu</span>
                   </Button>
                   <Button variant="outline" className="h-24 flex flex-col items-center justify-center gap-2 border-dashed">
                      <span className="text-2xl">🛣️</span>
                      <span className="text-xs font-semibold">Cầu đường</span>
                   </Button>
                   <Button variant="outline" className="h-24 flex flex-col items-center justify-center gap-2 border-dashed">
                      <span className="text-2xl">🔧</span>
                      <span className="text-xs font-semibold">Sửa chữa dọc đg</span>
                   </Button>
                   <Button variant="outline" className="h-24 flex flex-col items-center justify-center gap-2 border-dashed">
                      <span className="text-2xl">📋</span>
                      <span className="text-xs font-semibold">POD/Phiếu giao</span>
                   </Button>
                 </div>
                 
                 <Button className="w-full h-12 bg-slate-900 dark:bg-slate-50 mt-4" onClick={() => setShowReceiptModal(false)}>
                    GỬI CHO KẾ TOÁN
                 </Button>
              </div>
           </div>
        </div>
      )}
    </div>
  )
}
