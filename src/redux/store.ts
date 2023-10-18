import { configureStore } from "@reduxjs/toolkit";
import { baseAPI } from "./app/baseApi";
// Or from '@reduxjs/toolkit/query/react'

export const store = configureStore({
  reducer: {
    [baseAPI.reducerPath]: baseAPI.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseAPI.middleware),
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
