"use client";

import { Send, UploadCloud, ChevronDown, CheckCircle, Clock } from "lucide-react";

export default function CashAdvanceScreen() {
  return (
    <div className="flex flex-col gap-6 pt-4 pb-24 max-w-xl mx-auto w-full px-2 sm:px-0 h-full">
      <div className="flex flex-col gap-1 px-2 mb-2">
        <h1 className="text-4xl font-black text-tt-on-surface tracking-tight">Ứng Tiền</h1>
        <p className="text-tt-on-surface-variant font-black tracking-widest text-xs uppercase mt-1">Chỉ nộp ứng phí đường bộ, dầu, sửa chữa</p>
      </div>

      <form className="flex flex-col gap-6 mt-4">
        {/* DROPDOWN - LOẠI CHI PHÍ */}
        <div className="flex flex-col gap-3">
           <label className="text-sm font-black text-tt-on-surface-variant uppercase tracking-widest pl-1">LOẠI PHÍ</label>
           <div className="relative">
             <select className="w-full h-16 bg-tt-surface-lowest rounded-[1.5rem] px-6 text-lg font-black text-tt-on-surface appearance-none focus:outline-none ring-2 ring-transparent focus:ring-tt-primary/30 transition-all shadow-[0_8px_24px_rgba(20,27,43,0.04)]">
                <option value="toll">Vé Cầu Đường</option>
                <option value="fuel">Đổ Dầu</option>
                <option value="repair">Sửa Chữa / Nổ Lốp</option>
                <option value="fine">Phạt Hành Chính</option>
             </select>
             <ChevronDown className="absolute right-6 top-5 w-6 h-6 text-tt-on-surface-variant pointer-events-none" strokeWidth={2.5}/>
           </div>
        </div>

        {/* INPUT TIỀN */}
        <div className="flex flex-col gap-3">
           <label className="text-sm font-black text-tt-on-surface-variant uppercase tracking-widest pl-1">SỐ TIỀN (VNĐ)</label>
           <div className="relative">
             <input 
               type="text" 
               inputMode="numeric" 
               placeholder="0"
               className="w-full h-24 bg-tt-surface-lowest rounded-[2rem] px-6 pr-20 text-5xl font-black text-tt-on-surface focus:outline-none ring-2 ring-transparent focus:ring-tt-primary/40 transition-all shadow-[0_12px_32px_rgba(20,27,43,0.04)] tracking-widest placeholder:text-tt-on-surface-variant/30"
             />
             <span className="absolute right-6 top-1/2 -translate-y-1/2 font-black text-2xl text-tt-on-surface-variant select-none">đ</span>
           </div>
        </div>

        {/* UPLOAD BILL */}
        <div className="flex flex-col gap-3 mt-4">
           <label className="text-sm font-black text-tt-on-surface-variant uppercase tracking-widest pl-1">HÌNH ẢNH ĐÍNH KÈM</label>
           <div className="w-full h-36 bg-tt-surface-highest rounded-[2rem] flex flex-col items-center justify-center gap-4 active:bg-tt-surface transition-colors shadow-inner group">
              <UploadCloud className="w-10 h-10 text-tt-on-surface-variant group-hover:scale-110 transition-transform" strokeWidth={2.5}/>
              <span className="text-base font-black text-tt-on-surface tracking-wide">Chụp vé hoặc Hóa đơn</span>
           </div>
        </div>

        {/* GỬI ỨNG TIỀN */}
        <section className="fixed bottom-0 left-0 w-full p-4 bg-tt-surface-low z-50 sm:relative sm:p-0 sm:bg-transparent pb-safe mt-4">
          <button type="button" className="w-full h-[72px] bg-gradient-to-br from-tt-primary to-tt-primary-container active:opacity-90 active:scale-[0.98] text-tt-on-primary font-black text-xl tracking-widest rounded-2xl shadow-[0_12px_32px_rgba(0,105,72,0.3)] flex items-center justify-center gap-3 transition-all">
            GỬI KẾ TOÁN ƯỚC TÍNH
            <Send className="w-6 h-6 ml-1 fill-white" />
          </button>
        </section>
      </form>

      {/* LỊCH SỬ TẠM ỨNG */}
      <section className="flex flex-col mt-8 pt-4 gap-5">
         <h2 className="text-sm font-black text-tt-on-surface-variant tracking-widest uppercase pl-1">GIAO DỊCH VỪA GỬI</h2>
         
         <div className="flex flex-col gap-4">
            <div className="w-full p-5 bg-tt-surface-lowest rounded-[2rem] flex items-center justify-between shadow-[0_8px_24px_rgba(20,27,43,0.04)] relative overflow-hidden active:scale-[0.98] transition-transform">
               <div className="absolute top-0 bottom-0 left-0 w-2 bg-tt-warning"></div>
               <div className="flex gap-4 items-center">
                 <div className="w-12 h-12 rounded-[1rem] bg-tt-surface flex items-center justify-center shrink-0">
                    <Clock className="w-6 h-6 text-tt-on-surface-variant" strokeWidth={2.5} />
                 </div>
                 <div className="flex flex-col gap-1">
                    <span className="font-black text-tt-on-surface text-lg uppercase tracking-wide">Vá màng lốp</span>
                    <span className="font-bold text-tt-on-surface-variant text-[13px]">15:30 - Hôm nay</span>
                 </div>
               </div>
               <div className="flex flex-col items-end gap-1">
                  <span className="font-black text-tt-on-surface text-2xl tracking-tight">150k</span>
                  <span className="text-[11px] font-black text-tt-warning mt-1 uppercase tracking-widest">Chờ Duyệt</span>
               </div>
            </div>

            <div className="w-full p-5 bg-tt-surface-lowest rounded-[2rem] flex items-center justify-between shadow-[0_8px_24px_rgba(20,27,43,0.04)] relative overflow-hidden active:scale-[0.98] transition-transform">
               <div className="absolute top-0 bottom-0 left-0 w-2 bg-tt-primary"></div>
               <div className="flex gap-4 items-center">
                 <div className="w-12 h-12 rounded-[1rem] bg-tt-primary-container/10 flex items-center justify-center shrink-0 text-tt-primary">
                    <CheckCircle className="w-6 h-6" strokeWidth={2.5}/>
                 </div>
                 <div className="flex flex-col gap-1">
                    <span className="font-black text-tt-on-surface text-lg uppercase tracking-wide">Vé Cầu Đồng Nai</span>
                    <span className="font-bold text-tt-on-surface-variant text-[13px]">12:15 - Hôm qua</span>
                 </div>
               </div>
               <div className="flex flex-col items-end gap-1">
                  <span className="font-black text-tt-on-surface text-2xl tracking-tight">250k</span>
                  <span className="text-[11px] font-black text-tt-primary mt-1 uppercase tracking-widest">Đã ck</span>
               </div>
            </div>
         </div>
      </section>

    </div>
  );
}
