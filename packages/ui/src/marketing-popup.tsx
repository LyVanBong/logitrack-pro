"use client";

import { X } from "lucide-react";
import { useState, useEffect } from "react";

export function MarketingPopup() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 right-4 z-[9999] animate-in slide-in-from-bottom-5 fade-in duration-500">
      <div className="relative overflow-hidden rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl w-[320px] p-5 flex flex-col gap-4">
        <button
          onClick={() => setIsVisible(false)}
          className="absolute top-2 right-2 p-1 rounded-full text-slate-400 hover:text-slate-600 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors z-10"
        >
          <X size={16} />
        </button>
        
        <div className="flex items-center gap-3 pr-4">
          <div className="w-12 h-12 rounded-xl bg-orange-600 flex items-center justify-center shrink-0 shadow-lg shadow-orange-500/20">
             <span className="text-white font-black text-xl tracking-tighter">S.</span>
          </div>
          <div>
            <h3 className="font-bold text-slate-900 dark:text-white leading-tight">Khám phá Softty.net</h3>
            <p className="text-[11px] text-slate-500 font-medium">Hệ sinh thái chuyển đổi số</p>
          </div>
        </div>

        <p className="text-[13px] text-slate-600 dark:text-slate-400 leading-relaxed">
          LogiTrack Pro là một sản phẩm thuộc hệ sinh thái <strong className="text-orange-600 dark:text-orange-500">Softty</strong>. Trải nghiệm giải pháp quản trị doanh nghiệp toàn diện dành riêng cho bạn!
        </p>

        <a
          href="https://softty.net"
          target="_blank"
          rel="noreferrer noopener"
          className="flex justify-center items-center py-2.5 text-sm font-bold text-white bg-slate-900 dark:bg-slate-800 hover:bg-slate-800 dark:hover:bg-slate-700 rounded-lg transition-colors w-full shadow-sm"
        >
          Truy cập Softty.net ngay
        </a>
      </div>
    </div>
  );
}
