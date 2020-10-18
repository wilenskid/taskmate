import React from "react";
import { Column, TableOptions, useTable } from "react-table";
import "../styles/table.scss";

interface TableProps<T extends object> {
    columns: Column<T>[];
    data: T[];
}

const Table = <T extends object>({ columns, data }: TableProps<T>) => {
    const table = useTable<T>({ columns, data } as TableOptions<T>);

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        page,
        prepareRow,
        state,
    } = table;

    return (
        <table className="tm-table" {...getTableProps()}>
            {headerGroups.map((group) => (
                <tr {...group.getHeaderGroupProps()}>
                    {group.headers.map((column) => (
                        <th {...column.getHeaderProps()}>
                            {column.render("Header")}
                        </th>
                    ))}
                </tr>
            ))}
            <tbody {...getTableBodyProps()}>
                {page.map((row) => {
                    prepareRow(row);
                    return (
                        <tr {...row.getRowProps()}>
                            {row.cells.map((cell) => (
                                <td>{cell.render("Cell")}</td>
                            ))}
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
};

export default Table;
