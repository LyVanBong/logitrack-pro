"use client";

import { useState } from "react";
import { AlertOctagon, PhoneCall, MapPin, Wrench, X } from "lucide-react";

// Safe haptic feedback wrapper (ignored by iOS Safari)
const triggerHaptic = (pattern: number | number[] = [200]) => {
  if (typeof window !== "undefined" && "vibrate" in navigator) {
    navigator.vibrate(pattern);
  }
};

export function SosButton() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Floating SOS Button */}
      <button
        onClick={() => {
          triggerHaptic([200, 100, 200]); // SOS vibration pattern
          setIsOpen(true);
        }}
        className="fixed bottom-[110px] right-4 w-14 h-14 bg-red-600 hover:bg-red-700 text-white rounded-full shadow-[0_8px_32px_rgba(220,38,38,0.4)] flex items-center justify-center z-40 transition-transform active:scale-90"
      >
        <AlertOctagon size={28} className="animate-pulse" />
      </button>

      {/* SOS Modal Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-[100] bg-slate-900/60 backdrop-blur-sm flex items-end sm:items-center justify-center">
          <div className="w-full sm:w-[400px] bg-white rounded-t-3xl sm:rounded-3xl p-6 shadow-2xl animate-in slide-in-from-bottom-10 fade-in duration-300">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3 text-red-600">
                <AlertOctagon size={28} />
                <h2 className="text-xl font-black tracking-tight">SOS / Khẩn Cấp</h2>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center text-slate-500 active:scale-95 transition-transform"
              >
                <X size={20} />
              </button>
            </div>

            <p className="text-slate-500 font-medium text-sm mb-6">
              Bạn đang gặp sự cố trên đường? Chọn loại sự cố để hệ thống gửi định vị và thông báo ngay đến bộ phận Điều vận.
            </p>

            <div className="space-y-4">
              <button onClick={() => triggerHaptic([100])} className="w-full flex items-center gap-4 p-4 rounded-2xl bg-orange-50 hover:bg-orange-100 text-orange-700 font-bold active:scale-[0.98] transition-all">
                <Wrench size={24} />
                <span className="text-left flex-1">
                  Xe Hỏng / Thủng Lốp
                  <span className="block text-xs font-medium opacity-80 mt-0.5">Gửi yêu cầu cứu hộ kỹ thuật</span>
                </span>
              </button>
              
              <button onClick={() => triggerHaptic([100])} className="w-full flex items-center gap-4 p-4 rounded-2xl bg-red-50 hover:bg-red-100 text-red-700 font-bold active:scale-[0.98] transition-all">
                <AlertOctagon size={24} />
                <span className="text-left flex-1">
                  Tai Nạn / Tắc Đường Khách Quan
                  <span className="block text-xs font-medium opacity-80 mt-0.5">Cảnh báo chậm trễ tiến trình</span>
                </span>
              </button>

              <div className="my-6 border-t border-slate-100"></div>

              <button onClick={() => triggerHaptic([500])} className="w-full flex items-center justify-center gap-2 p-4 rounded-2xl bg-slate-900 text-white font-bold active:scale-[0.98] transition-all">
                <PhoneCall size={20} />
                Gọi Ngay Trực Ban Cứu Hộ
              </button>
            </div>

            <div className="mt-6 flex justify-center items-center gap-2 text-xs font-semibold text-slate-400">
              <MapPin size={14} className="text-emerald-500" />
              Vị trí GPS của bạn đã được đính kèm tự động
            </div>
          </div>
        </div>
      )}
    </>
  );
}
