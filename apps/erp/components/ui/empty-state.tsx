import { FileSearch } from "lucide-react";
import { Button } from "./button";

interface EmptyStateProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  actionLabel?: string;
  onAction?: () => void;
}

export function EmptyState({ 
  title, 
  description, 
  icon = <FileSearch className="h-12 w-12 text-slate-300 dark:text-slate-600" />,
  actionLabel,
  onAction
}: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center p-8 text-center animate-in fade-in zoom-in duration-500 rounded-xl border border-dashed border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50">
      <div className="mb-4 rounded-full bg-white dark:bg-slate-800 p-4 shadow-sm">
        {icon}
      </div>
      <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
        {title}
      </h3>
      <p className="mb-6 max-w-sm text-sm text-slate-500 dark:text-slate-400">
        {description}
      </p>
      {actionLabel && onAction && (
        <Button onClick={onAction} variant="outline" className="shadow-sm">
          {actionLabel}
        </Button>
      )}
    </div>
  );
}
