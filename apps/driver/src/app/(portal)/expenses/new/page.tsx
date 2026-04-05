"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Camera, Send } from "lucide-react";

export default function NewExpensePage() {
  const [amount, setAmount] = useState("");
  const [type, setType] = useState("fuel");

  const types = [
    { id: "fuel", label: "Đổ Dầu" },
    { id: "toll", label: "Cầu Đường" },
    { id: "repair", label: "Sửa Chữa" },
    { id: "other", label: "Khác" }
  ];

  // Auto format currency
  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, "");
    if (value === "") {
      setAmount("");
      return;
    }
    const formatter = new Intl.NumberFormat("vi-VN");
    setAmount(formatter.format(Number(value)));
  };

  return (
    <div className="flex flex-col gap-8 pt-4 pb-28 h-full relative w-full max-w-lg mx-auto sm:px-0 px-2">
      
      {/* HEADER NAV */}
      <div className="flex items-center gap-4">
        <Link href="/">
          <button className="w-14 h-14 bg-tt-surface-lowest rounded-2xl shadow-[0_8px_24px_rgba(20,27,43,0.03)] flex items-center justify-center active:bg-tt-surface transition-colors">
            <ArrowLeft className="w-7 h-7 text-tt-on-surface" />
          </button>
        </Link>
        <span className="font-black text-tt-on-surface text-2xl tracking-tight">
          Tạo Đề Nghị Chi
        </span>
      </div>

      <div className="flex flex-col space-y-10 mt-2">
        
        {/* HUGE AMOUNT INPUT: The Ghost Border on focus */}
        <section className="flex flex-col gap-2">
           <span className="text-sm font-black text-tt-on-surface-variant uppercase tracking-widest pl-1">SỐ TIỀN THỰC TẾ (VNĐ)</span>
           <div className="w-full bg-tt-surface-lowest rounded-[2rem] p-6 flex flex-col items-center justify-center shadow-[0_12px_32px_rgba(20,27,43,0.04)] relative ring-2 ring-transparent focus-within:ring-tt-primary/40 focus-within:shadow-[0_12px_40px_rgba(0,105,72,0.1)] transition-all">
             <input 
               type="text" 
               inputMode="numeric"
               value={amount}
               onChange={handleAmountChange}
               placeholder="0"
               className="w-full text-center text-6xl font-black text-tt-on-surface bg-transparent outline-none placeholder:text-tt-on-surface-variant/30"
             />
             <div className="absolute top-1/2 -translate-y-1/2 right-6">
               <span className="text-3xl font-black text-tt-on-surface-variant select-none">đ</span>
             </div>
           </div>
        </section>

        {/* EXPENSE TYPE */}
        <section className="flex flex-col gap-3">
           <span className="text-sm font-black text-tt-on-surface-variant uppercase tracking-widest pl-1">LOẠI CHI PHÍ</span>
           <div className="grid grid-cols-2 gap-3">
             {types.map((t) => (
               <button 
                 key={t.id}
                 onClick={() => setType(t.id)}
                 className={`h-16 rounded-[1.5rem] font-black text-[16px] tracking-wide transition-all shadow-sm ${
                   type === t.id 
                     ? "bg-tt-on-surface text-tt-on-primary ring-2 ring-tt-on-surface shadow-[0_8px_24px_rgba(20,27,43,0.15)]" 
                     : "bg-tt-surface-highest text-tt-on-surface-variant hover:bg-tt-surface-lowest hover:text-tt-on-surface active:bg-tt-surface"
                 }`}
               >
                 {t.label}
               </button>
             ))}
           </div>
        </section>

        {/* RECEIPT UPLOAD / CAMERA (DOTTED BOX -> Tonal Shift with active state) */}
        <section className="flex flex-col gap-3">
           <span className="text-sm font-black text-tt-on-surface-variant uppercase tracking-widest pl-1">HÌNH ẢNH CHỨNG TỪ</span>
           <button className="w-full h-48 rounded-[2rem] relative bg-tt-surface-highest text-tt-on-surface hover:bg-tt-surface-lowest active:bg-tt-surface flex flex-col items-center justify-center gap-4 transition-colors group overflow-hidden shadow-inner">
              <Camera className="w-12 h-12 text-tt-on-surface-variant group-hover:scale-110 transition-transform" strokeWidth={2.5}/>
              <div className="flex flex-col items-center gap-1">
                <span className="font-black text-tt-on-surface text-lg">Bấm để Chụp ảnh</span>
                <span className="font-semibold text-tt-on-surface-variant text-sm">Hoặc tải lên từ thư viện máy</span>
              </div>
           </button>
        </section>

      </div>

      {/* STICKY BOTTOM SUBMIT */}
      <section className="fixed bottom-0 left-0 w-full p-4 bg-tt-surface-low z-50 sm:relative sm:p-0 sm:mt-12 sm:bg-transparent pb-safe">
        <button className="w-full h-[72px] bg-gradient-to-br from-tt-primary to-tt-primary-container active:opacity-90 text-tt-on-primary font-black text-xl tracking-widest rounded-2xl shadow-[0_12px_32px_rgba(0,105,72,0.3)] transition-all flex items-center justify-center gap-3">
          GỬI YÊU CẦU ĐỀ NGHỊ
          <Send className="w-6 h-6 ml-1 fill-white" />
        </button>
      </section>

    </div>
  );
}
