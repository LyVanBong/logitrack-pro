"use client";

import { useState, useEffect } from "react";
import { X, ArrowRight } from "lucide-react";

export function MarketingPopup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const hasShown = sessionStorage.getItem("softty_popup_shown");
    if (!hasShown) {
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
    window.open("https://softty.net", "_blank");
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm animate-in fade-in duration-300 px-4">
      <div
        className="relative w-full max-w-md overflow-hidden rounded-2xl bg-white shadow-2xl dark:bg-slate-900 animate-in zoom-in-95 duration-500 ease-out"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Decorative Header */}
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-br from-indigo-900 to-purple-900">
           <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMSIvPgo8cGF0aCBkPSJNMCAwTDQgNFpNNCBMIDQgMFoiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLW9wYWNpdHk9IjAuMSIvPjwvc3ZnPg==')] mix-blend-overlay"></div>
        </div>

        <button
          onClick={handleClose}
          className="absolute top-4 right-4 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-white/20 text-white hover:bg-white/40 backdrop-blur-md transition-colors"
        >
          <X className="h-4 w-4" />
        </button>

        <div className="relative pt-24 px-8 pb-8 text-center flex flex-col items-center">
            <div className="mb-4 flex h-24 w-24 items-center justify-center rounded-2xl bg-white shadow-xl border-4 border-white p-1 overflow-hidden relative z-20 -mt-12">
               <div className="w-full h-full relative flex items-center justify-center bg-gradient-to-br from-indigo-900 to-purple-900 rounded-xl overflow-hidden p-2">
                 <svg className="w-full h-full" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                   <path d="M50 0L93.3013 25V75L50 100L6.69873 75V25L50 0Z" fill="url(#paint0_linear)"/>
                   <path d="M50 15L80.3109 32.5V67.5L50 85L19.6891 67.5V32.5L50 15Z" fill="white" fillOpacity="0.2"/>
                   <path d="M50 30L67.3205 40V60L50 70L32.6795 60V40L50 30Z" fill="white"/>
                   <defs>
                     <linearGradient id="paint0_linear" x1="50" y1="0" x2="50" y2="100" gradientUnits="userSpaceOnUse">
                       <stop stopColor="#6366F1"/>
                       <stop offset="1" stopColor="#8B5CF6"/>
                     </linearGradient>
                   </defs>
                 </svg>
               </div>
            </div>

            <h2 className="mb-2 text-2xl font-bold tracking-tight text-slate-900 dark:text-white mt-1">
               Softty Architect
            </h2>
            <h3 className="mb-4 font-bold text-indigo-600">
               Giải pháp phần mềm toàn diện
            </h3>

            <p className="mb-8 text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-medium">
              Chào mừng bạn đến với hệ sinh thái của Softty. Khám phá các công cụ thông minh, dễ tích hợp và an toàn nhằm thúc đẩy số hóa mạnh mẽ cho doanh nghiệp bạn. 
            </p>

            <div className="flex w-full flex-col gap-3 sm:flex-row justify-center">
               <button onClick={handleClose} className="w-full sm:w-auto font-bold h-11 border border-slate-200 shadow-sm rounded-md px-8 hover:bg-slate-50 transition text-sm">
                 Bỏ qua
               </button>
               <button onClick={handleVisit} className="w-full sm:w-auto bg-indigo-600 rounded-md hover:bg-indigo-700 text-white font-bold h-11 px-8 group relative overflow-hidden shadow-lg shadow-indigo-600/20 text-sm">
                 <span className="relative z-10 flex items-center justify-center">
                   Ghé thăm softty.net
                   <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                 </span>
                 <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
               </button>
            </div>
        </div>
      </div>
    </div>
  );
}
