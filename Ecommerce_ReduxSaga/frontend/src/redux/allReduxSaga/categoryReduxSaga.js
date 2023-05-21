import { takeEvery, put } from "redux-saga/effects";
import { CREATE_CATEGORY, DELETE_CATEGORY, GET_ALL_CATEGORIES, GET_SINGLE_CATEGORY, SET_CREATE_CATEGORY, SET_DELETE_CATEGORY, SET_GET_ALL_CATEGORIES, SET_GET_SINGLE_CATEGORY, SET_UPDATE_CATEGORY, UPDATE_CATEGORY } from "../allConstants/categoryConstant";
import axios from "axios";
import { message } from 'antd';

function* createCategorySaga(action) {
    let res = yield axios.post('/api/v1/category/create-category', action.payload);
    const data = res.data;
    // console.log(res.data);
    if (res.data?.success) {
        message.success(res.data.message)
        yield getAllCategoriesSaga();
    } else {
        message.error(res.data.message);
    }
    yield put({ type: SET_CREATE_CATEGORY, data });
}

function* updateCategorySaga(action) {
    const res = yield axios.put(`/api/v1/category/update-category/${action.payload.id}`, action.payload);
    const data = res.data;
    // console.log(data);
    if (res?.data.success) {
        message.success(res?.data.message)
        // yield getAllCategoriesSaga();
    } else {
        message.error(res?.data.message);
    }
    yield put({ type: SET_UPDATE_CATEGORY, data })
}

function* deleteCategorySaga(action) {
    const res = yield axios.delete(`/api/v1/category/delete-category/${action.payload}`);
    //    console.log(res);
    const data = res?.data;
    if (res.data?.success) {
        message.success(res.data?.message);
    } else {
        message.error(res.data?.message);
    }
    yield getAllCategoriesSaga();
    //    yield put({type : SET_DELETE_CATEGORY, data})
}

function* getSingleCategorySaga(action) {
    const res = yield axios.get(`/api/v1/category/get-single-category/${action.payload}`)
    // console.log(res);
    const data = res.data;
    yield put({ type: SET_GET_SINGLE_CATEGORY, data })
}

function* getAllCategoriesSaga() {
    try {
        const res = yield axios.get('/api/v1/category/get-all-categories');
        // console.log("Okay", res);
        const data = res.data;
        yield put({ type: SET_GET_ALL_CATEGORIES, data })
    } catch (error) {
        message.error('Something went wrong')
    }
}

function* categorySaga() {
    yield takeEvery(CREATE_CATEGORY, createCategorySaga)
    yield takeEvery(UPDATE_CATEGORY, updateCategorySaga)
    yield takeEvery(DELETE_CATEGORY, deleteCategorySaga)
    yield takeEvery(GET_SINGLE_CATEGORY, getSingleCategorySaga)
    yield takeEvery(GET_ALL_CATEGORIES, getAllCategoriesSaga)
}

export default categorySaga;