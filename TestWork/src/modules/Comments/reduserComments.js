import * as actionsTypes from './actionsTypes';

let initialState = {
    commentsList: [],
};

const comments = ( state = initialState, action ) =>{
    switch (action.type){
        case actionsTypes.ADD_NEW_COMMDENT:
            return{
                ...state,
                commentsList: [
                    ...state.commentsList,
                    {
                        value: action.commentText,
                        id: action.id,
                    }
                ]
            };
        default:
            return state;
    }
};

export default comments;