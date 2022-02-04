import { render, screen } from "@testing-library/react";
import Header from "./Header";

it("should render header with the same title text", async () => {
  render(<Header title="My header" />);
  const headerElement = screen.getByText(/my header/i);
  expect(headerElement).toBeInTheDocument();
});

it("should render header", async () => {
  render(<Header title="My header" />);
  const headerElement = screen.getByRole("heading", { name: "My header" });
  expect(headerElement).toBeInTheDocument();
});

it("should render header", async () => {
  render(<Header title="My header" />);
  const headerElement = await screen.findByText(/my header/i);
  expect(headerElement).toBeInTheDocument();
});
