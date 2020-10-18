import React from "react";
import ReactDom from "react-dom";
import Table from "../table/tableRoot";
import "../styles/global.scss";
import { Cell, Column } from "react-table";
import moment from "moment";

type Project = {
    id: number;
    name: string;
    created: Date;
    lastEdited: Date;
    author: string;
};

const dateRenderMethod = (cell: Cell) => (
    <span> {moment(cell.value).format("DD MMM YYYY hh:mm")} </span>
);

const columnsDef: Column<Project>[] = [
    {
        accessor: "name",
        Header: "Project name",
    },
    {
        accessor: "created",
        Header: "Created at",
        Cell: dateRenderMethod,
    },
    {
        accessor: "lastEdited",
        Header: "Last changed at",
        Cell: dateRenderMethod,
    },
    {
        accessor: "author",
        Header: "Author",
    },
];

const exampleData: Project[] = [
    {
        id: 0,
        name: "Hello world!",
        created: new Date(Date.now()),
        lastEdited: new Date(Date.now()),
        author: "Damian Wileński",
    },
];

const Projects = () => {
    return (
        <>
            <h1>Hello world</h1>
            <Table<Project> columns={columnsDef} data={exampleData} />
        </>
    );
};

const containerNode = document.getElementById("app");
ReactDom.render(<Projects />, containerNode);
