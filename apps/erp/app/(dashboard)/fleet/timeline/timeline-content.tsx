"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar, ChevronLeft, ChevronRight, Truck, Filter } from "lucide-react"
import { addDays, format, subDays, startOfWeek, endOfWeek, eachDayOfInterval, isSameDay } from "date-fns"
import { vi } from "date-fns/locale"

// Mock Data
const vehicles = [
  { id: "15C-678.90", type: "Container 40ft", driver: "Trần Kim B" },
  { id: "29C-123.45", type: "Tải 15 Tấn", driver: "Lưu Văn A" },
  { id: "60C-234.56", type: "Container 40ft", driver: "Nguyễn Văn D" },
  { id: "29H-999.99", type: "Tải 8 Tấn", driver: "Phạm Văn C" },
  { id: "51D-456.78", type: "Tải Lạnh 10T", driver: "Lê Ngọc C" },
];

const trips = [
  { id: "T01", vehicleId: "15C-678.90", start: subDays(new Date(), 1), end: addDays(new Date(), 1), route: "Hải Phòng - Nam Định", status: "loading" },
  { id: "T02", vehicleId: "29C-123.45", start: new Date(), end: new Date(), route: "Hà Nội - Hải Phòng", status: "in-progress" },
  { id: "T03", vehicleId: "60C-234.56", start: addDays(new Date(), 2), end: addDays(new Date(), 4), route: "HCM - Đà Nẵng", status: "pending" },
  { id: "T04", vehicleId: "51D-456.78", start: subDays(new Date(), 2), end: new Date(), route: "Lâm Đồng - HCM", status: "completed" },
  { id: "M01", vehicleId: "29H-999.99", start: new Date(), end: addDays(new Date(), 1), route: "Bảo dưỡng định kỳ", status: "maintenance" },
];

