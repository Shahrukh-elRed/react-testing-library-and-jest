import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

test("functional props testing", async () => {
  const testFunction = jest.fn();
  userEvent.setup();
  render(<App testFunction={testFunction} />);
  const btn = screen.getByRole("button");
  await userEvent.click(btn);
  expect(testFunction).toBeCalled();
});
