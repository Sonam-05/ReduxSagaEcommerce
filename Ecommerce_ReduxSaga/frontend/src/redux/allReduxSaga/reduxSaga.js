import { takeEvery, put } from 'redux-saga/effects';
// import { ADD_USER, SET_ADD_USER } from "./constant";
import axios from 'axios';
import { ADD_USER, SET_ADD_USER } from '../allConstants/constant';

function* addUserSaga(action) {
    // let data = yield fetch('/api/v1/user/register', {
    //     method: "POST",
    //     headers : {"Content-Type" : "/application/json"},
    //     body : action.payload
    // });
    let res = yield axios.post('/api/v1/user/register', action.payload);
    let data = res.data;
    // data = yield data.json();
    // console.log(data);
    yield put({ type: SET_ADD_USER, data })
}

function* userSaga() {
    yield takeEvery(ADD_USER, addUserSaga)
}

export default userSaga;