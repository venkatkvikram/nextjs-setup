import React from "react";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { LocaleSwitcher } from "../src/components/organisms/LocaleSwitcher";
import localeSlice from "../src/store/localeSlice";

// Mock the child component
jest.mock("../src/components/molecules/LocaleSwitcherSelect", () => ({
  LocaleSwitcherSelect: ({ locale }: { locale: string }) => (
    <div data-testid="locale-switcher-select">Current: {locale}</div>
  ),
}));

const store = configureStore({
  reducer: { locale: localeSlice },
  preloadedState: { locale: { value: "en" } },
});

describe("LocaleSwitcher", () => {
  it("renders successfully", () => {
    render(
      <Provider store={store}>
        <LocaleSwitcher />
      </Provider>
    );

    expect(screen.getByText("Language:")).toBeInTheDocument();
  });
});
