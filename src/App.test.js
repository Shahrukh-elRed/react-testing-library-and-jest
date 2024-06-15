import { render, screen } from "@testing-library/react";
import App from "./App";

// test("image with alt text", () => {
//   render(<App />);
//   const image = screen.getByAltText("test img");
//   expect(image).toBeInTheDocument();
// });

test("image with alt text", () => {
  render(<App />);
  const images = screen.getAllByAltText("test img");
  for (let i = 0; i < images.length; i++) {
    expect(images[i]).toBeInTheDocument();
  }
});
