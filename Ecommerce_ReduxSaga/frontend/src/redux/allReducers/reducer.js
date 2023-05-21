// import { SET_ADD_USER } from "./constant";

import { SET_ADD_USER } from "../allConstants/constant";

export const userReducer = (data = null, action) => {
    switch(action.type){
        case SET_ADD_USER : 
        return action.data;
        default :
        return data;
    }
}