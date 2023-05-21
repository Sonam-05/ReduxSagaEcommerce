import { createSlice } from '@reduxjs/toolkit';

const loaderSlice = createSlice({
    name : "loader",
    initialState : false,
    reducers : {
        showLoading : (state , action) => ({
            state : true
        }),
        hideLoading : (state, action) => ({
            state : false
        })
    }
});

export const {showLoading, hideLoading} = loaderSlice.actions;
export default loaderSlice.reducer;