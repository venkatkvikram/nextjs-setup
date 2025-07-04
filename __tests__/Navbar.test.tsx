import { NavBar } from "@/components/organisms/Navbar";
import { render, screen } from "@testing-library/react";

describe("Navbar", () => {
  it("renders without crashing", () => {
    render(<NavBar />);
    expect(screen.getByRole("navigation")).toBeInTheDocument();
  });
});
