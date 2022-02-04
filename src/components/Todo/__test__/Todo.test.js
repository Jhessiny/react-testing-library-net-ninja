import { render, screen, fireEvent, getByRole } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom/cjs/react-router-dom.min";
import Todo from "../Todo";

const MockedFn = jest.fn();

const MockTodoFooter = ({ numberOfIncompleteTasks }) => {
  return (
    <BrowserRouter>
      <Todo />
    </BrowserRouter>
  );
};

describe("Add input", () => {
  it("should render input", async () => {
    render(<MockTodoFooter />);
    const inputEl = screen.getByPlaceholderText(/Add a new task here.../i);
    const buttonEl = screen.getByRole("button", { name: "Add" });
    expect(inputEl).toBeInTheDocument();
    expect(buttonEl).toBeInTheDocument();
  });
});
