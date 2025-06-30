import { combineReducers } from "@reduxjs/toolkit";
import localeReducer from "./localeSlice";

const rootReducer = combineReducers({
  locale: localeReducer,
  //...reducers
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
