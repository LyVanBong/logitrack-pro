"use client";

import { Camera, FileText, Check, FileSignature } from "lucide-react";

export default function DocumentUploadScreen() {
  return (
    <div className="flex flex-col gap-6 pt-4 pb-28 max-w-xl mx-auto w-full px-2 sm:px-0 h-full">
      <div className="flex flex-col gap-1 px-2 mb-2">
        <h1 className="text-4xl font-black text-tt-on-surface tracking-tight">Chứng Từ (e-POD)</h1>
        <p className="text-tt-on-surface-variant font-black tracking-widest text-xs uppercase mt-1">Lệnh: TT-8829-X01 | Cont: TCLU-123456</p>
      </div>

      {/* SEAL CAPTURE */}
      <section className="flex flex-col gap-4">
        <div className="flex justify-between items-center px-1">
           <h2 className="text-sm font-black text-tt-on-surface-variant uppercase tracking-widest pl-1">1. Kẹp Chì (Seals)</h2>
           <span className="text-xs font-black bg-tt-tertiary-container/10 text-tt-tertiary-container px-3 py-1 rounded-full tracking-widest">BẮT BUỘC</span>
        </div>
        
        <div className="w-full aspect-[4/3] bg-tt-surface-highest rounded-[2rem] flex flex-col items-center justify-center gap-4 active:bg-tt-surface transition-colors mx-auto relative overflow-hidden group shadow-inner">
           <div className="w-20 h-20 bg-tt-surface-lowest rounded-[1.5rem] flex items-center justify-center group-hover:scale-110 transition-transform shadow-[0_8px_24px_rgba(20,27,43,0.06)]">
              <Camera className="w-10 h-10 text-tt-on-surface" strokeWidth={2.5}/>
           </div>
           <span className="text-xl font-black text-tt-on-surface-variant tracking-wide">Chạm để mở Camera</span>
        </div>
      </section>

      {/* e-POD DELIVERY NOTE */}
      <section className="flex flex-col gap-4 mt-6">
        <div className="flex justify-between items-center px-1">
           <h2 className="text-sm font-black text-tt-on-surface-variant uppercase tracking-widest pl-1">2. Phiếu Giao Nhận</h2>
           <span className="text-xs font-black bg-tt-tertiary-container/10 text-tt-tertiary-container px-3 py-1 rounded-full tracking-widest">BẮT BUỘC</span>
        </div>
        
        <div className="w-full aspect-[4/3] bg-tt-surface-highest rounded-[2rem] flex flex-col items-center justify-center gap-4 active:bg-tt-surface transition-colors mx-auto relative overflow-hidden group shadow-inner">
           <div className="w-20 h-20 bg-tt-surface-lowest rounded-[1.5rem] flex items-center justify-center group-hover:scale-110 transition-transform shadow-[0_8px_24px_rgba(20,27,43,0.06)]">
              <FileText className="w-10 h-10 text-tt-primary" strokeWidth={2.5}/>
           </div>
           <span className="text-xl font-black text-tt-on-surface-variant tracking-wide">Chụp phiếu Giao nhận</span>
        </div>
      </section>

      {/* DIGITAL SIGNATURE - KHÁCH KÝ */}
      <section className="flex flex-col gap-4 mt-6">
        <h2 className="text-sm font-black text-tt-on-surface-variant uppercase tracking-widest pl-1 px-1">3. Khách hàng ký nhận</h2>
        
        <div className="w-full h-48 bg-tt-surface-lowest rounded-[2rem] flex items-center justify-center relative shadow-[0_12px_32px_rgba(20,27,43,0.04)]">
           <FileSignature className="absolute w-8 h-8 text-tt-outline-variant/50 top-6 right-6" strokeWidth={2.5} />
           <span className="text-tt-on-surface-variant/50 font-black text-xl select-none tracking-wide">Khách ký trực tiếp vào đây</span>
        </div>
      </section>

      {/* FINAL ACTION */}
      <section className="fixed bottom-0 left-0 w-full p-4 bg-tt-surface-low z-50 sm:relative sm:p-0 sm:mt-10 sm:bg-transparent pb-safe">
        <button className="w-full h-[72px] bg-gradient-to-br from-tt-primary to-tt-primary-container active:opacity-90 text-tt-on-primary font-black text-xl rounded-2xl shadow-[0_12px_32px_rgba(0,105,72,0.3)] flex items-center justify-center gap-3 tracking-widest uppercase transition-all">
          NỘP BÁO CÁO CÔNG VIỆC
          <Check className="w-7 h-7 stroke-[3px]" />
        </button>
      </section>

    </div>
  );
}
