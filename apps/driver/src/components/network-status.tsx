"use client";

import { useState, useEffect } from "react";
import { WifiOff } from "lucide-react";

export function NetworkStatus() {
  const [isOnline, setIsOnline] = useState(typeof window !== "undefined" ? navigator.onLine : true);

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  if (isOnline) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-[2000] bg-yellow-500 text-white px-4 py-2.5 flex justify-center gap-2 shadow-md animate-in slide-in-from-top-4 duration-300">
      <WifiOff size={16} className="animate-pulse shrink-0 mt-0.5" />
      <span className="text-[13px] font-bold tracking-wide">
        Đang ngoại tuyến. Dữ liệu sẽ tự đồng bộ khi có mạng.
      </span>
    </div>
  );
}
