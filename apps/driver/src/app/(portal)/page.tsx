"use client";

import { MapPin, Navigation, Package, Bell } from "lucide-react";
import Link from "next/link";

export default function TripsDashboard() {
  return (
    <div className="flex flex-col gap-6 pt-4 pb-20 px-2 sm:px-0">
      
      {/* HEADER GREETINGS */}
      <div className="flex justify-between items-center sm:hidden mb-4">
        <div className="flex flex-col">
          <p className="text-tt-on-surface-variant font-bold text-sm tracking-widest uppercase">Xin chào, Ký giả</p>
          <h1 className="text-3xl font-black text-tt-on-surface tracking-tight leading-none mt-1">Nguyễn Văn A</h1>
        </div>
        <div className="flex items-center gap-4">
          <Link href="/notifications" className="relative w-14 h-14 bg-tt-surface-lowest rounded-2xl flex items-center justify-center active:bg-tt-surface shadow-[0_8px_24px_rgba(20,27,43,0.03)] transition-colors">
             <Bell className="w-7 h-7 text-tt-on-surface" />
             <span className="absolute top-3 right-3 w-3.5 h-3.5 bg-tt-tertiary-container rounded-full border-[3px] border-tt-surface-lowest shadow-sm"></span>
          </Link>
          <Link href="/profile" className="w-14 h-14 rounded-2xl bg-tt-surface-high flex items-center justify-center overflow-hidden shrink-0 active:opacity-80 transition-opacity">
            <UserAvatar />
          </Link>
        </div>
      </div>

      {/* HIGHLIGHTED IN-PROGRESS TRIP CARD */}
      <section className="flex flex-col space-y-4">
        <h2 className="text-lg font-black text-tt-on-surface flex items-center gap-3">
          <span className="w-3 h-3 bg-tt-primary rounded-full shadow-[0_0_12px_rgba(0,105,72,0.8)] animate-pulse"></span>
          KIỂM LỆNH HIỆN TẠI
        </h2>
        
        {/*
          THE NO-LINE RULE: Remove all borders. 
          Use surface_container_lowest (#ffffff) on the surface_low (#f1f3ff) background.
        */}
        <div className="w-full bg-tt-surface-lowest rounded-[2rem] p-6 shadow-[0_20px_40px_rgba(20,27,43,0.04)] flex flex-col gap-6 relative overflow-hidden group">
          {/* Tag */}
          <div className="absolute top-0 right-0 bg-tt-primary text-tt-on-primary text-xs font-black tracking-widest px-5 py-2 rounded-bl-3xl">
            TẠI CẢNG
          </div>

          <div className="flex items-center gap-4 mt-2">
            <div className="w-14 h-14 rounded-2xl bg-tt-surface-high flex items-center justify-center shrink-0">
              <Package className="w-7 h-7 text-tt-on-surface" strokeWidth={2.5}/>
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-bold text-tt-primary tracking-widest uppercase">Lệnh Bao Bao</span>
              <h3 className="text-3xl font-black text-tt-on-surface leading-none mt-1">TT-8829-X01</h3>
            </div>
          </div>

          <div className="flex flex-col gap-5 bg-tt-surface p-5 rounded-3xl">
            <div className="flex gap-5 items-start">
               {/* Custom Timeline visual */}
               <div className="w-6 flex flex-col items-center mt-1.5 shrink-0">
                 <div className="w-4 h-4 rounded-full bg-tt-surface-high border-4 border-tt-surface-lowest shadow-sm z-10"></div>
                 <div className="w-1.5 h-10 bg-tt-surface-high"></div>
                 <div className="w-4 h-4 rounded-full bg-tt-primary border-4 border-tt-primary-container shadow-sm z-10"></div>
               </div>
               <div className="flex flex-col gap-6 w-full">
                  <div className="flex flex-col">
                     <span className="text-xs font-bold text-tt-on-surface-variant tracking-widest uppercase">Nhận Hàng</span>
                     <p className="text-lg font-bold text-tt-on-surface leading-snug">Cảng Cát Lái - Cổng B</p>
                  </div>
                  <div className="flex flex-col">
                     <span className="text-xs font-bold text-tt-on-surface-variant tracking-widest uppercase">Giao Hàng</span>
                     <p className="text-lg font-bold text-tt-on-surface leading-snug">KCN Nam Tân Uyên, B.Dương</p>
                  </div>
               </div>
            </div>
          </div>

          <div className="flex w-full mt-2">
             <Link href="/trips/tt-8829-x01" className="w-full">
               <button className="w-full h-[72px] bg-gradient-to-br from-tt-primary to-tt-primary-container active:opacity-90 text-tt-on-primary font-black text-xl rounded-2xl shadow-[0_12px_32px_rgba(0,105,72,0.3)] transition-all flex items-center justify-center gap-3">
                 VÀO LỆNH GIAO
                 <Navigation className="w-6 h-6 fill-white" />
               </button>
             </Link>
          </div>
        </div>
      </section>

      {/* QUEUED ORDERS */}
      <section className="flex flex-col space-y-4 mt-8">
        <h2 className="text-sm font-black text-tt-on-surface-variant tracking-widest uppercase">
          CHỜ NHẬN (2 LỆNH)
        </h2>
        
        <div className="flex flex-col gap-4">
          {[1, 2].map(i => (
            <div key={i} className="w-full bg-tt-surface-lowest rounded-3xl p-5 shadow-[0_8px_24px_rgba(20,27,43,0.02)] flex flex-col gap-5">
               <div className="flex justify-between items-center w-full">
                 <div className="flex items-center gap-3">
                   <div className="w-10 h-10 rounded-full bg-tt-surface-high flex items-center justify-center">
                     <MapPin className="w-5 h-5 text-tt-on-surface" />
                   </div>
                   <span className="font-black text-tt-on-surface text-xl">LC-00{i}-HN</span>
                 </div>
                 <span className="text-xs font-bold bg-tt-surface text-tt-on-surface-variant px-4 py-1.5 rounded-full tracking-wider">HÔM NAY</span>
               </div>
               
               <p className="text-base font-semibold text-tt-on-surface-variant leading-relaxed px-1">
                 ICD Sóng Thần → KCN Biên Hòa 2
               </p>
               
               <div className="flex gap-3 w-full pt-2">
                 <button className="h-16 flex-[2] bg-tt-on-surface active:bg-tt-surface-highest active:text-tt-on-surface text-tt-on-primary font-black text-lg rounded-2xl flex items-center justify-center transition-colors">
                   NHẬN LỆNH
                 </button>
                 <button className="h-16 flex-1 bg-tt-surface active:bg-tt-surface-high text-tt-on-surface-variant font-bold text-base rounded-2xl flex items-center justify-center transition-colors shadow-inner">
                   TỪ CHỐI
                 </button>
               </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}

function UserAvatar() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8 text-tt-on-surface-variant" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}
