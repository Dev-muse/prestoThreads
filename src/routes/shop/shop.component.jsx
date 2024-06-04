import { Routes, Route } from "react-router-dom";
import CategoriesPreview from "../categories-preview/categories-preview";
import Category from "../category/category.component";
import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";
import setCategoriesMap from "../../store/categories/category.action";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
// import './shop.styles.jsx';

function Shop() {
  const dispatch = useDispatch();
  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocuments();

      dispatch(setCategoriesMap(categoryMap));
    };
    getCategoriesMap();
  }, []);

  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      {/* :category is special dynamic string for Category component */}
      <Route path=":category" element={<Category />} />
    </Routes>
  );
}

export default Shop;
