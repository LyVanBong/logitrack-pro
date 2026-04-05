"use client"

import dynamic from 'next/dynamic';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Search, MapPin, AlertTriangle } from 'lucide-react';

// Dynamically import the map to avoid SSR issues with Leaflet
const MapClient = dynamic(
  () => import('@/components/features/map-client'),
  { ssr: false, loading: () => <div className="w-full h-full bg-slate-100 dark:bg-slate-800 animate-pulse rounded-lg flex items-center justify-center">Loading Map...</div> }
);

export default function TrackingPage() {
  return (
    <div className="space-y-6 h-full flex flex-col">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between shrink-0">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Bản đồ Giám sát (Live Tracking)</h2>
          <p className="text-slate-500">Giám sát lộ trình, vận tốc và các cảnh báo vi phạm theo thời gian thực.</p>
        </div>
        <div className="flex gap-2">
          <Input placeholder="Tìm biển số, tài xế..." className="w-64 bg-white dark:bg-slate-900" />
          <Button variant="secondary"><Search className="h-4 w-4" /></Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 flex-1 min-h-[500px]">
        {/* Vehicles Sidebar */}
        <div className="md:col-span-1 space-y-4 overflow-y-auto pr-2">
          
          <Card className="border-l-4 border-l-blue-500 cursor-pointer hover:shadow-md transition-shadow">
            <CardContent className="p-4">
              <div className="flex justify-between items-start mb-2">
                <div className="font-bold text-sm">29C-123.45</div>
                <Badge variant="info" className="text-[10px] px-1.5 py-0 h-4">65 km/h</Badge>
              </div>
              <div className="text-xs text-slate-500 flex items-center gap-1.5 mb-2">
                <MapPin className="h-3.5 w-3.5 text-blue-500" /> QL5, Tỉnh Hải Dương
              </div>
              <div className="flex justify-between items-center mt-3 pt-3 border-t border-slate-100 dark:border-slate-800 text-xs">
                <span className="text-slate-500">Lưu Văn A</span>
                <span className="font-semibold text-slate-900 dark:text-white group-hover:text-primary transition-colors">Theo dõi</span>
              </div>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-amber-500 cursor-pointer hover:shadow-md transition-shadow">
            <CardContent className="p-4">
              <div className="flex justify-between items-start mb-2">
                <div className="font-bold text-sm">15C-678.90</div>
                <Badge variant="warning" className="text-[10px] items-center gap-1 flex px-1.5 py-0 h-4"><AlertTriangle size={10}/> Cảnh báo</Badge>
              </div>
              <div className="text-xs text-slate-500 flex items-center gap-1.5 mb-2">
                <MapPin className="h-3.5 w-3.5 text-amber-500" /> Cao tốc Đà Nẵng - Quảng Ngãi
              </div>
              <div className="text-xs text-amber-600 bg-amber-50 dark:bg-amber-950/30 p-1.5 rounded mb-2 mt-1">
                Lốp FL: Áp suất thấp (95 PSI)
              </div>
              <div className="flex justify-between items-center mt-3 pt-3 border-t border-slate-100 dark:border-slate-800 text-xs">
                <span className="text-slate-500">Trần Kim B</span>
                <span className="font-semibold text-slate-900 dark:text-white group-hover:text-primary transition-colors">Mở Cảnh báo</span>
              </div>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-green-500 cursor-pointer hover:shadow-md transition-shadow opacity-60">
            <CardContent className="p-4">
              <div className="flex justify-between items-start mb-2">
                <div className="font-bold text-sm">29H-999.99</div>
                <Badge variant="success" className="text-[10px] px-1.5 py-0 h-4">Dừng đỗ</Badge>
              </div>
              <div className="text-xs text-slate-500 flex items-center gap-1.5 mb-2">
                <MapPin className="h-3.5 w-3.5 text-slate-400" /> KCN Quang Minh, Hà Nội
              </div>
              <div className="flex justify-between items-center mt-3 pt-3 border-t border-slate-100 dark:border-slate-800 text-xs">
                <span className="text-slate-500">Phạm Văn C</span>
                <span className="font-semibold text-slate-900 dark:text-white">Chi tiết</span>
              </div>
            </CardContent>
          </Card>

        </div>

        {/* Map Area */}
        <div className="md:col-span-3 bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 p-2 relative h-[600px] md:h-auto">
          <MapClient />
          
          <div className="absolute top-4 right-4 z-10 flex flex-col gap-2">
             <div className="bg-white dark:bg-slate-900 shadow-md border border-slate-200 dark:border-slate-800 rounded-lg p-3 text-xs w-48 font-medium">
                <div className="flex items-center justify-between mb-2">
                   <span className="text-slate-500">Tổng xe đang chạy</span>
                   <span className="text-base font-bold text-blue-600">12</span>
                </div>
                <div className="flex items-center justify-between mb-2">
                   <span className="text-slate-500">Đang dừng đỗ</span>
                   <span className="text-base font-bold text-green-600">5</span>
                </div>
                <div className="flex items-center justify-between">
                   <span className="text-slate-500">Mất tín hiệu/Sự cố</span>
                   <span className="text-base font-bold text-red-600">1</span>
                </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}
