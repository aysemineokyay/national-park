import { configureStore } from "@reduxjs/toolkit";
import { nationalparkApi } from "./services/nationalparkApi/nationalparkApi";

export const store = configureStore({
  reducer: {
    [nationalparkApi.reducerPath]: nationalparkApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(nationalparkApi.middleware),
});
