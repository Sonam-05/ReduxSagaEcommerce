import { CREATE_TAG, DELETE_TAG, GET_ALL_TAGS, GET_SINGLE_TAG, UPDATE_TAG } from "../allConstants/tagConstant"

export const createTag = (data) => {
    console.log(data);
    return {
        type: CREATE_TAG,
        payload: data
    }
}

export const updateTag = (data) => {
    return {
        type: UPDATE_TAG,
        payload: data
    }
}

export const deleteTag = (id) => {
    return {
        type: DELETE_TAG,
        payload: id
    }
}

export const getSingleTag = (slug) => {
    return {
        type: GET_SINGLE_TAG,
        payload: slug
    }
}

export const getAllTags = () => {
    return {
        type: GET_ALL_TAGS
    }
}