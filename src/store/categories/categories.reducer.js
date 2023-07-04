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

// = (state = INITIAL_STATE, action = {}) => {
//   const { type, payload } = action;

//   switch (type) {
//     case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START:
//       return { ...state, isLoading: true };
//     case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS:
//       return { ...state, categories: payload, isLoading: false };
//     case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED:
//       return { ...state, error: payload, isLoading: false };
//     default:
//       return state;
//   }
// };
