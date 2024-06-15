import { render, screen } from "@testing-library/react";
import App from "./App";

// test("single input field", () => {
//   render(<App />);
//   const input = screen.getByPlaceholderText("enter username");
//   expect(input).toBeInTheDocument();
// });

test("single input field", () => {
  render(<App />);
  const inputs = screen.getAllByPlaceholderText("enter username");
  for (let i = 0; i < inputs.length; i++) {
    expect(inputs[i]).toBeInTheDocument();
  }
});
