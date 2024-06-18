import { render, screen } from "@testing-library/react";
import App from "./App";
import userEvent from "@testing-library/user-event";

test("onChange event testing", async () => {
  userEvent.setup();
  render(<App />);
  const el = screen.getByRole("textbox");
  await userEvent.type(el, "shahrukh");
  expect(screen.getByText("shahrukh")).toBeInTheDocument();
});
