import { render, screen, fireEvent } from "@testing-library/react";
import { DataTable, Column } from "./DataTable";
import { describe, it, expect, vi } from "vitest";

interface User {
  id: number;
  name: string;
  age: number;
  email: string;
}

const columns: Column<User>[] = [
  { key: "name", title: "Name", dataIndex: "name", sortable: true },
  { key: "age", title: "Age", dataIndex: "age", sortable: true },
  { key: "email", title: "Email", dataIndex: "email" },
];

const data: User[] = [
  { id: 1, name: "Alice", age: 25, email: "alice@example.com" },
  { id: 2, name: "Bob", age: 30, email: "bob@example.com" },
];

describe("DataTable", () => {
  it("renders table headers", () => {
    render(<DataTable data={data} columns={columns} />);
    expect(screen.getByText("Name")).toBeInTheDocument();
    expect(screen.getByText("Age")).toBeInTheDocument();
    expect(screen.getByText("Email")).toBeInTheDocument();
  });

  it("renders table rows", () => {
    render(<DataTable data={data} columns={columns} />);
    expect(screen.getByText("Alice")).toBeInTheDocument();
    expect(screen.getByText("Bob")).toBeInTheDocument();
  });

  it("shows loading state", () => {
    render(<DataTable data={[]} columns={columns} loading />);
    expect(screen.getByText(/Loading.../i)).toBeInTheDocument();
  });

  it("shows empty state", () => {
    render(<DataTable data={[]} columns={columns} />);
    expect(screen.getByText(/No data available/i)).toBeInTheDocument();
  });

  it("allows sorting by column", () => {
    render(<DataTable data={data} columns={columns} />);
    const ageHeader = screen.getByText("Age");
    fireEvent.click(ageHeader); // asc sort
    const rows = screen.getAllByRole("row");
    expect(rows[1]).toHaveTextContent("Alice"); // age 25 first
    fireEvent.click(ageHeader); // desc sort
    const rowsAfter = screen.getAllByRole("row");
    expect(rowsAfter[1]).toHaveTextContent("Bob"); // age 30 first
  });

  it("allows row selection", () => {
    const handleSelect = vi.fn();
    render(<DataTable data={data} columns={columns} selectable onRowSelect={handleSelect} />);
    const checkboxes = screen.getAllByRole("checkbox");
    fireEvent.click(checkboxes[0]); // select Alice
    expect(handleSelect).toHaveBeenCalledWith([{ id: 1, name: "Alice", age: 25, email: "alice@example.com" }]);
  });
});
