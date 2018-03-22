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
    // const myHeaders = new Headers();
    // const myInit = { method: 'GET',
    //     headers: myHeaders,
    //     mode: 'no-cors',
    //     cache: 'default' };
    // return fetch('https://tender-mclean-00a2bd.netlify.com/ios/movies.json', myInit)
    //     .then( data => data.json() )
    //     .then( data => data)
    //     .catch(error => console.log(error) )


    // return fetch('../../films.js')
    //     .then( data => data.json() )
    //     .then( data => data)
    //     .catch(error => console.log(error) )

    let req = new XMLHttpRequest();
    req.open("GET", "../../films.js");
    req.addEventListener("load", transferComplete);
    req.send();


    function transferComplete(e){
        let JSONObject = JSON.parse(req.responseText);
        console.log(JSONObject['other_text']);
    }
};