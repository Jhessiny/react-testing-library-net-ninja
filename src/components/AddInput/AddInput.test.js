import { render, screen, fireEvent } from "@testing-library/react";
import AddInput from "./AddInput";

const MockedFn = jest.fn();

describe("Add input", () => {
  it("should render input", async () => {
    render(<AddInput todos={[]} setTodos={MockedFn} />);
    const input = screen.getByPlaceholderText(/Add a new task here.../i);
    expect(input).toBeInTheDocument();
  });

  it("should be able to type into the input", async () => {
    render(<AddInput todos={[]} setTodos={MockedFn} />);
    const input = screen.getByPlaceholderText(/Add a new task here.../i);
    fireEvent.change(input, { target: { value: "shopping" } });
    expect(input.value).toBe("shopping");
  });

  it("should have empty input when add button is clicked", async () => {
    render(<AddInput todos={[]} setTodos={MockedFn} />);
    const input = screen.getByPlaceholderText(/Add a new task here.../i);
    fireEvent.change(input, { target: { value: "shopping" } });
    expect(input.value).toBe("shopping");

    const addBtn = screen.getByRole("button");
    fireEvent.click(addBtn);
    expect(input.value).toBe("");
  });
});
