import AboutPage from "@/app/[locale]/about/page";
import { render, screen } from "@testing-library/react";

// Mock next-intl
jest.mock("next-intl", () => ({
  useTranslations: () => (key: string) => key,
}));

// Mock Next.js Link component
jest.mock("next/link", () => {
  return function MockedLink({
    children,
    href,
    className,
  }: {
    children: React.ReactNode;
    href: string;
    className?: string;
  }) {
    return (
      <a href={href} className={className}>
        {children}
      </a>
    );
  };
});

describe("About Page", () => {
  it("renders without crashing", () => {
    render(<AboutPage />);

    // Test for the translated title (will return the key since we're mocking)
    expect(screen.getByText("title")).toBeInTheDocument();

    // Test for the Home link
    expect(screen.getByText("Home")).toBeInTheDocument();
  });
});
