import { createSlice } from "@reduxjs/toolkit";

const categorySlice = createSlice({
  name: "categories",
  initialState: {
    categories: [
      { name: "one star", id: 1 },
      { name: "two star", id: 2 },
      { name: "three star", id: 3 },
    ],
    filteredCategory: null,
  },
  reducers: {
    addCategory: (state, action) => {
      state.categories.push(action.payload);
    },
    updateCategory: (state, action) => {
      const { id, newName } = action.payload;
      const categoryToEdit = state.categories.find(
        (category) => category.id === id
      );
      if (categoryToEdit) {
        categoryToEdit.name = newName;
      }
    },
    deleteCategory: (state, action) => {
      state.categories = state.categories.filter(
        (category) => category.id !== action.payload
      );
    },
    filterCategory: (state, action) => {
      state.filteredCategory = action.payload;
    },
  },
});

export const { addCategory, updateCategory, deleteCategory, filterCategory } =
  categorySlice.actions;
export default categorySlice.reducer;
