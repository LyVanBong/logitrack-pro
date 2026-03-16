"use client";

import { useState, useEffect } from "react";
import { X, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function MarketingPopup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Check if the popup has been shown in this session
    const hasShown = sessionStorage.getItem("softty_popup_shown");
    if (!hasShown) {
      // Delay slightly for effect so the user sees the dashboard load first
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    sessionStorage.setItem("softty_popup_shown", "true");
  };

  const handleVisit = () => {
    handleClose();
    window.open("https://www.softty.net", "_blank");
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm animate-in fade-in duration-300 px-4">
      <div 
        className="relative w-full max-w-md overflow-hidden rounded-2xl bg-white shadow-2xl dark:bg-slate-900 animate-in zoom-in-95 duration-500 ease-out"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Decorative Header */}
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-br from-blue-600 to-indigo-700">
           {/* Fallback pattern if no image */}
           <div className="absolute inset-0 opacity-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMSIvPgo8cGF0aCBkPSJNMCAwTDQgNFpNNCBMIDQgMFoiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLW9wYWNpdHk9IjAuMSIvPjwvc3ZnPg==')] mix-blend-overlay"></div>
        </div>
        
        <button 
          onClick={handleClose}
          className="absolute top-4 right-4 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-white/20 text-white hover:bg-white/40 backdrop-blur-md transition-colors"
        >
          <X className="h-4 w-4" />
        </button>

        <div className="relative pt-24 px-8 pb-8 text-center flex flex-col items-center">
            <div className="mb-4 flex h-24 w-24 items-center justify-center rounded-2xl bg-white shadow-xl border-4 border-white p-1 overflow-hidden relative z-20 -mt-12">
               <img 
                 src="/softty-icon.png" 
                 alt="Softty.Net" 
                 onError={(e) => {
                   (e.target as HTMLImageElement).src = "/icon.png" // Fallback to app icon if failed
                 }}
                 style={{ width: "100%", height: "100%", objectFit: "contain", display: "block" }}
               />
            </div>
            
            <h2 className="mb-2 text-2xl font-bold tracking-tight text-slate-900 dark:text-white mt-2">
               Softty.Net
            </h2>
            <h3 className="mb-4 font-medium text-emerald-600 dark:text-emerald-400">
               Giải Pháp Phần Mềm Toàn Diện
            </h3>
            
            <p className="mb-8 text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
              Tự động hoá thành công với dịch vụ phát triển phần mềm chuyên nghiệp, ứng dụng AI, kiến trúc Cloud và tư vấn chuyển đổi số doanh nghiệp. <br/><br/>
              <b>Thấu Hiểu Thách Thức - Vượt Trội Giải Pháp.</b>
            </p>

            <div className="flex w-full flex-col gap-3 sm:flex-row justify-center">
               <Button onClick={handleClose} variant="outline" className="w-full sm:w-auto font-medium">
                 Đóng lại
               </Button>
               <Button onClick={handleVisit} className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white font-medium group relative overflow-hidden">
                 <span className="relative z-10 flex items-center">
                   Khám phá ngay
                   <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                 </span>
                 <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
               </Button>
            </div>
        </div>
      </div>
    </div>
  );
}
