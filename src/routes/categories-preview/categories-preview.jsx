import { useContext, Fragment } from "react";
import CategoryPreview from "../../components/category-preview/category-preview";
import { useSelector } from "react-redux";
import { selectCategoriesMap } from "../../store/categories/category.selector";

function CategoriesPreview() {
  const categoriesMap = useSelector(selectCategoriesMap);
  return (
    <Fragment>
      {
        //  Object.keys returns ["hats","shirts"] etc
        Object.keys(categoriesMap).map((title) => {
          const products = categoriesMap[title];
          return (
            <CategoryPreview key={title} title={title} products={products} />
          );
        })
      }
    </Fragment>
  );
}

export default CategoriesPreview;
