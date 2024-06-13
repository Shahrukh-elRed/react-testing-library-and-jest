import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

test("on change event testing", () => {
  render(<App />);
  const input = screen.getByRole("textbox");
  fireEvent.change(input, { target: { value: "abc" } });
  expect(input.value).toBe("abc");
});
