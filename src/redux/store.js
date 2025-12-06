import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/authSlice";
import stacksReducer from "../features/stacksSlice";
import cardReducer from "../features/cardSlice"

export const store = configureStore({
  reducer: {
    auth: authReducer,
    stacks: stacksReducer,
    card: cardReducer,
  },
});
