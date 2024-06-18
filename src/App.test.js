import { render, screen } from "@testing-library/react";
import App from "./App";

test("text match with string", () => {
  render(<App />);
  // const div = screen.getByText("Hello World");
  const div = screen.getByText("hello", { exact: false });
  expect(div).toBeInTheDocument();
});

test("text match with regex", () => {
  render(<App />);
  const div = screen.getByText(/Hello W/);
  expect(div).toBeInTheDocument();
});
