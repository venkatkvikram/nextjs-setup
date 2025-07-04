import { ContactForm } from "@/components/molecules/ContactForm";
import { render, screen } from "@testing-library/react";

describe("ContactForm", () => {
  it("renders without crashing", () => {
    render(<ContactForm />);

    // Instead of looking for role="form", look for form elements
    expect(screen.getByRole("textbox", { name: "Name" })).toBeInTheDocument();
    expect(screen.getByRole("textbox", { name: "Message" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Send" })).toBeInTheDocument();
  });

  it("renders all form fields", () => {
    render(<ContactForm />);

    // Test that all expected form elements are present
    expect(screen.getByLabelText("Name")).toBeInTheDocument();
    expect(screen.getByLabelText("Message")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Send" })).toBeInTheDocument();
  });

  it("renders form with correct attributes", () => {
    render(<ContactForm />);

    // Query by tag name since form doesn't have implicit role
    const form = document.querySelector("form");
    expect(form).toBeInTheDocument();
    expect(form).toHaveClass("space-y-4");
  });
});
