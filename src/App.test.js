import { prettyDOM, render, screen, logRoles } from "@testing-library/react";
import App from "./App";

test("testing component", () => {
  const { container, debug } = render(<App />);
  // const el = screen.getByText("Heading 2");
  // expect(el).toBeInTheDocument();
  // console.log(prettyDOM(container));
  // debug();
  logRoles(container);
});
