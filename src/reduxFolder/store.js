import { configureStore } from "@reduxjs/toolkit";
import userState from "./userState";

export const store = configureStore({
  reducer: { userState },
});
