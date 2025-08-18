import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, vi, expect } from "vitest";
import { InputField } from "./InputField";
import React from "react";
describe("InputField", () => {
  it("renders label, placeholder, and helper text", () => {
    render(
      <InputField
        label="Name"
        placeholder="Enter your name"
        helperText="This is a helper text"
      />
    );

    expect(screen.getByText("Name")).toBeInTheDocument();
    const input = screen.getByPlaceholderText("Enter your name") as HTMLInputElement;
    expect(input).toBeInTheDocument();
    expect(screen.getByText("This is a helper text")).toBeInTheDocument();
  });

  it("renders error message when invalid", () => {
    render(
      <InputField
        label="Email"
        placeholder="Enter email"
        invalid
        errorMessage="Invalid email address"
      />
    );

    const input = screen.getByPlaceholderText("Enter email") as HTMLInputElement;
    expect(input).toHaveAttribute("aria-invalid", "true");
    expect(screen.getByText("Invalid email address")).toBeInTheDocument();
  });

  it("disables input when disabled prop is true", () => {
    render(<InputField label="Username" placeholder="Disabled field" disabled />);

    const input = screen.getByPlaceholderText("Disabled field") as HTMLInputElement;
    expect(input).toBeDisabled();
  });

  it("calls onChange when typing", () => {
   const handleChange = vi.fn();

  const Wrapper = () => {
    const [val, setVal] = React.useState("");
    return (
      <InputField
        label="Username"
        value={val}
        onChange={(e) => {
          handleChange(e);
          setVal(e.target.value); // update state
        }}
      />
    );
  };

  render(<Wrapper />);

  const input = screen.getByLabelText("Username") as HTMLInputElement;
  fireEvent.change(input, { target: { value: "Alice" } });

  expect(handleChange).toHaveBeenCalledTimes(1);
  expect(input.value).toBe("Alice"); // Note: This will work only if parent controls value
  });

  it("applies correct variant and size classes", () => {
    const { rerender } = render(
      <InputField label="Test" placeholder="..." variant="filled" size="lg" />
    );

    let input = screen.getByPlaceholderText("...") as HTMLInputElement;
    expect(input).toHaveClass("bg-gray-100"); // filled variant
    expect(input).toHaveClass("px-4 py-3 text-lg"); // lg size

    rerender(<InputField label="Test" placeholder="..." variant="ghost" size="sm" />);
    input = screen.getByPlaceholderText("...") as HTMLInputElement;
    expect(input).toHaveClass("border border-transparent"); // ghost variant
    expect(input).toHaveClass("px-2 py-1 text-sm"); // sm size
  });
});
