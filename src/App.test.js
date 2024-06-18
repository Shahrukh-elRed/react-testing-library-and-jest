import { render, screen } from "@testing-library/react";
import App from "./App";

test("text match with function", () => {
  render(<App />);
  const dv = screen.getByText(
    (content, element) =>
      // content.startsWith("Hello")
      // content.endsWith("World")
      // content.endsWith("ld")
      // content.includes("ll")
      content.length === 11
  );
  expect(dv).toBeInTheDocument();
});
