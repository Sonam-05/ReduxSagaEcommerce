import { combineReducers } from "redux";

import { userReducer } from './allReducers/reducer'
import { createProductReducer, allProductsReducer, getSingleProductReducer, updateProductReducer } from './allReducers/productReducer'
import { createCategoryReducer, getAllCategoriesReducer, getSingleCategoryReducer, updateCategoryReducer } from './allReducers/categoryReducer'
import { updateTagReducer, getAllTagsReducer, getSingleTagReducer } from "./allReducers/tagReducer";
import loaderSlice from "./features/loaderSlice";

export default combineReducers({ userReducer, createProductReducer, allProductsReducer, getSingleProductReducer, updateProductReducer, createCategoryReducer, getAllCategoriesReducer, getSingleCategoryReducer, updateCategoryReducer, updateTagReducer, getAllTagsReducer, getSingleTagReducer, loaderSlice });