import * as React from "react"

export interface ColumnDef<T> {
  header: string;
  accessorKey: keyof T;
  className?: string;
  cell?: (item: T) => React.ReactNode;
}

interface DataGridProps<T> {
  data: T[];
  columns: ColumnDef<T>[];
  className?: string;
}

/**
 * DataGrid — High-density table component for TMS data.
 * Port from @repo/ui/data-grid (tiepvantt-tms packages/ui).
 */
export function DataGrid<T>({ data, columns, className = "" }: DataGridProps<T>) {
  return (
    <div className={`w-full overflow-auto rounded-md border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-950 ${className}`}>
      <table className="w-full caption-bottom text-sm border-collapse">
        <thead className="bg-slate-50 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800">
          <tr>
            {columns.map((col, i) => (
              <th
                key={i}
                className={`h-10 px-3 text-left align-middle font-medium text-slate-500 whitespace-nowrap dark:text-slate-400 ${col.className || ""}`}
              >
                {col.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.length === 0 ? (
            <tr>
              <td colSpan={columns.length} className="p-4 text-center text-slate-500">
                Không có dữ liệu
              </td>
            </tr>
          ) : (
            data.map((row, rowIndex) => (
              <tr
                key={rowIndex}
                className="border-b transition-colors hover:bg-slate-50/50 data-[state=selected]:bg-slate-50 dark:border-slate-800 dark:hover:bg-slate-800/50 dark:data-[state=selected]:bg-slate-800"
              >
                {columns.map((col, colIndex) => (
                  <td
                    key={colIndex}
                    className={`p-3 align-middle ${col.className || ""}`}
                  >
                    {col.cell ? col.cell(row) : (row[col.accessorKey] as React.ReactNode)}
                  </td>
                ))}
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  )
}
