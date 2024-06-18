import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

test("Click event with user event library", async () => {
  userEvent.setup();
  render(<App />);
  const btn = screen.getByText("Click me");
  await userEvent.click(btn);
  expect(screen.getByText("hello")).toBeInTheDocument();
});
