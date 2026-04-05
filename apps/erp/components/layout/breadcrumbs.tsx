"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight, Home } from "lucide-react";

const routeMap: Record<string, string> = {
  "dashboard": "Tổng quan",
  "fleet": "Quản lý xe",
  "orders": "Đơn hàng",
  "customers": "Khách hàng",
  "settings": "Cài đặt",
  "finance": "Tài chính",
  "reports": "Báo cáo",
  "dispatch": "Điều vận",
  "audit": "Đối soát",
  "drivers": "Tài xế",
  "documents": "Giấy tờ",
  "timeline": "Lịch trình",
  "tracking": "Bản đồ",
  "inventory": "Kho phụ tùng",
};

export function Breadcrumbs() {
  const pathname = usePathname();
  const paths = pathname.split("/").filter((path) => path);

  if (paths.length === 0) return null;

  return (
    <nav className="hidden md:flex items-center text-sm font-medium text-slate-500">
      <Link href="/" className="hover:text-slate-900 dark:hover:text-slate-100 transition-colors">
        <Home size={14} />
      </Link>

      {paths.map((path, index) => {
        const href = `/${paths.slice(0, index + 1).join("/")}`;
        const isLast = index === paths.length - 1;
        const translate = routeMap[path] || (path.length > 15 ? `${path.substring(0, 8)}...` : path.charAt(0).toUpperCase() + path.slice(1));

        return (
          <div key={path} className="flex items-center">
            <ChevronRight size={14} className="mx-1.5 flex-shrink-0 text-slate-400" />
            {isLast ? (
              <span className="text-slate-900 dark:text-slate-100 font-semibold truncate max-w-[150px]">
                {translate}
              </span>
            ) : (
              <Link href={href} className="hover:text-slate-900 dark:hover:text-slate-100 transition-colors truncate max-w-[150px]">
                {translate}
              </Link>
            )}
          </div>
        );
      })}
    </nav>
  );
}
