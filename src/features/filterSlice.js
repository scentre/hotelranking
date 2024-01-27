import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: "filters",
  initialState: {
    categoryFilter: "", // Filter for hotel category
  },
  reducers: {
    setCategoryFilter: (state, action) => {
      state.categoryFilter = action.payload;
    },
  },
});

export const { setCategoryFilter } = filterSlice.actions;
export default filterSlice.reducer;
