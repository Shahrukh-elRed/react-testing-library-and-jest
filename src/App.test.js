import { configure, render, screen } from "@testing-library/react";
import App from "./App";

configure({ testIdAttribute: "id" });

test("testing of div with data test id", () => {
  render(<App />);
  const divElement = screen.getByTestId("test-div");
  expect(divElement).toBeInTheDocument();
});
