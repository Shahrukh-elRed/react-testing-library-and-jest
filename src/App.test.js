import { render, screen } from "@testing-library/react";
import App from "./App";

test("input test case", () => {
  render(<App />);
  const inputs = screen.getAllByLabelText("Username");
  for (let i = 0; i < inputs.length; i++) {
    expect(inputs[i]).toBeInTheDocument();
    expect(inputs[i]).toHaveValue("shahrukh");
  }
});

test("checkbox test case", () => {
  render(<App />);
  const checkboxes = screen.getAllByLabelText("Skills");
  for (let i = 0; i < checkboxes.length; i++) {
    expect(checkboxes[i]).toBeInTheDocument();
    expect(checkboxes[i]).toBeChecked();
  }
});
