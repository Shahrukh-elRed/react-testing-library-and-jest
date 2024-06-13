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

test("Testing Input box", () => {
  render(<App />);
  const checkInput = screen.getByRole("textbox");
  const checkInputPlaceholder = screen.getByPlaceholderText("Enter User Name");
  expect(checkInput).toBeInTheDocument();
  expect(checkInputPlaceholder).toBeInTheDocument();
  expect(checkInput).toHaveAttribute("name", "username");
  expect(checkInput).toHaveAttribute("id", "userId");
  expect(checkInput).toHaveAttribute("type", "text");
  expect(checkInput).toHaveAttribute("value", "shahrukh");
});
