import * as actionsTypes from './actionsTypes';

let initialState = {
    filmsList: [],
    isFetching: true,
    didInvalidate: false,
};

const films = ( state = initialState, action ) =>{
    switch (action.type){
        case actionsTypes.FETCHING_FILMS:
            return{
                ...state,
                isFetching: true,
                didInvalidate: false,
            };
        case actionsTypes.RECEIVE_FILMS_SUCCESS:
            return{
                ...state,
                films: action.films,
                isFetching: false,
                didInvalidate: false,
            };
        case actionsTypes.RECEIVE_FILMS_FAIL:
            return{
                ...state,
                isFetching: false,
                didInvalidate: true,
            };
        default:
            return state;
    }
};

export default films;