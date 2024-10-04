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
import DesignIcon from "./DesignIcon";
import DevelopedIcon from "./developed/DevelopedIcon";
import { cn } from "../../lib/utils";

type Project = {
    name: string;
    date: string;
    type: "Design" | "Frontend" | "Backend" | "Fullstack";
};

const data: Project[] = [
    { name: "Sole AIO super long title abc", date: "Sep 2024", type: "Design" },
    { name: "dasdas development project", date: "Sep 2024", type: "Frontend" },
    { name: "aa development project2", date: "Sep 2024", type: "Backend" },
    { name: "ccc development project3", date: "Sep 2024", type: "Fullstack" },
];

interface RowIconProps {
    type: Project["type"];
    className?: string;
}

const RowIcon = ({ type, className }: RowIconProps) => {
    switch (type) {
        case "Design":
            return <DesignIcon className={className} />;
        case "Frontend":
            return <DevelopedIcon className={className} />;
        case "Backend":
            return <DevelopedIcon className={className} />;
        case "Fullstack":
            return <DevelopedIcon className={className} />;
    }
};

const RowBackgroundColor = (type: Project["type"]) => {
    switch (type) {
        case "Design":
            return "hover:bg-row-design";
        case "Frontend":
            return "hover:bg-row-frontend";
        case "Backend":
            return "hover:bg-row-backend";
        case "Fullstack":
            return "hover:bg-row-fullstack";
    }
};

const RowTextColor = (type: Project["type"]) => {
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

const columnHelper = createColumnHelper<Project>();

const Table = () => {
    const [sorting, setSorting] = useState<SortingState>([]);

    const columns = useMemo(
        () => [
            columnHelper.accessor("name", {
                header: "Name",
                cell: (info) => (
                    <div className="flex items-center gap-2 p-0.5">
                        <div className="w-6 h-6 flex items-center justify-center">
                            <RowIcon
                                type={info.row.original.type}
                                className={cn(
                                    "group-hover:text-black transition-all duration-100",
                                    RowTextColor(info.row.original.type),
                                )}
                            />
                        </div>
                        <p
                            className={cn(
                                "truncate max-w-96 text-ellipsis group-hover:text-black text-departure text-sm transition-all duration-100",
                                RowTextColor(info.row.original.type),
                            )}
                        >
                            {info.getValue()}
                        </p>
                    </div>
                ),
                sortingFn: "alphanumeric",
            }),
            columnHelper.accessor("type", {
                header: "Type",
                sortingFn: "alphanumeric",
            }),
            columnHelper.accessor("date", {
                header: "Date",
                sortingFn: "alphanumeric",
            }),
        ],
        [],
    );

    const table = useReactTable({
        data,
        columns,
        state: {
            sorting,
        },
        onSortingChange: setSorting,
        getCoreRowModel: getCoreRowModel(),
        getSortedRowModel: getSortedRowModel(),
        enableSorting: true,
        enableMultiSort: false,
    });
    return (
        <div className="flex flex-col gap-2">
            <table className="w-full">
                <thead>
                    {table.getHeaderGroups().map((headerGroup) => (
                        <tr
                            key={headerGroup.id}
                            className="grid grid-cols-12 gap-4 font-departure border-b border-white/10 pb-2 select-none"
                        >
                            {headerGroup.headers.map((header) => (
                                <th
                                    key={header.id}
                                    className={`${
                                        header.id === "name"
                                            ? "col-span-6"
                                            : "col-span-3"
                                    } text-left`}
                                >
                                    {header.column.getCanSort() ? (
                                        <div
                                            className={`flex items-center gap-1 text-white/60 tracking-wide text-sm cursor-pointer hover:text-white`}
                                            onClick={header.column.getToggleSortingHandler()}
                                        >
                                            {flexRender(
                                                header.column.columnDef.header,
                                                header.getContext(),
                                            )}
                                            {{
                                                asc: <p>up</p>,
                                                desc: <p>down</p>,
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
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody>
                    {table.getRowModel().rows.map((row, index) => (
                        <tr
                            key={row.id}
                            className={cn(
                                "w-full grid grid-cols-12 items-center gap-4 group font-departure transition-all duration-100",
                                RowBackgroundColor(row.original.type),
                                {
                                    "bg-[#222222]": index % 2 === 0,
                                    "mt-2": index === 0,
                                },
                            )}
                        >
                            {row.getVisibleCells().map((cell) => (
                                <td
                                    key={cell.id}
                                    className={cn(
                                        "group-hover:text-black tracking-wide text-sm transition-all duration-100",
                                        RowTextColor(cell.row.original.type),
                                        {
                                            "col-span-6":
                                                cell.column.id === "name",
                                            "col-span-3":
                                                cell.column.id !== "name",
                                        },
                                    )}
                                >
                                    {flexRender(
                                        cell.column.columnDef.cell,
                                        cell.getContext(),
                                    )}
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
