import { render } from "@testing-library/react";
import App from "./App";

test("custom query", () => {
  render(<App />);
  const element = document.querySelector("#test-id");
  expect(element).toBeInTheDocument();
  expect(element).toHaveTextContent("Hello World");
  expect(element).toHaveAttribute("class");
});
