import { createAction } from "../../utils/reducer/reduce.utils";

import { CATEGORIES_ACTION_TYPES } from "./category.types";

// create action takes type and payload to store data
const setCategoriesMap = (categoriesMap) =>
  createAction(CATEGORIES_ACTION_TYPES.SET_CATEGORIES_MAP, categoriesMap);

export default setCategoriesMap;
