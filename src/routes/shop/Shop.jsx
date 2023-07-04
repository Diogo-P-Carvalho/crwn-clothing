import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";

import {
  setCategoriesLoading,
  setCategories,
  setCategoriesError,
} from "../../store/categories/categories.reducer";

import CategoriesPreview from "../categories-preview/CategoriesPreview";
import Category from "../category/Category";
import { getCategoriesAndDocuments } from "../../utils/firebase/firebase";

export default function Shop() {
  const dispatch = useDispatch();

  useEffect(() => {
    const getCategoriesMap = async () => {
      dispatch(setCategoriesLoading(true));
      try {
        const categoriesArray = await getCategoriesAndDocuments("categories");
        dispatch(setCategories(categoriesArray));
      } catch (error) {
        dispatch(setCategoriesError(error));
      }
    };

    getCategoriesMap();
  }, [dispatch]);

  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
}
