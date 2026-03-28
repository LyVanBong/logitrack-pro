<div align="center">

# 🚚 Logitrack Pro

**Hệ thống Quản lý Vận tải (TMS) mã nguồn mở với giao diện chuyên nghiệp và giám sát thời gian thực.**

[![Next.js](https://img.shields.io/badge/Next.js-15-black?style=flat&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-blue?style=flat&logo=react)](https://react.dev/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind-v4-38B2AC?style=flat&logo=tailwind-css)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)

[Mô tả tổng quan](#tổng-quan) •
[Tính năng](#tính-năng-nổi-bật) •
[Cài đặt](#hướng-dẫn-cài-đặt) •
[Đóng góp](#đóng-góp-contributing)
</div>

---

## 🌟 Tổng quan
**Logitrack Pro** là phiên bản cộng đồng của nền tảng quản trị vận tải tích hợp (TMS & ERP). Dự án được thiết kế với chuẩn UI tĩnh tinh gọn (Premium SaaS/Flat Design), tập trung vào giám sát đội xe (Fleet Tracking), tối ưu hóa lộ trình tài xế, và quản lý doanh thu theo thời gian thực (Real-time).

Mục tiêu của dự án là chia sẻ một cấu trúc Next.js (App Router) chuẩn doanh nghiệp, nơi bất kì công ty logistics nào cũng có thể fork và tùy biến hệ thống riêng cho mô hình quản trị của mình.

## ✨ Tính năng Nổi bật (Core Features)

* **🚦 Dashboard Giám Sát Thời Gian Thực**: Theo dõi năng suất, số lượng xe đang chạy / nằm bãi, với chỉ số xe tổng thể.
* **📈 Quản lý Doanh Thu**: Số liệu vận hành tức thời với biểu đồ theo tuần trực quan.
* **🚚 Quản lý Đội Xe & Lái Xe (Fleet & Drivers)**: Xếp hạng tài xế, quản lý nhiên liệu (ví dụ top tài xế tiết kiệm dầu),...
* **⚠️ Hệ Thống Cảnh Báo Sớm**: Nhắc nhở đăng kiểm, cảnh báo chi phí vượt định mức, cảnh báo chậm công nợ.
* **🗺 Tích hợp Bản Đồ**: Theo dõi vị trí và chuyến hàng với Leaflet JS.
* **📱 Responsive Multi-Platform**: Có layout riêng cho cả Mobile (App tài xế) và Desktop (Dashboard điều hành).

## 🛠 Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
- **UI & Styling**: [React 19](https://react.dev), [Tailwind CSS v4](https://tailwindcss.com/)
- **Components Components**: [shadcn/ui](https://ui.shadcn.com/) (thông qua Radix UI) & [Lucide React](https://lucide.dev/)
- **Bản đồ (Mapping)**: Canvas Map với `react-leaflet` / `leaflet`
- **Animations**: `motion` để tạo ra những micro-interactions mượt mà.

## 🚀 Hướng Dẫn Cài Đặt (Getting Started)

Logitrack Pro yêu cầu **Node.js 20+**. Dưới đây là cách spin-up môi trường local:

### 1. Clone Source Code
```bash
git clone https://github.com/LyVanBong/logitrack-pro.git
cd logitrack-pro
```

### 2. Cài Đặt Dependencies
```bash
npm install
# hoặc
yarn install
# hoặc
pnpm install
```

### 3. Cấu Hình Môi Trường
Tạo file `.env.local` ở thư mục gốc (tham khảo `.env.example`):

```bash
cp .env.example .env.local
```
Trong `.env.local`, cập nhật:
```env
APP_URL="http://localhost:3000"
```

### 4. Khởi Chạy Môi Trường Dev (Development Mode)
```bash
npm run dev
```

Truy cập `http://localhost:3000` trên trình duyệt để thưởng thức thành quả!

---

## 🤝 Roadmap Sắp Tới

1. Bổ sung trọn bộ hệ thống Mobile App Layout cho Tài Xế (`app/(mobile)`).
2. Viết Integration cho hệ thống Auto Dispatching tự động (chia ca nhận hàng).
3. Hỗ trợ i18n (Đa ngôn ngữ: Tiếng Việt, English).
4. Viết End-to-End Test Suite.

---

## 💡 Đóng Góp (Contributing)

Logitrack Pro là mã nguồn mở, vì thế chúng tôi cực kì hoan nghênh những PR mới đến từ cộng đồng. Hãy chung tay mở rộng và làm mượt mà hơn bộ giải pháp vận tải này!

Để đóng góp:
1. Fork dự án 
2. Tạo Feature Branch mới (`git checkout -b feature/AmazingFeature`) 
3. Commit những thay đổi (`git commit -m 'feat: Add some amazing feature'`)
4. Push lên repo cá nhân (`git push origin feature/AmazingFeature`)
5. Mở một **Pull Request**

Chi tiết hơn, vui lòng đọc [CONTRIBUTING.md](./CONTRIBUTING.md) và [Quy Tắc Ứng Xử](./CODE_OF_CONDUCT.md).

## 📜 Giấy Phép (License)

Dự án này được phân phối dưới hình thức mã nguồn mở, theo giấy phép **MIT**. Xem tệp [LICENSE](./LICENSE) để biết thông tin chi tiết. 

---
<div align="center">
Được xây dựng với ❤️ bởi Cộng Đồng Open Source.
</div>
