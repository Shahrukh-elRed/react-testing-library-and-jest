import { render, screen } from "@testing-library/react";
import App from "./App";

test("queryBy Test Case", () => {
  render(<App />);
  // const dv = screen.getByText("Login"); // This will fail
  // expect(dv).toBeInTheDocument();
  const dv = screen.queryByText("Login"); // This will pass
  expect(dv).not.toBeInTheDocument();
});
