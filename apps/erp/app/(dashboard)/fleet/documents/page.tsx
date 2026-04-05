import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { DataGrid, type ColumnDef } from "@/components/ui/data-grid"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { AlertTriangle, Clock, FileText, CheckCircle2 } from "lucide-react"

const documentData = [
  { id: 1, plate: "29C-123.45", docType: "Đăng kiểm", expiryDate: "15/04/2026", daysLeft: 16, status: "warning" },
  { id: 2, plate: "29C-123.45", docType: "Bảo hiểm TNDS", expiryDate: "20/03/2026", daysLeft: 2, status: "danger" },
  { id: 3, plate: "51D-999.88", docType: "Phí đường bộ", expiryDate: "30/03/2026", daysLeft: -1, status: "expired" },
  { id: 4, plate: "51D-999.88", docType: "Phù hiệu", expiryDate: "01/08/2026", daysLeft: 120, status: "ok" },
  { id: 5, plate: "30E-555.66", docType: "Đăng kiểm", expiryDate: "10/05/2026", daysLeft: 42, status: "ok" },
]

export default function FleetDocumentsPage() {
  const columns: ColumnDef<typeof documentData[0]>[] = [
    { header: "Biển Số", accessorKey: "plate", className: "font-semibold w-[150px]" },
    {
      header: "Loại Giấy Tờ",
      accessorKey: "docType",
      cell: (row) => (
        <div className="flex items-center gap-2">
           <FileText className="h-4 w-4 text-slate-400" />
           {row.docType}
        </div>
      )
    },
    { header: "Ngày Hết Hạn", accessorKey: "expiryDate" },
    {
       header: "Trạng Thái",
       accessorKey: "status",
       cell: (row) => {
          if (row.status === "expired" || row.daysLeft < 0)
            return <Badge className="bg-tt-danger text-white hover:bg-tt-danger">Quá hạn ({Math.abs(row.daysLeft)} ngày)</Badge>
          if (row.status === "danger" || row.daysLeft <= 7)
            return <Badge className="bg-tt-danger text-white hover:bg-tt-danger">Sắp hết hạn ({row.daysLeft} ngày)</Badge>
          if (row.status === "warning" || row.daysLeft <= 30)
            return <Badge className="bg-tt-warning text-white hover:bg-tt-warning">Cần lưu ý ({row.daysLeft} ngày)</Badge>
          return <Badge className="bg-slate-100 text-slate-500 hover:bg-slate-200">Bình thường ({row.daysLeft} ngày)</Badge>
       }
    },
    {
       header: "Hành Động",
       accessorKey: "id",
       className: "text-right",
       cell: () => (
         <div className="flex justify-end gap-2">
           <Button variant="outline" size="sm">Cập Nhật</Button>
           <Button variant="secondary" size="sm">Gia Hạn</Button>
         </div>
       )
    }
  ]

  return (
    <div className="flex flex-col gap-6 md:p-4">
      <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-tt-primary dark:text-slate-100">Cảnh Báo Giấy Tờ Đội Xe</h2>
          <p className="text-slate-500 dark:text-slate-400">
            Theo dõi kỳ hạn Đăng kiểm, Bảo hiểm, Phí đường bộ của toàn bộ phương tiện.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Input placeholder="Tìm biển số..." className="w-[200px]" />
          <Button className="bg-tt-primary hover:bg-tt-primary-hover text-white">
            Xuất Báo Cáo
          </Button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-4">
        <Card className="bg-tt-danger/10 border-tt-danger/20">
           <CardContent className="p-4 flex items-center justify-between">
              <div>
                <p className="text-xs font-semibold uppercase text-tt-danger">Đã Quá Hạn</p>
                <p className="text-3xl font-bold text-tt-danger mt-1">1</p>
              </div>
              <div className="h-10 w-10 rounded-full bg-tt-danger/20 flex items-center justify-center">
                 <AlertTriangle className="h-5 w-5 text-tt-danger" />
              </div>
           </CardContent>
        </Card>

        <Card className="bg-tt-warning/10 border-tt-warning/50">
           <CardContent className="p-4 flex items-center justify-between">
              <div>
                <p className="text-xs font-semibold uppercase text-tt-danger">Sắp Hết (&lt; 15 Ngày)</p>
                <p className="text-3xl font-bold text-tt-danger mt-1">1</p>
              </div>
              <div className="h-10 w-10 rounded-full bg-tt-warning/50 flex items-center justify-center">
                 <Clock className="h-5 w-5 text-tt-danger" />
              </div>
           </CardContent>
        </Card>

        <Card>
           <CardContent className="p-4 flex items-center justify-between">
              <div>
                <p className="text-xs font-semibold uppercase text-slate-500">Chuẩn Bị (15–30 Ngày)</p>
                <p className="text-3xl font-bold text-tt-primary dark:text-white mt-1">1</p>
              </div>
           </CardContent>
        </Card>

        <Card>
           <CardContent className="p-4 flex items-center justify-between">
              <div>
                <p className="text-xs font-semibold uppercase text-slate-500">Hợp Lệ & Mới Cập Nhật</p>
                <p className="text-3xl font-bold text-tt-success dark:text-emerald-400 mt-1">18</p>
              </div>
              <div className="h-10 w-10 rounded-full bg-emerald-100 flex items-center justify-center">
                 <CheckCircle2 className="h-5 w-5 text-emerald-600" />
              </div>
           </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader className="pb-2">
           <CardTitle>Danh Sách Giấy Tờ Cần Theo Dõi</CardTitle>
        </CardHeader>
        <CardContent>
           <DataGrid columns={columns} data={documentData} className="border-t border-slate-100 dark:border-slate-800" />
        </CardContent>
      </Card>
    </div>
  )
}
