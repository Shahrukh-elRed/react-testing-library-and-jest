import { render, screen } from "@testing-library/react";
import App from "./App";

test("getByRole Testing", () => {
  render(<App />);
  const btn1 = screen.getByRole("button", { name: "Click me 1" });
  const btn2 = screen.getByRole("button", { name: "Click me 2" });
  const input1 = screen.getByRole("textbox", { name: "User Name" });
  const input2 = screen.getByRole("textbox", { name: "User Age" });
  const div1 = screen.getByRole("dummy");

  expect(btn1).toBeInTheDocument();
  expect(btn2).toBeInTheDocument();
  expect(input1).toBeInTheDocument();
  expect(input2).toBeInTheDocument();
  expect(div1).toBeInTheDocument();
});
