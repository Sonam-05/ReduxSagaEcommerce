import { takeEvery, put } from 'redux-saga/effects';
import { CREATE_TAG, DELETE_TAG, GET_ALL_TAGS, GET_SINGLE_TAG, SET_GET_ALL_TAGS, SET_GET_SINGLE_TAG, SET_UPDATE_TAG, UPDATE_TAG } from '../allConstants/tagConstant';
import { message } from 'antd';
import axios from 'axios';

function* createTagSagaFunc(action) {
    try {
        const res = yield axios.post('/api/v1/tag/create-tag', action.payload);
        // console.log(res);
        if (res?.data.success) {
            message.success(res.data?.message);
            yield getAllTagsSagaFunc();
        } else {
            message.error(res?.data.message);
        }
    } catch (error) {
        return message.error('Something went wrong');
    }
}

function* updateTagSagaFunc(action) {
    try {
        const res = yield axios.put(`/api/v1/tag/update-tag/${action.payload.id}`, action.payload);
        if (res?.data.success) {
            // console.log(res?.data);
            yield getAllTagsSagaFunc();
            message.success(res.data.message);
            yield put({ type: SET_UPDATE_TAG, payload: res.data });
        } else {
            message.error(res?.data.message);
        }
    } catch (error) {
        return message.error('Something went wrong');
    }
}

function* deleteTagSagaFunc(action) {
    try {
        const res = yield axios.delete(`/api/v1/tag/delete-tag/${action.payload}`);
        if (res?.data.success) {
            message.success(res.data.message);
            yield getAllTagsSagaFunc();
        } else {
            message.error(res?.data.message);
        }
    } catch (error) {
        return message.error('Something went wrong');
    }
}

function* getSingleTagSagaFunc(action) {
    try {
        const res = yield axios.get(`/api/v1/tag/get-single-tag/${action.payload}`);
        console.log(res?.data);
        if (res?.data.success) {
            message.success(res?.data.message);
            yield put({ type: SET_GET_SINGLE_TAG, payload: res.data })
        } else {
            message.error(res?.data.message);
        }
    } catch (error) {
        return message.error('Something went wrong');
    }
}

function* getAllTagsSagaFunc() {
    try {
        const res = yield axios.get('/api/v1/tag/get-all-tags');
        // console.log(res?.data);
        if (res?.data.success) {
            // message.success(res.data.message)
            yield put({ type: SET_GET_ALL_TAGS, payload: res.data })
        } else {
            message.error(res?.data.message)
        }
    } catch (error) {
        return message.error('Something went wrong');
    }
}

function* tagReduxSagaFunc() {
    yield takeEvery(CREATE_TAG, createTagSagaFunc);
    yield takeEvery(UPDATE_TAG, updateTagSagaFunc);
    yield takeEvery(DELETE_TAG, deleteTagSagaFunc);
    yield takeEvery(GET_SINGLE_TAG, getSingleTagSagaFunc);
    yield takeEvery(GET_ALL_TAGS, getAllTagsSagaFunc);
}

export default tagReduxSagaFunc;