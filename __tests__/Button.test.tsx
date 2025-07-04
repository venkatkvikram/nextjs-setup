import { Button } from "@/components/atoms/Button";
import { render, screen } from "@testing-library/react";

describe("Button", () => {
  it("renders the button with children", () => {
    render(<Button>Click me</Button>);
    expect(screen.getByRole("button", { name: /click me/i })).toBeInTheDocument();
  });
});
