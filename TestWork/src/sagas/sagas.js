import { fork } from 'redux-saga/effects';

import followFetchFilms from './Films/saga';

const sagas = [
    ...followFetchFilms,
];

export default function* rootSaga() {
    yield sagas.map( saga => fork(saga) );
}