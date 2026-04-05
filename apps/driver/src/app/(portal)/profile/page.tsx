"use client";

import { LogOut, User, BarChart3, Settings, HelpCircle, ChevronRight, ShieldCheck, MapPin } from "lucide-react";

export default function ProfilePage() {
  return (
    <div className="flex flex-col gap-8 pt-4 pb-20 w-full max-w-lg mx-auto sm:px-0 px-2 h-full">
      
      {/* HEADER */}
      <div className="flex items-center justify-between px-2 mb-2">
        <h1 className="text-4xl font-black text-tt-on-surface tracking-tight">Cá Nhân</h1>
      </div>

      {/* DRIVER CARD: Tactical Monolith (No-line, Premium Container) */}
      <section className="bg-tt-primary text-tt-on-primary p-6 rounded-[2rem] shadow-[0_24px_48px_rgba(0,105,72,0.3)] flex flex-col gap-8 relative overflow-hidden">
        {/* Abstract Background Decoration */}
        <div className="absolute -top-12 -right-12 w-48 h-48 bg-tt-primary-fixed/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-tt-primary-container/40 rounded-full blur-2xl"></div>

        <div className="flex items-center gap-5 relative z-10">
          <div className="w-20 h-20 rounded-[1.5rem] bg-tt-primary-container flex items-center justify-center shrink-0 shadow-inner">
            <User className="w-10 h-10 text-tt-on-primary/80" strokeWidth={2.5}/>
          </div>
          <div className="flex flex-col gap-1">
            <h2 className="text-3xl font-black tracking-tight leading-none">Nguyễn Văn A</h2>
            <div className="flex items-center gap-1.5 mt-2 bg-tt-primary-container/50 w-fit px-3 py-1.5 rounded-full backdrop-blur-sm">
              <ShieldCheck className="w-4 h-4 text-tt-primary-fixed" />
              <span className="text-sm font-bold tracking-wide">Tài xế Hạng C</span>
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center bg-tt-primary-container/30 backdrop-blur-md p-5 rounded-3xl relative z-10">
           <div className="flex flex-col gap-1">
             <span className="text-sm font-black text-tt-on-primary/70 tracking-widest uppercase">BIỂN SỐ XE</span>
             <span className="text-2xl font-black text-tt-primary-fixed tracking-tight">51C - 888.99</span>
           </div>
           <div className="h-10 w-px bg-tt-on-primary/20"></div>
           <div className="flex flex-col items-end gap-1">
             <span className="text-sm font-black text-tt-on-primary/70 tracking-widest uppercase">TRẠNG THÁI</span>
             <span className="text-sm font-black bg-tt-primary-fixed text-tt-primary px-4 py-1.5 rounded-full mt-1 tracking-wide">Sẵn sàng</span>
           </div>
        </div>
      </section>

      {/* STATS QUICK VIEW */}
      <section className="flex gap-4">
        <div className="flex-1 bg-tt-surface-lowest p-6 rounded-[2rem] shadow-[0_12px_32px_rgba(20,27,43,0.04)] flex flex-col justify-center items-center gap-2">
          <span className="text-5xl font-black text-tt-on-surface">12</span>
          <span className="text-xs font-black text-tt-on-surface-variant uppercase tracking-widest">Chuyến / Tháng</span>
        </div>
        <div className="flex-1 bg-tt-surface-lowest p-6 rounded-[2rem] shadow-[0_12px_32px_rgba(20,27,43,0.04)] flex flex-col justify-center items-center gap-2">
          <span className="text-5xl font-black text-tt-primary">850</span>
          <span className="text-xs font-black text-tt-on-surface-variant uppercase tracking-widest">KM Đã Chạy</span>
        </div>
      </section>

      {/* MENU LIST */}
      <section className="flex flex-col bg-tt-surface-lowest rounded-[2rem] shadow-[0_12px_32px_rgba(20,27,43,0.04)] overflow-hidden gap-1">
        <MenuItem icon={<User className="w-6 h-6 text-tt-primary-fixed" strokeWidth={2.5} />} title="Hồ sơ & Giấy tờ" />
        <MenuItem icon={<MapPin className="w-6 h-6 text-tt-primary" strokeWidth={2.5} />} title="Lịch sử chuyến đi" />
        <MenuItem icon={<BarChart3 className="w-6 h-6 text-tt-tertiary-container" strokeWidth={2.5} />} title="Thống kê thu nhập" />
        <MenuItem icon={<HelpCircle className="w-6 h-6 text-tt-secondary" strokeWidth={2.5} />} title="Trợ giúp & Báo cáo" />
        <MenuItem icon={<Settings className="w-6 h-6 text-tt-on-surface-variant" strokeWidth={2.5} />} title="Cài đặt ứng dụng" />
      </section>

      {/* LOGOUT BUTTON */}
      <button className="mt-8 mb-4 w-full h-[72px] bg-tt-tertiary-container/10 hover:bg-tt-tertiary-container/20 active:bg-tt-tertiary-container/30 text-tt-tertiary-container font-black text-xl rounded-2xl flex items-center justify-center gap-3 transition-colors">
        <LogOut className="w-6 h-6" strokeWidth={3} />
        <span className="tracking-widest">ĐĂNG XUẤT</span>
      </button>

    </div>
  );
}

function MenuItem({ icon, title }: { icon: React.ReactNode, title: string }) {
  return (
    <button className="w-full flex items-center justify-between p-6 bg-tt-surface-lowest active:bg-tt-surface transition-colors">
      <div className="flex items-center gap-5">
        <div className="w-12 h-12 rounded-[1rem] bg-tt-surface flex items-center justify-center shadow-inner">
          {icon}
        </div>
        <span className="font-black text-tt-on-surface text-lg tracking-wide">{title}</span>
      </div>
      <ChevronRight className="w-6 h-6 text-tt-outline-variant" strokeWidth={2.5} />
    </button>
  );
}
