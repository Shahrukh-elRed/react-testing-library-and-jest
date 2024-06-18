import { render, screen } from "@testing-library/react";
import App from "./App";

test("testing element with findBy", async () => {
  render(<App />);
  const el = await screen.findByText("data found", {}, { timeout: "2000" });
  expect(el).toBeInTheDocument();
});
