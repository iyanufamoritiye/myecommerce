// src/app/store.js
import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../others/authSlice";
import itemReducer from "../others/itemSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    item: itemReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["auth/setUser"],
        ignoredPaths: ["auth.user"], // Adjust as necessary
      },
    }),
});
