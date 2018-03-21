import * as actionsTypes from './actionsTypes';

export const receiveFilmsSuccess = (films) =>({
    type: actionsTypes.RECEIVE_FILMS_SUCCESS,
    films,
});

export const receiveFilmsFail = () =>({
    type: actionsTypes.RECEIVE_FILMS_FAIL,
});

export const fetchingFilms = () => ({
    type: actionsTypes.FETCHING_FILMS,
});

export const fetchDataFilms = () =>{
    return fetch('https://tender-mclean-00a2bd.netlify.com/ios/movies.json')
        .then( data => data.json() )
        .then( data => data)
        .catch(error => console.log(error) )
};