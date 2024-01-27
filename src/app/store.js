import { configureStore } from "@reduxjs/toolkit";

import hotelReducer from "../features/hotelSlice";
import filterReducer from "../features/filterSlice";
import categoryReducer from "../features/categorySlice";
import countryReducer from "../features/countrySlice";

import reduxLocalStorageMiddleware from "../reduxLocalStorageMiddleware";

const persistedState = localStorage.getItem("reduxState")
  ? JSON.parse(localStorage.getItem("reduxState"))
  : {};

export const store = configureStore({
  reducer: {
    hotels: hotelReducer,
    filter: filterReducer,
    categories: categoryReducer,
    countries: countryReducer,
  },
  preloadedState: persistedState,
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware(),
    reduxLocalStorageMiddleware,
  ],
});
