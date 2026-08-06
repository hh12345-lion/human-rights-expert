import type { ReactNode } from "react";

/** Horizontal scroll wrapper for wide tables on mobile - prevents page-level overflow */
export function ResponsiveTableWrap({
  children,
  label = "Swipe horizontally to view full table",
}: {
  children: ReactNode;
  label?: string;
}) {
  return (
    <div className="table-scroll">
      <p className="mb-2 text-xs text-body sm:sr-only">{label}</p>
      <div className="overflow-x-auto rounded-[8px] border border-line">{children}</div>
    </div>
  );
}
