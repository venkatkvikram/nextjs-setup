import { Input } from "@/components/atoms/Input";
import { render, screen } from "@testing-library/react";

describe("Input", () => {
  it("renders without crashing", () => {
    render(<Input />);
    expect(screen.getByRole("textbox")).toBeInTheDocument();
  });
});
