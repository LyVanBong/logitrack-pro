# Hướng Dẫn Đóng Góp Cộng Đồng (Contributing to Logitrack Pro)

Đầu tiên, cảm ơn bạn đã quan tâm và dành thời gian cải thiện **Logitrack Pro**! 

Hệ thống Quản lý Vận tải (TMS) này hướng đến việc trở thành giải pháp hàng đầu cho ngành logistics và ERP. Dưới đây là bộ khung hướng dẫn làm thế nào để xây dựng hệ thống tốt hơn thông qua các Pull Requests (PR) của bạn.

## Quy Trình (Git Flow)

Chúng tôi sử dụng quy trình **Fork & PR**. Tất cả mọi đóng góp dù nhỏ nhất đều đi qua luồng này:

1. **Fork** repository này về tài khoản Github của bạn.
2. Clone repository đã fork về từ máy cá nhân của bạn: 
```bash
  git clone https://github.com/TÊN_TÀI_KHOẢN_CỦA_BẠN/logitrack-pro.git
```
3. Khởi tạo một branch (`branch`) mới, đặt tên theo ý nghĩa của tính năng/lỗi mà bạn đang làm việc:
   - Các tính năng mới (Features): `feat/tên-tính-năng`
   - Sửa lỗi (Bug fixes): `fix/tên-chữa-lỗi`
   - Nâng cấp UI/UX: `ui/tên-cải-tiến`
   - Tài liệu (Documentation): `docs/tên-bài-viết`

```bash
git checkout -b feat/trip-dispatching-auto
```

## Khởi Chạy Local Dev
Vì dự án dùng **Next.js 15+** với kiến trúc **App Router** và **Tailwind v4**, hãy chắc chắn rằng bản Node.js của bạn >= 20.x.

```bash
npm install
cp .env.example .env.local
npm run dev
```

## Viết Code & Quy Ước (Code Conventions)

1. **Tuân thủ [Linter]**: Chúng tôi cấu hình sẵn ESLint gốc (`.eslintrc.json`, `eslint.config.mjs`). Chắc chắn rằng trước khi commit, toàn bộ warning hay error đều được giải quyết:
```bash
npm run lint
```
2. **Commit Messages**: Vui lòng dùng thông điệp commit rõ ràng (theo chuẩn Conventional Commits):
    - `feat: thêm module bản đồ theo dõi lộ trình`
    - `fix: xử lý lỗi tràn layout ở trang dashboard tài xế`
    - `refactor: tối ưu hóa hooks nạp dữ liệu khách hàng`

## Tạo Pull Request (PR)

Khi code của bạn đã đảm bảo độ hoàn thiện, hãy tiến hành mở một Pull Request:
1. `git push origin YOUR_BRANCH_NAME` (Lên nhánh fork của bạn)
2. Truy cập [Original Repo](https://github.com/LyVanBong/logitrack-pro) và nhấn vào nút **Compare & pull request**.
3. Vui lòng **điền đầy đủ template PR** mà chúng tôi cung cấp. (Bao gồm Ảnh màn hình UI nếu có chỉnh sửa frontend).

## Câu Hỏi và Định Hướng (Roadmap)
Để biết bạn nên làm gì, vui lòng xem qua khu vực [Issues](https://github.com/LyVanBong/logitrack-pro/issues). Hãy nhận các issue chưa có người giải quyết hoặc tự bản thân đề xuất trên đó.

Happy coding! Và chúc mạng lưới logistics ngày càng hiệu quả. 🚚
