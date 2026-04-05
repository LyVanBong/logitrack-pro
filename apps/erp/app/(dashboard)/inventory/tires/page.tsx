"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { CircleDashed, Settings, ArrowRightLeft, AlertTriangle } from "lucide-react"

export default function TiresPage() {
  const [selectedVehicle, setSelectedVehicle] = useState("29C-123.45");

  // Mock tire data for a 10-wheel truck (2 front steering, 8 rear drive) + spare
  const tireData = [
    { pos: "FL", brand: "Michelin X Multi Z", km: 85000, limit: 120000, status: "good", notes: "" },
    { pos: "FR", brand: "Michelin X Multi Z", km: 85000, limit: 120000, status: "warning", notes: "Mòn lệch trong" },
    
    // Drive axis 1
    { pos: "RL1-Out", brand: "Bridgestone R156", km: 145000, limit: 150000, status: "critical", notes: "Cần thay thế (còn 5000km)" },
    { pos: "RL1-In", brand: "Bridgestone R156", km: 145000, limit: 150000, status: "warning", notes: "Cần thay hoặc đắp" },
    { pos: "RR1-In", brand: "Bridgestone R156", km: 60000, limit: 150000, status: "good", notes: "" },
    { pos: "RR1-Out", brand: "Bridgestone R156", km: 60000, limit: 150000, status: "good", notes: "" },

    // Drive axis 2
    { pos: "RL2-Out", brand: "DRC", km: 20000, limit: 100000, status: "good", notes: "" },
    { pos: "RL2-In", brand: "DRC", km: 20000, limit: 100000, status: "good", notes: "" },
    { pos: "RR2-In", brand: "DRC", km: 20000, limit: 100000, status: "good", notes: "" },
    { pos: "RR2-Out", brand: "DRC", km: 20000, limit: 100000, status: "good", notes: "" },
  ]

  const getTireBadge = (status: string) => {
    switch(status) {
       case 'good': return <div className="w-3 h-3 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]"></div>;
       case 'warning': return <div className="w-3 h-3 rounded-full bg-orange-500 shadow-[0_0_8px_rgba(249,115,22,0.5)] animate-pulse"></div>;
       case 'critical': return <div className="w-3 h-3 rounded-full bg-red-600 shadow-[0_0_8px_rgba(220,38,38,0.8)] animate-bounce"></div>;
       default: return <div className="w-3 h-3 rounded-full bg-slate-300"></div>;
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Quản lý Lốp chuyên sâu (Tire Management)</h2>
          <p className="text-slate-500">Giám sát vị trí, vòng đời và cảnh báo mòn lốp trên từng đầu xe.</p>
        </div>
        <div className="flex gap-2">
           <Button variant="outline" className="text-blue-600 border-blue-200 bg-blue-50 dark:bg-blue-900/20">
             <ArrowRightLeft className="mr-2 h-4 w-4" /> Lệnh Đảo Lốp
           </Button>
           <Button variant="destructive">Thay Lốp Mới</Button>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {/* DIAGRAM SECTION */}
        <Card className="md:col-span-1 border-t-4 border-t-slate-800 dark:border-t-slate-200">
           <CardHeader>
             <CardTitle>Sơ đồ Lốp Đầu Kéo</CardTitle>
             <select 
               value={selectedVehicle} onChange={(e) => setSelectedVehicle(e.target.value)}
               className="mt-2 flex h-10 w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm font-bold text-slate-700 dark:bg-slate-900 dark:border-slate-800 dark:text-slate-300 shadow-sm"
             >
                <option value="29C-123.45">29C-123.45 (Hino 500 - Đầu kéo)</option>
                <option value="30F-555.66">30F-555.66 (Howo 380 - Đầu kéo)</option>
             </select>
           </CardHeader>
           <CardContent className="flex justify-center py-6">
              <div className="relative border-4 border border-dashed border-slate-300 dark:border-slate-700 rounded-3xl p-8 w-64 h-[400px] flex flex-col justify-between items-center bg-slate-50 dark:bg-slate-900/50">
                 {/* Steering Axis */}
                 <div className="w-full flex justify-between absolute top-10 px-4">
                    <div className="flex flex-col items-center">
                       {getTireBadge("good")}
                       <div className="w-10 h-16 bg-slate-800 dark:bg-slate-200 rounded-sm mt-1 flex items-center justify-center text-[10px] text-white font-bold border-2 border-slate-900">FL</div>
                    </div>
                    <div className="flex flex-col items-center">
                       {getTireBadge("warning")}
                       <div className="w-10 h-16 bg-slate-800 dark:bg-slate-200 rounded-sm mt-1 flex items-center justify-center text-[10px] text-white font-bold border-2 border-slate-900 border-r-orange-500">FR</div>
                    </div>
                 </div>

                 {/* Chassis Center Line */}
                 <div className="w-2 h-64 bg-slate-300 dark:bg-slate-700 absolute top-16 rounded-full"></div>

                 {/* Drive Axis 1 */}
                 <div className="w-full flex justify-between absolute top-48 px-2">
                    <div className="flex gap-1">
                       <div className="flex flex-col items-center">
                          {getTireBadge("critical")}
                          <div className="w-10 h-16 bg-slate-800 dark:bg-slate-200 rounded-sm mt-1 border-2 border-red-500 flex items-center justify-center text-[9px] text-white">Out</div>
                       </div>
                       <div className="flex flex-col items-center">
                          {getTireBadge("warning")}
                          <div className="w-10 h-16 bg-slate-800 dark:bg-slate-200 rounded-sm mt-1 border-2 border-slate-900 flex items-center justify-center text-[9px] text-white">In</div>
                       </div>
                    </div>
                    <div className="flex gap-1">
                       <div className="flex flex-col items-center">
                          {getTireBadge("good")}
                          <div className="w-10 h-16 bg-slate-800 dark:bg-slate-200 rounded-sm mt-1 border-2 border-slate-900 flex items-center justify-center text-[9px] text-white">In</div>
                       </div>
                       <div className="flex flex-col items-center">
                          {getTireBadge("good")}
                          <div className="w-10 h-16 bg-slate-800 dark:bg-slate-200 rounded-sm mt-1 border-2 border-slate-900 flex items-center justify-center text-[9px] text-white">Out</div>
                       </div>
                    </div>
                 </div>

                 {/* Drive Axis 2 */}
                 <div className="w-full flex justify-between absolute bottom-10 px-2">
                    <div className="flex gap-1">
                       <div className="flex flex-col items-center">
                          {getTireBadge("good")}
                          <div className="w-10 h-16 bg-slate-800 dark:bg-slate-200 rounded-sm mt-1 border-2 border-slate-900 flex items-center justify-center text-[9px] text-white">Out</div>
                       </div>
                       <div className="flex flex-col items-center">
                          {getTireBadge("good")}
                          <div className="w-10 h-16 bg-slate-800 dark:bg-slate-200 rounded-sm mt-1 border-2 border-slate-900 flex items-center justify-center text-[9px] text-white">In</div>
                       </div>
                    </div>
                    <div className="flex gap-1">
                       <div className="flex flex-col items-center">
                          {getTireBadge("good")}
                          <div className="w-10 h-16 bg-slate-800 dark:bg-slate-200 rounded-sm mt-1 border-2 border-slate-900 flex items-center justify-center text-[9px] text-white">In</div>
                       </div>
                       <div className="flex flex-col items-center">
                          {getTireBadge("good")}
                          <div className="w-10 h-16 bg-slate-800 dark:bg-slate-200 rounded-sm mt-1 border-2 border-slate-900 flex items-center justify-center text-[9px] text-white">Out</div>
                       </div>
                    </div>
                 </div>

                 <div className="absolute -bottom-14 flex items-center gap-2">
                   <div className="flex items-center gap-1"><div className="w-2 h-2 bg-emerald-500 rounded-full"></div><span className="text-xs">Tốt</span></div>
                   <div className="flex items-center gap-1"><div className="w-2 h-2 bg-orange-500 rounded-full"></div><span className="text-xs">Theo dõi</span></div>
                   <div className="flex items-center gap-1"><div className="w-2 h-2 bg-red-600 rounded-full"></div><span className="text-xs">Thay gấp</span></div>
                 </div>
              </div>
           </CardContent>
        </Card>

        {/* LIST SECTION */}
        <Card className="md:col-span-2">
           <CardHeader>
             <CardTitle>Chi tiết Vòng đời (Lifespan)</CardTitle>
             <CardDescription>Bảng phân tích độ mòn và lịch sử bảo dưỡng lốp cho xe {selectedVehicle}.</CardDescription>
           </CardHeader>
           <CardContent>
              <Table>
                <TableHeader><TableRow><TableHead>Vị trí</TableHead><TableHead>Hãng & Chủng loại</TableHead><TableHead className="text-right">Đã chạy (Km)</TableHead><TableHead className="text-right">Định mức (Km)</TableHead><TableHead>Hao mòn</TableHead><TableHead>Cảnh báo / Ghi chú</TableHead></TableRow></TableHeader>
                <TableBody>
                  {tireData.map((t, i) => {
                     const wearPercent = Math.min(100, Math.round((t.km / t.limit) * 100));
                     return (
                      <TableRow key={i}>
                        <TableCell className="font-bold">{t.pos}</TableCell>
                        <TableCell>{t.brand}</TableCell>
                        <TableCell className="text-right font-medium">{t.km.toLocaleString()}</TableCell>
                        <TableCell className="text-right text-slate-500">{t.limit.toLocaleString()}</TableCell>
                        <TableCell>
                           <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
                              <div 
                                className={`h-full ${wearPercent > 90 ? 'bg-red-500' : wearPercent > 70 ? 'bg-orange-500' : 'bg-emerald-500'}`} 
                                style={{ width: `${wearPercent}%` }}
                              ></div>
                           </div>
                           <p className="text-[10px] text-slate-500 text-right mt-1">{wearPercent}%</p>
                        </TableCell>
                        <TableCell>
                           {t.status === 'critical' ? <span className="text-red-600 font-bold flex items-center gap-1"><AlertTriangle className="w-3 h-3"/> Thay ngay</span> : 
                            t.status === 'warning' ? <span className="text-orange-500 font-medium">{t.notes}</span> : 
                            <span className="text-slate-400">-</span>}
                        </TableCell>
                      </TableRow>
                     )
                  })}
                </TableBody>
              </Table>
           </CardContent>
        </Card>
      </div>
    </div>
  )
}
