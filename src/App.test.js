import { render, screen } from "@testing-library/react";
import App from "./App";

test("testing with test id", () => {
  render(<App />);
  const divId = screen.getAllByTestId("div-test-id");
  for (let i = 0; i < divId.length; i++) {
    expect(divId[i]).toBeInTheDocument();
  }
});

test("testing h2 with test id", () => {
  render(<App />);
  const h2 = screen.getByTestId("h2-test-id");
  expect(h2).toBeInTheDocument();
});
