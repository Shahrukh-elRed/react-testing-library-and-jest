import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";
import { handleOtherMethod } from "./helpers";

test("method testing case 1", () => {
  render(<App />);
  const btn = screen.getByTestId("btn1");
  fireEvent.click(btn);
  const outputText = screen.getByText("hello");
  expect(outputText).toBeInTheDocument();
});

test("method testing case 2", () => {
  expect(handleOtherMethod()).toMatch("hi");
});
