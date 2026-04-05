"use client";

import { Truck, ChevronRight } from "lucide-react";
import Link from "next/link";

export default function LoginScreen() {
  return (
    <div className="flex flex-col h-[100dvh] bg-tt-surface text-tt-on-surface justify-center p-6 sm:p-10 max-w-lg mx-auto w-full relative overflow-hidden">
      
      {/* Abstract Background Decoration */}
      <div className="absolute -top-12 -right-12 w-64 h-64 bg-tt-primary-fixed/20 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-tt-primary-container/20 rounded-full blur-2xl pointer-events-none"></div>

      <div className="flex-1 flex flex-col justify-center items-center relative z-10 -mt-10">
        
        {/* LOGO CORPORATE MINIMALIST */}
        <div className="flex flex-col items-center gap-4 mb-12 w-full justify-center">
          <div className="w-20 h-20 bg-tt-primary rounded-[2rem] flex items-center justify-center rotate-3 shadow-[0_12px_32px_rgba(0,105,72,0.3)] mx-auto relative group transition-transform active:rotate-0">
            <div className="absolute inset-0 bg-tt-primary-container/20 rounded-[2rem] shadow-inner pointer-events-none"></div>
            <Truck className="w-10 h-10 text-tt-on-primary -rotate-3 group-active:rotate-0 transition-transform" strokeWidth={2.5} />
          </div>
          <div className="flex flex-col items-center mt-2">
            <span className="text-4xl font-black tracking-tighter leading-none text-tt-on-surface">LT</span>
            <span className="text-sm font-black text-tt-primary tracking-[0.2em] leading-none mt-2">LOGISTICS</span>
          </div>
        </div>

        <form className="w-full space-y-6 flex flex-col items-center">
          
          <div className="w-full space-y-2">
            <label className="text-sm font-black text-tt-on-surface-variant uppercase tracking-widest pl-2">SỐ ĐIỆN THOẠI / ID</label>
            <input 
              type="tel"
              inputMode="numeric"
              placeholder="09xx xxx xxx"
              className="w-full h-[72px] bg-tt-surface-lowest rounded-3xl px-6 text-2xl font-black text-tt-on-surface focus:outline-none ring-2 ring-transparent focus:ring-tt-primary/40 transition-all shadow-[0_12px_32px_rgba(20,27,43,0.04)] placeholder:text-tt-on-surface-variant/30 tracking-widest"
            />
          </div>

          <div className="w-full space-y-2 mt-4">
            <div className="flex items-center justify-between px-2">
              <label className="text-sm font-black text-tt-on-surface-variant uppercase tracking-widest">MÃ PIN</label>
              <button type="button" className="text-xs font-black text-tt-primary active:text-tt-primary-container tracking-widest bg-tt-primary/10 hover:bg-tt-primary/20 px-3 py-1.5 rounded-full transition-colors uppercase">
                QUÊN PIN?
              </button>
            </div>
            <input 
              type="password"
              inputMode="numeric"
              placeholder="••••••"
              className="w-full h-[72px] bg-tt-surface-lowest rounded-3xl px-6 text-3xl font-black text-tt-on-surface focus:outline-none ring-2 ring-transparent focus:ring-tt-primary/40 transition-all shadow-[0_12px_32px_rgba(20,27,43,0.04)] placeholder:text-tt-on-surface-variant/30 tracking-[0.3em]"
            />
          </div>

          {/* OVERSized Action Button */}
          <Link href="/" className="w-full mt-8">
            <button 
              type="button" 
              className="w-full h-[80px] bg-gradient-to-br from-tt-primary to-tt-primary-container active:opacity-90 text-tt-on-primary font-black text-xl rounded-[2rem] shadow-[0_16px_40px_rgba(0,105,72,0.4)] flex items-center justify-center gap-3 transition-transform active:scale-[0.98] tracking-widest"
            >
              VÀO HỆ THỐNG
              <ChevronRight className="w-7 h-7 stroke-[3px]" />
            </button>
          </Link>
        </form>

      </div>
      
      <div className="pb-8 shrink-0 text-center w-full relative z-10 flex flex-col gap-2 items-center">
        <p className="text-xs font-black text-tt-on-surface-variant/40 tracking-widest uppercase">
          LT Architect Core &copy; 2026
        </p>
        <span className="text-[10px] font-bold text-tt-primary/50 tracking-widest bg-tt-primary/5 px-2 py-0.5 rounded-md">
          v1.0.0 Tactical
        </span>
      </div>
    </div>
  );
}
