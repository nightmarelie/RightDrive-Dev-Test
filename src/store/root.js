import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query/react";
import { uiReducer } from "./ui";
import { openBlurApi } from "../utils";

export const store = configureStore({
  reducer: {
    ui: uiReducer,
    // Add the generated reducer as a specific top-level slice
    [openBlurApi.reducerPath]: openBlurApi.reducer,
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(openBlurApi.middleware),
});

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
setupListeners(store.dispatch);
