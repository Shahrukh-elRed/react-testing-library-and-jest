import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

beforeAll(() => {
  console.log("**** this runs once before all tests ****");
});

beforeEach(() => {
  console.log("**** this runs before each test ****");
});

test("click event test case 1", () => {
  console.log("1");
  render(<App />);
  const btn = screen.getByRole("button");
  fireEvent.click(btn);
  const renderedData = screen.getByText("updated data");
  expect(renderedData).toBeInTheDocument();
});

test("click event test case 2", () => {
  console.log("2");
  render(<App />);
  const btn = screen.getByRole("button");
  fireEvent.click(btn);
  const renderedData = screen.getByText("updated data");
  expect(renderedData).toBeInTheDocument();
});

test("click event test case 3", () => {
  console.log("3");
  render(<App />);
  const btn = screen.getByRole("button");
  fireEvent.click(btn);
  const renderedData = screen.getByText("updated data");
  expect(renderedData).toBeInTheDocument();
});

afterAll(() => {
  console.log("_____this runs before all tests_____t");
});

afterEach(() => {
  console.log("_____tthis runs after each test_____t");
});
