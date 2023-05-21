// import { SET_ADD_PRODUCT, SET_GET_ALL_PRODUCTS, SET_GET_SINGLE_PRODUCT, SET_UPDATE_PRODUCT } from "./productConstant";

import { SET_ADD_PRODUCT, SET_GET_ALL_PRODUCTS, SET_GET_SINGLE_PRODUCT, SET_UPDATE_PRODUCT } from "../allConstants/productConstant";

export const createProductReducer = (data = null, action) => {
    switch (action.type) {
        case SET_ADD_PRODUCT:
            return action.payload;
        default:
            return data;
    }
}

export const allProductsReducer = (data = null, action) => {
    switch (action.type) {
        case SET_GET_ALL_PRODUCTS:
            return action.payload;
        default:
            return data;
    }
}

export const getSingleProductReducer = (data = null, action) => {
    switch (action.type) {
        case SET_GET_SINGLE_PRODUCT:
            return action.payload;
        default:
            return data;
    }
}

export const updateProductReducer = (data = null, action) => {
    switch(action.type){
        case SET_UPDATE_PRODUCT:
            return action.data;
        default:
            return data;
    }
}

