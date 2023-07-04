import { useSelector } from "react-redux";

import {
  selectCategoriesMap,
  selectCategoriesIsLoading,
} from "../../store/categories/categories.selector";

import CategoryPreview from "../../components/category-preview/CategoryPreview";
import Spinner from "../../components/spinner/Spinner";

export default function CategoriesPreview() {
  const categoriesMap = useSelector(selectCategoriesMap);
  const isLoading = useSelector(selectCategoriesIsLoading);

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        Object.keys(categoriesMap).map((category) => {
          const products = categoriesMap[category];
          return (
            <CategoryPreview
              key={category}
              title={category}
              products={products}
            />
          );
        })
      )}
    </>
  );
}
