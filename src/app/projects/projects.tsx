import React from "react";
import ReactDom from "react-dom";
import Table from "../table/tableRoot";
import "../styles/global.scss";
import { Column } from "react-table";

type Project = {
    name: string;
    created: Date;
    lastEdited: Date;
    author: string;
};

const columnsDef: Column<Project>[] = [
    {
        accessor: "name",
        Header: "Project name",
    },
    {
        accessor: "created",
        Header: "Created at",
    },
    {
        accessor: "lastEdited",
        Header: "Last changed at",
    },
    {
        accessor: "name",
        Header: "Author",
    },
];

const exampleData: Project[] = [
    {
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
