import { Textarea } from "@/components/atoms/TextArea";
import { render, screen } from "@testing-library/react";

describe("Textarea", () => {
  it("renders without crashing", () => {
    render(<Textarea />);
    expect(screen.getByRole("textbox")).toBeInTheDocument();
  });
});
