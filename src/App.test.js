import { render, screen } from "@testing-library/react";
import App from "./App";

test("getByLabelText test case 1", () => {
  render(<App />);
  const input = screen.getByLabelText("Username");
  expect(input).toBeInTheDocument();
  expect(input).toHaveValue("shahrukh");
});

test("getByLabelText test case 2", () => {
  render(<App />);
  const checkbox = screen.getByLabelText("Skills");
  expect(checkbox).toBeInTheDocument();
});
