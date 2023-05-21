import { CREATE_CATEGORY, DELETE_CATEGORY, GET_SINGLE_CATEGORY, UPDATE_CATEGORY, GET_ALL_CATEGORIES } from "../allConstants/categoryConstant"

export const addCategory = (data) => {
    return {
        type : CREATE_CATEGORY,
        payload : data
    }
}

export const updateCategory = (data) => {
    return {
        type : UPDATE_CATEGORY,
        payload : data
    }
}

export const deleteCategory = (id) => {
    return {
        type : DELETE_CATEGORY,
        payload : id
    }
}

export const getSingleCategory = (id) => {
    return {
        type : GET_SINGLE_CATEGORY,
        payload : id
    }
}

export const getAllCategories = () => {
    return {
        type : GET_ALL_CATEGORIES
    }
}