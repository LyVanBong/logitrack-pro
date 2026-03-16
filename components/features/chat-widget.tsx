"use client"

import { useState } from "react"
import { MessageSquare, X, Send, Paperclip, MoreVertical, Search, Check, CheckCheck } from "lucide-react"

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeChat, setActiveChat] = useState<string | null>(null);
  const [message, setMessage] = useState("");
  const [chats, setChats] = useState([
    { id: "C1", name: "Lưu Văn A (29C-123.45)", unread: 2, status: "Tắc đường trạm thu phí cao tốc", time: "10:24", online: true },
    { id: "C2", name: "Nhóm Điều vận Tốc Hành", unread: 0, status: "Alo hnay xe 60C trống lịch nhé", time: "09:15", online: true },
    { id: "C3", name: "Trần Kim B (15C-678.90)", unread: 0, status: "OK sếp", time: "Hôm qua", online: false },
  ]);

  const [messages, setMessages] = useState([
    { id: 1, sender: "driver", text: "Sếp ơi, trạm thu phí Pháp Vân đang kẹt cứng, chắc em đến xưởng VLXD Số 1 trễ 30 phút ạ.", time: "10:20" },
    { id: 2, sender: "me", text: "Báo khách hàng chưa em?", time: "10:22" },
    { id: 3, sender: "driver", text: "Dạ khách bảo không sao, kho đang rảnh ạ.", time: "10:24" },
  ]);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;
    setMessages([...messages, { id: Date.now(), sender: "me", text: message, time: new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}) }]);
    setMessage("");
  }

  if (!isOpen) {
    return (
      <button 
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 w-14 h-14 bg-blue-600 rounded-full shadow-2xl flex items-center justify-center text-white hover:bg-blue-700 transition-transform hover:scale-110 z-50 animate-bounce-short"
      >
        <MessageSquare size={24} />
        {chats.reduce((acc, chat) => acc + chat.unread, 0) > 0 && (
          <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-[10px] font-bold text-white border-2 border-white">
            {chats.reduce((acc, chat) => acc + chat.unread, 0)}
          </span>
        )}
      </button>
    )
  }

  return (
    <div className="fixed bottom-6 right-6 w-[360px] h-[580px] bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 flex flex-col overflow-hidden z-50 animate-in slide-in-from-bottom-5">
      
      {/* HEADER */}
      <div className="bg-blue-600 p-4 flex justify-between items-center text-white shrink-0">
         <div>
            <h3 className="font-bold">{activeChat ? chats.find(c => c.id === activeChat)?.name : 'Nội bộ LogiTrack'}</h3>
            {activeChat && <p className="text-xs text-blue-100 flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-green-400"></span> Trực tuyến</p>}
         </div>
         <div className="flex gap-3 items-center">
            {activeChat && <button onClick={() => setActiveChat(null)} className="hover:bg-blue-700 p-1 rounded">Danh sách</button>}
            <button className="hover:bg-blue-700 p-1 rounded"><MoreVertical size={18} /></button>
            <button onClick={() => setIsOpen(false)} className="hover:bg-blue-700 p-1 rounded"><X size={20} /></button>
         </div>
      </div>

      {/* CHAT LIST */}
      {!activeChat && (
        <div className="flex-1 overflow-y-auto bg-slate-50 dark:bg-slate-950 flex flex-col">
           <div className="p-3 bg-white dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800">
              <div className="relative">
                 <Search className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
                 <input type="text" placeholder="Tìm tài xế, nhóm..." className="w-full bg-slate-100 dark:bg-slate-800 border-none rounded-full pl-9 pr-4 py-2 text-sm focus:ring-2 focus:ring-blue-500 outline-none" />
              </div>
           </div>
           
           <div className="flex-1 overflow-y-auto">
             {chats.map(chat => (
                <div 
                  key={chat.id} 
                  onClick={() => {
                    setActiveChat(chat.id);
                    setChats(chats.map(c => c.id === chat.id ? { ...c, unread: 0 } : c));
                  }}
                  className="p-3 border-b border-slate-100 dark:border-slate-800 flex gap-3 hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer items-center transition-colors"
                >
                  <div className="relative shrink-0">
                     <div className="w-12 h-12 bg-slate-200 dark:bg-slate-700 rounded-full flex items-center justify-center font-bold text-slate-500">
                       {chat.name.charAt(0)}
                     </div>
                     {chat.online && <div className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-green-500 border-2 border-white dark:border-slate-900 rounded-full"></div>}
                  </div>
                  <div className="flex-1 min-w-0">
                     <div className="flex justify-between items-baseline mb-1">
                        <h4 className={`font-semibold text-sm truncate pr-2 ${chat.unread > 0 ? 'text-slate-900 dark:text-white' : 'text-slate-700 dark:text-slate-300'}`}>{chat.name}</h4>
                        <span className="text-[10px] text-slate-400 shrink-0">{chat.time}</span>
                     </div>
                     <p className={`text-xs truncate ${chat.unread > 0 ? 'text-blue-600 font-medium' : 'text-slate-500'}`}>{chat.status}</p>
                  </div>
                  {chat.unread > 0 && (
                    <div className="w-5 h-5 bg-blue-600 text-white rounded-full flex items-center justify-center text-[10px] font-bold shrink-0">
                       {chat.unread}
                    </div>
                  )}
                </div>
             ))}
           </div>
        </div>
      )}

      {/* CHAT THREAD */}
      {activeChat && (
        <>
          <div className="flex-1 overflow-y-auto p-4 bg-[#f8f9fa] dark:bg-[#0f172a] flex flex-col gap-4">
             <div className="text-center text-[10px] text-slate-400 font-medium my-2">Hôm nay</div>
             {messages.map((msg) => (
                <div key={msg.id} className={`flex flex-col ${msg.sender === 'me' ? 'items-end' : 'items-start'}`}>
                   <div className={`max-w-[80%] rounded-2xl px-4 py-2 text-sm shadow-sm ${msg.sender === 'me' ? 'bg-blue-600 text-white rounded-br-sm' : 'bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 text-slate-800 dark:text-slate-200 rounded-bl-sm'}`}>
                      {msg.text}
                   </div>
                   <div className="text-[10px] text-slate-400 mt-1 flex items-center gap-1">
                      {msg.time}
                      {msg.sender === 'me' && <CheckCheck size={12} className="text-blue-500" />}
                   </div>
                </div>
             ))}
          </div>
          
          <form onSubmit={handleSend} className="p-3 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800 flex gap-2 shrink-0">
             <button type="button" className="p-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
                <Paperclip size={20} />
             </button>
             <input 
               type="text" 
               placeholder="Nhập tin nhắn..." 
               value={message}
               onChange={(e) => setMessage(e.target.value)}
               className="flex-1 bg-slate-100 dark:bg-slate-800 border-none rounded-full px-4 text-sm focus:ring-2 focus:ring-blue-500 outline-none" 
             />
             <button 
               type="submit" 
               disabled={!message.trim()}
               className={`p-2 rounded-full transition-colors flex items-center gap-1 px-3 ${message.trim() ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-slate-100 text-slate-400 dark:bg-slate-800 dark:text-slate-600'}`}
             >
                <Send size={16} /> 
             </button>
          </form>
        </>
      )}

    </div>
  )
}
