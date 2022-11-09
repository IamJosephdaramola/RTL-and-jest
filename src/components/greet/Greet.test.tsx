import { render, screen } from "@testing-library/react";
import Greet from "./Greet";

describe("Greet", () => {
  test("renders correctly", () => {
    render(<Greet />);
    const element = screen.getByText(/hello/i);
    expect(element).toBeInTheDocument();
  });

  test("renders with a name", () => {
    render(<Greet name="John" />);
    const element = screen.getByText(/hello john/i);
    expect(element).toBeInTheDocument();
  });
});
