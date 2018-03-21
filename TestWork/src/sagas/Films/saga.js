import {  takeLatest, put, call } from 'redux-saga/effects';

import * as actions from './actions';

function* fetchFilms () {
    try {
        const films = yield call(actions.fetchDataFilms);
        yield  put(actions.receiveFilmsSuccess(films));
    } catch (e) {
        yield put(actions.receiveFilmsFail());
    }
}

function* followFetchFilms() {
    yield  takeLatest('FETCHING_FILMS', fetchFilms)
}

export default [followFetchFilms]