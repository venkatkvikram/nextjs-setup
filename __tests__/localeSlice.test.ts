import localeSlice, { setLocale } from "../src/store/localeSlice";

describe("localeSlice", () => {
  it("should be defined", () => {
    expect(localeSlice).toBeDefined();
  });

  it("should handle setLocale action", () => {
    const initialState = { value: "en" };
    const action = setLocale("ar");
    const newState = localeSlice(initialState, action);
    expect(newState.value).toBe("ar");
  });
});
