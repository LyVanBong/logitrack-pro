'use client';

import { Suspense, useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";
import { 
  Package,
  Star,
  ShieldCheck,
  Check,
  CircleDashed,
  MapPin,
  Clock,
  Search
} from "lucide-react";

// ==========================================
// MOCK DATA
// ==========================================
const MOCK_DATA = {
  id: "TT-8829-X01",
  status: "ĐANG VẬN CHUYỂN",
  origin: "TRUNG TÂM SINGAPORE",
  destination: "TP. HỒ CHÍ MINH",
  progressPercent: 70,
  location: "Cảng Vũng Tàu",
  eta: "Today, 18:30 GMT+7",
  distanceLeft: "112.4 km",
  events: [
    { title: "Giao hàng thành công", location: "TP. Hồ Chí Minh", time: "Dự kiến 18:30, Hôm nay", completed: false, current: false },
    { title: "Đang giao hàng", location: "Quận 1, TP. Hồ Chí Minh", time: "14:20, Hôm nay", completed: false, current: true },
    { title: "Đã đến bưu cục trung tâm", location: "Cảng Vũng Tàu", time: "08:15, Hôm nay", completed: true, current: false },
    { title: "Đang luân chuyển tuyến quốc tế", location: "Trên biển Đông", time: "15:40, Hôm qua", completed: true, current: false },
    { title: "Đã xuất kho gốc", location: "Trung tâm Singapore", time: "09:00, Hôm qua", completed: true, current: false },
    { title: "Đặt hàng thành công", location: "Hệ thống TMS", time: "08:00, Hôm qua", completed: true, current: false }
  ],
  driver: {
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
    name: "Alex Nguyen",
    role: "TÀI XẾ BẬC II",
    vehicle: "Xe điện Volvo FH26",
    license: "51C - 882.01",
    rating: "4.98"
  }
};

// ==========================================
// MAIN COMPONENT
// ==========================================
function TrackingPageComponent() {
  const searchParams = useSearchParams();
  const searchId = searchParams.get('id');
  const router = useRouter();

  const [inputVal, setInputVal] = useState(searchId || '');
  const [activeTracking, setActiveTracking] = useState<typeof MOCK_DATA | null>(
    searchId === "TT-8829-X01" ? MOCK_DATA : null
  );
  const [notFound, setNotFound] = useState(!!searchId && searchId !== "TT-8829-X01");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (searchId) {
       setTimeout(() => {
         setInputVal(searchId);
         if (searchId === "TT-8829-X01") {
            setActiveTracking(MOCK_DATA);
            setNotFound(false);
         } else {
            setActiveTracking(null);
            setNotFound(true);
         }
       }, 0);
    } else {
       setTimeout(() => {
         setActiveTracking(null);
         setNotFound(false);
       }, 0);
    }
  }, [searchId]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputVal.trim()) return;
    setLoading(true);
    setTimeout(() => {
       setLoading(false);
       router.push(`/?id=${inputVal}`, { scroll: false });
    }, 600);
  };

  return (
    <div className="w-full flex flex-col items-center">
      
      {/* 
        ==============================
        HERO SECTION
        ==============================
      */}
      <section className="w-full max-w-[1400px] px-4 sm:px-6 lg:px-8 mt-6 sm:mt-10">
         <div className="w-full bg-slate-50 rounded-[24px] sm:rounded-[32px] overflow-hidden relative flex flex-col items-center justify-center py-20 sm:py-32 px-4 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-200/60">
            {/* Light background effects */}
            <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 to-white z-0"></div>
            <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] z-0 mix-blend-multiply pointer-events-none"></div>
            <div className="absolute blur-[100px] rounded-full w-[300px] h-[300px] bg-emerald-200/40 -top-10 -right-10 z-0 pointer-events-none"></div>
            <div className="absolute blur-[120px] rounded-full w-[400px] h-[400px] bg-blue-100/50 bottom-0 left-0 z-0 pointer-events-none"></div>

            <div className="relative z-10 w-full max-w-3xl text-center flex flex-col items-center">
               <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[64px] font-black text-slate-900 tracking-tight leading-[1.1] mb-12 sm:mb-16">
                  Chính xác trong từng <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-emerald-500">chuyển động.</span>
               </h1>

               {/* Tracking Search Form */}
               <form onSubmit={handleSearch} className="w-full flex flex-col sm:flex-row gap-3 sm:gap-2.5 bg-white/60 backdrop-blur-md p-3 sm:p-2.5 rounded-[24px] sm:rounded-3xl border border-white/80 shadow-[0_8px_30px_rgb(0,0,0,0.06)] group focus-within:bg-white focus-within:border-emerald-200 transition-all">
                  <div className="w-full flex-none sm:flex-1 shrink-0 flex items-center bg-white rounded-[18px] sm:rounded-2xl overflow-hidden shadow-sm border border-slate-100 h-[60px] sm:h-[68px] relative px-2 sm:px-4">
                     <div className="pl-3 pr-2 flex items-center justify-center shrink-0 text-slate-400">
                        <Package className="w-6 h-6 sm:w-7 sm:h-7 text-emerald-600" />
                     </div>
                     <input 
                       type="text" 
                       value={inputVal}
                       onChange={e => setInputVal(e.target.value)}
                       placeholder="Nhập mã vận đơn của bạn"
                       className="w-full h-full bg-transparent outline-none text-slate-800 font-bold sm:font-black text-[16px] sm:text-[19px] placeholder:font-medium sm:placeholder:font-semibold placeholder:text-slate-400"
                     />
                  </div>
                  <button 
                     type="submit" 
                     className="w-full sm:w-auto h-[60px] sm:h-[68px] shrink-0 px-8 bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700 text-white font-black text-[16px] rounded-[18px] sm:rounded-2xl shadow-[0_4px_20px_rgba(5,150,105,0.4)] hover:shadow-[0_4px_25px_rgba(5,150,105,0.6)] transition-all flex items-center justify-center sm:min-w-[200px]"
                  >
                     {loading ? (
                        <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                     ) : (
                        "TRA CỨU NGAY"
                     )}
                  </button>
               </form>
               
               <p className="mt-8 text-[11px] font-bold tracking-[0.2em] text-slate-400 uppercase">
                  Theo dõi trạng thái thời gian thực bởi T&T Architect Core
               </p>
            </div>
         </div>
      </section>

      {/* 
        ==============================
        NOT FOUND / EMPTY STATE
        ==============================
      */}
      {notFound && (
         <section className="w-full max-w-7xl px-4 sm:px-6 lg:px-8 mt-10 animate-in fade-in slide-in-from-bottom-8 duration-700 mb-20">
            <div className="w-full bg-white rounded-[32px] overflow-hidden shadow-sm border border-slate-200/60 p-12 sm:p-20 flex flex-col items-center justify-center text-center">
               <div className="w-24 h-24 sm:w-32 sm:h-32 bg-slate-50 rounded-full flex items-center justify-center mb-8 relative ring-8 ring-slate-50/50">
                  <Package className="w-10 h-10 sm:w-14 sm:h-14 text-slate-300" />
                  <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center border-4 border-white shadow-sm">
                     <Search className="w-4 h-4 text-emerald-500" />
                  </div>
               </div>
               <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mb-4">
                  Trống rỗng! (404)
               </h3>
               <p className="text-slate-500 font-medium max-w-md mx-auto mb-8 leading-relaxed">
                  Hệ thống không tìm thấy kiện hàng nào khớp với mã <strong className="text-slate-900 px-2 py-1 bg-slate-100 rounded-md tracking-wider mx-1">{searchId}</strong>. Bạn vui lòng kiểm tra lại tin nhắn hoặc email từ người gửi.
               </p>
               <button 
                  onClick={() => { setInputVal(''); setNotFound(false); router.push('/') }} 
                  className="px-8 py-3.5 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-xl shadow-md cursor-pointer transition-all uppercase tracking-widest text-[13px] active:scale-95"
               >
                  Thử tra cứu lại
               </button>
            </div>
         </section>
      )}

      {/* 
        ==============================
        DASHBOARD / RESULTS GRID
        ==============================
      */}
      {activeTracking && !notFound && (
         <section className="w-full max-w-7xl px-4 sm:px-6 lg:px-8 mt-10 animate-in fade-in slide-in-from-bottom-8 duration-700">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-8">
               
               {/* ----------------- LEFT COLUMN: MAP / PROGRESS ----------------- */}
               <div className="flex flex-col">
                  
                  {/* Title Bar */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                     <div>
                        <h2 className="text-[26px] font-black tracking-tight text-slate-900 leading-tight">Hành trình hiện tại</h2>
                        <div className="text-[14px] font-bold text-slate-500 mt-1">Mã vận đơn: <span className="text-slate-900">{activeTracking.id}</span></div>
                     </div>
                     <span className="bg-emerald-300 text-emerald-900 text-[11px] font-bold uppercase tracking-widest px-4 py-2 rounded-full inline-flex w-fit shadow-sm">
                        ● {activeTracking.status}
                     </span>
                  </div>

                  {/* Route Map Visualizer (New Feature) */}
                  <div className="w-full bg-slate-900 rounded-[24px] overflow-hidden relative shadow-[0_15px_40px_-10px_rgba(0,0,0,0.3)] p-6 sm:p-8 mb-8 group animate-in slide-in-from-bottom-4 fade-in duration-700">
                     {/* Map grid background */}
                     <div className="absolute inset-0 opacity-[0.05] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay"></div>
                     <svg className="absolute inset-0 w-full h-full opacity-[0.05]" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                           <pattern id="tt-grid-dark" width="24" height="24" patternUnits="userSpaceOnUse">
                              <path d="M 24 0 L 0 0 0 24" fill="none" stroke="currentColor" className="text-white" strokeWidth="1" />
                           </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#tt-grid-dark)" />
                     </svg>
                     <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-transparent to-slate-900 z-0"></div>
                     
                     <div className="relative z-10 flex flex-col">
                        <div className="flex justify-between items-end mb-8 relative">
                           {/* Arch connecting origin and destination subtly */}
                           <svg className="absolute left-10 right-10 top-6 w-[calc(100%-80px)] h-12 opacity-20 hidden sm:block" preserveAspectRatio="none" viewBox="0 0 100 20">
                              <path d="M0,20 Q50,0 100,20" fill="none" stroke="currentColor" className="text-emerald-500" strokeWidth="0.5" strokeDasharray="2 2" />
                           </svg>
                           
                           <div>
                              <div className="text-[10px] font-bold tracking-widest text-slate-400 uppercase mb-1 flex items-center gap-1.5"><CircleDashed className="w-3 h-3 text-slate-500" /> Xuất Phát</div>
                              <div className="font-black text-[17px] sm:text-[20px] text-white tracking-tight">{activeTracking.origin}</div>
                           </div>
                           <div className="text-right">
                              <div className="text-[10px] font-bold tracking-widest text-slate-400 uppercase mb-1 flex items-center justify-end gap-1.5"><MapPin className="w-3 h-3 text-emerald-500" /> Điểm Đến</div>
                              <div className="font-black text-[17px] sm:text-[20px] text-white tracking-tight">{activeTracking.destination}</div>
                           </div>
                        </div>

                        {/* Animated Progress Path */}
                        <div className="relative h-12 flex items-center mb-1">
                           {/* BG Dashed line */}
                           <div className="absolute left-[10px] right-[10px] border-t-2 border-dashed border-slate-700/70 top-1/2 -translate-y-1/2"></div>
                           
                           {/* Active Glowing line */}
                           <div 
                              className="absolute left-[10px] top-1/2 -translate-y-[1.5px] h-[3px] bg-gradient-to-r from-emerald-600 to-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.5)] rounded-full transition-all duration-[2.5s] ease-out w-0 group-hover:block"
                              style={{ width: `calc(${activeTracking.progressPercent}% - 20px)`, animation: 'growWidth 2s ease-out forwards' }}
                           ></div>
                           
                           <style dangerouslySetInnerHTML={{__html:`
                              @keyframes growWidth {
                                 from { width: 0%; }
                                 to { width: calc(${activeTracking.progressPercent}% - 20px); }
                              }
                              @keyframes driveTruck {
                                 from { left: 0%; transform: translate(0, -50%); opacity: 0; }
                                 to { left: calc(${activeTracking.progressPercent}% - 24px); transform: translate(0, -50%); opacity: 1; }
                              }
                           `}} />

                           {/* Origin Dot */}
                           <div className="absolute left-0 w-5 h-5 rounded-full border-[5px] border-slate-900 bg-slate-300 z-10 shadow-[0_0_0_1px_rgba(255,255,255,0.1)]"></div>
                           
                           {/* Destination Dot */}
                           <div className="absolute right-0 w-5 h-5 rounded-full border-[5px] border-slate-900 bg-slate-700 z-10 shadow-[0_0_0_1px_rgba(255,255,255,0.05)]"></div>

                           {/* The Moving Truck Graphic */}
                           <div 
                              className="absolute z-20 flex flex-col items-center"
                              style={{ animation: 'driveTruck 2.5s ease-out forwards', left: `calc(${activeTracking.progressPercent}% - 24px)`, top: '50%', transform: 'translateY(-50%)' }}
                           >
                              <div className="bg-emerald-500 text-white p-2.5 rounded-full shadow-[0_0_20px_rgba(16,185,129,0.5)] animate-bounce relative border-2 border-emerald-300">
                                 <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11h12Z"/><path d="M14 8h4.3a2 2 0 0 1 1.63.83l2.8 3.74A2 2 0 0 1 23 13.8V18h-9"/><circle cx="7.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>

                  {/* Timeline Graphic Area */}
                  <div className="w-full bg-white rounded-[24px] overflow-hidden relative shadow-sm border border-slate-200 p-6 sm:p-10 mb-8">
                     <h3 className="text-[14px] font-black tracking-widest text-slate-400 uppercase mb-8">Chi Tiết Lộ Trình</h3>
                     
                     <div className="flex flex-col relative">
                        {activeTracking.events.map((event, index) => {
                           const isLast = index === activeTracking.events.length - 1;
                           const isCompleted = event.completed;
                           const isPastAndCurrent = isCompleted || event.current;
                           const animateDelay = `${index * 100}ms`;

                           return (
                              <div 
                                 key={index} 
                                 className="flex items-start gap-4 sm:gap-6 relative z-10 animate-in slide-in-from-left-4 fade-in fill-mode-both"
                                 style={{ animationDelay: animateDelay, animationDuration: '600ms' }}
                              >
                                 {/* Connector Line (Drawn down to next item) */}
                                 {(!isLast) && (
                                    <div 
                                       className={`absolute left-[21px] sm:left-[23px] top-[40px] bottom-[-20px] w-[3px] z-[-1] transition-all duration-1000 origin-top
                                       ${activeTracking.events[index + 1].completed || activeTracking.events[index + 1].current || event.current 
                                          ? 'bg-gradient-to-b from-emerald-500 to-emerald-400 shadow-[0_0_8px_rgba(16,185,129,0.5)]' 
                                          : 'bg-slate-100'}`}
                                    ></div>
                                 )}
                                 
                                 {/* Icon Node */}
                                 <div className="shrink-0 relative z-10 w-11 h-11 sm:w-12 sm:h-12 bg-white flex items-center justify-center">
                                    {event.completed ? (
                                       <div className="w-11 h-11 sm:w-12 sm:h-12 bg-emerald-50 rounded-full flex items-center justify-center border-2 border-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.2)] hover:scale-110 transition-transform cursor-pointer">
                                          <Check className="w-5 h-5 text-emerald-600 stroke-[3]" />
                                       </div>
                                    ) : event.current ? (
                                       <div className="relative flex items-center justify-center">
                                          {/* Ripple effect */}
                                          <div className="absolute inset-0 bg-emerald-400 rounded-full animate-ping opacity-60"></div>
                                          <div className="relative w-11 h-11 sm:w-12 sm:h-12 bg-emerald-500 rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(16,185,129,0.5)] border-[3px] border-emerald-200">
                                             <MapPin className="w-5 h-5 text-white" />
                                          </div>
                                       </div>
                                    ) : (
                                       <div className="w-11 h-11 sm:w-12 sm:h-12 bg-white rounded-full flex items-center justify-center border-2 border-slate-200">
                                          <CircleDashed className="w-5 h-5 text-slate-300" />
                                       </div>
                                    )}
                                 </div>

                                 {/* Content Info */}
                                 <div className={`flex flex-col pt-1 sm:pt-1.5 pb-10 ${(!isPastAndCurrent) ? 'opacity-50 grayscale' : 'opacity-100'}`}>
                                    <h4 className={`text-[16px] sm:text-[18px] font-black tracking-tight ${event.current ? 'text-emerald-600' : 'text-slate-900'} transition-colors`}>
                                       {event.title}
                                    </h4>
                                    <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 mt-1.5 sm:mt-1 text-[13px] font-medium text-slate-500">
                                       <span className="flex items-center gap-1.5">
                                          <MapPin className="w-3.5 h-3.5" />
                                          {event.location}
                                       </span>
                                       <span className="hidden sm:inline text-slate-300">•</span>
                                       <span className="text-slate-400 flex items-center gap-1.5 hover:text-emerald-600 transition-colors">
                                          <Clock className="w-3.5 h-3.5" />
                                          {event.time}
                                       </span>
                                    </div>
                                    
                                    {event.current && (
                                       <div className="mt-4 p-3 sm:p-4 bg-emerald-50 border border-emerald-100 rounded-xl text-emerald-800 text-sm font-medium animate-in fade-in zoom-in-95 duration-500">
                                          ⚡ Giao hàng đang tiếp cận khu vực của bạn. Vui lòng giữ điện thoại.
                                       </div>
                                    )}
                                 </div>
                              </div>
                           );
                        })}
                     </div>
                  </div>

                  {/* Info Cards Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
                     {/* Box 1 */}
                     <div className="bg-white p-5 rounded-[20px] shadow-sm border border-slate-100 flex flex-col justify-center">
                        <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1.5">Vị Trí Hiện Tại</div>
                        <div className="text-[15px] font-black text-slate-900 tracking-tight">{activeTracking.location}</div>
                     </div>
                     {/* Box 2 */}
                     <div className="bg-white p-5 rounded-[20px] shadow-sm border border-slate-100 flex flex-col justify-center">
                        <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1.5">Dự Kiến Đến</div>
                        <div className="text-[15px] font-black text-slate-900 tracking-tight">{activeTracking.eta}</div>
                     </div>
                     {/* Box 3 */}
                     <div className="bg-white p-5 rounded-[20px] shadow-sm border border-slate-100 flex flex-col justify-center">
                        <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1.5">Quãng Đường Còn Lại</div>
                        <div className="text-[15px] font-black text-slate-900 tracking-tight">{activeTracking.distanceLeft}</div>
                     </div>
                  </div>

               </div>


               {/* ----------------- RIGHT COLUMN: DRIVER / ECO ----------------- */}
               <div className="flex flex-col gap-5 md:pt-14">
                  
                  {/* Driver Card (Light Mode) */}
                  <div className="bg-white rounded-[24px] shadow-[0_8px_30px_rgb(0,0,0,0.06)] p-8 flex flex-col border border-slate-200 relative overflow-hidden">
                     {/* Subtle bg glow */}
                     <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/50 to-white pointer-events-none"></div>

                     <h3 className="text-slate-900 text-[16px] font-black tracking-tight mb-8 relative z-10">Thông tin người giao hàng</h3>
                     
                     {/* Avatar Row */}
                     <div className="flex items-center gap-4 mb-10 relative z-10">
                        <div className="relative">
                           <Image 
                              src={activeTracking.driver.avatar} 
                              alt="Driver" 
                              width={56} 
                              height={56} 
                              className="w-14 h-14 rounded-full border-2 border-white object-cover shadow-md" 
                           />
                           <div className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-emerald-500 border-2 border-white rounded-full"></div>
                        </div>
                        <div>
                           <div className="text-slate-900 text-[18px] font-black">{activeTracking.driver.name}</div>
                           <div className="text-emerald-600 text-[10px] font-black tracking-widest uppercase mt-0.5">{activeTracking.driver.role}</div>
                        </div>
                     </div>

                     {/* Stats Rows */}
                     <div className="flex flex-col gap-5 border-y border-slate-100 py-6 mb-8 relative z-10">
                        <div className="flex justify-between items-center">
                           <span className="text-slate-500 text-[13px] font-medium">Phương tiện</span>
                           <span className="text-slate-900 text-[13px] font-bold">{activeTracking.driver.vehicle}</span>
                        </div>
                        <div className="flex justify-between items-center">
                           <span className="text-slate-500 text-[13px] font-medium">Biển kiểm soát</span>
                           <span className="text-slate-900 text-[13px] font-bold tracking-wider">{activeTracking.driver.license}</span>
                        </div>
                        <div className="flex justify-between items-center">
                           <span className="text-slate-500 text-[13px] font-medium">Đánh giá</span>
                           <span className="text-emerald-600 text-[13px] font-black flex items-center gap-1.5">
                              <Star className="w-3.5 h-3.5 fill-emerald-500 text-emerald-500" /> {activeTracking.driver.rating}
                           </span>
                        </div>
                     </div>

                     {/* Action Button */}
                     <button className="w-full bg-slate-900 hover:bg-slate-800 active:bg-black text-white rounded-[16px] py-4 text-[13px] font-black uppercase tracking-widest transition-colors relative z-10 shadow-md mt-auto">
                        Liên hệ điều phối
                     </button>
                  </div>

                  {/* Eco Badge Card */}
                  <div className="bg-[#e9f0fc] border border-blue-100 rounded-[20px] p-5 flex items-start gap-4 shadow-sm">
                     <div className="bg-emerald-300 w-10 h-10 rounded-xl flex items-center justify-center shrink-0">
                        <ShieldCheck className="w-5 h-5 text-emerald-900" />
                     </div>
                     <div className="flex flex-col">
                        <div className="text-slate-900 text-[12px] font-black uppercase tracking-widest mb-1">Xác Nhận ECO</div>
                        <div className="text-slate-600 text-[12px] font-medium leading-relaxed pr-2">
                           Vận chuyển trung hòa carbon đã được xác nhận cho đơn hàng này
                        </div>
                     </div>
                  </div>

               </div>
            </div>
         </section>
      )}

      {/* 
        ==============================
        STATS SECTION (Always Visible)
        ==============================
      */}
      <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24 sm:mt-32">
         <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            
            <div className="bg-[#f8fafc] p-6 sm:p-8 rounded-[24px] border border-slate-100 flex flex-col">
               <div className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tighter mb-4">99.9%</div>
               <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Đúng Giờ 2026</div>
            </div>

            <div className="bg-[#f8fafc] p-6 sm:p-8 rounded-[24px] border border-slate-100 flex flex-col">
               <div className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tighter mb-4">240+</div>
               <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Quốc gia đã đến</div>
            </div>

            <div className="bg-[#f8fafc] p-6 sm:p-8 rounded-[24px] border border-slate-100 flex flex-col">
               <div className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tighter mb-4">1.2M</div>
               <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Đơn hàng mỗi ngày</div>
            </div>

            <div className="bg-[#f8fafc] p-6 sm:p-8 rounded-[24px] border border-slate-100 flex flex-col">
               <div className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tighter mb-4">0.02%</div>
               <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Tỷ lệ sự cố</div>
            </div>

         </div>
      </section>

    </div>
  );
}

// Ensure useSearchParams is wrapped in Suspense for static generation safety
export default function Page() {
   return (
      <Suspense fallback={
         <div className="w-full h-[60vh] flex items-center justify-center">
            <div className="w-10 h-10 border-4 border-slate-200 border-t-emerald-600 rounded-full animate-spin"></div>
         </div>
      }>
         <TrackingPageComponent />
      </Suspense>
   );
}
