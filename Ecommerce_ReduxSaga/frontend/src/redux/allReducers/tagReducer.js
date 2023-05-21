import { SET_GET_ALL_TAGS, SET_GET_SINGLE_TAG, SET_UPDATE_TAG } from "../allConstants/tagConstant"

export const updateTagReducer = (data = null, action) => {
    switch (action.type) {
        case SET_UPDATE_TAG:
            return action.payload
        default:
            return data;
    }
}

export const getAllTagsReducer = (data = null, action) => {
    switch (action.type) {
        case SET_GET_ALL_TAGS:
            return action.payload;
        default:
            return data;
    }
}

export const getSingleTagReducer = (data = null, action) => {
    switch (action.type) {
        case SET_GET_SINGLE_TAG:
            return action.payload
        default:
            return data
    }
}