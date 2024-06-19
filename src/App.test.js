import { render, screen } from "@testing-library/react";
import App from "./App";

test("testing heading", () => {
  render(<App />);
  const el = screen.getByRole("heading");
  expect(el).toBeInTheDocument();
});

test("mock api", async () => {
  render(<App />);
  const el = await screen.findAllByRole("listitem");
  expect(el).toHaveLength(4);
});