export default function FleetTimelinePage() {
  const [currentDate, setCurrentDate] = useState(new Date());

  // Generate 7 days of the week centered around currentDate (or just start of week)
  const startDate = startOfWeek(currentDate, { weekStartsOn: 1 }); // Monday
  const endDate = endOfWeek(currentDate, { weekStartsOn: 1 });
  const days = eachDayOfInterval({ start: startDate, end: endDate });

  const nextWeek = () => setCurrentDate(addDays(currentDate, 7));
  const prevWeek = () => setCurrentDate(subDays(currentDate, 7));
  const today = () => setCurrentDate(new Date());

  const getTripColor = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-green-500 border-green-600 text-white';
      case 'in-progress': return 'bg-blue-500 border-blue-600 text-white';
      case 'loading': return 'bg-yellow-500 border-yellow-600 text-white';
      case 'pending': return 'bg-slate-300 border-slate-400 text-slate-800 dark:bg-slate-700 dark:border-slate-600 dark:text-slate-200';
      case 'maintenance': return 'bg-red-500 border-red-600 text-white flex items-center justify-center';
      default: return 'bg-blue-200 border-blue-300 text-blue-800';
    }
  }

  return (
    <div className="space-y-6 h-full flex flex-col">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between shrink-0">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Sơ đồ Lịch trình Đội xe</h2>
          <p className="text-slate-500">Gantt Chart theo dõi quỹ thời gian hoạt động và bảo dưỡng của từng đầu xe.</p>
        </div>
        <div className="flex gap-2 items-center">
          <Button variant="outline"><Filter className="mr-2 h-4 w-4" /> Bộ lọc</Button>
          <Button>Xuất lịch</Button>
        </div>
      </div>

      <Card className="flex-1 flex flex-col overflow-hidden">
        <CardHeader className="border-b border-slate-100 dark:border-slate-800 pb-4 shrink-0">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Button variant="outline" size="icon" onClick={prevWeek}><ChevronLeft className="h-4 w-4" /></Button>
              <Button variant="outline" onClick={today}>Hôm nay</Button>
              <Button variant="outline" size="icon" onClick={nextWeek}><ChevronRight className="h-4 w-4" /></Button>
              <span className="ml-4 font-semibold text-lg flex items-center gap-2">
                <Calendar className="h-5 w-5 text-primary" />
                Tháng {format(currentDate, 'MM/yyyy')}
              </span>
            </div>
            
            <div className="flex items-center gap-4 text-sm font-medium">
              <div className="flex items-center gap-1.5"><div className="w-3 h-3 rounded-full bg-blue-500"></div> Đang chạy</div>
              <div className="flex items-center gap-1.5"><div className="w-3 h-3 rounded-full bg-yellow-500"></div> Bốc dỡ</div>
              <div className="flex items-center gap-1.5"><div className="w-3 h-3 rounded-full bg-green-500"></div> Hoàn thành</div>
              <div className="flex items-center gap-1.5"><div className="w-3 h-3 rounded-full bg-red-500"></div> Bảo dưỡng</div>
              <div className="flex items-center gap-1.5"><div className="w-3 h-3 rounded-full bg-slate-300 dark:bg-slate-700"></div> Trống / Dự kiến</div>
            </div>
          </div>
        </CardHeader>

        <CardContent className="p-0 flex-1 overflow-auto bg-slate-50 dark:bg-slate-900/50">
          <div className="min-w-[800px]">
            {/* Header Row */}
            <div className="flex border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 sticky top-0 z-10">
              <div className="w-64 shrink-0 border-r border-slate-200 dark:border-slate-800 p-3 font-semibold text-sm flex items-center text-slate-500">
                Biển số / Lái xe
              </div>
              <div className="flex-1 flex">
                {days.map((day, i) => (
                  <div key={i} className={`flex-1 flex flex-col items-center justify-center p-2 border-r border-slate-200 dark:border-slate-800 ${isSameDay(day, new Date()) ? 'bg-primary/5 dark:bg-primary/10' : ''}`}>
                    <span className={`text-xs font-semibold uppercase ${isSameDay(day, new Date()) ? 'text-primary' : 'text-slate-500'}`}>
                      {format(day, 'EEEE', { locale: vi })}
                    </span>
                    <span className={`text-lg font-bold ${isSameDay(day, new Date()) ? 'text-primary' : ''}`}>
                      {format(day, 'dd')}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Vehicle Rows */}
            {vehicles.map((vehicle) => (
              <div key={vehicle.id} className="flex border-b border-slate-200 dark:border-slate-800 hover:bg-white dark:hover:bg-slate-900 transition-colors">
                <div className="w-64 shrink-0 border-r border-slate-200 dark:border-slate-800 p-3 bg-white dark:bg-slate-950 z-10 sticky left-0 shadow-[2px_0_5px_-2px_rgba(0,0,0,0.1)]">
                  <div className="font-bold flex items-center gap-2">
                    <Truck className="h-4 w-4 text-slate-400" /> {vehicle.id}
                  </div>
                  <div className="text-xs text-slate-500 mt-1">{vehicle.type} • {vehicle.driver}</div>
                </div>
                
                <div className="flex-1 relative flex">
                  {/* Grid Lines */}
                  {days.map((day, i) => (
                    <div key={i} className={`flex-1 border-r border-slate-200 dark:border-slate-800 border-dashed ${isSameDay(day, new Date()) ? 'bg-primary/5 dark:bg-primary/10' : ''}`}></div>
                  ))}

                  {/* Trip Blocks */}
                  {trips.filter(t => t.vehicleId === vehicle.id).map(trip => {
                    // Calculate start and end indices for positioning
                    let startIndex = days.findIndex(d => isSameDay(d, trip.start));
                    let endIndex = days.findIndex(d => isSameDay(d, trip.end));
                    
                    // Handle trips that start before or end after this week
                    const isVisible = !(endIndex < 0 && trip.end < days[0]) && !(startIndex < 0 && trip.start > days[6]);
                    
                    if (!isVisible) return null;

                    const actualStart = startIndex < 0 ? 0 : startIndex;
                    const actualEnd = endIndex < 0 ? 6 : endIndex;
                    const length = actualEnd - actualStart + 1;
                    
                    const leftPercent = (actualStart / 7) * 100;
                    const widthPercent = (length / 7) * 100;

                    return (
                      <div 
                        key={trip.id} 
                        className="absolute top-2 bottom-2 px-1 z-10 min-h-[40px] flex items-center"
                        style={{ left: `${leftPercent}%`, width: `${widthPercent}%` }}
                      >
                        <div className={`w-full h-full rounded-md border shadow-sm flex flex-col justify-center px-3 cursor-pointer overflow-hidden group hover:ring-2 hover:ring-primary/50 transition-all ${getTripColor(trip.status)}`}>
                          <div className="text-xs font-bold truncate">{trip.route}</div>
                          <div className="text-[10px] opacity-90 truncate hidden md:block">
                            {format(trip.start, 'dd/MM')} - {format(trip.end, 'dd/MM')}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
            
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
