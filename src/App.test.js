import { render, screen } from "@testing-library/react";
import App from "./App";

test("button testing with title attribute", () => {
  render(<App />);
  const btn = screen.getByTitle("click me");
  expect(btn).toBeInTheDocument();
});

test("span testing with title attribute", () => {
  render(<App />);
  const span = screen.getAllByTitle("black spades suit");
  for (let i = 0; i < span.length; i++) {
    expect(span[i]).toBeInTheDocument();
  }
});
