import { useContext } from "react";

import CategoryPreview from "../../components/category-preview/CategoryPreview";

import { CategoriesContext } from "../../contexts/categories.context";

export default function CategoriesPreview() {
  const { categoriesMap } = useContext(CategoriesContext);

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
