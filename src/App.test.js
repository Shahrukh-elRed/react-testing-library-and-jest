import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);
  const text = screen.getByText(/First React Test Case/i); // ignores matching exact text case
  const text2 = screen.getByText("Shahrukh Khan"); // matches text case
  const title = screen.getByTitle("AI generated image");
  expect(text).toBeInTheDocument();
  expect(text2).toBeInTheDocument();
  expect(title).toBeInTheDocument();
});
