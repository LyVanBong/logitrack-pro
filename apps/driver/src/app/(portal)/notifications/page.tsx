"use client";

import { Truck, Banknote, ShieldAlert, CheckCircle2 } from "lucide-react";

export default function NotificationsPage() {
  const notifications = [
    {
      id: 1,
      type: "trip",
      title: "ĐIỀU ĐỘ: LỆNH MỚI",
      message: "Bạn vừa được giao lệnh LC-002-HN đi từ Kho ICD Sóng Thần đến KCN Biên Hòa 2. Nhấn để nhận lệnh.",
      time: "Vừa xong",
      unread: true,
      icon: <Truck className="w-6 h-6 text-tt-info" strokeWidth={2.5}/>,
      bg: "bg-tt-info/10",
      indicator: "bg-tt-info",
      titleColor: "text-tt-info"
    },
    {
      id: 2,
      type: "expense",
      title: "KẾ TOÁN: DUYỆT TẠM ỨNG",
      message: "Yêu cầu Tạm ứng 2.000.000đ cho chuyến TT-8829-X01 đã được duyệt. Tiền đang chuyển.",
      time: "2 giờ trước",
      unread: true,
      icon: <Banknote className="w-6 h-6 text-tt-primary" strokeWidth={2.5}/>,
      bg: "bg-tt-primary-container/10",
      indicator: "bg-tt-primary",
      titleColor: "text-tt-primary"
    },
    {
      id: 3,
      type: "alert",
      title: "CẢNH BÁO",
      message: "Tuyến cầu Phú Mỹ đang kẹt xe nghiêm trọng. Vui lòng chọn lộ trình tránh hầm vượt/cầu.",
      time: "Hôm qua",
      unread: false,
      icon: <ShieldAlert className="w-6 h-6 text-tt-warning" strokeWidth={2.5}/>,
      bg: "bg-tt-warning/10",
      indicator: "bg-tt-warning",
      titleColor: "text-tt-warning"
    },
    {
      id: 4,
      type: "success",
      title: "HOÀN THÀNH LỆNH",
      message: "Lệnh TT-8820-X05 đã xác nhận giao xong. Số chuyến trong tháng của bạn: 11.",
      time: "2 ngày trước",
      unread: false,
      icon: <CheckCircle2 className="w-6 h-6 text-tt-on-surface-variant" strokeWidth={2.5}/>,
      bg: "bg-tt-surface-highest",
      indicator: "bg-tt-on-surface-variant",
      titleColor: "text-tt-on-surface-variant"
    }
  ];

  return (
    <div className="flex flex-col gap-6 pt-4 pb-24 w-full max-w-lg mx-auto sm:px-0 px-2 h-full">
      
      {/* HEADER */}
      <div className="flex items-center justify-between px-2 mb-4">
        <h1 className="text-4xl font-black text-tt-on-surface tracking-tight flex items-center gap-3">
          Thông Báo
          <span className="bg-tt-tertiary-container text-white text-xs px-2.5 py-0.5 mt-1 rounded-full font-black tracking-widest shadow-sm">2 MỚI</span>
        </h1>
        <button className="text-sm font-black text-tt-primary tracking-wide active:opacity-70 transition-opacity">
          ĐÃ ĐỌC TẤT CẢ
        </button>
      </div>

      {/* NOTIFICATION FEED */}
      <div className="flex flex-col gap-4">
        {notifications.map((notif) => (
          <div 
            key={notif.id} 
            className={`w-full p-5 rounded-[2rem] ${notif.unread ? "bg-tt-surface-lowest shadow-[0_12px_32px_rgba(20,27,43,0.05)]" : "bg-tt-surface-highest shadow-inner opacity-80"} flex gap-5 transition-all relative overflow-hidden active:scale-[0.98] cursor-pointer`}
          >
            {notif.unread && (
              <div className={`absolute top-0 bottom-0 left-0 w-2 ${notif.indicator}`}></div>
            )}
            
            <div className={`w-14 h-14 rounded-2xl ${notif.bg} flex items-center justify-center shrink-0`}>
              {notif.icon}
            </div>
            
            <div className="flex flex-col gap-1 w-full mt-0.5">
              <div className="flex justify-between items-start">
                <span className={`text-sm font-black tracking-widest uppercase ${notif.unread ? notif.titleColor : "text-tt-on-surface-variant"}`}>
                  {notif.title}
                </span>
                <span className="text-xs font-bold text-tt-on-surface-variant whitespace-nowrap ml-2">
                  {notif.time}
                </span>
              </div>
              <p className={`text-base leading-snug tracking-wide ${notif.unread ? "text-tt-on-surface font-semibold" : "text-tt-on-surface-variant font-medium"}`}>
                {notif.message}
              </p>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
