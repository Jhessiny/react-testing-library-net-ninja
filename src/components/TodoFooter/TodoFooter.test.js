import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import TodoFooter from "./TodoFooter";

const MockTodoFooter = ({ numberOfIncompleteTasks }) => {
  return (
    <BrowserRouter>
      <TodoFooter numberOfIncompleteTasks={numberOfIncompleteTasks} />
    </BrowserRouter>
  );
};

describe("test 1", () => {
  it("should render tasks", async () => {
    render(<MockTodoFooter numberOfIncompleteTasks={3} />);
    const footerP = screen.getByText(/3 tasks left/i);
    expect(footerP).toBeInTheDocument();
  });

  it("should render task singular", async () => {
    render(<MockTodoFooter numberOfIncompleteTasks={1} />);
    const footerP = screen.getByText(/1 task left/i);
    expect(footerP).toBeInTheDocument();
  });
});
