import { render } from "@testing-library/react";
import App from "./App";

test("snapshot for app component", () => {
  const view = render(<App />);
  expect(view).toMatchSnapshot();
});
