import { configureStore } from "@reduxjs/toolkit";

import { articleApi } from "./article";

export const store = configureStore({
    reducer: {
        [articleApi.reducerPath]: articleApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(articleApi.middleware),
});

// Ye Basic Setup Hai Redux Toolkit Ka, Isko smjhne ki zrurt nhi hai
// A message from Shadow Walkerz...
