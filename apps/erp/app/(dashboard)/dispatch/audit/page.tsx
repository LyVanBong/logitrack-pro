import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { DataGrid, type ColumnDef } from "@/components/ui/data-grid"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Filter, FileText, CheckCircle2, FileImage, RotateCw, ZoomIn } from "lucide-react"

const expenseData = [
  { id: 1, type: "Bơm lốp / Vá xăm", reported: 150000, approved: 150000, status: "ok" as const },
  { id: 2, type: "Vé cầu đường (Phát sinh)", reported: 35000, approved: 35000, status: "warning" as const },
  { id: 3, type: "Đồ ăn / Tạm ứng ngoài", reported: 500000, approved: 0, status: "rejected" as const },
]

export default function TripAuditPage() {
  const columns: ColumnDef<typeof expenseData[0]>[] = [
    { header: "Hạng Mục", accessorKey: "type", className: "font-medium" },
    {
      header: "Tài Xế Báo (₫)",
      accessorKey: "reported",
      className: "text-right",
      cell: (row) => <span className="text-slate-500">{row.reported.toLocaleString('vi-VN')}</span>
    },
    {
      header: "Thực Tế Duyệt (₫)",
      accessorKey: "approved",
      className: "text-right w-48",
      cell: (row) => (
        <div className="flex flex-col items-end gap-1">
          <span className={`font-bold ${row.status === 'rejected' ? 'text-tt-danger' : 'text-tt-primary dark:text-white'}`}>
            {row.approved.toLocaleString('vi-VN')}
          </span>
          {row.status === 'rejected' && <p className="text-[10px] text-tt-danger">Không hợp lệ</p>}
          {row.status === 'warning' && <span className="flex h-2 w-2 rounded-full bg-tt-warning" />}
        </div>
      )
    },
  ]

  return (
    <div className="flex flex-col gap-6 md:p-4">
      <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-tt-primary dark:text-slate-100">Cộng Hành / Đối Soát</h2>
          <p className="text-slate-500 dark:text-slate-400">
            Giám sát hóa đơn dọc đường, nhập số tiền thực tế và duyệt chi cho chuyến đi.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Input placeholder="Tìm mã chuyến / Biển số..." className="w-[250px]" />
          <Button variant="outline" size="sm">
            <Filter className="mr-2 h-4 w-4" /> Lọc
          </Button>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-12">
        {/* Left Side - Image Preview */}
        <div className="lg:col-span-5 flex flex-col gap-4">
          <Card className="flex-1">
            <CardHeader className="py-4">
              <CardTitle className="flex items-center gap-2 text-base">
                <FileImage className="h-4 w-4 text-tt-secondary" />
                Chứng Từ Lái Xe Chụp (POD / Hóa Đơn)
              </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col items-center justify-center p-0">
               <div className="relative flex w-full h-[400px] flex-col items-center justify-center bg-slate-100 dark:bg-slate-900 overflow-hidden">
                  <div className="absolute top-2 right-2 flex gap-2 z-10">
                    <Button variant="secondary" size="icon" className="h-8 w-8 rounded-full shadow-sm">
                      <ZoomIn className="h-4 w-4" />
                    </Button>
                    <Button variant="secondary" size="icon" className="h-8 w-8 rounded-full shadow-sm">
                      <RotateCw className="h-4 w-4" />
                    </Button>
                  </div>
                  <div className="flex flex-col items-center text-slate-400">
                    <FileImage className="h-16 w-16 mb-4 opacity-50" />
                    <p className="text-sm font-medium">Phiếu cân xe_29C1234.jpg</p>
                    <p className="text-xs">Tải lên lúc 14:30 20/03/2026 bởi Lê Văn A</p>
                  </div>
               </div>
               <div className="w-full flex gap-2 p-4 overflow-x-auto border-t border-slate-200 dark:border-slate-800">
                 {[1, 2, 3].map((item) => (
                    <button key={item} className={`relative flex-shrink-0 h-16 w-16 rounded border-2 overflow-hidden bg-slate-200 dark:bg-slate-800 focus:outline-none ${item === 1 ? 'border-tt-primary' : 'border-transparent hover:border-slate-300'}`}>
                       <span className="absolute inset-0 flex items-center justify-center text-xs font-bold text-slate-400">Ảnh {item}</span>
                    </button>
                 ))}
               </div>
            </CardContent>
          </Card>
        </div>

        {/* Right Side - Accountant Input Panel */}
        <div className="lg:col-span-7 flex flex-col gap-4">
          <Card>
             <CardHeader className="py-4 flex flex-row items-center justify-between border-b border-slate-100 dark:border-slate-800">
               <div>
                  <CardTitle className="text-lg">Chuyến #TRIP-NV0203</CardTitle>
                  <p className="text-sm text-slate-500 mt-1">Xe: 29C-123.45 • TX: Lê Văn A</p>
               </div>
               <Badge className="bg-tt-warning hover:bg-tt-warning text-white">Chờ Đối Soát</Badge>
             </CardHeader>
             <CardContent className="pt-6">
                <Tabs defaultValue="expenses" className="w-full">
                  <TabsList className="w-full justify-start border-b rounded-none bg-transparent p-0 pb-1 h-auto space-x-6">
                    <TabsTrigger value="expenses" className="data-[state=active]:border-tt-primary data-[state=active]:bg-transparent data-[state=active]:shadow-none border-b-2 border-transparent rounded-none px-0 pb-2">
                       Chi Phí Cần Duyệt (3)
                    </TabsTrigger>
                    <TabsTrigger value="pod" className="data-[state=active]:border-tt-primary data-[state=active]:bg-transparent data-[state=active]:shadow-none border-b-2 border-transparent rounded-none px-0 pb-2">
                       Ký Nhận Giao Hàng (POD)
                    </TabsTrigger>
                  </TabsList>

                  <TabsContent value="expenses" className="pt-4 space-y-4">
                     <DataGrid columns={columns} data={expenseData} />

                     <div className="flex flex-col gap-2 p-4 bg-slate-50 rounded-lg border border-slate-100 dark:bg-slate-900 dark:border-slate-800">
                       <div className="flex justify-between text-sm">
                         <span className="text-slate-500">Tổng tài xế báo:</span>
                         <span className="font-medium">685,000 ₫</span>
                       </div>
                       <div className="flex justify-between text-base font-bold text-tt-primary dark:text-white">
                         <span>Tổng thực duyệt trừ lương:</span>
                         <span>185,000 ₫</span>
                       </div>
                     </div>

                     <div className="flex justify-end gap-3 pt-4">
                        <Button variant="outline">Lưu Nháp</Button>
                        <Button className="bg-tt-secondary hover:bg-emerald-700 text-white">
                           <CheckCircle2 className="mr-2 h-4 w-4" />
                           Chốt Kế Toán & Đóng Chuyến
                        </Button>
                     </div>
                  </TabsContent>

                  <TabsContent value="pod" className="pt-4">
                      <div className="p-12 text-center text-slate-500 border-2 border-dashed border-slate-200 rounded-lg dark:border-slate-800">
                          <CheckCircle2 className="h-12 w-12 mx-auto mb-4 text-emerald-100 dark:text-emerald-900" />
                          <p>Hóa đơn Giao hàng đã được xác nhận điện tử.</p>
                      </div>
                  </TabsContent>
                </Tabs>
             </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
