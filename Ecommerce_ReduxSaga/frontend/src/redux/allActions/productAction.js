import { ADD_PRODUCT, DELETE_PRODUCT, GET_ALL_PRODUCTS, GET_SINGLE_PRODUCT, UPDATE_PRODUCT } from "../allConstants/productConstant"

export const addProduct = (data) => {
    return {
        type : ADD_PRODUCT,
        payload : data
    }
} 

export const updateProduct = (data) => {
    // console.log(data);
    return {
        type : UPDATE_PRODUCT,
        payload : data
    }
}

export const deleteProduct = (id) => {
    return {
        type : DELETE_PRODUCT,
        payload : id
    }
}

export const getAllProducts = () => {
    return {
        type : GET_ALL_PRODUCTS
    }
}

export const getSingleProduct = (id) => {
    return {
        type : GET_SINGLE_PRODUCT,
        payload : id
    }
}

