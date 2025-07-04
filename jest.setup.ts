import "@testing-library/jest-dom";
import React from "react";

// Add these to your jest.setup.ts file
jest.mock("next-intl", () => ({
  useLocale: () => "en",
  useTranslations: () => (key: string) => key,
  NextIntlClientProvider: ({ children }: { children: React.ReactNode }) => children,
}));

jest.mock("@/i18n/navigation", () => ({
  useRouter: () => ({
    replace: jest.fn(),
    push: jest.fn(),
  }),
  usePathname: () => "/test-path",
  Link: ({ children, href }: { children: React.ReactNode; href: string }) => {
    return React.createElement("a", { href }, children);
  },
}));

jest.mock("@/i18n/routing", () => ({
  locales: ["en", "ar"],
  defaultLocale: "en",
}));

jest.mock("@/config/navigation", () => ({
  navigation: [
    { path: "/home", labelKey: "home" },
    { path: "/about", labelKey: "about" },
    { path: "/contact", labelKey: "contact" },
  ],
}));
