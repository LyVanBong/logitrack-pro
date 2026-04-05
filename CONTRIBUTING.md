# Hướng Dẫn Đóng Góp Cộng Đồng (Contributing to LogiTrack Pro)

Đầu tiên, cảm ơn bạn đã quan tâm và dành thời gian cải thiện **LogiTrack Pro**! 

Hệ thống Quản lý Vận tải (TMS) này sử dụng kiến trúc **Turborepo** và **pnpm workspace**. Dưới đây là bộ khung hướng dẫn làm thế nào để tham gia xây dựng hệ thống tốt hơn thông qua Pull Requests (PR).

## Quy Trình (Git Flow)

Chúng tôi sử dụng quy trình **Fork & PR**. Tất cả mọi đóng góp dù nhỏ nhất đều đi qua luồng này:

1. **Fork** repository này về tài khoản Github của bạn.
2. Clone repository đã fork về từ máy cá nhân của bạn: 
```bash
  git clone https://github.com/TÊN_TÀI_KHOẢN_CỦA_BẠN/logitrack-pro.git
```
3. Cài đặt các gói phụ thuộc BẮT BUỘC bằng `pnpm` (Lưu ý: Không dùng `npm` hay `yarn`):
```bash
corepack enable pnpm # Nếu chưa bật pnpm
pnpm install
```
4. Khởi tạo một branch nhánh làm việc mới:
   - Các tính năng mới: `feat/tên-tính-năng`
   - Sửa lỗi: `fix/tên-chữa-lỗi`
   - Nâng cấp UI/UX: `ui/tên-cải-tiến`
   - Tư liệu: `docs/tên-bài-viết`

```bash
git checkout -b feat/trip-auto-assign
```

## Khởi Chạy Local Dev

Monorepo này chứa 3 ứng dụng Next.js (ở thư mục `apps/`) và các thư viện giao diện (ở mục `packages/`). Môi trường Node.js hỗ trợ là >= 20.x.

```bash
# Thay thế env cho các app bạn muốn truy xuất
cp apps/erp/.env.example apps/erp/.env.local
# (Làm tương tự với apps/web và apps/driver nếu có)

# Lệnh này sẽ khởi động ĐỒNG THỜI tất cả Project phụ bằng Turborepo.
pnpm dev 
```

## Quy Ước (Code Conventions)

1. **Tuân thủ Linter**: Chúng tôi cấu hình sẵn ESLint gốc tại `packages/eslint-config`. Trước khi tạo commit, hãy chắc chắn hệ thống không còn lỗi:
```bash
pnpm lint
pnpm build
```
2. **Cấu trúc Thư Mục (Monorepo)**:
    - `apps/*`: Vui lòng đặt code chỉ đặc thù của chức năng đó (Ví dụ trang đăng nhập nhân viên vào `apps/erp`).
    - `packages/ui`: Đặt các Code React Components dùng chung cho 2 ứng dụng trở lên (VD Button, Form, Modals) vào đây.
3. **Commit Messages**: Vui lòng dùng thông điệp commit rõ ràng:
    - `feat(erp): thêm chức năng bản đồ hành trình`
    - `fix(ui): sửa lỗi popup tràn layout`
    - `refactor(driver): tối ưu hooks`

## Tạo Pull Request (PR)

Khi code của bạn đã hoàn thiện:
1. Push file lên nhánh của bạn: `git push origin YOUR_BRANCH_NAME` 
2. Truy cập [Original Repo](https://github.com/LyVanBong/logitrack-pro) và nhấn vào nút **Compare & pull request**.
3. Điền mô tả chi tiết, tốt nhất nên đính kèm ảnh (Screenshot) nếu có thay đổi từ phía Component.

## Câu Hỏi và Định Hướng (Roadmap)
Vui lòng xem qua khu vực [Issues](https://github.com/LyVanBong/logitrack-pro/issues).

Cảm ơn bạn đã đóng góp! Vui lòng tuân thủ chặt chẽ kiến trúc Monorepo để tránh việc phá vỡ chéo (cross-breaking) hệ thống. 🚚
