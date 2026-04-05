"use client";

import { useState, useEffect } from "react";
import { ScanLine, X, CheckCircle2 } from "lucide-react";

// Safe haptic feedback wrapper (ignored by iOS Safari)
const triggerHaptic = (pattern: number | number[] = [200]) => {
  if (typeof window !== "undefined" && "vibrate" in navigator) {
    navigator.vibrate(pattern);
  }
};

export function QrScannerOverlay({ isOpen, onClose, onScanSuccess }: { isOpen: boolean, onClose: () => void, onScanSuccess: (code: string) => void }) {
  const [scanning, setScanning] = useState(isOpen);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    let scanReset: NodeJS.Timeout;
    if (isOpen) {
      scanReset = setTimeout(() => setScanning(true), 0);
      timeout = setTimeout(() => {
        setScanning(false);
        triggerHaptic([100, 100, 200]); // Success vibration 
        setTimeout(() => {
          onScanSuccess("T&T-8899-VN");
        }, 1000);
      }, 3000); // Fakes 3 seconds of scanning
    } else {
      scanReset = setTimeout(() => setScanning(true), 0);
    }
    return () => {
      clearTimeout(timeout);
      clearTimeout(scanReset);
    };
  }, [isOpen, onScanSuccess]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[200] bg-black flex flex-col items-center justify-center animate-in fade-in duration-200">
      <div className="absolute top-8 right-6 z-[210]">
        <button 
          onClick={onClose}
          className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white active:scale-95 transition-transform"
        >
          <X size={28} />
        </button>
      </div>

      <div className="mt-12 text-center z-10 space-y-2 px-8">
        <h2 className="text-white text-2xl font-black tracking-widest uppercase">Quét Mã Vạch</h2>
        <p className="text-white/60 text-sm font-medium">Đưa mã vạch/mã QR thư báo hoặc kẹp chì vào trong khung hình.</p>
      </div>

      <div className="relative mt-12 w-72 h-72">
        {/* Scanner Corner Borders */}
        <div className="absolute inset-0 border-2 border-white/20 rounded-3xl"></div>
        <div className="absolute top-0 left-0 w-12 h-12 border-t-4 border-l-4 border-emerald-500 rounded-tl-3xl"></div>
        <div className="absolute top-0 right-0 w-12 h-12 border-t-4 border-r-4 border-emerald-500 rounded-tr-3xl"></div>
        <div className="absolute bottom-0 left-0 w-12 h-12 border-b-4 border-l-4 border-emerald-500 rounded-bl-3xl"></div>
        <div className="absolute bottom-0 right-0 w-12 h-12 border-b-4 border-r-4 border-emerald-500 rounded-br-3xl"></div>

        {/* Laser Line */}
        {scanning ? (
          <div className="absolute top-0 left-0 right-0 h-0.5 bg-emerald-500 shadow-[0_0_20px_4px_rgba(16,185,129,0.7)] z-20 animate-[scan_2s_ease-in-out_infinite]"></div>
        ) : (
          <div className="absolute inset-0 bg-emerald-500/20 backdrop-blur-sm rounded-3xl flex flex-col items-center justify-center animate-in zoom-in duration-300">
            <CheckCircle2 size={64} className="text-emerald-400 mb-2" />
            <span className="text-emerald-400 font-bold tracking-widest">THÀNH CÔNG</span>
          </div>
        )}
      </div>

      <div className="mt-auto mb-16 flex items-center justify-center gap-3">
        <ScanLine size={24} className="text-white/40" />
        <span className="text-white/40 font-semibold tracking-widest text-sm uppercase">T&T Vision Core</span>
      </div>

      <style dangerouslySetInnerHTML={{__html:`
        @keyframes scan {
          0% { top: 0; opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { top: 100%; opacity: 0; }
        }
      `}} />
    </div>
  );
}
