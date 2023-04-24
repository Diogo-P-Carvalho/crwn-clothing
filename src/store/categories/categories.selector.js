import { createSelector } from "reselect";

const selectCotegoriesReducer = (state) => state.categories;

const selectCategories = createSelector(
  [selectCotegoriesReducer],
  (categoriesSlice) => categoriesSlice.categories
);

export const selectCategoriesMap = createSelector(
  [selectCategories],
  (categories) =>
    categories.reduce((acc, category) => {
      const { title, items } = category;
      acc[title.toLowerCase()] = items;
      return acc;
    }, {})
);

export const selectCategoriesIsLoading = createSelector(
  [selectCotegoriesReducer],
  (categoriesSlice) => categoriesSlice.isLoading
);
