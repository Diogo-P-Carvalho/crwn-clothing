import { createSelector } from "reselect";

const selecteCotegoriesReducer = (state) => state.categories;

const selectCategories = createSelector(
  [selecteCotegoriesReducer],
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
