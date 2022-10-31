import { render, screen } from "@testing-library/react";
import Greet from "./Greet";

test("Greet renders correctly", () => {
  render(<Greet />);
  const element = screen.getByText(/hello/i);
  expect(element).toBeInTheDocument();
});

test("Greet renders with a name", () => {
  render(<Greet name="John" />);
  const element = screen.getByText(/hello john/i);
  expect(element).toBeInTheDocument();
});
