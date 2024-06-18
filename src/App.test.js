import { render, screen } from "@testing-library/react";
import App from "./App";

test("testing input", () => {
  render(<App />);
  const input = screen.getByRole("textbox");
  expect(input).toBeInTheDocument();
  expect(input).toHaveValue();
  expect(input).toHaveValue("shahrukh khan");
  expect(input).toBeEnabled();
  expect(input).toHaveAttribute("id");
  expect(input).toHaveClass("test-style");
});

test("testing negatve cases", () => {
  render(<App />);
  const btn = screen.getByRole("button");
  expect(btn).toBeInTheDocument();
  expect(btn).not.toHaveClass("btn");
});
