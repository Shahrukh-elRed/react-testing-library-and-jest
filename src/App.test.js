import { render, screen } from "@testing-library/react";
import App from "./App";

test("testing with display value", () => {
  render(<App />);
  const inputs = screen.getAllByDisplayValue("shahrukh");
  for (let i = 0; i < inputs.length; i++) {
    expect(inputs[i]).toBeInTheDocument();
  }
});

test("textarea with display value", () => {
  render(<App />);
  const textarea = screen.getByDisplayValue("shahrukh khan");
  expect(textarea).toBeInTheDocument();
});

test("radio with display value", () => {
  render(<App />);
  const radio = screen.getByDisplayValue("male");
  expect(radio).toBeInTheDocument();
});
