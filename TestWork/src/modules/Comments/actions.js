import * as actionsTypes from './actionsTypes'

export const addNewComment = (commentText, id) =>({
    type: actionsTypes.ADD_NEW_COMMDENT,
    commentText,
    id,
})