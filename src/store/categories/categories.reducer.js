import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  categories: [],
  isLoading: false,
  error: null,
};

export const categoriesSlice = createSlice({
  name: "categories",
  initialState: INITIAL_STATE,
  reducers: {
    setCategoriesLoading(state, action) {
      state.isLoading = action.payload;
    },
    setCategories(state, action) {
      state.isLoading = false;
      state.categories = action.payload;
    },
    setCategoriesError(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { setCategoriesLoading, setCategories, setCategoriesError } =
  categoriesSlice.actions;

export default categoriesSlice.reducer;
