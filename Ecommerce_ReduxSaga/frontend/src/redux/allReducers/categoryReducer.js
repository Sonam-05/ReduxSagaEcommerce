// import { SET_CREATE_CATEGORY, SET_GET_ALL_CATEGORIES } from "./categoryConstant";

import { SET_CREATE_CATEGORY, SET_DELETE_CATEGORY, SET_GET_ALL_CATEGORIES, SET_GET_SINGLE_CATEGORY, SET_UPDATE_CATEGORY } from "../allConstants/categoryConstant";

export const createCategoryReducer = (data = null, action) => {
    switch (action.type) {
        case SET_CREATE_CATEGORY:
            // console.log(action);
            return action.data;
        default:
            return data;

    }
}

export const updateCategoryReducer = (data = null, action) => {
    switch (action.type) {
        case SET_UPDATE_CATEGORY:
            // console.log(action.data)
            return action.data;
        default:
            return data;
    }
}

export const getAllCategoriesReducer = (data = null, action) => {
    switch (action.type) {
        case SET_GET_ALL_CATEGORIES:
            // console.log(action.data);
            return action.data;
        default:
            return data;
    }
}

export const getSingleCategoryReducer = (data = null, action) => {
    switch (action.type) {
        case SET_GET_SINGLE_CATEGORY:
            // console.log(action);
            return action.data;
        default:
            return data;

    }
}