import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { locales } from "../i18n/routing";

interface LocaleState {
  value: string;
}

const initialState: LocaleState = {
  value: locales[0],
};

const localeSlice = createSlice({
  name: "locale",
  initialState,
  reducers: {
    setLocale(state, action: PayloadAction<string>) {
      state.value = action.payload;
    },
  },
});

export const { setLocale } = localeSlice.actions;
export default localeSlice.reducer;
