import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";

import { getCategoriesAndDocuments } from "../../utils/firebase/firebase";
import { setCategories } from "../../store/categories/categories.action";

import CategoriesPreview from "../categories-preview/CategoriesPreview";
import Category from "../category/Category";

export default function Shop() {
  const dispatch = useDispatch();

  useEffect(() => {
    const getCotegoriesMap = async () => {
      const categories = await getCategoriesAndDocuments();
      dispatch(setCategories(categories));
    };

    getCotegoriesMap();
  }, [dispatch]);

  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
}
