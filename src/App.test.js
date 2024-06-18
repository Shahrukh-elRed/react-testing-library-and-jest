import { act, render, screen } from "@testing-library/react";
import App from "./App";
import userEvent from "@testing-library/user-event";

test("act function", async () => {
  userEvent.setup();
  render(<App />);
  const input = screen.getByRole("textbox");
  await act(async () => await userEvent.type(input, "shahrukh"));
  expect(screen.getByText("shahrukh")).toBeInTheDocument();
});
