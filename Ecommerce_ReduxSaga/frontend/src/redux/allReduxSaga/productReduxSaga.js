import { takeEvery, put } from "redux-saga/effects";
import axios from "axios";
import { ADD_PRODUCT, DELETE_PRODUCT, GET_ALL_PRODUCTS, GET_SINGLE_PRODUCT, SET_ADD_PRODUCT, SET_GET_SINGLE_PRODUCT, SET_UPDATE_PRODUCT, UPDATE_PRODUCT, SET_GET_ALL_PRODUCTS } from "../allConstants/productConstant";
import { message } from "antd";
// import { Navigate } from "react-router-dom";

function* addProductSaga(action) {
    try {
        const res = yield axios.post(`/api/v1/product/create-product`, { ...action.payload });
        const data = res?.data;
        if (res?.data.success) {
            // <Navigate to={'/admin/products'} />
            message.success(res.data.message);
            yield put({ type: SET_ADD_PRODUCT, payload: data });
        } else {
            message.error(res?.data.message)
        }
    } catch (error) {
        message.error('Something went wrong');
    }
}

function* updateProductSaga(action) {
    try {
        const res = yield axios.put(`/api/v1/product/update-product/${action.payload.id}`, { ...action.payload });
        // const data = res.data;
        if (res?.data.success) {
            // console.log(res?.data);
            message.success(res.data.message);
            yield getAllProductsSaga();
        } else {
            message.error(res?.data.message);
        }
    } catch (error) {
        message.error('Something went wrong');
    }
}

function* deleteProductSaga(action) {
    try {
        const res = yield axios.delete(`/api/v1/product/delete-product/${action.payload}`);
        if (res?.data.success) {
            message.success(res.data.message);
            yield getAllProductsSaga();
        } else {
            message.error(res?.data.message);
        }
    } catch (error) {
        message.error('Something went wrong');
    }
}

function* getAllProductsSaga() {
    try {
        const res = yield axios.get('/api/v1/product/get-all-products');
        const data = res?.data;
        if (res?.data.success) {
            yield put({ type: SET_GET_ALL_PRODUCTS, payload: data })
        } else {
            message.error(res?.data.message);
        }
    } catch (error) {
        message.error('Something went wrong');
    }
}

function* getSingleProductSaga(action) {
    try {
        const res = yield axios.get(`/api/v1/product/get-single-product/${action.payload}`);
        const data = res.data;
        yield put({ type: SET_GET_SINGLE_PRODUCT, payload: data });
    } catch (error) {
        message.error('Something went wrong');
    }
}

function* productSaga() {
    yield takeEvery(ADD_PRODUCT, addProductSaga)
    yield takeEvery(UPDATE_PRODUCT, updateProductSaga)
    yield takeEvery(DELETE_PRODUCT, deleteProductSaga)
    yield takeEvery(GET_ALL_PRODUCTS, getAllProductsSaga)
    yield takeEvery(GET_SINGLE_PRODUCT, getSingleProductSaga)
}

export default productSaga;