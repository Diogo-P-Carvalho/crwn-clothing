import { useSelector } from "react-redux";

import { selectCategoriesMap } from "../../store/categories/categories.selector";

import CategoryPreview from "../../components/category-preview/CategoryPreview";

export default function CategoriesPreview() {
  const categoriesMap = useSelector(selectCategoriesMap);

  return (
    <>
      {Object.keys(categoriesMap).map((category) => {
        const products = categoriesMap[category];
        return (
          <CategoryPreview
            key={category}
            title={category}
            products={products}
          />
        );
      })}
    </>
  );
}
