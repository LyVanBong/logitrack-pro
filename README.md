<div align="center">

# 🚚 Logitrack Pro

**Hệ thống Quản lý Vận tải (TMS) & ERP mã nguồn mở với kiến trúc Monorepo, giao diện chuyên nghiệp và giám sát thời gian thực.**

[![Next.js](https://img.shields.io/badge/Next.js-15-black?style=flat&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-blue?style=flat&logo=react)](https://react.dev/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind-v4-38B2AC?style=flat&logo=tailwind-css)](https://tailwindcss.com/)
[![Turborepo](https://img.shields.io/badge/Turborepo-2.0-EF4444?style=flat&logo=turborepo)](https://turbo.build/)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)

[Mô tả tổng quan](#tổng-quan) •
[Cấu trúc Dự án](#cấu-trúc-dự-án-monorepo) •
[Tính năng](#tính-năng-nổi-bật) •
[Cài đặt](#hướng-dẫn-cài-đặt) •
[Đóng góp](#đóng-góp-contributing)
</div>

---

## 🌟 Tổng quan
**LogiTrack Pro** là phiên bản cộng đồng của nền tảng quản trị vận tải tích hợp (TMS & ERP). Dự án được thiết kế với chuẩn UI tinh gọn (Premium SaaS/Flat Design), tập trung vào phân mảng các nền tảng từ web công cộng, dashboard điều hành đến app cho tài xế.

Mục tiêu của dự án là cung cấp một giải pháp dựa trên kiến trúc **Monorepo** siêu tối ưu sử dụng [Turborepo](https://turbo.build), chuẩn doanh nghiệp, cho phép cộng đồng dễ dàng tùy biến, mở rộng và phát hành hàng loạt ứng dụng phụ trợ từ trong cùng một Repository. 

## 🏗 Cấu trúc Dự án (Monorepo)

Dự án này sử dụng kiến trúc Monorepo quản lý qua `pnpm` workspaces và Turborepo. Mã nguồn được chia thành 2 phần chính: `apps` và `packages`.

### Apps (Ứng dụng)
- `apps/erp`: Hệ thống quản lý lõi (Core Dashboard) cho nhân sự và ban điều hành logistics.
- `apps/driver`: Cổng thông tin (Portal) được thiết kế riêng ưu tiên trên thiết bị di động dành cho tài xế cập nhật lộ trình.
- `apps/web`: Website giới thiệu, tra cứu đơn hàng và dịch vụ dành cho khách hàng đầu cuối.

### Packages (Gói dùng chung)
- `packages/ui`: Thư viện components dùng chung sử dụng React, Tailwind v4 và Radix UI.
- `packages/typescript-config`: Cấu hình `tsconfig.json` tiêu chuẩn.
- `packages/eslint-config`: Cấu hình ESLint tiêu chuẩn để đồng bộ phong cách code.

## ✨ Tính năng Nổi bật (Core Features)

* **🚦 Giao diện Đa nền tảng (Multi-Platform)**: Có layout chuyên biệt từ Client Website, Driver App (Mobile-first) tới ERP Dashboard điều hành (Desktop tối ưu Data-Grid).
* **📦 Thư viện UI Tập trung**: Sử dụng `packages/ui` giúp đồng bộ giao diện toàn chuỗi ứng dụng mà chỉ cần viết code 1 lần.
* **📈 Quản lý Doanh Thu**: Số liệu vận hành tức thời với biểu đồ trực quan, tối ưu hóa qua Next.js Server Components.
* **🚚 Quản lý Đội Xe & Lái Xe**: Xếp hạng tài xế, quản lý nhiên liệu, phân công điều tiết linh hoạt.
* **⚠️ Hệ Thống Cảnh Báo Sớm**: Nhắc nhở tiến độ xe, chậm chi phí, bảo dưỡng.
* **🗺 Tích hợp Bản Đồ**: Bản đồ theo dõi lộ trình và vị trí chuyến hàng trong ứng dụng ERP (`leaflet`).

## 🛠 Tech Stack

- **Kiến trúc**: [Turborepo](https://turbo.build) + `pnpm` Workspace
- **Framework**: [Next.js 15](https://nextjs.org/) (App Router trên cả 3 app)
- **Cốt lõi**: [React 19](https://react.dev)
- **Giao diện & Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **UI Components Components**: [shadcn/ui](https://ui.shadcn.com/) + [Lucide React](https://lucide.dev/)
- **Tools**: Typescript 5, ESLint 9

## 🚀 Hướng Dẫn Cài Đặt (Getting Started)

Dự án này CHỈ HỖ TRỢ và yêu cầu dùng **pnpm** làm Package Manager, và **Node.js 20+**. 

### 1. Clone Source Code
```bash
git clone https://github.com/LyVanBong/logitrack-pro.git
cd logitrack-pro
```

### 2. Cài Đặt Dependencies
Đảm bảo bạn đã cài pnpm (nếu chưa: `npm install -g pnpm`). Tại thư mục gốc:
```bash
pnpm install
```

### 3. Khởi Chạy Môi Trường Dev (Development Mode)
Để khởi chạy đồng thời tất cả 3 ứng dụng (`erp`, `driver`, `web`) trong chế độ development:
```bash
pnpm dev
```

Turborepo sẽ chạy ứng dụng đồng thời trên các port tương ứng (VD: 3000, 3001, 3002).

### Lệnh hữu ích khác:
- Build toàn bộ dự án (`apps/**` và `packages/**`): `pnpm build`
- Kiểm tra lỗi lint toàn hệ thống: `pnpm lint`

---

## 🤝 Roadmap Sắp Tới

1. Tích hợp Backend API dùng chung, hoàn thiện hệ cơ sở dữ liệu phân tán.
2. Viết Integration cho hệ thống Auto Dispatching tự động (chia ca nhận hàng).
3. Hỗ trợ i18n (Đa ngôn ngữ: Tiếng Việt, English) trên module thư viện chung.
4. Viết End-to-End Test Suite.

---

## 💡 Đóng Góp (Contributing)

LogiTrack Pro là mã nguồn mở, chúng tôi cực kỳ hoan nghênh những PR mới đến từ cộng đồng. Hãy chung tay hoàn thiện giải pháp Monorepo Logistics này!

Chi tiết hơn, vui lòng đọc [CONTRIBUTING.md](./CONTRIBUTING.md) và [Quy Tắc Ứng Xử](./CODE_OF_CONDUCT.md).

## 📜 Giấy Phép (License)

Dự án này được phân phối dưới hình thức mã nguồn mở, theo giấy phép **MIT**. Xem tệp [LICENSE](./LICENSE) để biết thông tin.

---
<div align="center">
Được tối ưu hóa bằng kiến trúc Turborepo ❤️ Phát triển bởi Cộng Đồng Open Source.
</div>
