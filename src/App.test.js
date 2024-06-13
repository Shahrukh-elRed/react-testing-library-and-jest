import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

test("click event test case", () => {
  render(<App />);
  const btn = screen.getByRole("button");
  fireEvent.click(btn);
  const renderedData = screen.getByText("updated data");
  expect(renderedData).toBeInTheDocument();
});
