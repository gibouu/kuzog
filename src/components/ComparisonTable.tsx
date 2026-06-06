interface ComparisonTableProps {
  columns: string[];
  rows: { criterion: string; values: string[] }[];
  highlightColumn?: number;
  caption?: string;
}

export function ComparisonTable({ columns, rows, highlightColumn, caption }: ComparisonTableProps) {
  return (
    <div className="overflow-x-auto rounded-card border border-hairline bg-surface">
      <table className="w-full text-left">
        <thead>
          <tr className="border-b border-hairline">
            <th className="px-6 py-4 text-xs font-medium uppercase tracking-[0.12em] text-muted-ink"></th>
            {columns.map((col, idx) => (
              <th
                key={col}
                className={`px-6 py-4 text-xs font-medium uppercase tracking-[0.12em] ${
                  idx === highlightColumn ? 'text-ink' : 'text-muted-ink'
                }`}
              >
                {col}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIdx) => (
            <tr key={row.criterion} className={rowIdx !== rows.length - 1 ? 'border-b border-hairline' : ''}>
              <td className="px-6 py-4 text-sm font-medium text-ink">{row.criterion}</td>
              {row.values.map((val, colIdx) => (
                <td
                  key={colIdx}
                  className={`px-6 py-4 text-sm ${colIdx === highlightColumn ? 'font-semibold text-ink' : 'text-muted-ink'}`}
                >
                  {val}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      {caption && <p className="border-t border-hairline px-6 py-3 text-xs italic text-muted-ink">{caption}</p>}
    </div>
  );
}
