import { useState, useMemo } from "react";
import {
    createColumnHelper,
    flexRender,
    getCoreRowModel,
    getSortedRowModel,
    type SortingState,
    useReactTable,
    type SortDirection,
} from "@tanstack/react-table";
import {
    CodeSimple,
    PenNib,
    SortAscending,
    SortDescending,
} from "@phosphor-icons/react";
import { cn } from "../../lib/utils";
import type { ProjectCollection } from "../../types/project";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";

dayjs.extend(utc);
dayjs.extend(timezone);

interface RowIconProps {
    type: ProjectCollection["data"]["type"];
    className?: string;
}

const RowIcon = ({ type, className }: RowIconProps) => {
    switch (type) {
        case "Design":
            return <PenNib size={20} className={className} />;
        case "Frontend":
            return <CodeSimple size={20} className={className} />;
        case "Backend":
            return <CodeSimple size={20} className={className} />;
        case "Fullstack":
            return <CodeSimple size={20} className={className} />;
    }
};

const RowBackgroundColor = (type: ProjectCollection["data"]["type"]) => {
    switch (type) {
        case "Design":
            return "hover:bg-row-design/10";
        case "Frontend":
            return "hover:bg-row-frontend/10";
        case "Backend":
            return "hover:bg-row-backend/10";
        case "Fullstack":
            return "hover:bg-row-fullstack/10";
    }
};

const RowTextColor = (type: ProjectCollection["data"]["type"]) => {
    switch (type) {
        case "Design":
            return "text-row-design";
        case "Frontend":
            return "text-row-frontend";
        case "Backend":
            return "text-row-backend";
        case "Fullstack":
            return "text-row-fullstack";
    }
};

const columnHelper = createColumnHelper<ProjectCollection["data"]>();

interface TableProps {
    data: ProjectCollection[];
}

const Table = ({ data }: TableProps) => {
    const [sorting, setSorting] = useState<SortingState>([]);

    const columns = useMemo(
        () => [
            columnHelper.accessor("title", {
                header: "Name",
                cell: (info) => (
                    <div className="flex items-center gap-2 p-0.5">
                        <div className="w-6 h-6 flex items-center justify-center">
                            <RowIcon
                                type={info.row.original.type}
                                className={cn(
                                    "transition-colors duration-100",
                                    RowTextColor(info.row.original.type),
                                )}
                            />
                        </div>
                        <p
                            className={cn(
                                "truncate max-w-96 text-ellipsis font-sans text-sm transition-colors duration-100",
                                RowTextColor(info.row.original.type),
                            )}
                        >
                            {info.getValue()}
                        </p>
                    </div>
                ),
                sortingFn: "alphanumeric",
                size: 300,
            }),
            columnHelper.accessor("type", {
                header: "Type",
                sortingFn: "alphanumeric",
                size: 150,
            }),
            columnHelper.accessor("publishDate", {
                header: "Date",
                sortingFn: "datetime",
                cell: (info) => {
                    const dateString = info.getValue();
                    // Ensure the date is treated as UTC
                    const date = dayjs.utc(dateString, "YYYY-MM-DD");
                    // Format the date, still in UTC
                    return date.format("MMMM, YYYY");
                },
                size: 128,
            }),
        ],
        [],
    );

    const memoizedData = useMemo(
        () => data.map((item) => ({ ...item.data, slug: item.slug })),
        [data],
    );

    const table = useReactTable({
        data: memoizedData,
        columns,
        state: {
            sorting,
        },
        onSortingChange: setSorting,
        getCoreRowModel: getCoreRowModel(),
        getSortedRowModel: getSortedRowModel(),
        enableSorting: true,
        enableMultiSort: false,
        enableColumnResizing: false,
        columnResizeMode: "onChange",
    });

    return (
        <div className="w-full overflow-x-auto">
            <table className="w-full table-fixed">
                <colgroup>
                    {table.getAllColumns().map((column) => (
                        <col
                            key={column.id}
                            style={{ width: column.getSize() }}
                        />
                    ))}
                </colgroup>
                <thead>
                    {table.getHeaderGroups().map((headerGroup) => (
                        <tr
                            key={headerGroup.id}
                            className="border-b border-white/10 pb-2"
                        >
                            {headerGroup.headers.map((header) => (
                                <th
                                    key={header.id}
                                    className="text-left p-2 font-sans text-sm text-white/60 relative"
                                    style={{ width: header.getSize() }}
                                >
                                    {header.column.getCanSort() ? (
                                        <div
                                            className="flex items-center gap-1 cursor-pointer hover:text-white"
                                            onClick={header.column.getToggleSortingHandler()}
                                        >
                                            {flexRender(
                                                header.column.columnDef.header,
                                                header.getContext(),
                                            )}
                                            {{
                                                asc: (
                                                    <SortAscending size={20} />
                                                ),
                                                desc: (
                                                    <SortDescending size={20} />
                                                ),
                                            }[
                                                header.column.getIsSorted() as SortDirection
                                            ] ?? null}
                                        </div>
                                    ) : (
                                        flexRender(
                                            header.column.columnDef.header,
                                            header.getContext(),
                                        )
                                    )}
                                    {header.column.getCanResize() && (
                                        <div
                                            onMouseDown={header.getResizeHandler()}
                                            onTouchStart={header.getResizeHandler()}
                                            className={`absolute right-0 top-0 h-full w-1 cursor-col-resize select-none touch-none ${
                                                header.column.getIsResizing()
                                                    ? "bg-white/50"
                                                    : "bg-white/20"
                                            }`}
                                        />
                                    )}
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody>
                    {table.getRowModel().rows.map((row) => (
                        <tr
                            key={row.id}
                            className={cn(
                                "group font-sans transition-colors duration-100 odd:bg-white/5",
                                RowBackgroundColor(row.original.type),
                            )}
                        >
                            {row.getVisibleCells().map((cell) => (
                                <td
                                    key={cell.id}
                                    className={cn(
                                        "tracking-wide text-sm transition-colors duration-100",
                                        RowTextColor(cell.row.original.type),
                                    )}
                                    style={{ width: cell.column.getSize() }}
                                >
                                    <a
                                        href={`/gallery/${cell.row.original.slug}`}
                                        rel="noopener noreferrer"
                                        className="px-2 py-1 block w-full h-full"
                                    >
                                        {flexRender(
                                            cell.column.columnDef.cell,
                                            cell.getContext(),
                                        )}
                                    </a>
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Table;
