import { render, screen } from "@testing-library/react";
import App from "./App";

test("single button testing", () => {
  render(<App />);
  const btn = screen.getByText("Login");
  expect(btn).toBeInTheDocument();
});

test("single p tag testing", () => {
  render(<App />);
  const pTag = screen.getByText("P tag testing");
  expect(pTag).toBeInTheDocument();
  expect(pTag).toHaveClass("para-style");
  expect(pTag).toHaveAttribute("id");
});

// test("single h1 tag testing", () => {
//   render(<App />);
//   const h1Tag = screen.getByText("Heading tag");
//   expect(h1Tag).toBeInTheDocument();
// });

test("multiple h1 tag testing", () => {
  render(<App />);
  const h1Tags = screen.getAllByText("Heading tag");
  for (let i = 0; i < h1Tags.length; i++) {
    expect(h1Tags[i]).toBeInTheDocument();
  }
});
