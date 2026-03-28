'use server'

// Thư mục này dành cho Next.js 15 Server Actions
// Cộng đồng hoặc bạn sẽ phát triển các API giao tiếp cơ sở dữ liệu ở đây (ví dụ: tạo Trip, lấy danh sách Driver...)

// Lời nhắc:
// Hãy cố gắng giữ các actions bảo mật, kiểm tra session trước khi query Database.

export async function sampleAction() {
  // await checkSession()
  // const data = await db.query...
  return { success: true }
}
