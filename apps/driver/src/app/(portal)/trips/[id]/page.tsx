"use client";

import { use, useState } from "react";
import Link from "next/link";
import { ArrowLeft, Map as MapIcon, ShieldAlert, ScanBarcode, Box } from "lucide-react";
import { QrScannerOverlay } from "../../../../components/qr-scanner";

export default function TripExecution({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params);
  const [swiped, setSwiped] = useState(false);
  const [isScannerOpen, setScannerOpen] = useState(false);
  const [scannedCode, setScannedCode] = useState<string | null>(null);

  const handleScanSuccess = (code: string) => {
    setScannedCode(code);
    setTimeout(() => {
      setScannerOpen(false);
    }, 1500);
  };

  return (
    <div className="flex flex-col gap-8 pt-4 pb-28 h-full relative px-2 sm:px-0">
      
      {/* HEADER NAV */}
      <div className="flex items-center gap-4">
        <Link href="/">
          <button className="w-14 h-14 bg-tt-surface-lowest rounded-2xl shadow-[0_8px_24px_rgba(20,27,43,0.03)] flex items-center justify-center active:bg-tt-surface transition-colors">
            <ArrowLeft className="w-7 h-7 text-tt-on-surface" />
          </button>
        </Link>
        <span className="font-black text-tt-on-surface-variant text-base tracking-widest uppercase">
          LỆNH: {resolvedParams.id}
        </span>
      </div>

      {/* FOCUS MODE: CURRENT DESTINATION */}
      <section className="flex flex-col mt-4">
        <span className="text-sm font-black text-tt-primary mb-3 uppercase tracking-widest">
          ĐIỂM ĐẾN TIẾP THEO
        </span>
        <h1 className="text-5xl sm:text-6xl font-black text-tt-on-surface leading-[1.05] tracking-tight mb-3">
          Cảng Cát Lái
          <br /> Cổng B
        </h1>
        <p className="text-xl font-bold text-tt-on-surface-variant">
          Q.2, TP.HCM
        </p>

        {/* CONTAINER INFO */}
        <div className="mt-10 bg-tt-surface-highest text-tt-on-surface p-6 rounded-[2rem] flex flex-col gap-6 shadow-[0_20px_40px_rgba(20,27,43,0.05)]">
          <div className="flex items-center justify-between">
            <div className="flex flex-col gap-1">
              <span className="text-sm font-black text-tt-on-surface-variant tracking-widest uppercase">BIỂN SỐ XE</span>
              <span className="text-3xl font-black text-tt-on-surface tracking-tight">51C-888.99</span>
            </div>
            <div className="h-12 w-px bg-tt-outline-variant/30 mx-4"></div>
            <div className="flex flex-col items-end gap-1">
              <span className="text-sm font-black text-tt-on-surface-variant tracking-widest uppercase">SỐ CONT</span>
              <span className="text-2xl font-black text-tt-primary tracking-tight">TCLU-123456</span>
            </div>
          </div>

          {/* SCANNED CODE STATUS */}
          {scannedCode && (
            <div className="pt-4 border-t border-tt-outline-variant/20 flex items-center justify-between animate-in slide-in-from-top-2 fade-in">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center">
                  <Box size={20} />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-tt-on-surface-variant uppercase tracking-widest">MÃ KẸP CHÌ XÁC NHẬN</span>
                  <span className="text-lg font-black text-emerald-600">{scannedCode}</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* MOCKUP OF A TALL PUSH/SWIPE BUTTON */}
      <section className="mt-auto flex flex-col items-center gap-5 w-full">
        <div 
           className={`w-full h-24 rounded-[2.5rem] relative overflow-hidden transition-all duration-300 ${
             swiped ? "bg-tt-primary shadow-[0_12px_32px_rgba(0,105,72,0.3)]" : "bg-tt-surface-lowest shadow-[0_20px_40px_rgba(20,27,43,0.05)]"
           }`}
           onClick={() => setSwiped(!swiped)}
        >
          <div className={`absolute top-0 bottom-0 left-0 bg-tt-primary transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] flex items-center justify-center z-10 
            ${swiped ? "w-full" : "w-1/4"}`}>
             {swiped ? (
               <span className="text-tt-on-primary font-black text-2xl tracking-widest">ĐÃ ĐẾN NƠI</span>
             ) : (
               <div className="w-10 h-10 rounded-full bg-tt-on-primary opacity-30"></div>
             )}
          </div>
          {!swiped && (
             <div className="absolute inset-0 flex items-center justify-center z-0 ml-20">
               <span className="text-tt-on-surface-variant font-black text-xl tracking-wide select-none">Nhấn để xác nhận ĐẾN NƠI</span>
             </div>
          )}
        </div>

        <div className="flex gap-4 w-full h-20">
           {swiped && !scannedCode ? (
             <button 
                onClick={() => setScannerOpen(true)}
                className="flex-1 bg-tt-surface-highest rounded-[2rem] flex items-center justify-center gap-3 font-black text-tt-on-surface text-xl active:bg-tt-surface shadow-[0_12px_24px_rgba(20,27,43,0.02)] transition-colors border-2 border-dashed border-tt-outline-variant/50 hover:border-tt-primary/50"
             >
               <ScanBarcode className="w-7 h-7 text-tt-primary" strokeWidth={2.5}/>
               QUÉT KẸP CHÌ
             </button>
           ) : (
             <>
               <button className="flex-[3] bg-tt-surface-lowest rounded-[2rem] flex items-center justify-center gap-3 font-black text-tt-on-surface text-xl active:bg-tt-surface shadow-[0_12px_24px_rgba(20,27,43,0.02)] transition-colors">
                 <MapIcon className="w-7 h-7 text-tt-on-surface" strokeWidth={2.5}/>
                 Bản Đồ
               </button>
               {swiped && scannedCode ? (
                 <button className="flex-[2] bg-tt-primary text-white rounded-[2rem] flex items-center justify-center gap-2 font-black text-lg active:opacity-90 shadow-lg transition-all">
                   GIAO HÀNG
                 </button>
               ) : (
                 <button className="flex-[2] bg-tt-tertiary-container text-white rounded-[2rem] flex items-center justify-center gap-3 font-black text-lg active:opacity-90 shadow-[0_12px_24px_rgba(186,85,81,0.2)] transition-all">
                   <ShieldAlert className="w-7 h-7" strokeWidth={2.5}/>
                   Sự Cố
                 </button>
               )}
             </>
           )}
        </div>
      </section>

      {/* QR SCANNER FULL SCREEN OVERLAY */}
      <QrScannerOverlay 
        isOpen={isScannerOpen} 
        onClose={() => setScannerOpen(false)} 
        onScanSuccess={handleScanSuccess} 
      />

    </div>
  );
}
