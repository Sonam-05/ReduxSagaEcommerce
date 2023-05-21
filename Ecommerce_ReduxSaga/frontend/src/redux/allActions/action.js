import { ADD_USER } from "../allConstants/constant"

export const addUser = (data) => {
    return {
        type : ADD_USER,
        payload : data
    }
}